export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "pm-guide-to-rag",
    title: "A Project Manager's Guide to Retrieval-Augmented Generation (RAG)",
    excerpt: "Demystifying RAG pipelines for PMs: balancing accuracy, cost, latency, and compliance in enterprise generative AI products.",
    date: "June 28, 2026",
    readTime: "8 min read",
    category: "Generative AI",
    author: "Alex Morgan"
  },
  {
    slug: "llm-guardrails-production",
    title: "Deploying LLMs to Production: Guardrails and Evaluation Frameworks",
    excerpt: "How to design, implement, and track safety, toxicity, and correctness metrics when launching customer-facing AI products.",
    date: "May 15, 2026",
    readTime: "10 min read",
    category: "AI Operations",
    author: "Alex Morgan"
  },
  {
    slug: "agile-metrics-data-products",
    title: "Why Standard Agile Metrics Fail for Data & Machine Learning Products",
    excerpt: "Traditional velocity and burndown charts don't capture model training uncertainty. Here is how to adapt Agile for data science teams.",
    date: "April 02, 2026",
    readTime: "6 min read",
    category: "Product Management",
    author: "Alex Morgan"
  }
];
