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
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-support-automation",
    title: "AI-Powered Customer Support Automation",
    category: "AI & Automation",
    summary: "Led the end-to-end product development of an LLM-powered virtual assistant, reducing support ticket volume by 42% and automating common customer queries.",
    problem: "The customer service team was overwhelmed with high volumes of repetitive inquiries (e.g., password resets, order tracking, policy questions), leading to average response times exceeding 24 hours. The cost per support contact was increasing, and agent turnover was high due to repetitive workloads.",
    approach: "Designed and executed a strategy to deploy a secure, custom fine-tuned GPT-based virtual assistant. Ran user interviews to define query clusters, structured an agile workflow across engineering and product, and set up a guardrailing testing phase (toxicity/safety). Integrated the chatbot into the existing Zendesk CRM with a human-in-the-loop fallback mechanism.",
    architecture: [
      "Frontend: React-based embedded widget in customer portal.",
      "Orchestration Layer: Node.js API gateway managing session state and security tokens.",
      "AI Engine: Custom LLM wrapper deployed on AWS SageMaker.",
      "Knowledge Retrieval: Elasticsearch index for context enrichment (hybrid semantic + keyword search).",
      "CRM Integration: Zendesk Webhook API for automated ticket creation and handoff."
    ],
    kpis: [
      { metric: "Ticket Deflection Rate", value: "42%" },
      { metric: "First Response Time (FRT)", value: "< 2 minutes" },
      { metric: "Customer Satisfaction (CSAT)", value: "4.6 / 5.0" },
      { metric: "Operational Cost Reduction", value: "$320K / year" }
    ],
    outcome: "Successfully launched the AI Assistant within 5 months. The system resolved 42% of customer queries without human intervention, dropping the average agent ticket load and enabling the team to resolve Tier 2/3 issues in under 2 hours (down from 24 hours). CSAT scores for automated queries outperformed human averages for repetitive tasks.",
    technologies: ["GPT-4", "Python", "LangChain", "Elasticsearch", "Zendesk API", "AWS SageMaker"],
    timeline: "5 Months",
    role: "Technical Product Manager (Lead)"
  },
  {
    slug: "enterprise-rag-knowledge",
    title: "Enterprise RAG-Based Knowledge Platform",
    category: "Retrieval-Augmented Generation (RAG)",
    summary: "Architected a secure, compliant document search and Q&A engine for a financial services firm, processing 50,000+ proprietary regulatory documents.",
    problem: "Financial compliance officers spent hours searching across disparate internal repositories, PDFs, sharepoint folders, and local drives to cross-reference SEC regulations and compliance guidelines, risking compliance penalties and slowing down operational audits.",
    approach: "Collaborated with security teams to establish data privacy boundaries. Spearheaded the technical design of a secure Retrieval-Augmented Generation (RAG) platform. Selected chunking strategies optimized for dense financial tables, managed the evaluation framework for retrieval accuracy (using Ragas), and delivered a clean UI for search and compliance generation.",
    architecture: [
      "Ingestion Pipeline: Python-based parser extracting text/tables from PDF, DOCX, and XLSX files.",
      "Vector Storage: Pinecone Vector DB storing document embeddings.",
      "Embeddings Model: text-embedding-3-large by OpenAI.",
      "Retrieval Method: Hierarchical text chunking + Metadata filtering + Cohere Rerank.",
      "LLM Processing: Azure OpenAI (GPT-4o) in a secure, private tenant."
    ],
    kpis: [
      { metric: "Search Time Reduction", value: "85%" },
      { metric: "Retrieval Accuracy", value: "94.2%" },
      { metric: "Audit Report Generation Speed", value: "10x Faster" },
      { metric: "Compliance Violations", value: "0" }
    ],
    outcome: "Built and deployed the RAG system under a strict 6-month compliance timeline. Over 300 compliance officers now use the platform daily. The average search and verification time fell from 4 hours to 15 minutes, and report generation templates are populated automatically with verified citations to original documents.",
    technologies: ["Azure OpenAI", "Pinecone", "LlamaIndex", "Python", "Docker", "React"],
    timeline: "6 Months",
    role: "Technical Project & Product Manager"
  },
  {
    slug: "salesforce-crm-transformation",
    title: "CRM Predictive Analytics & Lead Scoring",
    category: "CRM & Data Science",
    summary: "Led the migration and modernization of a legacy CRM database to Salesforce, implementing a machine learning model for predictive lead scoring.",
    problem: "Sales representatives wasted 40% of their day calling low-intent, unqualified leads due to a lack of data consolidation and a simplistic heuristic lead scoring system. The underlying CRM database was slow, duplicate-heavy, and disconnected from marketing behavior.",
    approach: "Designed the integration roadmap for migrating legacy customer data into Salesforce CRM. Led a team of data engineers to clean 1.2M rows of customer records and data scientists to train a predictive lead-scoring XGBoost model. Deployed custom Salesforce flows to trigger immediate alerts for high-propensity leads.",
    architecture: [
      "Data Warehouse: Snowflake containing historical client behavior and interactions.",
      "Feature Store: Python scripts on AWS running ETL pipelines daily.",
      "Model: XGBoost classification model deployed as an API endpoint on AWS Lambda.",
      "CRM: Salesforce Service Cloud with REST API synchronization integrations."
    ],
    kpis: [
      { metric: "Lead Conversion Rate", value: "+28% YoY" },
      { metric: "Sales Pipeline Velocity", value: "+18%" },
      { metric: "Sales Rep Cold Call Time", value: "-35%" },
      { metric: "Data Deduplication", value: "99.4% clean" }
    ],
    outcome: "Delivered the migration and predictive features on time and under budget. The sales team converted 28% more leads year-over-year, as they were directed to high-intent leads first. The automated pipeline removed the friction of manual lead assignment, resulting in an estimated $1.8M in pipeline value growth.",
    technologies: ["Salesforce APEX", "Snowflake", "Python (Scikit-Learn)", "AWS Lambda", "dbt"],
    timeline: "8 Months",
    role: "Lead CRM PM / Program Manager"
  },
  {
    slug: "rpa-invoice-orchestration",
    title: "RPA & Supply Chain Process Orchestration",
    category: "Automation & Operations",
    summary: "Implemented robotic process automation (RPA) workflows to process supply chain vendor invoices, saving 8,000+ manual operations hours annually.",
    problem: "The operations and accounting teams manually entered invoice details from over 150 global supply chain vendors into the enterprise ERP system. This manual input process led to a high error rate (3.5%), late payment penalties, and high operational costs.",
    approach: "Conducted process mapping workshops to identify automation opportunities. Orchestrated the deployment of intelligent document processing (IDP) combined with UiPath RPA bots. Configured automated validation checks against purchase orders (3-way matching) and exception alerts for manual review.",
    architecture: [
      "Document Capture: OCR Engine (ABBYY FlexiCapture) parsing incoming email attachments.",
      "RPA Engine: UiPath Orchestrator coordinating virtual workers.",
      "Enterprise ERP: SAP Integration via secure UI automation and API calls.",
      "Alert System: Slack Webhooks + Email alerts for exception handling queues."
    ],
    kpis: [
      { metric: "Processing Speed", value: "12x Faster" },
      { metric: "Manual Workload Reduction", value: "88%" },
      { metric: "Data Entry Accuracy", value: "99.8%" },
      { metric: "ROI Break-even", value: "4.5 Months" }
    ],
    outcome: "Successfully automated 88% of standard invoice intake. The system processes invoices in under 90 seconds (previously 15 minutes). Late payment fees were completely eliminated, and four manual data-entry full-time employees were retrained and redeployed to strategic procurement roles.",
    technologies: ["UiPath", "ABBYY OCR", "SAP", "C#", "SQL Server", "Microsoft Power Automate"],
    timeline: "4.5 Months",
    role: "Technical Project Manager"
  }
];
