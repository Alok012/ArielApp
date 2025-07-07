import Image from "next/image";
import WaveBackground from "../wavebackground/page";
import Link from "next/link";
import { TiSocialFacebook } from "react-icons/ti";
import { ImTwitter } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="relative mt-30">
        <WaveBackground />
        <div className=" font-bold ml-60 absolute top-110">
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

        <div></div>
      </div>
    </>
  );
};
export default Footer;
