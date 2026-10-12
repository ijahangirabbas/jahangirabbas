import React from "react";
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/panel";
import { getInsights, type InsightsResponse } from "@/features/portfolio/data/insights";

function formatDuration(seconds: number): string {
  const totalSeconds = Math.round(seconds);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  const parts: string[] = [];
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (secs > 0 || parts.length === 0) parts.push(`${secs}s`);
  return parts.join(" ");
}

function formatDayMonth(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return `${String(d.getDate()).padStart(2, "0")}.${String(d.getMonth() + 1).padStart(2, "0")}`;
}

export async function InsightsShowcase() {
  const data = await getInsights();

  if (!data) {
    return <InsightsUnavailable />;
  }

  return <InsightsPanel data={data} />;
}

function InsightsPanel({ data }: { data: InsightsResponse }) {
  const max = Math.max(
    1,
    ...data.series.map((s) => Math.max(s.unique_visitors, s.total_sessions))
  );

  // Keep chart readable: last ~28 points
  const series = data.series.slice(-28);

  return (
    <Panel id="insights">
      <PanelHeader>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <PanelTitle>
            <a href="#insights">Insights</a>
            <PanelTitleSup>
              ({formatDayMonth(data.startDate)} – {formatDayMonth(data.endDate)})
            </PanelTitleSup>
          </PanelTitle>
          {data.isDemo && (
            <span className="border border-line bg-muted/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground select-none">
              Demo Preview
            </span>
          )}
        </div>
      </PanelHeader>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-2 md:grid-cols-4">
          <div className="border-r border-line" />
          <div className="border-r border-line max-md:hidden" />
          <div className="border-r border-line max-md:hidden" />
        </div>

        <dl className="grid grid-cols-2 md:grid-cols-4">
          <Metric
            label="Unique visitors"
            value={data.summary.unique_visitors.toLocaleString()}
          />
          <Metric
            label="Sessions"
            value={data.summary.total_sessions.toLocaleString()}
          />
          <Metric
            label="Views"
            value={data.summary.total_screen_views.toLocaleString()}
          />
          <Metric
            label="Session duration"
            value={formatDuration(data.summary.avg_session_duration)}
          />
        </dl>
      </div>

      <PanelContent className="screen-line-top border-line">
        {series.length > 0 ? (
          <>
            <div className="flex h-32 items-end gap-1 overflow-x-auto sm:gap-1.5">
              {series.map((point) => (
                <div
                  key={point.date}
                  className="flex min-w-3 flex-1 flex-col items-center gap-1"
                  title={`${point.date}: ${point.unique_visitors} visitors, ${point.total_sessions} sessions`}
                >
                  <div className="flex h-24 w-full items-end justify-center gap-0.5">
                    <span
                      className="w-1 bg-foreground/85 sm:w-1.5"
                      style={{
                        height: `${(point.unique_visitors / max) * 100}%`,
                      }}
                    />
                    <span
                      className="w-1 bg-muted-foreground/45 sm:w-1.5"
                      style={{
                        height: `${(point.total_sessions / max) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-4 font-mono text-[10px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2 bg-foreground/85" /> Visitors
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2 bg-muted-foreground/45" /> Sessions
              </span>
              <span className="ml-auto text-zinc-500">FIG_002</span>
            </div>
          </>
        ) : (
          <p className="py-10 text-center text-sm text-muted-foreground">
            No insights series available yet.
          </p>
        )}
      </PanelContent>
    </Panel>
  );
}

function InsightsUnavailable() {
  return (
    <Panel id="insights">
      <PanelHeader>
        <PanelTitle>
          <a href="#insights">Insights</a>
        </PanelTitle>
      </PanelHeader>
      <PanelContent>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Live analytics are not available yet. Set{" "}
          <code className="font-mono text-xs">OPENPANEL_PROJECT_ID</code> and use a{" "}
          <strong className="text-foreground">read</strong> or{" "}
          <strong className="text-foreground">root</strong> OpenPanel client (the default write client cannot query Insights).
        </p>
      </PanelContent>
    </Panel>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-4 py-4">
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="mt-1 font-heading text-2xl font-medium tracking-tight tabular-nums text-foreground">
        {value}
      </dd>
    </div>
  );
}

export function InsightsSkeleton() {
  return <Panel className="min-h-72 animate-pulse bg-muted/20" />;
}
