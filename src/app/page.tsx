import Link from "next/link";
import { ArrowRight, Brain, Database, Cpu, ChevronRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";

export default function Home() {
  // Get the two most recent case studies for showcase
  const featuredCases = caseStudies.slice(0, 2);

  return (
    <div className="space-y-24 py-6 md:py-12 animate-fade-up">
      {/* Hero Section */}
      <section className="space-y-8 max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-950 bg-indigo-50/40 dark:bg-indigo-950/10 text-indigo-750 dark:text-indigo-400 text-[11px] font-mono tracking-wider uppercase font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo animate-pulse"></span>
          <span>Bengaluru, India</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] font-sans">
          Engineering delivery. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-sky font-extrabold">
            Optimized for impact.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-650 dark:text-slate-400 leading-relaxed max-w-2xl font-light">
          I am <strong className="text-slate-905 dark:text-white font-semibold">Nikhil Udgata</strong>, a Technical Project Manager. I bridge the gap between complex software architecture, machine learning models, and core business metrics.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium bg-brand-indigo hover:bg-indigo-700 dark:hover:bg-indigo-500 text-white transition-all duration-300 shadow-sm shadow-indigo-500/10 hover:shadow-indigo-500/20 hover:scale-[1.01]"
          >
            Explore Case Studies
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 transition-all duration-300 hover:scale-[1.01]"
          >
            View Work History
          </Link>
        </div>
      </section>

      {/* Core Domains */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-xs font-mono tracking-widest uppercase text-slate-400 dark:text-slate-500">
            Expertise
          </h2>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Core Verticals of Delivery
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="premium-card rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-50/50 dark:bg-indigo-950/20 flex items-center justify-center text-brand-indigo">
              <Database className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-slate-905 dark:text-white text-lg">
              FinTech & API Delivery
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              Designing digital lending paths, standardizing B2B webhook callback structures, and optimizing database 
              funnels to maintain transaction velocity.
            </p>
          </div>

          <div className="premium-card rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-teal-50/50 dark:bg-teal-950/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
              <Brain className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-slate-905 dark:text-white text-lg">
              Generative AI & RAG
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              Building document chunking and metadata search pipelines, RAG retrievers to analyze commit records, 
              and safe LLM panels within HIPAA boundaries.
            </p>
          </div>

          <div className="premium-card rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-sky-50/50 dark:bg-sky-950/20 flex items-center justify-center text-brand-sky">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-slate-905 dark:text-white text-lg">
              Risk & CRM Analytics
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              Integrating classification ML algorithms for default prediction, optimizing CRM workflows, 
              and aligning systems to financial regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-8">
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <h2 className="text-xs font-mono tracking-widest uppercase text-slate-400 dark:text-slate-500">
              Recent Work
            </h2>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Featured Case Studies
            </h3>
          </div>
          <Link
            href="/case-studies"
            className="text-xs font-semibold text-brand-indigo hover:text-indigo-700 dark:hover:text-indigo-400 flex items-center gap-1 group"
          >
            All Projects
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCases.map((project) => (
            <div
              key={project.slug}
              className="premium-card rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              <div className="p-8 space-y-5">
                <span className="text-xs font-mono uppercase tracking-wider text-brand-indigo">
                  {project.category}
                </span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {project.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-350 px-2 py-0.5 rounded text-[10px] font-mono border border-slate-100 dark:border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="px-8 py-4 bg-slate-50/50 dark:bg-slate-900/20 border-t border-slate-100 dark:border-slate-800/80 flex justify-between items-center text-xs">
                <span className="text-slate-500 dark:text-slate-450 font-mono">
                  Role: {project.role}
                </span>
                <Link
                  href={`/case-studies#${project.slug}`}
                  className="font-semibold text-brand-indigo hover:underline flex items-center"
                >
                  Read Case Details
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery Philosophy */}
      <section className="premium-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-br from-brand-indigo/10 to-brand-sky/10 rounded-bl-full pointer-events-none"></div>
        <div className="space-y-6 max-w-2xl">
          <h3 className="text-xs font-mono tracking-widest uppercase text-slate-450 dark:text-slate-500">
            Mission
          </h3>
          <blockquote className="text-slate-700 dark:text-slate-300 text-lg md:text-xl font-light italic leading-relaxed border-l-2 border-brand-indigo pl-6">
            &ldquo;I believe technical project management in FinTech is about translating complex accounting frameworks and risk metrics into clean API contracts, automated integration templates, and reliable release schedules.&rdquo;
          </blockquote>
          <div className="text-xs text-slate-400 dark:text-slate-500 font-mono pl-6">
            &mdash; Nikhil Udgata, Technical PM
          </div>
        </div>
      </section>
    </div>
  );
}
