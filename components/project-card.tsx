import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "./ui/button";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";

interface ProjectProps {
  title?: string;
  description?: string;
  websiteUrl?: string;
  githubUrl?: string;
  imageSrc?: string;
  className?: string;
  date?: string;
  tags?: string[];
}

/**
 * Component that shows an project card
 * @param {string} title Name of the project
 * @param {string} description Information relating to the project
 * @param {string} websiteUrl URL or path to project
 * @param {string} githubUrl URL or path to github source code
 * @param {string} imageSrc URL or path to image source (View NextJS documentation if using URL)
 * @param {string} className Additional CSS classes to extend to the card
 */
const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  websiteUrl,
  githubUrl,
  imageSrc,
  className,
  date,
  tags,
}) => {
  return (
    <div
      className={cn(
        "rounded-sm border border-border w-full overflow-hidden",
        className
      )}
    >
      <ProjectImage imageSrc={imageSrc} />
      <div
        className={cn(
          "w-full p-4 flex flex-col dark:bg-primary-foreground min-h-0 h-full"
        )}
      >
        <ProjectInfo title={title} description={description} date={date} />
        <ProjectTags tags={tags} />
        <ProjectDetails websiteUrl={websiteUrl} githubUrl={githubUrl} />
      </div>
    </div>
  );
};
export default ProjectCard;

/**
 * Sub-component that shows image of project
 * @param {string} imageSrc URL or path to image source (View NextJS documentation if using URL)
 */
const ProjectImage: React.FC<ProjectProps> = ({ imageSrc }) => {
  if (!imageSrc) return null;
  return (
    <div className="w-full overflow-hidden h-[180px]">
      <Image
        src={imageSrc}
        alt={"project-image"}
        width="1920"
        height="1080"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

/**
 * Sub-component that displays information about the project
 * @param {string} title Name of the project
 * @param {string} description Information relating to the project
 * @param {string} date The timeline of project
 */
const ProjectInfo: React.FC<ProjectProps> = ({ title, description, date }) => {
  return (
    <div className="space-y-2 line-clamp-6">
      <h1 className="font-bold text-foreground/90">{title}</h1>
      <h2 className="text-sm text-foreground/80">{date}</h2>
      <p className="text-sm text-foreground/70">{description}</p>
    </div>
  );
};

/**
 * Sub-component that displays tags from project
 * @param {string[]} tags Tags that describe project
 */
const ProjectTags: React.FC<ProjectProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2 my-4">
      {tags?.map((tag, index) => (
        <span
          key={index}
          className="p-1 rounded-sm bg-primary-foreground dark:bg-secondary-foreground/20 text-xs"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

/**
 * Sub-component that gives more details on project
 * @param {string} websiteUrl URL or path to project
 * @param {string} githubUrl URL or path to source code
 */
const ProjectDetails: React.FC<ProjectProps> = ({ websiteUrl, githubUrl }) => {
  if (!websiteUrl && !githubUrl) return null;

  return (
    <div className="flex flex-row items-center gap-2">
      {websiteUrl && (
        <Link href={websiteUrl} target="_blank">
          <Button
            className={cn(
              "px-3 rounded-lg truncate gap-2 text-center max-w-fit text-xs text-primary flex items-center text-white bg-[#4183C4] hover:bg-[#4183C4]/70"
            )}
            size="sm"
          >
            <CiGlobe size={25} />
            Website
          </Button>
        </Link>
      )}
      {githubUrl && (
        <Link href={githubUrl} target="_blank">
          <Button
            className={cn(
              "px-3 rounded-lg truncate gap-2 text-center max-w-fit text-xs text-primary flex items-center text-white bg-[#4183C4] hover:bg-[#4183C4]/70"
            )}
            size="sm"
          >
            <BsGithub
              className="hover:text-blue hover:cursor-pointer transition"
              size={25}
            />
            Source
          </Button>
        </Link>
      )}
    </div>
  );
};
