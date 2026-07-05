import { Brain, CheckCircle, ShieldAlert, Award } from "lucide-react";

export default function About() {
  return (
    <div className="space-y-16 max-w-3xl py-6 animate-fade-up">
      {/* Introduction */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-xs font-mono tracking-widest uppercase text-slate-400 dark:text-slate-500">
            Background
          </h1>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
        </div>
        <p className="text-base text-slate-650 dark:text-slate-350 leading-relaxed font-light">
          I am Nikhil Udgata, a growth-oriented FinTech professional and Technical Project Manager with over 6 years of experience driving product execution, risk analytics, and cross-functional delivery. Based in Bengaluru, India, I specialize in leveraging data-driven decision making, product analytics, and database modeling to optimize complex financial products and enterprise systems.
        </p>
        <p className="text-base text-slate-650 dark:text-slate-355 leading-relaxed font-light">
          Throughout my career at companies like FinBox, LeadSquared, and Odessa Technologies, I have successfully coordinated engineering, product, and client teams to deploy scalable APIs, integrate machine learning default-risk estimators, and build RAG-based AI search engines to streamline operations. My background combining a B.Tech in Computer Science and an MBA in Technology Management enables me to translate technical capability into business growth.
        </p>
      </section>

      {/* Leadership Philosophy */}
      <section className="space-y-8">
        <div className="border-b border-slate-100 dark:border-slate-850 pb-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Project Delivery Philosophy
          </h3>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          <div className="flex gap-5">
            <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 flex items-center justify-center text-brand-indigo">
              <Brain className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-semibold text-slate-905 dark:text-white text-base">
                1. Data-Driven Diagnostics
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                Rather than relying on qualitative assumptions, I build my project strategies around database analytics. I write SQL scripts to isolate onboarding friction points, analyze transaction dashboards to diagnose API drop-offs, and monitor real-time Grafana logs to catch failures early.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 flex items-center justify-center text-teal-650 dark:text-teal-400">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-semibold text-slate-905 dark:text-white text-base">
                2. Regulatory & Architectural Compliance
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                Working in FinTech and Healthcare requires strict compliance. I specialize in aligning software development lifecycles with HIPAA data encryption policies, IFRS and GAAP accounting guidelines, and secure B2B financial webhooks.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-sky-50/50 dark:bg-sky-950/20 flex items-center justify-center text-brand-sky">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-semibold text-slate-905 dark:text-white text-base">
                3. Automation of Engineering Overhead
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                I actively look for processes that can be streamlined with AI. Whether it is building indexing pipelines to search unstructured CRM policy data or deploying a RAG chatbot to parse JIRA commits and compile release summaries, I believe in minimizing administrative friction for developer pods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="space-y-8">
        <div className="border-b border-slate-100 dark:border-slate-850 pb-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Career Journey
          </h3>
        </div>
        
        <div className="space-y-8 pl-4 border-l border-slate-200 dark:border-slate-800 ml-2">
          {/* Item 1 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-brand-indigo border border-white dark:border-slate-950"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                Technical Project Manager
              </h4>
              <span className="text-xs font-mono bg-slate-100 dark:bg-slate-850 px-2 py-0.5 rounded text-slate-500 dark:text-slate-400">
                Nov 2025 &ndash; Present
              </span>
            </div>
            <p className="text-xs text-brand-indigo font-medium font-mono uppercase tracking-wider">
              FinBox — Bengaluru, India
            </p>
            <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed font-light">
              Leading product delivery and roadmap planning of B2B digital lending journeys, risk scoring engines, and API integrations. Deploying Grafana transaction-tracking metrics and developing custom internal RAG tools to automate JIRA release tracking.
            </p>
          </div>

          {/* Item 2 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-slate-350 dark:bg-slate-700 border border-white dark:border-slate-950"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                Senior Business Analyst
              </h4>
              <span className="text-xs font-mono bg-slate-100 dark:bg-slate-850 px-2 py-0.5 rounded text-slate-500 dark:text-slate-400">
                Nov 2024 &ndash; Oct 2025
              </span>
            </div>
            <p className="text-xs text-brand-indigo font-medium font-mono uppercase tracking-wider">
              LeadSquared (LSQ) — Bengaluru, India
            </p>
            <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed font-light">
              Oversaw HIPAA-compliant healthcare CRM deployments, gather user requirements, and draft PRDs. Spearheaded a RAG-based AI search model to index unstructured customer documentation, cutting patient onboarding cycles by 30%.
            </p>
          </div>

          {/* Item 3 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-slate-350 dark:bg-slate-700 border border-white dark:border-slate-950"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                Business Analyst & Associate BA
              </h4>
              <span className="text-xs font-mono bg-slate-100 dark:bg-slate-850 px-2 py-0.5 rounded text-slate-500 dark:text-slate-400">
                May 2020 &ndash; Oct 2024
              </span>
            </div>
            <p className="text-xs text-brand-indigo font-medium font-mono uppercase tracking-wider">
              Odessa Technologies — Bengaluru, India
            </p>
            <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed font-light">
              Managed asset finance software implementations for Tier-1 multinational clients under IFRS/GAAP models. Led auto-origination process automation and integrated scikit-learn Random Forest models to calculate default-risk scores, reducing credit losses by 40%.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications / Awards */}
      <section className="space-y-8">
        <div className="border-b border-slate-100 dark:border-slate-850 pb-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Professional Credentials
          </h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="premium-card rounded-xl p-5 flex items-center space-x-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50/50 dark:bg-indigo-950/20 flex items-center justify-center text-brand-indigo">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                CFA Level 1 Passed
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">CFA Institute (Level 2 Candidate)</p>
            </div>
          </div>

          <div className="premium-card rounded-xl p-5 flex items-center space-x-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50/50 dark:bg-indigo-950/20 flex items-center justify-center text-brand-indigo">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                Data Science Honors
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">WorldQuant University (Levels 1 & 2)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
