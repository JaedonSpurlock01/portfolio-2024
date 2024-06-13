import React from "react";
import { Title } from "./headings";
import { data } from "@/lib/data";

const Education = () => {
  return (
    <section className="max-content-width">
      <Title>Education</Title>
      <div className="flex flex-col gap-8 mt-4">
        <div>
          <span className="flex flex-row items-center justify-between">
            <h1 className="text-md sm:text-xl font-medium text-neutral-700">
              {data.education.school}
            </h1>
            <p className="text-neutral-600 text-sm md:text-base">
              {data.education.date}
            </p>
          </span>

          <span className="flex flex-row items-center justify-between">
            <h1 className="text font-medium text-neutral-600 text-sm sm:text-base">
              {data.education.degree}
            </h1>
            <p className="text-neutral-600 text-sm md:text-base">
              GPA: {data.education.gpa}
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Education;
