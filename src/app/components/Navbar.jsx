"use client"

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai"; // Burger menü ikonu için react-icons kullanacağız
import { IoOptionsOutline } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { BsBasket3Fill } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import CategoryMenu from "./CategoryMenu";


import Image from 'next/image'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Burger menü açılıp kapanmasını kontrol etmek için

  // Burger menü tıklandığında açılıp kapanmasını sağlayacak fonksiyon
  const filtrePopUp = () => {
    setMenuOpen(!menuOpen);
    console.log("menuopen" ,menuOpen);
    
  };

  return (
    <>
      <nav className="container mx-auto text-[#F2A945] p-3 flex justify-between w-full items-center shadow-md px-4 sticky top-0 z-50 bg-white">
      

      <IoOptionsOutline className="text-3xl" onClick={filtrePopUp} />

        <div className="flex justify-center items-center gap-x-2">
          <Image src="/Picture1.png" 
            alt="Logo"
            width={50}  
            height={25} />

          <h1 className="hidden md:block">TOURS APP</h1>
        </div>

        <div className="md:hidden block">
          <RxHamburgerMenu className="text-3xl" />


        </div>

        <div className="hidden  md:flex  items-center gap-x-8 text-[#E07516]">
          <MdFavorite className="text-3xl hover:text-[#ee8550] " />
          <BsBasket3Fill className="text-3xl hover:text-[#ee8550]" />
          <IoPersonOutline className="text-3xl hover:text-[#ee8550]" />

        </div>
        <CategoryMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      </nav>
      {/* {menuOpen ? <div id="category" className="w-[50vw] md:w-[28vw] bg-[#E07516] h-screen z-50"></div> :null } */}




    </>
  );
};

export default Navbar;
