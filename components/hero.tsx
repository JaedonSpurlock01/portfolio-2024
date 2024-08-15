import Image from "next/image";
import React from "react";
import { data } from "@/lib/data";
import Social from "./ui/social";
import { CiGlobe } from "react-icons/ci";
import { Subtitle, Title } from "./headings";
import ThemeSwitch from "./ui/theme-switch";

const Hero = () => {
  return (
    <section className="max-content-width flex-col-reverse flex sm:flex-row justify-between items-center">
      {/* HERO CONTENT */}
      <header className="flex flex-col gap-2 items-center text-center sm:items-start sm:text-left">
        {/* INTRODUCTION */}
        <Title>{data.name}</Title>
        <Subtitle>{data.role}</Subtitle>
        <h3 className="text-neutral-500 flex flex-row items-center gap-1">
          <CiGlobe /> {data.location}
        </h3>

        {/* CALL TO ACTIONS */}
        <span className="text-neutral-400 flex items-center w-full">
          <span className="flex gap-2">
            <a
              className="hover:underline hover:cursor-pointer text-[#4183C4]"
              href={data.resume}
              target="_blank"
            >
              Resume
            </a>
            <a
              className="hover:underline hover:cursor-pointer text-[#4183C4]"
              href={`mailto:${data.email}`}
            >
              Contact
            </a>
          </span>
          <span className="ml-auto z-10">
            <ThemeSwitch />
          </span>
        </span>

        {/* SOCIAL LINKS */}
        <span className="flex flex-row items-center gap-1 z-10">
          {data.socials.map((social, index) => (
            <Social key={index} icon={social.icon} link={social.link} />
          ))}
        </span>
      </header>

      {/* IMAGE */}
      <Image
        src="/jaedonspurlock.jpg"
        alt="Picture of Jaedon Spurlock"
        width="200"
        height="200"
        className="rounded-full"
      />
    </section>
  );
};

export default Hero;
