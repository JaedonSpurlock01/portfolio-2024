import { projects } from "#site/content/projects";
import { MDXContent } from "@/components/mdx/mdx-components";
import { notFound } from "next/navigation";

import "@/styles/mdx.css";
import { Metadata } from "next";
import { data } from "@/lib/data";
import Hero from "@/components/hero";
import Nav from "@/components/nav";
import Comments from "@/components/comments";
import { FaComment, FaGithub, FaRegComment } from "react-icons/fa";
import { formatDate } from "@/lib/utils";
interface ProjectPageProps {
  params: {
    slug: string[];
  };
}

async function getProjectFromParams(params: ProjectPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const project = projects.find((project) => project.slugAsParams === slug);

  return project;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectFromParams(params);

  if (!project) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", project.title);

  return {
    title: project.title,
    description: project.description,
    authors: { name: data.name },
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: project.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
  ProjectPageProps["params"][]
> {
  return projects.map((project) => ({ slug: project.slugAsParams.split("/") }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectFromParams(params);

  if (!project || !project.published) {
    notFound();
  }

  return (
    <main className="page-layout">
      <Hero />
      <Nav />
      <article className="max-content-width py-6 prose dark:prose-invert prose-code:before:hidden prose-code:after:hidden">
        <h1 className="mb-2 text-3xl font-semibold text-foreground">
          {project.title}
        </h1>
        {project.description ? (
          <p className="text-xl mt-0 text-muted-foreground">
            {project.description}
          </p>
        ) : null}
        <div className="flex flex-row items-center justify-between">
          <p>
            {formatDate(project.date)}
            {" - "}
            {Math.round(project.body.split(" ").length / 200)} min read
          </p>
          <span className="flex items-center gap-4">
            <a
              href="#comments"
              className="hover:text-[#4183C4] transition-colors"
            >
              <FaRegComment size={25} />
            </a>
            <a
              href={project.github}
              target="_blank"
              className="hover:text-[#4183C4] transition-colors"
            >
              <FaGithub size={25} />
            </a>
          </span>
        </div>
        <hr className="my-1 pb-4" />
        <MDXContent code={project.body} />
        <a id="comments" />
        <Comments />
      </article>
    </main>
  );
}
