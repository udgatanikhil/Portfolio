import Link from "next/link";
import { ArrowRight, ChevronRight, Cpu } from "lucide-react";
import { caseStudies } from "@/data/case-studies";

// A clean, abstract, organic morphing circle (similar to high-end design portfolios)
function MinimalMorphingBlob() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto flex items-center justify-center">
      {/* Slow rotating ring */}
      <div className="absolute inset-0 rounded-full border border-slate-800/60 animate-spin-slow"></div>
      
      {/* Morphing blob with subtle gradient and glow */}
      <div className="w-[80%] h-[80%] bg-gradient-to-tr from-cyan-950/40 to-slate-900/60 border border-cyan-500/20 animate-morph shadow-[0_0_50px_-10px_rgba(6,182,212,0.15)] flex items-center justify-center">
        <Cpu className="w-8 h-8 text-cyan-400/80 animate-float" />
      </div>

      {/* Subtle indicator dots */}
      <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
      <div className="absolute bottom-8 right-12 w-1 h-1 rounded-full bg-slate-500"></div>
    </div>
  );
}

export default function Home() {
  const featuredCases = caseStudies.slice(0, 3); // Showcase top 3 cases

  return (
    <div className="space-y-28 py-8 md:py-16 animate-fade-up">
      
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline */}
        <div className="md:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-800 bg-[#111216]/55 text-slate-350 text-[10px] font-mono tracking-wider uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>Available for select projects</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] font-sans">
            Delivering complex FinTech products and AI architectures.
          </h1>
          
          <p className="text-lg text-slate-400 leading-relaxed max-w-xl font-light">
            I am a Technical Project Manager specializing in B2B digital lending APIs, RAG search integrations, and machine learning default risk models.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium bg-cyan-950/30 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:scale-[1.01]"
            >
              Explore Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium bg-transparent border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-white transition-all duration-300 hover:scale-[1.01]"
            >
              Read Dossier
            </Link>
          </div>
        </div>

        {/* Right Column: Morphing Blob Animation */}
        <div className="md:col-span-5 flex items-center justify-center">
          <MinimalMorphingBlob />
        </div>
      </section>

      {/* Selected Case Studies */}
      <section className="space-y-10">
        <div className="flex items-end justify-between border-b border-slate-900 pb-3">
          <div className="space-y-1">
            <h2 className="text-[10px] font-mono tracking-widest uppercase text-cyan-400">
              Selected Work
            </h2>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Systems Deployment Logs
            </h3>
          </div>
          <Link
            href="/case-studies"
            className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1 group"
          >
            All Case Studies
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCases.map((project, idx) => (
            <div
              key={project.slug}
              className="stark-panel rounded-xl overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                <span className="text-[9px] font-mono uppercase tracking-wider text-cyan-400/80 bg-cyan-950/10 px-2 py-0.5 rounded border border-cyan-500/10 inline-block">
                  {project.category}
                </span>
                <h4 className="text-lg font-bold text-white tracking-tight font-sans">
                  {project.title}
                </h4>
                <p className="text-xs text-slate-450 leading-relaxed font-light line-clamp-3">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-black/30 text-slate-400 px-2 py-0.5 rounded text-[9px] font-mono border border-slate-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="px-6 py-4 bg-black/20 border-t border-slate-900 flex justify-between items-center text-[10px] font-mono">
                <span className="text-slate-500">
                  Role: {project.role}
                </span>
                <Link
                  href={`/case-studies#${project.slug}`}
                  className="font-bold text-cyan-400 hover:underline flex items-center"
                >
                  View Details
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Domains */}
      <section className="space-y-8">
        <div className="space-y-1">
          <h2 className="text-[10px] font-mono tracking-widest uppercase text-cyan-400">
            Services
          </h2>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Verticals of Delivery
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="stark-panel rounded-xl p-6 space-y-3">
            <h4 className="font-semibold text-white text-base">
              FinTech Gateways
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Digital lending path configuration, B2B partner API handshakes, webhook handlers schema mapping, and transactional metrics dashboards.
            </p>
          </div>

          <div className="stark-panel rounded-xl p-6 space-y-3">
            <h4 className="font-semibold text-white text-base">
              Generative AI
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              RAG indexing script validations, context chunking methods implementation, vector databases config, and Azure/HIPAA compliant security.
            </p>
          </div>

          <div className="stark-panel rounded-xl p-6 space-y-3">
            <h4 className="font-semibold text-white text-base">
              Risk & CRM
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Machine learning customer default risk scoring, healthcare CRM feature automation, fits gap analyses, and compliance parameters.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Philosophy */}
      <section className="stark-panel rounded-xl p-8 md:p-12 relative overflow-hidden">
        <div className="space-y-4 max-w-2xl relative z-10">
          <h3 className="text-[10px] font-mono tracking-widest uppercase text-cyan-405">
            Philosophy
          </h3>
          <blockquote className="text-slate-300 text-sm md:text-base font-light italic leading-relaxed border-l border-cyan-500/40 pl-6">
            &ldquo;I believe technical project management is about translating complex accounting frameworks and risk metrics into clean API contracts, automated integration templates, and reliable release schedules.&rdquo;
          </blockquote>
          <div className="text-[10px] text-slate-500 font-mono pl-6 mt-2">
            &mdash; Nikhil Udgata, Technical PM
          </div>
        </div>
      </section>
    </div>
  );
}
