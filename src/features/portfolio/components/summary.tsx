"use client";

import React, { useEffect, useState } from "react";
import { Panel, PanelContent } from "@/components/panel";
import { USER } from "@/features/portfolio/data/user";
import {
  BriefcaseBusiness,
  CodeXml,
  Globe,
  Lightbulb,
  Link as LinkIcon,
  Mail,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Summary() {
  return (
    <Panel id="summary" className="screen-line-top-none screen-line-bottom-none">
      <h2 className="sr-only">Summary</h2>

      <PanelContent className="relative grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
        {USER.jobs.map((job) => (
          <IntroRow
            key={`${job.title}-${job.company}`}
            className="sm:col-span-2"
            icon={getJobIcon(job.title)}
          >
            {job.title} <span aria-label="at">@</span>{" "}
            <a
              href={job.experienceId ? `#experience-${job.experienceId}` : job.website}
              className="link-underline font-medium"
              {...(job.experienceId
                ? {}
                : { target: "_blank", rel: "noopener noreferrer" })}
            >
              {job.company}
            </a>
          </IntroRow>
        ))}

        <IntroRow icon={<MapPin className="size-4" />}>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            {USER.address}
          </a>
        </IntroRow>

        <LocalTimeRow timeZone={USER.timeZone} />

        <IntroRow icon={<Phone className="size-4" />}>
          <a href={`tel:${USER.phone.replace(/\s/g, "")}`} className="link-underline">
            {USER.phone}
          </a>
        </IntroRow>

        <IntroRow icon={<Mail className="size-4" />}>
          <a href={`mailto:${USER.email}`} className="link-underline">
            {USER.email}
          </a>
        </IntroRow>

        <IntroRow icon={<LinkIcon className="size-4" />}>
          <a
            href={USER.website}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            {USER.website.replace(/^https?:\/\//, "")}
          </a>
        </IntroRow>

        <IntroRow icon={<UserRound className="size-4" />}>{USER.pronouns}</IntroRow>

        <div
          className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,var(--line)_4px,transparent_2px)] bg-size-[1px_6px] bg-repeat-y sm:block"
          aria-hidden
        />
      </PanelContent>
    </Panel>
  );
}

function IntroRow({
  icon,
  className,
  children,
}: {
  icon: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex items-center gap-4 font-mono text-sm", className)}>
      <div className="flex size-6 shrink-0 items-center justify-center rounded-md border border-muted-foreground/15 bg-muted ring-1 ring-border/50 ring-offset-1 ring-offset-background dark:ring-line [&_svg]:text-muted-foreground">
        {icon}
      </div>
      <p className="text-balance text-foreground">{children}</p>
    </div>
  );
}

function LocalTimeRow({ timeZone }: { timeZone: string }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(now);

  return (
    <IntroRow icon={<Globe className="size-4" />}>
      {time} ({timeZone.replace(/_/g, " ")})
    </IntroRow>
  );
}

function getJobIcon(title: string) {
  if (/(developer|engineer)/i.test(title)) return <CodeXml className="size-4" />;
  if (/(founder|co-founder)/i.test(title)) return <Lightbulb className="size-4" />;
  return <BriefcaseBusiness className="size-4" />;
}
