"use client";

import React, { useState } from "react";
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/panel";
import { CERTIFICATIONS } from "@/features/portfolio/data/certifications";
import { ArrowUpRight, BadgeCheck, ChevronDown } from "lucide-react";

const MAX_VISIBLE = 4;

export function CertificationsShowcase() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? CERTIFICATIONS : CERTIFICATIONS.slice(0, MAX_VISIBLE);
  const remaining = CERTIFICATIONS.length - MAX_VISIBLE;

  return (
    <Panel id="certs">
      <PanelHeader>
        <PanelTitle>
          <a href="#certs">Certifications</a>
          <PanelTitleSup>({CERTIFICATIONS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <ul>
        {visible.map((item) => (
          <li key={item.id} className="screen-line-top border-line">
            <CertificationRow item={item} />
          </li>
        ))}
      </ul>

      {remaining > 0 && (
        <div className="screen-line-top flex items-center justify-center border-line py-3">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>{expanded ? "Show less" : `Show ${remaining} more`}</span>
            <ChevronDown className={`size-3.5 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        </div>
      )}
    </Panel>
  );
}

function CertificationRow({ item }: { item: (typeof CERTIFICATIONS)[number] }) {
  const inner = (
    <div className="flex items-center gap-3 px-4 py-3 hover:bg-muted/40 transition-colors">
      <span className="flex size-6 shrink-0 items-center justify-center text-muted-foreground">
        <BadgeCheck className="size-4" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-foreground">{item.title}</p>
        <p className="text-xs text-muted-foreground">
          {item.issuer}
          <span className="mx-1.5 text-line">·</span>
          <span className="font-mono">{item.issueDate}</span>
        </p>
      </div>
      {item.credentialURL && (
        <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" />
      )}
    </div>
  );

  if (item.credentialURL) {
    return (
      <a href={item.credentialURL} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    );
  }

  return inner;
}
