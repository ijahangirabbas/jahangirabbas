export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  featured: boolean;
  category: "AI & RAG Systems" | "Desktop Apps" | "Full-Stack SaaS" | "Client Projects";
  tags: string[];
  metrics?: {
    latency?: string;
    accuracy?: string;
    techStack?: string;
  };
  features: string[];
  architectureSummary: string;
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  githubPrivate?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "chaibook-llm",
    title: "Chaibook LLM",
    subtitle: "NotebookLM-Inspired Document Intelligence & RAG Platform",
    description: "Flagship AI application enabling users to upload PDFs, text documents, URLs, and YouTube videos for deep conversational context retrieval, source citations, and right-sidebar evidence verification.",
    featured: true,
    category: "AI & RAG Systems",
    tags: ["Next.js", "TypeScript", "Qdrant", "OpenAI API", "RAG", "BullMQ", "Redis", "S3"],
    metrics: {
      latency: "<350ms p95 Retrieval",
      accuracy: "Input/Output Guardrails",
      techStack: "Hybrid Sparse+Dense Vector Search",
    },
    features: [
      "Multi-source ingest: PDFs, raw text, web URLs, and YouTube video transcripts",
      "Interactive right-sidebar evidence panel displaying verbatim source citations with timestamps",
      "Input & Output Guardrails to prevent hallucination and prompt injection",
      "Streaming LLM synthesis with fast token response rendering",
      "Resource card organization for multi-document research workspaces",
    ],
    architectureSummary: "S3 Upload → BullMQ Background Ingestion Worker → Text Extraction & Chunking → OpenAI Embedding Generation → Qdrant Vector Index → Cohere Re-ranker → LLM Streaming Response.",
    githubUrl: "https://github.com/ijahangirabbas/ChaiBook-LLM",
    liveUrl: "https://chaibook.thejeemlabs.com",
  },
  {
    id: "equilibrium-ai",
    title: "Equilibrium AI",
    subtitle: "Multi-LLM Consensus & Synthesis Engine",
    description: "An innovative multi-model AI system where one user prompt is processed simultaneously by three different LLMs, followed by a fourth meta-evaluation model that synthesizes their responses into one optimal answer.",
    featured: true,
    category: "AI & RAG Systems",
    tags: ["React", "Node.js", "Express", "OpenAI API", "Streaming", "Model Consensus"],
    metrics: {
      latency: "Parallel Model Invocations",
      accuracy: "Consensus Synthesis",
      techStack: "Multi-Agent Orchestration",
    },
    features: [
      "Parallel invocation of three distinct LLM models",
      "React streaming side-by-side response panels",
      "Meta-synthesizer model that analyzes trade-offs and combines peak insights",
      "SDK integration for seamless developer integration",
    ],
    architectureSummary: "User Query → Event Fan-out Worker → 3x Concurrent Model Streams → Evaluation Aggregator → Synthesized Output Streaming.",
    githubUrl: "https://github.com/ijahangirabbas/equilibrium-ai",
    liveUrl: "https://equilibrium.thejeemlabs.com",
  },
  {
    id: "rag-subtitle-search",
    title: "RAG Subtitle Search",
    subtitle: "Video Subtitle Indexing & Exact Timestamp Navigation",
    description: "Upload video subtitles or YouTube transcripts to perform semantic context queries and jump directly to exact video timestamps with verbatim evidence highlights.",
    featured: true,
    category: "AI & RAG Systems",
    tags: ["Python", "FastAPI", "Qdrant", "Embeddings", "Semantic Search", "Subtitles"],
    features: [
      "SRT / VTT / Transcript parser with precise timestamp metadata mapping",
      "Semantic chunking preserving sentence boundaries & context windows",
      "Instant vector retrieval returning exact video timestamp deep-links",
      "Clean media player integration for seamless jump-to-time navigation",
    ],
    architectureSummary: "Subtitle Parser → Windowed Chunking → Vector Indexing in Qdrant → Similarity Search → Timestamp Deep-Link Generator.",
    githubUrl: "https://github.com/ijahangirabbas/mobile-dev-assistant",
    liveUrl: "https://subtitles.thejeemlabs.com",
  },
  {
    id: "persona-ai",
    title: "Persona AI",
    subtitle: "AI-Powered Persona Chat Simulation",
    description: "An interactive AI-powered chat application that simulates conversations with popular Indian software educators Hitesh Choudhary and Piyush Garg. Supports real-time persona-based switching and session memory.",
    featured: true,
    category: "AI & RAG Systems",
    tags: ["React", "Vite", "Node.js", "Express", "OpenAI API", "Persona AI", "Vercel"],
    metrics: {
      latency: "Fast Streaming Responses",
      accuracy: "System Prompt Alignment",
      techStack: "Custom Persona System Instructions",
    },
    features: [
      "Persona-based AI chat with Indian educators (Hitesh Choudhary, Piyush Garg)",
      "Real-time persona switching and context updating",
      "Temporary conversation session memory management",
      "Fluid, responsive user interface deployed on Vercel",
    ],
    architectureSummary: "React Frontend (Vite) → Node.js Express API → OpenAI Compatible LLM Gateway (Persona Prompts).",
    githubUrl: "https://github.com/ijahangirabbas/Persona-AI",
    liveUrl: "https://persona-ai.jahangirabbas.com/",
  },
  {
    id: "freelance-saas-suite",
    title: "Freelance SaaS & Client Solutions",
    subtitle: "Custom AI SaaS Platforms, Workshop Systems & Landing Pages",
    description: "A portfolio of client-facing web applications, educational platforms, workshop management portals, automotive systems, and landing pages built for various clients.",
    featured: false,
    category: "Client Projects",
    tags: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "OpenAI", "Freelance"],
    features: [
      "Workshop management portals with automated scheduling",
      "Automotive platform portals with inventory indexing",
      "High-converting SaaS landing pages with custom micro-animations",
      "Full-stack Next.js client systems built for performance & responsiveness",
    ],
    architectureSummary: "Next.js App Router → PostgreSQL / Prisma → Redis Cache → Vercel Edge Serverless Deployment.",
    githubUrl: "https://github.com/ijahangirabbas",
    liveUrl: "https://thejeemlabs.com",
    githubPrivate: true,
  },
];
