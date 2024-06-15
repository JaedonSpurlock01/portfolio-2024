import { ProjectTitle } from "@/components/headings";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

export default function Reside() {
  return (
    <main className="page-layout">
      <Link href="/" className="max-content-width hover:underline hover:text-[#4183C4]">
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
        title="Reside"
        subtitle="Leveraging High Rental Costs"
        description="Real estate website platform built for college students. Find other roommates, sort rental costs, and more."
        team={[
          "Jaedon Spurlock",
          "Yashaswi Kulsrestha",
          "Gabriel Tellez Ornelas",
        ]}
        tools={["TypeScript", "NextJS", "RentCast API", "MapBox", "MongoDB"]}
        disciplines={["Web Development"]}
        timeline="Mar - Apr 2024"
      />
    </main>
  );
}
