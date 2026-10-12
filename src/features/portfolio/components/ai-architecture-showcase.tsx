import React from "react";
import Link from "next/link";
import {
  Panel,
  PanelAction,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
} from "@/components/panel";
import { RAGPipelineVisualizer } from "@/components/rag-pipeline-visualizer";

export function AIArchitectureShowcase() {
  return (
    <Panel>
      <PanelHeader>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <PanelTitle>AI & System Architecture</PanelTitle>
          <PanelAction>
            <Link
              href="/architecture"
              className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              View Pipeline Spec →
            </Link>
          </PanelAction>
        </div>
        <PanelDescription>
          Interactive step-by-step viewer for production RAG ingestion pipelines
        </PanelDescription>
      </PanelHeader>

      <PanelContent className="flex flex-col gap-0 p-0">
        <div className="p-4">
          <RAGPipelineVisualizer />
        </div>

        <div className="grid sm:grid-cols-3">
          <div className="screen-line-top border-line p-4 text-xs sm:border-r">
            <span className="font-mono text-[10px] uppercase text-muted-foreground">
              Vector Store
            </span>
            <p className="mt-1 font-semibold text-foreground">Qdrant Database</p>
            <p className="mt-0.5 text-[11px] text-muted-foreground">
              Dense + Sparse BM25 hybrid search with payload filters.
            </p>
          </div>

          <div className="screen-line-top border-line p-4 text-xs sm:border-r">
            <span className="font-mono text-[10px] uppercase text-muted-foreground">
              Async Queues
            </span>
            <p className="mt-1 font-semibold text-foreground">BullMQ & Valkey</p>
            <p className="mt-0.5 text-[11px] text-muted-foreground">
              Background ingestion workers deployed on Aiven Redis/Valkey.
            </p>
          </div>

          <div className="screen-line-top border-line p-4 text-xs">
            <span className="font-mono text-[10px] uppercase text-muted-foreground">
              Guardrails & Re-rank
            </span>
            <p className="mt-1 font-semibold text-foreground">Input/Output Gate</p>
            <p className="mt-0.5 text-[11px] text-muted-foreground">
              Cohere re-ranking and toxicity hallucination checks.
            </p>
          </div>
        </div>
      </PanelContent>
    </Panel>
  );
}
