"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";

// Custom inline SVG icons for social platforms to ensure 100% robust ESM exports
function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setError("Please fill out all required fields.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <div className="space-y-12 max-w-4xl mx-auto py-6 md:py-12 animate-fade-up">
      {/* Page Header */}
      <section className="border-b border-slate-205 dark:border-slate-800 pb-6">
        <div className="space-y-1">
          <h1 className="text-xs font-mono tracking-widest uppercase text-slate-400 dark:text-slate-500">
            Connect
          </h1>
          <h2 className="text-3xl font-bold tracking-tight text-slate-905 dark:text-white">
            Get in Touch
          </h2>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-light">
          Have a project, integration challenge, or technical PM requirement? Let&rsquo;s start a dialogue.
        </p>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Contact Form */}
        <section className="md:col-span-7 premium-card rounded-2xl p-6 bg-white dark:bg-slate-900/40">
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-5">
            Send a Direct Message
          </h3>

          {isSubmitted ? (
            <div className="bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-250 dark:border-emerald-900 p-6 rounded-xl text-center space-y-3">
              <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto" />
              <h4 className="font-bold text-emerald-850 dark:text-emerald-305">
                Message Transmitted
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Thank you for reaching out. I will respond to your email address within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-2 text-xs font-semibold text-brand-indigo hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="text-xs font-medium text-rose-600 dark:text-rose-405 bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 p-3 rounded-lg">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-[10px] font-mono tracking-wider uppercase text-slate-400 dark:text-slate-550 block">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-indigo focus:border-brand-indigo font-light"
                    placeholder="Nikhil Udgata"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-[10px] font-mono tracking-wider uppercase text-slate-400 dark:text-slate-550 block">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-indigo focus:border-brand-indigo font-light"
                    placeholder="udgatanikhil@gmail.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-[10px] font-mono tracking-wider uppercase text-slate-400 dark:text-slate-550 block">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-indigo focus:border-brand-indigo font-light"
                  placeholder="Lending integration, custom AI tools, CRM delivery..."
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-[10px] font-mono tracking-wider uppercase text-slate-400 dark:text-slate-550 block">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-indigo focus:border-brand-indigo resize-none font-light"
                  placeholder="Summarize your project goals or integration timeline..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium bg-brand-indigo hover:bg-indigo-700 text-white disabled:bg-slate-200 dark:disabled:bg-slate-800 disabled:text-slate-405 transition-all duration-300 shadow-sm shadow-indigo-500/5 hover:scale-[1.01]"
              >
                {isSubmitting ? (
                  <>Transmitting Inquiry...</>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Message
                  </>
                )}
              </button>
            </form>
          )}
        </section>

        {/* Direct Coordinates */}
        <section className="md:col-span-5 space-y-6">
          <div className="premium-card rounded-2xl p-6 space-y-6">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              Direct Coordinates
            </h3>

            <div className="space-y-5">
              {/* Coordinate 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-brand-indigo">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono tracking-wider uppercase text-slate-400 dark:text-slate-500">Direct Email</h4>
                  <a
                    href="mailto:udgatanikhil@gmail.com"
                    className="text-sm font-medium text-slate-850 dark:text-slate-200 hover:text-brand-indigo transition-colors"
                  >
                    udgatanikhil@gmail.com
                  </a>
                </div>
              </div>

              {/* Coordinate 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-brand-indigo">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono tracking-wider uppercase text-slate-400 dark:text-slate-500">LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/nikhiludgata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-850 dark:text-slate-200 hover:text-brand-indigo transition-colors"
                  >
                    linkedin.com/in/nikhiludgata
                  </a>
                </div>
              </div>

              {/* Coordinate 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-brand-indigo">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono tracking-wider uppercase text-slate-400 dark:text-slate-500">GitHub</h4>
                  <a
                    href="https://github.com/udgatanikhil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-850 dark:text-slate-200 hover:text-brand-indigo transition-colors"
                  >
                    github.com/udgatanikhil
                  </a>
                </div>
              </div>

              {/* Coordinate 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-brand-indigo">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono tracking-wider uppercase text-slate-400 dark:text-slate-500">Location</h4>
                  <p className="text-sm font-medium text-slate-850 dark:text-slate-200">
                    Bengaluru, Karnataka, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
