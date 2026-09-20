import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { company, siteUrl } from "@/lib/site-data";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.legalName} | Solar, BESS & Clean Infrastructure`,
    template: `%s | ${company.shortName}`,
  },
  description:
    "Harmony Urja develops, builds, owns, and operates solar power plants across India—with IPP & EPC capabilities, BESS, power infrastructure, and green hydrogen pathways.",
  keywords: [
    "Harmony Urja",
    "solar IPP India",
    "solar EPC",
    "BESS",
    "utility scale solar",
    "green hydrogen",
    "renewable energy India",
  ],
  openGraph: {
    title: `${company.legalName}`,
    description:
      "Premium solar and clean energy solutions—utility plants, storage, and infrastructure for India's transition.",
    url: siteUrl,
    siteName: company.shortName,
    locale: "en_IN",
    type: "website",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  url: siteUrl,
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "House 381, First Floor, Sector 31",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  description:
    "Renewable energy company focused on solar IPP & EPC, BESS, power infrastructure, and green hydrogen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
