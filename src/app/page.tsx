import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/FAQ";

import { faqs } from "@/data/faqs";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": (faq as any).answerText || faq.answer
      }
    }))
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 space-y-8 text-center md:text-left">
            
            {/* Trust Signal - Immediate Legitimacy */}
            <div className="inline-flex items-center gap-2 bg-blue-800/50 rounded-full px-4 py-1.5 md:mx-0 mx-auto w-fit border border-blue-700 backdrop-blur-sm animate-fade-in-up">
               <div className="flex text-yellow-400 text-sm">★★★★★</div>
               <span className="text-blue-200 text-sm font-medium">Trusted by 50+ businesses in USA, UK, Canada & The Gambia</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              We build fast, mobile-first websites that get <span className="text-blue-400">local customers</span> walking through your door.
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto md:mx-0">
              Designed for dentists, plumbers, and boutiques. Starter sites from $999 with SEO and 30 days support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="/contact" 
                className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
              >
                Get a Free Quote
              </Link>
              <Link 
                href="/portfolio" 
                className="bg-transparent border-2 border-white/20 hover:bg-white/10 text-white text-lg font-semibold py-4 px-8 rounded-lg transition-all"
              >
                View Portfolio
              </Link>
              {/* Secondary Outcome-based CTA */}
              <Link 
                href="/portfolio" 
                className="flex items-center justify-center text-blue-200 hover:text-white font-semibold px-4 transition-colors group"
              >
                See real results <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Industry Filters - "Service Filters" Zone */}
            <div className="pt-4 border-t border-white/10 mt-8">
               <p className="text-sm text-blue-300 mb-3 font-medium uppercase tracking-wider">Specialized Solutions For:</p>
               <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Link href="/services/dentists" className="bg-blue-900/40 hover:bg-blue-800 text-blue-100 text-sm py-2 px-4 rounded-full border border-blue-800 transition-colors">
                     🦷 Dentists
                  </Link>
                  <Link href="/services/plumbers" className="bg-blue-900/40 hover:bg-blue-800 text-blue-100 text-sm py-2 px-4 rounded-full border border-blue-800 transition-colors">
                     🔧 Plumbers
                  </Link>
                  <Link href="/services/local-businesses" className="bg-blue-900/40 hover:bg-blue-800 text-blue-100 text-sm py-2 px-4 rounded-full border border-blue-800 transition-colors">
                     🛍️ Boutiques
                  </Link>
                  <Link href="/services/local-businesses" className="bg-blue-900/40 hover:bg-blue-800 text-blue-100 text-sm py-2 px-4 rounded-full border border-blue-800 transition-colors">
                     ⚖️ Law Firms
                  </Link>
               </div>
            </div>

          </div>

          <div className="flex-1 relative w-full h-[400px] md:h-[500px] hidden md:block">
             <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600" 
                  alt="Young Black Web Developer Working" 
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient for better text readability if sizes overlap on smaller screens, though hidden on md */}
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
             </div>
          </div>

        </div>
      </section>

      {/* Trust Indicators */}
      <section className="w-full bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-8">Trusted by businesses globally</p>
           <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-xl font-bold font-serif text-gray-700">Urban Retail</span>
              <span className="text-xl font-bold font-sans text-gray-800 tracking-tight">RapidFlow</span>
              <span className="text-xl font-bold font-mono text-gray-600">Dentalistcare</span>
              <span className="text-xl font-bold font-serif italic text-gray-700">EcoStay</span>
           </div>
        </div>
      </section>

      {/* Feature Section 1 (Text Left, Image Right) */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
              Mobile-First Design for the Modern World
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Most of your customers are searching on their phones. We build websites that look perfectly aligned on every device—from iPhones to large desktop monitors.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">✓</span>
                Responsive Layouts
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">✓</span>
                Fast Loading Speeds
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">✓</span>
                Touch-Friendly Navigation
              </li>
            </ul>
          </div>
          <div className="flex-1 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100">
             <Image 
               src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800" 
               alt="Mobile friendly web design" 
               fill
               className="object-cover"
             />
          </div>
        </div>
      </section>

      {/* Feature Section 2 (Image Left, Text Right) - Z Pattern */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
              SEO & Performance Built-In
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A beautiful site means nothing if no one can find it. We code with SEO best practices from day one to help you rank higher on Google.
            </p>
             <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">✓</span>
                Clean, Semantic Code
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">✓</span>
                Google Analytics Setup
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">✓</span>
                Local SEO Optimization
              </li>
            </ul>
          </div>
          <div className="flex-1 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100">
             <Image 
               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
               alt="SEO Analytics Dashboard" 
               fill
               className="object-cover"
             />
          </div>
        </div>
      </section>

      {/* Testimonials Section - Social Proof */}
      <section className="w-full py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">Local Business Owners Love Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our neighbors in the USA, UK, Canada, and The Gambia are saying.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             {/* Testimonial 1 */}
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-600 mb-6 italic">"Our boutique needed more than a site—we needed a system. ATS integrated our inventory and booking perfectly. We've seen a 40% increase in online inquiries since launch."</p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden relative">
                      <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" alt="Client Mike Ross" fill className="object-cover" />
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-900">Mike Ross</h4>
                      <p className="text-sm text-gray-500">Urban Retail USA</p>
                   </div>
                </div>
             </div>
             {/* Testimonial 2 */}
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-600 mb-6 italic">"Our dental practice needed a refresh. The 'Growth' package was perfect. They handle all the updates so we can focus on patients."</p>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden relative border-2 border-blue-100">
                       <Image 
                         src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200" 
                         alt="Dr. Sarah Jenkings" 
                         fill 
                         className="object-cover" 
                       />
                    </div>
                   <div>
                      <h4 className="font-bold text-gray-900">Dr. Sarah Jenkings</h4>
                      <p className="text-sm text-gray-500">Dentalistcare UK</p>
                   </div>
                </div>
             </div>
             {/* Testimonial 3 */}
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-600 mb-6 italic">"I was skeptical about working with an agency abroad, but their communication is better than locals! Professional, fast, and affordable."</p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden relative">
                      <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" alt="Client David Chen" fill className="object-cover" />
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-900">David Chen</h4>
                      <p className="text-sm text-gray-500">Urban Retail, Canada</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Process Section - Addressing "Quality Fear" */}
      <section className="w-full py-24 bg-gray-900 text-white">
         <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold mb-6">How We Deliver Excellence</h2>
               <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  We don't use generic templates. Every project follows a clear, professional workflow.
               </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
               <div className="relative">
                  <div className="text-8xl font-black text-white/5 absolute -top-8 -left-4">01</div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3 relative z-10">Discovery</h3>
                  <p className="text-gray-400 relative z-10">We start by understanding your business, your competitors, and your goals via a detailed consultation.</p>
               </div>
               <div className="relative">
                  <div className="text-8xl font-black text-white/5 absolute -top-8 -left-4">02</div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3 relative z-10">Strategy & Design</h3>
                  <p className="text-gray-400 relative z-10">We create custom wireframes and designs tailored to your brand before writing a single line of code.</p>
               </div>
               <div className="relative">
                  <div className="text-8xl font-black text-white/5 absolute -top-8 -left-4">03</div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3 relative z-10">Development</h3>
                  <p className="text-gray-400 relative z-10">Our team builds your site using modern, fast technologies (Next.js) for speed and SEO superiority.</p>
               </div>
               <div className="relative">
                  <div className="text-8xl font-black text-white/5 absolute -top-8 -left-4">04</div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3 relative z-10">Launch & Support</h3>
                  <p className="text-gray-400 relative z-10">We handle the launch and provide 3 months of priority support to ensure everything runs smoothly.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Pricing & Packages Section - Decision Point */}
      <section className="w-full py-24 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium custom development at a fair price. No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Tier */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-500 mb-6 text-sm">Perfect for new local businesses.</p>
              <div className="text-4xl font-bold text-blue-900 mb-6">$999<span className="text-lg text-gray-500 font-normal">/one-time</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-blue-500">✓</span> 5-Page Responsive Website
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-blue-500">✓</span> Basic SEO Setup
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-blue-500">✓</span> Contact Form Integration
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-blue-500">✓</span> 1 Month Free Support
                </li>
              </ul>
              <Link href="/contact?plan=starter" className="block text-center w-full py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-50 transition-colors">
                Get Started
              </Link>
            </div>

            {/* Growth Tier - Hybrid Model */}
            <div className="bg-blue-900 rounded-2xl p-8 border border-blue-800 shadow-2xl relative transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">MOST POPULAR</div>
              <h3 className="text-2xl font-bold text-white mb-2">Growth</h3>
              <p className="text-blue-200 mb-6 text-sm">For service businesses ready to scale.</p>
              <div className="text-4xl font-bold text-white mb-2">$1,499<span className="text-lg text-blue-300 font-normal">/setup</span></div>
              <div className="text-lg text-blue-200 mb-6 font-medium">+ $99/mo (All-Inclusive)</div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white">
                  <span className="text-yellow-400">✓</span> <strong>Everything in Starter</strong>
                </li>
                 <li className="flex items-center gap-3 text-white">
                  <span className="text-yellow-400">✓</span> 10-Page Custom Design
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-yellow-400">✓</span> <strong>Local SEO Setup (GMB + 5 Keywords)</strong>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-yellow-400">✓</span> Booking System Integration
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-yellow-400">✓</span> <strong>Priority Support & Hosting Included</strong>
                </li>
              </ul>
              <Link href="/contact?plan=growth" className="block text-center w-full py-3 rounded-lg bg-white text-blue-900 font-bold hover:bg-gray-100 transition-colors shadow-lg">
                Choose Growth
              </Link>
            </div>

            {/* Enterprise Tier - Anchor Pricing */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-500 mb-6 text-sm">Custom solutions for large orgs.</p>
              <div className="text-4xl font-bold text-blue-900 mb-6">$4,999+<span className="text-lg text-gray-500 font-normal">/project</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-blue-500">✓</span> Unlimited Pages & Features
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-blue-500">✓</span> Full E-commerce Functionality
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-blue-500">✓</span> Custom Web App Development
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-blue-500">✓</span> Dedicated Project Manager
                </li>
              </ul>
              <Link href="/contact?plan=enterprise" className="block text-center w-full py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-50 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
          
          {/* Geographic Arbitrage / Fair Pricing Explanation */}
          <div className="mt-16 bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
             <div className="md:flex items-start gap-6">
                <div className="text-4xl mb-4 md:mb-0">🌍</div>
                <div>
                   <h4 className="text-xl font-bold text-blue-900 mb-2">Why are our prices so competitive?</h4>
                   <p className="text-gray-700 leading-relaxed">
                      <strong>Global Talent, Local Impact.</strong> We operate with a lean, global team headquartered in The Gambia. By eliminating the massive overheads of a London or New York office, we pass those savings directly to you. You get <strong>premium, boutique-agency quality</strong> for a fraction of the cost, while we pay our team top-tier local wages. It's a win-win for everyone.
                   </p>
                </div>
             </div>
          </div>

        </div>
      </section>
      <FAQ />
      <section className="w-full py-20 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Don't let a bad website cost you customers. Get a high-performance site that pays for itself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a 
                href="/contact" 
                className="bg-white text-blue-900 text-lg font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get a Free Quote
              </a>
              <a 
                href="/portfolio" 
                className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white text-lg font-semibold py-4 px-10 rounded-full transition-colors"
              >
                View Our Work
              </a>
          </div>
        </div>
      </section>

    </main>
  );
}
