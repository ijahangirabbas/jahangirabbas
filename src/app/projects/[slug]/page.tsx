import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
  SectionSeparator,
} from "@/components/panel";
import { PROJECTS } from "@/features/portfolio/data/projects";
import { ArrowLeft, CheckCircle2, ExternalLink, Github } from "lucide-react";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto md:max-w-3xl">
      <div className="screen-line-bottom border-x border-line px-4 py-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground font-mono"
        >
          <ArrowLeft className="size-3.5" />
          <span>Back to Projects</span>
        </Link>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <h1 className="font-heading text-3xl font-medium tracking-tight text-foreground">
            {project.title}
          </h1>
          <span className="font-mono text-xs text-muted-foreground">{project.category}</span>
        </div>
        <p className="mt-1 text-sm font-medium text-muted-foreground font-mono">{project.subtitle}</p>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
      </div>

      <Panel>
        <PanelHeader>
          <PanelTitle>System Architecture & Pipeline Mechanics</PanelTitle>
        </PanelHeader>
        <PanelContent className="flex flex-col gap-3">
          <div className="border border-line p-3 font-mono text-xs text-foreground">
            <span className="text-[10px] uppercase text-muted-foreground block mb-1">
              Architecture Flow:
            </span>
            {project.architectureSummary}
          </div>

          <div className="mt-2">
            <h3 className="text-xs font-semibold text-foreground mb-2">
              Key Engineering Capabilities:
            </h3>
            <div className="grid gap-2">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="size-4 text-foreground shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </PanelContent>
      </Panel>

      <SectionSeparator />

      <Panel>
        <PanelHeader>
          <PanelTitle>Technology & Libraries Used</PanelTitle>
        </PanelHeader>
        <PanelContent>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-line px-3 py-1 font-mono text-xs text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </PanelContent>
      </Panel>

      <div className="flex items-center gap-4 border-x border-line screen-line-top px-4 py-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-line px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted transition-colors"
          >
            <Github className="size-4" />
            <span>GitHub Repository</span>
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-foreground bg-foreground px-4 py-2 text-xs font-semibold text-background hover:opacity-90 transition-opacity"
          >
            <ExternalLink className="size-4" />
            <span>Launch Live Application</span>
          </a>
        )}
      </div>
    </div>
  );
}
