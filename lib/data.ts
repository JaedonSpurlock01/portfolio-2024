import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const links = [
  {
    name: "About",
    ref: "/",
  },
  {
    name: "Blog",
    ref: "/blog",
  },
  {
    name: "Projects",
    ref: "/projects",
  },
  // {
  //   name: "Interests",
  //   ref: "/interests",
  // },
  {
    name: "Education",
    ref: "/education",
  },
] as const;

export const data = {
  name: "Jaedon Spurlock",
  role: "Software Engineering",
  location: "San Diego County, California",
  url: "https://localhost:3000",
  about:
    "I’m a Software Engineer with experience in Web Development and Embedded Systems. I am focused on the implementation of high-quality software through standard industry practices with powerful CI/CD pipelines. I am passionate about developing unique solutions to problems in the industry with simple, but engaging artifacts.",
  links: {
    github: "https://github.com/JaedonSpurlock01",
  },
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
      company: "Google SDC, CSUSM",
      position: "Technical Lead",
      date: "May 2024 - Present",
      description:
        "Leading the development of projects for the Google Developer Student Club at California State University, San Marcos.",
    },
  ],
  education: {
    school: "California State University, San Marcos",
    degree: "Bachelors of Science in Software Engineering",
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
  courses: [
    {
      number: "CS 111",
      catalog: "Computer Science",
      name: "Computer Science I (C++)",
      id: 454,
      term: "Fall 2022",
    },
    {
      number: "CS 211",
      catalog: "Computer Science",
      name: "Computer Science II (C++)",
      id: 456,
      term: "Spring 2023",
    },
    {
      number: "CS 311",
      catalog: "Computer Science",
      name: "Computer Science III (C++)",
      id: 461,
      term: "Fall 2023",
    },
    {
      number: "CS 231",
      catalog: "Computer Science",
      name: "Assembly Language & Digital Circuits",
      id: 457,
      term: "Fall 2023",
    },
    {
      number: "CS 351",
      catalog: "Computer Science",
      name: "Programming Languages",
      id: 463,
      term: "Spring 2024",
    },
    {
      number: "CS 443",
      catalog: "Computer Science",
      name: "Database Management Systems",
      id: 470,
      term: "Spring 2024",
    },
    {
      number: "CS 446",
      catalog: "Computer Science",
      name: "Cloud Computing",
      id: -1,
      term: "Fall 2024",
    },
    {
      number: "CS 435",
      catalog: "Computer Science",
      name: "Embedded Systems",
      id: 467,
      term: "Spring 2024",
    },
    {
      number: "SE 370",
      catalog: "Software Engineering",
      name: "Intro to Software Engineering (Java)",
      id: -1,
      term: "Spring 2024",
    },
    {
      number: "SE 451",
      catalog: "Software Engineering",
      name: "Requirements and Design",
      id: 30466,
      term: "Fall 2024",
    },
    {
      number: "MATH 160",
      catalog: "Math",
      name: "Calculus I (AP)",
      id: 1414,
      term: "Spring 2022",
    },
    {
      number: "MATH 162",
      catalog: "Math",
      name: "Calculus II",
      id: 1415,
      term: "Fall 2022",
    },
    {
      number: "MATH 242",
      catalog: "Math",
      name: "Statistics",
      id: 1419,
      term: "Fall 2023",
    },
    {
      number: "MATH 270",
      catalog: "Math",
      name: "Discrete Math",
      id: 1423,
      term: "Fall 2023",
    },
    {
      number: "MATH 264",
      catalog: "Math",
      name: "Linear Algebra",
      id: 1422,
      term: "Spring 2024",
    },
    {
      number: "PHYS 201",
      catalog: "Physics",
      name: "Mechanics and Sound",
      id: 1916,
      term: "Fall 2024",
    },
  ],
  interests: {
    physical: [
      {
        name: "Hiking",
        description:
          "Inherited from tradition, hiking has been one of the core ways my family have connected with nature. It's something that I sincerely enjoy, and something I continue to pass onto further generations.",
      },
      {
        name: "Skiing",
        description:
          "Skiing is a recreational and competitive sport where individuals glide over snow on skis, navigating slopes and terrain with varying degrees of difficulty.",
      },
      {
        name: "Biking",
        description:
          "Biking is a versatile and eco-friendly activity that combines exercise and transportation, offering a fun way to explore the outdoors while improving physical fitness.",
      },
      {
        name: "Gym",
        description:
          "A gym is a facility equipped with a variety of exercise machines, free weights, and spaces for group fitness classes designed to help individuals improve their physical fitness and overall health.",
      },
    ],
    hobbies: [
      {
        name: "Books",
        description:
          "I enjoy the fantasy genre, as it opens to vast visual cues for imagination. Some of my favorite series are The Witcher, Shadow Slave, and The Maze Runner",
      },
      {
        name: "Music",
        description:
          "Everyone loves music, who doesn't? I mostly enjoy soundtrack-based music, especially from artists such as Thomas Bergensen and Ivan Torrent.",
      },
      {
        name: "Cubes",
        description:
          "I've enjoyed competing with rubik's cubes since I was young, ranging from 2x2 up to 5x5, but I mostly mess with the 3x3.",
      },
    ],
    games: [
      {
        name: "Valheim",
        description:
          "From the entrancing black forests, to the peaks of the crystaline mountains. The challenges of Odin's tyrants are fierce and exhilerating. Valheim is one of, if not, the best survival game ever made. ",
      },
      {
        name: "Terraria",
        description:
          "The iconic melodies of the forest biome singing along the adventures of the avatar. From the deep trenches of the crimson forest, to the deep oceans, Terraria is something you'll play once, and will never forget about it.",
      },
    ],
  },
};
