import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { Calendar, Clock, ChevronRight } from "lucide-react";

export default function Blog() {
  return (
    <div className="space-y-12 max-w-3xl py-6 md:py-12 animate-fade-up">
      {/* Blog Intro */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-xs font-mono tracking-widest uppercase text-cyan-500">
            [SYS_TRANSMISSIONS] // MODULE_05
          </h1>
          <h2 className="text-3xl font-bold tracking-tight text-white stark-title font-mono">
            LOGS_AND_INSIGHTS
          </h2>
        </div>
        <p className="text-sm text-slate-450 leading-relaxed font-mono font-light">
          Articles exploring the intersections of Artificial Intelligence, product management metrics, 
          data architecture, and agile methodologies. Written for developers, project managers, and tech leaders.
        </p>
      </section>

      {/* Blog Posts List */}
      <section className="space-y-10">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="group relative flex flex-col items-start border-b border-cyan-950/80 pb-8 last:border-b-0 last:pb-0"
          >
            <div className="flex items-center gap-3 text-[9px] font-mono text-slate-500 mb-3 uppercase tracking-wider">
              <span className="font-semibold text-cyan-405">
                {post.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-cyan-950"></span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
                {post.date.toUpperCase()}
              </span>
              <span className="w-1 h-1 rounded-full bg-cyan-950"></span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
                {post.readTime.toUpperCase()}
              </span>
            </div>

            <h3 className="text-lg font-bold tracking-tight text-white font-mono group-hover:text-cyan-400 transition-colors duration-300">
              <Link href={`/blog/posts/${post.slug}`}>
                {post.title.toUpperCase()}
              </Link>
            </h3>

            <p className="text-xs text-slate-400 mt-2 leading-relaxed font-mono font-light">
              {post.excerpt}
            </p>

            <Link
              href={`/blog/posts/${post.slug}`}
              className="text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 mt-4 inline-flex items-center group/link"
            >
              [READ_LOG_PAYLOAD]
              <ChevronRight className="w-3.5 h-3.5 ml-0.5 transition-transform group-hover/link:translate-x-0.5" />
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
