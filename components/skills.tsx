import React from "react";
import { Title } from "./headings";
import { data } from "@/lib/data";

const skillsSectionStyle = "flex flex-row items-center flex-wrap gap-2";

const Skills = () => {
  return (
    <section className="max-content-width flex flex-col gap-4">
      <Title>Skills</Title>

      <div>
        <h2 className="font-medium text-neutral-700">Languages</h2>
        <div className={skillsSectionStyle}>
          {data.skills.languages.map((language, index) => (
            <SkillTag key={index}>{language}</SkillTag>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-medium text-neutral-700">Technologies</h2>
        <div className={skillsSectionStyle}>
          {data.skills.technologies.map((tech, index) => (
            <SkillTag key={index}>{tech}</SkillTag>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-medium text-neutral-700">Tools & Services</h2>
        <div className={skillsSectionStyle}>
          {data.skills.tools.map((tool, index) => (
            <SkillTag key={index}>{tool}</SkillTag>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-medium text-neutral-700">Practices</h2>
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
    <div className="py-1 px-2 rounded-md border hover:bg-neutral-300 transition-all border-neutral-300 text-neutral-600">
      {children}
    </div>
  );
};
