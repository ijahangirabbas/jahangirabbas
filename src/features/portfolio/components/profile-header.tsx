"use client";

import React, { useState, useEffect } from "react";
import { USER } from "@/features/portfolio/data/user";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function ProfileHeader() {
  const [flipIndex, setFlipIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFlipIndex((prev) => (prev + 1) % USER.flipSentences.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="screen-line-top screen-line-bottom flex flex-col gap-4 border-x border-line px-4 py-6">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 border border-line bg-muted/40 px-2.5 py-0.5 text-xs text-muted-foreground">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[11px]">{USER.availability}</span>
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        <h1 className="font-heading text-[2rem]/none font-medium tracking-tight text-foreground">
          {USER.displayName}
        </h1>

        <div className="screen-line-top h-6 overflow-hidden border-line pt-1 text-sm font-medium text-muted-foreground font-mono">
          <p key={flipIndex} className="animate-in slide-in-from-bottom-2 fade-in duration-300">
            {USER.flipSentences[flipIndex]}
          </p>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
          {USER.bio}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href="/contact"
          className="inline-flex items-center gap-1.5 border border-foreground bg-foreground px-3.5 py-1.5 text-xs font-medium text-background hover:opacity-90 transition-opacity"
        >
          <span>Hire for Freelance</span>
          <ArrowUpRight className="size-3.5" />
        </a>

        {/* <a
          href={USER.company.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 border border-line px-3.5 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition-colors"
        >
          <Sparkles className="size-3.5 text-muted-foreground" />
          <span>Explore Jeem Labs</span>
        </a> */}
      </div>
    </div>
  );
}
