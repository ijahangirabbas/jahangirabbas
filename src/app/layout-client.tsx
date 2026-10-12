"use client";

import React, { useState } from "react";
import { ThemeProvider } from "next-themes";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CommandMenu } from "@/components/command-menu";
import { Toaster } from "sonner";
import { OpenPanelTracker } from "@/components/openpanel-tracker";
import { fontVariables } from "@/lib/fonts";
import "@/styles/globals.css";

export function RootLayoutClient({
  children,
  jsonLd,
}: {
  children: React.ReactNode;
  jsonLd?: object;
}) {
  const [commandMenuOpen, setCommandMenuOpen] = useState(false);

  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
      </head>
      <body className="min-h-screen overflow-x-clip bg-background font-sans text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="group/layout relative flex min-h-screen flex-col overflow-x-clip">
            <SiteHeader onOpenCommandMenu={() => setCommandMenuOpen(true)} />

            <main className="w-full max-w-screen flex-1 overflow-x-clip px-2">
              {children}
            </main>

            <SiteFooter />
          </div>

          <OpenPanelTracker />
          <CommandMenu open={commandMenuOpen} onOpenChange={setCommandMenuOpen} />
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
