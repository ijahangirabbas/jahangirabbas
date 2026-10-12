import React from "react";
import { USER } from "@/features/portfolio/data/user";
import { Panel, PanelContent } from "@/components/panel";
import { Briefcase, Github, Globe, Linkedin, Mail, Twitter } from "lucide-react";

const SOCIALS = [
  {
    name: "Jeem Labs",
    href: USER.company.website,
    icon: Globe,
  },
  {
    name: "GitHub",
    href: USER.github,
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: USER.linkedin,
    icon: Linkedin,
  },
  {
    name: "X",
    href: USER.twitter,
    icon: Twitter,
  },
  {
    name: "Freelancer",
    href: USER.freelancer,
    icon: Briefcase,
  },
  {
    name: "Email",
    href: `mailto:${USER.email}`,
    icon: Mail,
  },
] as const;

export function SocialLinks() {
  return (
    <Panel className="screen-line-top-none">
      <h2 className="sr-only">Social Profiles</h2>
      <PanelContent>
        <ul className="flex flex-wrap gap-2">
          {SOCIALS.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="inline-flex size-9 items-center justify-center border border-line text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                aria-label={item.name}
                title={item.name}
              >
                <item.icon className="size-4" />
                <span className="sr-only">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </PanelContent>
    </Panel>
  );
}
