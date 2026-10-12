export type ExperiencePosition = {
  id: string;
  title: string;
  employmentType: string;
  start: string;
  end?: string;
  isOngoing?: boolean;
  duration: string;
  descriptionBulletPoints: string[];
  skills: string[];
};

export type ExperienceItemData = {
  id: string;
  companyName: string;
  companyWebsite?: string;
  companyLogoText: string;
  location: string;
  locationType: string;
  isCurrentEmployer: boolean;
  positions: ExperiencePosition[];
};

export const EXPERIENCES_DATA: ExperienceItemData[] = [
  {
    id: "independent-consultant",
    companyName: "Independent Consultant",
    companyLogoText: "IC",
    location: "Global",
    locationType: "Remote",
    isCurrentEmployer: true,
    positions: [
      {
        id: "ai-systems-architect",
        title: "AI Systems Architect",
        employmentType: "Freelance",
        start: "01.2024",
        end: undefined,
        isOngoing: true,
        duration: "2y 7m",
        descriptionBulletPoints: [
          "Architected Chaibook LLM, a flagship document intelligence platform handling multi-format ingest (PDF, URL, YouTube) with Qdrant vector retrieval.",
          "Designed Equilibrium AI, a multi-LLM consensus & synthesis engine processing parallel model streams.",
          "Engineered Persona AI chat application with real-time persona switching and session memory storage.",
          "Built asynchronous background ingestion worker pipelines using S3, BullMQ, Valkey (Aiven), and Qdrant vector database.",
          "Delivered production web solutions for clients including automotive platforms, workshop management systems, educational tools, and AI SaaS applications.",
        ],
        skills: [
          "TypeScript",
          "Next.js",
          "React",
          "Tailwind CSS",
          "Node.js",
          "OpenAI API",
          "Qdrant",
          "BullMQ",
          "PostgreSQL",
          "Redis",
          "Valkey",
          "S3",
        ],
      },
    ],
  },
  {
    id: "freelance-client-work",
    companyName: "Freelance Client Projects",
    companyWebsite: "https://freelancer.com",
    companyLogoText: "FL",
    location: "Worldwide",
    locationType: "Remote",
    isCurrentEmployer: false,
    positions: [
      {
        id: "freelance-fullstack-ai",
        title: "Full-Stack & AI Systems Developer",
        employmentType: "Freelance / Contract",
        start: "01.2023",
        end: "12.2023",
        isOngoing: false,
        duration: "1y",
        descriptionBulletPoints: [
          "Designed and deployed custom RAG subtitle search engine mapping transcript context queries to exact video timestamps.",
          "Built responsive, high-converting SaaS landing pages featuring modern UI design, dark theme, and fluid micro-animations.",
          "Developed full-stack Next.js and React client platforms with PostgreSQL database schemas and REST API integrations.",
          "Implemented input/output guardrails and prompt optimization techniques to eliminate hallucinations in client conversational systems.",
        ],
        skills: [
          "React",
          "Next.js",
          "Express.js",
          "RAG Systems",
          "Prompt Engineering",
          "Electron",
          "SQLite",
          "Vercel",
        ],
      },
    ],
  },
];
