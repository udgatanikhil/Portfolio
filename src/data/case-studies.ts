export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  approach: string;
  architecture: string[];
  kpis: { metric: string; value: string }[];
  outcome: string;
  technologies: string[];
  timeline: string;
  role: string;
  demoUrl?: string;
}

export interface ThoughtExercise {
  slug: string;
  title: string;
  category: string;
  summary: string;
  link: string;
  highlights: string[];
  kpis: { metric: string; value: string }[];
  scope: string;
  role: string;
}

export const thoughtExercises: ThoughtExercise[] = [
  {
    slug: "healthcare-ai-transformation",
    title: "Healthcare Support AI Transformation Strategy",
    category: "Thought Exercise — PMO & AI Delivery",
    summary: "An end-to-end operational strategy and PMO delivery model for introducing AI copilots into a 250-agent healthcare support center, driving ~25,000 monthly handling hours removed while maintaining a human on every interaction.",
    link: "/thought-exercise/healthcare-ai-transformation",
    highlights: [
      "Core Metric: Driven strictly by human handling time removed (~25,000 monthly hours).",
      "Human-in-the-Loop Constraint: AI handles backend lookups and note-drafting while agents retain patient interaction.",
      "Data-Derived Workforce Models: 3 calibrated capacity scenarios (222 FTE / 200 FTE / 148 FTE).",
      "Full PMO Governance: 90-day delivery roadmap, 15-workstream RAID log, RACI matrix, and safety controls."
    ],
    kpis: [
      { metric: "Target Handling Hours Removed", value: "~25,000/mo" },
      { metric: "FTE Capacity Options", value: "148–222 FTE" },
      { metric: "Human-in-the-Loop Safeguard", value: "100%" },
      { metric: "Delivery Roadmap Scope", value: "90 Days" }
    ],
    scope: "250-Agent Support Operation",
    role: "PMO Lead & AI Strategy Architect"
  }
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "vault-project-delivery-cockpit",
    title: "Vault — Multi-Role Project Delivery Cockpit & AI Assistant",
    category: "Project Delivery & AI Systems",
    summary: "Architected and built Vault, an enterprise multi-role project delivery cockpit uniting RICE intake, TPM capacity scheduling, AE standup compliance, and Jira Cloud bi-directional syncing into a real-time workspace.",
    demoUrl: "https://vault-1-m9jg.onrender.com",
    problem: "Engineering delivery organizations suffer from fragmented tools: clients lack objective feature intake, TPMs manually calculate capacity in spreadsheets, engineers fill isolated standup forms, and leadership lacks real-time operational visibility.",
    approach: "Designed a 4-role continuous delivery architecture (Client, TPM, AE, Admin) synchronized via a Redis Pub/Sub Server-Sent Events (SSE) event tunnel. Integrated bi-directional Jira Cloud webhooks (POST /api/jira/webhook) and a 4-hour Redis-cached Dify AI summarization engine following the lean-prompt pattern.",
    architecture: [
      "Frontend SPA: React + Vite + Tailwind CSS with custom SVG Gantt charting and SSE subscription hooks.",
      "Event Gateway: Node.js & Express API with a Redis Pub/Sub SSE event tunnel for real-time browser state syncing.",
      "Database Layer: PostgreSQL containerized database storing RICE intakes, allocations, and user roles.",
      "Bi-Directional Sync: Jira Cloud REST API integration and automated webhook callback handlers.",
      "AI Summarization: Dify orchestration stack (Llama 3 / Ollama) with 4-hour Redis TTL response caching."
    ],
    kpis: [
      { metric: "Capacity Overload Detection", value: "Real-Time (>8h)" },
      { metric: "Jira Comment Sync Latency", value: "< 1 sec" },
      { metric: "AI Token Fee Reduction", value: "-90%" },
      { metric: "Operational Visibility Score", value: "+100%" }
    ],
    outcome: "Built and deployed a full-stack containerized multi-role project management system. Replaced static spreadsheet planning with real-time capacity scheduling and auto-syncing Jira audit histories.",
    technologies: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Redis Pub/Sub", "SSE", "Jira REST API", "Docker", "Tailwind CSS"],
    timeline: "Completed & Deployed",
    role: "System Architect & Lead Developer"
  },
  {
    slug: "lending-funnel-optimization",
    title: "B2B Digital Lending Integration & Funnel Optimization",
    category: "FinTech & APIs",
    summary: "Led the technical delivery and optimization of digital lending journeys and API integrations for B2B partners, reducing disbursement failure rates by 15%.",
    problem: "B2B fintech partners experienced high disbursement failure rates and onboarding bottlenecks in digital lending journeys. The engineering team lacked real-time visibility into transaction flows, resulting in slow incident response times and drop-offs in the lending funnel.",
    approach: "Designed and executed a strategy to stabilize the API transaction flow. Implemented a transaction monitoring system using Grafana and SQL to track disbursements in real-time. Created standardized API schemas and webhook config templates to streamline partner onboarding. Isolated drop-off points in the database to optimize API performance.",
    architecture: [
      "Frontend: Embedded responsive digital lending widget for B2B client applications.",
      "API Gateways: Scalable REST APIs and Secure Webhook Callback handlers.",
      "Database & Query: PostgreSQL databases storing user workflow states and transaction records.",
      "Monitoring: Grafana dashboards integrated with real-time SQL queries and automated alert thresholds.",
      "Sandbox: Standardized testing environments for rapid partner integration and UAT."
    ],
    kpis: [
      { metric: "Disbursement Failure Rate", value: "-15%" },
      { metric: "FinTech Product Adoption", value: "+12%" },
      { metric: "B2B Partner Onboarding Cycle", value: "-20%" },
      { metric: "Incident Detection Time", value: "< 5 mins" }
    ],
    outcome: "Successfully streamlined digital lending integrations for major B2B partners. Real-time Grafana alerts enabled the team to respond to API drops instantly. Landing page optimizations and backend database query tuning successfully boosted active product adoption by 12%.",
    technologies: ["SQL", "Grafana", "PostgreSQL", "REST APIs", "Webhooks", "Jira", "Confluence"],
    timeline: "Ongoing (Nov 2025 – Present)",
    role: "Technical Project Manager"
  },
  {
    slug: "rag-bi-release-automation",
    title: "RAG-Based Business Intelligence & Release Tracker",
    category: "Generative AI",
    summary: "Architected a custom internal RAG-based tool to automatically compile and query engineering release notes, reducing manual tracking work to zero.",
    problem: "Product and engineering teams spent valuable hours manually tracking commit histories, release dependencies, and JIRA ticket updates to compile release notes. Stakeholders lacked an instant, automated way to query engineering throughput and release scopes.",
    approach: "Conceptualized and led the development of a Retrieval-Augmented Generation (RAG) internal business intelligence application. Built a system to parse JIRA commit logs and ticket data, run chunking algorithms on release documents, generate vector embeddings, and interface with an LLM query assistant.",
    architecture: [
      "Data Pipeline: Node.js worker extracting commit histories and ticket fields from JIRA REST APIs.",
      "Embeddings: text-embedding-3-small via OpenAI API.",
      "Vector Database: pgvector (PostgreSQL) storing vectorized ticket metadata.",
      "LLM Retrieval: LangChain-based RAG pipeline retrieving context chunks.",
      "BI Interface: Custom internal dashboard with chatbot UI and metadata search filters."
    ],
    kpis: [
      { metric: "Manual Release Report Compilation", value: "0 Hours" },
      { metric: "Query Resolution Speed", value: "Instant" },
      { metric: "Data Extraction Completeness", value: "99.8%" },
      { metric: "Operational Transparency Score", value: "+40%" }
    ],
    outcome: "Deployed the internal BI assistant to 25+ product managers and executive stakeholders. The system automates release log compilations, allowing managers to query current sprint statuses using natural language. Increased cross-team operational visibility while saving engineers hours of administrative reporting.",
    technologies: ["Python", "LangChain", "OpenAI API", "pgvector", "PostgreSQL", "Jira APIs"],
    timeline: "4 Months",
    role: "Technical Project Manager (AI Lead)"
  },
  {
    slug: "healthcare-crm-ai-knowledge",
    title: "AI-Powered Search & Patient CRM Modernization",
    category: "Healthcare CRM & AI",
    summary: "Led product lifecycle for a HIPAA-compliant healthcare CRM, implementing a RAG-based AI search assistant that cut customer onboarding times by 30%.",
    problem: "Enterprise healthcare providers faced high customer service queues and onboarding delays. Customer service agents struggled to locate and parse dense compliance documents, policy books, and patient guidelines in a legacy CRM architecture.",
    approach: "Managed the end-to-end product lifecycle for a HIPAA-compliant healthcare CRM deployment. Spearheaded the integration of a RAG-based search engine that allowed representatives to query unstructured policy documents. Conducted cohort analyses and user journey mapping to drive data-driven feature improvements.",
    architecture: [
      "Platform: HIPAA-compliant LeadSquared CRM architecture.",
      "Data Ingestion: Document parser converting PDFs and text files into clean structured content.",
      "Index & Storage: LlamaIndex processing embeddings for vector storage.",
      "AI Model: Azure OpenAI (GPT-4o) deployed in a private, secure cloud tenant.",
      "Integration: Custom CRM tab injecting the query resolution assistant into agent panels."
    ],
    kpis: [
      { metric: "Customer Onboarding Time", value: "-30%" },
      { metric: "Customer Retention Rate", value: "+18%" },
      { metric: "Customer Satisfaction (CSAT)", value: "+15%" },
      { metric: "Feature Adoption Rate", value: "82%" }
    ],
    outcome: "Delivered two major automated CRM features within an 8-month development cycle. The AI-powered search tool allowed agents to pull patient guidelines in seconds, leading to a 30% speedup in customer onboarding. Awarded 'Dashing Debut' for cross-functional alignment and delivery impact.",
    technologies: ["LeadSquared CRM", "Azure OpenAI", "LlamaIndex", "Python", "HIPAA Security", "Jira"],
    timeline: "11 Months",
    role: "Senior Business Analyst"
  },
  {
    slug: "ml-asset-risk-analytics",
    title: "ML-Driven Lease Default Risk Prediction",
    category: "Risk Analytics & Machine Learning",
    summary: "Deployed machine learning classification models to evaluate payment histories, reducing asset lease default rates by 35% for Tier-1 clients.",
    problem: "Asset finance enterprise clients faced rising default rates due to inadequate customer default scoring systems. Manual validation of auto lease applicants created processing delays, slowing down origination velocity.",
    approach: "Collaborated with data science teams to integrate predictive risk analytics into the credit validation pipeline. Preprocessed historical payment databases to train XGBoost and Random Forest Classifier models. Structured business intelligence dashboards to visualize customer risk profiles for underwriters.",
    architecture: [
      "Warehouse: Snowflake repository containing historical customer records.",
      "Data Processing: Python ETL pipelines running data cleaning and feature engineering tasks.",
      "Predictive Engine: Random Forest classification model running on scikit-learn.",
      "Analytics Layer: Power BI dashboards visualizing credit default risk profiles.",
      "Automation: Automated validation rules configured directly in auto finance origination workflows."
    ],
    kpis: [
      { metric: "Lease Default Rates", value: "-35%" },
      { metric: "Revenue Loss Reduction", value: "-40%" },
      { metric: "Loan Processing Velocity", value: "+25%" },
      { metric: "Risk Model Accuracy", value: "89.4%" }
    ],
    outcome: "Successfully automated auto finance origination workflows for Tier-1 multinational clients. The machine learning model successfully identified high-risk accounts prior to lease sign-offs, helping financial underwriters prevent defaults and saving millions in credit losses.",
    technologies: ["Python (Scikit-Learn)", "Snowflake", "SQL Server", "Power BI", "IFRS/GAAP Standard", "Excel"],
    timeline: "2.5 Years",
    role: "Business Analyst (Technical Lead)"
  }
];
