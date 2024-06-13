import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Nav from "@/components/nav";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center pt-10 pb-28 md:pt-28 gap-16 px-4 md:px-0">
      <Hero />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
