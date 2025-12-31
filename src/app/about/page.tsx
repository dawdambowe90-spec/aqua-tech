import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto bg-gray-50 pb-20">
      
      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
            We Are <span className="text-blue-600">ATS Creative Hub</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are a premier digital agency dedicated to serving businesses across the <strong>USA, UK, and Canada</strong>.
          </p>
          <p className="text-lg text-gray-600">
            Our mission is simple: <strong>To bridge the digital divide</strong> by providing world-class, affordable web and app development services. While our Headquarters is in The Gambia, our focus is providing Western-standard quality to international markets.
          </p>
          <div className="pt-4">
             <Link href="/contact" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">
                Work With Us
             </Link>
          </div>
        </div>
        <div className="flex-1 relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl border border-gray-200">
           <Image 
             src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
             alt="Team working together" 
             fill
             className="object-cover"
           />
        </div>
      </div>

      {/* Stats/Values */}
      <div className="grid md:grid-cols-3 gap-8 mb-24">
         <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">5+</div>
            <h3 className="text-xl font-bold text-gray-900">Years Experience</h3>
            <p className="text-gray-500 mt-2">Delivering excellence consistently.</p>
         </div>
         <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
            <h3 className="text-xl font-bold text-gray-900">Projects Launched</h3>
            <p className="text-gray-500 mt-2">Across various industries globally.</p>
         </div>
         <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
            <h3 className="text-xl font-bold text-gray-900">Client Satisfaction</h3>
            <p className="text-gray-500 mt-2">We don't stop until you're happy.</p>
         </div>
      </div>

      {/* Why Choose Us */}
      <section className="bg-blue-900 text-white rounded-3xl p-12 md:p-16 relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose ATS?</h2>
           <div className="grid gap-6 text-left">
              <div className="flex gap-4">
                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">🚀</div>
                 <div>
                    <h3 className="text-xl font-bold mb-1">Speed & Performance</h3>
                    <p className="text-blue-100">We build sites that load instantly, keeping your customers engaged.</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">📱</div>
                 <div>
                    <h3 className="text-xl font-bold mb-1">Mobile First</h3>
                    <p className="text-blue-100">Every pixel is optimized for smartphones, tablets, and desktops.</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">🤝</div>
                 <div>
                    <h3 className="text-xl font-bold mb-1">Long-Term Partnership</h3>
                    <p className="text-blue-100">We are not hit-and-run devs. We support you as your business grows.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

    </main>
  );
}
