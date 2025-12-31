import Link from 'next/link';
import FAQ from '@/components/FAQ';

const services = [
  {
    title: "Website Development",
    description: "Custom, high-performance websites tailored to your brand. We build responsive, SEO-optimized sites that convert visitors into customers.",
    icon: "💻"
  },
  {
    title: "App & PWA Development",
    description: "Turn your ideas into reality with cutting-edge mobile applications and Progressive Web Apps (PWAs) that work seamlessly across devices.",
    icon: "📱"
  },
  {
    title: "UI/UX Design",
    description: "User-centric design that delights. We create intuitive interfaces and engaging user experiences that keep your audience coming back.",
    icon: "🎨"
  },
  {
    title: "Maintenance & Support",
    description: "Keep your digital presence secure and up-to-date. Our packages include regular updates, security monitoring, and content changes.",
    icon: "🛠️"
  }
];

const industries = [
  {
    title: "Dentists",
    description: "Patient-focused websites with appointment booking and service showcases.",
    slug: "dentists"
  },
  {
    title: "Plumbers",
    description: "Emergency-ready sites with quick-call buttons and service area maps.",
    slug: "plumbers"
  },
  {
    title: "Local Businesses",
    description: "Growth-oriented solutions to dominate your local market.",
    slug: "local-businesses"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto bg-gray-50 pb-20">
      <div className="space-y-16">
        {/* Core Services */}
        <section>
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Our Services</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive digital solutions designed to help your business thrive in the modern economy.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
 
        {/* Industry Solutions */}
         <section className="bg-blue-900 text-white rounded-3xl p-12 overflow-hidden relative">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Specialized Solutions</h2>
                    <p className="text-blue-100 max-w-2xl mx-auto">We've built specialized templates and strategies for specific industries to get you up and running faster.</p>
                </div>
 
                <div className="grid md:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                        <Link key={index} href={`/services/${industry.slug}`} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-all group">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">{industry.title}</h3>
                            <p className="text-blue-100 text-sm mb-4">{industry.description}</p>
                            <span className="text-blue-300 text-sm font-semibold flex items-center gap-2">
                                Learn more <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

        <FAQ />

        {/* CTA */}
        <section className="text-center bg-white p-12 rounded-2xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to start your project?</h2>
            <p className="text-gray-600 mb-8">Get in touch with us today for a free consultation and quote.</p>
            <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
                Get a Free Quote
            </Link>
        </section>
      </div>
    </main>
  );
}
