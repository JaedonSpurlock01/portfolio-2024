"use client";

import React from "react";
import { Title } from "./headings";
import { data } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("about");

  return (
    <section className="max-content-width" ref={ref} id="about">
      <Title>Hey there! 👋🏻</Title>
      <p className="mt-4 text-neutral-500">{data.about}</p>
    </section>
  );
};

export default About;
