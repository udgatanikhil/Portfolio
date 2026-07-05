import { caseStudies } from "@/data/case-studies";
import { Layers, Zap, Clock, ShieldCheck } from "lucide-react";

export default function CaseStudies() {
  return (
    <div className="space-y-16 py-6 md:py-12 animate-fade-up">
      {/* Intro Header */}
      <section className="space-y-4 max-w-3xl">
        <div className="space-y-2">
          <h1 className="text-xs font-mono tracking-widest uppercase text-slate-400 dark:text-slate-500">
            Case Studies
          </h1>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technical Project Case Studies
          </h2>
        </div>
        <p className="text-base text-slate-650 dark:text-slate-350 leading-relaxed font-light">
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
            className="scroll-mt-20 border-t border-slate-200 dark:border-slate-800/80 pt-16 first:border-t-0 first:pt-0"
          >
            <div className="space-y-8">
              {/* Header Info */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-brand-indigo font-semibold">
                  Case Study #{idx + 1} &mdash; {project.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {project.title}
                </h3>
              </div>

              {/* Meta Stats Panel */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/80">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block">Role</span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {project.role}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block">Timeline</span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {project.timeline}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block text-left">Core Stack</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white dark:bg-slate-900 px-2 py-0.5 rounded text-[10px] font-mono text-slate-600 dark:text-slate-350 border border-slate-200 dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Core Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
                {/* Left Column: Problem, Approach, Architecture, Outcome */}
                <div className="md:col-span-8 space-y-8">
                  {/* Problem Statement */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono tracking-widest uppercase text-slate-400 dark:text-slate-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80"></span>
                      Problem Statement
                    </h4>
                    <p className="text-slate-655 dark:text-slate-300 text-sm leading-relaxed font-light">
                      {project.problem}
                    </p>
                  </div>

                  {/* Approach */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono tracking-widest uppercase text-slate-400 dark:text-slate-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80"></span>
                      Strategic Approach
                    </h4>
                    <p className="text-slate-655 dark:text-slate-300 text-sm leading-relaxed font-light">
                      {project.approach}
                    </p>
                  </div>

                  {/* Technical Architecture */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono tracking-widest uppercase text-slate-400 dark:text-slate-500 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-brand-indigo" />
                      Technical Integration & Architecture
                    </h4>
                    <ul className="space-y-2.5 pl-1">
                      {project.architecture.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-slate-650 dark:text-slate-350 leading-relaxed font-light">
                          <span className="font-mono text-brand-indigo font-bold text-xs mt-0.5">
                            [{idx + 1}]
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Outcome */}
                  <div className="border-l-2 border-emerald-500 dark:border-emerald-600 pl-5 space-y-2 bg-emerald-50/10 dark:bg-emerald-950/5 py-4 pr-4 rounded-r-2xl">
                    <h4 className="text-xs font-mono tracking-widest uppercase text-emerald-700 dark:text-emerald-450 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      Validated Outcome
                    </h4>
                    <p className="text-slate-655 dark:text-slate-300 text-sm leading-relaxed font-light">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                {/* Right Column: KPIs Grid */}
                <div className="md:col-span-4 space-y-4">
                  <h4 className="text-xs font-mono tracking-widest uppercase text-slate-400 dark:text-slate-500 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800/80 pb-2.5">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    Project Metrics (KPIs)
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {project.kpis.map((kpi, kpiIdx) => (
                      <div
                        key={kpiIdx}
                        className="premium-card rounded-2xl p-5 flex flex-col justify-center items-center text-center"
                      >
                        <span className="text-3xl font-extrabold text-brand-indigo tracking-tight">
                          {kpi.value}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-450 mt-1.5">
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
