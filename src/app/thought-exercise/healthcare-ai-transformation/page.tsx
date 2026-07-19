import Link from "next/link";
import { ArrowLeft, ExternalLink, ShieldCheck, Layers, FileText, Activity } from "lucide-react";

export const metadata = {
  title: "Healthcare Support AI Transformation Strategy | Thought Exercise",
  description: "A PMO strategy and delivery plan for automating backend handling time in a 250-agent healthcare support operation while keeping a human on every interaction.",
};

export default function HealthcareAiTransformationPage() {
  return (
    <div className="space-y-8 py-6 md:py-10 animate-fade-up">
      {/* Top Navigation Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#ebdcb9]/60 pb-6">
        <Link
          href="/case-studies"
          className="inline-flex items-center text-xs font-mono text-earth-green hover:underline group"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5 transition-transform group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>
        <div className="flex items-center gap-3">
          <a
            href="/healthcare-ai-transformation.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-mono tracking-wider bg-earth-green hover:bg-earth-green/90 text-white transition-all duration-300 shadow-sm"
          >
            <ExternalLink className="w-3.5 h-3.5 mr-2" />
            Open Fullscreen Report
          </a>
        </div>
      </div>

      {/* Thought Exercise Header */}
      <section className="space-y-4 max-w-4xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-earth-green bg-earth-green/10 px-2.5 py-1 rounded border border-earth-green/20 font-semibold">
            Thought Exercise &mdash; Strategy &amp; PMO Framework
          </span>
          <span className="text-[10px] font-mono text-slate-500 bg-[#fbf9f5] px-2.5 py-1 rounded border border-[#ebdcb9]/60">
            Healthcare Support Operation (250 FTE)
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-805 font-serif">
          Healthcare Customer Support AI Transformation, Delivery &amp; PMO Plan
        </h1>

        <p className="text-sm text-slate-655 leading-relaxed font-light">
          An end-to-end operational strategy and PMO delivery model for introducing AI copilots into a 250-agent healthcare support center. Under the strict constraint that <strong>a human stays on every patient interaction</strong>, the AI automates all mechanical backend work (lookups, CRM write-backs, note sanitization, 340B eligibility checks) to systematically reduce human handling time.
        </p>
      </section>

      {/* Key Metrics / Highlights Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-xl bg-white border border-[#ebdcb9]/60 shadow-sm">
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block flex items-center gap-1">
            <Activity className="w-3.5 h-3.5 text-earth-green" /> Core Operational Metric
          </span>
          <span className="text-lg font-bold text-slate-800 font-serif">Human Minutes Removed</span>
          <span className="text-[11px] text-slate-500 block">Targeting ~25,000 handling-hrs/mo</span>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-earth-blue" /> Workstream Scope
          </span>
          <span className="text-lg font-bold text-slate-800 font-serif">15 Detailed Sections</span>
          <span className="text-[11px] text-slate-500 block">RAID, RACI, 90-Day Roadmap</span>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Compliance Guardrails
          </span>
          <span className="text-lg font-bold text-slate-800 font-serif">HIPAA &amp; PHI Protected</span>
          <span className="text-[11px] text-slate-500 block">Human-in-the-loop validation</span>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block flex items-center gap-1">
            <FileText className="w-3.5 h-3.5 text-amber-600" /> Capacity Outcomes
          </span>
          <span className="text-lg font-bold text-slate-800 font-serif">222 / 200 / 148 FTE</span>
          <span className="text-[11px] text-slate-500 block">3 data-derived model scenarios</span>
        </div>
      </div>

      {/* Embedded Document Frame */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#ebdcb9]/60 pb-3">
          <h2 className="text-xl font-bold text-slate-800 font-serif">
            Interactive Strategy Document
          </h2>
          <span className="text-xs font-mono text-slate-400">
            Scroll inside frame or click &ldquo;Open Fullscreen Report&rdquo;
          </span>
        </div>

        <div className="w-full h-[850px] rounded-xl overflow-hidden border border-[#ebdcb9] bg-white shadow-md">
          <iframe
            src="/healthcare-ai-transformation.html"
            title="Healthcare AI Transformation Strategy"
            className="w-full h-full border-0"
          />
        </div>
      </section>
    </div>
  );
}
