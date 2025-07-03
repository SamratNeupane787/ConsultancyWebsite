import Image from "next/image";
import TopNav from "./components/TopNav";
import MainNav from "./components/MainNav";
import HeroSection from "./components/HeroSection"
import AboutUs from "./components/AboutUs";
import Pathway from "./components/Pathway";
import Testimonials from "./components/Testimonials";
import { FAQ } from "./components/Faq";
import { Footer } from "./components/Footer";
export default function Home() {
  return (
   <>
    <HeroSection/>
    <AboutUs/>
    <Pathway/>
    <Testimonials/>
    <FAQ/>
   </>
  );
}
