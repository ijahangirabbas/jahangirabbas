import React from "react";
import { USER } from "@/features/portfolio/data/user";
import { SiteFooterInteractiveLogotype } from "./site-footer-brand";
import { cn } from "@/lib/utils";
import { FileText, Github, Linkedin, ShieldCheck, Twitter } from "lucide-react";

export function SiteFooter() {
  const xHref = USER.twitter;
  const githubHref = USER.github;
  const linkedinHref = USER.linkedin;

  return (
    <footer className="max-w-screen overflow-x-clip px-2">
      <div className="mx-auto border-x border-line md:max-w-3xl">
        <div className="screen-line-top screen-line-bottom">
          <div className="stripe-divider h-12" />
        </div>

        <dl className="flex flex-col gap-4 py-8 font-mono [&_dd]:text-sm [&_dt]:text-right [&_dt]:text-sm [&_dt]:text-muted-foreground [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2">
          <Item>
            <dt>Crafted by</dt>
            <dd>
              <a
                className="link-underline"
                href={xHref}
                target="_blank"
                rel="noopener"
              >
                @{USER.name.replace(/\s+/g, "").toLowerCase()}
              </a>
            </dd>
          </Item>

          <Item>
            <dt>Inspired by</dt>
            <dd>
              <ul>
                <li><a
                    className="link-underline"
                    href=""
                    target="_blank"
                    rel="noopener"
                  >
                    Chanhdai
                  </a></li>
                {/* <li>shadcn/ui</li>
                <li>Tailwind CSS</li>
                <li>Vercel</li>
                <li>Evil Charts</li>
                <li>Devouring Details</li>
                <li>Skiper UI</li> 
                <li>Making Software</li> */}
              </ul>
            </dd>
          </Item>

          <Item>
            <dt>Deployed on</dt>
            <dd>Vercel</dd>
          </Item>

          <Item>
            <dt>Analytics</dt>
            <dd>
              <ul>
                <li>
                  <a
                    className="link-underline"
                    href="https://openpanel.dev?utm_source=jahangir&utm_medium=referral&utm_campaign=footer"
                    target="_blank"
                    rel="noopener"
                  >
                    OpenPanel
                  </a>
                </li>
                
              </ul>
            </dd>
          </Item>

          <Item>
            <dt>Source code</dt>
            <dd>
              <a
                className="link-underline"
                href={githubHref}
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
            </dd>
          </Item>

          <Item>
            <dt>License</dt>
            <dd>
              <a
                className="link-underline"
                href="https://github.com/ncdai/chanhdai.com/blob/main/LICENSE"
                target="_blank"
                rel="noopener"
              >
                MIT
              </a>
            </dd>
          </Item>
        </dl>

        <div className="screen-line-top screen-line-bottom flex w-full before:z-[1] after:z-[1]">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-line bg-background px-4">
            <p> © {new Date().getFullYear()} {USER.name}. All Rights Reserved</p>
            <Separator />
            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href={xHref}
              target="_blank"
              rel="noopener"
              aria-label="X Profile"
            >
              <Twitter className="size-4" />
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href={githubHref}
              target="_blank"
              rel="noopener"
              aria-label="GitHub Profile"
            >
              <Github className="size-4" />
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href={linkedinHref}
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="size-4" />
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href="/llm.txt"
              target="_blank"
              rel="noopener"
              aria-label="llm.txt summary"
              title="llm.txt"
            >
              <FileText className="size-4" />
            </a>


            
          </div>
        </div>
      </div>

      <SiteFooterInteractiveLogotype />

      <div className="h-(--fade-bottom-height)" />
      <div className="pb-[env(safe-area-inset-bottom,0)]" />
    </footer>
  );
}

function Separator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex h-11 w-px bg-line", className)} {...props} />;
}

function Item({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("grid grid-cols-2 gap-4", className)} {...props} />;
}
