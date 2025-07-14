"use client";
import React, { useEffect, useState } from "react";
import BgScreenshot from "../bgScreenshot/page";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageUrls = [
  "https://elmanawy.info/demo/ariel/ltr/images/screen/2.png",
  "https://elmanawy.info/demo/ariel/ltr/images/screen/3.png",
  "https://elmanawy.info/demo/ariel/ltr/images/screen/2.png",
  "https://elmanawy.info/demo/ariel/ltr/images/screen/3.png",
  "https://elmanawy.info/demo/ariel/ltr/images/screen/1.png",
];

const ScreenShot = () => {
  const [centerSlideIndex, setCenterSlideIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1350);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full relative pt-28 sm:pt-36 mt-10 md:mt-20  pb-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {!isMobile ? (
          <BgScreenshot />
        ) : (
          <div className="bg-[#f8f9fb] w-full h-full "></div>
        )}{" "}
      </div>
      <div className="relative z-10 w-full mx-auto px-4 -mt-12 lg:-mt-20">
        <h1 className="text-4xl sm:text-4xl md:text-4xl text-center font-semibold text-[#333]">
          App Screenshots
        </h1>
        <div className="text-[#77838f] text-center mt-7 sm:mt-5 leading-6 text-sm sm:text-base">
          <p>
            Efficiently syndicate flexible content via cost effective
            initiatives.
            <br />
            Turn your mobile visitors into your best customers.
          </p>
        </div>
        <div className="w-full flex justify-center mt-16">
          <div className="w-full max-w-6xl px-2 sm:px-4 relative">
            <div className=" absolute ml-20 z-20 pointer-events-none md:ml-80 lg:ml-86 xl:ml-112">
              <Image
                src="https://elmanawy.info/demo/ariel/ltr/images/screen/phone.png"
                alt="Phone Overlay"
                width={250}
                height={470}
                className=" object-contain w-[260px] sm:w-[100px] h-[445px] md:w-[230px] lg:w-[228px] xl:w-[228px] ml-0 lg:ml-10 xl:-ml-2"
              />
            </div>

            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={5}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={2000}
              arrows={false}
              afterChange={(currentSlide) => {
                setCenterSlideIndex(currentSlide + 2);
              }}
              responsive={[
                {
                  breakpoint: 1280,
                  settings: { slidesToShow: 5 },
                },
                {
                  breakpoint: 1024,
                  settings: { slidesToShow: 3 },
                },
                {
                  breakpoint: 768,
                  settings: { slidesToShow: 3 },
                },
                {
                  breakpoint: 640,
                  settings: { slidesToShow: 2 },
                },
                {
                  breakpoint: 480,
                  settings: { slidesToShow: 1 },
                },
              ]}
            >
              {ImageUrls.map((imageUrl, idx) => {
                const isCenter = idx === centerSlideIndex;

                return (
                  <div
                    key={idx}
                    className="flex items-center justify-center px-2 sm:px-3"
                  >
                    <Image
                      src={imageUrl}
                      alt={`App Screenshot ${idx + 1}`}
                      width={isCenter ? 285 : 240}
                      height={isCenter ? 445 : 250}
                      unoptimized
                      className={`rounded-2xl transition-all duration-300 ml-20 lg:ml-0 ${
                        isCenter
                          ? " w-[260px] h-[435px] z-10 relative object-cover"
                          : "object-contain h-[426px] mt-3"
                      }`}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenShot;
