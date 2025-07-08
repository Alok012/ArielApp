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
    <>
      <div className="-mt-30">
        <div className="h-30 w-130 mx-auto -mt-10">
          <h1 className="text-4xl font-medium text-center text-[#333]">
            Frequently Asked Questions
          </h1>
          <p className="text-[#77838f] font-[Poppins] mt-6 font-light leading-7 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
        </div>
        <div className="flex mt-20">
          <div className="ml-40 translate-y-2 flex">
            <Image
              src="https://elmanawy.info/demo/ariel/ltr/images/faq2.png"
              alt="ask-image"
              height={500}
              width={500}
            />
          </div>
          <div className="ml-30">
            {questions.map((item, idx) => (
              <div key={idx}>
                <Button
                  className="w-[500px] h-[50px] rounded-4xl text-start pl-8 mb-2 my-4 text-base font-medium hover:cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  {item.q}
                </Button>
                {openIndex === idx && (
                  <p className="h-30 w-120 ml-8 mt-6 transition-all duration-300">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default AskedQuestions;
