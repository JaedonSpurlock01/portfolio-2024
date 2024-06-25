import React from "react";
import { Title } from "./headings";
import { ProjectItem } from "./project-item";
import { projects } from "#site/content/projects";
import { sortPosts } from "@/lib/utils";

const Projects = () => {
  const sortedProjects = sortPosts(projects).filter((post) => post.published);

  return (
    <section className="max-content-width">
      <Title>Projects</Title>

      <div className="w-full mt-4">
        {sortedProjects?.length > 0 ? (
          <ul className=" flex flex-col gap-2">
            {sortedProjects.map((project, index) => {
              const { slug, date, title, description } = project;
              return (
                <ProjectItem
                  title={title}
                  slug={slug}
                  description={description}
                  key={index}
                  date={date}
                />
              );
            })}
          </ul>
        ) : (
          <p>Nothing to see here yet</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
