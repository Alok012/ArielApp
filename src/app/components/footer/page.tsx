import Image from "next/image";
import WaveBackground from "../wavebackground/page";
import Link from "next/link";

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
          <div>
            <nav>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
