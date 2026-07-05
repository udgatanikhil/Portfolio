import { Brain, CheckCircle, ShieldAlert, Award } from "lucide-react";

export default function About() {
  return (
    <div className="space-y-12 max-w-3xl py-4">
      {/* Introduction */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          About Me
        </h1>
        <p className="text-base text-slate-650 dark:text-slate-355 leading-relaxed">
          I am Nikhil Udgata, a growth-oriented FinTech professional and Technical Project Manager with over 6 years of experience driving product execution, risk analytics, and cross-functional delivery. Based in Bengaluru, India, I specialize in leveraging data-driven decision making, product analytics, and database modeling to optimize complex financial products and enterprise systems.
        </p>
        <p className="text-base text-slate-650 dark:text-slate-355 leading-relaxed">
          Throughout my career at companies like FinBox, LeadSquared, and Odessa Technologies, I have successfully coordinated engineering, product, and client teams to deploy scalable APIs, integrate machine learning default-risk estimators, and build RAG-based AI search engines to streamline operations. My background combining a B.Tech in Computer Science and an MBA in Technology Management enables me to translate technical capability into business growth.
        </p>
      </section>

      {/* Leadership Philosophy */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Project Delivery Philosophy
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-650 dark:text-indigo-400">
              <Brain className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                1. Data-Driven Diagnostics
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                Rather than relying on qualitative assumptions, I build my project strategies around database analytics. I write SQL scripts to isolate onboarding friction points, analyze transaction dashboards to diagnose API drop-offs, and monitor real-time Grafana logs to catch failures early.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded bg-teal-50 dark:bg-teal-950/40 flex items-center justify-center text-teal-650 dark:text-teal-400">
              <CheckCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                2. Regulatory & Architectural Compliance
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                Working in FinTech and Healthcare requires strict compliance. I specialize in aligning software development lifecycles with HIPAA data encryption policies, IFRS and GAAP accounting guidelines, and secure B2B financial webhooks.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded bg-sky-50 dark:bg-sky-950/40 flex items-center justify-center text-sky-650 dark:text-sky-400">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                3. Automation of Engineering Overhead
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                I actively look for processes that can be streamlined with AI. Whether it is building indexing pipelines to search unstructured CRM policy data or deploying a RAG chatbot to parse JIRA commits and compile release summaries, I believe in minimizing administrative friction for developer pods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Career Journey
          </h2>
        </div>
        <div className="space-y-8 pl-4 border-l border-slate-200 dark:border-slate-800 ml-2">
          {/* Item 1 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-indigo-650 border border-white dark:border-slate-950"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Technical Project Manager
              </h3>
              <span className="text-xs font-mono bg-slate-100 dark:bg-slate-850 px-2 py-0.5 rounded text-slate-500 dark:text-slate-400">
                Nov 2025 &ndash; Present
              </span>
            </div>
            <p className="text-xs text-indigo-650 dark:text-indigo-400 font-medium">
              FinBox — Bengaluru, India
            </p>
            <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed">
              Leading product delivery and roadmap planning of B2B digital lending journeys, risk scoring engines, and API integrations. Deploying Grafana transaction-tracking metrics and developing custom internal RAG tools to automate JIRA release tracking.
            </p>
          </div>

          {/* Item 2 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-slate-400 dark:bg-slate-600 border border-white dark:border-slate-950"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Senior Business Analyst
              </h3>
              <span className="text-xs font-mono bg-slate-100 dark:bg-slate-850 px-2 py-0.5 rounded text-slate-500 dark:text-slate-400">
                Nov 2024 &ndash; Oct 2025
              </span>
            </div>
            <p className="text-xs text-indigo-650 dark:text-indigo-400 font-medium">
              LeadSquared (LSQ) — Bengaluru, India
            </p>
            <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed">
              Oversaw HIPAA-compliant healthcare CRM deployments, gather user requirements, and draft PRDs. Spearheaded a RAG-based AI search model to index unstructured customer documentation, cutting patient onboarding cycles by 30%.
            </p>
          </div>

          {/* Item 3 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-slate-400 dark:bg-slate-600 border border-white dark:border-slate-950"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Business Analyst & Associate BA
              </h3>
              <span className="text-xs font-mono bg-slate-100 dark:bg-slate-850 px-2 py-0.5 rounded text-slate-500 dark:text-slate-400">
                May 2020 &ndash; Oct 2024
              </span>
            </div>
            <p className="text-xs text-indigo-650 dark:text-indigo-400 font-medium">
              Odessa Technologies — Bengaluru, India
            </p>
            <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed">
              Managed asset finance software implementations for Tier-1 multinational clients under IFRS/GAAP models. Led auto-origination process automation and integrated scikit-learn Random Forest models to calculate default-risk scores, reducing credit losses by 40%.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications / Awards */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Certifications & Credentials
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-4 bg-slate-50/50 dark:bg-slate-900/20 flex items-center space-x-3">
            <Award className="text-indigo-650 dark:text-indigo-400 w-5 h-5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                CFA Level 1 Passed
              </p>
              <p className="text-xs text-slate-500">CFA Institute (Level 2 Candidate - May 2026)</p>
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-4 bg-slate-50/50 dark:bg-slate-900/20 flex items-center space-x-3">
            <Award className="text-indigo-650 dark:text-indigo-400 w-5 h-5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Data Science Honors
              </p>
              <p className="text-xs text-slate-500">WorldQuant University (Levels 1 & 2)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
