import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { Calendar, Clock, ChevronRight } from "lucide-react";

export default function Blog() {
  return (
    <div className="space-y-12 max-w-3xl py-6 md:py-12 animate-fade-up">
      {/* Blog Intro */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-xs font-mono tracking-widest uppercase text-slate-400 dark:text-slate-500">
            Insights
          </h1>
          <h2 className="text-3xl font-bold tracking-tight text-slate-905 dark:text-white">
            Technical & Product Blog
          </h2>
        </div>
        <p className="text-base text-slate-650 dark:text-slate-350 leading-relaxed font-light">
          Articles exploring the intersections of Artificial Intelligence, product management metrics, 
          data architecture, and agile methodologies. Written for developers, project managers, and tech leaders.
        </p>
      </section>

      {/* Blog Posts List */}
      <section className="space-y-10">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="group relative flex flex-col items-start border-b border-slate-100 dark:border-slate-800/80 pb-8 last:border-b-0 last:pb-0"
          >
            <div className="flex items-center gap-3 text-[10px] font-mono text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-wider">
              <span className="font-semibold text-brand-indigo">
                {post.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-brand-indigo transition-colors duration-300">
              <Link href={`/blog/posts/${post.slug}`}>
                {post.title}
              </Link>
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed font-light">
              {post.excerpt}
            </p>

            <Link
              href={`/blog/posts/${post.slug}`}
              className="text-xs font-semibold text-brand-indigo hover:text-indigo-700 mt-4 inline-flex items-center group/link"
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
