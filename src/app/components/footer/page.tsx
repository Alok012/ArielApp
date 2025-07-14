"use client";
import Image from "next/image";
import Link from "next/link";
import WaveBackground from "../wavebackground/page";
import { TiSocialFacebook } from "react-icons/ti";
import { ImTwitter } from "react-icons/im";
import { FaInstagram, FaPinterestP } from "react-icons/fa";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import { SlArrowUp } from "react-icons/sl";
import { TfiHeart } from "react-icons/tfi";
const Footer = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1400);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (!isMobile) {
    return (
      <>
        {showScrollTop && (
          <div
            className="fixed bottom-10 right-10 z-50"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#8d23c7] to-[#774cf9] flex items-center justify-center shadow-lg cursor-pointer">
              <SlArrowUp className="text-white" size={18} />
            </div>
          </div>
        )}
        <div className="relative mt-5">
          <WaveBackground />
          <div className=" font-bold ml-50 absolute top-110">
            <Image
              src="https://elmanawy.info/demo/ariel/ltr/images/logo.png"
              alt="logo"
              width={180}
              height={180}
              className=""
            />
            <div className="w-80 h-40 mt-5">
              <p className="text-white font-normal text-base">
                Intrinsicly matrix high standards in niches whereas
                intermandated niche markets. Objectively harness competitive
                resources.
              </p>
            </div>
            <nav className="flex gap-2 -mt-15">
              <Link href="#">
                <div className=" h-8 w-8 bg-[#b97cdd] rounded-full flex justify-center items-center text-white">
                  <TiSocialFacebook size={24} />
                </div>
              </Link>
              <Link href="#">
                <div className=" h-8 w-8 bg-[#b97cdd] rounded-full flex justify-center items-center text-white">
                  <ImTwitter size={18} />
                </div>
              </Link>
              <Link href="#">
                <div className=" h-8 w-8 bg-[#b97cdd] rounded-full flex justify-center items-center text-white">
                  <FaInstagram />{" "}
                </div>
              </Link>
              <Link href="#">
                <div className=" h-8 w-8 bg-[#b97cdd] rounded-full flex justify-center items-center text-white">
                  <FaPinterestP />
                </div>
              </Link>
            </nav>
          </div>
          <div className="flex relative -mt-80 ml-150">
            <div className="text-white ">
              <span className="flex">
                <HiOutlineSquare2Stack size={20} className="text-white mt-2" />
                <h1 className="ml-2 my-2 font-semibold">USEFUL LINKS</h1>
              </span>
              <div className="flex">
                <MdKeyboardDoubleArrowRight size={15} className="ml-2 my-2" />
                <h2>Home</h2>
              </div>
              <div className="flex">
                <MdKeyboardDoubleArrowRight size={15} className="ml-2 my-2" />
                <h2>About</h2>
              </div>
              <div className="flex">
                <MdKeyboardDoubleArrowRight size={15} className="ml-2 my-2" />
                <h2>Contact Us</h2>
              </div>
              <div className="flex">
                <MdKeyboardDoubleArrowRight size={15} className="ml-2 my-2" />
                <h2>Reviews</h2>
              </div>
              <div className="flex">
                <MdKeyboardDoubleArrowRight size={15} className="ml-2 my-2" />
                <h2>Faqs</h2>
              </div>
              <div className="flex">
                <MdKeyboardDoubleArrowRight size={15} className="ml-2 my-2" />
                <h2>News</h2>
              </div>
              <div className="text-white relative -mt-56 ml-45">
                <span className="flex">
                  <HiOutlineSquare2Stack
                    size={20}
                    className="text-white mt-2"
                  />
                  <h1 className="ml-2 my-2 font-semibold">USER ACCOUNT</h1>
                </span>
                <div className="flex">
                  <MdKeyboardDoubleArrowRight size={15} className="ml-2 my-2" />
                  <h2>Sign In</h2>
                </div>
                <div className="flex">
                  <MdKeyboardDoubleArrowRight size={15} className="ml-2 my-2" />
                  <h2>Sign Up</h2>
                </div>
                <div className="flex">
                  <MdKeyboardDoubleArrowRight size={15} className="ml-2 my-2" />
                  <h2>Reset Password</h2>
                </div>
                <div className="flex">
                  <MdKeyboardDoubleArrowRight size={15} className="ml-2 my-2" />
                  <h2>Recover Account</h2>
                </div>
                <div className="flex">
                  <MdKeyboardDoubleArrowRight size={15} className="ml-2 my-2" />
                  <h2>404 Not Found</h2>
                </div>
                <div className="flex">
                  <MdKeyboardDoubleArrowRight size={15} className="ml-2 my-2" />
                  <h2>Coming Soon</h2>
                </div>
                <div className="text-white relative -mt-56 ml-50">
                  <span className="flex">
                    <HiOutlineSquare2Stack
                      size={20}
                      className="text-white mt-2"
                    />
                    <h1 className="ml-2 my-2 font-semibold">NEWSLETTER</h1>
                  </span>
                  <p className="h-15 w-80">
                    Subscribe our newsletter to get our update. We don&apos;t
                    send span email to you.
                  </p>
                  <form className="flex rounded-full overflow-hidden shadow-lg max-w-md mt-5">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="flex-grow px-4 py-2 text-sm h-12 outline-none bg-white text-black"
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#8f2ee5] to-[#7920ca] px-6 py-2 text-sm font-semibold text-white"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 absolute w-[72%] mx-60">
            <hr className="border-t border-gray-400 w-full" />
            <p className="text-center mt-6 text-sm text-white flex mx-80">
              Copyrights © 2020. Designed by <TfiHeart className="mx-1 mt-1"/> Marwa El-Manawy
            </p>
          </div>
        </div>
        {showScrollTop && (
          <div
            className="fixed bottom-10 right-10 z-50"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#8d23c7] to-[#774cf9] flex items-center justify-center shadow-lg cursor-pointer">
              <SlArrowUp className="text-white" size={18} />
            </div>
          </div>
        )}
      </>
    );
  }
  return (
    <>
      {showScrollTop && (
        <div
          className="fixed bottom-10 right-5 z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#8d23c7] to-[#774cf9] flex items-center justify-center shadow-lg cursor-pointer">
            <SlArrowUp className="text-white" size={18} />
          </div>
        </div>
      )}

      <div className=" w-full  bg-gradient-to-r from-[#8d23c7] to-[#774cf9] text-white pt-20 pb-10 px-4 mt-80 md:mt-30 ">
        <div className="relative z-10 w-full mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            <div className="lg:w-1/3 text-left lg:text-left -mt-8 ">
              <Image
                src="https://elmanawy.info/demo/ariel/ltr/images/logo.png"
                alt="logo"
                width={180}
                height={180}
                className=" lg:mx-0"
              />
              <p className="mt-4 text-base w-100 font-normal font-[sans-serif]  md:w-120 lg:w-100">
                Intrinsicly matrix high stadards in niches whereas
                intermandated niche markets. Objectively harness competitive
                resources.
              </p>
              <div className="flex justify-start lg:justify-start gap-3 mt-4">
                {[TiSocialFacebook, ImTwitter, FaInstagram, FaPinterestP].map(
                  (Icon, idx) => (
                    <Link key={idx} href="#">
                      <div className="h-8 w-8 bg-[#b97cdd] rounded-full flex items-center justify-center">
                        <Icon size={18} />
                      </div>
                    </Link>
                  )
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-2 mb-3">
                  <HiOutlineSquare2Stack size={20} />
                  <h1 className="font-semibold text-base">USEFUL LINKS</h1>
                </div>
                {["Home", "About", "Contact Us", "Reviews", "Faqs", "News"].map(
                  (item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center  gap-2 my-2 text-sm font-normal"
                    >
                      <MdKeyboardDoubleArrowRight size={15} />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center gap-2 mb-3 ">
                  <HiOutlineSquare2Stack size={20} />
                  <h1 className="font-semibold text-sm mt-4 my-2">USER ACCOUNT</h1>
                </div>
                {[
                  "Sign In",
                  "Sign Up",
                  "Reset Password",
                  "Recover Account",
                  "404 Not Found",
                  "Coming Soon",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 my-2 text-sm font-normal"
                  >
                    <MdKeyboardDoubleArrowRight size={15} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className=" ">
                <div className="flex items-center gap-2 mb-3">
                  <HiOutlineSquare2Stack size={20} />
                  <h1 className="font-normal text-sm mt-4">NEWSLETTER</h1>
                </div>
                <p className="text-base mb-4">
                  Subscribe our newsletter to get our update. We don&apost send
                  spam email to you.
                </p>
                <form className="flex  sm:flex-row rounded-full overflow-hidden shadow-lg max-w-80">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="flex-grow px-4 py-2 text-sm h-12 md:w-20 lg:w-30 outline-none text-black bg-white"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#8f2ee5] to-[#7920ca] px-6 py-2 text-sm font-semibold text-white"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <hr className="border-t border-gray-400 w-full" />
            <p className="text-center mt-6 text-sm text-white flex justify-center items-center">
              Copyrights © 2020. Designed by <TfiHeart className="mx-1 mt-1"/> Marwa El-Manawy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
