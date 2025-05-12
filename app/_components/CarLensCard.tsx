// CarLensCard.tsx
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

interface CarLensCardProps {
    car: Car;
}

export default function CarLensCard({ car }: CarLensCardProps) {
    // Each card gets its own hover‐state
    const [hovering, setHovering] = useState(false);

    return (
        <Lens
            hovering={hovering}
            setHovering={setHovering}
        // you can also pass zoomFactor, lensSize, etc. here if you want defaults overridden
        >
            <motion.div
                className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden"
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
                        <h3 style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
                            className="text-lg font-semibold text-[#262626]">
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
    );
}
