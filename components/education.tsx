import React from "react";
import { Title } from "./headings";
import { data } from "@/lib/data";
import Image from "next/image";
import { ResumeCard } from "./resume-card";

const Education = () => {
  return (
    <section className="max-content-width">
      <section className="max-content-width">
        <Title>Education</Title>
        <div className="flex flex-col gap-4 mt-4">
          <ResumeCard
            logoUrl={data.education.imageSrc}
            altText={data.education.school}
            title={data.education.school}
            subtitle={data.education.degree}
            href={data.education.href}
            badges={[]}
            period={data.education.date}
            description={data.education.desc}
          />
        </div>
      </section>
    </section>
  );
};

export default Education;
