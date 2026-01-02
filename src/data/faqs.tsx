import React from "react";

export const faqs = [
  {
    question: "What is your typical project timeline?",
    answerText: "Most standard business websites are delivered within 2–4 weeks, depending on content readiness and project scope. Larger or custom applications may take longer. We always provide a clear timeline before starting.",
    answer: (
      <div className="space-y-4">
        <p>Most standard business websites are delivered within 2–4 weeks, depending on content readiness and project scope. Larger or custom applications may take longer. We always provide a clear timeline before starting.</p>
        <p className="font-medium text-blue-900 bg-blue-50 p-3 rounded-lg border border-blue-100 italic text-sm">
          🚀 <span className="font-bold not-italic">Need it faster?</span> Expedited builds may be available for an additional fee, depending on availability.
        </p>
      </div>
    )
  },
  {
    question: "Do you offer SEO services?",
    answer: "Yes, all our websites come with foundational SEO optimization (meta tags, fast loading speeds, mobile responsiveness). We also offer monthly SEO packages to help you rank higher on Google for local keywords."
  },
  {
    question: "Can I update the website myself?",
    answer: "Absolutely. We build most sites using user-friendly content management systems. We provide a training session and guide on how to make basic updates. For complex changes, our support packages are available."
  },
  {
    question: "What is included in the support/maintenance?",
    answer: "Our maintenance packages include hosting, daily backups, security updates, and content changes. The 'Growth' package includes 3 hours of developer time per month for new features or design tweaks."
  }
];
