"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/movingcards";
export function Testimonials() {
    return (

        <div
            className="max-w-7xl shadow-lg  bg-[#262626]  rounded-b-3xl  p-6 sm:p-12 lg:p-24">
            <div className="flex mb-10 items-center justify-between flex-row">


                <h1
                    style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
                    className="text-4xl  font-bold text-white"
                >
                    Happy Clients
                </h1>
                <a href="https://g.co/kgs/EeMN2it">
                    <button
                        className="
   
    bg-white
    text-[#262626] uppercase
     font-semibold
    px-6 py-3 leading-none
    rounded-lg shadow-md pointer
  "
                    >
                        REVIEW NOW
                    </button></a>
            </div>
            < InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div >
    );
}

const testimonials = [
    {
        quote:
            "I had an urgent meeting and needed a driver at the last minute. Any Time Driver Service was there within 15 minutes! The driver was polite, professional, and knew the quickest routes. Highly recommended!",
        name: "Radha Gupta",
        title: "Booked Taxi",
    },
    {
        quote:
            "Good service well sincere driver On time reached customer location. Good nature of any time driver",
        name: "Gagan",
        title: "Booked Driver",
    },
    {
        quote: "I love the service It's really good",
        name: "Meenakshi Parvir",
        title: "Booked Pickup",
    },
    {
        quote:
            "The rates are very reasonable, and the service is super convenient. The only thing that could improve is the app's user interface—it’s a bit clunky. But the drivers themselves are excellent!",
        name: "Akanksha Singh",
        title: "Booked Pickup",
    },
    {
        quote:
            "I got stuck in the middle of nowhere with a flat tire, and Any Time Driver Service saved the day. They sent someone immediately, and the driver even helped me find a repair shop nearby. Couldn’t ask for better service!",
        name: "Arpit Rai",
        title: "Booked Driver",
    },
];
