import Image from "next/image";
import Link from "next/link";
import { caseStudies, thoughtExercises } from "@/data/case-studies";
import { Layers, Zap, Clock, ShieldCheck, ArrowRight, FileText, ExternalLink } from "lucide-react";

// Beautiful simplified SVG diagram creators representing real system architectures
function VaultDiagram() {
  return (
    <svg className="w-full h-20 bg-[#fbf9f5] rounded border border-[#ebdcb9]/60 p-2 font-mono text-[8px] text-earth-green" viewBox="0 0 160 50">
      <rect x="5" y="15" width="25" height="20" fill="none" stroke="rgba(58,79,65,0.4)" strokeWidth="0.8" rx="2" />
      <text x="8" y="27" fill="currentColor">Client</text>
      
      <line x1="30" y1="25" x2="48" y2="25" stroke="rgba(58,79,65,0.3)" strokeWidth="0.8" />
      
      <rect x="48" y="15" width="25" height="20" fill="none" stroke="rgba(58,79,65,0.4)" strokeWidth="0.8" rx="2" />
      <text x="52" y="27" fill="currentColor">TPM</text>

      <line x1="73" y1="25" x2="91" y2="25" stroke="rgba(58,79,65,0.3)" strokeWidth="0.8" />

      <rect x="91" y="15" width="22" height="20" fill="none" stroke="rgba(58,79,65,0.4)" strokeWidth="0.8" rx="2" />
      <text x="94" y="27" fill="currentColor">AE</text>

      <line x1="113" y1="25" x2="131" y2="25" stroke="rgba(58,79,65,0.3)" strokeWidth="0.8" />

      <rect x="131" y="15" width="25" height="20" fill="none" stroke="rgba(58,79,65,0.4)" strokeWidth="0.8" rx="2" />
      <text x="133" y="27" fill="currentColor">Admin</text>
      
      <text x="5" y="8" fill="rgba(58,79,65,0.4)">[Redis SSE 4-Role Loop]</text>
    </svg>
  );
}

function LendingJourneyDiagram() {
  return (
    <svg className="w-full h-20 bg-[#fbf9f5] rounded border border-[#ebdcb9]/60 p-2 font-mono text-[8px] text-earth-green" viewBox="0 0 160 50">
      <rect x="5" y="15" width="30" height="20" fill="none" stroke="rgba(58,79,65,0.4)" strokeWidth="0.8" rx="2" />
      <text x="10" y="27" fill="currentColor">Partner App</text>
      
      <line x1="35" y1="25" x2="60" y2="25" stroke="rgba(58,79,65,0.3)" strokeWidth="0.8" strokeDasharray="2 2" />
      <polygon points="60,25 57,22 57,28" fill="rgba(58,79,65,0.5)" />
      
      <rect x="60" y="15" width="40" height="20" fill="none" stroke="rgba(58,79,65,0.4)" strokeWidth="0.8" rx="2" />
      <text x="66" y="27" fill="currentColor">FinBox API</text>
      
      <line x1="100" y1="25" x2="125" y2="25" stroke="rgba(58,79,65,0.3)" strokeWidth="0.8" />
      <polygon points="125,25 122,22 122,28" fill="rgba(58,79,65,0.5)" />
      
      <rect x="125" y="15" width="30" height="20" fill="none" stroke="rgba(58,79,65,0.4)" strokeWidth="0.8" rx="2" />
      <text x="130" y="27" fill="currentColor">DB Core</text>
      
      <text x="5" y="8" fill="rgba(58,79,65,0.4)">[Integration Flowchart]</text>
    </svg>
  );
}

function RagBiDiagram() {
  return (
    <svg className="w-full h-20 bg-[#fbf9f5] rounded border border-[#ebdcb9]/60 p-2 font-mono text-[8px] text-earth-green" viewBox="0 0 160 50">
      <circle cx="20" cy="25" r="10" fill="none" stroke="rgba(58,79,65,0.4)" strokeWidth="0.8" />
      <text x="14" y="28" fill="currentColor">JIRA</text>
      
      <line x1="30" y1="25" x2="55" y2="25" stroke="rgba(58,79,65,0.3)" strokeWidth="0.8" />
      
      <rect x="55" y="15" width="45" height="20" fill="none" stroke="rgba(58,79,65,0.4)" strokeWidth="0.8" rx="2" />
      <text x="59" y="27" fill="currentColor">Vector DB</text>
      
      <line x1="100" y1="25" x2="125" y2="25" stroke="rgba(58,79,65,0.3)" strokeWidth="0.8" />
      
      <circle cx="135" cy="25" r="10" fill="none" stroke="rgba(58,79,65,0.4)" strokeWidth="0.8" />
      <text x="129" y="28" fill="currentColor">LLM</text>
      
      <text x="5" y="8" fill="rgba(58,79,65,0.4)">[RAG Release Telemetry]</text>
    </svg>
  );
}

