"use client";

import React from "react";
import { Title } from "./headings";
import { data } from "@/lib/data";
import { ResumeCard } from "./resume-card";
import { useSectionInView } from "@/lib/hooks";

const Education = () => {
  const { ref } = useSectionInView("education");

  return (
    <section className="max-content-width" id="education" ref={ref}>
      <section className="max-content-width">
        <Title>Education</Title>
        <div className="flex flex-col gap-6 mt-4">
          {data.education.map((type) => (
            <ResumeCard
              key={type.school}
              logoUrl={type.imageSrc}
              altText={type.school}
              title={type.school}
              subtitle={type.degree}
              href={type.href}
              badges={[]}
              period={type.date}
              description={type.desc}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Education;
