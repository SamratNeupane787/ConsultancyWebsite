"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function AboutUs() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 1 },
      });

      tl.from(".about-title", { y: 50, opacity: 0, stagger: 0.2 })
        .from(".about-subtitle", { y: 30, opacity: 0 }, "-=0.6")
        .from(".about-paragraph", { opacity: 0, y: 20 }, "-=0.5")
        .from(".about-image", { opacity: 0, scale: 0.95 }, "-=0.8");
    },
    { scope: container }
  );

  return (
    <section ref={container} className="w-full px-4 py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h2 className="about-title text-sm md:text-base text-slate-500 uppercase tracking-wide">
            About the Company
          </h2>
          <h1 className="about-title text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Get the Immigration <br />
            Trainings you <span className="text-[#0D5EA6]">Deserve</span>
          </h1>
          <h3 className="about-subtitle text-lg md:text-xl font-semibold text-[#0D5EA6]">
            Country-Based Immigration Consultancy Agency
          </h3>
          <p className="about-paragraph text-gray-600 text-sm md:text-base leading-relaxed">
            Unlock the immigration training you deserve! Our expert-led programs
            equip you with the tools and guidance to achieve success on your
            immigration journey.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="about-image relative w-full max-w-md h-64 md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Consultancy.jpg"
              alt="Consultancy"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
