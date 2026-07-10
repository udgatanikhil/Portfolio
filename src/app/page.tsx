import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, MapPin } from "lucide-react";
import { caseStudies } from "@/data/case-studies";

function HeroPortrait() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border border-earth-green/20 animate-spin-slow"></div>
      
      <div className="absolute -top-3 -left-3 w-12 h-12 border-t border-l border-earth-green/30"></div>
      <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b border-r border-earth-green/30"></div>
      
      <div className="w-[85%] h-[85%] rounded-2xl overflow-hidden border border-[#eadeca] bg-[#fdfdfd] p-3 shadow-md shadow-stone-200/40 relative z-10 animate-float">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            src="/nikhil_avatar.jpg"
            alt="Nikhil Udgata"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}

function DeliveryPipelineDiagram() {
  const steps = [
    { num: 1, title: "Business Vision & Strategy" },
    { num: 2, title: "Problem Discovery & Alignment" },
    { num: 3, title: "Market & User Research", highlight: true },
    { num: 4, title: "PRD Scoping & Requirements", highlight: true },
    { num: 5, title: "Tech Discovery & Design", highlight: true },
    { num: 6, title: "Sprint Planning & Backlog", highlight: true },
    { num: 7, title: "Development & Code Review", highlight: true },
    { num: 8, title: "QA & User Acceptance (UAT)", highlight: true },
    { num: 9, title: "Release & Deployment Plan" },
    { num: 10, title: "Feedback Loops & Roadmapping" },
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

              {/* Curly Bracket (spanning steps 3 to 8, y = 131 to y = 371) */}
              <path
                d="M 285,131 Q 305,131 305,151 L 305,226 Q 305,251 325,251 Q 305,251 305,276 L 305,351 Q 305,371 285,371"
                stroke="#3a4f41"
                strokeWidth="1.5"
                fill="none"
              />

              {/* Sketchy Annotation Arrow pointing to bracket tip (325, 251) */}
              <path
                d="M 405,208 Q 365,218 335,248"
                stroke="#7ca2b4"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 405,208 Q 364,219 334,249"
                stroke="#7ca2b4"
                strokeWidth="0.8"
                strokeLinecap="round"
                fill="none"
              />
              {/* Arrow Head */}
              <path
                d="M 345,238 L 333,249 L 343,256"
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
                (Steps 03 &ndash; 08)
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const featuredCases = caseStudies.slice(0, 3);

  return (
    <div className="space-y-28 py-8 md:py-16 animate-fade-up">
      
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[#ebdcb9] bg-[#f0e6d2]/30 text-earth-green text-[10px] font-mono tracking-wider uppercase font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Bengaluru, India (BLR)</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-805 leading-[1.08] font-serif">
            Delivering complex FinTech products and AI architectures.
          </h1>
          
          <p className="text-lg text-slate-650 leading-relaxed max-w-xl font-light">
            I am a Technical Project Manager based in Bengaluru. I coordinate B2B digital lending APIs, RAG search integrations, and machine learning default risk models.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium bg-earth-green hover:bg-earth-green/90 text-white transition-all duration-300 shadow-sm shadow-[#3a4f41]/10 hover:scale-[1.01]"
            >
              Explore Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium bg-white border border-[#ebdcb9] hover:border-earth-green/60 text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-[1.01]"
            >
              Read Dossier
            </Link>
          </div>
        </div>

        <div className="md:col-span-5 flex items-center justify-center">
          <HeroPortrait />
        </div>
      </section>

      {/* Product Delivery Lifecycle Diagram */}
      <section className="animate-fade-up">
        <DeliveryPipelineDiagram />
      </section>

      {/* Selected Case Studies */}
      <section className="space-y-10">
        <div className="flex items-end justify-between border-b border-[#ebdcb9]/60 pb-3">
          <h3 className="text-2xl font-bold text-slate-805 tracking-tight font-serif">
            Recent Projects & Case Studies
          </h3>
          <Link
            href="/case-studies"
            className="text-xs font-mono text-earth-green hover:underline flex items-center gap-1 group"
          >
            All Case Studies
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCases.map((project, idx) => {
            let imageUrl = "/crm_ml_project.jpg";
            if (idx === 0) imageUrl = "/lending_project.jpg";
            if (idx === 1) imageUrl = "/rag_project.jpg";
            
            return (
              <div
                key={project.slug}
                className="editorial-card rounded-xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-40 bg-stone-100 border-b border-[#ebdcb9]/40 overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-earth-green bg-earth-green/5 px-2 py-0.5 rounded border border-earth-green/10 inline-block font-semibold">
                      {project.category}
                    </span>
                    <h4 className="text-lg font-bold text-slate-800 tracking-tight font-serif">
                      {project.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-light line-clamp-3">
                      {project.summary}
                    </p>
                  </div>
                </div>
                
                <div className="px-6 py-4 bg-[#fbf9f5]/60 border-t border-[#ebdcb9]/30 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-slate-550">
                    Role: {project.role}
                  </span>
                  <Link
                    href={`/case-studies#${project.slug}`}
                    className="font-bold text-earth-green hover:underline flex items-center"
                  >
                    View Details
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services Section */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold text-slate-800 tracking-tight font-serif">
          Expertise Verticals
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="editorial-card rounded-xl p-6 space-y-3">
            <h4 className="font-semibold text-slate-805 text-base flex items-center gap-2 font-serif">
              <span className="w-2 h-2 rounded-full bg-earth-blue"></span>
              FinTech Gateways
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              Digital lending path configuration, B2B partner API handshakes, webhook handlers schema mapping, and transactional metrics dashboards.
            </p>
          </div>

          <div className="editorial-card rounded-xl p-6 space-y-3">
            <h4 className="font-semibold text-slate-805 text-base flex items-center gap-2 font-serif">
              <span className="w-2 h-2 rounded-full bg-earth-green"></span>
              Generative AI
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              RAG indexing script validations, context chunking methods implementation, vector databases config, and Azure/HIPAA compliant security.
            </p>
          </div>

          <div className="editorial-card rounded-xl p-6 space-y-3">
            <h4 className="font-semibold text-slate-850 text-base flex items-center gap-2 font-serif">
              <span className="w-2 h-2 rounded-full bg-[#ebdcb9]"></span>
              Risk & CRM
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              Machine learning customer default risk scoring, healthcare CRM feature automation, fits gap analyses, and compliance parameters.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
