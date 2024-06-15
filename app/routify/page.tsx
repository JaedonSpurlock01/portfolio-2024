import { ProjectTitle } from "@/components/headings";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

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
      />
    </main>
  );
}
