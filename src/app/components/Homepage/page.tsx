import Image from "next/image";
import { FaPlay } from "react-icons/fa";
const Homepage = () => {
  return (
      <div className="flex -ml-30 md:ml-5 -mt-60 md:-mt-120 lg:-mt-160  lg:ml-0">
        <div className="mx-40 mt-10 w-120">
          <h2 className="text-[#00c9a7] font-bold text-2xl ">
            Build Your Brand Automate Your App!
          </h2>
          <div>
            <h2 className="text-[#7b43ee] text-4xl font-bold mt-4">
              Smart Apps for Smart Life!
            </h2>
            <p className="mt-4 text-gray-500 text-base leading-7">
              The first is a non technical method which requires the use of
              software. Download free Ariel Application software and use
              advanced tools to help prevent getting infected.
            </p>
          </div>
          <div className="mt-10 flex">
            <button className="h-12 w-45 border rounded-3xl bg-linear-to-r from-[#8d23c7] to-[#774cf9] text-white">
              Get Started Now
            </button>
            <div className="h-14 w-14 rounded-full bg-[#e5f9f6] mx-10 flex">
              <FaPlay className="text-[#00c9a7] mt-5 ml-5" size={18} />
            </div>
            <h4 className="text-[#00c9a7] mt-4 -ml-8 w-30">Play Video</h4>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            src="https://elmanawy.info/demo/ariel/ltr/images/banner-5.png"
            alt="mobile-img"
            height={500}
            width={500}
          />
        </div>
      </div>
  );
};
export default Homepage;
