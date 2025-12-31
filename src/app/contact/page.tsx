"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function ContactForm() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (plan) {
      const planName = plan.charAt(0).toUpperCase() + plan.slice(1);
      setMessage(`Hi, I'm interested in the ${planName} package. Please tell me more about the next steps.`);
    }
  }, [plan]);

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
       <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
          <p className="text-gray-500">We usually reply within 24 hours.</p>
       </div>
       
       <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input 
              type="text" 
              name="fullName"
              required
              maxLength={100}
              pattern="[A-Za-z\s]+"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="John Doe"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                name="email"
                required
                maxLength={100}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input 
                type="tel" 
                name="phone"
                maxLength={20}
                pattern="[0-9+\s\(\)\-]+"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea 
              name="message"
              rows={4}
              required
              maxLength={1000}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="How can we help you?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-blue-500/25"
          >
            Send Message
          </button>
       </form>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto bg-gray-50 pb-20">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Get in Touch</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how we can help your business grow.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Info - Left Column */}
        <div className="lg:col-span-1 space-y-8">
           {/* Card 1 */}
           <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
              <h3 className="text-xl font-bold mb-6 border-b border-blue-800 pb-4">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                   <div className="bg-blue-800 p-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-200"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                   </div>
                   <div>
                      <p className="text-blue-200 text-sm mb-1">Email Us</p>
                      <a href="mailto:aquaTechssolutions@gmail.com" className="font-semibold hover:text-blue-200 transition-colors">aquaTechssolutions@gmail.com</a>
                   </div>
                </div>
                
                <div className="flex items-start gap-4">
                   <div className="bg-blue-800 p-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-200"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                   </div>
                   <div>
                      <p className="text-blue-200 text-sm mb-1">Call / WhatsApp</p>
                      <a href="tel:+2202390892" className="font-semibold block hover:text-blue-200 transition-colors">+220 2390892</a>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="bg-blue-800 p-2 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-200"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                   </div>
                   <div>
                      <p className="text-blue-200 text-sm mb-1">Headquarters</p>
                      <p className="font-semibold">The Gambia</p>
                      <p className="text-sm text-blue-300 mt-1">Serving USA, UK, Canada</p>
                   </div>
                </div>
              </div>
           </div>
        </div>

        {/* Contact Form - Right Column */}
        <div className="lg:col-span-2">
           <Suspense fallback={<div className="p-12 text-center text-gray-500">Loading form...</div>}>
             <ContactForm />
           </Suspense>
        </div>
      </div>

    </main>
  );
}
