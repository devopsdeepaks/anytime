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
import ContactUsCard from "./_components/Contact";
import Footer from "./_components/Footer";
export default function Home() {
  const textt =
    "At Any Time Driver and Taxi Service, we provide dependable, 24/7 car driver and taxi solutions tailored for your comfort and convenience. Whether you're looking for a professional driver for your personal vehicle or a well-maintained taxi for daily commutes, special occasions, or outstation travel — we’ve got you covered. ";
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
      <ContactUsCard />
      <Footer />
    </div>
  );
}
