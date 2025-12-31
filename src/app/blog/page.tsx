import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    title: "5 Reasons Your Business Needs a Website in 2026",
    excerpt: "Owning your digital real estate is the #1 way to ensure long-term growth. Learn how a custom site builds lasting trust with your customers.",
    category: "Strategy",
    date: "Jan 5, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    slug: "/blog/why-websites-matter"
  },
  {
    title: "The Power of Local SEO: Dominate Your Market",
    excerpt: "Stop being invisible. Discover how professional SEO puts your high-street shop or service directly in front of locals when they're ready to buy.",
    category: "SEO",
    date: "Jan 2, 2026",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800",
    slug: "/blog/seo-basics"
  },
  {
    title: "Web App vs. Website: Scaling Your Business Logic",
    excerpt: "Should you build a brochure or a machine? We break down when a custom web application is the key to automating your sales and growth.",
    category: "Development",
    date: "Jan 1, 2026",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    slug: "/blog/apps-vs-websites"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32 px-6 max-w-7xl mx-auto bg-gray-50 pb-20">
       <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Latest Insights</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Tips, trends, and strategies to help your business succeed online.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all">
             <div className="relative h-56 w-full">
               <Image 
                 src={article.image} 
                 alt={article.title} 
                 fill
                 className="object-cover"
               />
             </div>
             <div className="p-8">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                   <span className="bg-blue-100 text-blue-700 py-1 px-3 rounded-full font-bold">{article.category}</span>
                   <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors">
                  <Link href={article.slug}>{article.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {article.excerpt}
                </p>
                <Link href={article.slug} className="text-blue-600 font-semibold text-sm hover:underline">
                  Read Article &rarr;
                </Link>
             </div>
          </article>
        ))}
      </div>
    </main>
  );
}
