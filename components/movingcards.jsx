"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Star, Quote } from 'lucide-react';

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className
}) => {
    const containerRef = React.useRef(null);
    const scrollerRef = React.useRef(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty("--animation-direction", "forwards");
            } else {
                containerRef.current.style.setProperty("--animation-direction", "reverse");
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}>
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}>
                {items.map((item, idx) => (
                    <li
                        className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-8 md:w-[400px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
                        key={item.name}
                    >
                        {/* Stars */}
                        <div className="flex pb-4 space-x-1  top-4 left-4 z-20">
                            {[...Array(5)].map((_, idx) => (
                                <Star key={idx} size={24} className="text-yellow-500" fill="currentColor" />
                            ))}
                        </div>

                        {/* Quote Icon */}
                        <Quote
                            size={32}
                            fill="currentColor"
                            className="absolute top-4 right-4 text-[#262626] dark:text-gray-600 z-20"
                        />

                        <blockquote>
                            {/* Invisible border expansion layer to maintain rounded shadow/border */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -top-0.5 -left-0.5 -z-10 h-[calc(100%+4px)] w-[calc(100%+4px)] rounded-2xl"
                            ></div>

                            {/* Quote Text */}
                            <p className="Space Grotesk
 relative z-20 text-sm leading-relaxed font-normal text-[#262626] dark:text-gray-100">
                                {item.quote}
                            </p>

                            {/* Author Info */}
                            <div className="relative z-20 mt-6 flex items-center">

                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-neutral-800 dark:text-gray-100">
                                        {item.name}
                                    </span>
                                    <span className="text-sm font-normal text-neutral-500 dark:text-gray-400">
                                        {item.title}
                                    </span>
                                </div>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
