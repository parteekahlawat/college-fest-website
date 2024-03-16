/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter } from "next/font/google";
import "./globals.css";
import React, { useEffect, useState } from "react";
import anime from "animejs";
import { Mutex } from "async-mutex";
import logo from "../../public/favicon.png";
import icon from "../../public/favicon.ico";

const inter = Inter({ subsets: ["latin"] });
const sponsors = [
    {
        name: "Sponsor 1",
        url: "https://example.com",
        logo: logo,
    },
    {
        name: "Sponsor 1",
        url: "https://example.com",
        logo: logo,
    },

    {
        name: "Sponsor 1",
        url: "https://example.com",
        logo: logo,
    },
    {
        name: "Sponsor 1",
        url: "https://example.com",
        logo: logo,
    },
    {
        name: "Sponsor 1",
        url: "https://example.com",
        logo: logo,
    },
    {
        name: "Sponsor 1",
        url: "https://example.com",
        logo: logo,
    },

    {
        name: "Sponsor 1",
        url: "https://example.com",
        logo: logo,
    },
    {
        name: "Sponsor 1",
        url: "https://example.com",
        logo: logo,
    },
    {
        name: "Sponsor 1",
        url: "https://example.com",
        logo: logo,
    },
    {
        name: "Sponsor 1",
        url: "https://example.com",
        logo: logo,
    },
];
export default function RootLayout({ children }) {
    const [bias, setBias] = useState(0);
    const [clientX, setClientX] = useState(0);
    const [clientY, setClientY] = useState(0);
    const [isLoading, setLoading] = useState(true);
    const [distance, setDistance] = useState(0);
    useEffect(() => {
        anime({
            targets: "#mouse-follower-dot",
            marginLeft: clientX - 14,
            marginTop: clientY - 14 + bias,
            duration: 50,
            easing: "easeOutBack",
        });
        anime({
            targets: "#mouse-follower-wrapper",
            marginLeft: clientX - 16,
            marginTop: clientY - 16 + bias,
            duration: 150,
            easing: "easeOutBack",
        });
    }, [bias, clientX, clientY]);
    useEffect(() => {
        setLoading(true);
        const mutex = new Mutex();
        window.onmousemove = (e) => {
            mutex.runExclusive(() => {
                setClientX(e.clientX);
                setClientY(e.clientY);
            });
        };
        window.onscroll = () => {
            mutex.runExclusive(() => {
                setBias(parseInt(window.scrollY));
            });
        };
        let direction = 1,
            dist = 0,
            offset = document.querySelector(".swipe-container").offsetWidth;
        const interval = setInterval(() => {
            const next = dist + direction * 300;
            if (next >= (sponsors.length - 2) * 300 - offset || next <= 0) {
                direction *= -1;
            }
            dist = next;
            setDistance(dist);
        }, 5000);
        setBias(parseInt(window.scrollY));
        return () => clearInterval(interval);
    }, []);
    setTimeout(() => setLoading(false), 1000);
    return (
        <html lang="en">
            <head>
                <title>Anhad</title>
                <meta
                    name="description"
                    content="Anhad - Indian Institute of Technology, Jammu"
                />
                <link rel="icon" sizes="64x64" href={icon.src} />
            </head>
            <body
                style={{
                    background: "#181818",
                }}
                className={
                    inter.className +
                    " overflow-x-hidden cursor-default bodyContainer"
                }
            >
                <AppRouterCacheProvider>
                    {isLoading && (
                        <div className="fixed z-50 w-full h-full flex justify-center items-center bg-stone-900">
                            <div className="p-4 bg-gradient-to-tr animate-spin from-blue-600 to-pink-600 via-pink-600 rounded-full">
                                <div
                                    className="rounded-full"
                                    style={{ background: "#181818" }}
                                >
                                    <div className="w-24 h-24 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div
                        className="p-3 rounded-full border border-teal-400 absolute shadow-inner shadow-teal-200"
                        id="mouse-follower-wrapper"
                    ></div>
                    <div
                        className="p-2 rounded-full absolute"
                        id="mouse-follower-dot"
                    >
                        <div className="p-1 rounded-full overflow-hidden bg-teal-400"></div>
                    </div>
                    <div
                        className={`fixed w-full h-full flex justify-end items-end p-5 transition-all duration-300 user-select-none ${
                            bias >= 100 ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <div
                            onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                });
                            }}
                            className="text-xl z-50 rounded-full border border-pink-700 p-2 pl-3 pr-3 bg-black bg-opacity-20 hover:bg-opacity-60 hover:shadow-inner hover:shadow-pink-400 hover:border-pink-500 cursor-pointer"
                        >
                            <span className="h-full flex items-center">
                                <i className="fi fi-rr-angle-small-up"></i>
                            </span>
                        </div>
                    </div>
                    <div
                        id="header"
                        className="p-4 w-full flex z-20 sticky top-0 justify-between"
                        style={{ background: "rgba(13, 13, 13, 0.8)" }}
                    >
                        <span className="flex">
                            <a href="/" className="cursor-pointer">
                                <img
                                    height={"auto"}
                                    width={"75px"}
                                    src={logo.src}
                                    alt="Anhad"
                                />
                            </a>
                            <a
                                href="/"
                                className="ml-2 h-100 text-xl flex flex-col justify-center cursor-pointer"
                            >
                                Anhad
                            </a>
                        </span>
                        <span className="flex flex-col justify-center h-100">
                            <a
                                href="/book-ticket"
                                className="justify-center cursor-pointer flex text-cyan-800 hover:text-cyan-700 border border-cyan-800 hover:border-cyan-700 p-2 rounded hover:bg-cyan-400 hover:bg-opacity-10"
                            >
                                <i className="text-xl mr-0 md:mr-2 fi fi-rr-ticket h-5 flex flex-col justify-center w-fit"></i>
                                <span className="text-sm flex w-fit h-5 ml-1 flex-col justify-center">
                                    Book Now
                                </span>
                            </a>
                        </span>
                    </div>
                    {children}
                    <div
                        className="mt-16 p-10 pb-24 md:p-24 pt-0 md:pt-0 w-full"
                        style={{ background: "rgba(13, 13, 13, 0.8)" }}
                    >
                        <div
                            className="w-full"
                            style={{
                                borderTop: "2px solid #414141",
                            }}
                        >
                            <div className="overflow-hidden swipe-container">
                                <div
                                    className="p-4 pt-10 w-full flex"
                                    style={{
                                        transitionDuration: "5000ms",
                                        transform: `translate3d(-${distance}px, 0px, 0px)`,
                                    }}
                                >
                                    {sponsors.map((sponsor, index) => (
                                        <React.Fragment
                                            key={`sponsor_${index}`}
                                        >
                                            <a
                                                className="flex-shrink-0 block"
                                                href={`${sponsor.url}`}
                                                target="_blank"
                                            >
                                                <img
                                                    className="inline-block max-h-32 grayscale hover:grayscale-0 transition-all hover:scale-150 hover:blur-none"
                                                    src={sponsor.logo.src}
                                                    alt={sponsor.name}
                                                    width={"256px"}
                                                    style={{
                                                        height: "200px",
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </a>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="footer"
                        className="pt-12 pb-12 flex flex-row flex-wrap justify-center titleFamily"
                        style={{
                            borderTop: "2px solid white",
                            background: "#0D0D0D",
                        }}
                    >
                        <div className="w-full lg:w-1/3 flex justify-center flex-wrap z-10 p-2">
                            <a
                                href="/"
                                className="w-full m-2 flex justify-center font-bold hover:text-pink-700 text-2xl"
                            >
                                Anhad'24
                            </a>
                            <a
                                href="/"
                                className="w-full m-2 flex justify-center font-extralight hover:text-pink-700"
                            >
                                Home
                            </a>
                            <a
                                href="/events"
                                className="w-full m-2 flex justify-center font-extralight hover:text-pink-700"
                            >
                                Events
                            </a>
                            <a
                                href="/teams"
                                className="w-full m-2 flex justify-center font-extralight hover:text-pink-700"
                            >
                                Teams
                            </a>
                        </div>
                        <div className="w-full lg:w-1/3 flex justify-center flex-wrap z-10 p-2">
                            <a
                                href="#"
                                className="w-full m-2 flex justify-center font-bold hover:text-pink-700 text-2xl"
                            >
                                Developed by
                            </a>
                            <a
                                target="_blank"
                                href="https://github.com/gourav1100"
                                className="w-full m-2 flex justify-center font-extralight hover:text-pink-700"
                            >
                                <i className="fi fi-brands-github mr-2"></i>{" "}
                                Gourav Bidhuri
                            </a>
                            <a
                                target="_blank"
                                href="https://github.com/HKAgrwl"
                                className="w-full m-2 flex justify-center font-extralight hover:text-pink-700"
                            >
                                <i className="fi fi-brands-github mr-2"></i>{" "}
                                Harsh Agarwal
                            </a>
                            <a
                                target="_blank"
                                href="https://github.com/falak-2711"
                                className="w-full m-2 flex justify-center font-extralight hover:text-pink-700"
                            >
                                <i className="fi fi-brands-github mr-2"></i>{" "}
                                Falak
                            </a>
                            <a
                                href="https://github.com/vishu9354"
                                className="w-full m-2 flex justify-center font-extralight hover:text-pink-700"
                            >
                                <i className="fi fi-brands-github mr-2"></i>{" "}
                                Vishal Kumar
                            </a>
                            <a
                                href="https://github.com/AbhaySingh502"
                                className="w-full m-2 flex justify-center font-extralight hover:text-pink-700"
                            >
                                <i className="fi fi-brands-github mr-2"></i>{" "}
                                Abhay Singh
                            </a>
                        </div>
                        <div className="w-full lg:w-1/3 flex justify-center flex-wrap z-10">
                            <a
                                href="#"
                                className="w-full m-2 flex justify-center font-bold hover:text-pink-700 text-2xl p-2"
                            >
                                Contact Us
                            </a>
                            <a
                                href="tel:+919430870599"
                                className="w-full m-2 flex justify-center font-extralight hover:text-pink-700"
                            >
                                <i className="fi fi-rr-phone-call mr-3"></i>{" "}
                                Phone
                            </a>
                            <a
                                href="mailto:cultural.secretary@iitjammu.ac.in"
                                className="w-full m-2 flex justify-center font-extralight hover:text-pink-700"
                            >
                                <i className="fi fi-rr-envelope mr-3"></i> Email
                            </a>
                        </div>
                    </div>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
