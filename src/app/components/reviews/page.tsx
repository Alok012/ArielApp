"use client";
import React, { useEffect, useRef, useState } from "react";
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
const testimonials = [
  {
    name: "Sarah Carlos",
    role: "CREATIVE DIRECTOR",
    text: `Thank you for guiding us through the construction process understanding and process, and always ready to accommodate our needs. We love our new space and know that it was built by the very best!`,
    images: [
      "https://elmanawy.info/demo/ariel/ltr/images/reviews/author-3.jpg",
      "https://elmanawy.info/demo/ariel/ltr/images/reviews/author-1.jpg",
      "https://elmanawy.info/demo/ariel/ltr/images/reviews/author-2.jpg",
    ],
  },
  {
    name: "James Robinson",
    role: "PRODUCT MANAGER",
    text: `Thank you for guiding us through the construction process understanding and process, and always ready to accommodate our needs. We love our new space and know that it was built by the very best!`,
    images: [
      "https://elmanawy.info/demo/ariel/ltr/images/reviews/author-1.jpg",
      "https://elmanawy.info/demo/ariel/ltr/images/reviews/author-2.jpg",
      "https://elmanawy.info/demo/ariel/ltr/images/reviews/author-3.jpg",
    ],
  },
  {
    name: "Emily Stone",
    role: "MARKETING LEAD",
    text: `Thank you for guiding us through the construction process understanding and process, and always ready to accommodate our needs. We love our new space and know that it was built by the very best!`,
    images: [
      "https://elmanawy.info/demo/ariel/ltr/images/reviews/author-2.jpg",
      "https://elmanawy.info/demo/ariel/ltr/images/reviews/author-3.jpg",
      "https://elmanawy.info/demo/ariel/ltr/images/reviews/author-1.jpg",
    ],
  },
];
const Reviews = () => {
  const [isMobile, setIsMobile] = useState(true);
  const textSliderRef = useRef<Slider | null>(null);
  const avatarSliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // afterChange: (index: number) => setCurrentSlide(index),
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1400);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLeft = () => {
    textSliderRef.current?.slickPrev();
    avatarSliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    textSliderRef.current?.slickNext();
    avatarSliderRef.current?.slickNext();
  };

  if (isMobile) {
    return (
      <div className="bg-white py-12 px-4 sm:px-6 mt-10">
        <div className="w-full text-center text-[#333]">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            What Our Customers Say!
          </h1>
          <p className="text-[#77838f] text-sm sm:text-base mt-4 leading-6">
            Don&apos;t just believe our words.
            <br />
            Check these testimonials from our satisfied customers!
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handleLeft}
              className="h-10 w-10 bg-[#f0e9f7] flex justify-center items-center rounded-full hover:cursor-pointer hover:bg-gradient-to-r from-[#8d23c7] to-[#774cf9]"
            >
              <GoChevronLeft
                className="text-[#8d23c7] hover:text-white"
                size={18}
              />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 bg-[#f0e9f7] hover:cursor-pointer hover:bg-gradient-to-r from-[#8d23c7] to-[#774cf9] flex justify-center items-center rounded-full"
            >
              <GoChevronRight
                className="text-[#8d23c7] hover:text-white"
                size={18}
              />
            </button>
          </div>

          <button className="mt-6 h-10 px-5 rounded-full bg-gradient-to-r from-[#8d23c7] to-[#774cf9] text-white text-sm font-medium">
            View All Reviews
          </button>
        </div>

        <div className="w-full text-center mt-12 ">
          <Slider {...settings} ref={textSliderRef}>
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="text-center px-4">
                <RiDoubleQuotesL className="text-[#e3cdf0] mxauto" size={70} />
                <p className="text-base w-full mt-3 text-[#77838f] leading-7 font-normal">
                  {testimonial.text}
                </p>
                <h1 className="text-xl font-[Poppins] font-semibold text-[#333] mt-4">
                  {testimonial.name}
                </h1>
                <h2 className="font-semibold text-sm font-[Poppins] text-[#333] mt-1">
                  {testimonial.role}
                </h2>

                {/* <div className="flex mt-10 gap-4  justify-evenly ">
                  {testimonial.images.map((img, i) => (
                    <div
                      key={i}
                      className=" h-17 w-17 rounded-full overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`review-avatar-${i}`}
                        width={80}
                        height={80}
                        className={`rounded-full object-cover ${
                          currentSlide === idx && i === 1
                            ? "opacity-100"
                            : "opacity-25"
                        }`}
                      />
                    </div>
                  ))}
                </div> */}
              </div>
            ))}
          </Slider>
        </div>
        <div className="relative">
          <div className="mt-10 flex justify-center">
            <Slider
              ref={avatarSliderRef}
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={3}
              slidesToScroll={1}
              autoplay={false}
              arrows={false}
              className="w-full"
            >
              {testimonials[0]?.images.map((img: string, i: number) => (
                <div key={i} className="px-12">
                  <div className="h-20 w-20 rounded-full overflow-hidden">
                    <Image
                      src={img}
                      alt={`review-avatar-${i}`}
                      width={80}
                      height={80}
                      className={`rounded-full object-cover transition-opacity duration-300 ${
                        i === 1 ? "opacity-100" : "opacity-25"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="mt-12 w-full px-4">
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
              <div
                key={idx}
                className="flex items-center justify-center px-4"
              >
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

  // Desktop View
  return (
    <div className="relative -mt-30 w-full">
      <BgScreenshot />
      <div className="transform rotate-[180deg] -mt-20">
        <BgScreenshot />
      </div>
      <div className="absolute -mt-225  ml-50 text-[#333] h-40 w-100">
        <h1 className="text-3xl font-semibold text-[#333]">
          What Our Customers Says!
        </h1>
        <p className="text-[#77838f] text-base mt-5 leading-7 font-normal">
          Don&apos;t just believe our words.
          <br />
          Check these testimonials from our satisfied customers!
        </p>
        <div className="flex gap-2 mt-8">
          <div
            className="group h-11 w-11 bg-[#f0e9f7] group-hover:text-white flex justify-center items-center rounded-full hover:cursor-pointer hover:bg-gradient-to-r from-[#8d23c7] to-[#774cf9]"
            onClick={handleLeft}
          >
            <GoChevronLeft
              className="text-[#8d23c7] group-hover:text-white "
              size={20}
            />
          </div>
          <div
            className="group h-11 w-11 bg-[#f0e9f7] flex group-hover:text-white  justify-center items-center rounded-full hover:cursor-pointer hover:bg-gradient-to-r from-[#8d23c7] to-[#774cf9]"
            onClick={handleNext}
          >
            <GoChevronRight
              className="text-[#8d23c7] group-hover:text-white"
              size={20}
            />
          </div>
        </div>
        <div className="mt-10 flex">
          <button className="h-12 w-45  rounded-3xl bg-gradient-to-r from-[#8d23c7] to-[#774cf9] text-white hover:cursor-pointer">
            View All Reviews
          </button>
        </div>
      </div>

      <div className="absolute -mt-245 ml-180  w-[600px]">
        <Slider {...settings} ref={textSliderRef}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="text-center px-4 ">
              <RiDoubleQuotesL className="text-[#e3cdf0] mx-auto" size={70} />
              <p className="text-base w-full mt-3 text-[#77838f] leading-7 font-normal">
                {testimonial.text}
              </p>
              <h1 className="text-xl font-[Poppins] font-semibold text-[#333] mt-4">
                {testimonial.name}
              </h1>
              <h2 className="font-semibold text-sm font-[Poppins] text-[#333] mt-1">
                {testimonial.role}
              </h2>
            </div>
          ))}
        </Slider>
        <div className="relative">
          <div className="mt-10 flex justify-center">
            <Slider
              ref={avatarSliderRef}
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={3}
              slidesToScroll={1}
              autoplay={false}
              arrows={false}
              className="w-full"
            >
              {testimonials[0]?.images.map((img: string, i: number) => (
                <div key={i} className="px-12">
                  <div className="h-20 w-20 rounded-full overflow-hidden">
                    <Image
                      src={img}
                      alt={`review-avatar-${i}`}
                      width={80}
                      height={80}
                      className={`rounded-full object-cover transition-opacity duration-300 ${
                        i === 1 ? "opacity-100" : "opacity-25"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center absolute -mt-130 left-0">
        <div className="w-full">
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
                  width={150}
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
