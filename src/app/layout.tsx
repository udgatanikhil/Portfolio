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
  title: "Nikhil Udgata | Technical Project Manager | FinTech & AI",
  description:
    "Professional portfolio of Nikhil Udgata, a Technical Project Manager and Business Analyst specializing in digital lending journeys, RAG-based AI applications, healthcare CRM, and predictive risk analytics.",
  keywords: [
    "Nikhil Udgata",
    "Technical Project Manager",
    "Business Analyst",
    "FinBox",
    "LeadSquared",
    "FinTech",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-905 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
