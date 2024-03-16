/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import background from "../../../public/images/background/events.jpg";
import Events from "./events_data";
import "./style.css";

export default function page() {
    return (
        <div id="font-bold">
            <div
                className="relative"
                style={{
                    height: "70vh",
                }}
            >
                <div
                    className="w-full absolute h-full -z-20"
                    style={{
                        backgroundImage: `url(${background.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div className="absolute bg-black bg-opacity-40 h-full w-full backdrop-blur-sm -z-10"></div>
                <div className="absolute h-full w-full flex justify-center items-center">
                    <div className="w-full flex justify-center flex-wrap mt-12">
                        <div className="border border-pink-400 rounded-full p-4 md:p-5 text-pink-400 hover:bg-pink-500 transition-all hover:bg-opacity-50 flex items-center justify-center h-full">
                            <i className="fi fi-sr-sparkles text-2xl md:text-4xl flex h-full items-center justify-center"></i>
                        </div>
                        <div className="w-full h-fit mt-6 flex justify-center text-4xl md:text-5xl">
                            Our Events
                        </div>
                        <div className="w-96 font-extralight h-fit mt-6 flex justify-center text-md md:text-lg text-center"></div>
                    </div>
                </div>
            </div>
            {Events.map((eventObject, index) => {
                return (
                    <React.Fragment key={"event_parent_" + index}>
                        <div className="p-8 w-full lg:p-16 pb-4 lg:pb-6 flex justify-center text-3xl lg:text-5xl">
                            {eventObject.title}
                        </div>
                        <div className="pr-8 pl-8 w-full lg:pr-16 lg:pl-16 flex flex-wrap justify-center">
                            {eventObject.event.map((event, index) => {
                                return (
                                    <React.Fragment key={"event_" + index}>
                                        <div
                                            className="transition-all lg:w-2/5 m-4 w-full rounded-lg flex justify-center p-4 flex-col lg:flex-row hover:scale-105 hover:bg-neutral-900 hover:bg-opacity-40 duration-300"
                                            style={{
                                                border: "1px solid #414141",
                                                zIndex: "20",
                                            }}
                                        >
                                            <div className="w-full h-52 p-2 lg:w-2/5 flex justify-center overflow-hidden rounded-md">
                                                <a
                                                    href={event.url}
                                                    target="_blank"
                                                >
                                                    <img
                                                        src={event.image.src}
                                                        className="w-full z-10 rounded-md hover:scale-110 transition-all duration-500"
                                                        style={{
                                                            objectFit:
                                                                "contain",
                                                        }}
                                                        alt={event.name}
                                                    />
                                                </a>
                                            </div>
                                            <div className="w-full h-52 p-2 lg:w-3/5 flex overflow-hidden flex-wrap items-start">
                                                <div className="w-full flex justify-center text-2xl pt-2 pb-2 hover:text-pink-700 transition-all duration-300 cursor-pointer">
                                                    <a
                                                        className="w-full whitespace-nowrap text-ellipsis overflow-hidden"
                                                        href={event.url}
                                                        target="_blank"
                                                    >
                                                        {event.name}
                                                    </a>
                                                </div>
                                                <div className="w-full max-h-32 text-pretty text-center text-ellipsis p-1 mt-2 line-clamp-3">
                                                    {event.desc}
                                                </div>
                                                <div className="w-full flex justify-end p-4 pt-3 pb-0">
                                                    <a
                                                        className="hover:scale-105 transition-all duration-300"
                                                        href={event.url}
                                                        target="_blank"
                                                    >
                                                        <button className="p-2 border-purple-600 border pl-4 pr-4 rounded-md hover:bg-purple-200 hover:bg-opacity-25 transition-all duration-300">
                                                            View Event
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </React.Fragment>
                );
            })}
        </div>
    );
}
