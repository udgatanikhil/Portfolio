import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { Calendar, Clock, ChevronRight } from "lucide-react";

export default function Blog() {
  return (
    <div className="space-y-12 max-w-3xl py-8 md:py-16 animate-fade-up">
      {/* Blog Intro */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h1 className="text-xs font-mono tracking-widest uppercase text-earth-green">
            Insights
          </h1>
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 font-serif">
            Technical & Product Blog
          </h2>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed font-light font-sans">
          Articles exploring the intersections of Artificial Intelligence, product management metrics, 
          data architecture, and agile methodologies. Written for developers, project managers, and tech leaders.
        </p>
      </section>

      {/* Blog Posts List */}
      <section className="space-y-10">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="group relative flex flex-col items-start border-b border-[#ebdcb9]/60 pb-8 last:border-b-0 last:pb-0"
          >
            <div className="flex items-center gap-3 text-[9px] font-mono text-slate-505 mb-3 uppercase tracking-wider">
              <span className="font-semibold text-earth-green">
                {post.category}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ebdcb9]"></span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ebdcb9]"></span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h3 className="text-lg font-bold tracking-tight text-slate-800 group-hover:text-earth-green transition-colors duration-250 font-serif">
              <Link href={`/blog/posts/${post.slug}`}>
                {post.title}
              </Link>
            </h3>

            <p className="text-xs text-slate-550 mt-2 leading-relaxed font-light font-sans">
              {post.excerpt}
            </p>

            <Link
              href={`/blog/posts/${post.slug}`}
              className="text-xs font-mono font-semibold text-earth-green hover:text-earth-green/80 mt-4 inline-flex items-center group/link"
            >
              Read full post
              <ChevronRight className="w-3.5 h-3.5 ml-0.5 transition-transform group-hover/link:translate-x-0.5" />
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
