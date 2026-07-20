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
    slug: "building-vault-multi-role-project-cockpit",
    title: "Building Vault: Designing an Enterprise Multi-Role Delivery Cockpit with Real-Time SSE & Jira Sync",
    excerpt: "A deep dive into Vault: how we bridged client intake, TPM capacity scheduling, AE standups, and executive analytics into a real-time system with Redis Pub/Sub, Node.js, and Jira Cloud integration.",
    date: "July 20, 2026",
    readTime: "12 min read",
    category: "Architecture & AI Ops",
    author: "Nikhil Udgata"
  },
  {
    slug: "pm-guide-to-rag",
    title: "A Project Manager's Guide to Retrieval-Augmented Generation (RAG)",
    excerpt: "Demystifying RAG pipelines for PMs: balancing accuracy, cost, latency, and compliance in enterprise generative AI products.",
    date: "June 28, 2026",
    readTime: "8 min read",
    category: "Generative AI",
    author: "Nikhil Udgata"
  },
  {
    slug: "llm-guardrails-production",
    title: "Deploying LLMs to Production: Guardrails and Evaluation Frameworks",
    excerpt: "How to design, implement, and track safety, toxicity, and correctness metrics when launching customer-facing AI products.",
    date: "May 15, 2026",
    readTime: "10 min read",
    category: "AI Operations",
    author: "Nikhil Udgata"
  },
  {
    slug: "agile-metrics-data-products",
    title: "Why Standard Agile Metrics Fail for Data & Machine Learning Products",
    excerpt: "Traditional velocity and burndown charts don't capture model training uncertainty. Here is how to adapt Agile for data science teams.",
    date: "April 02, 2026",
    readTime: "6 min read",
    category: "Product Management",
    author: "Nikhil Udgata"
  }
];
