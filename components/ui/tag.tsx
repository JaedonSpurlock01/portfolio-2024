import Link from "next/link";
import { slug } from "github-slugger";
import { badgeVariants } from "./badge";
import { cn } from "@/lib/utils";

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
  highlighted?: boolean;
}
export function Tag({ tag, current, count, highlighted }: TagProps) {
  return (
    <Link
      className={cn(
        badgeVariants({
          variant: current ? "default" : "outline",
          className:
            "no-underline rounded-md hover:bg-[#4183C4] dark:hover:bg-[#4183C4]",
        }),
        highlighted ? "bg-[#4183C4]" : ""
      )}
      href={`/blog?tag=${slug(tag)}`}
    >
      {tag} {count ? `(${count})` : null}
    </Link>
  );
}
