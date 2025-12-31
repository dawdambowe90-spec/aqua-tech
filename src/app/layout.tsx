import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://aquatech-agency.com"; // Placeholder, update to actual if known

export const metadata: Metadata = {
  title: {
    default: "Aqua Tech Agency | Premium Web Development - USA, UK, Canada, Gambia",
    template: "%s | Aqua Tech Agency"
  },
  description: "Advanced web development agency specializing in custom, high-performance websites for dentists, plumbers, and businesses in the USA, UK, Canada, and The Gambia (HQ). 2026-ready SEO and AI-optimized solutions.",
  keywords: ["web development agency", "custom website design", "SEO experts", "USA web dev", "UK web development", "Canada web design", "Gambia tech agency", "Aqua Tech Agency", "Next.js development"],
  authors: [{ name: "Aqua Tech Agency" }],
  creator: "Aqua Tech Agency",
  publisher: "Aqua Tech Agency",
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
    title: "Aqua Tech Agency | Expert Web Development Worldwide",
    description: "Custom websites for dentists, plumbers, and small businesses. High-performance, SEO-optimized web development services in USA, UK, Canada, and The Gambia.",
    url: siteUrl,
    siteName: "Aqua Tech Agency",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aqua Tech Agency Web Development",
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

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebDevelopmentBusiness",
    "name": "Aqua Tech Agency - Gambia (HQ)",
    "url": siteUrl,
    "telephone": "+220 2390892",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kairaba Avenue",
      "addressLocality": "Banjul",
      "addressCountry": "GM"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebDevelopmentBusiness",
    "name": "Aqua Tech Agency - Canada",
    "url": siteUrl,
    "telephone": "+1-416-555-0123",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bay Street",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "addressCountry": "CA"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebDevelopmentBusiness",
    "name": "Aqua Tech Agency - USA",
    "url": siteUrl,
    "telephone": "+1-888-555-0123",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Lane",
      "addressLocality": "Metro City",
      "addressRegion": "ST",
      "addressCountry": "US"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebDevelopmentBusiness",
    "name": "Aqua Tech Agency - UK",
    "url": siteUrl,
    "telephone": "+44 20 7946 0000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Canary Wharf",
      "addressLocality": "London",
      "addressCountry": "GB"
    }
  }
];

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
        {jsonLd.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <FloatingContact />
        <CookieConsent />
      </body>
    </html>
  );
}
