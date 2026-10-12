import React from "react";
import {
  Panel,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
  SectionSeparator,
} from "@/components/panel";
import { RAGPipelineVisualizer } from "@/components/rag-pipeline-visualizer";
import { RAG_PIPELINE_STEPS } from "@/features/portfolio/data/architecture";

export default function ArchitecturePage() {
  return (
    <div className="mx-auto md:max-w-3xl">
      <div className="screen-line-top screen-line-bottom border-x border-line px-4 py-6">
        <h1 className="font-heading text-3xl font-medium tracking-tight text-foreground">
          AI & System Architecture
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Deconstruction of asynchronous ingestion workers, vector database indexing, and streaming LLM pipelines.
        </p>
      </div>

      <Panel>
        <PanelHeader>
          <PanelTitle>RAG Ingestion Pipeline Stepper</PanelTitle>
          <PanelDescription>
            7-stage pipeline deconstruction from S3 upload to streaming output
          </PanelDescription>
        </PanelHeader>
        <PanelContent>
          <RAGPipelineVisualizer />
        </PanelContent>
      </Panel>

      <SectionSeparator />

      <Panel>
        <PanelHeader>
          <PanelTitle>Complete Pipeline Architecture Specifications</PanelTitle>
        </PanelHeader>
        <PanelContent className="flex flex-col gap-0 p-0">
          {RAG_PIPELINE_STEPS.map((step) => (
            <div key={step.step} className="screen-line-top border-line p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-2">
                <span className="font-mono text-xs font-bold text-foreground">
                  Stage 0{step.step} — {step.title}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {step.component}
                </span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {step.details.map((d, i) => (
                  <span key={i} className="border border-line px-2 py-0.5 font-mono text-[10px] text-foreground/80">
                    • {d}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </PanelContent>
      </Panel>
    </div>
  );
}
