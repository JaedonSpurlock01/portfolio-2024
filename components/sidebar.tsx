"use client";

import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <div className="sticky w-full top-20 bg-white dark:bg-primary-foreground border border-border p-4 rounded-sm">
      <h3 className="text-primary/90 font-semibold text-lg">Portfolio</h3>
      <ul className="shadow-[inset_3px_0_0_#e5e5e5] dark:shadow-[inset_3px_0_0_#262626]">
        {[
          "Overview",
          "About",
          "Experience",
          "Education",
          "Skills",
          "Projects",
        ].map((link, index) => (
          <div key={index} className="flex items-center gap-2">
            {link.toLocaleLowerCase() === activeSection ? (
              <motion.span
                className="w-[4px] h-[20px] rounded-lg bg-[#4183C4]"
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            ) : (
              <span className="w-[4px] h-[20px] bg-transparent" />
            )}
            <Link
              href={`#${link.toLocaleLowerCase()}`}
              onClick={() => {
                setActiveSection(link.toLocaleLowerCase());
                setTimeOfLastClick(Date.now());
              }}
            >
              <li
                className={cn(
                  "text",
                  link.toLocaleLowerCase() === activeSection
                    ? "text-primary/90"
                    : "text-primary/60"
                )}
              >
                {link}
              </li>
            </Link>
          </div>
        ))}
      </ul>

      <Link href="/blog">
        <div className="flex pl-3 items-center gap-2 mt-4 group text-primary/60 hover:text-primary transition-colors">
          <h3>Blog</h3>
          <ChevronRight
            className="group-hover:translate-x-2 transition-transform"
            size={20}
          />
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
