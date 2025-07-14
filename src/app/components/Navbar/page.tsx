"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      <div className="w-full h-full">
     <Image
        src="https://elmanawy.info/demo/ariel/ltr/images/shapes/banner_bg.png"
        alt="bg-img"
        height={900}
        width={1000}
        className="object-cover transform scale-x-[-1] "
      />
      </div>
 

      <div className="absolute top-0 left-0 w-full z-[1000]">
        <nav
          className={`fixed w-full h-18 -mt-1 ${
            isScrolled ? "bg-[#eee9fe]" : "bg-transparent"
          } transition-colors duration-300`}
        >
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="  sm:block md:hidden lg:block">
                <Image
                  src="https://elmanawy.info/demo/ariel/ltr/images/logo-2.png"
                  alt="logo"
                  width={160}
                  height={160}
                  className="h-auto w-40 ml-10 lg:-ml-6 xl:ml-20"
                />
              </div>

              <ul className="hidden md:flex gap-6 text-sm font-[Poppins] mr-10  text-[#333]">
                <li className="cursor-pointer">HOME</li>
                <li className="cursor-pointer">PAGES</li>
                <li className="cursor-pointer">BLOG</li>
                <li className="cursor-pointer">FEATURES</li>
                <li className="cursor-pointer">HOW IT WORKS</li>
                <li className="cursor-pointer">SCREENSHOTS</li>
                <li className="cursor-pointer">PRICING</li>
                <li className="cursor-pointer">REVIEWS</li>
                <li className="cursor-pointer">FAQS</li>
                <li className="cursor-pointer">CONTACT</li>
              </ul>

              <div className="md:hidden">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-black focus:outline-none"
                >
                  <div className="border border-[#8d23c7] h-9 w-9 rounded flex items-center justify-center">
                    <HiOutlineMenu className="w-8 h-8 text-[#8d23c7]" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden bg-[#eee9fe] px-4 pb-2 pt-2">
              <ul className="flex flex-col gap-2 text-lg font-[Poppins] text-[#333]">
                <li className="cursor-pointer">HOME</li>
                <li className="cursor-pointer">PAGES</li>
                <li className="cursor-pointer">BLOG</li>
                <li className="cursor-pointer">FEATURES</li>
                <li className="cursor-pointer">HOW IT WORKS</li>
                <li className="cursor-pointer">SCREENSHOTS</li>
                <li className="cursor-pointer">PRICING</li>
                <li className="cursor-pointer">REVIEWS</li>
                <li className="cursor-pointer">FAQS</li>
                <li className="cursor-pointer">CONTACT</li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
