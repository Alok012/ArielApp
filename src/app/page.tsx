import Features from "./components/features/page";
import Homepage from "./components/homepage/page";
import Navbar from "./components/navbar/page";
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
   </div>
  );
}
