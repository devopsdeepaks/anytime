import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <footer className="bg-[#262626] w-full text-white py-12 px-12 rounded-3xl max-w-7xl mx-auto mt-12 shadow-lg">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                {/* Left: Logo and Mission */}
                <div className="max-w-md text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-4">
                        <img src="/mainlogo.png" alt="Logo" className="h-10 mr-2" />
                        <span style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }} className="text-xl font-semibold">Any Time Driver And Taxi Service</span>
                    </div>
                    <p className="text-sm text-gray-300">
                        Our mission is to connect people with reliable, affordable dhobi and laundry services — making laundry stress-free, one wash at a time.
                    </p>
                </div>

                {/* Right: App Download (commented out) */}
                <div className="flex flex-col items-center lg:items-end gap-3">
                    {/* <p className="text-sm text-right mb-2">Address</p> */}


                    <span className=" text-sm text-gray-300">Shop No. 1, Nehwal Complex,<br /> Gangapuram, Vishnu Enclave, Govindpuram,<br /> Ghaziabad, UP - 201001</span>

                </div>
            </div>

            {/* Nav Links */}
            <div className="border-t border-gray-600 my-6" />

            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm">
                <div className="flex gap-6 flex-wrap justify-center lg:justify-start">
                    {[{ label: 'Home', link: 'home' },
                    { label: 'About', link: 'about' },
                    { label: 'Showroom', link: 'showcase' },
                    { label: 'Contact', link: 'contact' }].map((item) => (
                        <a
                            key={item.label}
                            // href={item.link}
                            onClick={() => scrollToSection(item.link)}
                            className="hover:underline hover:text-gray-200 transition"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Social Icons with Lucide */}
                <div className="flex gap-4 text-xl">
                    <a href="#" className="hover:text-blue-400 transition"><Facebook size={20} /></a>
                    <a href="#" className="hover:text-blue-500 transition"><Twitter size={20} /></a>
                    <a href="#" className="hover:text-pink-400 transition"><Instagram size={20} /></a>
                    <a href="#" className="hover:text-blue-300 transition"><Linkedin size={20} /></a>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="text-xs text-gray-400 text-center mt-6">
                © {new Date().getFullYear()} Any Time Driver and Taxi Service. All rights reserved.
            </div>
        </footer>
    );
}
