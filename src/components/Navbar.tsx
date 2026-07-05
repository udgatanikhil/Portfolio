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
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-lg bg-indigo-650 dark:bg-indigo-500 flex items-center justify-center text-white font-mono font-bold text-lg transition-transform group-hover:scale-105">
            NU
          </div>
          <div>
            <span className="font-semibold text-slate-900 dark:text-slate-100 block leading-tight">
              Nikhil Udgata
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block">
              Technical Project Manager — FinTech & AI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-slate-100 dark:bg-slate-800 text-indigo-650 dark:text-indigo-400"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-850"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Navigation Bar */}
        <div className="md:hidden flex items-center">
          <Link
            href="/contact"
            className="px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-200"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-800 flex justify-around py-2 px-4 shadow-lg backdrop-blur-md">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 py-1 text-[10px] font-medium transition-colors ${
                isActive
                  ? "text-indigo-650 dark:text-indigo-400"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
