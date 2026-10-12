"use client";

import React, { useState } from "react";
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/components/panel";
import { EDUCATION } from "@/features/portfolio/data/education";
import { ChevronDown, GraduationCap, Infinity as InfinityIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function EducationShowcase() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle>
          <a href="#education">Education</a>
        </PanelTitle>
      </PanelHeader>

      {EDUCATION.map((item, index) => (
        <EducationRow key={item.id} item={item} defaultOpen={index === 0} />
      ))}
    </Panel>
  );
}

function EducationRow({
  item,
  defaultOpen,
}: {
  item: (typeof EDUCATION)[number];
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const isOngoing = !item.period.end;

  return (
    <div className="screen-line-top border-line p-4 pr-2">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full items-start gap-3 text-left"
      >
        <span className="flex size-6 shrink-0 items-center justify-center border border-line bg-muted text-muted-foreground">
          <GraduationCap className="size-4" />
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="text-base font-medium text-foreground">{item.school}</h3>
          <div className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-0.5 font-mono tabular-nums">
              <span>{item.period.start}</span>
              <span>—</span>
              {isOngoing ? (
                <InfinityIcon className="size-4" aria-label="Present" />
              ) : (
                <span>{item.period.end}</span>
              )}
            </span>
            {item.degree && (
              <>
                <span className="text-line">|</span>
                <span>{item.degree}</span>
              </>
            )}
            {item.fieldOfStudy && (
              <>
                <span className="text-line">|</span>
                <span>{item.fieldOfStudy}</span>
              </>
            )}
          </div>
        </div>

        <ChevronDown
          className={cn(
            "mt-1 size-4 shrink-0 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div className="mt-3 space-y-3 pl-9">
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {item.description.map((line) => (
              <li key={line} className="leading-relaxed">
                • {line}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="border border-line px-2 py-0.5 font-mono text-[10px] text-foreground/80"
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
