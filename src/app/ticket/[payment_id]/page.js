/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import axios from "axios";
import logo from "../../../../public/favicon.png";
import "./style.css";

export default function Page(params) {
    const { payment_id } = params.params;
    const [ticket, setTicket] = useState({});
    const [isCheckedIn, setCheckedIn] = useState(false);
    const [isCheckingIn, setCheckingIn] = useState(false);
    function handleCheckIn() {
        setCheckingIn(true);
        if (isCheckedIn) {
            return;
        }
        const password = prompt("Password");
        if (password) {
            axios
                .patch(process.env.NEXT_PUBLIC_BACKEND_URL + "/payments", {
                    paymentIdRazorpay: payment_id,
                    checkIn: true,
                    pass: password,
                })
                .then((res) => {
                    setCheckedIn(true);
                    setCheckingIn(false);
                })
                .catch((err) => {
                    alert(err.message);
                    setCheckingIn(false);
                });
        } else {
            setCheckingIn(false);
        }
    }
    function printDocument() {
        document.getElementById("checkIn").style.display = "none";
        var printContents = document.getElementById("ticket").innerHTML;
        document.body.innerHTML = printContents;
        setTimeout(() => {
            window.print();
            window.location.reload();
        }, 5000);
    }
    useEffect(() => {
        if (!payment_id) {
            window.open("/book-ticket", "_self");
            return;
        }
        axios
            .get(process.env.NEXT_PUBLIC_BACKEND_URL + "/payments", {
                params: {
                    paymentIdRazorpay: payment_id,
                },
            })
            .then((res) => {
                const ticket = res.data.data[0];
                const lastCheckIn = new Date(ticket.lastCheckIn)
                    .toISOString()
                    .slice(0, 10);
                const today = new Date().toISOString().slice(0, 10);
                if (lastCheckIn >= today) {
                    setCheckedIn(true);
                } else {
                    setCheckedIn(false);
                }
                setTicket(ticket);
            })
            .catch((err) => {
                window.open("/book-ticket", "_self");
            });
    }, []);
    return (
        <div className="w-full">
            <div
                id="ticket"
                className="w-full p-10 flex justify-center flex-wrap"
            >
                <span className="w-full flex lg:pl-32 lg:pr-32 justify-between flex-wrap">
                    <span className="flex">
                        <span>
                            <img
                                className="h-32 w-auto object-contain"
                                src={logo.src}
                                alt="Anhad 2024"
                            />
                        </span>
                        <span className="text-musicly text-xl h-32 flex justify-center items-center">
                            Anhad
                        </span>
                    </span>
                    <span
                        className="flex lg:flex-col flex-row justify-center lg:h-32 w-full lg:w-fit"
                        id="checkIn"
                    >
                        <span
                            onClick={handleCheckIn}
                            className={`z-10 w-fit cursor-pointer font-mono border-cyan-600 border-2 p-2 pr-4 pl-4 rounded-full hover:scale-105 transition-all duration-300 ${
                                !isCheckedIn
                                    ? "hover:bg-cyan-200 hover:bg-opacity-25"
                                    : "bg-cyan-200 bg-opacity-25"
                            }`}
                        >
                            {isCheckedIn
                                ? "Checked-in"
                                : isCheckingIn
                                ? "Checking in..."
                                : "Check-in"}
                        </span>
                    </span>
                </span>
                <span
                    onClick={() => {
                        window.open(ticket.studentIdImage, "_blank");
                    }}
                    className="w-full lg:w-1/2 p-5 cursor-pointer z-10 rounded hover:scale-105 transition-all duration-300"
                >
                    <img
                        src={ticket.studentIdImage}
                        alt={ticket.name}
                        className="w-full h-72 object-contain"
                    />
                </span>
                <span className="w-full flex flex-wrap font-mono lg:w-1/2 pt-4 lg:p-16 lg:pl-0 text-base lg:text-xl">
                    <span className="w-2/5 lg:w-1/5 flex justify-end">
                        Name:
                    </span>
                    <span className="w-3/5 lg:w-4/5 flex justify-start pl-4 overflow-hidden text-ellipsis">
                        {ticket.name ? ticket.name : "Not available"}
                    </span>
                    <span className="w-2/5 lg:w-1/5 flex justify-end">
                        Student ID:
                    </span>
                    <span className="w-3/5 lg:w-4/5 flex justify-start pl-4 overflow-hidden text-ellipsis">
                        {ticket.studentId ? ticket.studentId : "Not available"}
                    </span>
                    <span className="w-2/5 lg:w-1/5 flex justify-end">
                        Email:
                    </span>
                    <span className="w-3/5 lg:w-4/5 flex justify-start pl-4 overflow-hidden text-ellipsis">
                        {ticket.email ? ticket.email : "Not available"}
                    </span>
                    <span className="w-2/5 lg:w-1/5 flex justify-end">
                        Contact No.:
                    </span>
                    <span className="w-3/5 lg:w-4/5 flex justify-start pl-4 text-nowrap text-ellipsis">
                        {ticket.contact ? ticket.contact : "Not available"}
                    </span>
                </span>
                <span className="w-full flex justify-center mt-8">
                    <span className="rounded-lg border border-stone-900 p-2 bg-white">
                        <QRCode
                            className="rounded-lg"
                            fgColor="#57534e"
                            bgColor="#ffffff"
                            size={256}
                            value={`https://anhad.ac/ticket/${payment_id}`}
                            viewBox={`0 0 256 256`}
                        />
                    </span>
                </span>
            </div>
            <div className="w-full p-4 justify-center hidden lg:flex">
                <span
                    onClick={printDocument}
                    className="text-lg lg:text-2xl font-mono rounded-full p-4 pl-8 pr-8 border border-cyan-700 z-10 cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-cyan-200 hover:bg-opacity-25"
                >
                    Download
                </span>
            </div>
        </div>
    );
}
