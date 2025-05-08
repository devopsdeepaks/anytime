"use client"
import React from 'react'
import GridDistortion from '@/GridDistortion/GridDistortion'
import FuzzyText from '@/components/blurtext'

const Hero = () => {
    return (

        <div style={{ width: '95%', height: '650px', position: 'relative' }}>
            <GridDistortion
                // imageSrc="https://picsum.photos/1920/1080?grayscale"
                // imageSrc="public\car.jpg"
                imageSrc="/car.jpg"
                grid={100}
                mouse={0.1}
                strength={0.15}
                relaxation={0.9}
                className="mt-4 rounded-4xl z-0"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                {/* <h1 className="text-white text-4xl font-bold text-center drop-shadow-md">
                    Welcome to the Wild Side
                </h1> */}

                <FuzzyText
                    baseIntensity={0.2}
                    fontSize="clamp(1rem, 5vw, 5rem)"
                >
                    Any Time Driver
                </FuzzyText>



                <FuzzyText
                    baseIntensity={0.2}
                    fontSize="clamp(1rem, 5vw, 5rem)"
                >
                    and Taxi Service
                </FuzzyText>
                <h1 className='text-white text-2xl mt-5 font-bold'>Your Ride Awaits!!!</h1>

            </div>

            <div className="absolute bottom-0 right-0 bg-white px-8 py-6 rounded-tl-[40px] shadow-lg">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-black font-bold text-lg">
                    +91-9953384424
                </span>
            </div>
        </div>
    )
}

export default Hero