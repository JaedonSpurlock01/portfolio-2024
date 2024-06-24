import { getAllTags, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";
import { posts } from "#site/content";
import { Tag } from "@/components/ui/tag";
import Hero from "@/components/hero";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "Tags",
  description: "Topic I've written about",
};

export default async function TagsPage() {
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <main className="page-layout">
      <Hero />
      <Nav />
      <section className="max-content-width">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block font-black text-4xl lg:text-5xl">
              Tags
            </h1>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex flex-wrap gap-2">
          {sortedTags?.map((tag) => (
            <Tag tag={tag} count={tags[tag]} key={tag} />
          ))}
        </div>
      </section>
    </main>
  );
}
