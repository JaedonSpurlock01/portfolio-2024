import { posts } from "#site/content/blog";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { Tag } from "@/components/ui/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  cn,
  getAllTags,
  getPostsByTagSlug,
  sortPosts,
  sortTagsByCount,
} from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { badgeVariants } from "@/components/ui/badge";
import { Title } from "@/components/headings";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "My blog",
  description: "This is a description",
};

const POSTS_PER_PAGE = 4;

interface BlogPageProps {
  searchParams: {
    page?: string;
    tag?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  let allPosts;
  if (searchParams?.tag) {
    allPosts = getPostsByTagSlug(posts, searchParams?.tag);
  } else {
    allPosts = posts;
  }

  const sortedPosts = sortPosts(allPosts).filter((post) => post.published);
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  const currentPage = Number(searchParams?.page) || 1;

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  return (
    <main className="page-layout w-full h-full items-center">
      <div className="flex flex-col items-center justify-center gap-3 max-content-width">
        <Breadcrumb className="w-full items-start mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Portfolio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog" className="text-primary">
                Blog
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Title>Blog</Title>
        <div className="flex flex-col w-full sm:flex-row items-center gap-2">
          <Card className="w-full bg-neutral-50 dark:bg-primary-foreground p-2">
            <CardHeader>
              <CardTitle className="flex justify-between">
                <span>Tags</span>
                <Link
                  className={cn(
                    badgeVariants({
                      variant: "outline",
                      className:
                        "no-underline rounded-md px-10 hover:bg-[#4183C4] dark:hover:bg-[#4183C4]",
                    })
                  )}
                  href="/blog"
                >
                  Clear Tag
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {sortedTags?.map((tag) => (
                <Tag
                  tag={tag}
                  key={tag}
                  count={tags[tag]}
                  highlighted={tag === searchParams?.tag}
                />
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="w-full">
          {displayPosts?.length > 0 ? (
            <ul className="flex flex-col gap-2">
              {displayPosts.map((post) => {
                const { slug, date, title, description, tags } = post;
                return (
                  <li key={slug}>
                    <PostItem
                      slug={slug}
                      date={date}
                      title={title}
                      description={description}
                      tags={tags}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Nothing to see here yet</p>
          )}
          <QueryPagination
            totalPages={totalPages}
            className="justify-end mt-4"
          />
        </div>
      </div>
    </main>
  );
}
