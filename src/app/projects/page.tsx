import React from "react";
import Link from "next/link";
import {
  Panel,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
} from "@/components/panel";
import { PROJECTS } from "@/features/portfolio/data/projects";
import { ArrowUpRight, ExternalLink, Github, Lock } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="mx-auto md:max-w-3xl">
      <div className="screen-line-bottom border-x border-line px-4 py-6">
        <h1 className="font-heading text-3xl font-medium tracking-tight text-foreground">
          Projects Directory
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Production applications, RAG pipelines, multi-LLM consensus engines, and freelance client platforms.
        </p>
      </div>

      <div className="flex flex-col">
        {PROJECTS.map((project, index) => (
          <Panel
            key={project.id}
            className={index === 0 ? undefined : "screen-line-top-none"}
          >
            <PanelHeader>
              <PanelTitle className="text-xl">{project.title}</PanelTitle>
              <PanelDescription className="py-2 text-sm">{project.subtitle}</PanelDescription>
            </PanelHeader>
            <PanelContent className="flex flex-col gap-3">
              <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>

              {project.metrics && (
                <div className="flex flex-wrap gap-2 border border-line p-2.5 text-xs">
                  {project.metrics.latency && (
                    <span className="font-mono text-[10px] text-muted-foreground">
                      Latency: {project.metrics.latency}
                    </span>
                  )}
                  {project.metrics.accuracy && (
                    <span className="font-mono text-[10px] text-muted-foreground">
                      Accuracy: {project.metrics.accuracy}
                    </span>
                  )}
                </div>
              )}

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-line px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-2 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-3 text-xs">
                <Link
                  href={`/projects/${project.id}`}
                  className="flex items-center gap-1 font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  <span>View Full Architecture Case Study</span>
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
            </PanelContent>
          </Panel>
        ))}
      </div>
    </div>
  );
}
