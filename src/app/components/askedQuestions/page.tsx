"use client";
import Image from "next/image";
import Button from "../button/page";
import React, { useState } from "react";

const questions = [
  {
    q: "What is the best features and services we deliver?",
    a: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?",
  },
  {
    q: "What this app important to me?",
    a: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?",
  },
  {
    q: "How may I take part in and purchase this Software?",
    a: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?",
  },
  {
    q: "How are the objectives of this Software?",
    a: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?",
  },
];

const AskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="px-4 py-12 -mt-30 sm:px-6 lg:px-20 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#333]">
          Frequently Asked Questions
        </h1>
        <p className="text-[#77838f] font-light mt-4 text-sm sm:text-base leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi. Ut ut felis congue nisl hendrerit commodo.
        </p>
      </div>

      <div className="mt-12 flex flex-col lg:flex-row items-center lg:items-start gap-10">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="https://elmanawy.info/demo/ariel/ltr/images/faq2.png"
            alt="ask-image"
            height={500}
            width={500}
            className="max-w-full h-auto"
          />
        </div>

        <div className="w-full lg:w-1/2">
          {questions.map((item, idx) => (
            <div key={idx} className="mb-6">
              <Button
                className="w-full mx-4 md:mx-30 sm:w-[500px] h-[50px] rounded-3xl text-left px-6 mb-2 text-sm sm:text-base font-medium hover:cursor-pointer bg-[#f9f9f9]"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {item.q}
              </Button>
              {openIndex === idx && (
                <p className="mt-3 mx-4 md:mx-30 w-[92%] text-[#555] text-sm sm:text-base px-4">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AskedQuestions;
