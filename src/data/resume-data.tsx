import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Gustavo Aguiar",
  initials: "GA",
  location: "Lisbon, Portugal",
  locationLink: "https://www.google.com/maps/place/Lisbon",
  about: "Engineering Manager",
  summary:
    "Engineering Manager from the Azores, based in Lisbon. Leading a team of 9 engineers while driving AI adoption across the organization. Passionate about building high-performing teams, optimizing workflows through AI tooling, and bridging technical and non-technical stakeholders.",
  avatarUrl:
    "https://lh3.googleusercontent.com/a/ACg8ocKmo3cjnPqsAkc1NWeTTsogHSxtuJT-5keOv0Us9oyRKQ=s576-c-no",
  contact: {
    email: "me@gustavoaaguiar.com",
    tel: "+351961883217",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/gustavoalmaguiar",
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
      certificateUrl: "/id_blur_certificate.pdf",
    },
  ],
  work: [
    {
      company: "much. Consulting",
      link: "https://muchconsulting.com",
      badges: ["Hybrid"],
      location: "Lisbon, Portugal",
      logo: "https://muchconsulting.com/web/image/website/1/logo/much.%20Consulting?unique=f298de0",
      start: "Oct 2023",
      end: "Present",
      roles: [
        {
          title: "Engineering Manager",
          start: "Aug 2025",
          end: "Present",
          description: [
            "Lead a team of 9 engineers, overseeing project delivery, sprint planning, and technical direction.",
            "Drove 10% efficiency improvement across engineering through AI workflow adoption (Claude Code, AI agents).",
            "Led complex ERP projects end-to-end, delivering ETL data migrations on time and within scope.",
            "Mentored 2 engineers directly; one team member promoted within first 6 months under my guidance.",
            "Bridging technical/non-technical worlds: empowering consultants to understand Odoo modules via AI tooling.",
          ],
        },
        {
          title: "Senior Software Engineer",
          start: "Mar 2025",
          end: "Aug 2025",
          description: [
            "Promoted for outstanding performance in complex ERP deliveries and process improvements.",
            "Spearheaded AI adoption; led internal workshops (including for leadership) to integrate AI tooling into workflows.",
          ],
        },
        {
          title: "Software Engineer",
          start: "Oct 2023",
          end: "Mar 2025",
          description: [
            "Delivered and maintained high-impact Odoo ERP solutions; achieved highest billable rates in the company.",
          ],
        },
      ],
    },
    {
      company: "Manta, an IBM Company",
      link: "https://manta.io",
      badges: ["Remote"],
      location: "Lisbon, Portugal",
      logo: "",
      start: "Oct 2022",
      end: "Sep 2023",
      roles: [
        {
          title: "Junior Software Engineer",
          start: "Oct 2022",
          end: "Sep 2023",
          description: [
            "Developed complex SQL parsers (ANTLR) and entity resolution algorithms for core data lineage system.",
            "Integrated advanced analytics features for predictive data movement insights.",
          ],
        },
      ],
    },
  ],
  skills: {
    languages: ["Java", "Python", "JavaScript", "TypeScript", "C++", "C#", "C"],
    frameworks: ["Spring Boot", "React", "Next.js", "Vue.js", "Odoo", "REST APIs"],
    data: ["PostgreSQL", "BigQuery", "Snowflake"],
    infrastructure: ["Docker", "Kubernetes", "AWS"],
    tools: ["Git", "Cursor IDE", "Claude Code", "ANTLR", "Cypress", "JMeter"],
  },
  projects: [
    {
      title: "Ping-Pong Tracker",
      techStack: ["Next.js", "Prisma", "TypeScript"],
      description:
        "Match tracker & leaderboard system used internally at much. Consulting.",
      logo: "",
      link: {
        label: "pingpong.gustavoaaguiar.com",
        href: "https://pingpong.gustavoaaguiar.com",
      },
    },
    {
      title: "Quizzes Tutor",
      techStack: ["Java", "Spring Boot", "Vue.js", "Cypress"],
      description:
        "Full-stack educational platform with Java Spring Boot back-end and Vue.js front-end.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/gustavo-aguiar01/ES2122",
      },
    },
    {
      title: "Class System",
      techStack: ["Java", "gRPC"],
      description: "Distributed class enrollment system built in Java with gRPC.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/gustavo-aguiar01/SD2122",
      },
    },
  ],
} as const;
