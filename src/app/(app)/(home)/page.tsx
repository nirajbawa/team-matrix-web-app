import HeroSection from "./components/HeroSection";
import Login from "./components/Login";
import MembersSection from "./components/MembersSection";
import Sponsors from "./components/Sponsors";

export default function Home() {
  
  return (
    <div className="w-full">
      <HeroSection />
      <Login/>
      <MembersSection/>
      <Sponsors/>
    </div>
  );
}
