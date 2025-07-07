"use client";
import React, { useState } from "react";
import PlansBgImage from "./plansbgImage/page";
import { BsCurrencyDollar } from "react-icons/bs";
import CheckboxTick from "@/app/utility/checkbox/page";

const Plans = () => {
  const [activePlan, setActivePlan] = useState("monthly");
  return (
    <div className="flex ml-40 mt-100 gap-10">
      <div className=" h-60 w-100 ml-10">
        <p className="text-3xl font-medium capitalize text-[#333]">
          No Additional Costs. <br />
          Pay For What You Use.
        </p>
        <p className="text-[#77838f] text-base mt-5 font-normal">
          Choose the most suitable service for your needs with reasonable price.
        </p>
        <div className="rounded-4xl w-60 h-12 border left-0 mt-6 ">
          <div className="flex justify-evenly items-center h-full ">
            <button
              className={`flex-1 h-full transition-colors duration-200 cursor-pointer ${
                activePlan === "monthly" 
                  ? " bg-gradient-to-r from-[#8d23c7] to-[#774bf8] text-white"
                  : "bg-white bg-opacity-60 text-[#774bf8] font-normal "
              }`}
              onClick={() => setActivePlan("monthly")}
              style={{
                borderTopLeftRadius: "2rem",
                borderBottomLeftRadius: "2rem",
              }}
            >
              MONTHLY
            </button>
            <button
              className={`flex-1 h-full transition-colors duration-200 cursor-pointer ${
                activePlan === "yearly"
                  ? "text-white bg-gradient-to-r from-[#8d23c7] to-[#774bf8]"
                  : "bg-white bg-opacity-60 text-[#774bf8] font-normal "
              }`}
              onClick={() => setActivePlan("yearly")}
              style={{
                borderTopRightRadius: "2rem",
                borderBottomRightRadius: "2rem",
              }}
            >
              YEARLY
            </button>
          </div>
        </div>
      </div>

      <div className=" w-80 h-[50%] relative shadow-md rounded-2xl">
        <PlansBgImage />
        {activePlan == "monthly" && (
          <div className="absolute -mt-55 text-white text-2xl ml-16 font-medium">
            <h2 className="">Individual Plan</h2>
            <BsCurrencyDollar className="mt-2 relative" size={15} />
            <div className="flex items-end absolute -mt-5 ml-4">
              <p className="text-[56px] font-semibold">22</p>
              <span className="text-base ml-0 mb-2">/Month</span>
            </div>
          </div>
        )}
        {activePlan == "yearly" && (
          <div className="absolute -mt-55 text-white text-2xl ml-16 font-medium">
            <h2 className="">Individual Plan</h2>
            <BsCurrencyDollar className="mt-2 relative" size={15} />
            <div className="flex items-end absolute -mt-5 ml-4">
              <p className="text-[56px] font-semibold">122</p>
              <span className="text-base ml-0 mb-2">/Month</span>
            </div>
          </div>
        )}
        <div className="-mt-10">
          <span className="flex mx-5 mt-2">
            <CheckboxTick /> <p className="mx-2">Community Support</p>
          </span>
          <span className="flex mx-5 mt-2">
            <CheckboxTick /> <p className="mx-2">400+ pages</p>
          </span>
          <span className="flex mx-5 mt-2">
            <CheckboxTick />
            <p className="mx-2">100+ header variations</p>
          </span>
          <span className="flex mx-5 mt-2">
            {" "}
            <CheckboxTick />
            <p className="mx-2">20+ homepage options</p>
          </span>
        </div>

        <div className="rounded-4xl w-[90%] mt-6 mb-6 h-12 border flex justify-center
        items-center bg-[#f7effb] mx-auto">
          <button className="text-[#972dc5]">Get Started</button>
        </div>
      </div>
      <div className=" w-80 relative shadow-md -mt-8 rounded-2xl">
        <PlansBgImage />
        {activePlan=="monthly" && (
              <div className="absolute -mt-55 text-white text-2xl ml-16 font-medium">
          <h2 className="">Enterprise Plan</h2>
          <BsCurrencyDollar className="mt-2 relative" size={15} />
          <div className="flex items-end absolute -mt-5 ml-4">
            <p className="text-[56px] font-semibold">99</p>
            <span className="text-base ml-0 mb-2">/Month</span>
          </div>
        </div>
        )}
 
        {activePlan == "yearly" && (
          <div className="absolute -mt-55 text-white text-2xl ml-16 font-medium">
            <h2 className="">Enterprise Plan</h2>
            <BsCurrencyDollar className="mt-2 relative" size={15} />
            <div className="flex items-end absolute -mt-5 ml-4">
              <p className="text-[56px] font-semibold">299</p>
              <span className="text-base ml-0 mb-2">/Month</span>
            </div>
          </div>
        )}
        <div className="-mt-10">
          <span className="flex mx-5 mt-2">
            <CheckboxTick /> <p className="mx-2">24/7 support</p>
          </span>
          <span className="flex mx-5 mt-2">
            <CheckboxTick /> <p className="mx-2">400+ pages</p>
          </span>
          <span className="flex mx-5 mt-2">
            <CheckboxTick />
            <p className="mx-2">200+ header variations</p>
          </span>
          <span className="flex mx-5 mt-2">
            <CheckboxTick />
            <p className="mx-2">40+ homepage options</p>
          </span>
          <span className="flex mx-5 mt-2">
            <CheckboxTick />
            <p className="mx-2">E-commerce</p>
          </span>
          <span className="flex mx-5 mt-2">
            <CheckboxTick />
            <p className="mx-2">Free Domain</p>
          </span>
          <div className="rounded-4xl w-[90%] mt-6 mb-6 h-12 flex justify-center items-center border text-center bg-[#f7effb] mx-auto">
            <button className="text-[#972dc5]">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
