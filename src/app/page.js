import Image from "next/image";
import TopNav from "./components/TopNav";
import MainNav from "./components/MainNav";
import HeroSection from "./components/HeroSection"
export default function Home() {
  return (
   <>
    <TopNav/>
    <MainNav/>
    <HeroSection/>
   </>
  );
}
