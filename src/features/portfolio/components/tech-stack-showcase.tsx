"use client";

import React from "react";
import {
  Panel,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
} from "@/components/panel";
import { TECH_STACK_ITEMS, type TechItem } from "@/features/portfolio/data/tech-stack";
import {
  Activity,
  Atom,
  Bot,
  Box,
  CheckCircle,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileCode,
  Github,
  GitMerge,
  HardDrive,
  Layers,
  Layout,
  MessageSquare,
  Monitor,
  Palette,
  Search,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";

const VercelIcon = () => (
  <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2L2 22h20L12 2z" />
  </svg>
);

const ICON_MAP: Record<string, React.ReactNode> = {
  FileCode: <FileCode className="size-3.5" />,
  Code2: <Code2 className="size-3.5" />,
  Terminal: <Terminal className="size-3.5" />,
  Atom: <Atom className="size-3.5" />,
  Layers: <Layers className="size-3.5" />,
  Palette: <Palette className="size-3.5" />,
  Box: <Box className="size-3.5" />,
  Sparkles: <Sparkles className="size-3.5" />,
  Layout: <Layout className="size-3.5" />,
  Server: <Server className="size-3.5" />,
  Cpu: <Cpu className="size-3.5" />,
  Database: <Database className="size-3.5" />,
  Zap: <Zap className="size-3.5" />,
  HardDrive: <HardDrive className="size-3.5" />,
  Shield: <Shield className="size-3.5" />,
  Bot: <Bot className="size-3.5" />,
  GitMerge: <GitMerge className="size-3.5" />,
  MessageSquare: <MessageSquare className="size-3.5" />,
  Search: <Search className="size-3.5" />,
  ShieldCheck: <ShieldCheck className="size-3.5" />,
  CheckCircle: <CheckCircle className="size-3.5" />,
  Workflow: <Workflow className="size-3.5" />,
  Github: <Github className="size-3.5" />,
  Monitor: <Monitor className="size-3.5" />,
  Triangle: <VercelIcon />,
  Cloud: <Cloud className="size-3.5" />,
  Activity: <Activity className="size-3.5" />,
};

export function TechStackShowcase() {
  const categories = Array.from(new Set(TECH_STACK_ITEMS.map((i) => i.category)));

  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
        <PanelDescription>
          Battle-tested technologies & production stack
        </PanelDescription>
      </PanelHeader>

      <PanelContent className="relative p-0 [--badge-height:2rem] [--col-left-width:11rem]">
        <div
          className="pointer-events-none absolute inset-y-0 left-(--col-left-width) -z-1 w-px bg-[linear-gradient(to_bottom,var(--line)_4px,transparent_2px)] bg-size-[1px_6px] bg-repeat-y max-sm:hidden"
          aria-hidden
        />

        {categories.map((category) => {
          const items = TECH_STACK_ITEMS.filter((i) => i.category === category);
          const [num, ...titleParts] = category.split(" ");
          const title = titleParts.join(" ");

          return (
            <div
              key={category}
              className="grid items-start gap-y-2 border-b border-line px-4 py-3.5 last:border-none sm:grid-cols-[var(--col-left-width)_1fr] sm:px-0"
            >
              <div className="pl-1 text-xs/8 text-muted-foreground font-medium flex items-center sm:pl-4">
                <span className="mr-2 font-mono text-muted-foreground/50 select-none">
                  {num}
                </span>
                <span>{title}</span>
              </div>

              <ul className="flex flex-wrap gap-1.5 sm:px-4">
                {items.map((item) => (
                  <li key={item.name} className="flex">
                    <a
                      href={item.href || "#"}
                      target={item.href?.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="flex h-7 items-center justify-center gap-1.5 rounded-full bg-muted/60 px-2.5 font-mono text-xs text-foreground border border-line transition-all hover:border-foreground/40 hover:bg-accent dark:bg-zinc-900/80"
                    >
                      <span className="text-muted-foreground/80">
                        {ICON_MAP[item.iconName] || <Code2 className="size-3.5" />}
                      </span>
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </PanelContent>
    </Panel>
  );
}
