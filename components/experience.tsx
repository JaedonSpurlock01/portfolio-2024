import React from "react";
import { Title } from "./headings";
import { data } from "@/lib/data";

const Experience = () => {
  return (
    <section className="max-content-width">
      <Title>Experience</Title>
      <div className="flex flex-col gap-8 mt-4">
        {data.work.map((experience, index) => (
          <div key={index}>
            <span className="flex flex-row justify-between flex-wrap">
              <h1 className="text-md sm:text-xl font-medium text-foreground/70">
                {experience.company}
              </h1>

              <h2 className="text-foreground/70 font-medium text-sm sm:text-base">
                {experience.position} | {experience.date}
              </h2>
            </span>

            <p className="text-neutral-500 text-sm md:text-base">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
