import Link from "next/link";
import { ArrowRight, Brain, Database, Cpu, ChevronRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";

// Fully animated code-based Stark Tech HUD reactor widget
function StarkHudReactor() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto flex items-center justify-center animate-float">
      {/* Outer spinning dashed ring */}
      <svg className="absolute w-full h-full animate-orbit-slow" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="rgba(6, 182, 212, 0.15)"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
      </svg>
      
      {/* Reverse spinning telemetry tick ring */}
      <svg className="absolute w-[85%] h-[85%] animate-reverse-orbit" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="rgba(6, 182, 212, 0.25)"
          strokeWidth="1.2"
          strokeDasharray="1 10"
        />
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="rgba(249, 115, 22, 0.2)"
          strokeWidth="0.5"
        />
      </svg>
      
      {/* Inner fast spinning core circle */}
      <svg className="absolute w-[65%] h-[65%] animate-orbit-fast" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="rgba(6, 182, 212, 0.4)"
          strokeWidth="0.8"
          strokeDasharray="15 5 2 5"
        />
        <path
          d="M 50 15 A 35 35 0 0 1 85 50"
          fill="none"
          stroke="rgba(249, 115, 22, 0.5)"
          strokeWidth="1.5"
        />
      </svg>

      {/* Central glowing core / Arc Reactor */}
      <div className="absolute w-12 h-12 rounded-full border-2 border-cyan-400/60 bg-cyan-950/40 flex items-center justify-center shadow-[0_0_25px_rgba(6,182,212,0.6)] animate-glow">
        <Cpu className="w-5 h-5 text-cyan-400 animate-pulse" />
      </div>

      {/* Telemetry markings */}
      <div className="absolute top-0 left-0 text-[8px] font-mono text-cyan-500/60">SYS_DEC: 99.4%</div>
      <div className="absolute bottom-0 right-0 text-[8px] font-mono text-cyan-500/60">RAG_LAT: 12ms</div>
      <div className="absolute top-1/2 -right-4 -translate-y-1/2 text-[8px] font-mono text-orange-500/60">PWR: ACTIVE</div>
      <div className="absolute top-1/2 -left-8 -translate-y-1/2 text-[8px] font-mono text-cyan-500/60">INIT: STARK_v4</div>
    </div>
  );
}

