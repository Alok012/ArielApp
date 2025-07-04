import Features from "./components/features/page";
import Footer from "./components/footer/page";
import Homepage from "./components/homepage/page";
import Navbar from "./components/navbar/page";
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
    <Footer/>
   </div>
  );
}
