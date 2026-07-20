import type { MDXComponents } from "mdx/types";
import React from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif mt-10 mb-6 border-b border-[#ebdcb9]/60 pb-3">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-850 font-serif mt-8 mb-4 flex items-center gap-2 text-earth-green">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold tracking-tight text-slate-800 font-serif mt-6 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-slate-700 leading-relaxed mb-5 text-base font-sans font-light">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2 font-sans font-light">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 text-slate-700 space-y-2 font-sans font-light">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-slate-750 font-sans leading-relaxed">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-earth-green bg-[#f0e6d2]/25 p-4 sm:p-5 rounded-r-xl italic text-slate-750 my-6 font-serif text-sm leading-relaxed shadow-xs border-y border-r border-[#ebdcb9]/40">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-[#f0e6d2]/40 text-earth-green px-2 py-0.5 rounded text-xs font-mono border border-[#ebdcb9]/60">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-[#1c221e] text-emerald-100 rounded-xl p-5 my-6 overflow-x-auto text-xs font-mono border border-earth-green/20 shadow-sm leading-relaxed">
        {children}
      </pre>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-earth-green font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    ...components,
  };
}
