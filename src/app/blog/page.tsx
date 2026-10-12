import React from "react";
import Link from "next/link";
import {
  Panel,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
} from "@/components/panel";
import { BLOG_POSTS } from "@/features/portfolio/data/blog";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="mx-auto md:max-w-3xl">
      <div className="screen-line-bottom border-x border-line px-4 py-6">
        <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs uppercase tracking-wider mb-1">
          <BookOpen className="size-4" />
          <span>Engineering Writings & Notes</span>
        </div>
        <h1 className="font-heading text-3xl font-medium tracking-tight text-foreground">
          Technical Articles
        </h1>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-lg">
          Deep dives into RAG retrieval latency, multi-LLM consensus architectures, prompt engineering patterns, and production system guardrails.
        </p>
      </div>

      <div className="flex flex-col">
        {BLOG_POSTS.map((post) => (
          <Panel key={post.slug} className="screen-line-top-none first:screen-line-top">
            <PanelHeader>
              <PanelTitle className="text-xl">{post.title}</PanelTitle>
              <PanelDescription className="py-2 text-sm">
                {post.category} • {post.date}
              </PanelDescription>
            </PanelHeader>
            <PanelContent className="flex flex-col gap-3">
              <p className="text-xs font-mono text-muted-foreground font-medium">{post.subtitle}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{post.excerpt}</p>

              <div className="flex items-center justify-between border-t border-line pt-3 text-xs">
                <div className="flex items-center gap-1.5 font-mono text-muted-foreground">
                  <Clock className="size-3.5" />
                  <span>{post.readTime}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-1 font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </PanelContent>
          </Panel>
        ))}
      </div>
    </div>
  );
}
