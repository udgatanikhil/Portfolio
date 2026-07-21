import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, ShieldCheck, Layers, Cpu, Zap, Activity } from "lucide-react";

export const metadata = {
  title: "Vault — Multi-Role Project Delivery Cockpit | Case Study",
  description: "An enterprise-grade, multi-role project management cockpit uniting RICE intake, TPM capacity planning, AE standup compliance, Dify AI summaries, and bi-directional Jira Cloud syncing.",
};

export default function VaultCaseStudyPage() {
  return (
    <div className="space-y-10 py-6 md:py-10 animate-fade-up">
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
            href="https://vault-psi-green.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-mono tracking-wider bg-earth-green hover:bg-earth-green/90 text-white transition-all duration-300 shadow-sm"
          >
            <ExternalLink className="w-3.5 h-3.5 mr-2" />
            Open Live App Demo
          </a>
        </div>
      </div>

      {/* Case Study Header */}
      <section className="space-y-4 max-w-4xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-earth-green bg-earth-green/10 px-2.5 py-1 rounded border border-earth-green/20 font-semibold">
            Enterprise Architecture Case Study
          </span>
          <span className="text-[10px] font-mono text-slate-500 bg-[#fbf9f5] px-2.5 py-1 rounded border border-[#ebdcb9]/60">
            Multi-Role Real-Time Cockpit &amp; AI Assistant
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-805 font-serif">
          Vault — Multi-Role Project Delivery Cockpit &amp; AI Assistant
        </h1>

        <p className="text-sm text-slate-655 leading-relaxed font-light">
          Vault is an enterprise-grade, multi-role project management cockpit designed for modern engineering teams. It bridges the gap between client visibility, engineering execution, and program management by uniting structured intake, resource capacity planning, and bi-directional <strong>Jira Cloud</strong> syncing into a single, real-time workspace.
        </p>
      </section>

      {/* Key Metrics / Highlights Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-xl bg-white border border-[#ebdcb9]/60 shadow-sm font-mono text-xs">
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 block flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-earth-green" /> Capacity Safety
          </span>
          <span className="text-lg font-bold text-slate-800 font-serif">Real-Time Alerts</span>
          <span className="text-[11px] text-slate-500 block">&gt;8h/day overload badges</span>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 block flex items-center gap-1">
            <Activity className="w-3.5 h-3.5 text-earth-blue" /> Jira Sync Speed
          </span>
          <span className="text-lg font-bold text-slate-800 font-serif">&lt; 1 Second</span>
          <span className="text-[11px] text-slate-500 block">Bi-directional Webhook Sync</span>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 block flex items-center gap-1">
            <Cpu className="w-3.5 h-3.5 text-emerald-600" /> AI Token Efficiency
          </span>
          <span className="text-lg font-bold text-slate-800 font-serif">-90% API Fees</span>
          <span className="text-[11px] text-slate-500 block">Redis 4-hour response TTL</span>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 block flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-amber-600" /> State Broker
          </span>
          <span className="text-lg font-bold text-slate-800 font-serif">Redis SSE Tunnel</span>
          <span className="text-[11px] text-slate-500 block">Zero page-reload live updates</span>
        </div>
      </div>

      {/* System Architecture Section */}
      <section className="space-y-6">
        <div className="border-b border-[#ebdcb9]/60 pb-3">
          <h2 className="text-2xl font-bold text-slate-800 font-serif">
            🗺️ Delivery Journey &amp; System Architecture
          </h2>
        </div>
        <p className="text-sm text-slate-650 font-light leading-relaxed">
          Vault aligns four organizational roles into a continuous delivery loop, synchronized in real-time via a Redis Pub/Sub Server-Sent Events (SSE) tunnel and an incoming Jira webhook stream:
        </p>

        <div className="p-6 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto space-y-4 border border-slate-800">
          <pre className="text-emerald-400 leading-relaxed">
{`[1. Client Intake & RICE] ──> [2. TPM Capacity Allocation] ──> [3. AE Execution & Standup] ──> [4. Admin Cockpit & AI Analytics]
         ▲                                                                                                    │
         └────────────────────────── Bi-Directional Jira & Webhook Loop ─────────────────────────────────────┘`}
          </pre>
        </div>

        {/* Technical Stack Card */}
        <div className="editorial-card rounded-xl p-6 bg-white border border-[#ebdcb9] space-y-3">
          <h3 className="text-lg font-bold text-slate-800 font-serif">Technical Stack Overview</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-700">
            <li className="p-3 bg-[#fbf9f5] rounded-lg border border-[#ebdcb9]/50">
              <strong className="text-earth-green block mb-1">Frontend</strong>
              React SPA, Vite, Tailwind CSS V3, SVG Gantt charting engine, SSE hooks.
            </li>
            <li className="p-3 bg-[#fbf9f5] rounded-lg border border-[#ebdcb9]/50">
              <strong className="text-earth-green block mb-1">Backend</strong>
              Node.js, Express, Jira Cloud REST APIs, Redis Pub/Sub broker, PostgreSQL.
            </li>
            <li className="p-3 bg-[#fbf9f5] rounded-lg border border-[#ebdcb9]/50">
              <strong className="text-earth-green block mb-1">AI Orchestration</strong>
              Dify Docker stack (Ollama / Llama 3), lean-prompting, 4h Redis TTL cache.
            </li>
          </ul>
        </div>
      </section>

      {/* User Portals Walkthrough with Screenshots */}
      <section className="space-y-12">
        <div className="border-b border-[#ebdcb9]/60 pb-3">
          <h2 className="text-2xl font-bold text-slate-800 font-serif">
            🖼️ User Portals &amp; Visual Walkthrough
          </h2>
        </div>

        {/* 1. Client Portal */}
        <div className="editorial-card rounded-2xl p-6 sm:p-8 bg-white border border-[#ebdcb9] space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-earth-green bg-earth-green/10 px-2.5 py-0.5 rounded border border-earth-green/20 font-semibold">
              Role 01 &mdash; Client Partner
            </span>
            <h3 className="text-xl font-bold text-slate-800 font-serif">
              1. Client Portal &mdash; Prioritized Intake &amp; Timeline
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              Clients gain a clear, scoped view of their active milestones and can submit delivery requests, scoring them mathematically using the <strong>RICE model</strong> (Reach, Impact, Confidence, Effort).
            </p>
          </div>
          <div className="relative w-full h-64 sm:h-96 rounded-xl overflow-hidden border border-[#ebdcb9] bg-stone-100 shadow-sm">
            <Image
              src="/client_dashboard.jpg"
              alt="Client Dashboard — RICE Model Prioritized Intake"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 2. TPM Workbench */}
        <div className="editorial-card rounded-2xl p-6 sm:p-8 bg-white border border-[#ebdcb9] space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-earth-green bg-earth-green/10 px-2.5 py-0.5 rounded border border-earth-green/20 font-semibold">
              Role 02 &mdash; Technical Program Manager
            </span>
            <h3 className="text-xl font-bold text-slate-800 font-serif">
              2. TPM Workbench &mdash; Drag-and-Drop Capacity Scheduling
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              Technical Program Managers (TPMs) schedule sprints by dragging Jira tickets directly onto engineers&apos; calendars. The board displays real-time <strong>overload safety badges</strong> if an engineer&apos;s allocation exceeds 8 hours a day.
            </p>
          </div>
          <div className="relative w-full h-64 sm:h-96 rounded-xl overflow-hidden border border-[#ebdcb9] bg-stone-100 shadow-sm">
            <Image
              src="/tpm_capacity.jpg"
              alt="TPM Capacity Board — Drag-and-Drop Calendar Scheduling"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 3. AE Workspace */}
        <div className="editorial-card rounded-2xl p-6 sm:p-8 bg-white border border-[#ebdcb9] space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-earth-green bg-earth-green/10 px-2.5 py-0.5 rounded border border-earth-green/20 font-semibold">
              Role 03 &mdash; Account Engineer
            </span>
            <h3 className="text-xl font-bold text-slate-800 font-serif">
              3. AE Workspace &mdash; Clean Inbox &amp; Standup Compliance
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              Account Engineers (AEs) land on a focused list of today&apos;s allocations. They submit their EOD standups and write status transition comments that sync directly back to the Jira issue history.
            </p>
          </div>
          <div className="relative w-full h-64 sm:h-96 rounded-xl overflow-hidden border border-[#ebdcb9] bg-stone-100 shadow-sm">
            <Image
              src="/ae_inbox.jpg"
              alt="AE Inbox — Task Allocations & Jira Webhook Sync"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 4. Admin Cockpit */}
        <div className="editorial-card rounded-2xl p-6 sm:p-8 bg-white border border-[#ebdcb9] space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-earth-green bg-earth-green/10 px-2.5 py-0.5 rounded border border-earth-green/20 font-semibold">
              Role 04 &mdash; Executive Leadership
            </span>
            <h3 className="text-xl font-bold text-slate-800 font-serif">
              4. Admin Cockpit &mdash; Executive Summary &amp; Portfolio Health
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              Admins and leadership view cross-organizational heatmaps, override project RAG (Red-Amber-Green) signals, and consume AI-generated executive summaries cached efficiently in Redis.
            </p>
          </div>
          <div className="relative w-full h-64 sm:h-96 rounded-xl overflow-hidden border border-[#ebdcb9] bg-stone-100 shadow-sm">
            <Image
              src="/admin_analytics.jpg"
              alt="Admin Dashboard — Portfolio Heatmaps & AI Executive Summaries"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Synchronization Engines Section */}
      <section className="space-y-6">
        <div className="border-b border-[#ebdcb9]/60 pb-3">
          <h2 className="text-2xl font-bold text-slate-800 font-serif">
            ⚡ Key Synchronization Engines
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed font-light text-slate-700">
          <div className="editorial-card rounded-xl p-6 bg-white border border-[#ebdcb9] space-y-3">
            <h3 className="text-base font-bold text-slate-800 font-serif">Server-Sent Events (SSE) Sync</h3>
            <ol className="list-decimal pl-4 space-y-1.5 text-slate-600">
              <li>When a TPM assigns a ticket, backend writes allocation and publishes to <code>pm:events</code> Redis channel.</li>
              <li>The Express SSE server catches the Redis event and pushes it to connected browsers.</li>
              <li>Frontend <code>usePmEvents()</code> hook intercepts payload, debounces by 300ms, and refreshes component state.</li>
            </ol>
          </div>

          <div className="editorial-card rounded-xl p-6 bg-white border border-[#ebdcb9] space-y-3">
            <h3 className="text-base font-bold text-slate-800 font-serif">Bi-Directional Jira Webhook Loop</h3>
            <ol className="list-decimal pl-4 space-y-1.5 text-slate-600">
              <li>When a ticket status changes in Jira, a webhook is fired to <code>POST /api/jira/webhook</code>.</li>
              <li>Vault records the transition, alerts the assigned engineer&apos;s Inbox, and prompts them for audit comments.</li>
              <li>Engineer explanations are posted directly back to Jira as issue comments via <code>jira.addComment()</code>.</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
