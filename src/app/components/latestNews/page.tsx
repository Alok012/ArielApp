"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../button/page";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const NewsData = [
  {
    image: "https://elmanawy.info/demo/ariel/ltr/images/blog/img1.jpg",
    title: "Design is not just what it looks like Design is how it works",
    logo: "https://elmanawy.info/demo/ariel/ltr/images/blog/author-1.jpg",
    logoTitle: "Anna Morki",
  },
  {
    description: `"${"How to help your team excel at remote collaboration. Here are tips and tools we use on the content team at InVision to keep our remote collaboration game strong. Trust is both a complex and nuanced topic. Its very nature makes it difficult to tackle through direct effort."}"`,
    logo: "https://elmanawy.info/demo/ariel/ltr/images/blog/author-2.jpg",
    logoTitle: "Anna Morki",
  },
  {
    image: "https://elmanawy.info/demo/ariel/ltr/images/blog/img2.jpg",
    title: "Design is not just what it looks like Design is how it works",
    logo: "https://elmanawy.info/demo/ariel/ltr/images/blog/author-3.jpg",
    logoTitle: "Anna Morki",
  },
  {
    description: `"${" How to help your team excel at remote collaboration. Here are tips and tools we use on the content team at InVision to keep our remote collaboration game strong. Trust is both a complex and nuanced topic. Its very nature makes it difficult to tackle through direct effort."}"`,
    logo: "https://elmanawy.info/demo/ariel/ltr/images/blog/author-4.jpg",
    logoTitle: "Anna Morki",
  },
];

const LatestNews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };
  const sliderRef = useRef<Slider | null>(null);
  const handleLeft = () => {
    sliderRef.current?.slickPrev();
  };
  const handleNext = () => {
    sliderRef.current?.slickNext();
  };
  return (
    <div className="relative py-20 px-4 bg-white">
      <div className="text-center mb-10">
        <h1 className="text-[28px] sm:text-[34px] font-semibold text-[#263b5e]">
          Read Our Latest News
        </h1>
        <p className="text-[#77838f] max-w-[500px] mx-auto mt-3 text-sm sm:text-[16px] leading-6">
          Our duty towards you is to share our experience we&apos;re reaching in our
          work path with you.
        </p>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1100px] relative">
          <Slider {...settings} ref={sliderRef}>
            {NewsData.map((item, idx) => (
              <div key={idx} className="px-2 sm:px-4">
                {item.image ? (
                  <div className="h-[400px] rounded-xl flex flex-col justify-between relative">
                    <img
                      src={item.image}
                      alt={`News ${idx + 1}`}
                      
                      className="rounded-xl w-full h-full object-cover bg-[#6b6b6b]"
                    />
                    <div className="absolute top-15 left-0 right-0 px-4">
                      <h2 className="text-white text-lg sm:text-2xl text-center font-medium">
                        {item.title}
                      </h2>
                      <div className=" items-center gap-3 justify-center mt-10 ml-28">
                        <img
                          src={item.logo}
                          alt="author"
                          className="w-10 h-10 sm:w-13 sm:h-13 rounded-full"
                        />
                        <p className="text-sm sm:text-base font-medium text-white">
                          {item.logoTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="shadow-md h-[400px] rounded-xl p-4 flex flex-col justify-between">
                    <p className="leading-6 mt-3 text-sm sm:text-base mx-2">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-3 mt-7 justify-center">
                      <img
                        src={item.logo}
                        alt="author"
                        className="w-10 h-10 sm:w-13 sm:h-13 rounded-full"
                      />
                    </div>
                    <p className="text-sm sm:text-base text-[#333] mb-4 text-center">
                      {item.logoTitle}
                    </p>
                    <Button className="h-[50px] w-[100px] sm:h-[50px] sm:w-[120px] mx-auto rounded-4xl">
                      Read More
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </Slider>
          <div
            className="hidden sm:flex h-11 w-11 bg-[#f0e9f7] justify-center items-center rounded-full absolute top-1/2 -left-6 transform -translate-y-1/2 cursor-pointer"
            onClick={handleLeft}
          >
            <GoChevronLeft className="text-[#8d23c7]" size={20} />
          </div>
          <div
            className="hidden sm:flex h-11 w-11 bg-[#f0e9f7] justify-center items-center rounded-full absolute top-1/2 -right-6 transform -translate-y-1/2 cursor-pointer"
            onClick={handleNext}
          >
            <GoChevronRight className="text-[#8d23c7]" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;