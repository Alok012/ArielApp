import Image from "next/image";
import React from "react";

const WorkStep = () => {
  return (
    <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto px-4 py-10 mt-10">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center">
          How it Works
        </h1>
        <div className="text-center font-light text-[#77838f] leading-6 mt-6">
          <p>
            Efficiently syndicate flexible content via cost effective
            initiatives completely leverage vertical quality.
            <br />
            Turn your mobile visitors into your best customers.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 mt-16 items-center">
        {/* Left Image */}
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
          <Image
            src="https://elmanawy.info/demo/ariel/ltr/images/how-work.png"
            alt="workstep-img"
            width={600}
            height={600}
            className="w-full h-auto max-w-[500px]"
          />
        </div>

        {/* Steps */}
        <div className="grid gap-10 w-full lg:w-1/2">
          {[
            {
              img: "https://elmanawy.info/demo/ariel/ltr/images/step1.png",
              title: "Register / Login To Our Platform",
            },
            {
              img: "https://elmanawy.info/demo/ariel/ltr/images/step2.png",
              title: "Enter Your Information Details",
            },
            {
              img: "https://elmanawy.info/demo/ariel/ltr/images/step3.png",
              title: "Follow Your Software Usage Steps",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="flex items-start p-4 bg-white shadow-2xl rounded-lg"
            >
              <Image
                src={step.img}
                alt={`step-${idx + 1}`}
                width={40}
                height={40}
                className="mr-4 mt-1 shrink-0"
              />
              <div>
                <h2 className="text-base sm:text-lg text-[#333] font-semibold">
                  {step.title}
                </h2>
                <p className="text-[#77838f] mt-1 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <br />
                  Laudantium modi assumenda beatae provident.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkStep;
