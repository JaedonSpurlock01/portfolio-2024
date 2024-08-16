"use client";

import React from "react";
import { Title } from "./headings";
import { data } from "@/lib/data";
import ProjectCard from "./project-card";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("projects");

  return (
    <section className="max-content-width" ref={ref} id="projects">
      <Title>Projects</Title>

      <div className="w-full mt-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {data.projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              websiteUrl={project.websiteUrl || ""}
              githubUrl={project.githubUrl || ""}
              imageSrc={project.imageSrc}
              tags={project.tags}
              date={project.date}
              className=""
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
