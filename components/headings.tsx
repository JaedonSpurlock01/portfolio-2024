import { cn } from "@/lib/utils";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface TitleProps {
  children: React.ReactNode;
  center?: boolean;
}

export const Title: React.FC<TitleProps> = ({ children, center }) => {
  return (
    <h1
      className={cn(
        "text-3xl font-semibold text-neutral-700 w-full text-center flex flex-row items-center gap-2",
        center ? "sm:text-center justify-center" : "sm:text-start"
      )}
    >
      {children}
    </h1>
  );
};

export const Subtitle: React.FC<TitleProps> = ({ children }) => {
  return (
    <h2 className="text-2xl font-semibold text-neutral-600 w-full text-center sm:text-start">
      {children}
    </h2>
  );
};

interface ProjectTitleProps {
  title: string;
  subtitle: string;
  description: string;
  timeline: string;
  team: string[];
  tools: string[];
  disciplines: string[];
  links?: string[];
}

export const ProjectTitle: React.FC<ProjectTitleProps> = ({
  title,
  subtitle,
  description,
  timeline,
  team,
  tools,
  disciplines,
  links,
}) => {
  return (
    <>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <p className="my-8 text-sm text-neutral-800 text-center sm:text-left">
        {description}
      </p>

      <div className="flex flex-row flex-wrap justify-between sm:grid-cols-4 mb-20 text-sm">
        <div className="mr-2">
          <span className="font-semibold text-neutral-800">Timeline</span>
          <p className="text-neutral-700">{timeline}</p>
        </div>

        <div className="mx-2">
          <span className="font-semibold text-neutral-800">Team</span>
          {team.map((member, index) => (
            <p key={index} className="text-neutral-700">
              {member}
            </p>
          ))}
        </div>

        <div className="mx-2">
          <span className="font-semibold text-neutral-800">Tools</span>
          {tools.map((tool, index) => (
            <p key={index} className="text-neutral-700">
              {tool}
            </p>
          ))}
        </div>

        <div className="mx-2">
          <span className="font-semibold text-neutral-800">Disciplines</span>
          {disciplines.map((discipline, index) => (
            <p key={index} className="text-neutral-700">
              {discipline}
            </p>
          ))}
        </div>

        {links && (
          <div className="ml-2">
            <span className="font-semibold text-neutral-800">Links</span>
            {links.map((link, index) => (
              <a key={index} href={link} target="_blank">
                <p className="text-neutral-700">{link}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
