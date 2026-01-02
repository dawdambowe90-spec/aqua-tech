"use client";

import React, { useState } from "react";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about our process and services.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-100 rounded-2xl overflow-hidden hover:border-blue-200 transition-colors shadow-sm"
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-bold text-lg text-gray-900">{faq.question}</span>
                <span className={`text-2xl transition-transform duration-300 ${activeIndex === index ? 'rotate-45 text-blue-600' : 'text-gray-400'}`}>
                  +
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-8 pb-8 text-gray-600 leading-relaxed bg-white">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
