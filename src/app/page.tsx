import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, MapPin } from "lucide-react";
import { caseStudies } from "@/data/case-studies";

// Double-framed minimalist portrait visual
function HeroPortrait() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto flex items-center justify-center">
      {/* Slow rotating outer circle frame */}
      <div className="absolute inset-0 rounded-full border border-earth-green/20 animate-spin-slow"></div>
      
      {/* Off-center decorative beige block */}
      <div className="absolute -top-3 -left-3 w-12 h-12 border-t border-l border-earth-green/30"></div>
      <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b border-r border-earth-green/30"></div>
      
      {/* Frame wrapper around picture */}
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

export default function Home() {
  const featuredCases = caseStudies.slice(0, 3); // Showcase top 3 cases

  return (
    <div className="space-y-28 py-8 md:py-16 animate-fade-up">
      
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline */}
        <div className="md:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[#ebdcb9] bg-[#f0e6d2]/30 text-earth-green text-[10px] font-mono tracking-wider uppercase font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Bengaluru (BLR) // Available for key projects</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-800 leading-[1.08] font-serif">
            Delivering complex FinTech products and AI architectures.
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl font-light">
            I am a Technical Project Manager based in Bengaluru (BLR). I coordinate B2B digital lending APIs, RAG search integrations, and machine learning default risk models.
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

        {/* Right Column: Framed Headshot Illustration */}
        <div className="md:col-span-5 flex items-center justify-center">
          <HeroPortrait />
        </div>
      </section>

      {/* Selected Case Studies */}
      <section className="space-y-10">
        <div className="flex items-end justify-between border-b border-[#ebdcb9]/60 pb-3">
          <div className="space-y-1">
            <h2 className="text-[10px] font-mono tracking-widest uppercase text-earth-green">
              Selected Work
            </h2>
            <h3 className="text-2xl font-bold text-slate-800 tracking-tight font-serif">
              Systems Deployment Logs
            </h3>
          </div>
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
            // Map generated images to case studies
            let imageUrl = "/crm_ml_project.jpg";
            if (idx === 0) imageUrl = "/lending_project.jpg";
            if (idx === 1) imageUrl = "/rag_project.jpg";
            
            return (
              <div
                key={project.slug}
                className="stark-panel rounded-xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Classy visual header card image */}
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
                  <span className="text-slate-500">
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
        <div className="space-y-1">
          <h2 className="text-[10px] font-mono tracking-widest uppercase text-earth-green">
            Services
          </h2>
          <h3 className="text-2xl font-bold text-slate-800 tracking-tight font-serif">
            Verticals of Delivery
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="stark-panel rounded-xl p-6 space-y-3">
            <h4 className="font-semibold text-slate-800 text-base flex items-center gap-2 font-serif">
              <span className="w-2 h-2 rounded-full bg-earth-blue"></span>
              FinTech Gateways
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              Digital lending path configuration, B2B partner API handshakes, webhook handlers schema mapping, and transactional metrics dashboards.
            </p>
          </div>

          <div className="stark-panel rounded-xl p-6 space-y-3">
            <h4 className="font-semibold text-slate-800 text-base flex items-center gap-2 font-serif">
              <span className="w-2 h-2 rounded-full bg-earth-green"></span>
              Generative AI
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              RAG indexing script validations, context chunking methods implementation, vector databases config, and Azure/HIPAA compliant security.
            </p>
          </div>

          <div className="stark-panel rounded-xl p-6 space-y-3">
            <h4 className="font-semibold text-slate-800 text-base flex items-center gap-2 font-serif">
              <span className="w-2 h-2 rounded-full bg-[#ebdcb9]"></span>
              Risk & CRM
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              Machine learning customer default risk scoring, healthcare CRM feature automation, fits gap analyses, and compliance parameters.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Philosophy */}
      <section className="stark-panel rounded-xl p-8 md:p-12 relative overflow-hidden bg-white">
        <div className="space-y-4 max-w-2xl relative z-10">
          <h3 className="text-[10px] font-mono tracking-widest uppercase text-earth-green">
            Philosophy
          </h3>
          <blockquote className="text-slate-700 text-sm md:text-lg font-light italic leading-relaxed border-l border-earth-green/45 pl-6 font-serif">
            &ldquo;I believe technical project management is about translating complex accounting frameworks and risk metrics into clean API contracts, automated integration templates, and reliable release schedules.&rdquo;
          </blockquote>
          <div className="text-[10px] text-slate-500 font-mono pl-6 mt-2">
            &mdash; Nikhil Udgata, Technical PM // BLR
          </div>
        </div>
      </section>
    </div>
  );
}
