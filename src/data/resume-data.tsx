import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Gustavo Aguiar",
  initials: "GA",
  location: "Lisbon, Portugal",
  locationLink: "https://www.google.com/maps/place/Lisbon",
  about: "Senior Software Engineer",
  summary:
    "AI-oriented Software Engineer from the Azores, livin in Lisbon, passionate about continuous learning, optimizing engineering workflows (incl. AI tooling), and building practical software. Keen interest in personal projects and currently expanding skills in modern web development (React, Next.js).",
  avatarUrl:
    "https://lh3.googleusercontent.com/a/ACg8ocKmo3cjnPqsAkc1NWeTTsogHSxtuJT-5keOv0Us9oyRKQ=s576-c-no",
  contact: {
    email: "me@gustavoaaguiar.com",
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
      location: "Lisbon, Portugal",
      start: "2019",
      end: "2022",
      gpa: "17/20",
      certificateUrl: "./id_blur_certificate.pdf",
    },
  ],
  work: [
    {
      company: "much. Consulting",
      link: "https://muchconsulting.com",
      badges: ["Hybrid"],
      title: "Senior Software Engineer",
      location: "Lisbon, Portugal",
      logo: "https://muchconsulting.com/web/image/website/1/logo/much.%20Consulting?unique=f298de0",
      start: "2023",
      end: "Present",
      description: [
        "Initiated AI-based workflows & internal workshops, boosting engineering productivity.",
        "Promoted to Senior level in 1.5 years due to exceptional performance.",
        "Refined engineering workflows, improving team efficiency and code quality standards.",
        "Led complex Odoo ERP projects for key clients; mentored junior engineers.",
        "Developed, customized, and delivered Odoo solutions, achieving top-tier deliverability rates.",
      ],
    },
    {
      company: "Manta, an IBM Company",
      link: "https://manta.io",
      badges: ["Remote"],
      title: "Junior Software Engineer",
      location: "Lisbon, Portugal",
      logo: "",
      start: "2022",
      end: "2023",
      description: [
        "Developed complex SQL parsers (ANTLR) and entity resolution algorithms for core data lineage system.",
        "Integrated advanced analytics features for predictive data movement insights.",
      ],
    },
  ],
  skills: [
    "Java",
    "Python",
    "JavaScript",
    "C++",
    "C#",
    "C",
    "React",
    "Next.js",
    "TypeScript",
    "Vue.js",
    "Spring Boot",
    "ANTLR",
    "SQL",
    "Odoo",
    "Cursor IDE",
    "Docker",
    "Kubernetes",
    "AWS",
  ],
  projects: [
    {
      title: "Quizzes Tutor",
      techStack: [
        "Java",
        "Spring Boot",
        "Vue.js",
        "TypeScript",
        "Cypress",
        "Apache JMeter",
        "Spock Framework",
      ],
      description:
        "Full-stack educational app with Java Spring Boot back-end and Vue.js/TS front-end. E2E testing with Cypress, load testing with JMeter.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/gustavo-aguiar01/ES2122",
      },
    },
    {
      title: "Class System",
      techStack: ["Java", "gRPC"],
      description:
        "Distributed class enrollment system built in Java with gRPC.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/gustavo-aguiar01/SD2122",
      },
    },
    {
      title: "Company Management",
      techStack: ["Java"],
      description:
        "Java management app using design patterns.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/gustavo-aguiar01/PO2021",
      },
    },
    {
      title: "Numbrix Solver",
      techStack: ["Python"],
      description:
        "AI program built in Python used to solve Numbrix puzzles (DFS, BFS, Greedy Search & RBFS searching algorithms).",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/gustavo-aguiar01/IA2122",
      },
    },
    {
      title: "L22 Compiler",
      techStack: ["C++"],
      description:
        "Compiler built in C++ for a simple programming language L22.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/gustavo-aguiar01/Comp2122",
      },
    },
    {
      title: "User-Level FS",
      techStack: ["C"],
      description:
        "File system at the user level built in C that uses primary memory to save its contents and handles multi-threaded usage.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/gustavo-aguiar01/SO2021",
      },
    },
    {
      title: "Messaging Forum",
      techStack: ["C"],
      description:
        "Client-Server architecture used for a centralized messaging service via TCP and UDP built in C.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/gustavo-aguiar01/RC2122",
      },
    },
  ],
} as const;
