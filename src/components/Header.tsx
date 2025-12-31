import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        {/* Logo Lockup */}
        <Link href="/" className="flex items-center gap-3 group">
           <div className="relative h-12 w-12 transition-transform group-hover:scale-105 duration-300">
             <Image 
               src="/ats-logo.png" 
               alt="ATS Logo" 
               fill
               className="object-contain"
               priority
             />
           </div>
           <div className="flex flex-col justify-center">
             <span className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">ATS</span>
             <span className="text-xs font-medium text-gray-500 tracking-wider">CREATIVE HUB</span>
           </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</Link>
          <Link href="/services" className="text-gray-600 hover:text-blue-600 font-medium">Services</Link>
          <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 font-medium">Portfolio</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium">About</Link>
          <Link href="/blog" className="text-gray-600 hover:text-blue-600 font-medium">Blog</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</Link>
        </nav>

        {/* Contact Actions (Persistent) */}
        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/2202390892" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 text-gray-600 hover:text-green-600 font-medium"
            aria-label="Contact via WhatsApp"
          >
            <span>WhatsApp</span>
          </a>
          
          <a 
            href="tel:+2202390892" 
            className="hidden lg:flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium"
            aria-label="Call Now"
          >
            <span>+220 2390892</span>
          </a>

          <Link 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors shadow-sm hover:shadow-md"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
