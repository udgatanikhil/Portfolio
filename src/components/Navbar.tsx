"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, FileText, Mail, BookOpen, User, Home, Cpu } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "SYS_HOME", href: "/", icon: Home },
    { name: "ABOUT", href: "/about", icon: User },
    { name: "CASE_STUDIES", href: "/case-studies", icon: Briefcase },
    { name: "INSIGHTS", href: "/blog", icon: BookOpen },
    { name: "DOSSIER", href: "/resume", icon: FileText },
    { name: "CONTACT", href: "/contact", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyan-950 bg-black/60 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Stark Tech Logo */}
        <Link href="/" className="flex items-center space-x-3 group z-10">
          <div className="w-9 h-9 rounded-lg border border-cyan-500/30 bg-cyan-950/20 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] relative">
            <div className="absolute -inset-0.5 border border-cyan-500/10 rounded-lg animate-pulse"></div>
            NU
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-mono text-xs text-cyan-500 uppercase tracking-widest leading-none font-bold">Stark Core</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            </div>
            <span className="font-semibold text-white block text-sm tracking-tight font-sans mt-0.5">
              Nikhil Udgata
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
                className={`px-3 py-1.5 rounded text-[11px] tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-950/30 text-cyan-400 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.1)]"
                    : "text-slate-400 hover:text-white hover:bg-slate-900/50 border border-transparent"
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
            className="px-4 py-1.5 rounded border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 text-xs font-mono tracking-widest bg-cyan-950/10 hover:bg-cyan-950/30 transition-all duration-300"
          >
            SYS_CONNECT
          </Link>
        </div>
      </div>

      {/* Mobile Bottom HUD Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#030712]/95 border-t border-cyan-950/80 flex justify-around py-2 px-4 shadow-[0_-5px_20px_rgba(0,0,0,0.8)] backdrop-blur-md">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 py-1 text-[9px] font-mono tracking-widest transition-colors ${
                isActive
                  ? "text-cyan-450"
                  : "text-slate-500 hover:text-slate-200"
              }`}
            >
              <Icon className="w-4 h-4 mb-0.5" />
              <span>{item.name.replace("_", "")}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
