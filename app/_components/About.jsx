import CountUp from "@/components/counter";
import React from "react";

const AboutUsSection = () => {
    return (
        <div className="bg-[#1A1A1A] text-white rounded-3xl shadow-lg shadow-black/50  p-10 sm:p-20 md:flex justify-between items-center max-w-6xl mx-auto mt-10">
            {/* Left Content */}
            <div className="md:w-1/2 space-y-4">
                <p style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }} className="text-sm font-bold uppercase text-gray-300">About Us</p>
                <h2 style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }} className="inter text-2xl uppercase md:text-3xl  leading-snug">
                    Built on Car Passion, <br />
                    Focused on Your Needs
                </h2>
                <p className="text-gray-400 md:w-2/3 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    varius enim in eros elementum tristique. Duis cursus, mi viverra
                    ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </p>
            </div>

            {/* Right Stats */}
            <div className="md:w-1/2 mt-8 md:mt-0 grid grid-cols-2 gap-1 text-center drop-shadow-2xl">
                <div className="bg-[#252525] p-6 rounded-tl-2xl">
                    <h3 style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }} className="text-2xl ">
                        <CountUp
                            from={0}
                            to={1000}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />+
                    </h3>
                    <p className="syne text-sm uppercase text-gray-400 mt-1">Happy Clients</p>
                </div>
                <div className="bg-[#252525] p-6 rounded-tr-2xl">
                    <h3 style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }} className="text-2xl ">
                        <CountUp
                            from={0}
                            to={500}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />+
                    </h3>
                    <p className="syne text-sm uppercase text-gray-400 mt-1">Car Drivers</p>
                </div>
                <div className="bg-[#252525] p-6 rounded-bl-2xl">
                    <h3 style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }} className="text-2xl ">
                        <CountUp
                            from={0}
                            to={300}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />+
                    </h3>
                    <p className="syne text-sm uppercase text-gray-400 mt-1">Cars in Stock</p>
                </div>
                <div className="bg-[#252525] p-6 rounded-br-2xl">
                    <h3 style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }} className="text-2xl ">
                        <CountUp
                            from={0}
                            to={50}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />+
                    </h3>
                    <p className="syne text-sm uppercase text-gray-400 mt-1">Car Brands</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;
