"use client";

import { experienceContent } from "@/data/experience";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { TimelineItem } from "./TimelineItem";

export function ExperienceTimeline() {
  const { timeline } = experienceContent;

  return (
    <div className="space-y-12">
      <SectionReveal
        label={experienceContent.sectionLabel}
        heading={experienceContent.heading}
        headingId="experience-heading"
        description={experienceContent.description}
      />

      <ol className="relative mx-auto max-w-4xl lg:max-w-5xl" aria-label="Professional experience timeline">
        {timeline.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            index={index}
            isLast={index === timeline.length - 1}
          />
        ))}
      </ol>
    </div>
  );
}
