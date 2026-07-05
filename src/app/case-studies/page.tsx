import { caseStudies } from "@/data/case-studies";
import { Layers, Zap, Clock, ShieldCheck, Cpu } from "lucide-react";

// Beautiful SVG diagram creators representing real system architectures
function LendingJourneyDiagram() {
  return (
    <svg className="w-full h-24 bg-black/40 rounded border border-cyan-950/80 p-2 font-mono text-[8px] text-cyan-400" viewBox="0 0 160 50">
      <rect x="5" y="15" width="30" height="20" fill="none" stroke="rgba(6,182,212,0.4)" strokeWidth="0.8" rx="2" />
      <text x="10" y="27" fill="currentColor">B2B_APP</text>
      
      <line x1="35" y1="25" x2="60" y2="25" stroke="rgba(6,182,212,0.6)" strokeWidth="0.8" strokeDasharray="2 2" />
      <polygon points="60,25 57,22 57,28" fill="rgba(6,182,212,0.8)" />
      
      <rect x="60" y="15" width="40" height="20" fill="none" stroke="rgba(249,115,22,0.4)" strokeWidth="0.8" rx="2" />
      <text x="65" y="27" fill="rgba(249,115,22,0.8)">API_GATE</text>
      
      <line x1="100" y1="25" x2="125" y2="25" stroke="rgba(6,182,212,0.6)" strokeWidth="0.8" />
      <polygon points="125,25 122,22 122,28" fill="rgba(6,182,212,0.8)" />
      
      <rect x="125" y="15" width="30" height="20" fill="none" stroke="rgba(6,182,212,0.4)" strokeWidth="0.8" rx="2" />
      <text x="129" y="27" fill="currentColor">FIN_DB</text>
      
      {/* Telemetry text */}
      <text x="5" y="8" fill="rgba(6,182,212,0.3)">[SYSTEM_FLOW_01 // SECURE_HANDSHAKE]</text>
    </svg>
  );
}

function RagBiDiagram() {
  return (
    <svg className="w-full h-24 bg-black/40 rounded border border-cyan-950/80 p-2 font-mono text-[8px] text-cyan-400" viewBox="0 0 160 50">
      <circle cx="20" cy="25" r="10" fill="none" stroke="rgba(6,182,212,0.4)" strokeWidth="0.8" />
      <text x="13" y="28" fill="currentColor">JIRA</text>
      
      <line x1="30" y1="25" x2="55" y2="25" stroke="rgba(6,182,212,0.5)" strokeWidth="0.8" />
      
      <rect x="55" y="15" width="45" height="20" fill="none" stroke="rgba(249,115,22,0.4)" strokeWidth="0.8" rx="2" />
      <text x="59" y="27" fill="rgba(249,115,22,0.8)">VECTOR_DB</text>
      
      <line x1="100" y1="25" x2="125" y2="25" stroke="rgba(6,182,212,0.5)" strokeWidth="0.8" />
      
      <circle cx="135" cy="25" r="10" fill="none" stroke="rgba(6,182,212,0.4)" strokeWidth="0.8" />
      <text x="128" y="28" fill="currentColor">LLM</text>
      
      <text x="5" y="8" fill="rgba(6,182,212,0.3)">[MODULE_02 // RAG_SEARCH_ORBIT]</text>
    </svg>
  );
}

function CrmDiagram() {
  return (
    <svg className="w-full h-24 bg-black/40 rounded border border-cyan-950/80 p-2 font-mono text-[8px] text-cyan-400" viewBox="0 0 160 50">
      <rect x="5" y="15" width="40" height="20" fill="none" stroke="rgba(6,182,212,0.4)" strokeWidth="0.8" rx="2" />
      <text x="10" y="27" fill="currentColor">LSQ_CRM</text>
      
      <line x1="45" y1="25" x2="70" y2="25" stroke="rgba(6,182,212,0.5)" strokeWidth="0.8" />
      
      <rect x="70" y="10" width="30" height="30" fill="none" stroke="rgba(249,115,22,0.4)" strokeWidth="0.8" />
      <text x="75" y="28" fill="rgba(249,115,22,0.8)">HIPAA</text>
      
      <line x1="100" y1="25" x2="125" y2="25" stroke="rgba(6,182,212,0.5)" strokeWidth="0.8" />
      
      <rect x="125" y="15" width="30" height="20" fill="none" stroke="rgba(6,182,212,0.4)" strokeWidth="0.8" rx="2" />
      <text x="129" y="27" fill="currentColor">CLINIC</text>
      
      <text x="5" y="8" fill="rgba(6,182,212,0.3)">[COMPLIANCE_SYS_03 // ENCRYPT_AES256]</text>
    </svg>
  );
}

function RiskDiagram() {
  return (
    <svg className="w-full h-24 bg-black/40 rounded border border-cyan-950/80 p-2 font-mono text-[8px] text-cyan-400" viewBox="0 0 160 50">
      <line x1="20" y1="25" x2="50" y2="15" stroke="rgba(6,182,212,0.4)" strokeWidth="0.8" />
      <line x1="20" y1="25" x2="50" y2="35" stroke="rgba(6,182,212,0.4)" strokeWidth="0.8" />
      
      <circle cx="20" cy="25" r="5" fill="none" stroke="rgba(249,115,22,0.6)" strokeWidth="1" />
      <circle cx="50" cy="15" r="5" fill="none" stroke="rgba(6,182,212,0.6)" strokeWidth="1" />
      <circle cx="50" cy="35" r="5" fill="none" stroke="rgba(6,182,212,0.6)" strokeWidth="1" />
      
      <line x1="55" y1="15" x2="85" y2="10" stroke="rgba(6,182,212,0.3)" strokeWidth="0.8" />
      <line x1="55" y1="15" x2="85" y2="20" stroke="rgba(6,182,212,0.3)" strokeWidth="0.8" />
      
      <circle cx="85" cy="10" r="3" fill="none" stroke="rgba(6,182,212,0.4)" strokeWidth="0.5" />
      <circle cx="85" cy="20" r="3" fill="none" stroke="rgba(6,182,212,0.4)" strokeWidth="0.5" />
      
      <text x="100" y="28" fill="currentColor">FOREST_RISK</text>
      
      <text x="5" y="8" fill="rgba(6,182,212,0.3)">[ANALYTICS_MODEL_04 // RANDOM_FOREST]</text>
    </svg>
  );
}

export default function CaseStudies() {
  return (
    <div className="space-y-16 py-6 md:py-12 animate-fade-up">
      {/* Intro Header */}
      <section className="space-y-4 max-w-3xl">
        <div className="space-y-2">
          <h1 className="text-xs font-mono tracking-widest uppercase text-cyan-500">
            [SYS_INTEGRATION_LOGS] // MODULE_02
          </h1>
          <h2 className="text-3xl font-bold tracking-tight text-white stark-title">
            Technical Project Case Studies
          </h2>
        </div>
        <p className="text-sm text-slate-350 leading-relaxed font-mono font-light">
          The following case studies outline real-world engineering projects I have managed. 
          Each case represents a complete lifecycle from initial problem identification and stakeholder 
          alignment, through technical architecture selection, agile execution, risk management, and outcome validation.
        </p>
      </section>

      {/* Case Studies List */}
      <section className="space-y-20">
        {caseStudies.map((project, idx) => (
          <article
            key={project.slug}
            id={project.slug}
            className="scroll-mt-20 border-t border-cyan-950 pt-16 first:border-t-0 first:pt-0"
          >
            <div className="space-y-8">
              {/* Header Info */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/20 px-2.5 py-0.5 rounded border border-cyan-500/10 inline-block">
                  LOG_{idx + 1} // {project.category.toUpperCase()}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-mono">
                  {project.title.toUpperCase()}
                </h3>
              </div>

              {/* Meta Stats Panel */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-lg bg-black/40 border border-cyan-955/40 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block">IDENT_ROLE</span>
                  <span className="font-bold text-cyan-400 mt-1 block">
                    {project.role.toUpperCase()}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block">TIMELINE</span>
                  <span className="font-bold text-slate-200 mt-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
                    {project.timeline.toUpperCase()}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block text-left">STACK_TELEMETRY</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-cyan-950/10 px-2 py-0.5 rounded text-[9px] font-mono text-cyan-400/80 border border-cyan-500/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dynamic Architecture Diagram */}
              <div className="space-y-2">
                <h4 className="text-[10px] font-mono tracking-widest uppercase text-slate-500">
                  // SCHEMATIC_DIAGRAM
                </h4>
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
                    <h4 className="text-xs font-mono tracking-widest uppercase text-slate-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                      01 // PROBLEM_STATEMENT
                    </h4>
                    <p className="text-slate-350 text-xs leading-relaxed font-mono font-light">
                      {project.problem}
                    </p>
                  </div>

                  {/* Approach */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono tracking-widest uppercase text-slate-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                      02 // STRATEGIC_APPROACH
                    </h4>
                    <p className="text-slate-355 text-xs leading-relaxed font-mono font-light">
                      {project.approach}
                    </p>
                  </div>

                  {/* Technical Architecture */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono tracking-widest uppercase text-slate-400 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-cyan-400" />
                      03 // CORE_ARCHITECTURE_ACCENTS
                    </h4>
                    <ul className="space-y-2.5 pl-1">
                      {project.architecture.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-xs text-slate-350 leading-relaxed font-mono font-light">
                          <span className="font-mono text-cyan-400 font-bold text-xs mt-0.5">
                            [{idx + 1}]
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Outcome */}
                  <div className="border-l-2 border-emerald-500 pl-5 space-y-2 bg-emerald-950/5 py-4 pr-4 rounded-r-lg">
                    <h4 className="text-xs font-mono tracking-widest uppercase text-emerald-400 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      04 // VALIDATED_OUTCOME
                    </h4>
                    <p className="text-slate-300 text-xs leading-relaxed font-mono font-light">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                {/* Right Column: KPIs Grid */}
                <div className="md:col-span-4 space-y-4">
                  <h4 className="text-[10px] font-mono tracking-widest uppercase text-slate-550 flex items-center gap-2 border-b border-cyan-950 pb-2.5">
                    <Zap className="w-4 h-4 text-yellow-500 animate-pulse" />
                    KPI_MONITORING
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {project.kpis.map((kpi, kpiIdx) => (
                      <div
                        key={kpiIdx}
                        className={`${
                          idx === 1 ? "stark-warning-panel" : "stark-panel"
                        } rounded-lg p-5 flex flex-col justify-center items-center text-center`}
                      >
                        <span className="text-3xl font-extrabold text-cyan-400 tracking-tight font-mono">
                          {kpi.value}
                        </span>
                        <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 mt-2">
                          {kpi.metric}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
