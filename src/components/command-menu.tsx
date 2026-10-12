"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  BookOpen,
  Briefcase,
  Code,
  Cpu,
  Feather,
  FileText,
  Github,
  Globe,
  Home,
  Layers,
  Linkedin,
  Mail,
  Search,
  Sparkles,
  Terminal,
} from "lucide-react";
import { PROJECTS } from "@/features/portfolio/data/projects";
import { USER } from "@/features/portfolio/data/user";

interface CommandMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  if (!open) return null;

  const runCommand = (command: () => void) => {
    onOpenChange(false);
    command();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-20 backdrop-blur-xs p-4">
      <div
        className="fixed inset-0"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-xl border border-line bg-card shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        <Command className="w-full">
          <div className="flex items-center border-b border-line px-3 py-2">
            <Search className="mr-2 size-4 shrink-0 text-muted-foreground" />
            <Command.Input
              placeholder="Type a command or search projects..."
              className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>

          <Command.List className="max-h-80 overflow-y-auto p-2 text-xs">
            <Command.Empty className="py-6 text-center text-muted-foreground">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigation" className="px-2 py-1.5 font-mono text-[10px] uppercase text-muted-foreground">
              <Command.Item
                onSelect={() => runCommand(() => router.push("/"))}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-foreground hover:bg-accent aria-selected:bg-accent"
              >
                <Home className="size-4 text-primary" />
                <span>Home Page</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/projects"))}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-foreground hover:bg-accent aria-selected:bg-accent"
              >
                <Code className="size-4 text-primary" />
                <span>All Projects</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/architecture"))}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-foreground hover:bg-accent aria-selected:bg-accent"
              >
                <Cpu className="size-4 text-primary" />
                <span>RAG & Worker Architecture</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/verses"))}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-foreground hover:bg-accent aria-selected:bg-accent"
              >
                <Feather className="size-4 text-primary" />
                <span>Poetic Verses (/verses)</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/blog"))}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-foreground hover:bg-accent aria-selected:bg-accent"
              >
                <BookOpen className="size-4 text-primary" />
                <span>Engineering Blog (/blog)</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/contact"))}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-foreground hover:bg-accent aria-selected:bg-accent"
              >
                <Mail className="size-4 text-primary" />
                <span>Contact & Freelance Intake</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Projects" className="mt-2 px-2 py-1.5 font-mono text-[10px] uppercase text-muted-foreground">
              {PROJECTS.map((project) => (
                <Command.Item
                  key={project.id}
                  onSelect={() => runCommand(() => router.push(`/projects/${project.id}`))}
                  className="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-foreground hover:bg-accent aria-selected:bg-accent"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-3.5 text-primary shrink-0" />
                    <span className="font-medium">{project.title}</span>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">{project.category}</span>
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Social & Links" className="mt-2 px-2 py-1.5 font-mono text-[10px] uppercase text-muted-foreground">
              <Command.Item
                onSelect={() => runCommand(() => window.open(USER.company.website, "_blank"))}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-foreground hover:bg-accent aria-selected:bg-accent"
              >
                <Globe className="size-4 text-primary" />
                <span>Jeem Labs Website (thejeemlabs.com)</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => window.open(USER.github, "_blank"))}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-foreground hover:bg-accent aria-selected:bg-accent"
              >
                <Github className="size-4 text-primary" />
                <span>GitHub Profile</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => window.open(USER.linkedin, "_blank"))}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-foreground hover:bg-accent aria-selected:bg-accent"
              >
                <Linkedin className="size-4 text-primary" />
                <span>LinkedIn Profile</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => window.open(USER.freelancer, "_blank"))}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-foreground hover:bg-accent aria-selected:bg-accent"
              >
                <Briefcase className="size-4 text-primary" />
                <span>Freelancer Profile</span>
              </Command.Item>
            </Command.Group>
          </Command.List>

          <div className="flex items-center justify-between border-t border-line bg-muted/30 px-3 py-2 text-[10px] font-mono text-muted-foreground">
            <span>Press ESC to exit</span>
            <div className="flex items-center gap-2">
              <kbd className="rounded border border-line bg-background px-1">↑↓</kbd> navigate
              <kbd className="rounded border border-line bg-background px-1">↵</kbd> select
            </div>
          </div>
        </Command>
      </div>
    </div>
  );
}
