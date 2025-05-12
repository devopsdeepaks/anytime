"use client";
import { useState } from "react";
import { Lens } from "@/components/lenscard";
import { motion } from "framer-motion";

interface Car {
  id: number;
  logo: string;
  name: string;
  subtitle: string;
  image: string;
}

export default function LensDemoThird() {
  const cars: Car[] = [
    {
      id: 1,
      logo: "/logo1.png",
      name: "Sedan",
      subtitle: "COMFORTABLE · AFFORDABLE",
      image: "/car1.webp",
    },
    {
      id: 2,
      logo: "/logo2.webp",
      name: "SUV",
      subtitle: "PREMIUM · SPACIOUS",
      image: "/car2.jpg",
    },
    {
      id: 3,
      logo: "/logo4.png",
      name: " XL SUV / 7-Seater",
      subtitle: "FAMILY · GROUP RIDES",
      image: "/car3.jpg",
    },
    {
      id: 4,
      logo: "/logo4.png",
      name: "Marriage Special",
      subtitle: "LUXURY SEGMENT",
      image: "/car4.jpg",
    },
    {
      id: 5,
      logo: "/logo5.png",
      name: "Mini Bus / Tempo Traveller",
      subtitle: "GROUP TRIPS · TOURISM",
      image: "car5.webp",
    },
    {
      id: 6,
      logo: "/logo6.png",
      name: "Pickup/Utility Vehicle",
      subtitle: "LUGGAGE · CARGO",
      image: "/car6.webp",
    },
  ];

  return (
    <div className="max-w-6xl container mx-auto px-4 py-20">
      <div className="flex flex-row justify-between items-center mb-8">
        <h1
          style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
          className="text-5xl  text-[#262626]"
        >
          Cars at your Convenience
        </h1>
        <button
          className="
    w-full sm:w-auto            
    bg-[#262626]                 
    text-white uppercase       
    tracking-widest             
    font-semibold              
    px-6 py-3                  
    rounded-lg                 
    shadow-md                   
    hover:bg-gray-800          
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700
    transition                  
  "
        >
          BOOK NOW
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <Lens key={car.id}>
            <motion.div
              className="bg-white border border-gray-200
 rounded-xl shadow-md overflow-hidden"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 25px rgba(0,0,0,0.1)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Header */}
              <div className="flex items-center space-x-3 p-4">
                <img
                  src={car.logo}
                  alt={`${car.name} logo`}
                  className="h-6 w-6 object-contain"
                />
                <div>
                  <h3
                    style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
                    className="text-lg font-semibold text-[#262626]"
                  >
                    {car.name}
                  </h3>
                  <p className="text-sm text-gray-500">{car.subtitle}</p>
                </div>
              </div>

              {/* Image */}
              <div className="px-4 pb-4">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full rounded-lg object-cover"
                  style={{ aspectRatio: "16/9" }}
                />
              </div>
            </motion.div>
          </Lens>
        ))}
      </div>
    </div>
  );
}
