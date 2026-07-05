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
    <div className="space-y-12 max-w-4xl mx-auto py-8 md:py-16 animate-fade-up">
      {/* Page Header */}
      <section className="border-b border-slate-900 pb-6">
        <div className="space-y-1">
          <h1 className="text-xs font-mono tracking-widest uppercase text-cyan-400">
            Contact
          </h1>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans">
            Get in Touch
          </h2>
        </div>
        <p className="text-sm text-slate-405 mt-2 font-light leading-relaxed">
          Please fill out the form below or reach out directly to coordinate lending integration, custom RAG setups, or operational timelines.
        </p>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Contact Form */}
        <section className="md:col-span-7 stark-panel rounded-xl p-6 relative overflow-hidden">
          <h3 className="text-sm font-bold text-white mb-5 font-mono">
            Send Message
          </h3>

          {isSubmitted ? (
            <div className="bg-cyan-950/20 border border-cyan-500/20 p-6 rounded-lg text-center space-y-3 text-xs">
              <CheckCircle className="w-10 h-10 text-cyan-400 mx-auto animate-pulse" />
              <h4 className="font-bold text-cyan-405 font-mono">
                Message Sent
              </h4>
              <p className="text-[10px] text-slate-500 font-light">
                Thank you for your message. I will respond to your email address within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-2 text-xs font-semibold text-cyan-450 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              {error && (
                <div className="text-rose-400 bg-rose-950/10 border border-rose-900/50 p-3 rounded-lg">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-[9px] tracking-wider uppercase text-slate-500 block">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-black/40 border border-slate-900 text-slate-205 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 font-light rounded-lg"
                    placeholder="Nikhil Udgata"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-[9px] tracking-wider uppercase text-slate-500 block">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-black/40 border border-slate-900 text-slate-205 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 font-light rounded-lg"
                    placeholder="udgatanikhil@gmail.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-[9px] tracking-wider uppercase text-slate-500 block">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-black/40 border border-slate-900 text-slate-205 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 font-light rounded-lg"
                  placeholder="Integration, AI, or CRM delivery..."
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-[9px] tracking-wider uppercase text-slate-500 block">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-black/40 border border-slate-900 text-slate-205 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 resize-none font-light rounded-lg"
                  placeholder="Summarize your project goals or timeline..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-4 py-3 bg-cyan-950/20 border border-cyan-500/30 hover:border-cyan-400 text-cyan-455 disabled:bg-slate-900 disabled:border-slate-800 disabled:text-slate-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:scale-[1.01] rounded-lg"
              >
                {isSubmitting ? (
                  <>Sending Message...</>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 mr-2" />
                    Submit Message
                  </>
                )}
              </button>
            </form>
          )}
        </section>

        {/* Direct Coordinates */}
        <section className="md:col-span-5 space-y-6">
          <div className="stark-panel rounded-xl p-6 space-y-6">
            <h3 className="text-sm font-bold text-white mb-2 border-b border-slate-900 pb-2">
              Coordinates
            </h3>

            <div className="space-y-5 font-mono text-xs">
              {/* Coordinate 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[9px] text-slate-500 uppercase tracking-wider">Email</h4>
                  <a
                    href="mailto:udgatanikhil@gmail.com"
                    className="text-slate-200 hover:text-cyan-400 transition-colors font-semibold"
                  >
                    udgatanikhil@gmail.com
                  </a>
                </div>
              </div>

              {/* Coordinate 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[9px] text-slate-500 uppercase tracking-wider">LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/nikhiludgata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-205 hover:text-cyan-400 transition-colors font-semibold"
                  >
                    linkedin.com/in/nikhiludgata
                  </a>
                </div>
              </div>

              {/* Coordinate 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[9px] text-slate-500 uppercase tracking-wider">GitHub</h4>
                  <a
                    href="https://github.com/udgatanikhil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-205 hover:text-cyan-400 transition-colors font-semibold"
                  >
                    github.com/udgatanikhil
                  </a>
                </div>
              </div>

              {/* Coordinate 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[9px] text-slate-500 uppercase tracking-wider">Location</h4>
                  <p className="text-slate-200 font-semibold">
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
