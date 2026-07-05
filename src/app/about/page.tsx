import { Brain, CheckCircle, ShieldAlert, Award } from "lucide-react";

export default function About() {
  return (
    <div className="space-y-16 max-w-3xl py-6 animate-fade-up">
      {/* Introduction */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-xs font-mono tracking-widest uppercase text-cyan-500">
            [IDENT_DOSSIER] // MODULE_01
          </h1>
          <h2 className="text-3xl font-bold tracking-tight text-white stark-title">
            About Nikhil Udgata
          </h2>
        </div>
        <p className="text-sm text-slate-350 leading-relaxed font-mono font-light">
          I am Nikhil Udgata, a growth-oriented FinTech professional and Technical Project Manager with over 6 years of experience driving product execution, risk analytics, and cross-functional delivery. Based in Bengaluru, India, I specialize in leveraging data-driven decision making, product analytics, and database modeling to optimize complex financial products and enterprise systems.
        </p>
        <p className="text-sm text-slate-350 leading-relaxed font-mono font-light">
          Throughout my career at companies like FinBox, LeadSquared, and Odessa Technologies, I have successfully coordinated engineering, product, and client teams to deploy scalable APIs, integrate machine learning default-risk estimators, and build RAG-based AI search engines to streamline operations. My background combining a B.Tech in Computer Science and an MBA in Technology Management enables me to translate technical capability into business growth.
        </p>
      </section>

      {/* Leadership Philosophy */}
      <section className="space-y-8">
        <div className="border-b border-cyan-950 pb-3">
          <h3 className="text-lg font-bold text-white font-mono tracking-wider stark-title">
            SYS_OPERATING_PRINCIPLES
          </h3>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {/* Principle 1 */}
          <div className="flex gap-5">
            <div className="flex-shrink-0 w-9 h-9 rounded bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Brain className="w-5 h-5 animate-pulse" />
            </div>
            <div className="space-y-1">
              <h4 className="font-mono text-sm font-bold text-white tracking-wider">
                01 // DATA-DRIVEN DIAGNOSTICS
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-mono font-light">
                Rather than relying on qualitative assumptions, I build my project strategies around database analytics. I write SQL scripts to isolate onboarding friction points, analyze transaction dashboards to diagnose API drop-offs, and monitor real-time Grafana logs to catch failures early.
              </p>
            </div>
          </div>

          {/* Principle 2 */}
          <div className="flex gap-5">
            <div className="flex-shrink-0 w-9 h-9 rounded bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <CheckCircle className="w-5 h-5 animate-pulse" />
            </div>
            <div className="space-y-1">
              <h4 className="font-mono text-sm font-bold text-white tracking-wider">
                02 // ARCHITECTURAL COMPLIANCE
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-mono font-light">
                Working in FinTech and Healthcare requires strict compliance. I specialize in aligning software development lifecycles with HIPAA data encryption policies, IFRS and GAAP accounting guidelines, and secure B2B financial webhooks.
              </p>
            </div>
          </div>

          {/* Principle 3 */}
          <div className="flex gap-5">
            <div className="flex-shrink-0 w-9 h-9 rounded bg-orange-950/20 border border-orange-500/20 flex items-center justify-center text-orange-400">
              <ShieldAlert className="w-5 h-5 animate-pulse" />
            </div>
            <div className="space-y-1">
              <h4 className="font-mono text-sm font-bold text-white tracking-wider stark-orange-title">
                03 // CORE ENGINE AUTOMATION
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-mono font-light">
                I actively look for processes that can be streamlined with AI. Whether it is building indexing pipelines to search unstructured CRM policy data or deploying a RAG chatbot to parse JIRA commits and compile release summaries, I believe in minimizing administrative friction for developer pods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="space-y-8">
        <div className="border-b border-cyan-950 pb-3">
          <h3 className="text-lg font-bold text-white font-mono tracking-wider stark-title">
            SYS_VERSION_HISTORY
          </h3>
        </div>
        
        <div className="space-y-8 pl-4 border-l border-cyan-950/50 ml-2">
          {/* Item 1 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 border border-black shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className="font-bold text-white text-sm font-mono tracking-wider">
                V_2025 // TECHNICAL PROJECT MANAGER
              </h4>
              <span className="text-[10px] font-mono bg-cyan-950/30 border border-cyan-555/10 text-cyan-400 px-2 py-0.5 rounded">
                NOV 2025 &ndash; ACTIVE
              </span>
            </div>
            <p className="text-xs text-orange-400 font-mono">
              FinBox // B2B FinTech Core
            </p>
            <p className="text-xs text-slate-400 leading-relaxed font-mono font-light">
              Leading product delivery and roadmap planning of B2B digital lending journeys, risk scoring engines, and API integrations. Deploying Grafana transaction-tracking metrics and developing custom internal RAG tools to automate JIRA release tracking.
            </p>
          </div>

          {/* Item 2 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-slate-700 border border-black"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className="font-bold text-white text-sm font-mono tracking-wider">
                V_2024 // SENIOR BUSINESS ANALYST
              </h4>
              <span className="text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-450 px-2 py-0.5 rounded">
                NOV 2024 &ndash; OCT 2025
              </span>
            </div>
            <p className="text-xs text-cyan-400 font-mono">
              LeadSquared (LSQ) // Healthcare CRM Division
            </p>
            <p className="text-xs text-slate-400 leading-relaxed font-mono font-light">
              Oversaw HIPAA-compliant healthcare CRM deployments, gather user requirements, and draft PRDs. Spearheaded a RAG-based AI search model to index unstructured customer documentation, cutting patient onboarding cycles by 30%.
            </p>
          </div>

          {/* Item 3 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-slate-700 border border-black"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className="font-bold text-white text-sm font-mono tracking-wider">
                V_2020 // BUSINESS ANALYST & ASSOCIATE BA
              </h4>
              <span className="text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-450 px-2 py-0.5 rounded">
                MAY 2020 &ndash; OCT 2024
              </span>
            </div>
            <p className="text-xs text-cyan-400 font-mono">
              Odessa Technologies // Lease Origination Engines
            </p>
            <p className="text-xs text-slate-400 leading-relaxed font-mono font-light">
              Managed asset finance software implementations for Tier-1 multinational clients under IFRS/GAAP models. Led auto-origination process automation and integrated scikit-learn Random Forest models to calculate default-risk scores, reducing credit losses by 40%.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications / Awards */}
      <section className="space-y-8">
        <div className="border-b border-cyan-950 pb-3">
          <h3 className="text-lg font-bold text-white font-mono tracking-wider stark-title">
            SYS_HARDWARE_CREDENTIALS
          </h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="stark-panel rounded-lg p-5 flex items-center space-x-4">
            <div className="flex-shrink-0 w-10 h-10 rounded border border-cyan-500/20 bg-cyan-950/10 flex items-center justify-center text-cyan-400">
              <Award className="w-5 h-5 animate-pulse" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white font-mono">
                CFA LEVEL 1 PASSED
              </h4>
              <p className="text-[10px] text-slate-400 font-mono">[CFA Institute] // [L2 Candidate - May 2026]</p>
            </div>
          </div>

          <div className="stark-panel rounded-lg p-5 flex items-center space-x-4">
            <div className="flex-shrink-0 w-10 h-10 rounded border border-cyan-500/20 bg-cyan-950/10 flex items-center justify-center text-cyan-400">
              <Award className="w-5 h-5 animate-pulse" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white font-mono">
                DATA SCIENCE HONORS
              </h4>
              <p className="text-[10px] text-slate-400 font-mono">[WorldQuant University] // [Levels 1 & 2]</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
