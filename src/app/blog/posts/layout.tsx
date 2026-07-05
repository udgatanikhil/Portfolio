import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl mx-auto py-4">
      {/* Back to Blog Navigation */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-indigo-650 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Back to Blog Posts
        </Link>
      </div>

      {/* Article Content Wrapper */}
      <article className="prose prose-slate dark:prose-invert max-w-none">
        {children}
      </article>

      {/* bottom nav helper */}
      <div className="border-t border-slate-205 dark:border-slate-800 mt-12 pt-6 flex justify-between">
        <Link
          href="/blog"
          className="inline-flex items-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-1" />
          Browse other articles
        </Link>
        <Link
          href="/contact"
          className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          Have questions? Get in touch &rarr;
        </Link>
      </div>
    </div>
  );
}
