/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import background from "../../../public/images/background/banner1.png";
import music from "../../../public/images/background/music.png";
import mainArtist from "./main_artist";
import artists from "./artists";
import events from "./events_subset";
import speakers from "./speakers";
import team from "./team_subset";
import "./style.css";

export default function Home() {
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <=
            (3 *
                (window.innerHeight || document.documentElement.clientHeight)) /
                4
        );
    }
    function handleScroll() {
        const elements = document.getElementsByClassName("fadeInElement");
        [...elements].forEach((element) => {
            if (
                isInViewport(element) &&
                !element.classList.contains("visible")
            ) {
                element.classList.add("visible");
            }
        });
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();
    }, []);

    return (
        <div id="font-bold">
            <div
                className="relative"
                style={{
                    height: "90vh",
                }}
            >
                <div
                    className="w-full absolute h-full"
                    style={{
                        backgroundImage: `url(${background.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        filter: "blur(10px)",
                    }}
                ></div>
                <div className="absolute bg-black bg-opacity-20 h-full w-full backdrop-blur-xl -z-20"></div>
                <div className="w-full absolute h-full flex justify-center overflow-hidden">
                    <img
                        className="rounded-xl transition-all duration-500 md:hover:scale-105 opacity-100 md:opacity-80 md:hover:opacity-90 object-contain scale-150 md:scale-100"
                        style={{
                            height: "100%",
                        }}
                        src={background.src}
                        alt="anhad"
                    />
                </div>
            </div>
            <div
                className="relative overflow-hidden"
                style={{
                    height: "40vh",
                }}
            >
                <div
                    className="w-full absolute h-full -z-30"
                    style={{
                        backgroundImage: `url(${music.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div className="w-full absolute h-full -z-20 bg-black bg-opacity-20"></div>
                <div className="w-full h-full flex items-center absolute">
                    <div
                        className="w-full opacity-70 hover:opacity-90 scale-105 hover:scale-110 transition-all duration-500 cursor-pointer -rotate-6 text-oregano z-10 shadow-md shadow-black"
                        style={{ backgroundColor: "#181818" }}
                    >
                        <marquee
                            scrollamount="12"
                            behavior="alternate"
                            direction="right"
                            className="p-8 text-3xl lg:text-5xl"
                        >
                            <span className="p-8 pr-16 pl-16 text-sky-700">
                                tEcHnO-cUlTuRaL
                            </span>
                            <span className="p-8 pr-16 pl-16 text-teal-700">
                                7-11 March
                            </span>
                            <span className="p-8 pr-16 pl-16 text-pink-700">
                                TeChNo-CuLtUrAl
                            </span>
                            <span className="p-8 pr-16 pl-16 text-cyan-600">
                                7-11 MaRcH
                            </span>
                            <span className="p-8 pr-16 pl-16 text-sky-700">
                                tEcHnO-cUlTuRaL
                            </span>
                            <span className="p-8 pr-16 pl-16 text-teal-700">
                                7-11 March
                            </span>
                            <span className="p-8 pr-16 pl-16 text-pink-700">
                                TeChNo-CuLtUrAl
                            </span>
                            <span className="p-8 pr-16 pl-16 text-amber-600">
                                7-11 MaRcH
                            </span>
                            <span className="p-8 pr-16 pl-16 text-sky-600">
                                tEcHnO-cUlTuRaL
                            </span>
                            <span className="p-8 pr-16 pl-16 text-teal-600">
                                7-11 maRcH
                            </span>
                            <span className="p-8 pr-16 pl-16 text-pink-600">
                                TeChNo-CuLtUrAl
                            </span>
                            <span className="p-8 pr-16 pl-16">7-11 MaRcH</span>
                        </marquee>
                    </div>
                </div>
                <div className="h-full flex items-center absolute z-0">
                    <div
                        className="w-full opacity-70 hover:opacity-90 scale-105 hover:scale-110 transition-all duration-500 cursor-pointer rotate-12 text-oregano shadow-md shadow-black"
                        style={{ backgroundColor: "#181818" }}
                    >
                        <marquee
                            scrollamount="12"
                            behavior="alternate"
                            direction="left"
                            className="p-8 text-3xl lg:text-5xl"
                        >
                            <span className="p-8 pr-16 pl-16">
                                TECHNO-CULTURAL
                            </span>
                            <span className="p-8 pr-16 pl-16 text-pink-600">
                                TeChNo-CuLtUrAl
                            </span>
                            <span className="p-8 pr-16 pl-16 text-teal-600">
                                Techno-Cultural
                            </span>
                            <span className="p-8 pr-16 pl-16 text-sky-600">
                                tEcHnO-cUlTuRaL
                            </span>
                            <span className="p-8 pr-16 pl-16 text-amber-600">
                                TECHNO-CULTURAL
                            </span>
                            <span className="p-8 pr-16 pl-16 text-pink-700">
                                TeChNo-CuLtUrAl
                            </span>
                            <span className="p-8 pr-16 pl-16 text-teal-700">
                                Techno-Cultural
                            </span>
                            <span className="p-8 pr-16 pl-16 text-sky-700">
                                tEcHnO-cUlTuRaL
                            </span>
                            <span className="p-8 pr-16 pl-16 text-cyan-600">
                                TECHNO-CULTURAL
                            </span>
                            <span className="p-8 pr-16 pl-16 text-pink-700">
                                TeChNo-CuLtUrAl
                            </span>
                            <span className="p-8 pr-16 pl-16 text-teal-700">
                                Techno-Cultural
                            </span>
                            <span className="p-8 pr-16 pl-16 text-sky-700">
                                tEcHnO-cUlTuRaL
                            </span>
                        </marquee>
                    </div>
                </div>
            </div>
            <div className="p-5 pt-8 lg:p-64 lg:pt-32 lg:pb-8 z-10 fade-in fadeInElement">
                <div
                    className="w-full border rounded-lg p-12 pr-8 pl-8 lg:p-16 flex cursor-pointer flex-wrap"
                    style={{ borderColor: "#414141" }}
                >
                    <span className="w-full lg:w-2/5 h-full flex justify-center pr-8 pl-3 pb-8 lg:p-8">
                        <img
                            onClick={() => {
                                window.open(mainArtist.instagram, "_blank");
                            }}
                            src={mainArtist.image}
                            className="h-auto object-contain rounded-xl w-80 hover:scale-105 transition-all duration-300 z-10"
                            alt={mainArtist.name}
                        />
                    </span>
                    <span className="w-full lg:w-3/5 p-8 flex flex-col">
                        <div className="text-5xl w-full flex justify-end">
                            <i className="fi fi-sr-quote-right"></i>
                        </div>
                        <div className="text-3xl w-full flex justify-start artist-title text-oregano">
                            Main Artist
                        </div>
                        <div className="text-6xl w-full flex justify-start text-oregano">
                            {mainArtist.name}
                        </div>
                        <div className="text-2xl w-full flex justify-start pt-8 p-4 text-oregano text-wrap">
                            {mainArtist.bio}
                        </div>
                        <div className="w-full flex justify-end lg:p-4 lg:mt-32 mt-8">
                            <i
                                htmlFor="artist-instagram"
                                className="z-10 text-5xl hover:scale-110 transition-all duration-500 cursor-pointer fi fi-brands-instagram artist-title"
                                onClick={() => {
                                    window.open(mainArtist.instagram, "_blank");
                                }}
                            ></i>
                        </div>
                    </span>
                </div>
            </div>
            <div className="w-full p-8 pb-2 text-oregano lg:p-64 lg:pt-8 lg:pb-2 artist-title text-4xl lg:text-6xl fade-in fadeInElement">
                Our Lineup
            </div>
            <div className="w-full p-10 pt-2 text-oregano lg:p-72 lg:pt-2 lg:pb-8 text-xl lg:text-3xl fade-in fadeInElement">
                Singers and Bands at Anhad 2024
            </div>
            <div className="w-full p-10 pt-2 text-oregano lg:p-72 lg:pt-2 lg:pb-8 text-2xl lg:text-3xl fade-in fadeInElement flex justify-center flex-col lg:flex-row lg:flex-wrap">
                {artists.map((artist) => {
                    return (
                        <React.Fragment key={artist.name}>
                            <span className="w-full lg:w-1/3 flex justify-center flex-wrap">
                                <div className="w-full flex justify-center p-5">
                                    <img
                                        onClick={() => {
                                            window.open(
                                                artist.instagram,
                                                "_blank",
                                            );
                                        }}
                                        className="w-64 object-contain rounded-full border-2 shadow-md shadow-white border-stone-600 hover:scale-105 transition-all duration-300 z-10 cursor-pointer"
                                        src={artist.image}
                                        alt={artist.name}
                                    />
                                </div>
                                <div className="w-full flex justify-center">
                                    <span
                                        onClick={() => {
                                            window.open(
                                                artist.instagram,
                                                "_blank",
                                            );
                                        }}
                                        className="z-10 hover:scale-105 transition-all duration-300 cursor-pointer rounded-full bg-purple-400 bg-opacity-50 p-2 pl-8 pr-24 flex flex-wrap"
                                    >
                                        <span className="w-full text-3xl">
                                            {artist.name}
                                        </span>
                                        <span className="text-sm">
                                            {artist.genre}
                                        </span>
                                    </span>
                                </div>
                            </span>
                        </React.Fragment>
                    );
                })}
            </div>
            <div className="relative overflow-hidden">
                <div
                    className="absolute h-full -z-20 opacity-50"
                    style={{
                        background:
                            "linear-gradient(180deg, #FFC107 0%, #FF589B 100%, #FF589B 100%)",
                        filter: "blur(250px)",
                        width: "682px",
                        bottom: "0px",
                        insetInlineStart: "-358px",
                    }}
                ></div>
                <div
                    className="absolute h-full -z-20 opacity-70"
                    style={{
                        background:
                            "linear-gradient(180deg, #5EE4C6 0%, #FF589B 100%, #2690FF 100%)",
                        filter: "blur(250px)",
                        width: "682px",
                        bottom: "270px",
                        right: "-200px",
                    }}
                ></div>
                <div className="absolute bg-black bg-opacity-20 h-full w-full backdrop-blur-xl -z-10"></div>
                <div className="w-full p-8 pb-2 lg:p-64 lg:pt-8 lg:pb-2 text-4xl lg:text-6xl fade-in fadeInElement flex justify-between">
                    <span className="artist-title text-oregano">Events</span>
                    <span
                        onClick={() => window.open("/events", "_self")}
                        className="z-10 cursor-pointer text-sm rounded-full p-2 lg:p-4 font-sans text-stone-300 border border-stone-300 hover:border-stone-100 hover:text-stone-100 transition-all duration-300 items-center"
                    >
                        View All Events
                    </span>
                </div>
                <div className="w-full p-10 pt-2 text-oregano lg:p-72 lg:pt-2 lg:pb-8 text-xl lg:text-3xl fade-in fadeInElement">
                    Events at Anhad
                </div>
                <div className="w-full p-10 pt-2 text-oregano lg:p-72 lg:pt-2 lg:pb-8 text-2xl lg:text-3xl fade-in fadeInElement flex justify-center flex-col lg:flex-row lg:flex-wrap">
                    {events.map((event) => {
                        return (
                            <React.Fragment key={event.name}>
                                <span
                                    className="w-full lg:w-1/3 flex justify-center flex-wrap group relative p-2 cursor-pointer"
                                    onClick={() =>
                                        window.open(event.link, "_blank")
                                    }
                                >
                                    <div className="w-96 overflow-hidden flex justify-center p-5">
                                        <img
                                            className="w-96 object-contain rounded-lg group-hover:scale-105 transition-all duration-300 z-10 cursor-pointer"
                                            src={event.image}
                                            alt={event.name}
                                        />
                                    </div>
                                    <div className="absolute bottom-0 w-full h-0 rounded-xl z-10 opacity-0 group-hover:opacity-50 group-hover:h-full transition-all duration-300 bg-black">
                                        <div className="w-full h-full flex items-center flex-col justify-end pb-5 pt-5">
                                            <span className="text-white text-2xl">
                                                {event.name}
                                            </span>
                                            <span className="text-white text-lg text-ellipsis overflow-hidden w-full pr-16 pl-16 pt-2 line-clamp-2">
                                                {event.desc}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="absolute top-10 left-14 h-10 w-10 rounded-full z-10 bg-white opacity-15 group-hover:opacity-100 group-hover:bg-gradient-to-tr from-pink-500 to-yellow-500 transition-all duration-300 text-center items-center">
                                        <i className="text-pink-500 group-hover:text-white text-sm fi fi-rs-arrow-up-right"></i>
                                    </div>
                                </span>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
            <div>
                <div className="w-full p-8 pb-2 lg:p-64 lg:pt-8 lg:pb-2 text-4xl lg:text-6xl fade-in fadeInElement flex justify-center artist-title text-oregano">
                    Speakers
                </div>
                <div className="w-full p-10 pt-2 text-oregano lg:p-72 lg:pt-2 lg:pb-8 text-xl lg:text-3xl flex justify-center fade-in fadeInElement">
                    Our Speakers
                </div>
                <div className="w-full p-10 pt-2 text-oregano lg:p-72 lg:pt-2 lg:pb-8 text-2xl lg:text-3xl fade-in fadeInElement flex justify-center flex-col lg:flex-row lg:flex-wrap">
                    {speakers.map((speaker) => {
                        return (
                            <React.Fragment key={speaker.name}>
                                <span className="w-full lg:w-1/3 flex justify-center flex-wrap group relative p-4 cursor-pointer">
                                    <span className="border rounded flex p-4 w-full border-stone-700 hover:border-white z-10 transition-all duration-300">
                                        <span className="w-full lg:w-1/3 rounded-full overflow-hidden">
                                            <img
                                                src={speaker.image}
                                                alt={speaker.name}
                                            />
                                        </span>
                                        <span className="w-full lg:w-2/3 flex flex-col pl-8 pt-8">
                                            <span className="w-full flex justify-start text-2xl">
                                                {speaker.name}
                                            </span>
                                            <span className="w-full flex justify-start text-lg text-stone-500">
                                                {speaker.position}
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
            <div className="relative overflow-hidden">
                <div className="w-full p-8 pb-2 lg:p-64 lg:pt-8 lg:pb-2 text-4xl lg:text-6xl fade-in fadeInElement flex justify-between">
                    <span className="artist-title text-oregano">Our Team</span>
                    <span
                        onClick={() => window.open("/teams", "_self")}
                        className="z-10 cursor-pointer text-sm rounded-full p-2 lg:p-4 font-sans hover:border-2 text-stone-300 border border-stone-300 hover:border-stone-100 hover:text-stone-100 transition-all duration-300 items-center"
                    >
                        All Our Team Members
                    </span>
                </div>
                <div className="w-full p-10 pt-2 text-oregano lg:p-72 lg:pt-2 lg:pb-8 text-xl lg:text-3xl fade-in fadeInElement">
                    Meet Our Team
                </div>
                <div className="w-full p-10 pt-2 text-oregano lg:p-72 lg:pt-2 lg:pb-8 text-2xl lg:text-3xl fade-in fadeInElement flex justify-center flex-col lg:flex-row lg:flex-wrap">
                    {team.map((member) => {
                        return (
                            <React.Fragment key={member.name}>
                                <span
                                    className="w-full lg:w-1/3 flex justify-center flex-wrap group relative p-2 cursor-pointer"
                                    onClick={() =>
                                        window.open(member.instagram, "_blank")
                                    }
                                >
                                    <div className="w-full flex justify-center p-8 group-hover:scale-105 transition-all duration-500">
                                        <span
                                            className="-z-10 rounded-full w-64 h-64"
                                            style={{
                                                background: `url(${member.image.src})`,
                                                backgroundSize: "contain",
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat",
                                            }}
                                        ></span>
                                        <span
                                            className="-z-20 rounded-full w-64 h-64 absolute"
                                            style={{
                                                background: `url(${member.image.src})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat",
                                                filter: "blur(5px)",
                                            }}
                                        ></span>
                                    </div>
                                    <div className="absolute w-full flex justify-center p-8 group-hover:scale-105 transition-all duration-500 z-10 h-72">
                                        <span className="absolute w-64 h-0 bottom-0 bg-gradient-to-tr from-pink-500 to-yellow-500 group-hover:h-64 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-300"></span>
                                    </div>
                                    <div className="absolute p-4 rounded-full z-10 bg-white opacity-70 group-hover:opacity-90 group-hover:bg-gradient-to-tr from-pink-500 to-yellow-500 transition-all duration-300 text-center items-center text-xl flex">
                                        <span className="p-1">
                                            <i className="text-pink-500 group-hover:text-white fi fi-brands-instagram"></i>
                                        </span>
                                        <span className="text-pink-500 group-hover:text-white ml-4 -mt-2">
                                            {member.name}
                                        </span>
                                    </div>
                                </span>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
