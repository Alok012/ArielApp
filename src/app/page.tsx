import AskedQuestions from "./components/askedQuestions/page";
import ContactUs from "./components/contactus/page";
import Features from "./components/features/page";
import Footer from "./components/footer/page";
import Homepage from "./components/homepage/page";
import LatestNews from "./components/latestNews/page";
import Navbar from "./components/navbar/page";
import Plans from "./components/plans/page";
import Reviews from "./components/reviews/page";
import ScreenShot from "./components/screenshot/page";
import WorkStep from "./components/workstep/page";

export default function Home() {
  return (
    <div className="border-5">
      <Navbar />
        <Homepage />
      <Features /> 
      <WorkStep />
      <WorkStep />
      <ScreenShot />
        <Plans />
       <Reviews />
      <AskedQuestions />
       {/* <LatestNews />
     <ContactUs /> 
     <Footer /> */}
    </div>
  );
}