function CrmDiagram() {
  return (
    <svg className="w-full h-20 bg-[#fbf9f5] rounded border border-[#ebdcb9]/60 p-2 font-mono text-[8px] text-earth-green" viewBox="0 0 160 50">
      <rect x="5" y="15" width="40" height="20" fill="none" stroke="rgba(58,79,65,0.4)" strokeWidth="0.8" rx="2" />
      <text x="9" y="27" fill="currentColor">LeadSquared</text>
      
      <line x1="45" y1="25" x2="70" y2="25" stroke="rgba(58,79,65,0.3)" strokeWidth="0.8" />
      
      <rect x="70" y="10" width="30" height="30" fill="none" stroke="rgba(58,79,65,0.4)" strokeWidth="0.8" rx="2" />
      <text x="74" y="28" fill="currentColor">HIPAA</text>
      
      <line x1="100" y1="25" x2="125" y2="25" stroke="rgba(58,79,65,0.3)" strokeWidth="0.8" />
      
      <rect x="125" y="15" width="30" height="20" fill="none" stroke="rgba(58,79,65,0.4)" strokeWidth="0.8" rx="2" />
      <text x="130" y="27" fill="currentColor">Clinic</text>
      
      <text x="5" y="8" fill="rgba(58,79,65,0.4)">[HIPAA Encrypted Channel]</text>
    </svg>
  );
}

function RiskDiagram() {
  return (
    <svg className="w-full h-20 bg-[#fbf9f5] rounded border border-[#ebdcb9]/60 p-2 font-mono text-[8px] text-earth-green" viewBox="0 0 160 50">
      <line x1="20" y1="25" x2="50" y2="15" stroke="rgba(58,79,65,0.3)" strokeWidth="0.8" />
      <line x1="20" y1="25" x2="50" y2="35" stroke="rgba(58,79,65,0.3)" strokeWidth="0.8" />
      
      <circle cx="20" cy="25" r="4" fill="none" stroke="rgba(58,79,65,0.5)" strokeWidth="0.8" />
      <circle cx="50" cy="15" r="4" fill="none" stroke="rgba(58,79,65,0.5)" strokeWidth="0.8" />
      <circle cx="50" cy="35" r="4" fill="none" stroke="rgba(58,79,65,0.5)" strokeWidth="0.8" />
      
      <line x1="55" y1="15" x2="85" y2="10" stroke="rgba(58,79,65,0.2)" strokeWidth="0.5" />
      <line x1="55" y1="15" x2="85" y2="20" stroke="rgba(58,79,65,0.2)" strokeWidth="0.5" />
      
      <circle cx="85" cy="10" r="2" fill="none" stroke="rgba(58,79,65,0.3)" strokeWidth="0.5" />
      <circle cx="85" cy="20" r="2" fill="none" stroke="rgba(58,79,65,0.3)" strokeWidth="0.5" />
      
      <text x="100" y="28" fill="currentColor">Risk Forest</text>
      
      <text x="5" y="8" fill="rgba(58,79,65,0.4)">[Risk Analytics Engine]</text>
    </svg>
  );
}

