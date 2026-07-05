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
            Structured curriculum vitae. Last updated: July 2026.
          </p>
        </div>
        <a
          href="/resume.pdf"
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
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-205 dark:border-slate-800 pb-2">
              <Briefcase className="w-4 h-4 text-indigo-500" />
              Work Experience
            </h2>

            <div className="space-y-8">
              {/* Job 1 */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Senior Technical Project Manager (AI Platforms)
                  </h3>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Jan 2024 &ndash; Present
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-indigo-650 dark:text-indigo-400 font-medium">
                  <span>Enterprise Tech Solutions Inc.</span>
                  <span className="flex items-center gap-1 text-slate-400 font-normal">
                    <MapPin className="w-3 h-3" /> San Francisco, CA (Hybrid)
                  </span>
                </div>
                <ul className="list-disc pl-5 text-sm text-slate-650 dark:text-slate-350 space-y-1.5 pt-1">
                  <li>Directing execution for 3 cross-functional teams developing LLM search orchestration engines and RAG applications, reducing client search latency by 45%.</li>
                  <li>Drafting detailed PRDs, system architecture schemas, data governance protocols, and regression testing specifications.</li>
                  <li>Coordinating release cycles using Agile Scrum methodologies; increased sprint delivery predictability from 74% to 92% in 6 months.</li>
                  <li>Managing risk matrix logs, dependency trees across core API teams, and stakeholder expectations for Fortune 500 integrations.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Technical Product & Project Manager (Data Systems)
                  </h3>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Sep 2021 &ndash; Jan 2024
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-indigo-650 dark:text-indigo-400 font-medium">
                  <span>Apex Global Analytics</span>
                  <span className="flex items-center gap-1 text-slate-400 font-normal">
                    <MapPin className="w-3 h-3" /> New York, NY
                  </span>
                </div>
                <ul className="list-disc pl-5 text-sm text-slate-650 dark:text-slate-350 space-y-1.5 pt-1">
                  <li>Managed database migration of 1.2M historical customer profiles from legacy Oracle setups to cloud-hosted Snowflake warehouse.</li>
                  <li>Partnered with data engineering teams to model robust ETL pipelines using dbt, lowering pipeline failures by 38%.</li>
                  <li>Oversaw custom Salesforce CRM integration flows that automated sales lead assignments, adding $1.8M in pipeline value.</li>
                  <li>Authored project plans, capacity estimates, and technical documentation templates for internal developers.</li>
                </ul>
              </div>

              {/* Job 3 */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Software Engineer (Data & Backend)
                  </h3>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Jun 2018 &ndash; Sep 2021
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-indigo-650 dark:text-indigo-400 font-medium">
                  <span>Nexus Software Labs</span>
                  <span className="flex items-center gap-1 text-slate-400 font-normal">
                    <MapPin className="w-3 h-3" /> Austin, TX
                  </span>
                </div>
                <ul className="list-disc pl-5 text-sm text-slate-650 dark:text-slate-350 space-y-1.5 pt-1">
                  <li>Designed and built secure, RESTful backend APIs utilizing Java (Spring Boot) and Python (Flask).</li>
                  <li>Optimized complex PostgreSQL database queries, reducing data-loading speeds of executive dashboard reports by 60%.</li>
                  <li>Configured automated continuous integration and delivery (CI/CD) pipelines on GitLab CI, shortening deployment times by 20 minutes.</li>
                  <li>Collaborated with product teams to estimate developer story points and draft technical feasibility specifications.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-205 dark:border-slate-800 pb-2">
              <GraduationCap className="w-4 h-4 text-indigo-500" />
              Education
            </h2>

            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold text-slate-905 dark:text-white text-sm">
                    M.S. in Management Science & Engineering
                  </h3>
                  <span className="text-xs font-mono text-slate-500">2016 &ndash; 2018</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Stanford University, Stanford, CA
                </p>
                <p className="text-xs text-slate-500 font-mono">Specialization: Operations Research & Systems Engineering</p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold text-slate-905 dark:text-white text-sm">
                    B.S. in Computer Science
                  </h3>
                  <span className="text-xs font-mono text-slate-500">2012 &ndash; 2016</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  University of Texas at Austin, Austin, TX
                </p>
                <p className="text-xs text-slate-500 font-mono">Graduated with High Honors (Magna Cum Laude)</p>
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
                  AI & Data Science
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["GPT-4 / Azure OpenAI", "LangChain", "Vector Databases", "Model Evaluation", "Pinecone DB", "Python"].map((s) => (
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
                <h3 className="text-xs font-semibold tracking-wide uppercase text-slate-500">
                  Data Infrastructure
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Snowflake", "dbt", "PostgreSQL", "SQL (Advanced)", "ETL/ELT", "Apache Spark"].map((s) => (
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
                <h3 className="text-xs font-semibold tracking-wide uppercase text-slate-500">
                  PM & Agile Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Jira / Confluence", "Asana", "PRD Authoring", "Capacity Planning", "Risk Mapping", "MS Project"].map((s) => (
                    <span
                      key={s}
                      className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs px-2.5 py-1 rounded text-slate-700 dark:text-slate-300 font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 4 */}
              <div className="space-y-2">
                <h3 className="text-xs font-semibold tracking-wide uppercase text-slate-500">
                  Systems & Deployment
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["AWS (SageMaker, S3, EC2)", "Docker", "Git / GitHub Actions", "Salesforce API", "UiPath RPA", "REST APIs"].map((s) => (
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
                  Project Management Professional (PMP)
                </p>
                <p className="text-[10px] text-slate-400">License #2948293 — Issued 2022</p>
              </div>

              <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-3 bg-slate-50/50 dark:bg-slate-900/30">
                <p className="text-xs font-bold text-slate-900 dark:text-slate-200">
                  Certified Scrum Master (CSM)
                </p>
                <p className="text-[10px] text-slate-400">Scrum Alliance — Issued 2020</p>
              </div>

              <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-3 bg-slate-50/50 dark:bg-slate-900/30">
                <p className="text-xs font-bold text-slate-900 dark:text-slate-200">
                  AWS Certified Solutions Architect
                </p>
                <p className="text-[10px] text-slate-400">Amazon Web Services — Issued 2021</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
