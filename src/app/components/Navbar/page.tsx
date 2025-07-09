"use client";
import Image from "next/image";
import React, { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-[900px] h-[1000px]">
      <Image
        src="https://elmanawy.info/demo/ariel/ltr/images/shapes/banner_bg.png"
        alt="bg-img"
        height={900}
        width={1000}
        className="object-cover transform scale-x-[-1] "
      />

      <div className="absolute top-0 left-0 w-full z-[1000]">
        <nav className="fixed w-full bg-[#eee9fe] shadow-md z-[1000]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex">
                <Image
                  src="https://elmanawy.info/demo/ariel/ltr/images/logo-2.png"
                  alt="logo"
                  width={160}
                  height={160}
                  className="h-auto w-40"
                />
              </div>

              <ul className="hidden md:flex gap-6 text-sm font-[Poppins]">
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
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {menuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden bg-[#eee9fe] px-4 pb-4 pt-2">
              <ul className="flex flex-col gap-2 text-sm font-[Poppins]">
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
