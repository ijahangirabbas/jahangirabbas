import React, { Suspense } from "react";
import { ProfileHeader } from "@/features/portfolio/components/profile-header";
import { SocialLinks } from "@/features/portfolio/components/social-links";
import { Summary } from "@/features/portfolio/components/summary";
import { Overview } from "@/features/portfolio/components/overview";
import { ProjectsShowcase } from "@/features/portfolio/components/projects-showcase";
import { AIArchitectureShowcase } from "@/features/portfolio/components/ai-architecture-showcase";
import { TechStackShowcase } from "@/features/portfolio/components/tech-stack-showcase";
import { ExperiencesShowcase } from "@/features/portfolio/components/experiences-showcase";
import { EducationShowcase } from "@/features/portfolio/components/education-showcase";
import { CertificationsShowcase } from "@/features/portfolio/components/certifications-showcase";
import {
  InsightsShowcase,
  InsightsSkeleton,
} from "@/features/portfolio/components/insights-showcase";
// import { JeemLabsCard } from "@/features/portfolio/components/jeem-labs-card";
import { GitHubContributions } from "@/components/github-contributions";
import { SectionSeparator } from "@/components/panel";

export default function HomePage() {
  return (
    <div className="**:data-[slot=panel]:scroll-mt-[calc(var(--header-height)+var(--separator-height))]">
      <div className="mx-auto w-full md:max-w-3xl">
        <ProfileHeader />
        <Summary />
        <SocialLinks />
        <GitHubContributions />
        <SectionSeparator />

        {/* <JeemLabsCard />
        <SectionSeparator /> */}

        <Overview />
        <SectionSeparator />

        <TechStackShowcase />
        <SectionSeparator />

        <ExperiencesShowcase />
        <SectionSeparator />

        <EducationShowcase />
        <SectionSeparator />

        <ProjectsShowcase />
        <SectionSeparator />

        <AIArchitectureShowcase />
        <SectionSeparator />

        <CertificationsShowcase />
        <SectionSeparator />

        <Suspense fallback={<InsightsSkeleton />}>
          <InsightsShowcase />
        </Suspense>
      </div>
    </div>
  );
}
