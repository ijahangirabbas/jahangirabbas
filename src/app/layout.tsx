import React from "react";
import type { Metadata } from "next";
import { RootLayoutClient } from "./layout-client";

const SITE_URL = "https://ijahangirabbas.vercel.app";
const FULL_NAME = "Jahangir Abbas";
const TITLE = "Jahangir Abbas — Full-Stack Developer & AI Engineer";
const DESCRIPTION =
  "Portfolio of Jahangir Abbas, a Full-Stack Developer and AI Engineer from Lahore, Pakistan. Specializing in RAG pipelines, LLM systems, Next.js applications, and scalable AI-powered software.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s — ${FULL_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Jahangir Abbas",
    "Jahangir Abbas developer",
    "Jahangir Abbas AI engineer",
    "Jahangir Abbas Pakistan",
    "Jahangir Abbas portfolio",
    "Full Stack Developer Lahore",
    "AI Engineer Pakistan",
    "RAG pipeline developer",
    "LLM engineer Pakistan",
    "Next.js developer Pakistan",
  ],
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: FULL_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} — Full-Stack Developer & AI Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@ijahangirabbas",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    // Add your Google Search Console verification token here after registering
    // google: "your-google-verification-token",
    // yandex: "your-yandex-token",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: FULL_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/android-chrome-512x512.png`,
  jobTitle: "Full-Stack Developer & AI Engineer",
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "University of the Punjab",
    url: "https://pu.edu.pk",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Retrieval-Augmented Generation",
    "Large Language Models",
    "Full-Stack Web Development",
    "Next.js",
    "Node.js",
    "RAG Pipelines",
    "Vector Databases",
    "AI Agents",
    "Prompt Engineering",
    "TypeScript",
    "Python",
  ],
  sameAs: [
    "https://github.com/ijahangirabbas",
    "https://linkedin.com/in/ijahangirabbas",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootLayoutClient jsonLd={personJsonLd}>{children}</RootLayoutClient>
  );
}
