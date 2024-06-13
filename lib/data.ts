import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const links = [
  {
    name: "About",
    ref: "/",
  },
  {
    name: "Education",
    ref: "/education",
  },
  {
    name: "Gallery",
    ref: "/gallery",
  },
  {
    name: "Interests",
    ref: "/interests",
  },
] as const;

export const data = {
  name: "Jaedon Spurlock",
  role: "Software Engineering",
  location: "San Diego County, California",
  about:
    "I’m a Software Engineer with experience in Web Development and Embedded Systems. I am focused on the implementation of high-quality software through standard industry practices with powerful CI/CD pipelines. I am passionate about developing unique solutions to problems in the industry with simple, but engaging artifacts.",
  socials: [
    {
      icon: MdOutlineEmail,
      link: "jaedonaspurlock@outlook.com",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/jaedon-spurlock/",
    },
    {
      icon: FaGithub,
      link: "https://github.com/JaedonSpurlock01",
    },

    {
      icon: FaInstagram,
      link: "https://www.instagram.com/jaedonspurlock",
    },
    {
      icon: FaYoutube,
      link: "https://www.youtube.com/channel/UC_kzjV049b2XQlKe306re5g",
    },
  ],
  work: [
    {
      company: "Welfie",
      position: "Software Engineer Intern",
      date: "Jun 2024 - Present",
      description:
        "Contributed to the development of welfie health products. Focusing on enhancing the educational experiences of undergraduate students through innovative approaches and technologies.",
    },
    {
      company: "GDSC | CSUSM",
      position: "Technical Lead",
      date: "May 2024 - Present",
      description:
        "Leading the development of projects for the Google Developer Student Club at California State University, San Marcos.",
    },
    {
      company: "Open Energy Dashboard",
      position: "Team Lead",
      date: "Oct 2023 - Nov 2023",
      description:
        "Improved reliability of an open-source project by implementing a test case with JavaScript and Mocha. Led a team of 3 to verify conversions from kWh to BTU energy units, resulting in increased confidence in data integrity.",
    },
  ],
  education: {
    school: "California State University, San Marcos",
    degree: "Bachelor of Science in Software Engineering",
    gpa: "3.95/4.00",
    date: "Aug 2022 - Present",
  },
  skills: {
    languages: ["Python", "C++", "TypeScript", "CSS", "HTML"],
    technologies: ["React", "Angular", "Node", "Vite", "NextJS"],
    tools: [
      "AWS",
      "MongoDB",
      "VSCode",
      "Git",
      "GitHub",
      "Postman",
      "PostgreSQL",
    ],
    practices: [
      "Agile",
      "Test-Driven-Development",
      "Refactoring",
      "Team Retrospectives",
      "Version Control",
      "CI/CD pipelines",
      "Code Review",
    ],
  },
};
