import { Caveat, Geist, Geist_Mono, IBM_Plex_Serif } from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const fontSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-serif",
});

const fontHandwritten = Caveat({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-handwritten",
});

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontSerif.variable,
  fontHandwritten.variable,
  "[--font-sans:var(--font-geist-sans)]",
  "[--font-mono:var(--font-geist-mono)]"
);
