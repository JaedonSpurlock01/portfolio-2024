import About from "@/components/about";
import DotPattern from "@/components/dot-background";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import MobileHeader from "@/components/mobile-header";
import Projects from "@/components/projects";
import Sidebar from "@/components/sidebar";
import Skills from "@/components/ui/skills";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import { data } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
  description: data.about,
};

export default function Home() {
  return (
    <ActiveSectionContextProvider>
      <div className="flex justify-center gap-20 pt-10 md:pt-0">
        <MobileHeader />
        <aside className="hidden lg:block w-[10rem]" />
        <main className="page-layout">
          <DotPattern className="[mask-image:radial-gradient(circle_2000px_at_50%_-20%,white,transparent,transparent)] " />
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
        </main>
        <aside className="hidden md:block w-[10rem] z-10 pt-28 relative">
          <Sidebar />
        </aside>
      </div>
    </ActiveSectionContextProvider>
  );
}
