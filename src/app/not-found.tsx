import React from "react";
import Link from "next/link";
import { Terminal, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto md:max-w-3xl">
      <div className="screen-line-top screen-line-bottom flex flex-col items-center justify-center border-x border-line px-4 py-16 text-center">
        <div className="mb-4 flex size-12 items-center justify-center border border-line bg-muted/40 text-foreground">
          <Terminal className="size-6" />
        </div>

        <span className="border border-line px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
          Error 404: Latent Space Exception
        </span>

        <h1 className="mt-3 font-heading text-3xl font-medium tracking-tight text-foreground">
          Vector Embedding Not Found
        </h1>

        <p className="mt-2 text-sm text-muted-foreground max-w-sm leading-relaxed">
          The requested route cosine distance is outside the index threshold. The page may have been moved or chunked into another dimension.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-1.5 border border-foreground bg-foreground px-4 py-2 text-xs font-semibold text-background hover:opacity-90 transition-opacity"
        >
          <Home className="size-3.5" />
          <span>Return to Home Feed</span>
        </Link>
      </div>
    </div>
  );
}
