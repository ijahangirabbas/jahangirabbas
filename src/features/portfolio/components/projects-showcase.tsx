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
import { PROJECTS } from "@/features/portfolio/data/projects";
import { ArrowUpRight, ExternalLink, Github, Lock } from "lucide-react";

export function ProjectsShowcase() {
  return (
    <Panel>
      <PanelHeader>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <PanelTitle>Featured Projects & AI Systems</PanelTitle>
          <PanelAction>
            <Link
              href="/projects"
              className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              View All ({PROJECTS.length}) →
            </Link>
          </PanelAction>
        </div>
        <PanelDescription>
          Production applications, RAG pipelines, and desktop systems
        </PanelDescription>
      </PanelHeader>

      <PanelContent className="grid gap-0 p-0">
        {PROJECTS.filter((p) => p.featured).map((project) => (
          <div
            key={project.id}
            className="group screen-line-top border-line p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base font-semibold tracking-tight text-foreground">
                {project.title}
              </h3>
              <span className="font-mono text-[10px] text-muted-foreground">
                {project.category}
              </span>
            </div>

            <p className="mt-1 text-xs font-medium text-muted-foreground font-mono">
              {project.subtitle}
            </p>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-line px-2 py-0.5 font-mono text-[10px] text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-3 text-xs">
              <Link
                href={`/projects/${project.id}`}
                className="flex items-center gap-1 font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>Read Case Study</span>
                <ArrowUpRight className="size-3.5" />
              </Link>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  project.githubPrivate ? (
                    <span
                      className="inline-flex items-center gap-1 text-muted-foreground select-none cursor-help text-[11px]"
                      title="This repository is private."
                    >
                      <Lock className="size-3" />
                      <span>Private Repo</span>
                    </span>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="size-3.5" />
                      <span>GitHub</span>
                    </a>
                  )
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 border border-line px-2 py-1 font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    <ExternalLink className="size-3.5" />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </PanelContent>
    </Panel>
  );
}
