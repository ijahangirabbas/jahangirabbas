export type TechItem = {
  name: string;
  category: "01 Language" | "02 Frontend" | "03 Backend & Database" | "04 AI & RAG Infrastructure" | "05 Workflow & Dev Tools" | "06 Cloud & Analytics";
  iconName: string;
  href?: string;
};

export const TECH_STACK_ITEMS: TechItem[] = [
  // 01 Language
  { name: "TypeScript", category: "01 Language", iconName: "FileCode", href: "https://www.typescriptlang.org" },
  { name: "JavaScript", category: "01 Language", iconName: "Code2", href: "https://developer.mozilla.org" },
  { name: "Python", category: "01 Language", iconName: "Terminal", href: "https://www.python.org" },
  { name: "SQL", category: "01 Language", iconName: "Database", href: "https://wikipedia.org/wiki/SQL" },

  // 02 Frontend
  { name: "React.js", category: "02 Frontend", iconName: "Atom", href: "https://react.dev" },
  { name: "Next.js", category: "02 Frontend", iconName: "Layers", href: "https://nextjs.org" },
  { name: "Tailwind CSS", category: "02 Frontend", iconName: "Palette", href: "https://tailwindcss.com" },
  { name: "Vite", category: "02 Frontend", iconName: "Zap", href: "https://vite.dev" },
  { name: "HTML5 & CSS3", category: "02 Frontend", iconName: "Layout", href: "https://w3.org" },

  // 03 Backend & Database
  { name: "Node.js", category: "03 Backend & Database", iconName: "Server", href: "https://nodejs.org" },
  { name: "Express.js", category: "03 Backend & Database", iconName: "Cpu", href: "https://expressjs.com" },
  { name: "FastAPI", category: "03 Backend & Database", iconName: "Zap", href: "https://fastapi.tiangolo.com" },
  { name: "PostgreSQL", category: "03 Backend & Database", iconName: "Database", href: "https://www.postgresql.org" },
  { name: "MongoDB", category: "03 Backend & Database", iconName: "Database", href: "https://www.mongodb.com" },
  { name: "Supabase", category: "03 Backend & Database", iconName: "Layers", href: "https://supabase.com" },
  { name: "Qdrant Vector DB", category: "03 Backend & Database", iconName: "Zap", href: "https://qdrant.tech" },

  // 04 AI & RAG Infrastructure
  { name: "OpenAI APIs", category: "04 AI & RAG Infrastructure", iconName: "Bot", href: "https://openai.com" },
  { name: "LangChain", category: "04 AI & RAG Infrastructure", iconName: "GitMerge", href: "https://langchain.com" },
  { name: "RAG Pipelines", category: "04 AI & RAG Infrastructure", iconName: "Search", href: "#" },
  { name: "AI Agents", category: "04 AI & RAG Infrastructure", iconName: "Workflow", href: "#" },
  { name: "Prompt Engineering", category: "04 AI & RAG Infrastructure", iconName: "MessageSquare", href: "#" },

  // 05 Workflow & Dev Tools
  { name: "Git & GitHub", category: "05 Workflow & Dev Tools", iconName: "Github", href: "https://github.com" },
  { name: "Docker", category: "05 Workflow & Dev Tools", iconName: "Monitor", href: "https://www.docker.com" },
  { name: "OpenTelemetry", category: "05 Workflow & Dev Tools", iconName: "Activity", href: "https://opentelemetry.io" },

  // 06 Cloud & Analytics
  { name: "Vercel", category: "06 Cloud & Analytics", iconName: "Triangle", href: "https://vercel.com" },
  { name: "Netlify", category: "06 Cloud & Analytics", iconName: "Cloud", href: "https://netlify.com" },
  { name: "Amazon S3", category: "06 Cloud & Analytics", iconName: "Cloud", href: "https://aws.amazon.com/s3" },
];
