import Link from "next/link";
import { ArrowRight, Brain, Database, Cpu, ChevronRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";

export default function Home() {
  // Get the two most recent case studies for showcase
  const featuredCases = caseStudies.slice(0, 2);

  return (
    <div className="space-y-16 py-4">
      {/* Hero Section */}
      <section className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50/55 dark:bg-indigo-950/20 text-indigo-700 dark:text-indigo-400 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse"></span>
          <span>Based in Bengaluru, India</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
          Delivering Scale in FinTech Lending, AI Systems, and CRM Platforms
        </h1>
        <p className="text-lg text-slate-650 dark:text-slate-350 leading-relaxed">
          I am a <strong className="text-slate-905 dark:text-white font-semibold">Technical Project Manager</strong> with over 6 years of experience driving product execution, API integrations, and cross-functional growth. I bridge the gap between complex databases, risk algorithms, and business key results.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-indigo-600 hover:bg-indigo-750 text-white transition-all duration-200"
          >
            Explore Case Studies
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-250 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 transition-all duration-200"
          >
            View Work Experience
          </Link>
        </div>
      </section>

      {/* Core Domains */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Core Technical Verticals
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-6 bg-white dark:bg-slate-900/50 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center text-indigo-650 dark:text-indigo-400">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white text-lg">
              FinTech & API Delivery
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Managing digital lending funnels, mapping complex B2B data schemas, deploying secure webhooks, 
              and setting up real-time Grafana dashboards to minimize transaction failures.
            </p>
          </div>

          <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-6 bg-white dark:bg-slate-900/50 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-950/30 flex items-center justify-center text-teal-650 dark:text-teal-400">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white text-lg">
              Generative AI & RAG
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Architecting RAG-based search engines to index unstructured policy files, automating release note compilation 
              from JIRA, and validating LLM query models in HIPAA environments.
            </p>
          </div>

          <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-6 bg-white dark:bg-slate-900/50 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-sky-50 dark:bg-sky-950/30 flex items-center justify-center text-sky-650 dark:text-sky-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white text-lg">
              Risk & CRM Operations
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Integrating predictive machine learning models to profile default risk, implementing healthcare 
              CRM automation workflows, and aligning software setups with regulatory standards.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <Link
            href="/case-studies"
            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-750 dark:hover:text-indigo-300 flex items-center"
          >
            All Case Studies
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredCases.map((project) => (
            <div
              key={project.slug}
              className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900/40 flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded text-[11px] font-mono border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Role: {project.role}
                </span>
                <Link
                  href={`/case-studies#${project.slug}`}
                  className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
                >
                  Read details
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="bg-slate-900 dark:bg-slate-900 border border-slate-800 rounded-xl p-8 text-white space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Delivery Philosophy</h2>
        <blockquote className="text-slate-350 border-l-2 border-indigo-500 pl-4 italic text-sm sm:text-base">
          &ldquo;I believe technical project management isn&rsquo;t just about tracking sprint speed. It is about understanding 
          the schema models, resolving API and webhook blockers, and building real-time dashboards to ensure that 
          what engineering builds satisfies both strict compliance audits and business growth goals.&rdquo;
        </blockquote>
        <div className="pt-2 text-xs text-slate-450 font-mono">
          &mdash; Nikhil Udgata, TPM
        </div>
      </section>
    </div>
  );
}
