"use client";

import React, { useState } from "react";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel";
import { EXPERIENCES_DATA, type ExperienceItemData } from "@/features/portfolio/data/experiences";
import { ChevronDown, ChevronUp, Code2, Infinity as InfinityIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExperiencesShowcase() {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Experience</PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-6 pr-2 pl-4">
        {EXPERIENCES_DATA.map((exp, expIndex) => (
          <ExperienceItem
            key={exp.id}
            experience={exp}
            openFirstPositionOnly={expIndex === 0}
          />
        ))}
      </PanelContent>
    </Panel>
  );
}

function ExperienceItem({
  experience,
  openFirstPositionOnly,
}: {
  experience: ExperienceItemData;
  openFirstPositionOnly: boolean;
}) {
  return (
    <div
      id={`experience-${experience.id}`}
      className="group/experience relative space-y-4 border-b border-line pb-6 last:border-none last:pb-0 scroll-mt-20"
    >
      {/* Company Header Row */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Company Badge Logo */}
          <div className="flex size-6 shrink-0 items-center justify-center rounded-md border border-line bg-zinc-950 text-zinc-50 font-mono font-bold text-xs dark:bg-zinc-100 dark:text-zinc-950">
            {experience.companyLogoText}
          </div>

          {/* Company Name */}
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {experience.companyWebsite ? (
              <a
                href={experience.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-all"
              >
                {experience.companyName}
              </a>
            ) : (
              experience.companyName
            )}
          </h3>
        </div>

        {/* Location & Active Status Dot */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap font-sans">
          <span>{experience.location} ({experience.locationType})</span>
          {experience.isCurrentEmployer && (
            <span className="relative flex size-2.5 items-center justify-center">
              <span className="absolute inline-flex size-2.5 animate-ping rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-blue-500" />
            </span>
          )}
        </div>
      </div>

      {/* Hierarchy Positions with Left Branch Connecting Line */}
      <div className="relative space-y-4 pl-3 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1.25rem)] before:w-px before:bg-line">
        {experience.positions.map((position, posIndex) => (
          <ExperiencePositionCard
            key={position.id}
            position={position}
            defaultOpen={openFirstPositionOnly && posIndex === 0}
          />
        ))}
      </div>
    </div>
  );
}

function ExperiencePositionCard({
  position,
  defaultOpen,
}: {
  position: ExperienceItemData["positions"][0];
  defaultOpen: boolean;
}) {
  const [expanded, setExpanded] = useState(defaultOpen);

  return (
    <div className="relative pl-6">
      {/* Curved Branch Connector */}
      <div className="pointer-events-none absolute left-3 top-3 h-4 w-4 -translate-y-2 rounded-bl-md border-b border-l border-line" />

      {/* Role Header Row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          {/* Role Icon Box */}
          <div className="flex size-6 shrink-0 items-center justify-center rounded-md border border-line bg-muted text-muted-foreground shadow-2xs">
            <Code2 className="size-3.5" />
          </div>

          {/* Role Title */}
          <h4 className="text-base font-semibold text-foreground tracking-tight">
            {position.title}
          </h4>
        </div>

        {/* Collapse Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-muted-foreground hover:text-foreground transition-colors p-0.5 rounded"
          aria-label="Toggle details"
        >
          {expanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
        </button>
      </div>

      {/* Sub-Metadata Line */}
      <div className="mt-1 flex flex-wrap items-center gap-2 pl-8.5 text-xs text-muted-foreground font-mono">
        <span>{position.employmentType}</span>
        <span className="text-line">|</span>
        <div className="flex items-center gap-1">
          <span>{position.start}</span>
          <span>—</span>
          {position.isOngoing ? (
            <span className="text-foreground font-semibold">∞</span>
          ) : (
            <span>{position.end}</span>
          )}
        </div>
        <span className="text-line">|</span>
        <span>{position.duration}</span>
      </div>

      {/* Expanded Bullet Points & Skills */}
      {expanded && (
        <div className="mt-3 pl-8.5 space-y-3">
          {/* Bullet Points */}
          <ul className="space-y-2 text-xs text-foreground/90 leading-relaxed">
            {position.descriptionBulletPoints.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="size-1 rounded-full bg-muted-foreground/60 mt-1.5 shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Bottom Skill Pill Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {position.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full border border-line bg-zinc-100 dark:bg-zinc-900/90 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
