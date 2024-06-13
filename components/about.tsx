import React from "react";
import { Title } from "./headings";
import { data } from "@/lib/data";

const About = () => {
  return (
    <section className="max-content-width">
      <Title>About Me</Title>
      <p className="mt-4 text-neutral-500">{data.about}</p>
    </section>
  );
};

export default About;