export default function CaseStudies() {
  return (
    <div className="space-y-16 py-8 md:py-16 animate-fade-up">
      {/* Intro Header */}
      <section className="space-y-4 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-805 font-serif">
          Case Studies &amp; Strategy Frameworks
        </h2>
        <p className="text-sm text-slate-550 leading-relaxed font-light">
          Explore real-world engineering case studies and detailed strategy thought exercises. 
          Each project represents a complete lifecycle from initial problem identification and stakeholder 
          alignment, through technical architecture selection, agile execution, risk management, and outcome validation.
        </p>
      </section>

      {/* Thought Exercises Section */}
      <section className="space-y-6">
        <div className="border-b border-[#ebdcb9]/60 pb-3">
          <h3 className="text-xl font-bold text-slate-805 tracking-tight font-serif flex items-center gap-2">
            <FileText className="w-5 h-5 text-earth-green" />
            Strategy Thought Exercises &amp; PMO Plans
          </h3>
        </div>

        {thoughtExercises.map((exercise) => (
          <div
            key={exercise.slug}
            className="editorial-card rounded-2xl p-6 md:p-8 bg-white space-y-6 border border-[#ebdcb9]/80 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ebdcb9]/40 pb-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-earth-green bg-earth-green/10 px-2.5 py-0.5 rounded border border-earth-green/20 font-semibold">
                  {exercise.category}
                </span>
                <h4 className="text-2xl font-bold text-slate-800 font-serif">
                  {exercise.title}
                </h4>
              </div>
              <Link
                href={exercise.link}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs font-mono tracking-wider bg-earth-green hover:bg-earth-green/90 text-white transition-all duration-300 shadow-sm hover:scale-[1.01] self-start sm:self-auto"
              >
                View Strategy Plan
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-light">
              {exercise.summary}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#fbf9f5] border border-[#ebdcb9]/50 font-mono text-xs">
              {exercise.kpis.map((kpi, kIdx) => (
                <div key={kIdx} className="space-y-0.5">
                  <span className="text-[9px] text-slate-400 uppercase tracking-wider block">
                    {kpi.metric}
                  </span>
                  <span className="font-bold text-earth-green text-sm block">
                    {kpi.value}
                  </span>
                </div>
              ))}
            </div>

            <ul className="space-y-2 pl-1">
              {exercise.highlights.map((item, hIdx) => (
                <li key={hIdx} className="flex gap-2.5 text-xs text-slate-600 font-light">
                  <span className="text-earth-green font-bold font-mono text-xs">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Case Studies List */}
      <section className="space-y-24">
        {caseStudies.map((project, idx) => {
          let imageUrl = "/crm_ml_project.jpg";
          if (idx === 0) imageUrl = "/lending_project.jpg";
          if (idx === 1) imageUrl = "/rag_project.jpg";

          return (
            <article
              key={project.slug}
              id={project.slug}
              className="scroll-mt-20 border-t border-[#ebdcb9]/60 pt-16 first:border-t-0 first:pt-0"
            >
              <div className="space-y-8">
                
                {/* Visual Header Illustration */}
                <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-[#ebdcb9]/40 bg-stone-50 shadow-sm">
                  <Image
                    src={imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-earth-green bg-[#f0e6d2]/30 px-2.5 py-0.5 rounded border border-[#ebdcb9] inline-block font-semibold">
                      Case Study #{idx + 1} &mdash; {project.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-805 tracking-tight font-serif">
                      {project.title}
                    </h3>
                  </div>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-mono tracking-wider bg-earth-green hover:bg-earth-green/90 text-white transition-all duration-300 shadow-sm hover:scale-[1.01] self-start sm:self-auto flex-shrink-0"
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-2" />
                      Live App Demo
                    </a>
                  )}
                </div>

                {/* Meta Stats Panel */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-xl bg-white border border-[#ebdcb9]/50 font-mono text-xs shadow-sm">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Role</span>
                    <span className="font-bold text-slate-800 mt-1 block">
                      {project.role}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Timeline</span>
                    <span className="font-bold text-slate-700 mt-1 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-earth-blue animate-pulse" />
                      {project.timeline}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block text-left">Stack</span>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-[#f0e6d2]/20 px-2 py-0.5 rounded text-[9px] font-mono text-slate-600 border border-[#ebdcb9]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Dynamic Architecture Diagram */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
                    Schematic Architecture
                  </h4>
                  {project.slug === "vault-project-delivery-cockpit" && <VaultDiagram />}
                  {project.slug === "lending-funnel-optimization" && <LendingJourneyDiagram />}
                  {project.slug === "rag-bi-release-automation" && <RagBiDiagram />}
                  {project.slug === "healthcare-crm-ai-knowledge" && <CrmDiagram />}
                  {project.slug === "ml-asset-risk-analytics" && <RiskDiagram />}
                </div>

                {/* Core Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
                  {/* Left Column: Problem, Approach, Architecture, Outcome */}
                  <div className="md:col-span-8 space-y-8">
                    {/* Problem Statement */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono tracking-widest uppercase text-earth-green flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                        Problem
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed font-light">
                        {project.problem}
                      </p>
                    </div>

                    {/* Approach */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono tracking-widest uppercase text-earth-green flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                        Approach
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed font-light">
                        {project.approach}
                      </p>
                    </div>

                    {/* Technical Architecture */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono tracking-widest uppercase text-slate-405 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-earth-blue" />
                        Key Integration Architecture
                      </h4>
                      <ul className="space-y-2.5 pl-1">
                        {project.architecture.map((item, idx) => (
                          <li key={idx} className="flex gap-3 text-xs text-slate-600 leading-relaxed font-light">
                            <span className="font-mono text-earth-green font-bold text-xs mt-0.5">
                              [{idx + 1}]
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Outcome */}
                    <div className="border-l-2 border-emerald-500 pl-5 space-y-2 bg-emerald-50/20 py-4 pr-4 rounded-r-lg">
                      <h4 className="text-xs font-mono tracking-widest uppercase text-emerald-800 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        Validated Outcome
                      </h4>
                      <p className="text-slate-700 text-xs leading-relaxed font-light">
                        {project.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: KPIs Grid */}
                  <div className="md:col-span-4 space-y-4">
                    <h4 className="text-[10px] font-mono tracking-widest uppercase text-slate-400 flex items-center gap-2 border-b border-[#ebdcb9]/60 pb-2.5">
                      <Zap className="w-4 h-4 text-yellow-600" />
                      Key Project Metrics
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {project.kpis.map((kpi, kpiIdx) => (
                        <div
                          key={kpiIdx}
                          className="editorial-card rounded-lg p-5 flex flex-col justify-center items-center text-center bg-white"
                        >
                          <span className="text-3xl font-extrabold text-earth-green tracking-tight font-mono">
                            {kpi.value}
                          </span>
                          <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 mt-2">
                            {kpi.metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
