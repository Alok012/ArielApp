"use client";
import Image from "next/image";
import Button from "../button/page";
import React, { useState } from "react";
import {motion} from "framer-motion"
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
    <div className="px-4 py-12 mt-5 sm:mt-0 lg:-mt-5 xl:-mt-30  sm:px-6 lg:px-20 w-full">
      <div className="text-center w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#333] text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-[#77838f] font-light mt-4 text-sm sm:text-base leading-6 w-100 md:w-150 lg:w-140 ml-0 md:ml-30  text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi. Ut ut felis congue nisl hendrerit commodo.
        </p>
      </div>

      <div className="mt-12 flex flex-col lg:flex-row items-center lg:items-start gap-10">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <Image
            src="https://elmanawy.info/demo/ariel/ltr/images/faq2.png"
            alt="ask-image"
            height={550}
            width={550}
            className="w-full h-auto"
          />
        </motion.div>

        <div className="w-full lg:w-1/2 mt-0 lg:mt-5">
          {questions.map((item, idx) => (
            <div key={idx} className="mb-6  sm:ml-0 lg:-ml-10">
              <Button
                className="w-full mx-2 md:mx-30 sm:w-[200px]  md:w-[550px] h-[50px] rounded-3xl text-left px-6 mb-2 text-sm sm:text-base font-medium hover:cursor-pointer bg-[#f9f9f9]"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {item.q}
              </Button>
              {openIndex === idx && (
                <p className="mt-3 mx-4 md:mx-30 w-[96%] md:w-[80%] lg:w-[78%] text-[#555] text-sm sm:text-base md:text-sm px-4">
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
