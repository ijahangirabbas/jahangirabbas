import { unstable_cache } from "next/cache";

export type InsightsSummary = {
  unique_visitors: number;
  total_sessions: number;
  total_screen_views: number;
  avg_session_duration: number;
};

export type InsightsSeriesItem = {
  date: string;
  unique_visitors: number;
  total_sessions: number;
};

export type InsightsResponse = {
  summary: InsightsSummary;
  series: InsightsSeriesItem[];
  startDate: string;
  endDate: string;
  isDemo?: boolean;
};

function hasInsightsConfig() {
  return Boolean(
    process.env.OPENPANEL_PROJECT_ID &&
      process.env.OPENPANEL_CLIENT_ID &&
      process.env.OPENPANEL_CLIENT_SECRET
  );
}

const MOCK_INSIGHTS: InsightsResponse = {
  summary: {
    unique_visitors: 1248,
    total_sessions: 2450,
    total_screen_views: 7890,
    avg_session_duration: 142,
  },
  series: Array.from({ length: 28 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (28 - i));
    const isoDate = d.toISOString().split("T")[0];
    const visitors = Math.floor(30 + Math.sin(i * 0.5) * 15 + Math.random() * 10);
    const sessions = Math.floor(visitors * (1.3 + Math.random() * 0.4));
    return {
      date: isoDate,
      unique_visitors: visitors,
      total_sessions: sessions,
    };
  }),
  startDate: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
  endDate: new Date().toISOString().split("T")[0],
  isDemo: true,
};

async function fetchInsightsOverview(): Promise<InsightsResponse | null> {
  if (!hasInsightsConfig()) {
    console.warn(
      "[insights] Missing OPENPANEL_PROJECT_ID / CLIENT_ID / CLIENT_SECRET. Using demo fallback dataset."
    );
    return MOCK_INSIGHTS;
  }

  try {
    const res = await fetch(
      `https://api.openpanel.dev/insights/${process.env.OPENPANEL_PROJECT_ID}/overview`,
      {
        headers: {
          "openpanel-client-id": process.env.OPENPANEL_CLIENT_ID!,
          "openpanel-client-secret": process.env.OPENPANEL_CLIENT_SECRET!,
        },
        next: { revalidate: 86400 },
      }
    );

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.warn(`[insights] OpenPanel overview failed (${res.status}):`, body);
      return MOCK_INSIGHTS;
    }

    const data = (await res.json()) as InsightsResponse;
    return { ...data, isDemo: false };
  } catch (error) {
    console.warn("[insights] OpenPanel fetch error, falling back to demo data:", error);
    return MOCK_INSIGHTS;
  }
}

export const getInsights = unstable_cache(
  fetchInsightsOverview,
  ["openpanel-insights"],
  { revalidate: 86400 }
);
