"use client"
import React from 'react'
import GridDistortion from '@/GridDistortion/GridDistortion'
import FuzzyText from '@/components/blurtext'
// import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (

        <div id='home' style={{ width: '95%', height: '650px', position: 'relative' }}>
            <GridDistortion
                // imageSrc="https://picsum.photos/1920/1080?grayscale"
                // imageSrc="public\car.jpg"
                imageSrc="/newcar.jpg"
                grid={100}
                mouse={0.1}
                strength={0.15}
                relaxation={0.9}
                className="mt-4 rounded-4xl z-0"
            />
            <div className="absolute p-4 sm:p-0 inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                {/* <h1 className="text-white text-4xl font-bold text-center drop-shadow-md">
                    Welcome to the Wild Side
                </h1> */}

                <h1
                    // style={{ fontFamily: 'Tagesschrift, sans-serif' }}
                    // baseIntensity={0.2}
                    // fontSize="clamp(1.5rem, 7.5vw, 7.5rem)"
                    style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
                    className=' text-white text-4xl sm:text-7xl  text-center drop-shadow-md'
                >
                    Your <b>Ride</b> Awaits at <br />
                    <b> Any Time Driver and Taxi <br /> Service</b>
                </h1>



                {/* <h1
                    // style={{ fontFamily: 'Tagesschrift, sans-serif' }}
                    // baseIntensity={0.2}
                    // fontSize="clamp(1.5rem, 7.5vw, 7.5rem)"
                    className='roboto-slab text-white text-8xl font-bold text-center drop-shadow-md'
                >
                    and Taxi Service
                </h1> */}
                <h1 className='text-white text-xl sm:text-3xl mt-5 font-bold'>Your Next Taxi Is Just a Tap Away.</h1>
                <button
                    type="button"
                    className="mt-4 flex items-center space-x-2 px-6 py-3 rounded-4xl bg-white text-black font-medium border border-gray-200 hover:bg-gray-100 transition-colors duration-200"

                >
                    <span className="tracking-wider">Explore Now </span>
                </button>

            </div>

            {/* 
            <div className="absolute bottom-0 right-0 bg-white px-8 py-6 rounded-tl-[40px] shadow-lg">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-black font-bold text-lg">
                    +91-9953384424
                </span>
            </div> */}
        </div>
    )
}

export default Hero