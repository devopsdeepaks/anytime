"use client";
import React from "react";
import { Car, MessageCircle, Clipboard, Navigation } from 'lucide-react';

const steps = [
    {
        id: 1,
        icon: <Car className="h-8 w-8 text-gray-700" />,
        title: "Choose Your Car",
        description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.",
    },
    {
        id: 2,
        icon: <MessageCircle className="h-8 w-8 text-gray-700" />,
        title: "Submit Enquiry",
        description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.",
    },
    {
        id: 3,
        icon: <Clipboard className="h-8 w-8 text-gray-700" />,
        title: "Finalize Paperwork",
        description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.",
    },
    {
        id: 4,
        icon: <Navigation className="h-8 w-8 text-gray-700" />,
        title: "Hit The Road",
        description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.",
    },
];

export default function HowItWorksSection() {
    // console.log({ Car, MessageCircle, Clipboard, SteeringWheel });

    return (
        <section className="bg-[#F6F6F6] max-w-7xl rounded-t-3xl  p-6 sm:p-12 lg:p-28">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
                {/* Left column */}
                <div className="lg:w-1/2 lg:pr-34 space-y-6 ">
                    <p style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }} className="text-md font-bold text-gray-500 uppercase">
                        How it works
                    </p>
                    <h2 style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }} className="uppercase text-3xl sm:text-4xl  text-[#262626]">
                        The easiest way to  find your next car
                    </h2>
                    <p className="inter text-gray-700">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                    </p>
                    <button className="inline-block bg-[#262626] text-white uppercase tracking-wide font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-800 transition">
                        Get Started
                    </button>
                    <p style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }} className="text-2xl sm:text-3xl font-bold
    bg-gradient-to-r
      from-[#262626]
      via-gray-700
      to-gray-500
    bg-clip-text
    text-transparent">
                        +91-9953384424
                    </p>
                </div>

                {/* Right column: steps grid */}
                <div className="lg:w-1/2  grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {steps.map(({ id, icon, title, description }) => (
                        <div key={id} className=" flex flex-col m-4">
                            <div className="flex-shrink-0 p-2">{React.cloneElement(icon, { className: "h-12 w-12 text-[#262626]" })}</div>
                            <div>
                                <h3 style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }} className="text-xl font-bold text-[#262626]">
                                    {title}
                                </h3>
                                <p className="inter text-[#262626] text-sm">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
