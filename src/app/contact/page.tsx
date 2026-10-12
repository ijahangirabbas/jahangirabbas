"use client";

import React, { useState } from "react";
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/components/panel";
import { USER } from "@/features/portfolio/data/user";
import { CheckCircle2, Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you! Your message has been sent. I will respond within 24 hours.");
  };

  return (
    <div className="mx-auto md:max-w-3xl">
      <div className="screen-line-bottom border-x border-line px-4 py-6">
        <h1 className="font-heading text-3xl font-medium tracking-tight text-foreground">
          Contact & Freelance Intake
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Available for freelance projects, AI systems advisory, RAG pipeline development, and full-stack web applications.
        </p>
      </div>

      <div className="grid sm:grid-cols-2">
        <Panel className="sm:border-r-0">
          <PanelHeader>
            <PanelTitle className="text-xl">Direct Client Intake</PanelTitle>
          </PanelHeader>
          <PanelContent>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center gap-2">
                <CheckCircle2 className="size-10 text-emerald-500" />
                <h3 className="text-sm font-semibold text-foreground">Message Received!</h3>
                <p className="text-xs text-muted-foreground">I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-muted-foreground mb-1">Your Name</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full border border-line bg-background px-3 py-1.5 text-xs text-foreground outline-none focus:border-foreground"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-muted-foreground mb-1">Your Email</label>
                  <input
                    required
                    type="email"
                    placeholder="name@company.com"
                    className="w-full border border-line bg-background px-3 py-1.5 text-xs text-foreground outline-none focus:border-foreground"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-muted-foreground mb-1">Project Scope</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your AI application, RAG pipeline, or full-stack web project requirements..."
                    className="w-full border border-line bg-background px-3 py-1.5 text-xs text-foreground outline-none focus:border-foreground resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-1.5 border border-foreground bg-foreground px-4 py-2 text-xs font-semibold text-background hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <span>Send Briefing</span>
                  <Send className="size-3.5" />
                </button>
              </form>
            )}
          </PanelContent>
        </Panel>

        <Panel className="screen-line-top-none sm:screen-line-top">
          <PanelHeader>
            <PanelTitle className="text-xl">Jeem Labs & Direct Channels</PanelTitle>
          </PanelHeader>
          <PanelContent className="flex flex-col gap-0 p-0 text-xs">
            <div className="border-b border-line p-4">
              <span className="font-mono text-[10px] uppercase text-muted-foreground">Primary Brand</span>
              <p className="mt-1 font-semibold text-foreground">{USER.company.name}</p>
              <a
                href={USER.company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 text-foreground link-underline block"
              >
                {USER.company.website.replace("https://", "")}
              </a>
            </div>

            <div className="p-4">
              <span className="font-mono text-[10px] uppercase text-muted-foreground">Freelancing Profiles</span>
              <div className="mt-1 flex flex-col gap-1">
                <a href={USER.freelancer} target="_blank" rel="noopener noreferrer" className="text-foreground link-underline">
                  • Freelancer Profile
                </a>
                <a href={USER.github} target="_blank" rel="noopener noreferrer" className="text-foreground link-underline">
                  • GitHub Repositories
                </a>
                <a href={USER.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground link-underline">
                  • LinkedIn Network
                </a>
              </div>
            </div>
          </PanelContent>
        </Panel>
      </div>
    </div>
  );
}