export default function Home() {
  const featuredCases = caseStudies.slice(0, 2);

  return (
    <div className="space-y-24 py-6 md:py-12 animate-fade-up">
      
      {/* Hero / HUD Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline */}
        <div className="md:col-span-7 space-y-8 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded border border-cyan-500/20 bg-cyan-950/10 text-cyan-400 text-[10px] font-mono tracking-widest uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            <span>SYSTEM_CORE: ONLINE // ACCESS_LEVEL_1</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] font-sans stark-title">
            SYSTEMS DELIVERY.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400 font-extrabold">
              NEURAL ARCHITECTURE.
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl font-mono text-xs font-light">
            [IDENT: NIKHIL UDGATA] // [ROLE: TECHNICAL PROJECT MANAGER] <br />
            Managing digital lending APIs, compiling JIRA RAG telemetry systems, and implementing ML default estimators with strict operational controls.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/case-studies"
              className="hud-corner inline-flex items-center justify-center px-6 py-3 text-xs font-mono tracking-wider bg-cyan-950/20 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:scale-[1.01]"
            >
              RUN_CASE_STUDIES
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center px-6 py-3 text-xs font-mono tracking-wider bg-transparent border border-slate-800 hover:border-slate-500 text-slate-400 hover:text-white transition-all duration-300 hover:scale-[1.01]"
            >
              QUERY_DOSSIER
            </Link>
          </div>
        </div>

        {/* Right Column: Floating HUD Reactor */}
        <div className="md:col-span-5 flex items-center justify-center">
          <StarkHudReactor />
        </div>
      </section>

      {/* Core Domains */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-[10px] font-mono tracking-widest uppercase text-cyan-555">
            [SECTION_01] // MODULES
          </h2>
          <h3 className="text-2xl font-bold text-white tracking-tight stark-title">
            Core Delivery Modules
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Module 1 */}
          <div className="stark-panel rounded-lg p-6 space-y-4 relative overflow-hidden animate-float">
            <div className="absolute top-0 right-0 p-2 font-mono text-[9px] text-cyan-500/30">M_01</div>
            <div className="w-10 h-10 rounded border border-cyan-500/20 bg-cyan-950/10 flex items-center justify-center text-cyan-400">
              <Database className="w-5 h-5 animate-pulse" />
            </div>
            <h4 className="font-mono text-sm font-bold text-white tracking-wider">
              SYS_01 // FINTECH GATEWAYS
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-mono font-light">
              Digital lending paths orchestration, B2B data schemas validation, webhooks handshakes config, and real-time transaction telemetry logs.
            </p>
          </div>

          {/* Module 2 */}
          <div className="stark-panel rounded-lg p-6 space-y-4 relative overflow-hidden animate-float-delayed">
            <div className="absolute top-0 right-0 p-2 font-mono text-[9px] text-cyan-500/30">M_02</div>
            <div className="w-10 h-10 rounded border border-cyan-500/20 bg-cyan-950/10 flex items-center justify-center text-cyan-400">
              <Brain className="w-5 h-5 animate-pulse" />
            </div>
            <h4 className="font-mono text-sm font-bold text-white tracking-wider">
              SYS_02 // RAG NETWORKS
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-mono font-light">
              Retrieval-Augmented Generation architectures, index chunking scripts validation, vector databases, and secure Azure/HIPAA OpenAI pipelines.
            </p>
          </div>

          {/* Module 3 */}
          <div className="stark-warning-panel rounded-lg p-6 space-y-4 relative overflow-hidden animate-float">
            <div className="absolute top-0 right-0 p-2 font-mono text-[9px] text-orange-500/30">M_03</div>
            <div className="w-10 h-10 rounded border border-orange-500/20 bg-orange-950/10 flex items-center justify-center text-orange-400">
              <Cpu className="w-5 h-5 animate-pulse" />
            </div>
            <h4 className="font-mono text-sm font-bold text-white tracking-wider stark-orange-title">
              SYS_03 // CONTROLS & RISK
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-mono font-light">
              Classification risk trees implementations (XGBoost), financial reconciliations algorithms, and asset finance software compliance parameters.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-8">
        <div className="flex items-end justify-between border-b border-cyan-950 pb-3">
          <div className="space-y-2">
            <h2 className="text-[10px] font-mono tracking-widest uppercase text-cyan-555">
              [SECTION_02] // REPOSITORIES
            </h2>
            <h3 className="text-2xl font-bold text-white tracking-tight stark-title">
              Systems Deployment Logs
            </h3>
          </div>
          <Link
            href="/case-studies"
            className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1 group"
          >
            SYS_DUMP_ALL
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCases.map((project, idx) => (
            <div
              key={project.slug}
              className={`${
                idx === 1 ? "stark-warning-panel" : "stark-panel"
              } rounded-lg overflow-hidden flex flex-col justify-between`}
            >
              <div className="p-8 space-y-5">
                <span className="text-[9px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/20 px-2 py-0.5 rounded border border-cyan-500/10">
                  {project.category}
                </span>
                <h4 className="text-lg font-bold text-white tracking-wider font-mono">
                  LOG_{idx + 1} // {project.title.toUpperCase()}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-mono font-light">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-black/40 text-cyan-400/80 px-2 py-0.5 rounded text-[9px] font-mono border border-cyan-555/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="px-8 py-4 bg-black/30 border-t border-cyan-950/60 flex justify-between items-center text-[10px] font-mono">
                <span className="text-slate-500">
                  PM_ROLE: {project.role.toUpperCase()}
                </span>
                <Link
                  href={`/case-studies#${project.slug}`}
                  className="font-bold text-cyan-400 hover:underline flex items-center"
                >
                  QUERY_STATUS
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* High-tech Stark warning panel philosophy */}
      <section className="stark-panel rounded-lg p-8 md:p-12 relative overflow-hidden hud-corner">
        <div className="absolute right-0 bottom-0 text-[70px] font-mono font-bold text-cyan-500/5 select-none pointer-events-none">
          STARK_INDUSTRIES
        </div>
        <div className="space-y-4 max-w-2xl relative z-10">
          <h3 className="text-[10px] font-mono tracking-widest uppercase text-cyan-500">
            [DELIVERY_LOG] // ARCHITECTURE_STATEMENT
          </h3>
          <blockquote className="text-slate-350 text-sm md:text-base font-mono font-light italic leading-relaxed border-l-2 border-cyan-555 pl-6">
            &ldquo;I believe technical project management in FinTech is about translating complex accounting frameworks and risk metrics into clean API contracts, automated integration templates, and reliable release schedules.&rdquo;
          </blockquote>
          <div className="text-[10px] text-cyan-500/60 font-mono pl-6">
            &mdash; Nikhil Udgata, Technical PM // SYS_OP_LEVEL_1
          </div>
        </div>
      </section>
    </div>
  );
}
