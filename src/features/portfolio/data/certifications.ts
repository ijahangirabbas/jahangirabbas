export type CertificationItem = {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialURL?: string;
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "openai-api",
    title: "OpenAI API Deep Dive",
    issuer: "OpenAI / Independent",
    issueDate: "2025",
    credentialURL: "https://platform.openai.com/docs",
  },
  {
    id: "nextjs-prod",
    title: "Next.js Production Patterns",
    issuer: "Vercel Ecosystem",
    issueDate: "2025",
    credentialURL: "https://nextjs.org/docs",
  },
  {
    id: "rag-systems",
    title: "Retrieval-Augmented Generation Systems",
    issuer: "Jeem Labs — Internal Curriculum",
    issueDate: "2025",
  },
  {
    id: "typescript-adv",
    title: "Advanced TypeScript for Application Architecture",
    issuer: "Self-paced / Applied Practice",
    issueDate: "2024",
  },
  {
    id: "vector-search",
    title: "Vector Search & Hybrid Retrieval",
    issuer: "Qdrant / Applied Engineering",
    issueDate: "2025",
    credentialURL: "https://qdrant.tech/documentation/",
  },
  {
    id: "fullstack-saas",
    title: "Full-Stack SaaS Delivery",
    issuer: "Jeem Labs Client Work",
    issueDate: "2024",
    credentialURL: "https://thejeemlabs.com",
  },
];
