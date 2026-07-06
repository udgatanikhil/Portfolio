import { Download, Calendar, MapPin, Briefcase, GraduationCap, Award, BookOpen } from "lucide-react";

export default function Resume() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto py-8 md:py-16 animate-fade-up">
      {/* Page Header with Action Button */}
      <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#ebdcb9]/60 pb-6">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight text-slate-805 font-serif">
            Nikhil Udgata
          </h2>
        </div>
        <a
          href="/Nikhil_Udgata_Resume_Generic.pdf"
          download
          className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-mono tracking-widest bg-earth-green hover:bg-earth-green/90 text-white transition-all duration-300 hover:scale-[1.01]"
        >
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </a>
      </section>

      {/* Structured CV View */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Column: Experience & Education */}
        <div className="md:col-span-8 space-y-12">
          {/* Work Experience */}
          <section className="space-y-8">
            <h3 className="text-xs font-mono tracking-widest uppercase text-slate-500 flex items-center gap-2 border-b border-[#ebdcb9]/60 pb-2.5">
              <Briefcase className="w-4 h-4 text-earth-green" />
              Work History
            </h3>

            <div className="space-y-8">
              {/* Job 1 */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="font-bold text-slate-800 text-base tracking-wide font-serif">
                    Technical Project Manager
                  </h4>
                  <span className="text-[10px] font-mono text-slate-550 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-earth-blue" />
                    Nov 2025 &ndash; Present
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-earth-green font-mono tracking-wider">
                  <span>FinBox</span>
                  <span className="flex items-center gap-1 text-slate-400 font-normal">
                    <MapPin className="w-3 h-3" /> Bengaluru (BLR), India
                  </span>
                </div>
                <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1.5 pt-1.5 leading-relaxed font-light">
                  <li>Own end-to-end product delivery, operational execution, and roadmap planning of B2B digital lending journeys, risk decisioning engines, and API integrations.</li>
                  <li>Establish and monitor transaction volumes and status tracking dashboards using Grafana and SQL; resolved API/webhook drops to cut disbursement failure rates by 15%.</li>
                  <li>Coordinate sprint backlog items in JIRA, run daily standups, and scope technical roadmaps across cross-functional engineering, compliance, and product pods.</li>
                  <li>Designed and deployed an internal JIRA commit analysis tool utilizing a RAG-based LLM structure to automate release note summaries.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="font-bold text-slate-800 text-base tracking-wide font-serif">
                    Senior Business Analyst
                  </h4>
                  <span className="text-[10px] font-mono text-slate-550 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-earth-blue" />
                    Nov 2024 &ndash; Oct 2025
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-earth-green font-mono tracking-wider">
                  <span>LeadSquared (LSQ)</span>
                  <span className="flex items-center gap-1 text-slate-400 font-normal">
                    <MapPin className="w-3 h-3" /> Bengaluru (BLR), India
                  </span>
                </div>
                <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1.5 pt-1.5 leading-relaxed font-light">
                  <li>Managed requirements scoping and customer lifecycles for HIPAA-compliant healthcare CRM product deployments.</li>
                  <li>Delivered two major automated CRM workflow features that reduced customer onboarding cycle times by 30% and improved client retention by 18%.</li>
                  <li>Spearheaded integration of RAG-based search engines within the CRM to automate document querying, improving CSAT scores by 15%.</li>
                  <li>Tracked feature engagement metrics and cohort drop-off paths to drive data-backed improvements.</li>
                </ul>
              </div>

              {/* Job 3 */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="font-bold text-slate-800 text-base tracking-wide font-serif">
                    Business Analyst & Associate BA
                  </h4>
                  <span className="text-[10px] font-mono text-slate-555 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-earth-blue" />
                    May 2020 &ndash; Oct 2024
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-earth-green font-mono tracking-wider">
                  <span>Odessa Technologies</span>
                  <span className="flex items-center gap-1 text-slate-400 font-normal">
                    <MapPin className="w-3 h-3" /> Bengaluru (BLR), India
                  </span>
                </div>
                <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1.5 pt-1.5 leading-relaxed font-light">
                  <li>Managed multi-million dollar asset finance software implementations for Tier-1 global enterprise clients under strict IFRS/GAAP schemas.</li>
                  <li>Reviewed change requests, authored functional specifications, and integrated Random Forest classification ML models to evaluate lease default risk (reducing credit losses by 40%).</li>
                  <li>Automated daily general ledger and sub-ledger reconciliation loops using optimized T-SQL scripts, saving accounting teams 8+ manual hours weekly.</li>
                  <li>Led auto finance origination workflow automations that reduced loan/lease processing times by 25%.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-6">
            <h3 className="text-xs font-mono tracking-widest uppercase text-slate-500 flex items-center gap-2 border-b border-[#ebdcb9]/60 pb-2.5">
              <GraduationCap className="w-4 h-4 text-earth-green" />
              Education
            </h3>

            <div className="space-y-6">
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="font-bold text-slate-800 text-sm tracking-wide font-serif">
                    MBA in Technology Management
                  </h4>
                  <span className="text-xs font-mono text-slate-500">2018 &ndash; 2020</span>
                </div>
                <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                  SVKM&rsquo;s NMIMS // Mumbai, India
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="font-bold text-slate-800 text-sm tracking-wide font-serif">
                    B.Tech. in Computer Science
                  </h4>
                  <span className="text-xs font-mono text-slate-500">2015 &ndash; 2018</span>
                </div>
                <p className="text-xs text-slate-505 font-mono uppercase tracking-wider">
                  SVKM&rsquo;s NMIMS // Mumbai, India
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Skills & Credentials */}
        <div className="md:col-span-4 space-y-12">
          {/* Skills Grid */}
          <section className="space-y-6">
            <h3 className="text-xs font-mono tracking-widest uppercase text-slate-555 flex items-center gap-2 border-b border-[#ebdcb9]/60 pb-2.5">
              <BookOpen className="w-4 h-4 text-earth-green" />
              Skills
            </h3>

            <div className="space-y-6">
              {/* Category 1 */}
              <div className="space-y-2.5">
                <h4 className="text-[9px] font-mono tracking-widest uppercase text-earth-green">
                  Analytics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Product Analytics", "Cohort Analysis", "KPI Tracking", "Funnel Optimizations", "Customer Lifecycles", "Data Diagnostics"].map((s) => (
                    <span
                      key={s}
                      className="bg-earth-green/5 border border-earth-green/10 text-[10px] px-2.5 py-1 rounded text-earth-green font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 2 */}
              <div className="space-y-2.5">
                <h4 className="text-[9px] font-mono tracking-widest uppercase text-earth-green">
                  Operations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Product Delivery", "Roadmap Planning", "Jira Stories", "Standups", "Agile Execution", "Process Mapping", "GL Reconciliation"].map((s) => (
                    <span
                      key={s}
                      className="bg-earth-green/5 border border-earth-green/10 text-[10px] px-2.5 py-1 rounded text-earth-green font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 3 */}
              <div className="space-y-2.5">
                <h4 className="text-[9px] font-mono tracking-widest uppercase text-earth-green">
                  Technology
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["SQL (T-SQL/Postgres)", "Python", "Power BI", "RAG Systems", "LlamaIndex", "Grafana", "API Integrations", "Webhooks", "Git"].map((s) => (
                    <span
                      key={s}
                      className="bg-earth-green/5 border border-earth-green/10 text-[10px] px-2.5 py-1 rounded text-earth-green font-mono"
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
            <h3 className="text-xs font-mono tracking-widest uppercase text-slate-555 flex items-center gap-2 border-b border-[#ebdcb9]/60 pb-2.5">
              <Award className="w-4 h-4 text-earth-green" />
              Credentials
            </h3>
            
            <div className="space-y-4">
              <div className="editorial-card rounded-lg p-4 bg-white shadow-sm">
                <p className="text-xs font-mono font-bold text-slate-800 tracking-wider">
                  CFA Level 1 Passed
                </p>
                <p className="text-[9px] font-mono text-slate-500 mt-1">CFA Institute (L2 Candidate)</p>
              </div>

              <div className="editorial-card rounded-lg p-4 bg-white shadow-sm">
                <p className="text-xs font-mono font-bold text-slate-800 tracking-wider">
                  Data Science Honors
                </p>
                <p className="text-[9px] font-mono text-slate-500 mt-1">WorldQuant University</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
