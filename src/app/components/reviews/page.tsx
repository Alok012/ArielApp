"use client";
import React, { useEffect, useState } from "react";
import BgScreenshot from "../bgScreenshot/page";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { RiDoubleQuotesL } from "react-icons/ri";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CompanyLogo = [
  "https://elmanawy.info/demo/ariel/ltr/images/clients/1.png",
  "https://elmanawy.info/demo/ariel/ltr/images/clients/2.png",
  "https://elmanawy.info/demo/ariel/ltr/images/clients/3.png",
  "https://elmanawy.info/demo/ariel/ltr/images/clients/5.png",
  "https://elmanawy.info/demo/ariel/ltr/images/clients/6.png",
  "https://elmanawy.info/demo/ariel/ltr/images/clients/4.png",
];
const Reviews = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1400);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (isMobile) {
    return (
      <div className="bg-white py-12 px-4 sm:px-6 border">
        <div className="max-w-xl mx-auto text-center text-[#333]">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            What Our Customers Say!
          </h1>
          <p className="text-[#77838f] text-sm sm:text-base mt-4 leading-6">
            Don&apost just believe our words.
            <br />
            Check these testimonials from our satisfied customers!
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <div className="h-10 w-10 bg-[#f0e9f7] flex justify-center items-center rounded-full">
              <GoChevronLeft className="text-[#8d23c7]" size={18} />
            </div>
            <div className="h-10 w-10 bg-[#f0e9f7] flex justify-center items-center rounded-full">
              <GoChevronRight className="text-[#8d23c7]" size={18} />
            </div>
          </div>

          <button className="mt-6 h-10 px-5 rounded-full bg-gradient-to-r from-[#8d23c7] to-[#774cf9] text-white text-sm font-medium">
            View All Reviews
          </button>
        </div>

        <div className="max-w-md mx-auto text-center mt-12">
          <RiDoubleQuotesL className="text-[#e3cdf0] mx-auto" size={50} />
          <p className="text-[#77838f] text-sm leading-6 mt-3 px-4">
            Thank you for guiding us through the construction process,
            understanding and process, and always ready to accommodate our
            needs. We love our new space and know that it was built by the very
            best!
          </p>
          <h1 className="text-lg font-semibold text-[#333] mt-4">
            Sarah Carlos
          </h1>
          <h2 className="text-sm text-[#333] mt-1">CREATIVE DIRECTOR</h2>

          <div className="flex justify-center gap-4 mt-6">
            {[
              {
                src: "https://elmanawy.info/demo/ariel/ltr/images/reviews/author-3.jpg",
                active: false,
              },
              {
                src: "https://elmanawy.info/demo/ariel/ltr/images/reviews/author-1.jpg",
                active: true,
              },
              {
                src: "https://elmanawy.info/demo/ariel/ltr/images/reviews/author-2.jpg",
                active: false,
              },
            ].map(({ src, active }, idx) => (
              <div
                key={idx}
                className="h-14 w-14 border rounded-full overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`review-${idx}`}
                  width={56}
                  height={56}
                  className={`object-cover rounded-full ${
                    active ? "" : "opacity-25"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 max-w-full px-4">
          <Slider
            dots={false}
            infinite={true}
            speed={500}
            slidesToShow={2}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={2000}
            arrows={false}
          >
            {CompanyLogo.map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center px-4">
                <Image
                  src={logo}
                  alt={`Company Logo ${idx + 1}`}
                  width={100}
                  height={100}
                  className="object-contain opacity-70 grayscale hover:grayscale-0 transition hover:opacity-100"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
  return (
    <div className="relative -mt-30 w-full">
      <BgScreenshot />
      <div className="transform rotate-[180deg] -mt-20">
        <BgScreenshot />
      </div>
      <div className="absolute -mt-225 ml-50 text-[#333] h-40 w-100">
        <h1 className="text-3xl">What Our Customers Says!</h1>
        <p className="text-[#77838f] text-base mt-5 leading-7 font-normal">
          Don&apost just believe our words.
          <br />
          Check these testimonials from our satisfied customers!
        </p>
        <div className="flex gap-2 mt-8">
          <div className="h-11 w-11 bg-[#f0e9f7] flex justify-center items-center rounded-full">
            <GoChevronLeft className="text-[#8d23c7]" size={20} />
          </div>
          <div className="h-11 w-11 bg-[#f0e9f7] flex justify-center items-center rounded-full">
            <GoChevronRight className="text-[#8d23c7]" size={20} />
          </div>
        </div>
        <div className="mt-10 flex">
          <button className="h-12 w-45 border rounded-3xl bg-linear-to-r from-[#8d23c7] to-[#774cf9] text-white">
            View All Reviews
          </button>
        </div>
        {/* </div> */}
      </div>
      <div className="absolute -mt-245 ml-180">
        <RiDoubleQuotesL className="text-[#e3cdf0]  ml-70" size={70} />
        <p className="text-base w-150 h-25 mt-3  mr-20 text-[#77838f] leading-7 text-center font-normal">
          Thank you for guiding us through the construction process
          understanding and process, and always ready to accommodate our needs.
          We love our new space and know that it was built by the very best!
        </p>
        <h1 className="text-xl font-[Poppins] font-semibold text-[#333] text-center">
          Sarah Carlos
        </h1>
        <h2 className="font-semibold text-sm font-[Poppins] text-center text-[#333] mt-1">
          CREATIVE DIRECTOR
        </h2>
        <div className="flex mt-10  gap-30 ml-20">
          <div className="h-17 w-17 border rounded-full">
            <Image
              src="https://elmanawy.info/demo/ariel/ltr/images/reviews/author-3.jpg"
              alt="review-person"
              width={80}
              height={80}
              className=" rounded-full object-cover opacity-25"
            />
          </div>
          <div className="h-17 w-17 border rounded-full">
            <Image
              src="https://elmanawy.info/demo/ariel/ltr/images/reviews/author-1.jpg"
              alt="review-person"
              width={80}
              height={80}
              className=" rounded-full object-cover"
            />
          </div>
          <div className="h-17 w-17 border rounded-full">
            <Image
              src="https://elmanawy.info/demo/ariel/ltr/images/reviews/author-2.jpg"
              alt="review-person"
              width={80}
              height={80}
              className=" rounded-full object-cover opacity-25"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center absolute -mt-130 left-0">
        <div className="w-[1100px]">
          <Slider
            dots={false}
            infinite={true}
            speed={500}
            slidesToShow={5}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={2000}
            arrows={false}
          >
            {CompanyLogo.map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-10"
              >
                <Image
                  src={logo}
                  alt={`Company Logo ${idx + 1}`}
                  width={180}
                  height={180}
                  className="object-contain opacity-70 filter grayscale hover:grayscale-0 transition hover:cursor-pointer hover:opacity-100"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
