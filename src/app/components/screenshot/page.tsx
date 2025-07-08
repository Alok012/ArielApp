"use client";
import React, { useState } from "react";
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

  return (
    <>
      <div className="relative">
        <BgScreenshot />
        <div className="absolute top-100 left-30">
          <h1 className="text-4xl text-center">App Screenshots</h1>

          <div className="text-[#77838f] text-center mt-5 leading-6 text-base">
            <p>
              Efficiently syndicate flexible content via cost effective
              initiatives completely leverage vertical quality.
              <br />
              Turn your mobile visitors into your best customers.
            </p>
          </div>

          <div className="w-[90%] flex justify-center mt-15 h-auto mx-auto">
            <div className="w-full max-w-7xl px-4 relative">
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
                    settings: { slidesToShow: 4 },
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
                      className="flex items-center justify-center mt-2 relative px-3"
                    >
                      <Image
                        src={imageUrl}
                        alt={`imageUrl ${idx + 1}`}
                        width={isCenter ? 280 : 250}
                        height={isCenter ? 445 : 250}
                        unoptimized={true}
                        className={`rounded-2xl transition-all duration-300 ${
                          isCenter
                            ? "w-[290px] h-[445px] object-cover z-20  relative"
                            : "object-contain min-h-[280px]"
                        }`}
                      />
                    </div>
                  );
                })}
              </Slider>

              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 z-30 pointer-events-none">
                <Image
                  src="https://elmanawy.info/demo/ariel/ltr/images/screen/phone.png"
                  alt="Overlay"
                  width={250}
                  height={460}
                  className="h-[470px] w-[250px] object-contain -mt-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenShot;
