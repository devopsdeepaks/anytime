"use client"
import React from 'react'
import GridDistortion from '@/GridDistortion/GridDistortion'

const Hero = () => {
    return (
        <div id='home' className="w-full h-screen min-h-[650px] relative overflow-hidden">
            <GridDistortion
                imageSrc="/indian_taxi_hero.jpg"
                grid={100}
                mouse={0.1}
                strength={0.15}
                relaxation={0.9}
                className="z-0"
            />
            <div className="absolute p-4 sm:p-0 inset-0 flex flex-col items-center justify-center z-10 pointer-events-none bg-black/40">
                <h1
                    style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
                    className='text-white text-4xl sm:text-7xl text-center drop-shadow-md'
                >
                    Your <b>Ride</b> Awaits at <br />
                    <b> Any Time Driver and Taxi <br /> Service</b>
                </h1>

                <h2 className='text-white text-xl sm:text-3xl mt-5 font-bold drop-shadow-sm'>
                    Your Next Taxi Is Just a Tap Away.
                </h2>

                <button
                    type="button"
                    onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
                    className="mt-6 flex items-center space-x-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold border border-gray-200 hover:bg-gray-100 transition-colors duration-200 cursor-pointer shadow-lg pointer-events-auto"
                >
                    <span className="tracking-wider">Explore Now</span>
                </button>
            </div>
        </div>
    )
}

export default Hero