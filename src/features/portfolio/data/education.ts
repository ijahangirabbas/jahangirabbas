export type EducationItem = {
  id: string;
  school: string;
  degree?: string;
  fieldOfStudy?: string;
  period: { start: string; end?: string };
  description: string[];
  skills: string[];
};

export const EDUCATION: EducationItem[] = [
  {
    id: "punjab-university-it",
    school: "University of the Punjab, Pakistan",
    degree: "Bachelor of Science",
    fieldOfStudy: "Information Technology (BS IT)",
    period: { start: "2024", end: undefined },
    description: [
      "Currently pursuing undergraduate studies focusing on software development, programming, databases, networking, and modern computing technologies.",
      "Actively studying software architecture, system design, data structures, algorithms, and emerging AI technologies to strengthen both theoretical and practical foundations.",
    ],
    skills: [
      "DSA",
      "Software Engineering",
      "Databases",
      "Networking",
      "System Design",
      "Programming",
    ],
  },
  {
    id: "ai-self-study",
    school: "Applied AI & RAG Engineering",
    degree: "Independent study & research",
    fieldOfStudy: "LLM systems, retrieval, and evaluation",
    period: { start: "2024", end: undefined },
    description: [
      "Designing and shipping production RAG pipelines with hybrid sparse/dense search and re-ranking.",
      "Building AI agents, custom prompt chains, guardrails, and streaming UX for real-world applications.",
      "Practicing evaluation loops for latency optimization, citation verification, and hallucination control.",
    ],
    skills: [
      "RAG",
      "Qdrant",
      "OpenAI API",
      "LangChain",
      "AI Agents",
      "Prompt Engineering",
    ],
  },
];
