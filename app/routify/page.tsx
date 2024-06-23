import { ProjectTitle, Title } from "@/components/headings";
import Image from "next/image";
import Link from "next/link";
import { FaCity } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { IoMdArrowBack, IoMdSpeedometer } from "react-icons/io";

export default function Routify() {
  return (
    <main className="page-layout">
      <Link
        href="/"
        className="max-content-width hover:underline hover:text-[#4183C4]"
      >
        <span className="flex flex-row items-center gap-2">
          <IoMdArrowBack /> Go Back
        </span>
      </Link>

      <div className="rounded-xl border bg-neutral-300 max-content-width p-1">
        <div className="rounded-xl bg-neutral-900 w-full h-full p-4">
          <div className="overflow-hidden rounded-md w-full">
            <Image
              src="/routify/Routify.gif"
              alt="CSUSM"
              width={1000}
              height={1000}
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </div>

      <section className="max-content-width">
        <ProjectTitle
          title="Routify"
          subtitle="Bridge Between Theory And Practice"
          description="A pathfinding visualizer built to work with any city listed on OpenStreetMap. Learn how pathfinding algorithms work in a completely different way. No more confusing textbooks or videos, see the algorithms in action."
          team={["Jaedon Spurlock"]}
          tools={[
            "TypeScript",
            "ThreeJS",
            "Overpass API",
            "Nomination API",
            "Amazon S3",
          ]}
          disciplines={["Web Development", "Data Structures", "Visualization"]}
          timeline="Jan - Mar 2024"
          links={["https://www.routify.cc"]}
        />

        <Title center>Undertanding Pathfinding</Title>

        <p className="font-semibold mt-8 text-center text-neutral-500">
          What is the best way to calculate the shortest route between two
          points? This has been a long standing discussion in computer science
          for decades and is shuffled deep in long textbooks along with
          confusing lectures. But the best way to learn has always been to
          visualize a confusing topic, and that is the goal of Routify.
        </p>
      </section>

      <section className="flex flex-row items-center gap-4">
        <Image
          src="/routify/1.png"
          alt="Image of a path"
          width={300}
          height={300}
          className="rounded-md"
        />
        <Image
          src="/routify/2.png"
          alt="Image of a path"
          width={300}
          height={300}
          className="rounded-md"
        />
        <Image
          src="/routify/3.png"
          alt="Image of a path"
          width={300}
          height={300}
          className="rounded-md"
        />
      </section>

      <section className="max-content-width">
        <Title center>
          Choose Any City <FaCity /> To Visualize
        </Title>

        <p className="font-semibold mt-8 text-center text-neutral-500">
          Choose any city of your choosing. See how your everyday routes are
          calculated.
        </p>

        <div className="rounded-xl border bg-neutral-300 max-content-width p-1 mt-8">
          <div className="rounded-xl bg-neutral-900 w-full h-full p-4">
            <div className="overflow-hidden rounded-md w-full">
              <Image
                src="/routify/searching_city.gif"
                alt="CSUSM"
                width={1000}
                height={1000}
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <Title center>
          Measure Speed <IoMdSpeedometer /> and Distance <GiPathDistance />
        </Title>
      </section>

      <section>
        <Title center>Push The Limits</Title>
      </section>
    </main>
  );
}
