import Courses from "@/components/courses";
import Education from "@/components/education";
import Hero from "@/components/hero";
import Nav from "@/components/nav";
import React from "react";

export default function Academic() {
  return (
    <main className="page-layout">
      <Hero />
      <Nav />
      <Education />
      <Courses />
    </main>
  );
}
