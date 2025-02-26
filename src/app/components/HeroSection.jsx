import React from "react";
import Link from "next/link";

const HeroSection = () => {
    return (
        <>
            <section className="relative w-full h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/bg2.webp')" }}>
                {/* Overlay for better text visibility */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

                {/* Content */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
                    <h1 className="text-3xl md:text-6xl font-bold mb-4">
                        Welcome to TOURSAPP
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Explore the world like never before with our exclusive tours and experiences.
                    </p>


                    <button className="bg-primary-600 text-white py-3 px-6 text-lg rounded-md hover:bg-[#ffb246] transition-all duration-300">
                        <Link href="#Tours">View Tours</Link>
                    </button>

                </div>
            </section>

            {/* SAYFA İÇİ LİNKLER  */}

            <div className=" w-full flex flex-wrap justify-center gap-y-2 items-center mt-8    ">
                <button className="w-1/3 md:w-[15%]  text-white bg-primary-500 p-5 hover:bg-primary-600 rounded-md shadow-lg  mr-8"><Link href="#tours-section">Tours</Link></button>
                <button className="w-1/3 md:w-[15%]  text-white p-5 bg-primary-500 rounded-md shadow-lg hover:bg-primary-600 mr-8"><Link href="#Tickets">Ticket</Link></button>
                <button className="w-1/3 md:w-[15%]  text-white p-5 bg-primary-500 rounded-md shadow-lg hover:bg-primary-600 mr-8">Transfer</button>
                <button className="w-1/3 md:w-[15%] ] text-white p-5 bg-primary-500 rounded-md shadow-lg hover:bg-primary-600 mr-8">Rent</button>

            </div>


        </>
    );
};

export default HeroSection;
