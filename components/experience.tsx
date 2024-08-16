"use client";

import React from "react";
import { Title } from "./headings";
import { data } from "@/lib/data";
import { ResumeCard } from "./resume-card";
import { useSectionInView } from "@/lib/hooks";

const Experience = () => {
  const { ref } = useSectionInView("experience");

  return (
    <section className="max-content-width" id="experience" ref={ref}>
      <Title>Experience</Title>
      <div className="flex flex-col gap-6 mt-4">
        {data.work.map((experience, index) => (
          <ResumeCard
            key={index}
            logoUrl={experience.imageSrc}
            altText={experience.company}
            title={experience.company}
            subtitle={experience.position}
            href={experience.href}
            badges={[]}
            period={experience.date}
            description={experience.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
