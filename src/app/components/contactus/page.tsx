"use client";
import React from "react";
import { LiaRouteSolid } from "react-icons/lia";
import { LuAlarmClockCheck, LuSend } from "react-icons/lu";
import { GiVibratingSmartphone } from "react-icons/gi";
import Image from "next/image";
import Button from "../button/page";

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.unknown as HTMLInputElement).value.trim();
    const email = (form.email as HTMLInputElement).value.trim();
    const phone = (form.phone as HTMLInputElement).value.trim();
    const message = (form.message as HTMLTextAreaElement).value.trim();

    if (!name || !email || !phone || !message) {
      alert("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <div className="mt-20 px-4 flex flex-col lg:flex-row items-center lg:items-start gap-10">
      {/* Left Info Section */}
      <div className="w-full lg:w-[40%] ml-30">
        <h1 className="text-2xl font-medium text-[#333]">Find Us There</h1>
        <p className="text-[#77838f] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis
          quaerat nostrum.
        </p>

        <h4 className="text-[#333] text-sm font-medium mt-6">Office Location</h4>
        <hr className="bg-gray-200 h-[1px] w-full my-2" />
        <div className="flex mt-2">
          <LiaRouteSolid size={40} className="text-[#901ec1]" />
          <div className="text-[#77838f] text-sm font-normal ml-6 font-[Poppins]">
            <p>12 Street Name</p>
            <p className="mt-2">California, United States</p>
          </div>
        </div>

        <h4 className="text-[#333] text-sm font-medium mt-6">Office Hours</h4>
        <hr className="bg-gray-200 h-[1px] w-full my-2" />
        <div className="flex my-2">
          <LuAlarmClockCheck size={40} className="text-[#901ec1]" />
          <div className="text-[#77838f] text-sm font-normal ml-6">
            <p>Saturday - Thursday</p>
            <p className="mt-2">9:00 AM - 5:00 PM</p>
          </div>
        </div>

        <h4 className="text-[#333] text-sm font-medium mt-6">Phone</h4>
        <hr className="bg-gray-200 h-[1px] w-full my-2" />
        <div className="flex mt-4">
          <GiVibratingSmartphone size={40} className="text-[#901ec1]" />
          <div className="text-[#77838f] text-sm font-normal ml-6">
            <p>+123 4567 890</p>
            <p className="mt-2">+098 7654 321</p>
          </div>
        </div>

        <h4 className="text-[#333] text-sm font-medium mt-6">Email</h4>
        <hr className="bg-gray-200 h-[1px] w-full my-2" />
        <div className="flex my-2">
          <LuSend size={40} className="text-[#901ec1]" />
          <div className="text-[#77838f] text-sm font-normal ml-6">
            <p>info@domain.com</p>
            <p className="mt-2">info@domain.com</p>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-[60%] relative flex justify-center">
        {/* Background image */}
        <Image
          src="https://elmanawy.info/demo/ariel/ltr/images/shapes/contact-form.png"
          alt="contact-bg"
          width={650}
          height={650}
          className="w-full h-auto max-w-[600px]"
        />
        {/* Contact form box */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] shadow-2xl rounded-4xl bg-white w-[90%] sm:w-[85%] md:w-[75%] lg:w-[450px] p-6">
          <form onSubmit={handleSubmit}>
            <h1 className="text-[#333] text-2xl font-medium">
              Let's Talk About Your Idea
            </h1>
            <p className="text-[#77838f] mt-4 mb-4 text-sm">
              Check these testimonials from our satisfied customers!
            </p>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="pl-4 rounded-4xl border border-gray-300 focus:outline-none focus:border-[#901ec1] h-10 w-full my-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="pl-4 rounded-4xl border border-gray-300 focus:outline-none focus:border-[#901ec1] h-10 w-full my-2"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              className="pl-4 rounded-4xl border border-gray-300 focus:outline-none focus:border-[#901ec1] h-10 w-full my-2"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="pl-4 rounded-4xl border border-gray-300 focus:outline-none focus:border-[#901ec1] h-20 w-full my-2"
            />
            <div className="flex justify-start mt-6">
              <Button className="h-12 w-40 rounded-4xl">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
