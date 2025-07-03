import { ArrowRight, Clock, Mail } from "lucide-react";
import React from "react";

function TopNav() {
  return (
    <div className="hidden md:flex mx-6 py-4 flex-row items-center justify-around">
      <div className="flex flex-row items-center gap-3">
        <Mail size={16} color="#0D5EA6" />
        <p className="text-slate-500">contact@consultancy.com</p>
      </div>

      <div className="flex flex-row items-center text-slate-500 gap-3">
        <Clock size={16} color="#0D5EA6" />
        <p>Mondays-Fridays, 9AM-7PM</p>
      </div>

      <div className="bg-[#0D5EA6] text-white px-5 py-2 rounded flex items-center justify-center gap-2 cursor-pointer">
        <p className="text-sm font-medium">Book Consultation</p>
        <ArrowRight size={16} color="#ffffff" />
      </div>
    </div>
  );
}

export default TopNav;
