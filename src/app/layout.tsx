import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vidishurja.com"),
  title: {
    default: "Vidish Urja Private Limited",
    template: "%s | Vidish Urja Private Limited",
  },
  description:
    "Vidish Urja delivers renewable energy development, EPC, and infrastructure solutions for India's clean energy transition.",
  keywords: [
    "Vidish Urja",
    "solar EPC",
    "renewable energy India",
    "clean energy infrastructure",
    "solar power projects",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
