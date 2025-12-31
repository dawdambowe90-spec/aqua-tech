import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Web Development for Dentists | Aqua Tech Agency",
  description: "Specialized web solutions for dental practices. Patient-focused designs with appointment booking, HIPAA readiness, and local SEO to grow your practice.",
};

export default function DentistsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Industry Specialized: Healthcare
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Higher Patient Conversion through <span className="text-blue-600">Smart Dental Web Design</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            In the dental industry, your website isn't just a digital brochure—it's your front desk. We build websites that turn nervous searchers into loyal patients.
          </p>
        </header>

        <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-12 shadow-xl bg-blue-50">
          <Image 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200"
            alt="Modern dental office"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Section */}
        <section className="prose prose-blue prose-lg max-w-none text-gray-700 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Stock Templates Fail Dental Practices</h2>
            <p>
              Most dental websites look the same—generic photos of smiling teeth and a clunky "Contact Us" page. In 2026, patients expect more. They want to see your technology, read real reviews, and book an appointment without picking up the phone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Appointment Integration</h3>
              <p className="text-sm">We sync your site directly with systems like LocalMed or Solutionreach, allowing 24/7 booking.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Local SEO Dominance</h3>
              <p className="text-sm">We target "Dentist near me" and specialized terms like "Dental Implants [City]" to capture high-intent traffic.</p>
            </div>
          </div>

          <div className="my-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">2026 Dental Growth Packages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">Startup Practice</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">$1,200</p>
                <ul className="text-sm space-y-2 text-gray-600">
                  <li>• Custom Professional Design</li>
                  <li>• 5 Core Pages</li>
                  <li>• Basic Local SEO</li>
                  <li>• Mobile-First Booking</li>
                </ul>
              </div>
              <div className="p-6 bg-blue-600 border border-blue-600 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-white text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded">MOST POPULAR</div>
                <h3 className="text-xl font-bold mb-2 text-white">Scaling Clinic</h3>
                <p className="text-3xl font-bold text-white mb-4">$2,500</p>
                <ul className="text-sm space-y-2 text-blue-50">
                  <li>• 10+ Pages & Blog</li>
                  <li>• Advanced Patient Portal</li>
                  <li>• Multi-Location Schema</li>
                  <li>• AI Content Strategy</li>
                </ul>
              </div>
              <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">DSO / Enterprise</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">Custom</p>
                <ul className="text-sm space-y-2 text-gray-600">
                  <li>• Complex HIPAA Apps</li>
                  <li>• Multi-Region Dominance</li>
                  <li>• 24/7 Priority Support</li>
                  <li>• Custom API Integrations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="my-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Expert Dental Web FAQ</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg">Are your websites HIPAA-ready?</h4>
                <p className="text-gray-600">Yes. We use encrypted contact forms and secure patient portals to ensure all data collection meets modern healthcare privacy standards.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">How long does it take to see SEO results in London or NYC?</h4>
                <p className="text-gray-600">With our Power Stack approach, clients typically see first-page movement for localized terms (like 'Dentist near me') within 4-6 weeks.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">Can you sync with our existing scheduling software?</h4>
                <p className="text-gray-600">Absolutely. We have extensive experience integrating with systems like LocalMed, Practice-Web, and Solutionreach.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <footer className="mt-16 p-8 bg-gray-900 rounded-2xl text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Practice?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Get a tailored strategy to increase your monthly new patient inquiries by 30% or more.
          </p>
          <Link 
            href="/contact?industry=dentist"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-full transition-all"
          >
            Request Dental Strategy Session
          </Link>
        </footer>
      </article>
    </main>
  );
}
