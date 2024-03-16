module.exports = (url, data, qr_code) => {
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Ticket Confirmation</title>
        </head>
        <body style="background: #181818; font-family: monospace; color: white">
            <div style="width: 100%; display: flex; justify-content: center">
                <div style="font-size: xx-large">
                    <img
                        style="height: 64px; width: 64px; object-fit: contain"
                        src="https://storage.googleapis.com/anhad2024/favicon.png"
                        alt="${data.name}"
                    >
                </div>
            </div>
            <div
                style="
                    width: 100%;
                    margin-bottom: 30px;
                    margin-left: 20px;
                "
            >
                <a href="${url}" style="font-size: x-large">Open Ticket</a>
            </div>
            <div
                style="
                    width: 100%;
                    margin-left: 20px;
                    font-size: large;
                "
            >
                Name: ${data.name}
                <br>
                Student ID: ${data.studentId}
                <br>
                Contact No.: ${data.contact}
                <br>
                Email: ${data.email}
                <br>
                Transcation ID: ${data.paymentIdRazorpay}
            </div>
            <div
                style="
                    width: 100%;
                    margin-top: 30px;
                    margin-left:20px
                "
            >
                <div style="font-size: xx-large">
                    <img
                        src="${qr_code}"
                        style="
                            height: 300px;
                            width: 300px;
                            object-fit: contain;
                            border-radius: 10px;
                        "
                    />
                </div>
            </div>
        </body>
    </html>
    `;
};
