import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Local Business Digital Growth | Aqua Tech Agency",
  description: "Web development and SEO strategies for small and local businesses. Dominate your local market with fast, effective, and affordable digital solutions.",
};

export default function LocalBusinessPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Industry Specialized: Local Growth
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Turn Your <span className="text-blue-600">Local Presence</span> into Your Strongest Asset
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Small businesses don't need a million followers—they need the 1,000 people nearby to find them first. We specialize in digital strategies for the local entrepreneur.
          </p>
        </header>

        <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-12 shadow-xl">
          <Image 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
            alt="Local business meeting"
            fill
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <section className="prose prose-blue prose-lg max-w-none text-gray-700 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Bridging the "Online-to-Store" Gap</h2>
            <p>
              For physical businesses like boutiques, law firms, and cafes, a website serves one main purpose: driving foot traffic and appointments. We focus on clear calls-to-action that get people in your door.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-2">GMB Optimization</h3>
              <p className="text-sm">We sync your website data with Google Business Profile to ensure your hours, address, and reviews are 100% accurate across the web.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Affordable Scaling</h3>
              <p className="text-sm">Our "Growth" packages are designed for local budgets, providing boutique-agency quality without the big-city price tag.</p>
            </div>
          </div>

          <div className="my-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">2026 Main Street Growth Packages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Essential Presence</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">$600</p>
                <ul className="text-sm space-y-2 text-gray-600">
                  <li>• Modern 1-Page Layout</li>
                  <li>• GMB & Map Integration</li>
                  <li>• Basic SEO Package</li>
                  <li>• Mobile-Ready Design</li>
                </ul>
              </div>
              <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">TOP CHOICE</div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">Neighborhood Leader</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">$1,500</p>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• Full 5-7 Page Service Site</li>
                  <li>• Advanced GMB Optimization</li>
                  <li>• Customer Review Engine</li>
                  <li>• AI Chatbot Basic Integration</li>
                </ul>
              </div>
              <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Expansion Pack</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">Custom</p>
                <ul className="text-sm space-y-2 text-gray-600">
                  <li>• Multi-Area SEO Strategy</li>
                  <li>• E-commerce Integration</li>
                  <li>• CRM & Lead Flow Automation</li>
                  <li>• Dedicated Project Manager</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="my-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Local Business Growth FAQ</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg">Why is Google Maps optimization so important?</h4>
                <p className="text-gray-600">Local shoppers don't scroll far. If you aren't in the 'Map Pack' for your city, you're invisible. We ensure your site data and GBP are perfectly synced for maximum visibility.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">Do you work with businesses in The Gambia?</h4>
                <p className="text-gray-600">Yes! We are proud of our Roots in Banjul and provide specialized pricing and payment plans for Gambian entrepreneurs to help them scale locally and internationally.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">Can I update the site content myself?</h4>
                <p className="text-gray-600">Absolutely. We build on a user-friendly CMS architecture that allows you to change hours, menus, or photos without needing a developer.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <footer className="mt-16 p-8 bg-gray-900 rounded-2xl text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Dominate Your Local Market?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join the 50+ businesses across the USA, Canada, and UK that have scaled their local reach with ATS.
          </p>
          <Link 
            href="/contact?industry=local"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-full transition-all"
          >
            Start Your Local Growth Plan
          </Link>
        </footer>
      </article>
    </main>
  );
}
