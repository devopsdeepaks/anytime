import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Navbar from "./_components/Header";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center">
      {/* <h1>Hello</h1> */}
      {/* <Header /> */}
      <Navbar />
      <Hero />
    </div>
  );
}
