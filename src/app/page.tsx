import AskedQuestions from "./components/askedQuestions/page";
import BgScreenshot from "./components/bgScreenshot/page";
import Features from "./components/features/page";
import Footer from "./components/footer/page";
import Homepage from "./components/homepage/page";
import LatestNews from "./components/latestNews/page";
import Navbar from "./components/navbar/page";
import Plans from "./components/plans/page";
import PlansBgImage from "./components/plans/plansbgImage/page";
import Reviews from "./components/reviews/page";
import ScreenShot from "./components/screenshot/page";
import WorkStep from "./components/workstep/page";
export default function Home() {
  return (
    <div>
   <div className="bg-[#f8f9fb]">
    <Navbar/>
    <Homepage/>
    <Features/>
   </div>
    <WorkStep/>
    <ScreenShot/>
    <Plans/>
    {/* <Footer/> */}
    {/* <PlansBgImage/> */}
     <Reviews/>
     <AskedQuestions/>
     <LatestNews/>
   </div>
  );
}
