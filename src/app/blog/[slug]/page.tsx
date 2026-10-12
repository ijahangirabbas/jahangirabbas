import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/features/portfolio/data/blog";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto md:max-w-3xl">
      <div className="screen-line-bottom border-x border-line px-4 py-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground font-mono"
        >
          <ArrowLeft className="size-3.5" />
          <span>Back to Articles</span>
        </Link>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
          <span className="border border-line px-2 py-0.5">{post.category}</span>
          <span className="flex items-center gap-1">
            <Calendar className="size-3.5" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" />
            {post.readTime}
          </span>
        </div>

        <h1 className="mt-3 font-heading text-3xl font-medium tracking-tight text-foreground">
          {post.title}
        </h1>
        <p className="mt-1 text-sm font-medium text-muted-foreground font-mono">{post.subtitle}</p>
      </div>

      <article className="screen-line-bottom border-x border-line px-4 py-6 leading-relaxed text-sm text-foreground/90 space-y-4">
        {post.content.split("\n\n").map((paragraph, idx) => {
          if (paragraph.startsWith("### ")) {
            return (
              <h3 key={idx} className="text-base font-medium text-foreground pt-3 border-t border-line">
                {paragraph.replace("### ", "")}
              </h3>
            );
          }
          if (paragraph.startsWith("```")) {
            return (
              <pre key={idx} className="border border-line bg-muted/40 p-3 font-mono text-[11px] overflow-x-auto text-foreground">
                <code>{paragraph.replace(/```[a-z]*/g, "").trim()}</code>
              </pre>
            );
          }
          return <p key={idx}>{paragraph}</p>;
        })}
      </article>
    </div>
  );
}
