"use client";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Navbar from "./_components/Header";
import FollowCursor from "@/components/cursor";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center">
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
    </div>
  );
}
