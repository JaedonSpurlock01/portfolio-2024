import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="text-3xl font-semibold text-neutral-700 w-full text-center sm:text-start">
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
}

export const ProjectTitle: React.FC<ProjectTitleProps> = ({
  title,
  subtitle,
  description,
  timeline,
  team,
  tools,
  disciplines,
}) => {
  return (
    <section className="max-content-width">
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <p className="my-8 text-sm text-neutral-800">{description}</p>

      <div className="flex flex-row flex-wrap justify-between sm:grid-cols-4 mb-10 text-sm">
        <div>
          <span className="font-semibold text-neutral-800">Timeline</span>
          <p className="text-neutral-700">{timeline}</p>
        </div>

        <div>
          <span className="font-semibold text-neutral-800">Team</span>
          {team.map((member, index) => (
            <p key={index} className="text-neutral-700">
              {member}
            </p>
          ))}
        </div>

        <div>
          <span className="font-semibold text-neutral-800">Tools</span>
          {tools.map((tool, index) => (
            <p key={index} className="text-neutral-700">
              {tool}
            </p>
          ))}
        </div>

        <div>
          <span className="font-semibold text-neutral-800">Disciplines</span>
          {disciplines.map((discipline, index) => (
            <p key={index} className="text-neutral-700">
              {discipline}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
