import Image from "next/image";
import Bulb from "../../../assets/image.png";
import FingerPrint from "../../../assets/fingerprint.png";
import LifeSaver from "../../../assets/lifesaver.png";
import Layer from "../../../assets/layer.png";
import Bag from "../../../assets/menu.png";
import Square from "../../../assets/portfolio.png";


const Features = () => {
  return (
    <div>
      <div className="mt-40">
        <div className="text-center">
          <h1 className="text-4xl font-[Poppins]">Core Features</h1>
          <div className="w-[50%] h-20 text-center justify-center mx-auto mt-5 text-[#77838f] text-base">
            <p className="leading-6 font-light">
              Efficiently syndicate flexible content via cost effective
              initiatives completely leverage vertical quality. 
              <br/>Turn your mobile
              visitors into your best customers.
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-20 h-[50%] w-[70%] mx-auto mb-20">
        <div className="text-center grid grid-cols-3 ">
          <div className="h-35 w-80 my-3 flex justify-center items-center rounded bg-[#ffffff]">
            <div className=" w-30 h-15">
              <Image src={Bulb} alt="buld-img" height={70} width={70} className="mx-4 mt-1" />
            </div>
            <div className=" ml-8 mr-1 mt-3 h-30 text-left">
              <h1 className="text-lg font-semibold">Discuss Idea</h1>
              <p className="text-[#77838f] text-left mt-1">
                Lorem Ipsum is simply dummy text ever since of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
          <div className="h-35 w-80 my-3 flex justify-center items-center bg-[#ffffff] rounded">
            <div className=" w-30 h-15">
              <Image src={FingerPrint} alt="buld-img" height={70} width={70} className="mx-4 mt-2"/>
            </div>
            <div className=" ml-8 mr-2 mt-3 text-left">
              <h1 className="text-lg font-semibold">Account Security</h1>
              <p className="text-[#77838f] mt-1">
                Lorem Ipsum is simply dummy text ever since of the printing and
                typesetting industry.
              </p>
            </div>
          </div>

          <div className="h-35 w-80 my-3 flex justify-center items-center bg-[#ffffff] rounded">
            <div className=" w-30 h-15 items-center">
              <Image src={LifeSaver} alt="buld-img" height={100} width={100} className="mx-4 mt-2"/>
            </div>
            <div className=" ml-8 mr-1 mt-3 text-left">
              <h1 className="text-lg font-semibold">Discuss Idea</h1>
              <p className="text-[#77838f] mt-1">
                Lorem Ipsum is simply dummy text ever since of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
          <div className="h-35 w-80 my-3 flex justify-center items-center bg-[#ffffff] rounded">
            <div className=" w-30 h-15">
              <Image src={Layer} alt="buld-img" height={70} width={70} className="mx-4 mt-2"/>
            </div>
            <div className=" ml-8 mr-1 mt-3 text-left ">
              <h1 className="text-lg font-semibold">Help Center</h1>
              <p className="text-[#77838f] mt-1">
                Lorem Ipsum is simply dummy text ever since of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
          <div className="h-35 w-80 my-3 flex justify-center items-center bg-[#ffffff] rounded">
            <div className=" w-30 h-15">
              <Image src={Bag} alt="buld-img" height={70} width={70} className="mx-4 mt-2" />
            </div>
            <div className=" ml-8 mr-1 mt-3 text-left">
              <h1 className="text-lg font-semibold">Help Center</h1>
              <p className="text-[#77838f] mt-1">
                Lorem Ipsum is simply dummy text ever since of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
          <div className="h-35 w-80 my-3 flex justify-center items-center bg-[#ffffff] rounded">
            <div className=" w-30 h-15 ">
              <Image src={Square} alt="buld-img" height={70} width={70} className="mx-4 mt-2"/>
            </div>
            <div className=" ml-8 mr-1 mt-3 text-left">
              <h1 className="text-lg font-semibold">Help Center</h1>
              <p className="text-[#77838f] mt-1">
                Lorem Ipsum is simply dummy text ever since of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
