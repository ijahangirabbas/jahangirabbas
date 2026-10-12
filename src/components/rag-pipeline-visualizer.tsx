"use client";

import React, { useState } from "react";
import { RAG_PIPELINE_STEPS } from "@/features/portfolio/data/architecture";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const MOCK_PAYLOADS: Record<number, { title: string; json: object }> = {
  1: {
    title: "S3 Ingestion Trigger Event",
    json: {
      fileId: "doc_92871",
      fileName: "handbook_v2.pdf",
      fileSize: "4.2 MB",
      uploadUrl: "s3://jeem-ingest-bucket/uploads/handbook_v2.pdf",
      mimeType: "application/pdf"
    }
  },
  2: {
    title: "BullMQ Distributed Job Schema",
    json: {
      jobId: "job_rag_8f93",
      queueName: "document-parsing-worker",
      timestamp: 1789640235000,
      state: "active",
      attemptsMade: 0
    }
  },
  3: {
    title: "Document Chunker Token Output",
    json: [
      {
        chunkId: "doc_92871_c01",
        text: "Retrieval-Augmented Generation (RAG) is an architectural pattern that extends the capabilities of LLMs...",
        metadata: { page: 4, source: "handbook_v2.pdf", charCount: 512 }
      }
    ]
  },
  4: {
    title: "Vector Embeddings API Response",
    json: {
      model: "text-embedding-3-small",
      dimensions: 1536,
      vector: [0.0125, -0.0483, 0.1039, -0.0071, 0.0812, 0.0521, "..."]
    }
  },
  5: {
    title: "Qdrant Upsert Point Collection",
    json: {
      collection: "jeem-kb-v2",
      points: [
        {
          id: "e6f98c11-9252-4789-913a-c8fa21b794a3",
          vector: [0.0125, -0.0483, 0.1039, -0.0071, "..."],
          payload: { document_id: "doc_92871", page: 4, chunkIndex: 1 }
        }
      ]
    }
  },
  6: {
    title: "Cohere Re-ranked Context Rankings",
    json: {
      query: "What is RAG?",
      originalCount: 20,
      reRankedCount: 4,
      results: [
        { documentIndex: 4, relevanceScore: 0.945 },
        { documentIndex: 1, relevanceScore: 0.892 }
      ],
      safetyGuardrails: { toxicityCheck: "pass", promptInjectionShield: "pass" }
    }
  },
  7: {
    title: "SSE Stream Chunk & Citation Badges",
    json: {
      answerToken: "According to the handbook (Page 4), RAG extends...",
      verbatimCitations: [
        {
          citationId: "doc_92871_c01",
          source: "handbook_v2.pdf",
          page: 4,
          verbatim: "Retrieval-Augmented Generation..."
        }
      ]
    }
  }
};

export function RAGPipelineVisualizer() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = RAG_PIPELINE_STEPS[activeStep];

  return (
    <div className="flex flex-col gap-4">
      {/* Pipeline Stepper Buttons */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {RAG_PIPELINE_STEPS.map((step, idx) => (
          <button
            key={step.step}
            onClick={() => setActiveStep(idx)}
            className={cn(
              "flex shrink-0 items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-mono transition-all",
              activeStep === idx
                ? "border-primary bg-primary text-primary-foreground font-semibold shadow-xs"
                : "border-line bg-muted/30 text-muted-foreground hover:bg-accent hover:text-foreground"
            )}
          >
            <span>0{step.step}</span>
            <span className="truncate max-w-[120px]">{step.title}</span>
          </button>
        ))}
      </div>

      {/* Step Detail Card */}
      <div className="rounded-xl border border-line bg-muted/20 p-4 transition-all">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line/60 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary font-mono text-xs font-bold">
              {currentStep.step}
            </span>
            <h3 className="text-sm font-semibold text-foreground">{currentStep.title}</h3>
          </div>
          <span className="rounded-md border border-line bg-card px-2 py-0.5 font-mono text-[11px] text-primary">
            {currentStep.tech}
          </span>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{currentStep.description}</p>

        <div className="mt-4 flex flex-col gap-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
            Architecture Mechanics:
          </span>
          <div className="grid gap-1.5">
            {currentStep.details.map((detail, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-foreground/90">
                <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live JSON Payload Terminal Preview */}
        <div className="mt-4 border-t border-line/60 pt-4">
          <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
            {MOCK_PAYLOADS[currentStep.step].title}:
          </span>
          <pre className="mt-2 overflow-x-auto rounded-lg border border-line bg-card/60 p-3 font-mono text-[10px] text-foreground/95 select-all leading-normal max-h-48 overflow-y-auto">
            <code>
              {JSON.stringify(MOCK_PAYLOADS[currentStep.step].json, null, 2)}
            </code>
          </pre>
        </div>

        {/* Step Progression Navigation */}
        <div className="mt-4 flex items-center justify-between border-t border-line/60 pt-3 text-xs">
          <button
            disabled={activeStep === 0}
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            className="text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            ← Previous Stage
          </button>

          <span className="font-mono text-[10px] text-muted-foreground">
            Stage {activeStep + 1} of {RAG_PIPELINE_STEPS.length}
          </span>

          <button
            disabled={activeStep === RAG_PIPELINE_STEPS.length - 1}
            onClick={() => setActiveStep((prev) => Math.min(RAG_PIPELINE_STEPS.length - 1, prev + 1))}
            className="flex items-center gap-1 font-medium text-primary hover:underline disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            <span>Next Stage</span>
            <ArrowRight className="size-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
