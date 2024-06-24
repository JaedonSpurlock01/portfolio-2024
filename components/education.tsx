import React from "react";
import { Title } from "./headings";
import { data } from "@/lib/data";
import Image from "next/image";

const Education = () => {
  return (
    <section className="max-content-width">
      <Title>Education</Title>

      <div className="flex flex-col gap-8 mt-4">
        <div className="flex flex-row items-center justify-center sm:justify-between">
          <div>
            <h1 className="text-md sm:text-xl font-semibold text-foreground/80">
              {data.education.school}
            </h1>
            <h1 className="font-semibold text-foreground/60 text-sm sm:text-xl">
              College of CSTEM
            </h1>
            <p className="text-foreground/60 text-sm mt-4">
              {data.education.degree}
            </p>
          </div>

          <div className="overflow-hidden rounded-md hidden md:block md:w-1/2 shadow-md">
            <Image
              src="/education/csusm.jpg"
              alt="CSUSM"
              width={900}
              height={900}
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
