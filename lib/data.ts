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
] as const;

export const data = {
  name: "Jaedon Spurlock",
  role: "Software Engineer",
  email: "jaedonaspurlock@outlook.com",
  resume: "/resume.pdf",
  location: "San Diego County, California",
  url: "https://localhost:3000",
  about:
    "I'm a passionate software engineer, turning ideas into engaging, high-quality digital experiences. I have over a year of professional experience through internship and coding projects. My main specialization is full-stack development in the React web and mobile ecosystem. Feel free to contact me if you would like to connect.",
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
      imageSrc: "/welfie.png",
      href: "https://www.linkedin.com/company/welfie/",
      description:
        "Orchestrate development of cross-platform mobile app by using React Native, Expo, and NativeWind. Accelerate workflow efficiency by 30% by integrating developer documentation and agile methodologies. Led a team of 8 interns to establish web testing ecosystem . Build automated testing framework using Python and Selenium, enhancing test coverage by 70%. Deploy and manage a CI/CD pipeline on Bitbucket by using Google Cloud, Docker, and Linux configurations. Refactor, debug, and implement website production code.",
    },
    {
      company: "Google SDC, CSUSM",
      position: "Technical Lead",
      date: "May 2024 - Present",
      imageSrc: "/gdsc.png",
      href: "",
      description:
        "Fabricate workflows by setting up code standards, code review, automated build processing and testing. Deliver test-driven development through automated testing with Jest, Selenium, and GitHub Actions. Implement club website by using NextJS, React, and TypeScript",
    },
    {
      company: "CodeDay",
      position: "Project Contributor",
      date: "Oct 2023 - Nov 2023",
      imageSrc: "/codeday.webp",
      href: "",
      description:
        "Improved reliability of an open-source project by implementing a test case with JavaScript and Mocha. Led a team of 3 to verify conversions from kWh to BTU energy units, resulting in increased confidence in data integrity",
    },
  ],
  education: [
    {
      school: "California State University, San Marcos",
      degree: "Bachelors of Science in Software Engineering",
      gpa: "3.95/4.00",
      date: "Aug 2022 - Present",
      imageSrc: "/education/csusm.png",
      href: "https://www.csusm.edu/",
      desc: "Courses: Data Structures & Algorithms, Software Design & Development, Database Management Systems, Calculus I-II, Real-Time Concepts For Embedded Systems, Physics | GPA: 3.95/4.00",
    },
    {
      school: "Computing Talent Initiative Accelerate",
      degree: "Technical Interview Prep",
      gpa: "",
      date: "May 2023 - Dec 2023",
      imageSrc: "/education/cti.png",
      href: "https://computingtalentinitiative.org/accelerate/",
      desc: "Participated in a technical interview prep program that helped improve problem solving skills along with in-depth open-source experience. This is where I first learned how to use Git!",
    },
    {
      school: "California Virtual Academy @ San Diego",
      degree: "High School Diploma",
      gpa: "",
      date: "Aug 2020 - Jun 2022",
      imageSrc: "/education/cava.webp",
      href: "https://cava.k12.com/",
      desc: "",
    },
    {
      school: "River Valley High School @ Marion, Ohio",
      degree: "Education",
      gpa: "",
      date: "Aug 2018 - Jun 2020",
      imageSrc: "/education/rvhs.png",
      href: "https://hs.rvk12.org/",
      desc: "",
    },
  ],
  skills: {
    languages: ["Python", "C++", "TypeScript", "CSS", "HTML", "JSON", "Yaml"],
    technologies: ["React", "React Native", "NodeJS", "Vite", "NextJS", "Expo"],
    tools: [
      "AWS",
      "Google Cloud",
      "MongoDB",
      "VSCode",
      "Docker",
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
  projects: [
    {
      title: "Routify",
      description:
        "City pathfinding visualizer. Used to learn fundamental graph traversal algorithms such as BFS, DFS, or A* Search.",
      websiteUrl: "https://www.routify.cc",
      githubUrl: "https://www.github.com/jaedonspurlock01/routify",
      imageSrc: "/projects/routify.gif",
      date: "Jan 2024 - Mar 2024",
      tags: [
        "JavaScript",
        "NextJS",
        "ReactJS",
        "ThreeJS",
        "HTML",
        "CSS",
        "Nominatim API",
        "Overpass API",
        "Amazon S3",
      ],
    },
    {
      title: "DreamLog",
      description:
        "Dream journal mobile application with local-first architecture and in-depth sleep and dream recall analysis.",
      websiteUrl: null,
      githubUrl: "https://www.github.com/jaedonspurlock01/dreamlog",
      imageSrc: "/projects/dreamlog.png",
      date: "Aug 2024 - Present",
      tags: ["React Native", "TypeScript", "Expo", "SupaBase", "PowerSync"],
    },
    {
      title: "Reside",
      description:
        "Real estate concept website constructed with React, NextJS, ShadcnUI, Java Spring, and deployed with Vercel.",
      websiteUrl: null,
      githubUrl: "https://github.com/JaedonSpurlock01/reside",
      imageSrc: "/projects/reside.webp",
      date: "Mar 2024 - Apr 2024",
      tags: [
        "TypeScript",
        "Java",
        "Python",
        "NextJS",
        "React",
        "MapBox API",
        "CSS",
        "MongoDB",
      ],
    },
    {
      title: "GDSC Student Platform",
      description:
        "Developing technical interview & project prep platform for students at CSUSM.",
      websiteUrl: "https://github.com/JaedonSpurlock01/robotcar",
      githubUrl: "https://github.com/JaedonSpurlock01/robotcar",
      imageSrc: "/projects/gdscweb.png",
      date: "Jun 2024 - Present",
      tags: ["TypeScript", "React", "NextJS", "MagicUI", "ShadcnUI"],
    },
    {
      title: "Robotic Car Platform",
      description:
        "Contributed to the assembly and software development of a remote-controlled 4-wheeled robotic car.",
      websiteUrl: null,
      githubUrl: "https://github.com/JaedonSpurlock01/robotcar",
      imageSrc: "/projects/robotcar.webp",
      date: "April 2024 - May 2024",
      tags: [
        "C++",
        "ROS",
        "PWM",
        "Raspberry PI",
        "SDL API",
        "Motors",
        "DC-DC",
        "Joystick",
      ],
    },
    {
      title: "WebWizzard",
      description:
        "AI chatbot chrome extension that provides chat prompting on websites and also uses web scraping to gather relevant data.",
      websiteUrl: null,
      githubUrl: "https://github.com/JaedonSpurlock01/webwizzard",
      imageSrc: "/projects/webwizzard.png",
      date: "Dec 2023",
      tags: [
        "JavaScript",
        "Chrome",
        "Extension",
        "Gemini AI",
        "DOM API",
        "React",
        "JSON",
      ],
    },
  ],
};
