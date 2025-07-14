"use client";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const Homepage = () => {
  const rightball = {
    width: 200,
    height: 200,
    borderRadius: "50%",
    background: "#ff9398",
  };
  return (

     <div className="w-full flex ml-0 md:ml-5 -mt-60 md:-mt-120 lg:-mt-160  lg:ml-10">
      <div className="w-full mt-10 px-6 md:ml-10 xl:ml-40">
        <h2 className="text-[#00c9a7] font-medium text-xl ">
          Build Your Brand Automate Your App!
        </h2>
        <div>
          <h2 className="bg-gradient-to-r from-[#8d23c7] to-[#774cf9] bg-clip-text text-transparent text-4xl font-bold mt-4">
            Smart Apps for Smart Life!
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-7">
            The first is a non technical method which requires the use of
            software. Download free Ariel Application software and use advanced
            tools to help prevent getting infected.
          </p>
        </div>
        <motion.div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#00c99c",
            position: "absolute",
            marginTop: "-66px",
            marginLeft: "-116px",
          }}
          animate={{
            y: [0, -40, 0], // move up 40px and come back
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />

        <motion.div
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "#fca249",
            position: "absolute",
            marginTop: "-56px",
            marginLeft: "-116px",
          }}
          initial={{ opacity: 0, scale: 0.01 }}
          animate={{ opacity: 1, scale: [0.08, 0.2, 0.08] }}
          transition={{
            duration: 3,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        <div className="mt-20 flex">
          <button className="h-12 w-45 border rounded-3xl bg-linear-to-r from-[#8d23c7] to-[#774cf9] text-white">
            Get Started Now
          </button>
          <div className="h-14 w-14 rounded-full bg-[#e5f9f6] mx-10 flex">
            <FaPlay className="text-[#00c9a7] mt-5 ml-5" size={18} />
          </div>
          <h4 className="text-[#00c9a7] mt-4 -ml-8 w-30">Play Video</h4>
        </div>
                <motion.div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "#7898a3",
            position: "absolute",
            marginTop: "26px",
            marginLeft: "-6px",
          }}
          initial={{ opacity: 0, scale: 0.01 }}
          animate={{ opacity: 1, scale: [0.08, 0.2, 0.08] }}
          transition={{
            duration: 3,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </div>

      <div className="hidden lg:block">
        <Image
          src="https://elmanawy.info/demo/ariel/ltr/images/banner-5.png"
          alt="mobile-img"
          height={500}
          width={500}
        />
        <div className="absolute top-80 right-12">
          {" "}
          <motion.div
            style={rightball}
            initial={{ opacity: 0, scale: 0.01 }}
            animate={{ opacity: 1, scale: [0.08, 0.2, 0.08] }}
            transition={{
              duration: 3,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
                               <motion.div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "#d27dfa",
            position: "absolute",
            marginTop: "-246px",
            marginLeft: "72px",
          }}
          initial={{ opacity: 0, scale: 0.01 }}
          animate={{ opacity: 1, scale: [0.08, 0.2, 0.08] }}
          transition={{
            duration: 3,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        </div>
        
      </div>
    </div>
  );
};
export default Homepage;
