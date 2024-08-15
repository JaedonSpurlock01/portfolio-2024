import About from "@/components/about";
import DotPattern from "@/components/dot-background";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/ui/skills";
import { data } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
  description: data.about,
};

export default function Home() {
  return (
    <main className="page-layout">
      <DotPattern className="[mask-image:radial-gradient(circle_2000px_at_50%_-20%,white,transparent,transparent)] " />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
    </main>
  );
}
