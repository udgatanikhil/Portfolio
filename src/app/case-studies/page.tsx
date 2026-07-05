import { caseStudies } from "@/data/case-studies";
import { Award, Layers, Zap, Clock, ShieldCheck } from "lucide-react";

export default function CaseStudies() {
  return (
    <div className="space-y-16 py-4">
      {/* Intro Header */}
      <section className="space-y-4 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Technical Project Case Studies
        </h1>
        <p className="text-base text-slate-650 dark:text-slate-350 leading-relaxed">
          The following case studies outline real-world engineering projects I have managed. 
          Each case represents a complete lifecycle from initial problem identification and stakeholder 
          alignment, through technical architecture selection, agile execution, risk management, and outcome validation.
        </p>
      </section>

      {/* Case Studies List */}
      <section className="space-y-24">
        {caseStudies.map((project, idx) => (
          <article
            key={project.slug}
            id={project.slug}
            className="scroll-mt-20 border-t border-slate-200 dark:border-slate-800 pt-12 first:border-t-0 first:pt-0"
          >
            <div className="space-y-6">
              {/* Header Info */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Case Study #{idx + 1} &mdash; {project.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-905 dark:text-white tracking-tight">
                  {project.title}
                </h2>
              </div>

              {/* Meta Stats Panel */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80">
                <div>
                  <span className="text-xs text-slate-500 block">Role</span>
                  <span className="text-sm font-semibold text-slate-850 dark:text-slate-205">
                    {project.role}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Timeline</span>
                  <span className="text-sm font-semibold text-slate-850 dark:text-slate-205 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {project.timeline}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-xs text-slate-500 block">Core Stack</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white dark:bg-slate-800 px-2 py-0.5 rounded text-[10px] font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
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
                    <h3 className="text-sm font-semibold tracking-wide uppercase text-slate-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                      Problem Statement
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Approach */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold tracking-wide uppercase text-slate-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      Strategic Approach
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      {project.approach}
                    </p>
                  </div>

                  {/* Technical Architecture */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold tracking-wide uppercase text-slate-500 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-indigo-500" />
                      Technical Architecture & Integration
                    </h3>
                    <ul className="space-y-2 pl-1">
                      {project.architecture.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-slate-650 dark:text-slate-350 leading-relaxed">
                          <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold">
                            [{idx + 1}]
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Outcome */}
                  <div className="border-l-2 border-emerald-500 pl-4 space-y-2 bg-emerald-50/20 dark:bg-emerald-950/10 py-3 pr-3 rounded-r-lg">
                    <h3 className="text-xs font-semibold tracking-wide uppercase text-emerald-705 dark:text-emerald-450 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-555" />
                      Validated Outcome
                    </h3>
                    <p className="text-slate-700 dark:text-slate-350 text-sm leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                {/* Right Column: KPIs Grid */}
                <div className="md:col-span-4 space-y-4">
                  <h3 className="text-sm font-semibold tracking-wide uppercase text-slate-500 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    Key Performance Indicators (KPIs)
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {project.kpis.map((kpi, kpiIdx) => (
                      <div
                        key={kpiIdx}
                        className="border border-slate-200 dark:border-slate-800 p-4 rounded-xl bg-white dark:bg-slate-900 flex flex-col justify-center items-center text-center"
                      >
                        <span className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight">
                          {kpi.value}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
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
