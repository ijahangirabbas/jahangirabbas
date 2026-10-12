export type BlogPost = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: "RAG Systems" | "LLM Infrastructure" | "System Architecture";
  excerpt: string;
  content: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "optimizing-rag-retrieval-latency-qdrant",
    title: "Optimizing RAG Retrieval Latency with Qdrant Hybrid Search & Re-ranking",
    subtitle: "Achieving sub-350ms p95 latency on 100k+ vector payload collections",
    date: "July 24, 2026",
    readTime: "6 min read",
    category: "RAG Systems",
    excerpt: "A deep dive into combining dense vector embeddings with sparse BM25 keyword search, payload filtering in Qdrant, and Cohere cross-encoder re-ranking for production document chat applications.",
    content: `
Retrieval-Augmented Generation (RAG) applications often suffer from a fundamental trade-off: naive dense vector search is fast but misses specific domain keywords, while exhaustive hybrid search can bloat query latency beyond acceptable UX budgets.

In building **Chaibook LLM**, we set a strict latency budget of **<350ms p95** for vector retrieval and re-ranking across multi-document PDF and web transcript collections.

### 1. Hybrid Sparse + Dense Vector Searching

Rather than relying solely on OpenAI \`text-embedding-3-small\` vectors, we implement a hybrid retrieval strategy combining:
- **Dense Vectors**: 1536-dimensional embeddings for semantic similarity.
- **Sparse BM25 Vectors**: Token frequency indexing for exact keyword matches (part numbers, technical jargon, names).

\`\`\`typescript
const searchResults = await qdrantClient.search("document_collection", {
  vector: {
    name: "dense",
    vector: embeddingVector,
  },
  filter: {
    must: [{ key: "document_id", match: { value: docId } }],
  },
  limit: 20,
});
\`\`\`

### 2. Cohere Cross-Encoder Re-ranking

Top-20 retrieved candidates are passed to a Cohere cross-encoder re-ranker, which evaluates deep query-document relevance scores and trims the context down to the top-4 highest-scoring chunks before prompt assembly.

### Key Performance Outcomes:
- **Retrieval Precision**: +22% improvement on domain-specific technical queries.
- **Latency**: p95 retrieval latency reduced to **310ms**.
- **Context Bloat**: Reduced token consumption by **45%** per streaming LLM turn.
`,
  },
  {
    slug: "building-multi-llm-consensus-engine",
    title: "Building a Multi-LLM Consensus Engine with Event Fan-Out & Streaming",
    subtitle: "Architecting parallel model invocations and meta-synthesis in Equilibrium AI",
    date: "June 18, 2026",
    readTime: "8 min read",
    category: "LLM Infrastructure",
    excerpt: "How Equilibrium AI fans out a single user prompt to three distinct LLMs in parallel and uses a fourth meta-synthesizer model to evaluate and combine optimal answers in real time.",
    content: `
Single-model LLM applications are vulnerable to individual model biases, reasoning gaps, or hallucination traps. **Equilibrium AI** was designed to solve this by seeking consensus among multiple models simultaneously.

### The Fan-Out Architecture

When a user submits a query:
1. An event emitter fans out the payload concurrently to 3 model stream endpoints (OpenAI GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro).
2. SSE (Server-Sent Events) stream tokens back to client UI panels simultaneously.
3. Once stream completion events fire, a fourth **Meta-Synthesizer** prompt receives all three outputs and produces a unified, high-precision answer.

\`\`\`typescript
const [res1, res2, res3] = await Promise.all([
  invokeModel("gpt-4o", prompt),
  invokeModel("claude-3-5-sonnet", prompt),
  invokeModel("gemini-1-5-pro", prompt),
]);

const finalSynthesis = await invokeSynthesizer(prompt, [res1, res2, res3]);
\`\`\`

### Results & Trade-Offs
- **Accuracy**: Eliminates single-model hallucination edge cases.
- **Latency**: Overall response latency matches the slowest individual model in the fan-out pool.
`,
  },
  {
    slug: "input-output-guardrails-production-ai",
    title: "Input & Output Guardrails: Preventing Hallucinations & Prompt Injection",
    subtitle: "Implementing structured validation gates in production AI pipelines",
    date: "May 12, 2026",
    readTime: "5 min read",
    category: "System Architecture",
    excerpt: "Patterns for validating input prompts and verifying LLM generation output against verbatim source evidence before rendering to the user.",
    content: `
Production AI systems require deterministic safety guarantees. Input guardrails sanitize user prompts against injection attacks, while output guardrails verify that generated citations accurately correspond to retrieved source chunks.

### Output Verification Gate

Before rendering a response in Chaibook LLM:
- Zod schemas enforce structured JSON citation arrays containing verbatim source text snippets and page numbers.
- If confidence score drops below 0.85, the system automatically appends a fallback disclaimer asking the user to verify the source evidence in the right sidebar.
`,
  },
];
