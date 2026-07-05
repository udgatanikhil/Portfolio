import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nikhil Udgata | Technical Project Manager | FinTech & AI Systems",
  description:
    "Earthy minimalist portfolio of Nikhil Udgata, a Technical Project Manager specializing in B2B FinTech integration, RAG neural platforms, and machine learning risk engines.",
  keywords: [
    "Nikhil Udgata",
    "Technical Project Manager",
    "Minimalist Portfolio",
    "FinTech Integration",
    "AI",
    "RAG",
    "Risk Analytics",
    "Process Automation",
    "Jira",
    "Agile Delivery",
  ],
  authors: [{ name: "Nikhil Udgata" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased light`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground stark-grid relative overflow-x-hidden font-sans">
        {/* Soft Organic Aura (Mineral Blue & Sage Green blends) */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#e0eef4]/30 via-[#f5ebe0]/20 to-transparent pointer-events-none z-0"></div>
        <div className="absolute top-[300px] right-0 w-[400px] h-[400px] bg-[#3a4f41]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
        
        <Navbar />
        <main className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 z-10 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
