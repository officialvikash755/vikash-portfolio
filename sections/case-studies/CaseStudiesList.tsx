"use client";

import { useState } from "react";
import { caseStudiesContent } from "@/data/caseStudies";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { StaggerContainer } from "@/components/ui/StaggerContainer";
import { StaggerItem } from "@/components/ui/StaggerItem";
import { CaseStudyCard } from "./CaseStudyCard";

export function CaseStudiesList() {
  const [expandedId, setExpandedId] = useState<string | null>(
    caseStudiesContent.studies[0]?.id ?? null,
  );

  const handleToggle = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <div className="space-y-10">
      <SectionReveal
        label={caseStudiesContent.sectionLabel}
        heading={caseStudiesContent.heading}
        headingId="case-studies-heading"
        description={caseStudiesContent.description}
      />

      <StaggerContainer className="mx-auto max-w-3xl space-y-4">
        {caseStudiesContent.studies.map((study) => (
          <StaggerItem key={study.id}>
            <CaseStudyCard
              study={study}
              isExpanded={expandedId === study.id}
              onToggle={() => handleToggle(study.id)}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
