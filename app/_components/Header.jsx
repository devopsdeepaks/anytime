"use client";

import Image from "next/image";
// import groupIcon from "@/public/group.svg";

export default function Navbar() {
    //   const scrollToSection = (sectionId: string) => {
    //     const element = document.getElementById(sectionId);
    //     if (element) {
    //       element.scrollIntoView({ behavior: "smooth" });
    //     }
    //   };

    return (
        <nav className="fixed shadow-2xl top-2 left-1/2 -translate-x-1/2 z-50">
            <div className="border bg-black/80 backdrop-blur-sm border-black rounded-[8px] sm:rounded-[16px] p-0.5 sm:p-1">
                <div className="px-2 sm:px-10 py-1.5 sm:py-4 rounded-[6px] sm:rounded-[12px] border border-white flex items-center gap-2 sm:gap-12">
                    {/* <div className="w-6 h-6 rounded-full border border-white/20" /> */}
                    <div className="w-4 sm:w-8 h-4 sm:h-8 rounded-full border border-white/20">
                        {/* <Image
                            src={groupIcon}
                            alt="Logo"
                            width={48}
                            height={48}
                            className="opacity-80"
                        /> */}
                    </div>

                    <div className="flex items-center gap-1.5 sm:gap-6 text-white/80 font-mono text-[10px] sm:text-sm">
                        <button
                            onClick={() => scrollToSection("home")}
                            className="hover:text-white hover:cursor-pointer transition-colors"
                        >
                            01.HOME
                        </button>
                        <span className="text-white/40">—</span>
                        <button
                            onClick={() => scrollToSection("about")}
                            className="hover:text-white hover:cursor-pointer transition-colors"
                        >
                            02.ABOUT
                        </button>
                        <span className="text-white/40">—</span>
                        <button
                            onClick={() => scrollToSection("gallery")}
                            className="hover:text-white hover:cursor-pointer transition-colors"
                        >
                            03.SHOWROOM
                        </button>
                        <span className="text-white/40">—</span>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="hover:text-white hover:cursor-pointer transition-colors"
                        >
                            04.CONTACT
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}