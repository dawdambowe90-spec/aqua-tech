import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const blogContent: Record<string, any> = {
  "seo-basics": {
    title: "The Power of Local SEO: Dominate Your Market",
    category: "SEO",
    date: "Jan 2, 2026",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1200",
    content: (
      <>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          In 2026, if your business isn't showing up on the first page of Google, it effectively doesn't exist for 90% of your potential customers. Local SEO isn't just a technical luxury—it's the engine of modern commerce.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Local Business Owners Should Care</h2>
        <p className="mb-6">
          Whether you're running a boutique dental practice in London or a plumbing service in New York, your customers are searching for you using "near me" keywords. professional SEO ensures that when they look, they find YOU, not your competitor.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-8 my-10 rounded-r-2xl">
          <h3 className="text-xl font-bold text-blue-900 mb-2">The ROI of Visibility</h3>
          <p className="text-blue-800 italic">
            "SEO is an investment, not an expense. A well-optimized site doesn't just attract clicks; it builds authority and trust before the customer even makes the first call."
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Modern SEO Means for You in 2026</h2>
        <ul className="list-disc pl-6 space-y-4 mb-8">
          <li><strong>Global Reach, Local Impact:</strong> Target specific neighborhoods in the USA, UK, Canada, and The Gambia.</li>
          <li><strong>Mobile-First Dominance:</strong> Ensure you show up perfectly on phones when people are out and ready to buy.</li>
          <li><strong>AI Search Visibility:</strong> In 2026, we optimize not just for Google, but for the AI models that customers use to get answers.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Growth Journey?</h2>
        <p className="mb-8">
          Don't let another day pass where your competitors are winning the leads that should be yours. Professional SEO is the most cost-effective way to scale your business sustainably.
        </p>
      </>
    )
  },
  "why-websites-matter": {
    title: "5 Reasons Your Business Needs a Website in 2026",
    category: "Strategy",
    date: "Jan 5, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    content: (
      <>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Social media platforms are borrowed ground. Your website is the only digital asset you truly own. In 2026, it is the center of your brand's universe.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Credibility & Trust</h2>
        <p className="mb-6">Customers research before they buy. A professional website signals that you are a legitimate, established business.</p>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 24/7 Sales Engine</h2>
        <p className="mb-6">Your website never sleeps. It collects leads, takes bookings, and answers FAQs while you focus on your craft.</p>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Ownership</h2>
        <p className="mb-6">Understand exactly who your customers are and how they find you without relying on external platform algorithms.</p>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Competitive Advantage</h2>
        <p className="mb-6">Your competitors are already online. A professionally developed site allows you to outrank them with superior speed, better user experience, and targeted SEO.</p>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Mobile-First Accessibility</h2>
        <p className="mb-6">In 2026, most local searches happen on the move. A responsive website ensures you're reachable by every customer on every device, 24/7.</p>
      </>
    )
  },
  "apps-vs-websites": {
    title: "Web App vs. Website: Scaling Your Business Logic",
    category: "Development",
    date: "Jan 1, 2026",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
    content: (
      <>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          A website tells your story; a web app does your work. Understanding which one your business needs is the key to efficient scaling.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Automation through Logic</h2>
        <p className="mb-6">If you need to handle complex user accounts, payments, or data processing, you need a custom web application.</p>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Brochure vs. Functional Product</h2>
        <p className="mb-6">Most local businesses start with a high-performance website to build trust, then scale into apps to handle operations.</p>
      </>
    )
  },
  "hiring-red-flags": {
    title: "50 Red Flags When Hiring a Web Developer in 2026",
    category: "Advice",
    date: "Jan 10, 2026",
    image: "/blog/hiring-red-flags.png",
    content: (
      <>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          In 2026, the standard for web development includes complex integrations such as AI and strict accessibility compliance. To avoid a project failure, watch for these 50 critical red flags categorized by modern standards.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Portfolio & Social Proof</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
          <li><strong>Portfolio of "Coming Soon" Pages:</strong> Suggests projects were abandoned or never completed.</li>
          <li><strong>No Recent Projects:</strong> Latest work from 2022 means they likely haven't adapted to 2026 standards.</li>
          <li><strong>Third-Party Screenshots Only:</strong> Designs without live links often indicate they didn't write the code.</li>
          <li><strong>No Client Video Testimonials:</strong> Lack of verifiable video or LinkedIn-linked reviews is a risk.</li>
          <li><strong>Agency "Add-on" Development:</strong> Companies where web dev is a secondary, non-specialized "side service".</li>
          <li><strong>"Ghost" References:</strong> Over-reliance on "strict NDAs" to avoid showing real work.</li>
          <li><strong>Single-Style Portfolio:</strong> Inability to show varied designs across different industries.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Standards & Code Quality</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
          <li><strong>No Automated Testing:</strong> No unit tests means your site will likely break after every update.</li>
          <li><strong>Ignorance of WCAG 2.2:</strong> Failing accessibility standards is a major legal liability.</li>
          <li><strong>Hard-Coding Content:</strong> Text "locked" in code instead of a CMS forces you to pay for every tiny change.</li>
          <li><strong>"Black Box" Development:</strong> You aren't allowed to see staging sites or repositories during development.</li>
          <li><strong>No Version Control (Git):</strong> No professional way to track changes or revert errors.</li>
          <li><strong>Outdated Server Tech:</strong> Recommending old PHP versions or slow shared hosting.</li>
          <li><strong>Lack of AI Tool Transparency:</strong> Using AI to generate code they can't actually explain or secure.</li>
          <li><strong>Manual Deployment:</strong> Using FTP instead of modern automated tools like Vercel or Netlify.</li>
        </ul>

        <div className="bg-red-50 border-l-4 border-red-500 p-8 my-10 rounded-r-2xl">
          <h3 className="text-xl font-bold text-red-900 mb-2">The Architectural Rule</h3>
          <p className="text-red-800 italic">
            "Software is a living entity. If a developer doesn't have an automated testing and disaster recovery plan, they aren't building a solution—they're building a liability."
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Management & Communication</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
          <li><strong>The "Yes" Man:</strong> Agreeing to every request without checking technical feasibility.</li>
          <li><strong>No Project Manager:</strong> Direct communication only with devs leads to jargon overload.</li>
          <li><strong>Vague Timelines:</strong> Using phrases like "it'll be ready when it's ready" instead of milestones.</li>
          <li><strong>Frequent Rescheduling:</strong> Inability to manage their own calendar for interviews.</li>
          <li><strong>No Discovery Phase:</strong> Skipping the research on your business goals.</li>
          <li><strong>Inconsistency:</strong> Responding fast on Monday but disappearing for the rest of the week.</li>
          <li><strong>No Documentation:</strong> Refusing to document code for future developers.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Business & Legal Risks</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
          <li><strong>No Data Privacy Plan:</strong> Failing to mention GDPR, CCPA, or modern privacy laws.</li>
          <li><strong>Ambiguous IP Ownership:</strong> Contract doesn't explicitly state you own the source code.</li>
          <li><strong>Hidden Fees for Basic Support:</strong> Nickel-and-diming for small bug fixes after launch.</li>
          <li><strong>No Disaster Recovery Plan:</strong> No strategy for hack recovery or server failure.</li>
          <li><strong>Unrealistic Guarantees:</strong> Promising "Page 1 of Google" in weeks.</li>
          <li><strong>Using "Nulled" Plugins:</strong> Pirated tools that contain security backdoors.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Behavioral & Mindset Warnings</h2>
        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
          <li><strong>Badmouthing Former Clients:</strong> A sign of a difficult professional relationship pattern.</li>
          <li><strong>Resistance to Coding Tests:</strong> Refusing a small assessment to prove their skills.</li>
          <li><strong>No Personal Growth:</strong> They haven't learned a new framework in the last three years.</li>
          <li><strong>Defensive Toward Feedback:</strong> Getting cold when you question a design choice.</li>
          <li><strong>Arrogance Over Fundamentals:</strong> Believing basic architecture is "beneath them".</li>
          <li><strong>Reading from a Script:</strong> Eyes darting during interviews to pre-written answers.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-2 font-serif italic text-blue-900">Your Zero-Risk Build Strategy</h2>
        <p className="mb-8 font-semibold text-gray-800">At ATS, we prioritize 100% transparency, Git-based versioning, and full client ownership. No red flags—just world-class delivery in days, not weeks.</p>
      </>
    )
  }
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogContent[slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <Link href="/blog" className="text-blue-600 font-semibold mb-6 inline-block hover:underline">
            &larr; Back to Insights
          </Link>
          <div className="flex items-center gap-3 text-sm font-bold mb-4">
            <span className="bg-blue-100 text-blue-700 py-1 px-3 rounded-full uppercase tracking-wider">{post.category}</span>
            <span className="text-gray-400">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">{post.title}</h1>
        </header>

        <div className="relative h-[450px] w-full rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <Image 
            src={post.image} 
            alt={`Featured image for ${post.title}`} 
            fill
            className="object-cover"
            priority
          />
        </div>

        <article className="prose prose-blue prose-lg max-w-none text-gray-700">
          {post.content}
        </article>

        <footer className="mt-20 p-12 bg-blue-900 rounded-3xl text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Business?</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Get a specialized SEO and web development strategy tailored for the 2026 market across USA, UK, Canada, and The Gambia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-full transition-all"
            >
              Request Free Consultation
            </Link>
            <a 
              href="tel:+2202390892" 
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-full transition-all border border-white/20"
            >
              Call Us Now
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
