import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Gustavo Aguiar",
  initials: "GA",
  location: "Lisbon, Portugal",
  locationLink: "https://www.google.com/maps/place/Lisbon",
  about: "Software Engineer",
  summary: "Originally from Terceira Island in the Azores, Portugal. I'm a simple Software Engineer driven by a complex desire to continuously learn, grow, and develop meaningful, impactful software.",
  avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocKmo3cjnPqsAkc1NWeTTsogHSxtuJT-5keOv0Us9oyRKQ=s576-c-no",
  contact: {
    email: "gustavoaaguiar2001@gmail.com",
    tel: "+351961883217",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/gustavo-aguiar01",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gustavoaaguiar",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Instituto Superior Técnico",
      link: "https://tecnico.ulisboa.pt/en/",
      degree: "Bachelor of Engineering in Computer Science",
      start: "2019",
      end: "2022",
      gpa: "17/20",
    },
  ],
  work: [
    {
      company: "much. Consulting",
      link: "https://muchconsulting.com",
      badges: ["Hybrid"],
      title: "Software Engineer",
      logo: "", 
      start: "2023",
      end: "Present",
      description: [
        "Enhanced e-commerce platforms by developing custom modules and integrating various APIs.",
        "Enriched Odoo's core functionality through collaborative development.",
        "Delivered tailored IT solutions that precisely met client requirements.",
        "Mentored new team members, focusing on the Odoo framework.",
      ],
    },
    {
      company: "Manta, an IBM Company",
      link: "https://manta.io",
      badges: ["Hybrid"],
      title: "Junior Software Engineer",
      logo: "",
      start: "2022",
      end: "2023",
      description: [
        "Played a pivotal role in developing and refining MANTA’s automated lineage platform, focusing on advanced SQL script parsing and grammar construction using ANTLR.",
        "Actively participated in the transformation of MANTA’s product into a cloud-based SaaS.",
        "Specialized in parsing complex SQL dialects like Snowflake, Google Big Query, and Amazon Redshift, significantly improving data flow analysis and metadata extraction.",
        "Advocated for and practiced writing clean, modular, and testable Java code, contributing to the maintainability and scalability of the product.",
      ],
    },
  ],
  skills: [
    "Java",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "C",
    "React",
    "TypeScript",
    "ANTLR",
    "SQL",
  ],
  projects: [
    {
      title: "Quizzes Tutor",
      techStack: ["Java", "Spring Boot", "Vue.js", "TypeScript", "Cypress", "Apache JMeter", "Spock Framework"],
      description: "Implemented full-stack feature of Failed Answers applying Scrum method using Java with Spring Boot back-end and Vue.js with TypeScript front-end. Performed E2E testing with Cypress JavaScript framework, load testing with Apache JMeter, unit and integration testing with Maven on Spock framework using web services with RESTful API.",
      logo: "", 
      link: {
        label: "github.com",
        href: "https://github.com/gustavo-aguiar01/ES2122",
      },
    },
    {
      title: "Class System",
      techStack: ["Java", "gRPC"],
      description: "Client-Server architecture local distributed system built in Java with multiple servers where clients invoke remote procedure calls using gRPC framework to manage class enrollments.",
      logo: "", 
      link: {
        label: "github.com",
        href: "https://github.com/gustavo-aguiar01/SD2122",
      },
    },
    {
      title: "Company Management",
      techStack: ["Java"],
      description: "Management application built in Java for a distribution company, using multiple design patterns.",
      logo: "", 
      link: {
        label: "github.com",
        href: "https://github.com/gustavo-aguiar01/PO2021",
      },
    },
    {
      title: "Numbrix Solver",
      techStack: ["Python"],
      description: "AI program built in Python used to solve Numbrix puzzles (DFS, BFS, Greedy Search & RBFS searching algorithms).",
      logo: "", 
      link: {
        label: "github.com",
        href: "https://github.com/gustavo-aguiar01/IA2122",
      },
    },
    {
      title: "L22 Compiler",
      techStack: ["C++"],
      description: "Compiler built in C++ for a simple programming language L22.",
      logo: "", 
      link: {
        label: "github.com",
        href: "https://github.com/gustavo-aguiar01/Comp2122",
      },
    },
    {
      title: "User-Level FS",
      techStack: ["C"],
      description: "File system at the user level built in C that uses primary memory to save its contents and handles multi-threaded usage.",
      logo: "", 
      link: {
        label: "github.com",
        href: "https://github.com/gustavo-aguiar01/SO2021",
      },
    },
    {
      title: "Messaging Forum",
      techStack: ["C"],
      description: "Client-Server architecture used for a centralized messaging service via TCP and UDP built in C.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/gustavo-aguiar01/RC2122",
      },
    },
  ],  
} as const;
