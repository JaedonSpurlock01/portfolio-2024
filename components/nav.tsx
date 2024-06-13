"use client";

import { useActiveSectionContext } from "@/context/active_section";
import { links } from "@/lib/data";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <nav className="max-content-width">
      <ul className="w-full flex flex-row items-center justify-center gap-4">
        {links.map((link, index) => (
          <li
            key={index}
            className={clsx(
              "md:text-xl text-neutral-700 border-b-2 hover:text-[#4183C4]",
              activeSection === link.name
                ? "font-bold border-neutral-700"
                : "font-medium border-transparent"
            )}
          >
            <Link
              // When a link is clicked, change active link
              // Note: Does not reset on new page, since the navbar is the globally used across all pages
              onClick={() => setActiveSection(link.name)}
              href={link.ref}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
