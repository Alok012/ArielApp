import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
    <nav className="flex justify-center items-center bg-[#eee9fe] h-20 ">

      <div className=" font-bold bg-[#4b56c1]">
        <Image
          src="https://elmanawy.info/demo/ariel/ltr/images/logo.png"
          alt="logo"
          width={180}
          height={180}
          
          />
      </div>
      <ul className="flex gap-6 mx-32 text-sm mt-1">
        <li>HOME</li>
        <li>PAGES</li>
        <li>BLOG</li>
        <li>FEATURES</li>
        <li>HOW IT WORKS</li>
        <li>SCREENSHOTS</li>
        <li>PRICING</li>
        <li>REVIEWS</li>
        <li>FAQS</li>
      </ul>
          </nav>
    </>
  );
};

export default Navbar;
