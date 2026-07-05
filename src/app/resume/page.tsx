import { Download, Calendar, MapPin, Briefcase, GraduationCap, Award, BookOpen } from "lucide-react";

export default function Resume() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto py-4">
      {/* Page Header with Action Button */}
      <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-905 dark:text-white">
            Professional Resume
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Nikhil Udgata &mdash; Technical Project Manager CV. Last updated: July 2026.
          </p>
        </div>
        <a
          href="/Nikhil_Udgata_Resume_Generic.pdf"
          download
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold bg-indigo-600 hover:bg-indigo-750 text-white transition-all duration-200"
        >
          <Download className="w-4 h-4 mr-2" />
          Download PDF Version
        </a>
      </section>

      {/* Structured CV View */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Column: Experience & Education */}
        <div className="md:col-span-8 space-y-10">
          {/* Work Experience */}
          <section className="space-y-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <Briefcase className="w-4 h-4 text-indigo-500" />
              Work Experience
            </h2>

            <div className="space-y-8">
              {/* Job 1 */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Technical Project Manager
                  </h3>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Nov 2025 &ndash; Present
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-indigo-650 dark:text-indigo-400 font-medium">
                  <span>FinBox</span>
                  <span className="flex items-center gap-1 text-slate-400 font-normal">
                    <MapPin className="w-3 h-3" /> Bengaluru, India
                  </span>
                </div>
                <ul className="list-disc pl-5 text-sm text-slate-650 dark:text-slate-350 space-y-1.5 pt-1">
                  <li>Own end-to-end product delivery, operational execution, and roadmap planning of B2B digital lending journeys, risk decisioning engines, and API integrations.</li>
                  <li>Establish and monitor transaction volumes and status tracking dashboards using Grafana and SQL; resolved API/webhook drops to cut disbursement failure rates by 15%.</li>
                  <li>Coordinate sprint backlog items in JIRA, run daily standups, and scope technical roadmaps across cross-functional engineering, compliance, and product pods.</li>
                  <li>Designed and deployed an internal JIRA commit analysis tool utilizing a RAG-based LLM structure to automate release note summaries.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Senior Business Analyst
                  </h3>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Nov 2024 &ndash; Oct 2025
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-indigo-650 dark:text-indigo-400 font-medium">
                  <span>LeadSquared (LSQ)</span>
                  <span className="flex items-center gap-1 text-slate-400 font-normal">
                    <MapPin className="w-3 h-3" /> Bengaluru, India
                  </span>
                </div>
                <ul className="list-disc pl-5 text-sm text-slate-650 dark:text-slate-355 space-y-1.5 pt-1">
                  <li>Managed requirements scoping and customer lifecycles for HIPAA-compliant healthcare CRM product deployments.</li>
                  <li>Delivered two major automated CRM workflow features that reduced customer onboarding cycle times by 30% and improved client retention by 18%.</li>
                  <li>Spearheaded integration of RAG-based search engines within the CRM to automate document querying, improving CSAT scores by 15%.</li>
                  <li>Tracked feature engagement metrics and cohort drop-off paths to drive data-backed improvements.</li>
                </ul>
              </div>

              {/* Job 3 */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Business Analyst & Associate BA
                  </h3>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    May 2020 &ndash; Oct 2024
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-indigo-650 dark:text-indigo-400 font-medium">
                  <span>Odessa Technologies</span>
                  <span className="flex items-center gap-1 text-slate-400 font-normal">
                    <MapPin className="w-3 h-3" /> Bengaluru, India
                  </span>
                </div>
                <ul className="list-disc pl-5 text-sm text-slate-650 dark:text-slate-355 space-y-1.5 pt-1">
                  <li>Managed multi-million dollar asset finance software integrations for Tier-1 global enterprise clients under strict IFRS/GAAP schemas.</li>
                  <li>Reviewed change requests, authored functional specifications, and integrated Random Forest classification ML models to evaluate lease default risk (reducing credit losses by 40%).</li>
                  <li>Automated daily general ledger and sub-ledger reconciliation loops using optimized T-SQL scripts, saving accounting teams 8+ manual hours weekly.</li>
                  <li>Led auto finance origination workflow automations that reduced loan/lease processing times by 25%.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <GraduationCap className="w-4 h-4 text-indigo-500" />
              Education
            </h2>

            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold text-slate-905 dark:text-white text-sm">
                    MBA in Technology Management
                  </h3>
                  <span className="text-xs font-mono text-slate-500">2018 &ndash; 2020</span>
                </div>
                <p className="text-xs text-slate-605 dark:text-slate-400">
                  SVKM&rsquo;s NMIMS, Mumbai, India
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold text-slate-905 dark:text-white text-sm">
                    B.Tech. in Computer Science
                  </h3>
                  <span className="text-xs font-mono text-slate-500">2015 &ndash; 2018</span>
                </div>
                <p className="text-xs text-slate-605 dark:text-slate-400">
                  SVKM&rsquo;s NMIMS, Mumbai, India
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Skills & Credentials */}
        <div className="md:col-span-4 space-y-10">
          {/* Skills Grid */}
          <section className="space-y-6">
            <h2 className="text-lg font-bold text-slate-905 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <BookOpen className="w-4 h-4 text-indigo-500" />
              Technical Skillset
            </h2>

            <div className="space-y-6">
              {/* Category 1 */}
              <div className="space-y-2">
                <h3 className="text-xs font-semibold tracking-wide uppercase text-slate-500">
                  Growth & Analytics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Product Analytics", "Cohort Analysis", "KPI Tracking", "Funnel Optimizations", "Customer Lifecycles", "Data Diagnostics"].map((s) => (
                    <span
                      key={s}
                      className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs px-2.5 py-1 rounded text-slate-700 dark:text-slate-300 font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 2 */}
              <div className="space-y-2">
                <h3 className="text-xs font-semibold tracking-wide uppercase text-slate-505">
                  Product & Operations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Product Delivery", "Roadmap Planning", "Jira Stories", "Standups", "Agile Execution", "Process Mapping", "GL Reconciliation"].map((s) => (
                    <span
                      key={s}
                      className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs px-2.5 py-1 rounded text-slate-700 dark:text-slate-300 font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 3 */}
              <div className="space-y-2">
                <h3 className="text-xs font-semibold tracking-wide uppercase text-slate-505">
                  Technology & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["SQL (T-SQL/Postgres)", "Python", "Power BI", "RAG Systems", "LlamaIndex", "Grafana Dashboards", "API Integrations", "Webhooks", "Git"].map((s) => (
                    <span
                      key={s}
                      className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs px-2.5 py-1 rounded text-slate-700 dark:text-slate-300 font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Credentials */}
          <section className="space-y-6">
            <h2 className="text-lg font-bold text-slate-905 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <Award className="w-4 h-4 text-indigo-500" />
              Credentials
            </h2>
            <div className="space-y-3">
              <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-3 bg-slate-50/50 dark:bg-slate-900/30">
                <p className="text-xs font-bold text-slate-900 dark:text-slate-200">
                  CFA Level 1 Passed
                </p>
                <p className="text-[10px] text-slate-400">Level 2 Candidate &mdash; Exam May 2026</p>
              </div>

              <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-3 bg-slate-50/50 dark:bg-slate-900/30">
                <p className="text-xs font-bold text-slate-900 dark:text-slate-200">
                  Data Science Honors
                </p>
                <p className="text-[10px] text-slate-400">WorldQuant University (Levels 1 & 2)</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
