import Image from "next/image";
import Bulb from "../../../assets/image.png";
import FingerPrint from "../../../assets/fingerprint.png";
import LifeSaver from "../../../assets/lifesaver.png";
import Layer from "../../../assets/layer.png";
import Bag from "../../../assets/menu.png";
import Square from "../../../assets/portfolio.png";

const Features = () => {
  return (
    <div className="bg-gradient-to-b from-[#ffffff] to-[#f8f9fb] mt-40 lg:mt-64 w-full lg:ml-26 xl:ml-0">
      <div className="text-center mx-5">
        <h1 className="text-3xl sm:text-4xl font-[Poppins] -mt-10">
          Core Features
        </h1>
        <div className="w-full sm:w-[100%] md:w-[70%] lg:w-[50%] mx-auto mt-5 text-[#77838f] text-base">
          <p className="leading-6 font-light">
            Efficiently syndicate flexible content via cost effective
            initiatives completely leverage vertical quality.
            <br />
            Turn your mobile visitors into your best customers.
          </p>
        </div>
      </div>

      <div className="mt-16 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {[
            { img: Bulb, title: "Discuss Idea" },
            { img: FingerPrint, title: "Account Security" },
            { img: LifeSaver, title: "Discuss Idea" },
            { img: Layer, title: "Help Center" },
            { img: Bag, title: "Help Center" },
            { img: Square, title: "Help Center" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex bg-white p-4 rounded items-center gap-4 text-left"
            >
              <div className="flex-shrink-0">
                <Image
                  src={feature.img}
                  alt="feature-img"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg font-semibold">{feature.title}</h1>
                <p className="text-[#77838f] mt-1 text-sm">
                  Lorem Ipsum is simply dummy text ever since of the printing
                  and typesetting industry.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
