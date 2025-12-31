import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100 py-16 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
             <div className="relative h-10 w-10">
               <Image 
                 src="/ats-logo.png" 
                 alt="ATS Logo" 
                 fill
                 className="object-contain"
               />
             </div>
             <span className="text-xl font-bold text-white">ATS Creative Hub</span>
          </div>
          <p className="text-sm text-blue-300">
            Empowering businesses with modern, high-performance digital solutions.
          </p>
        </div>

        {/* Shortcuts / Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-4">Shortcuts</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><span className="text-blue-300">Web Development</span></li>
            <li><span className="text-blue-300">App Development</span></li>
            <li><span className="text-blue-300">UI/UX Design</span></li>
            <li><span className="text-blue-300">SEO Optimization</span></li>
            <li><span className="text-blue-300">Maintenance</span></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
                <a href="https://wa.me/2202390892" className="hover:text-white transition-colors flex items-center gap-2">
                    <span>WhatsApp: +220 2390892</span>
                </a>
            </li>
            <li>
                <a href="tel:+2202390892" className="hover:text-white transition-colors flex items-center gap-2">
                    <span>Phone: +220 2390892</span>
                </a>
            </li>
            <li>
                <a href="mailto:aquaTechssolutions@gmail.com" className="hover:text-white transition-colors">
                    aquaTechssolutions@gmail.com
                </a>
            </li>
            <li className="mt-4 text-xs text-blue-400">
                Serving: USA, UK, Canada, & The Gambia (HQ)
            </li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-blue-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-400">
        <p>&copy; 2026 ATS Creative Hub. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
