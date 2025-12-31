import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto prose prose-blue lg:prose-xl">
        <h1 className="text-4xl font-bold mb-8 text-blue-900">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">Last Updated: Jan 1, 2026</p>
        
        <p>At ATS Creative Hub, we take your data security seriously. In 2026, global compliance is at the heart of our operations.</p>
        
        <h2>1. Data Collection</h2>
        <p>We only collect data that is essential for delivering our premium web development services. This may include your name, email, and project requirements.</p>
        
        <h2>2. Data Usage</h2>
        <p>Your data is used exclusively to facilitate project communications and delivery. We never sell your data to third parties.</p>
        
        <h2>3. Global Compliance</h2>
        <p>We adhere to strict international standards, including GDPR and CCPA, ensuring your business is protected across all regions including USA, UK, Canada, and The Gambia.</p>
        
        <div className="mt-12">
            <Link href="/" className="text-blue-600 font-bold hover:underline">&larr; Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
