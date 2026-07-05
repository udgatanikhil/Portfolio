"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, FileText, Mail, BookOpen, User, Home } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Case Studies", href: "/case-studies", icon: Briefcase },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "Resume", href: "/resume", icon: FileText },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-900 bg-[#090a0f]/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Minimalist Logo */}
        <Link href="/" className="flex items-center space-x-3 group z-10">
          <div className="w-8 h-8 rounded-full border border-slate-800 bg-[#111216] flex items-center justify-center text-cyan-400 font-mono font-bold text-xs transition-colors group-hover:border-cyan-500">
            NU
          </div>
          <div>
            <span className="font-semibold text-white block text-sm tracking-tight">
              Nikhil Udgata
            </span>
            <span className="text-[10px] text-slate-500 font-mono block">
              Technical Project Manager
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 font-mono">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded text-[11px] tracking-wider transition-all duration-200 ${
                  isActive
                    ? "bg-[#111216] text-cyan-400 border border-slate-800"
                    : "text-slate-455 hover:text-white border border-transparent"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Navigation CTA */}
        <div className="md:hidden flex items-center">
          <Link
            href="/contact"
            className="px-4 py-1.5 rounded-full border border-slate-800 hover:border-slate-500 text-slate-300 text-xs font-mono transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Bottom HUD Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#090a0f]/95 border-t border-slate-900 flex justify-around py-2 px-4 shadow-lg backdrop-blur-md">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 py-1 text-[9px] font-mono tracking-widest transition-colors ${
                isActive
                  ? "text-cyan-400"
                  : "text-slate-500 hover:text-slate-200"
              }`}
            >
              <Icon className="w-4 h-4 mb-0.5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
