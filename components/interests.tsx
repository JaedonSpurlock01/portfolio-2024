import React from "react";
import { Title } from "./headings";
import { data } from "@/lib/data";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

const Interests = () => {
  return (
    <section className="max-content-width">
      <Title>Outdoor</Title>
      <ActivityGrid activities={data.interests.physical} />

      <Title>Hobbies</Title>
      <ActivityGrid activities={data.interests.hobbies} />

      <Title>Video Games</Title>
      <ActivityGrid activities={data.interests.games} />
    </section>
  );
};

const ActivityGrid = ({
  activities,
}: {
  activities: { name: string; description: string }[];
}) => {
  return (
    <div className="gap-2 mb-10 grid grid-cols-1 md:grid-cols-2">
      {activities.map((activity, index) => (
        <div
          key={index}
          className="w-full flex flex-col justify-between gap-4 border border-neutral-300 rounded-md p-3 "
        >
          <span>
            <h1 className="text-neutral-600 font-semibold">{activity.name}</h1>
            <p className="text-neutral-500 text-sm">{activity.description}</p>
          </span>

          <span className="text-neutral-600 font-medium text-sm flex flex-row items-center gap-2 hover:text-[#4183C4] hover:underline">
            View Details <FaExternalLinkAlt />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Interests;
