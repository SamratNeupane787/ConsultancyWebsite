"use client";

import { Phone } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 shadow-sm bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Company Name */}
        <div className="flex items-center gap-3">
          <Image src="/globe.svg" alt="Globe Logo" width={36} height={36} />
          <h1 className="text-lg font-bold text-blue-800">Globe Consultancy</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 text-sm text-gray-600 font-medium items-center">
            <li className="hover:text-blue-600 transition">Home</li>
            <li className="hover:text-blue-600 transition">About Us</li>
            <li className="hover:text-blue-600 transition">Services</li>
            <li className="hover:text-blue-600 transition">Testimonials</li>
            <li className="hover:text-blue-600 transition">Contact</li>
            <li className="hover:text-blue-600 transition">FAQ's</li>
          </ul>
        </nav>

        {/* Contact Section */}
        <div className="hidden md:flex items-center gap-3">
          <div className="bg-blue-100 rounded-full p-2">
            <Phone size={18} color="#0D5EA6" />
          </div>
          <div className="flex flex-col text-sm text-gray-700">
            <span className="text-xs">Call Us Now</span>
            <span className="font-semibold text-base">01-5225252</span>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-blue-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-3 px-4">
          <ul className="flex flex-col gap-2 text-gray-700 font-medium">
            <li className="hover:text-blue-600 transition">Home</li>
            <li className="hover:text-blue-600 transition">About Us</li>
            <li className="hover:text-blue-600 transition">Services</li>
            <li className="hover:text-blue-600 transition">Testimonials</li>
            <li className="hover:text-blue-600 transition">Contact</li>
            <li className="hover:text-blue-600 transition">FAQ's</li>
          </ul>

          {/* Mobile Contact */}
          <div className="flex items-center gap-3 pt-4 border-t">
            <div className="bg-blue-100 rounded-full p-2">
              <Phone size={18} color="#0D5EA6" />
            </div>
            <div className="flex flex-col text-sm text-gray-700">
              <span className="text-xs">Call Us Now</span>
              <span className="font-semibold text-base">01-5225252</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default MainNav;
