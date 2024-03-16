/* eslint-disable no-empty */
/* eslint-disable no-useless-catch */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { NotAuthenticated, FeathersError } = require("@feathersjs/errors");
const { Service } = require("feathers-sequelize");
const Razorpay = require("razorpay");
const moment = require("moment");
const api_password = "peppermint_";
const nodemailer = require("nodemailer");
const QRCode = require("qrcode");
const { Storage } = require("@google-cloud/storage");
const getHTML = require("./getHTML");

async function sendEmail(auth, url, data, qr_code) {
    // Configure nodemailer with your email service details
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth,
    });
    const mailOptions = {
        from: "anhad@iitjammu.ac.in",
        to: data.email,
        subject: "Ticket Confirmation",
        text: "Please find the link and QR code below",
        html: getHTML(url, data, qr_code),
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.response);
    } catch (err) {
        console.error("Error sending email:", err);
    }
}

async function generateQRCode(url, data, app) {
    try {
        const fileName = `qr_${data.paymentIdRazorpay}.jpeg`;
        const encodedStream = (await QRCode.toDataURL(url)).split("base64,")[1];
        if (encodedStream) {
            const decodedStream = Buffer.from(encodedStream, "base64");
            const googleCloudStorageConfig = app.get("google-cloud-storage");
            const storage = new Storage({
                credentials: googleCloudStorageConfig.secret,
            });
            const bucket = storage.bucket(googleCloudStorageConfig.bucket);
            await bucket.makePublic();
            const file = bucket.file(fileName);
            try {
                const writeStream = file.createWriteStream({
                    metadata: {
                        contentType: "image/jpeg",
                    },
                });

                writeStream.write(decodedStream);
                writeStream.end();
                while (!(await writeStream.writableEnded)) {}
                return file.publicUrl();
            } catch (err) {
                throw err;
            }
        }
    } catch (err) {
        console.error("Error generating QR code:", err);
    }
}

exports.Payments = class Payments extends Service {
    constructor(options, app) {
        super(options);
        this.app = app;
    }
    async create(data, params) {
        const { name, contact, email, studentIdImage, studentId } = data;
        const amount = 60000;

        if (!name || !contact || !email || !studentIdImage || !studentId) {
            throw new Error(
                "Missing required fields: name, contact, email, studentIdImage or student",
            );
        }

        var instance = new Razorpay({
            key_id: this.app.get("rzp_key_id"),
            key_secret: this.app.get("rzp_key_secret"),
        });
        const date = new Date();

        var options = {
            amount: amount, // amount in the smallest currency unit
            currency: "INR",
            receipt: email,
        };

        const orderId = (await instance.orders.create(options)).id; // Await the order creation
        if (!orderId) {
            throw new Error("Failed to create order. Please try again later.");
        }

        const paymentStatus = false;
        const paymentData = {
            orderId,
            amount,
            name,
            email,
            contact,
            paymentStatus,
            studentIdImage,
            studentId,
        };

        try {
            const res = await super.create(paymentData, params); // Save payment data
            return res;
        } catch (error) {
            throw new Error(`Failed to create payment: ${error.message}`);
        }
    }

    async patch(id, data, params) {
        if (data.checkIn) {
            if (data.pass !== api_password + new Date().getDate().toString()) {
                return NotAuthenticated("Unauthorized Access Attempt");
            }
            const fetchedData = (await super.find({
                query: {
                    paymentIdRazorpay: data.paymentIdRazorpay,
                },
            })).data[0];
            console.log(fetchedData);
            if (!fetchedData) {
                return FeathersError("No Data Found");
            }
            const lastCheckIn = fetchedData.lastCheckIn;
            const today = new Date().toISOString().slice(0, 10);
            if (
                lastCheckIn == null ||
                moment(today).isAfter(moment(lastCheckIn))
            ) {
                fetchedData.lastCheckIn = today;
                await super.patch(fetchedData.id, fetchedData);
                return {
                    code: 200,
                    message: "CheckIn Successful",
                    data: {
                        name: fetchedData.name,
                        studentId: fetchedData.studentIdImage,
                    },
                };
            }
            return FeathersError(
                `Invalid CheckIn : Last CheckIn on ${fetchedData.lastCheckIn}`,
            );
        }
        if (!data.razorpay_order_id) {
            throw new Error("Missing required field: order_id");
        }
        if (!data.razorpay_payment_id || !data.razorpay_signature) {
            throw new Error("Missing required field: payment_id");
        }

        const queryOrderId = data.razorpay_order_id;
        let existingData = await super.find({
            query: {
                $or: [{ orderId: queryOrderId }],
            },
        });
        if (
            !existingData ||
            !existingData.data ||
            existingData.data.length === 0
        ) {
            return {
                code: 400, // Not found
                message: `Data with orderId "${queryOrderId}" not found`,
            };
        }
        let updatedData = existingData.data[0];
        var instance = new Razorpay({
            key_id: this.app.get("rzp_key_id"),
            key_secret: this.app.get("rzp_key_secret"),
        });

        var {
            validatePaymentVerification,
            validateWebhookSignature,
        } = require("../../../node_modules/razorpay/dist/utils/razorpay-utils");
        if (
            validatePaymentVerification(
                {
                    order_id: updatedData.orderId,
                    payment_id: data.razorpay_payment_id,
                },
                data.razorpay_signature,
                this.app.get("rzp_key_secret"),
            )
        ) {
            updatedData.paymentIdRazorpay = data.razorpay_payment_id;
            updatedData.paymentStatus = true;
            await super.patch(updatedData.id, updatedData); // Update payment data
        } else {
            await super.delete(updatedData.remove);
            return {
                code: 400, // Not found
                message: "Inavlid Payment Details",
            };
        }
        try {
            const QRCode = await generateQRCode(
                `${this.app.get("ticket_base_url")}/${
                    data.razorpay_payment_id
                }`,
                updatedData,
                this.app,
            );
            // send Confirmation Email
            await sendEmail(
                this.app.get("nodemailer"),
                `${this.app.get("ticket_base_url")}/${
                    data.razorpay_payment_id
                }`,
                updatedData,
                QRCode,
            );
        } catch (error) {
            console.error("Error sending email:", error);
            throw error;
        }

        return {
            code: 200,
            message: "Payment Successfull",
        };
    }
};
