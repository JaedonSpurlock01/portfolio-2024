"use client";

import React from "react";
import { Title } from "../headings";
import { data } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const skillsSectionStyle = "flex flex-row items-center flex-wrap gap-2";
const h2Style = "font-medium text-foreground/90";
const skillContainerStyle = "flex flex-col items-start";

const Skills = () => {
  const { ref } = useSectionInView("skills");

  return (
    <section
      className="max-content-width flex flex-col gap-4"
      id="skills"
      ref={ref}
    >
      <Title>Skills</Title>

      <div className={skillContainerStyle}>
        <h2 className={h2Style}>Languages</h2>
        <div className={skillsSectionStyle}>
          {data.skills.languages.map((language, index) => (
            <SkillTag key={index}>{language}</SkillTag>
          ))}
        </div>
      </div>

      <div className={skillContainerStyle}>
        <h2 className={h2Style}>Technologies</h2>
        <div className={skillsSectionStyle}>
          {data.skills.technologies.map((tech, index) => (
            <SkillTag key={index}>{tech}</SkillTag>
          ))}
        </div>
      </div>

      <div className={skillContainerStyle}>
        <h2 className={h2Style}>Tools & Services</h2>
        <div className={skillsSectionStyle}>
          {data.skills.tools.map((tool, index) => (
            <SkillTag key={index}>{tool}</SkillTag>
          ))}
        </div>
      </div>

      <div className={skillContainerStyle}>
        <h2 className={h2Style}>Practices</h2>
        <div className={skillsSectionStyle}>
          {data.skills.practices.map((practice, index) => (
            <SkillTag key={index}>{practice}</SkillTag>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

const SkillTag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-1 px-2 rounded-sm border border-border hover:bg-secondary-foreground/10 dark:hover:bg-secondary-foreground/10 transition-all bg-neutral-50 dark:bg-primary-foreground text-foreground/80">
      {children}
    </div>
  );
};
