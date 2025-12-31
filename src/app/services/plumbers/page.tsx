import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Web Development for Plumbers & Home Services | Aqua Tech Agency",
  description: "Emergency-ready websites for plumbers and HVAC companies. Built for lead generation, quick-call functionality, and local SEO dominance.",
};

export default function PlumbersPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Industry Specialized: Trade Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Emergency Service Sites that <span className="text-blue-600">Convert Under Pressure</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            When a pipe bursts at 3 AM, customers don't want a "pretty" site—they want a "FAST" site and a "CALL NOW" button. We build websites that win the emergency call.
          </p>
        </header>

        <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-12 shadow-xl">
          <Image 
            src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=1200"
            alt="Plumber at work"
            fill
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <section className="prose prose-blue prose-lg max-w-none text-gray-700 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The "Zero Friction" Layout</h2>
            <p>
              For plumbers, conversion happens in the first 5 seconds. Our trade-specific templates place your phone number and "Request Service" form in the "Thumb Zone" of mobile devices, ensuring you never lose a lead to poor navigation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Service Area Maps</h3>
              <p className="text-sm">Interactive maps that show exactly where you operate, helping Google rank you in your specific neighborhoods.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Review Syllables</h3>
              <p className="text-sm">Live feeds of your latest Google and Yelp reviews to prove your reliability instantly to new visitors.</p>
            </div>
          </div>

          <div className="my-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">2026 Emergency Lead-Gen Packages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Local Hero</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">$800</p>
                <ul className="text-sm space-y-2 text-gray-600">
                  <li>• High-Performance Landing Page</li>
                  <li>• One-Tap Call Optimization</li>
                  <li>• GMB Setup & Review Feed</li>
                  <li>• 72hr Rapid Launch</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-900 border border-gray-900 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">BEST ROI</div>
                <h3 className="text-xl font-bold mb-2 text-white">Dominator Tier</h3>
                <p className="text-3xl font-bold text-blue-400 mb-4">$1,800</p>
                <ul className="text-sm space-y-2 text-gray-300">
                  <li>• Full Multi-Page Service Site</li>
                  <li>• Advanced Service Area SEO</li>
                  <li>• Automated Lead Attribution</li>
                  <li>• Monthly Growth Reporting</li>
                </ul>
              </div>
              <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Multi-City Fleet</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">Custom</p>
                <ul className="text-sm space-y-2 text-gray-600">
                  <li>• Dynamic Location Injection</li>
                  <li>• Regional SEO Power Stack</li>
                  <li>• CRM Integration (Jobber/ServiceTitan)</li>
                  <li>• 24/7 Site Monitoring</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="my-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Plumbing Lead-Gen FAQ</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg">How fast can you launch my emergency site?</h4>
                <p className="text-gray-600">We offer a 72-hour delivery promise for our 'Local Hero' package. We know that in the trade industry, being online means being in business.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">Can you help me rank in neighboring cities?</h4>
                <p className="text-gray-600">Yes. Our 'Dominator' package includes dynamic service location pages that help you rank for 'Plumber in [City]' for every area you serve.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">Do you integrate with Jobber or ServiceTitan?</h4>
                <p className="text-gray-600">Absolutely. We bridge your website leads directly into your dispatching software so you never miss a job.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <footer className="mt-16 p-8 bg-gray-900 rounded-2xl text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Become the #1 Plumber in Your Area</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Stop losing leads to competitors with better websites. Get an emergency-ready site built in as little as 72hrs.
          </p>
          <Link 
            href="/contact?industry=plumber"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-full transition-all"
          >
            Get an Emergency Website Quote
          </Link>
        </footer>
      </article>
    </main>
  );
}
