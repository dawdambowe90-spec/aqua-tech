import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "SmileBright Dental",
    category: "Healthcare / SEO",
    description: "A complete website overhaul for a local dental clinic, resulting in a 40% increase in online bookings.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    title: "RapidFlow Plumbing",
    category: "Trades / Lead Gen",
    description: "A high-performance booking platform and service area map that transformed a local plumbing fleet into a digital leader.",
    image: "/portfolio/plumbing-site.png",
    link: "#"
  },
  {
    title: "Global Artisan Market",
    category: "E-Commerce / B2B",
    description: "A borderless digital marketplace connecting world-class artisans with buyers across the UK, USA, and Canada.",
    image: "/portfolio/artisan-market.png",
    link: "#"
  },
  {
    title: "Urban Bistro App",
    category: "Mobile App (PWA)",
    description: "Progressive Web App for a trendy cafe allowing QR code ordering and loyalty rewards.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    title: "TechStart Legal",
    category: "Corporate",
    description: "Professional, trust-building website for a law firm specializing in technology startups.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    title: "EcoStay Resort",
    category: "Hospitality",
    description: "Booking engine and gallery for an eco-friendly resort, emphasizing visual storytelling.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    link: "#"
  }
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto bg-gray-50 pb-20">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Our Work</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We don't just build websites; we build businesses. Check out some of our recent success stories.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden">
               <Image 
                 src={project.image} 
                 alt={`Showcase of ${project.title} - ${project.category}`} 
                 fill
                 className="object-cover group-hover:scale-110 transition-transform duration-500"
               />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">{project.category}</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                {project.description}
              </p>
              <Link href="/contact" className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
                Start a project like this <span>&rarr;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center bg-blue-900 text-white p-12 rounded-3xl">
         <h2 className="text-3xl font-bold mb-4">Want results like these?</h2>
         <p className="text-blue-100 mb-8">Let's discuss how we can transform your digital presence.</p>
         <Link href="/contact" className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
            Get Your Free Quote
         </Link>
      </div>

    </main>
  );
}
