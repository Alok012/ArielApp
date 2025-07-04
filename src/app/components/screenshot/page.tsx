"use client";
import React, { useState } from "react";
import BgScreenshot from "../bgScreenshot/page";
import { CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const ImageUrls = [
  "https://elmanawy.info/demo/ariel/ltr/images/screen/2.png",
  "https://elmanawy.info/demo/ariel/ltr/images/screen/3.png",
  "https://elmanawy.info/demo/ariel/ltr/images/screen/2.png",
  "https://elmanawy.info/demo/ariel/ltr/images/screen/3.png",
  "https://elmanawy.info/demo/ariel/ltr/images/screen/1.png",
];

const ScreenShot = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleDotClick = (index: number) => {
    // Scroll to the selected item
    const carousel = document.querySelectorAll("[data-carousel-item]")[index];
    if (carousel) {
      carousel.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setCurrentIndex(index);
    }
  };
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
          <div className="mt-15" >
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full min-h-[400px]"
            >
              <CarouselContent>
                {ImageUrls.map((imageUrl, index) => (
                  <CarouselItem
                    key={index}
                    className=" md:basis-1/2 lg:basis-1/5"
                  >
                    <div className="h-[380px] w-[260px] rounded">
                      <CardContent className="flex">
                        <Image
                          src={imageUrl}
                          alt={`Image ${index + 1}`}
                          height={500}
                          width={550}
                          className="object-cover h-full w-full rounded-lg"
                        />
                      </CardContent>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="flex justify-center mt-4 space-x-2">
              {ImageUrls.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? "bg-black" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenShot;
