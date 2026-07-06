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
      <section className="border-b border-[#ebdcb9]/60 pb-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-805 font-serif">
          Get in Touch
        </h2>
        <p className="text-sm text-slate-550 mt-2 font-light leading-relaxed">
          Please fill out the form below or reach out directly to coordinate lending integration, custom RAG setups, or operational timelines.
        </p>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Contact Form */}
        <section className="md:col-span-7 editorial-card rounded-xl p-6 relative overflow-hidden bg-white">
          <h3 className="text-sm font-bold text-slate-805 mb-5 font-mono">
            Send Message
          </h3>

          {isSubmitted ? (
            <div className="bg-earth-green/5 border border-earth-green/10 p-6 rounded-lg text-center space-y-3 text-xs">
              <CheckCircle className="w-10 h-10 text-earth-green mx-auto animate-pulse" />
              <h4 className="font-bold text-earth-green font-mono">
                Message Sent
              </h4>
              <p className="text-[10px] text-slate-500 font-light">
                Thank you for your message. I will respond to your email address within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-2 text-xs font-semibold text-earth-green hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              {error && (
                <div className="text-rose-600 bg-rose-50 border border-rose-250 p-3 rounded-lg">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-[9px] tracking-wider uppercase text-slate-505 block">
                    Full Name <span className="text-rose-505">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-[#fbf9f5]/55 border border-[#ebdcb9] text-slate-800 focus:outline-none focus:ring-1 focus:ring-earth-green focus:border-earth-green font-light rounded-lg font-sans"
                    placeholder="Nikhil Udgata"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-[9px] tracking-wider uppercase text-slate-505 block">
                    Email Address <span className="text-rose-505">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-[#fbf9f5]/55 border border-[#ebdcb9] text-slate-800 focus:outline-none focus:ring-1 focus:ring-earth-green focus:border-earth-green font-light rounded-lg font-sans"
                    placeholder="udgatanikhil@gmail.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-[9px] tracking-wider uppercase text-slate-505 block">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-[#fbf9f5]/55 border border-[#ebdcb9] text-slate-800 focus:outline-none focus:ring-1 focus:ring-earth-green focus:border-earth-green font-light rounded-lg font-sans"
                  placeholder="Integration, AI, or CRM delivery..."
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-[9px] tracking-wider uppercase text-slate-505 block">
                  Message <span className="text-rose-505">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-[#fbf9f5]/55 border border-[#ebdcb9] text-slate-800 focus:outline-none focus:ring-1 focus:ring-earth-green focus:border-earth-green resize-none font-light rounded-lg font-sans"
                  placeholder="Summarize your project goals or timeline..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-4 py-3 bg-earth-green hover:bg-earth-green/90 text-white disabled:bg-slate-205 disabled:text-slate-400 transition-all duration-300 hover:scale-[1.01] rounded-lg font-sans text-sm font-medium"
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
          <div className="editorial-card rounded-xl p-6 space-y-6 bg-white shadow-sm">
            <h3 className="text-sm font-bold text-slate-805 mb-2 border-b border-[#ebdcb9]/60 pb-2 font-serif">
              Coordinates
            </h3>

            <div className="space-y-5 font-mono text-xs">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-earth-green/10 border border-earth-green/20 flex items-center justify-center text-earth-green">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[9px] text-slate-500 uppercase tracking-wider">Email</h4>
                  <a
                    href="mailto:udgatanikhil@gmail.com"
                    className="text-slate-800 hover:text-earth-green transition-colors font-semibold font-sans text-sm"
                  >
                    udgatanikhil@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-earth-green/10 border border-earth-green/20 flex items-center justify-center text-earth-green">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[9px] text-slate-505 uppercase tracking-wider">LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/nikhiludgata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-800 hover:text-earth-green transition-colors font-semibold font-sans text-sm"
                  >
                    linkedin.com/in/nikhiludgata
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-earth-green/10 border border-earth-green/20 flex items-center justify-center text-earth-green">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[9px] text-slate-505 uppercase tracking-wider">GitHub</h4>
                  <a
                    href="https://github.com/udgatanikhil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-800 hover:text-earth-green transition-colors font-semibold font-sans text-sm"
                  >
                    github.com/udgatanikhil
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-earth-green/10 border border-earth-green/20 flex items-center justify-center text-earth-green">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[9px] text-slate-505 uppercase tracking-wider">Location</h4>
                  <p className="text-slate-800 font-semibold font-sans text-sm">
                    Bengaluru (BLR), Karnataka, India
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
