import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://aquatech-agency.com"; // Placeholder, update to actual if known

export const metadata: Metadata = {
  title: "ATS Creative Hub — Websites for Local Businesses | Starter $999",
  description: "We build fast, mobile-first websites for dentists, plumbers and boutiques. Starter sites from $999 — SEO-ready, responsive, and backed by priority support.",
  keywords: ["web development agency", "custom website design", "SEO experts", "USA web dev", "UK web development", "Canada web design", "Gambia tech agency", "Aqua Tech Agency", "Next.js development"],
  authors: [{ name: "ATS Creative Hub" }],
  creator: "ATS Creative Hub",
  publisher: "ATS Creative Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
      "en-CA": "/en-CA",
      "en-GM": "/en-GM",
    },
  },
  openGraph: {
    title: "ATS Creative Hub — Websites for Local Businesses",
    description: "Starter websites from $999. Local SEO, booking systems, and priority hosting.",
    url: "https://aquatech-agency.com",
    siteName: "ATS Creative Hub",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ATS Creative Hub - Premium Web Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqua Tech Agency | Expert Web Development",
    description: "High-performance, SEO-optimized web development services globally.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "ai-content": "web development services, ecommerce solutions, agency overview",
    "dc.language": "en",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ATS Creative Hub",
  "telephone": "+2202390892",
  "email": "aquaTechssolutions@gmail.com",
  "url": "https://aqua-tech-vert.vercel.app/",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Banjul",
    "addressCountry": "GM"
  },
  "areaServed": ["US", "UK", "CA", "GM"],
  "sameAs": []
};

import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
          Skip to content
        </a>
        <Header />
        <div id="main-content">
          {children}
        </div>
        <Footer />
        <FloatingContact />
        <CookieConsent />
      </body>
    </html>
  );
}
