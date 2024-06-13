import React from "react";
import { Title } from "./headings";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const temp_projects = [
  {
    name: "Routify",
    deployed: true,
    link: "/routify",
    githubLink: "https://github.com/jaedonspurlock01/routify",
    description:
      "Visualize pathfinding on a network of realistic roads gathered by real city data. See how popular algorithms are elevated on an interactive platform.",
  },
  {
    name: "Reside",
    deployed: true,
    link: "/reside",
    githubLink: "",
    description:
      "Real estate website built for college students. It helps find students the listing deals and find roommates.",
  },
  {
    name: "GDSC-CSUSM Website",
    deployed: false,
    link: "/gdsc",
    githubLink: "https://github.com/jaedonspurlock01/routify",
    description:
      "Main website for the GDSC Club at CSUSM. Maintains information about projects, events, workshops, and more.",
  },
  {
    name: "Webwizzard",
    deployed: false,
    link: "/webwizzard",
    githubLink: "https://github.com/JaedonSpurlock01/webwizzard",
    description:
      "AI chatbot chrome extension that provides chat prompting on websites and also uses web scraping to gather relevant data.",
  },
  {
    name: "Robot Car",
    deployed: false,
    link: "/",
    githubLink: "https://github.com/JaedonSpurlock01/robotcar",
    description:
      "Contributed to the creation of a robotic car powered by raspberry pi with C++ and the ROS library.",
  },
  {
    name: "SDR Image Processing",
    deployed: true,
    link: "/",
    githubLink: "",
    description:
      "Used a software-defined radio (SDR) to gather images from broadcast weather satellites and used popular post-processing on the images to make them visual.",
  },
];

const Projects = () => {
  return (
    <section className="max-content-width">
      <Title>Projects</Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-2 mt-4">
        {temp_projects.map((project, index) => (
          <div
            key={index}
            className="border border-neutral-300 rounded-md p-3 h-[15rem] flex flex-col justify-between"
          >
            <div>
              <span className="flex flex-row items-center gap-2">
                <h1 className="text-neutral-600 font-semibold">
                  {project.name}
                </h1>
                {project.deployed && (
                  <div className="w-2 h-2 rounded-full bg-green-600" />
                )}
                <a href={project.githubLink} target="_blank">
                  <FaGithub
                    className="text-neutral-600 hover:text-[#4183C4] transition-colors"
                    size={20}
                  />
                </a>
              </span>
              <p className="text-neutral-500 text-sm">{project.description}</p>
            </div>

            <Link href="/">
              <span className="text-neutral-600 font-medium text-sm flex flex-row items-center gap-2 hover:text-[#4183C4] hover:underline">
                View Details <FaExternalLinkAlt />
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
