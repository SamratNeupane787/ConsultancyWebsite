"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function HeroSection() {
  useGSAP(() => {
    gsap.from(".bold-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".hero-paragraph", {
      y: 30,
      opacity: 0,
      delay: 0.3,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".hero-buttons", {
      y: 20,
     
      delay: 0.6,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="relative items-center min-h-[28rem] md:min-h-[32rem] lg:h-[32rem] overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 bg-[url('/Consultancy.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[#0D5EA6] opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 py-8 sm:px-8">
        <h1 className="bold-text text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
          Your Global Education & Immigration Partner
        </h1>
        <p className="hero-paragraph mt-4 text-base sm:text-lg md:text-xl text-white max-w-2xl">
          Get expert guidance for Student Visas, IELTS, PTE, SATs, and more —
          all under one roof. Begin your journey to study, work, or settle
          abroad with confidence.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 flex-wrap justify-center items-center">
          <button className="hero-buttons bg-white text-[#0D5EA6] font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">
            Book a Free Consultation
          </button>
          <button className="hero-buttons text-white border border-white px-6 py-3 rounded hover:bg-white hover:text-[#0D5EA6] transition">
            Explore Services
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
