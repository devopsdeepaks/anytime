import React from 'react'
import { ConfettiButton } from '@/components/confetti'
//                 </div>
// import Logo as '/logo1.png'
export default function ContactUsCard() {
    const phoneNumber = '+91-9953384424';
    return (
        <div className="max-w-7xl w-full mt-20 mx-auto bg-[#F6F6F6] rounded-xl p-20 shadow-md hover:shadow-lg items-center justify-center transition-shadow">
            <div className="flex flex-col items-center space-y-4">
                {/* Logo */}
                <img src='/mainlogo.png' alt="Any Time Driver and Taxi Service Logo" className="h-40 w-auto" />

                {/* Title */}
                <h2 style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }} className="text-4xl font-bold text-[#262626]">Contact US</h2>

                {/* Phone Button */}
                <a
                    href={`tel:${phoneNumber}`}
                    className="inline-block bg-[#393939] text-gray-200 text-5xl font-semibold px-12 py-2 rounded-full ring-2 ring-white shadow-xl hover:shadow-2xl transition-shadow"
                >
                    <ConfettiButton>{phoneNumber}</ConfettiButton>

                </a>
                {/* <ConfettiButton
                    className="mt-4 bg-[#393939] text-gray-200 text-xl font-semibold px-8 py-3 rounded-full ring-2 ring-white shadow-xl hover:shadow-2xl transition-shadow hover:bg-[#4a4a4a]"
                >
                    Confetti 🎉
                </ConfettiButton> */}
            </div>
        </div>
    )
}
