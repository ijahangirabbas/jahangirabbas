import React from "react";
import { USER } from "@/features/portfolio/data/user";
import {
  Panel,
  PanelAction,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
} from "@/components/panel";
import { ArrowUpRight } from "lucide-react";

export function JeemLabsCard() {
  return (
    <Panel>
      <PanelHeader>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <PanelTitle>Jeem Labs</PanelTitle>
          <PanelAction>
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 border border-foreground bg-foreground px-3 py-1.5 text-xs font-medium text-background hover:opacity-90 transition-opacity"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </PanelAction>
        </div>
        <PanelDescription>
          Growing {USER.company.website.replace("https://", "")} — AI-focused applications, developer utilities, and scalable software platforms.
        </PanelDescription>
      </PanelHeader>

      <PanelContent>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Building AI-focused applications, developer utilities, and scalable software platforms. Interested in collaborating or hiring for AI SaaS projects?
        </p>
      </PanelContent>
    </Panel>
  );
}
