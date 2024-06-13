import Courses from "@/components/courses";
import Education from "@/components/education";
import Hero from "@/components/hero";
import Nav from "@/components/nav";
import React from "react";

export default function Academic() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center pt-10 sm:py-28 gap-16 px-4 sm:px-0">
      <Hero />
      <Nav />
      <Education />
      <Courses />
    </main>
  );
}
