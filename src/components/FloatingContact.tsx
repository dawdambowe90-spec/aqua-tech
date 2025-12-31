"use client";

import { useEffect, useState, useRef } from "react";

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startHideTimer = () => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 60000); // 1 minute
  };

  useEffect(() => {
    // Initial slide in after 1 second
    const timer = setTimeout(() => {
      setIsVisible(true);
      startHideTimer();
    }, 1000);

    return () => {
      clearTimeout(timer);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsVisible(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  };

  const handleMouseLeave = () => {
    startHideTimer();
  };

  // Base classes moved away from edge (right-6) and made fully circular
  const baseClasses = "fixed right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-700 cursor-pointer border border-white/20 hover:scale-110";
  
  // Slide out to the right when not visible
  const positionClasses = isVisible ? "translate-x-0 opacity-100 scale-100" : "translate-x-24 opacity-0 scale-50";

  return (
    <div 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      className="fixed right-0 top-1/2 -translate-y-1/2 w-24 h-[300px] z-40" // Invisible trigger zone
    >
      {/* WhatsApp Button - Bottom */}
      <a
        href="https://wa.me/2202390892"
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${positionClasses} bg-green-500 text-white bottom-8`}
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        </svg>
      </a>

      {/* Phone Button - Middle */}
      <a
        href="tel:+2202390892"
        className={`${baseClasses} ${positionClasses} bg-blue-600 text-white bottom-24 delay-75`}
        aria-label="Call Us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>

      {/* SMS Button - Top */}
      <a
        href="sms:+2202390892"
        className={`${baseClasses} ${positionClasses} bg-indigo-600 text-white bottom-40 delay-150`}
        aria-label="Send SMS"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
           <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </a>
    </div>
  );
}
