import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { Calendar, Clock, ChevronRight } from "lucide-react";

export default function Blog() {
  return (
    <div className="space-y-12 max-w-3xl py-4">
      {/* Blog Intro */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-905 dark:text-white">
          Technical & Product Blog
        </h1>
        <p className="text-base text-slate-650 dark:text-slate-350 leading-relaxed">
          Articles exploring the intersections of Artificial Intelligence, product management metrics, 
          data architecture, and agile methodologies. Written for developers, project managers, and tech leaders.
        </p>
      </section>

      {/* Blog Posts List */}
      <section className="space-y-8">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="group relative flex flex-col items-start border-b border-slate-200 dark:border-slate-800 pb-8 last:border-b-0 last:pb-0"
          >
            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-2">
              <span className="font-semibold text-indigo-650 dark:text-indigo-400 uppercase tracking-wider">
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

            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              <Link href={`/blog/posts/${post.slug}`}>
                {post.title}
              </Link>
            </h2>

            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              {post.excerpt}
            </p>

            <Link
              href={`/blog/posts/${post.slug}`}
              className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-850 dark:hover:text-indigo-300 mt-3 inline-flex items-center"
            >
              Read full post
              <ChevronRight className="w-3.5 h-3.5 ml-0.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
