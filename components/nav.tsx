"use client";

import { links } from "@/lib/data";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="max-content-width">
      <ul className="w-full flex flex-row items-center justify-center gap-4">
        {links.map((link, index) => (
          <li
            key={index}
            className={clsx(
              "md:text-xl border-b-2 hover:text-[#4183C4]",
              pathname === link.ref
                ? "font-bold border-neutral-700 text-[#4183C4]"
                : "font-medium border-transparent text-foreground/90"
            )}
          >
            <Link href={link.ref}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
