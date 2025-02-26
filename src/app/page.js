import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyToursApp from "./components/WhyToursApp";
import TourList from "./components/TourList";
import TicketList from "./components/TicketList";



export default async function Home() {
  return (
    <div className="flex flex-col gap-4 bg-[#ffff]  text-black">


      <Navbar />

      <HeroSection />
      <div className="w-1/2 mx-auto border border-[#F2A945] mt-4"></div>

      <TourList />
      <div className="w-1/2 mx-auto border border-[#F2A945] mt-4"></div>

      <TicketList />
      <div className="w-1/2 mx-auto border border-[#F2A945] mt-4"></div>


      <WhyToursApp />


    </div>
  );
}
