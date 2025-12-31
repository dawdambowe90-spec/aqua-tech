"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-sm bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 z-[100] animate-in slide-in-from-bottom-10 duration-500">
      <h4 className="font-bold text-gray-900 mb-2">Privacy & Cookies</h4>
      <p className="text-sm text-gray-600 mb-4">
        We use absolute minimum cookies to ensure technical excellence and compliance with 2026 standards.
      </p>
      <div className="flex gap-4">
        <button 
          onClick={acceptAll}
          className="bg-blue-600 text-white text-xs font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors"
        >
          Accept All
        </button>
        <Link 
          href="/privacy" 
          className="text-xs font-semibold text-gray-400 hover:text-gray-600 py-2"
          onClick={() => setIsVisible(false)}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
