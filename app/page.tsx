import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Nav from "@/components/nav";
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
      <Hero />
      <Nav />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
