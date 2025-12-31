"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Most custom websites are delivered within 2-3 days. Complex web applications or SaaS platforms typically take 4-5 days max depending on the functionality and design requirements."
  },
  {
    question: "How much does a custom website cost?",
    answer: "Our projects are competitively priced based on the scope. We provide fixed-price quotes after our initial consultation, ensuring you know the exact total cost with no hidden surprises or recurring technical fees beyond hosting."
  },
  {
    question: "Do you offer post-launch support and hosting?",
    answer: "Yes. Every project includes 30 days of premium support. While we recommend our 'Power Stack' managed hosting on Vercel for maximum performance, we are fully flexible and can deploy your site to any hosting provider or server of your choice."
  },
  {
    question: "Who owns the website and code once it's finished?",
    answer: "You do. 100%. Once final payment is made, all rights to the code, design, and assets belong to you. We believe in total digital ownership and will provide you with all source files upon request."
  },
  {
    question: "Will I be able to update the content myself?",
    answer: "Absolutely. We build with the latest Headless CMS tools, allowing you to easily update text, manage blogs, and change images without needing any technical knowledge or touching a single line of code."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Yes. We take a mobile-first approach. In 2026, over 80% of local searches happen on phones. Your site will be high-performance, responsive, and optimized for smooth scrolling on all modern devices."
  },
  {
    question: "How does your SEO strategy differ for USA vs. UK markets?",
    answer: "We use regional metadata, localized terminologies, and country-specific schema injections. For example, we target 'dentist near me' in the USA and 'private dentist London' in the UK to ensure local market dominance."
  },
  {
    question: "Can you help businesses in The Gambia scale internationally?",
    answer: "Absolutely. We are proud of our roots in Banjul. We specialize in helping Gambian entrepreneurs build world-class digital platforms that compete effectively in the USA, UK, and Canadian markets."
  },
  {
    question: "Do you integrate with third-party software like CRM or Booking apps?",
    answer: "Yes. We have extensive experience integrating with tools like Jobber, ServiceTitan, LocalMed, Shopify, and various custom APIs to automate your business operations and save you time."
  },
  {
    question: "How do you leverage AI for my website?",
    answer: "We integrate AI-powered SEO optimization, intelligent search assistants, and automated lead sorting to ensure your website isn't just a brochure, but a smart machine that helps grow your business."
  }
];

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
