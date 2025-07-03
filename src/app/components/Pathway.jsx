"use client";

import React from "react";
import Image from "next/image";

const countries = [
  { name: "USA", img: "/usa.jpg" },
  { name: "Australia", img: "/australia.jpg" },
  { name: "New Zealand", img: "/newzealand.jpg" },
];

function Pathway() {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-blue-50 to-white py-16 px-6 md:px-16 rounded-lg shadow-lg max-w-full mx-auto">
      <header className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h4 className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
          Explore Our Offerings
        </h4>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Your Pathway to Success <br /> with Us
        </h2>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 md:px-0">
        {countries.map(({ name, img }) => (
          <article
            key={name}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            aria-label={`Explore pathway to ${name}`}
          >
            <div className="relative h-64">
              <Image
                src={img}
                alt={name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
                priority
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Discover opportunities and tailored pathways for success in{" "}
                {name}.
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Pathway;
