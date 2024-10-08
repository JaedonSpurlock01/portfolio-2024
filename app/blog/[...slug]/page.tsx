import { posts } from "#site/content/blog";
import { MDXContent } from "@/components/mdx/mdx-components";
import { notFound } from "next/navigation";

import "@/styles/mdx.css";
import { Metadata } from "next";
import { Tag } from "@/components/ui/tag";
import { data } from "@/lib/data";
import Comments from "@/components/comments";
import { formatDate } from "@/lib/utils";
import { MdComment } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import { Fragment } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: data.name },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <main className="page-layout w-full h-full items-center">
      <div className="max-content-width">
        <Breadcrumb className="w-full items-start">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Portfolio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/blog/${post.slug.split("/")[1]}`}
                className="text-primary"
              >
                {post.slug.split("/")[1]}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <article className="max-content-width py-6 prose dark:prose-invert prose-code:before:hidden prose-code:after:hidden">
        <h1 className="text-3xl font-semibold text-foreground mb-2">
          {post.title}
        </h1>
        <div className="flex gap-2 mb-2">
          {post.tags?.map((tag: string) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
        {post.description ? (
          <p className="text-xl mt-0 text-muted-foreground">
            {post.description}
          </p>
        ) : null}
        <div className="flex flex-row items-center justify-between">
          <p>
            {formatDate(post.date)}
            {" - "}
            {Math.round(post.body.split(" ").length / 200)} min read
          </p>
          <a href="#comments">
            <FaComment size={20} />
          </a>
        </div>
        <hr className="my-1 pb-10" />
        <MDXContent code={post.body} />
        <a id="comments" />
        <Comments />
      </article>
    </main>
  );
}
