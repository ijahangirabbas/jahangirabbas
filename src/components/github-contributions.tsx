"use client";

import React, { useEffect, useState } from "react";
import {
  Panel,
  PanelAction,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
} from "@/components/panel";
import { Github, Loader2 } from "lucide-react";
import { USER } from "@/features/portfolio/data/user";

type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export function GitHubContributions() {
  const [selectedYear, setSelectedYear] = useState("2026");
  const [loading, setLoading] = useState(false);
  const [totalContributions, setTotalContributions] = useState(1428);
  
  // Default grid matrix (44 weeks x 7 days)
  const [weeksData, setWeeksData] = useState<number[][]>(() =>
    Array.from({ length: 44 }, (_, wIndex) =>
      Array.from({ length: 7 }, (_, dIndex) => {
        const seed = (wIndex * 7 + dIndex * 13) % 17;
        let count = 0;
        if (seed > 13) count = 4;
        else if (seed > 9) count = 3;
        else if (seed > 5) count = 2;
        else if (seed > 2) count = 1;
        return count;
      })
    )
  );

  const githubUsername = USER.github.split("/").pop() || "jahangir-abbas";

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        setLoading(true);
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=${selectedYear}`);
        if (!res.ok) return;
        const data = await res.json();

        if (data.total?.[selectedYear]) {
          setTotalContributions(data.total[selectedYear]);
        }

        if (Array.isArray(data.contributions) && data.contributions.length > 0) {
          const days: ContributionDay[] = data.contributions;
          const weeks: number[][] = [];
          for (let i = 0; i < days.length; i += 7) {
            weeks.push(days.slice(i, i + 7).map((d) => d.level));
          }
          if (weeks.length > 0) {
            setWeeksData(weeks.slice(-44));
          }
        }
      } catch (err) {
        // Fallback to default matrix on network error
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, [selectedYear, githubUsername]);

  return (
    <Panel className="screen-line-top-none">
      <PanelHeader>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <PanelTitle>GitHub Activity</PanelTitle>
          <PanelAction>
            <div className="flex items-center gap-1 font-mono text-xs">
              {["2026", "2025", "2024"].map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-2 py-0.5 border transition-colors ${
                    selectedYear === year
                      ? "border-primary bg-primary text-primary-foreground font-semibold"
                      : "border-line text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </PanelAction>
        </div>
        <PanelDescription>
          {totalContributions} contributions in {selectedYear}
        </PanelDescription>
      </PanelHeader>

      <PanelContent className="flex flex-col gap-4">
        <div className="overflow-x-auto pb-2 scrollbar-none relative">
          {loading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/60 backdrop-blur-xs">
              <Loader2 className="size-5 animate-spin text-primary" />
            </div>
          )}

          <div className="flex gap-1 min-w-[620px]">
            {weeksData.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1">
                {week.map((level, dIdx) => {
                  let bgClass = "bg-muted/40 border-line/40";
                  if (level === 1) bgClass = "bg-emerald-950/60 border-emerald-800/40";
                  if (level === 2) bgClass = "bg-emerald-800/80 border-emerald-700/60";
                  if (level === 3) bgClass = "bg-emerald-600 border-emerald-500";
                  if (level === 4) bgClass = "bg-emerald-400 border-emerald-300";

                  return (
                    <div
                      key={dIdx}
                      className={`size-2.5 rounded-[2px] border ${bgClass} transition-all hover:scale-125`}
                      title={`Level ${level} activity`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3 text-xs text-muted-foreground">
          <a
            href={USER.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            <Github className="size-3.5" />
            <span>@{githubUsername} on GitHub</span>
          </a>

          <div className="flex items-center gap-1.5 font-mono text-[10px]">
            <span>Less</span>
            <span className="size-2.5 rounded-[2px] bg-muted/40 border border-line" />
            <span className="size-2.5 rounded-[2px] bg-emerald-950/60" />
            <span className="size-2.5 rounded-[2px] bg-emerald-800/80" />
            <span className="size-2.5 rounded-[2px] bg-emerald-600" />
            <span className="size-2.5 rounded-[2px] bg-emerald-400" />
            <span>More</span>
          </div>
        </div>
      </PanelContent>
    </Panel>
  );
}
