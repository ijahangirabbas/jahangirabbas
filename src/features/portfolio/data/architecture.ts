export type PipelineStep = {
  step: number;
  title: string;
  component: string;
  description: string;
  tech: string;
  details: string[];
};

export const RAG_PIPELINE_STEPS: PipelineStep[] = [
  {
    step: 1,
    title: "Multi-Format Ingestion",
    component: "Amazon S3 Storage",
    description: "Accepts PDFs, text files, URLs, and YouTube video transcripts via presigned S3 upload URLs.",
    tech: "Amazon S3 / Presigned URLs",
    details: ["Validates file size & MIME types", "Issues secure temporary presigned uploads", "Fires webhooks to trigger ingestion worker"],
  },
  {
    step: 2,
    title: "Asynchronous Queue Dispatch",
    component: "BullMQ & Redis / Valkey",
    description: "Ingestion events are pushed into Redis task queues to process document parsing asynchronously.",
    tech: "BullMQ + Aiven Valkey",
    details: ["Prevents API timeouts during heavy document parsing", "Automatic retry logic with exponential backoff", "Concurrent worker scaling"],
  },
  {
    step: 3,
    title: "Document Extraction & Chunking",
    component: "Hybrid Extraction Engine",
    description: "Parses text, removes formatting noise, and applies semantic boundary chunking with token overlaps.",
    tech: "LangChain / Custom Chunkers",
    details: ["Sentence & paragraph boundary detection", "Configurable chunk size (512 tokens + 64 overlap)", "Preserves video timestamp metadata"],
  },
  {
    step: 4,
    title: "Dense Vector Embedding",
    component: "OpenAI Embeddings Engine",
    description: "Generates high-dimensional vector representations (`text-embedding-3-small` / `large`) for each chunk.",
    tech: "OpenAI Embeddings API",
    details: ["Batch embedding API requests", "L2 normalized vectors for fast dot-product similarity", "Includes payload metadata tags"],
  },
  {
    step: 5,
    title: "Vector Indexing & Hybrid Search",
    component: "Qdrant Vector Database",
    description: "Stores embeddings in Qdrant collections with payload filtering for user/document scope isolation.",
    tech: "Qdrant DB",
    details: ["Hybrid Dense + Sparse Keyword BM25 retrieval", "Metadata payload filtering by document ID", "Fast HNSW index searching"],
  },
  {
    step: 6,
    title: "Context Re-ranking & Guardrails",
    component: "Re-ranker & Safety Gate",
    description: "Re-ranks top-K retrieved candidates using cross-encoders and passes input through safety guardrails.",
    tech: "Cohere Re-rank / Custom Guardrails",
    details: ["Filters irrelevant chunks to reduce context bloat", "Prevents prompt injection & toxicity", "Computes evidence confidence scores"],
  },
  {
    step: 7,
    title: "LLM Synthesis & Evidence Citation",
    component: "Streaming Generation Engine",
    description: "Synthesizes final answer with verbatim source citations, rendering right-sidebar evidence cards.",
    tech: "OpenAI GPT-4o / Streaming",
    details: ["Real-time SSE (Server-Sent Events) token streaming", "Attaches source document page & timestamp badges", "Renders right-sidebar evidence panel"],
  },
];
