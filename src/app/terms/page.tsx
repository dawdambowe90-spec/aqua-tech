import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto prose prose-blue lg:prose-xl">
        <h1 className="text-4xl font-bold mb-8 text-blue-900">Terms of Service</h1>
        <p className="text-gray-600 mb-6">Last Updated: Jan 1, 2026</p>
        
        <p>By engaging with ATS Creative Hub, you agree to our professional standards of technical excellence and transparency.</p>
        
        <h2>1. Project Ownership</h2>
        <p>Upon final payment, full intellectual property and source code ownership are transferred to the client. No "black box" code or hidden dependencies.</p>
        
        <h2>2. Professional Delivery</h2>
        <p>We commit to modern standards including mobile-first responsiveness, WCAG accessibility, and high-performance engineering.</p>
        
        <h2>3. Transparency</h2>
        <p>We provide fixed-rate pricing and clear milestones. No hidden fees or "creeping" scope without mutual agreement.</p>
        
        <div className="mt-12">
            <Link href="/" className="text-blue-600 font-bold hover:underline">&larr; Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
