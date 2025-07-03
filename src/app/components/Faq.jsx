"use client"
import { useState } from "react";
export function FAQ() {
  const faqs = [
    {
      question: "What services does DoItVisa offer?",
      answer:
        "We offer expert immigration consultation, visa application support, and personalized guidance throughout the process.",
    },
    {
      question: "How long does the visa process take?",
      answer:
        "The duration varies depending on the visa type and country, but we ensure timely updates and faster processing with our streamlined services.",
    },
    {
      question: "Is the consultation personalized?",
      answer:
        "Yes, each client receives tailored support based on their profile and immigration goals.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0D5EA6] py-16 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Frequently Asked <span className="text-[#87CEFA]">Questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#87CEFA] text-black p-5 rounded-xl shadow-md cursor-pointer"
              onClick={() => toggleFAQ(idx)}
            >
              <h3 className="text-lg font-semibold flex justify-between items-center">
                {faq.question}
                <span className="text-xl">{openIndex === idx ? "-" : "+"}</span>
              </h3>
              {openIndex === idx && (
                <p className="text-sm mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
