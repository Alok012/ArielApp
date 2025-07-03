import Image from "next/image";
import React from "react";

const WorkStep = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="mt-15">
        <h1 className="text-4xl font-semibold text-center">How it Works</h1>
        <div className="text-center font-light text-[#77838f] leading-6 mt-6">
          <p>
            Efficiently syndicate flexible content via cost effective
            initiatives completely leverage vertical quality.
            <br />
            Turn your mobile visitors into your best customers.
          </p>
        </div>
      </div>
      <div className="flex mt-20">
        <div>
          <Image
            src="https://elmanawy.info/demo/ariel/ltr/images/how-work.png"
            alt="workstep-img"
            width={600}
            height={600}
          />
        </div>
        <div className="grid grid-cols-1 ml-20  h-35 w-130 shadow-2xl rounded">
          <div className="flex justify-center items-center">
            <Image
              src="https://elmanawy.info/demo/ariel/ltr/images/step1.png"
              alt="img-1"
              width={30}
              height={30}
              className=" mt-5 mr-10"
            />

            <div>
              <h2 className="text-base  text-[#333] font-semibold mt-6">
                Register / Login To Our Platform
              </h2>
              <p className="text-[#77838f] mt-1 mr-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                Laudantium modi assumenda beatae provident.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center h-35 mt-20 w-130 shadow-2xl rounded ">
            <Image
              src="https://elmanawy.info/demo/ariel/ltr/images/step2.png"
              alt="img-1"
              width={40}
              height={40}
              className="mr-10"
            />

            <div>
              <h2 className="text-base  text-[#333] font-semibold mt-2">
                Enter Your Information Details
              </h2>
              <p className="text-[#77838f] mt-1 mr-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                Laudantium modi assumenda beatae provident.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center shadow-2xl mt-10 h-35 rounded">
            <Image
              src="https://elmanawy.info/demo/ariel/ltr/images/step3.png"
              alt="img-1"
              width={40}
              height={40}
              className="mr-10"
            />

            <div>
              <h2 className="text-base  text-[#333] font-semibold mt-2">
                Follow Your Software Usage Steps
              </h2>
              <p className="text-[#77838f] mt-1 mr-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                Laudantium modi assumenda beatae provident.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkStep;
