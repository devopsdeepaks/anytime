"use client";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Navbar from "./_components/Header";
import FollowCursor from "@/components/cursor";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { TextReveal } from "@/components/textreveal";
import AboutUsSection from "./_components/About";
import LensDemoThird from "./_components/collections";
import HowItWorksSection from "./_components/HowitWorks";
import { Testimonials } from "./_components/Testimonials";
export default function Home() {
  const textt =
    "At Your Ride Awaits at Any Time Driver and Taxi Service we offer a seamless and reliable car driver and taxi service designed to make your travel experience smooth, safe, and convenient. Whether you need a professional driver for your personal vehicle or a comfortable taxi for your daily commute. our team of trained and verified drivers is always ready to serve you. With 24/7 availability, transparent pricing, and instant booking, we ensure that every ride is stress-free and tailored to your needs. ";
  return (
    <div className=" flex flex-col justify-center items-center overflow-x-hidden">
      {/* <h1>Hello</h1> */}
      {/* <Header /> */}
      <FollowCursor />
      <FloatingWhatsApp
        phoneNumber="+919953384424"
        accountName="Driver & Taxi Support"
        statusMessage="🟢 Online - Book Now"
        chatMessage="Hello! Welcome to Any Time Driver & Taxi Services.
Need a driver or taxi? Just message us here"
      />
      <Navbar />
      <Hero />
      {/* <HighlightScroll className=" p-20" /> */}
      <TextReveal>{textt}</TextReveal>
      <AboutUsSection />
      <LensDemoThird />
      <HowItWorksSection />
      <Testimonials />
    </div>
  );
}
