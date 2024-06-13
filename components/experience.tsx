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
            <span className="flex flex-row items-center justify-between">
              <h1 className="text-md sm:text-xl font-medium text-neutral-700">
                {experience.company}
              </h1>
              <p className="text-neutral-600 text-sm md:text-base">
                {experience.date}
              </p>
            </span>

            <h2 className="text-neutral-600 font-medium text-sm sm:text-base">
              {experience.position}
            </h2>
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
