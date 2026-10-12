import React from "react";
import {
  Panel,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
} from "@/components/panel";
import { Cpu, Layers, Terminal, Zap } from "lucide-react";

const MINDSET_ITEMS = [
  {
    icon: Cpu,
    title: "Architecture Before Code",
    body: "Decomposing large systems into workers, queues, chunking strategies, and vector indices before writing code.",
  },
  {
    icon: Zap,
    title: "Products Over Tutorials",
    body: "Focusing on production-ready products (Chaibook LLM, Equilibrium AI, NetLens AI) with guardrails and streaming.",
  },
  {
    icon: Layers,
    title: "Scalable AI Infrastructure",
    body: "Building asynchronous ingestion pipelines with S3, BullMQ, Redis/Valkey (Aiven), and Qdrant.",
  },
  {
    icon: Terminal,
    title: "Clean, Modern UX",
    body: "Creating responsive, Apple-inspired interfaces using React 19, Next.js 16, and Tailwind CSS v4.",
  },
] as const;

export function Overview() {
  return (
    <Panel id="approach">
      <PanelHeader>
        <PanelTitle>Engineering Mindset & Approach</PanelTitle>
        <PanelDescription>
          Building end-to-end products with architecture first
        </PanelDescription>
      </PanelHeader>

      <PanelContent className="grid gap-0 p-0 sm:grid-cols-2">
        {MINDSET_ITEMS.map((item) => (
          <div
            key={item.title}
            className="screen-line-top border-line p-4 sm:odd:border-r"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
              <item.icon className="size-4 text-primary" />
              <span>{item.title}</span>
            </div>
            <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
              {item.body}
            </p>
          </div>
        ))}
      </PanelContent>
    </Panel>
  );
}
