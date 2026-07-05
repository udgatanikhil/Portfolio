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
    "Futuristic portfolio of Nikhil Udgata, a Technical Project Manager specializing in B2B FinTech integration, RAG neural platforms, and machine learning risk engines.",
  keywords: [
    "Nikhil Udgata",
    "Technical Project Manager",
    "Stark Tech",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-slate-100 stark-grid relative overflow-x-hidden font-sans">
        {/* Cyberpunk Stark Glow Layer */}
        <div className="absolute top-0 left-0 w-full h-[800px] stark-radial pointer-events-none z-0"></div>
        <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-cyan-950/5 blur-[120px] pointer-events-none z-0"></div>
        
        <Navbar />
        <main className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 z-10 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
