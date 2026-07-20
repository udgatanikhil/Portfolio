import Link from "next/link";
import { ArrowLeft, BookOpen, MessageSquare } from "lucide-react";

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl mx-auto py-6 sm:py-10 animate-fade-up">
      {/* Back to Blog Navigation */}
      <div className="mb-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-xs font-mono tracking-wider uppercase text-earth-green hover:underline bg-[#f0e6d2]/30 px-3 py-1.5 rounded-lg border border-[#ebdcb9] transition-all duration-200"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
          Back to Blog Posts
        </Link>
      </div>

      {/* Article Content Wrapper Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-12 border border-[#ebdcb9] shadow-sm space-y-6">
        <article className="prose prose-slate max-w-none font-sans">
          {children}
        </article>

        {/* Bottom Navigation */}
        <div className="border-t border-[#ebdcb9]/60 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
          <Link
            href="/blog"
            className="inline-flex items-center text-earth-green hover:underline font-semibold"
          >
            <BookOpen className="w-4 h-4 mr-1.5 text-earth-green" />
            Browse Other Articles
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center text-earth-green hover:underline font-semibold"
          >
            <MessageSquare className="w-4 h-4 mr-1.5 text-earth-green" />
            Have Questions? Get in Touch &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
