import { Award } from "lucide-react";

export default function About() {
  return (
    <div className="space-y-16 max-w-3xl py-8 md:py-16 animate-fade-up">
      {/* Introduction */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h1 className="text-[10px] font-mono tracking-widest uppercase text-cyan-400">
            About
          </h1>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Nikhil Udgata
          </h2>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed font-light">
          I am Nikhil Udgata, a growth-oriented FinTech professional and Technical Project Manager with over 6 years of experience driving product execution, risk analytics, and cross-functional delivery. Based in Bengaluru, India, I specialize in leveraging data-driven decision making, product analytics, and database modeling to optimize complex financial products and enterprise systems.
        </p>
        <p className="text-sm text-slate-400 leading-relaxed font-light">
          Throughout my career at companies like FinBox, LeadSquared, and Odessa Technologies, I have successfully coordinated engineering, product, and client teams to deploy scalable APIs, integrate machine learning default-risk estimators, and build RAG-based AI search engines to streamline operations. My background combining a B.Tech in Computer Science and an MBA in Technology Management enables me to translate technical capability into business growth.
        </p>
      </section>

      {/* Leadership Philosophy */}
      <section className="space-y-8">
        <div className="border-b border-slate-900 pb-3">
          <h3 className="text-lg font-bold text-white tracking-wider">
            Operating Principles
          </h3>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white tracking-wide">
              1. Data-Driven Diagnostics
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Rather than relying on qualitative assumptions, I build my project strategies around database analytics. I write SQL scripts to isolate onboarding friction points, analyze transaction dashboards to diagnose API drop-offs, and monitor real-time Grafana logs to catch failures early.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white tracking-wide">
              2. Architectural Compliance
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Working in FinTech and Healthcare requires strict compliance. I specialize in aligning software development lifecycles with HIPAA data encryption policies, IFRS and GAAP accounting guidelines, and secure B2B financial webhooks.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white tracking-wide">
              3. Core Engine Automation
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              I actively look for processes that can be streamlined with AI. Whether it is building indexing pipelines to search unstructured CRM policy data or deploying a RAG chatbot to parse JIRA commits and compile release summaries, I believe in minimizing administrative friction for developer pods.
            </p>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="space-y-8">
        <div className="border-b border-slate-900 pb-3">
          <h3 className="text-lg font-bold text-white tracking-wider">
            Career Journey
          </h3>
        </div>
        
        <div className="space-y-8 pl-4 border-l border-slate-850 ml-1">
          {/* Item 1 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-cyan-400"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className="font-bold text-white text-sm font-sans tracking-wide">
                Technical Project Manager
              </h4>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/20 px-2 py-0.5 rounded border border-cyan-500/10">
                Nov 2025 &ndash; Present
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              FinBox // Bengaluru, India
            </p>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Leading product delivery and roadmap planning of B2B digital lending journeys, risk scoring engines, and API integrations. Deploying Grafana transaction-tracking metrics and developing custom internal RAG tools to automate JIRA release tracking.
            </p>
          </div>

          {/* Item 2 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-700"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className="font-bold text-white text-sm font-sans tracking-wide">
                Senior Business Analyst
              </h4>
              <span className="text-[10px] font-mono text-slate-450 bg-[#111216] px-2 py-0.5 rounded border border-slate-800">
                Nov 2024 &ndash; Oct 2025
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              LeadSquared (LSQ) // Bengaluru, India
            </p>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Oversaw HIPAA-compliant healthcare CRM deployments, gather user requirements, and draft PRDs. Spearheaded a RAG-based AI search model to index unstructured customer documentation, cutting patient onboarding cycles by 30%.
            </p>
          </div>

          {/* Item 3 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-700"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className="font-bold text-white text-sm font-sans tracking-wide">
                Business Analyst & Associate BA
              </h4>
              <span className="text-[10px] font-mono text-slate-450 bg-[#111216] px-2 py-0.5 rounded border border-slate-800">
                May 2020 &ndash; Oct 2024
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              Odessa Technologies // Bengaluru, India
            </p>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Managed asset finance software implementations for Tier-1 multinational clients under IFRS/GAAP models. Led auto-origination process automation and integrated scikit-learn Random Forest models to calculate default-risk scores, reducing credit losses by 40%.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications / Awards */}
      <section className="space-y-8">
        <div className="border-b border-slate-900 pb-3">
          <h3 className="text-lg font-bold text-white tracking-wider">
            Credentials
          </h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="stark-panel rounded-xl p-5 flex items-center space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Award className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold text-white">
                CFA Level 1 Passed
              </h4>
              <p className="text-[10px] text-slate-450 font-mono">CFA Institute (Level 2 Candidate)</p>
            </div>
          </div>

          <div className="stark-panel rounded-xl p-5 flex items-center space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Award className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold text-white">
                Data Science Honors
              </h4>
              <p className="text-[10px] text-slate-450 font-mono">WorldQuant University (Levels 1 & 2)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
