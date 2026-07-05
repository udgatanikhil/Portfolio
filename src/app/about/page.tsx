import { Brain, CheckCircle, ShieldAlert, Award } from "lucide-react";

export default function About() {
  return (
    <div className="space-y-12 max-w-3xl py-4">
      {/* Introduction */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          About Me
        </h1>
        <p className="text-base text-slate-650 dark:text-slate-350 leading-relaxed">
          I am Alex Morgan, a Senior Technical Project Manager with over 8 years of experience leading cross-functional teams in building scalable data systems, cloud platforms, and machine learning models. I specialize in taking highly technical, ambiguous concepts and turning them into structured project plans that deliver business-measurable results.
        </p>
        <p className="text-base text-slate-650 dark:text-slate-350 leading-relaxed">
          Before transitioning to project and product management, I spent 3 years working as a software developer, specializing in data pipelines and distributed systems. Having a hand-on software engineering background allows me to communicate effectively with developers, review system architecture designs, and accurately evaluate engineering risks.
        </p>
      </section>

      {/* Leadership Philosophy */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Project Management Philosophy
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <Brain className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                1. Architecture First
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                Project timelines cannot be decoupled from technical architecture. I spend time with technical leads to understand database schemas, network constraints, API contracts, and vector embeddings indexes before committing to roadmaps.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded bg-teal-50 dark:bg-teal-950/40 flex items-center justify-center text-teal-600 dark:text-teal-400">
              <CheckCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                2. Uncompromised Quality & Testing
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                A system is only as good as its reliability in production. I champion rigorous QA processes, performance monitoring, regression test automation, and safety evaluations when deploying customer-facing AI agents.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded bg-sky-50 dark:bg-sky-950/40 flex items-center justify-center text-sky-650 dark:text-sky-400">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                3. Risk Mitigation & Clear Communication
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                Identify blockers before they happen. By maintaining a clear dependency graph, conducting proactive spike tasks, and keeping channels of communication transparent, we minimize project delays and build trust.
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
                Senior Technical Project Manager (AI Platforms)
              </h3>
              <span className="text-xs font-mono bg-slate-100 dark:bg-slate-850 px-2 py-0.5 rounded text-slate-500 dark:text-slate-400">
                2024 &ndash; Present
              </span>
            </div>
            <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
              Enterprise Tech Solutions Inc.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Leading the delivery of internal generative AI engines, model fine-tuning platforms, and secure enterprise RAG products. Managing an agile team of 14, comprising data scientists, machine learning engineers, and frontend developers.
            </p>
          </div>

          {/* Item 2 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-slate-400 dark:bg-slate-600 border border-white dark:border-slate-950"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Technical Product & Project Manager (Data Systems)
              </h3>
              <span className="text-xs font-mono bg-slate-100 dark:bg-slate-850 px-2 py-0.5 rounded text-slate-500 dark:text-slate-400">
                2021 &ndash; 2024
              </span>
            </div>
            <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
              Apex Global Analytics
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Managed the migration of legacy Oracle databases to Snowflake. Oversaw data pipeline reliability projects and standard CRM integration workflows. Worked directly with business leads to convert corporate KPIs into technical database specifications.
            </p>
          </div>

          {/* Item 3 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-slate-400 dark:bg-slate-600 border border-white dark:border-slate-950"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Software Engineer (Data & Backend)
              </h3>
              <span className="text-xs font-mono bg-slate-100 dark:bg-slate-850 px-2 py-0.5 rounded text-slate-500 dark:text-slate-400">
                2018 &ndash; 2021
              </span>
            </div>
            <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
              Nexus Software Labs
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Developed distributed backend web services using Java and Python. Wrote data pipeline jobs using Apache Spark. Contributed to database migrations, optimization of slow queries, and third-party API configurations.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications / Awards */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Professional Credentials
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-4 bg-slate-50/50 dark:bg-slate-900/20 flex items-center space-x-3">
            <Award className="text-indigo-650 dark:text-indigo-400 w-5 h-5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-slate-905 dark:text-white">
                Project Management Professional (PMP)
              </p>
              <p className="text-xs text-slate-500">Project Management Institute (PMI)</p>
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-4 bg-slate-50/50 dark:bg-slate-900/20 flex items-center space-x-3">
            <Award className="text-indigo-650 dark:text-indigo-400 w-5 h-5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-slate-905 dark:text-white">
                Certified Scrum Master (CSM)
              </p>
              <p className="text-xs text-slate-500">Scrum Alliance</p>
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-4 bg-slate-50/50 dark:bg-slate-900/20 flex items-center space-x-3">
            <Award className="text-indigo-650 dark:text-indigo-400 w-5 h-5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-slate-905 dark:text-white">
                AWS Certified Solutions Architect
              </p>
              <p className="text-xs text-slate-500">Amazon Web Services (AWS)</p>
            </div>
          </div>

          <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-4 bg-slate-50/50 dark:bg-slate-900/20 flex items-center space-x-3">
            <Award className="text-indigo-650 dark:text-indigo-400 w-5 h-5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-slate-905 dark:text-white">
                AI Product Management Certificate
              </p>
              <p className="text-xs text-slate-500">Product Development Association</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
