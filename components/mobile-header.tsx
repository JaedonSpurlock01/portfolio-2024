"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const MobileHeader = () => {
  return (
    <header className="block md:hidden w-full fixed top-0 z-[9998]">
      <div className="w-full h-12 bg-primary-foreground flex flex-col items-center justify-center">
        <div className="max-content-width flex flex-row items-center justify-between">
          <span className="text-foreground/90 font-semibold text-xs px-4">
            Jaedon Spurlock
          </span>

          <Link href="/blog">
            <span className="flex items-center gap-2">
              <h3 className="text-foreground/90 font-semibold text-xs hover:text-primary transition-colors">
                Blog
              </h3>
              <ChevronRight />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
