"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HEADER_VERSES } from "@/features/portfolio/data/verses";
import { ThemeToggle } from "./theme-toggle";
import { SoundToggle } from "./sound-toggle";
import { Command, Feather } from "lucide-react";
import { USER } from "@/features/portfolio/data/user";
import { JamLogoMark } from "./jam-logo-mark";

interface SiteHeaderProps {
  onOpenCommandMenu?: () => void;
}

export function SiteHeader({ onOpenCommandMenu }: SiteHeaderProps) {
  const [verseIndex, setVerseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVerseIndex((prev) => (prev + 1) % HEADER_VERSES.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const currentVerse = HEADER_VERSES[verseIndex];

  return (
    <header className="sticky top-0 z-50 max-w-screen overflow-x-clip bg-background px-2">
      {/* Centered verses banner */}
      <div className="screen-line-bottom bg-muted/40 py-1.5 text-center text-xs text-muted-foreground">
        <div className="mx-auto flex md:max-w-3xl items-center justify-center gap-2 border-x border-line px-4">
          <Feather className="size-3 shrink-0 text-muted-foreground" />
          <span className="truncate italic font-serif text-foreground/90">
            &ldquo;{currentVerse.text}&rdquo;
          </span>
          <span className="hidden text-line sm:inline">•</span>
          <span className="hidden text-[10px] uppercase tracking-wider font-mono text-muted-foreground/80 sm:inline">
            {currentVerse.reference}
          </span>
        </div>
      </div>

      <div className="screen-line-top screen-line-bottom mx-auto flex h-(--header-height) items-center justify-between gap-2 border-x border-line px-2 sm:gap-4 md:max-w-3xl">
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Home">
          <JamLogoMark className="size-8 group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
              {USER.displayName}
            </span>
            {/* <span className="text-[10px] text-muted-foreground font-mono">Jeem Labs</span> */}
          </div>
        </Link>

        <nav className="flex items-center">
          <Link
            href="/verses"
            className="font-serif italic text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Verses
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCommandMenu}
            className="flex items-center gap-1.5 border border-line bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground hover:border-foreground/30 hover:text-foreground transition-all"
            aria-label="Open Command Menu"
          >
            <Command className="size-3.5" />
            <span className="hidden sm:inline font-mono text-[10px]">Cmd+K</span>
          </button>
          <SoundToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
