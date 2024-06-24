import React from "react";
import { Title } from "./headings";
import { FaArrowRightLong, FaGithub } from "react-icons/fa6";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaLocationArrow,
} from "react-icons/fa";
import Link from "next/link";
import { CiLocationArrow1 } from "react-icons/ci";

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
    name: "GDSC Website",
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
    name: "SDR Signals",
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

      <div className="w-full flex flex-col gap-2 mt-4">
        {temp_projects.map((project, index) => (
          <Link key={index} href={project.link}>
            <div className="group border border-border bg-neutral-50 dark:bg-secondary rounded-sm p-3 h-[6rem] flex flex-row items-center gap-4">
              <div className="h-full">
                <span className="flex flex-row items-center gap-2">
                  <h1 className="text-foreground/80 font-semibold">
                    {project.name}
                  </h1>
                  {project.deployed && (
                    <div className="w-2 h-2 rounded-full bg-green-600" />
                  )}
                </span>
                <p className="text-foreground/50 text-sm">
                  {project.description}
                </p>
              </div>

              <span className="text-foreground/80 font-medium text-sm flex flex-row items-center gap-2 transition-all group-hover:scale-110 group-hover:text-[#4183C4] hover:underline ml-auto">
                <FaExternalLinkAlt size={15} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
