import Image from "next/image";
import WaveBackground from "../wavebackground/page";
import Link from "next/link";
import { TiSocialFacebook } from "react-icons/ti";
import { ImTwitter } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div className="relative mt-30">
        <WaveBackground />
        <div className=" font-bold ml-60 absolute top-110 ">
          <Image
            src="https://elmanawy.info/demo/ariel/ltr/images/logo.png"
            alt="logo"
            width={180}
            height={180}
            className=""
          />
          <div className="w-80 h-40 mt-5">
            <p className="text-white font-normal text-base">
              Intrinsicly matrix high standards in niches whereas intermandated
              niche markets. Objectively harness competitive resources.
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
        <div className="flex relative -mt-80 ml-160">
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
                <HiOutlineSquare2Stack size={20} className="text-white mt-2" />
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
                  Subscribe our newsletter to get our update. We don't send span
                  email to you.
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
        <div>        <hr className="bg-red-600 h-[33px] w-full my-2" />
</div>
      </div>
    </>
  );
};
export default Footer;
