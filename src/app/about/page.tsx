import Image from "next/image";
import { Award, MapPin } from "lucide-react";

function DeliveryPipelineDiagram() {
  const steps = [
    { num: 1, title: "Sales Agreement & Handover" },
    { num: 2, title: "Requirements Discovery & Scoping", highlight: true },
    { num: 3, title: "PRD & User Story Spec Drafting", highlight: true },
    { num: 4, title: "Integration Specs & Tech Design", highlight: true },
    { num: 5, title: "Sprint Backlog & Resource Allocation", highlight: true },
    { num: 6, title: "Engineering Development Cycles", highlight: true },
    { num: 7, title: "Code Reviews & QA Testing", highlight: true },
    { num: 8, title: "User Acceptance Testing (UAT)", highlight: true },
    { num: 9, title: "Production Deployment & Release", highlight: true },
    { num: 10, title: "Client Enablement & Training", highlight: true },
  ];

  return (
    <div className="editorial-card rounded-xl p-6 md:p-10 bg-white">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-1 text-center">
          <h3 className="text-2xl font-bold text-slate-805 tracking-tight font-serif">
            Product Delivery Lifecycle
          </h3>
          <p className="text-xs text-slate-500 font-light font-sans max-w-md mx-auto">
            An overview of the software delivery lifecycle, illustrating the stages I lead to coordinate engineering and project output.
          </p>
        </div>

        <div className="relative flex justify-center">
          <div className="w-full max-w-lg relative h-[500px]">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 540 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Vertical dotted connecting line */}
              <line
                x1="45"
                y1="35"
                x2="45"
                y2="467"
                stroke="#eadeca"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Steps Rendering */}
              {steps.map((step, idx) => {
                const y = 35 + idx * 48;
                return (
                  <g key={step.num}>
                    <circle
                      cx="45"
                      cy={y}
                      r={step.highlight ? "5" : "3.5"}
                      fill={step.highlight ? "#3a4f41" : "#ffffff"}
                      stroke="#3a4f41"
                      strokeWidth="1.5"
                    />
                    
                    <text
                      x="70"
                      y={y + 3.5}
                      fill={step.highlight ? "#3a4f41" : "#888888"}
                      className="font-mono text-[9px] font-bold"
                    >
                      {String(step.num).padStart(2, "0")}
                    </text>

                    <text
                      x="95"
                      y={y + 4}
                      fill={step.highlight ? "#2d312c" : "#777777"}
                      className={`text-[11px] font-sans ${step.highlight ? "font-semibold" : "font-light"}`}
                    >
                      {step.title}
                    </text>
                  </g>
                );
              })}

              {/* Curly Bracket (spanning steps 2 to 10, y = 83 to y = 467) */}
              <path
                d="M 285,70 Q 305,70 305,90 L 305,250 Q 305,275 325,275 Q 305,275 305,300 L 305,460 Q 305,480 285,480"
                stroke="#3a4f41"
                strokeWidth="1.5"
                fill="none"
              />

              {/* Sketchy Annotation Arrow pointing to bracket tip (325, 275) */}
              <path
                d="M 405,220 Q 365,230 335,272"
                stroke="#7ca2b4"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 405,220 Q 364,231 334,273"
                stroke="#7ca2b4"
                strokeWidth="0.8"
                strokeLinecap="round"
                fill="none"
              />
              {/* Arrow Head */}
              <path
                d="M 345,262 L 333,273 L 343,280"
                stroke="#7ca2b4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />

              {/* Cursive Annotation */}
              <text
                x="410"
                y="190"
                fill="#3a4f41"
                transform="rotate(-4, 410, 190)"
                className="font-caveat font-bold text-lg md:text-xl tracking-wide"
              >
                This is where
              </text>
              <text
                x="410"
                y="207"
                fill="#3a4f41"
                transform="rotate(-4, 410, 207)"
                className="font-caveat font-bold text-lg md:text-xl tracking-wide"
              >
                I come in!
              </text>
              <text
                x="410"
                y="223"
                fill="#7ca2b4"
                transform="rotate(-4, 410, 223)"
                className="font-caveat font-medium text-xs tracking-wider"
              >
                (Post-Sales to KAM Handover)
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="space-y-16 max-w-4xl mx-auto py-8 md:py-16 animate-fade-up">
      {/* Intro Header */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Text Area */}
        <div className="md:col-span-8 space-y-6">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-1.5 text-[10px] font-mono tracking-widest uppercase text-earth-green font-semibold mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Bengaluru, India (BLR)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800 font-serif">
              About Nikhil Udgata
            </h1>
          </div>
          <p className="text-sm text-slate-655 leading-relaxed font-light">
            I am Nikhil Udgata, a growth-oriented FinTech professional and Technical Project Manager with over 6 years of experience driving product execution, risk analytics, and cross-functional delivery. Based in Bengaluru, India (BLR), I specialize in leveraging data-driven decision making, product analytics, and database modeling to optimize complex financial products and enterprise systems.
          </p>
          <p className="text-sm text-slate-655 leading-relaxed font-light">
            Throughout my career at companies like FinBox, LeadSquared, and Odessa Technologies, I have successfully coordinated engineering, product, and client teams to deploy scalable APIs, integrate machine learning default-risk estimators, and build RAG-based AI search engines to streamline operations. My background combining a B.Tech in Computer Science and an MBA in Finance enables me to translate technical capability into business growth.
          </p>
        </div>

        {/* Small Framed Avatar decoration */}
        <div className="md:col-span-4 flex justify-center">
          <div className="w-48 h-48 rounded-2xl overflow-hidden border border-[#eadeca] bg-white p-2.5 shadow-sm shadow-stone-200/50 animate-float">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/nikhil_avatar.jpg"
                alt="Nikhil Udgata Portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="space-y-8">
        <div className="border-b border-[#ebdcb9]/60 pb-3">
          <h3 className="text-lg font-bold text-slate-800 tracking-wider font-serif">
            Operating Principles
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-800 tracking-wide flex items-center gap-2 font-serif">
              <span className="w-1.5 h-1.5 rounded-full bg-earth-green"></span>
              Data-Driven Diagnostics
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              Rather than relying on qualitative assumptions, I build my project strategies around database analytics. I write SQL scripts to isolate onboarding friction points, analyze transaction dashboards to diagnose API drop-offs, and monitor real-time Grafana logs to catch failures early.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-800 tracking-wide flex items-center gap-2 font-serif">
              <span className="w-1.5 h-1.5 rounded-full bg-earth-blue"></span>
              Architectural Compliance
            </h4>
            <p className="text-xs text-slate-505 leading-relaxed font-light">
              Working in FinTech and Healthcare requires strict compliance. I specialize in aligning software development lifecycles with HIPAA data encryption policies, IFRS and GAAP accounting guidelines, and secure B2B financial webhooks.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-800 tracking-wide flex items-center gap-2 font-serif">
              <span className="w-1.5 h-1.5 rounded-full bg-earth-green"></span>
              Operational Streamlining
            </h4>
            <p className="text-xs text-slate-505 leading-relaxed font-light">
              I actively look for processes that can be streamlined with AI. Whether it is building indexing pipelines to search unstructured CRM policy data or deploying a RAG chatbot to parse JIRA commits and compile release summaries, I believe in minimizing administrative friction for developer pods.
            </p>
          </div>
        </div>
      </section>

      {/* Product Delivery Lifecycle Diagram */}
      <section className="animate-fade-up">
        <DeliveryPipelineDiagram />
      </section>

      {/* Career Journey */}
      <section className="space-y-8">
        <div className="border-b border-[#ebdcb9]/60 pb-3">
          <h3 className="text-lg font-bold text-slate-800 tracking-wider font-serif">
            Career Journey
          </h3>
        </div>
        
        <div className="space-y-8 pl-4 border-l border-[#ebdcb9] ml-1">
          {/* Item 1 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[20px] top-1.5 w-2 h-2 rounded-full bg-earth-green"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className="font-bold text-slate-800 text-sm font-sans tracking-wide">
                Technical Project Manager
              </h4>
              <span className="text-[10px] font-mono text-earth-green bg-earth-green/5 px-2 py-0.5 rounded border border-earth-green/10">
                Nov 2025 &ndash; Present
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              FinBox // Bengaluru (BLR), India
            </p>
            <p className="text-xs text-slate-550 leading-relaxed font-light font-sans">
              Leading product delivery and roadmap planning of B2B digital lending journeys, risk scoring engines, and API integrations. Deploying Grafana transaction-tracking metrics and developing custom internal RAG tools to automate JIRA release tracking.
            </p>
          </div>

          {/* Item 2 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[20px] top-1.5 w-2 h-2 rounded-full bg-earth-blue"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className="font-bold text-slate-800 text-sm font-sans tracking-wide">
                Senior Business Analyst
              </h4>
              <span className="text-[10px] font-mono text-slate-500 bg-[#fbf9f5] px-2 py-0.5 rounded border border-[#ebdcb9]/60">
                Nov 2024 &ndash; Oct 2025
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              LeadSquared (LSQ) // Bengaluru (BLR), India
            </p>
            <p className="text-xs text-slate-550 leading-relaxed font-light font-sans">
              Oversaw HIPAA-compliant CRM deployments and led end-to-end multi-entity implementations for enterprise customers. Resolved technical platform gaps directly with Engineering, managed onboarding/employee training, and delivered strategic workflow recommendations to senior leadership.
            </p>
          </div>

          {/* Item 3 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[20px] top-1.5 w-2 h-2 rounded-full bg-slate-400"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className="font-bold text-slate-800 text-sm font-sans tracking-wide">
                Business Analyst & Associate BA
              </h4>
              <span className="text-[10px] font-mono text-slate-500 bg-[#fbf9f5] px-2 py-0.5 rounded border border-[#ebdcb9]/60">
                May 2020 &ndash; Oct 2024
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              Odessa Technologies // Bengaluru (BLR), India
            </p>
            <p className="text-xs text-slate-550 leading-relaxed font-light font-sans">
              Managed asset finance software implementations for Tier-1 multinational clients under IFRS/GAAP models. Led auto-origination process automation and integrated scikit-learn Random Forest models to calculate default-risk scores, reducing credit losses by 40%.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications / Awards */}
      <section className="space-y-8">
        <div className="border-b border-[#ebdcb9]/60 pb-3">
          <h3 className="text-lg font-bold text-slate-800 tracking-wider font-serif">
            Credentials
          </h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="editorial-card rounded-xl p-5 flex items-center space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-earth-green/10 border border-earth-green/20 flex items-center justify-center text-earth-green">
              <Award className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold text-slate-800 font-serif">
                CFA Level 1 Passed
              </h4>
              <p className="text-[10px] text-slate-500 font-mono">CFA Institute (Level 2 Candidate)</p>
            </div>
          </div>

          <div className="editorial-card rounded-xl p-5 flex items-center space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-earth-blue/10 border border-earth-blue/20 flex items-center justify-center text-earth-blue">
              <Award className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold text-slate-800 font-serif">
                Data Science Honors
              </h4>
              <p className="text-[10px] text-slate-555 font-mono">WorldQuant University (Levels 1 & 2)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
