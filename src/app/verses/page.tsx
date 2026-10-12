import React from "react";
import {
  Panel,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
} from "@/components/panel";
import { POETIC_VERSES } from "@/features/portfolio/data/verses";
import { Feather } from "lucide-react";

export default function VersesPage() {
  return (
    <div className="mx-auto md:max-w-3xl">
      <div className="screen-line-bottom border-x border-line px-4 py-6">
        <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs uppercase tracking-wider mb-1">
          <Feather className="size-4" />
          <span>Poetry & Philosophical Reflections</span>
        </div>
        <h1 className="font-heading text-3xl font-medium tracking-tight text-foreground font-serif italic">
          Verses of Thought
        </h1>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-lg">
          A personal collection of poetic verses, reflections on software craftsmanship, engineering philosophy, and the beauty of creation.
        </p>
      </div>

      <div className="flex flex-col">
        {POETIC_VERSES.map((verse) => (
          <Panel key={verse.id} className="screen-line-top-none first:screen-line-top">
            <PanelHeader>
              <PanelTitle className="text-xl">{verse.title}</PanelTitle>
              <PanelDescription className="py-2 text-sm">
                {verse.theme} • {verse.date}
              </PanelDescription>
            </PanelHeader>
            <PanelContent>
              <div className="font-serif text-sm leading-relaxed text-foreground/90 space-y-2">
                {verse.lines.map((line, idx) => (
                  <p key={idx} className="italic tracking-wide">
                    {line}
                  </p>
                ))}
              </div>
              <div className="mt-4 flex justify-end">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  — Jahangir Abbas
                </span>
              </div>
            </PanelContent>
          </Panel>
        ))}
      </div>
    </div>
  );
}
