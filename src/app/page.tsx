import { CommandMenu } from "@/components/command-menu";
import { ContactModal } from "@/components/contact-modal";
import { ThemeAvatar } from "@/components/theme-avatar";
import { Metadata } from "next";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ExternalLinkIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  CodeIcon,
  RocketIcon,
} from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

const SKILL_ICONS: Record<string, string> = {
  languages: "01",
  frameworks: "02",
  data: "03",
  infrastructure: "04",
  tools: "05",
};

const SKILL_LABELS: Record<string, string> = {
  languages: "Languages",
  frameworks: "Frameworks",
  data: "Data",
  infrastructure: "Infra",
  tools: "Tools",
};

export default function Page() {
  return (
    <main className="noise-overlay min-h-screen bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10 md:px-8 md:py-16">
        {/* ===== BENTO GRID ===== */}
        <div className="bento-grid">
          {/* ===== HERO CARD (3x2) ===== */}
          <article
            className="bento-card bento-hero col-span-1 md:col-span-2 lg:col-span-3 row-span-1 md:row-span-2 flex flex-col justify-between animate-fade-in-up delay-0"
          >
            <div className="relative z-10">
              <div className="mb-6">
                <div className="maker-badge font-mono text-xs uppercase tracking-wider">
                  <span className="maker-text">Open to building cool things</span>
                </div>
              </div>

              <h1 className="font-display text-4xl leading-none tracking-tight sm:text-5xl md:text-6xl lg:text-8xl">
                {RESUME_DATA.name.split(" ")[0]}
                <br />
                <span className="text-accent">
                  {RESUME_DATA.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>

              <p className="mt-4 text-lg font-medium text-muted-foreground sm:text-xl md:text-2xl">
                {RESUME_DATA.about}
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPinIcon className="h-4 w-4" />
                <a
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-bold"
                >
                  {RESUME_DATA.location}
                </a>
              </div>

              {/* About summary with inline quote */}
              <p className="inline-quote mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                {RESUME_DATA.summary}
              </p>
            </div>

            <div className="relative z-10 mt-6 flex items-end justify-between">
              <ThemeAvatar
                src={RESUME_DATA.avatarUrl}
                alt={RESUME_DATA.name}
                initials={RESUME_DATA.initials}
              />

              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Scroll to explore ↓
              </div>
            </div>
          </article>

          {/* ===== CONTACT CARD (1x2) ===== */}
          <article
            className="bento-card row-span-1 md:row-span-2 flex flex-col animate-fade-in-up delay-75"
          >
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Connect
            </h2>

            <div className="flex-1 flex items-center justify-center mt-4 md:mt-0">
              <div className="flex flex-row flex-wrap justify-center gap-3 md:flex-col md:gap-4">
                {RESUME_DATA.contact.email && (
                  <a
                    href={`mailto:${RESUME_DATA.contact.email}`}
                    className="icon-btn"
                    aria-label="Email"
                  >
                    <MailIcon className="h-5 w-5" />
                  </a>
                )}
                {RESUME_DATA.contact.tel && (
                  <a
                    href={`tel:${RESUME_DATA.contact.tel}`}
                    className="icon-btn"
                    aria-label="Phone"
                  >
                    <PhoneIcon className="h-5 w-5" />
                  </a>
                )}
                {RESUME_DATA.contact.social.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Print-only contact */}
            <div className="hidden text-xs text-muted-foreground print:block print:mt-2">
              <p>{RESUME_DATA.contact.email}</p>
              <p>{RESUME_DATA.contact.tel}</p>
            </div>
          </article>

          {/* ===== EXPERIENCE SECTION HEADER ===== */}
          <div
            className="col-span-full flex items-center gap-4 py-4 animate-fade-in-up delay-300"
          >
            <BriefcaseIcon className="h-6 w-6 text-accent" />
            <h2 className="font-display text-2xl sm:text-3xl">Experience</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* ===== EXPERIENCE CARDS ===== */}
          {RESUME_DATA.work.map((company, companyIndex) => (
            <article
              key={company.company}
              className="bento-card col-span-full animate-fade-in-up"
              style={{
                animationDelay: `${375 + companyIndex * 75}ms`,
              }}
            >
              {/* Horizontal header with all metadata */}
              <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                <h3 className="text-xl font-semibold">
                  <a
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-bold"
                  >
                    {company.company}
                    <ExternalLinkIcon className="ml-1.5 inline h-4 w-4 align-baseline text-muted-foreground" />
                  </a>
                </h3>
                <span className="text-sm text-muted-foreground">
                  {company.location}
                </span>
                <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                  {company.badges[0]}
                </span>
                <span className="w-full text-left font-mono text-xs text-muted-foreground sm:ml-auto sm:w-auto">
                  {company.start} — {company.end}
                </span>
              </div>

              {/* Role timeline */}
              <div className="space-y-4">
                {company.roles.map((role, roleIndex) => (
                  <div
                    key={role.title}
                    className={`role-timeline ${companyIndex === 0 && roleIndex === 0 ? "role-current" : ""}`}
                  >
                    <div className="mb-2 flex items-baseline justify-between gap-4">
                      <h4 className="font-semibold">{role.title}</h4>
                      <span className="shrink-0 font-mono text-xs text-muted-foreground">
                        {role.start}
                      </span>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {role.description.slice(0, 3).map((point, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-accent">→</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}

          {/* ===== EDUCATION CARD ===== */}
          <article
            className="bento-card row-span-1 md:row-span-2 animate-fade-in-up delay-525"
          >
            <div className="mb-4 flex items-center gap-2">
              <GraduationCapIcon className="h-5 w-5 text-accent" />
              <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Education
              </h2>
            </div>

            {RESUME_DATA.education.map((edu) => (
              <div key={edu.school} className="mt-4">
                <h3 className="text-lg font-semibold">
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-bold"
                  >
                    {edu.school}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {edu.degree}
                </p>
                <p className="text-sm text-muted-foreground">{edu.location}</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">
                    {edu.start} — {edu.end}
                  </span>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    GPA: {edu.gpa}
                  </span>
                </div>

                <a
                  href={edu.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg border-2 border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  <ExternalLinkIcon className="h-4 w-4" />
                  View Certificate
                </a>
              </div>
            ))}
          </article>

          {/* ===== SKILLS CARD ===== */}
          <article
            className="bento-card col-span-1 md:col-span-2 lg:col-span-3 row-span-1 md:row-span-2 animate-fade-in-up delay-600"
          >
            <div className="mb-6 flex items-center gap-2">
              <CodeIcon className="h-5 w-5 text-accent" />
              <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Skills & Technologies
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {Object.entries(RESUME_DATA.skills).map(
                ([category, skills], catIndex) => (
                  <div
                    key={category}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${700 + catIndex * 50}ms` }}
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <span className="font-mono text-2xl font-bold text-accent/30">
                        {SKILL_ICONS[category]}
                      </span>
                      <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        {SKILL_LABELS[category]}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className="skill-badge animate-fade-in-scale"
                          style={{
                            animationDelay: `${750 + catIndex * 50 + skillIndex * 30}ms`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </article>

          {/* ===== PROJECTS SECTION HEADER ===== */}
          <div
            className="col-span-full flex items-center gap-4 py-4 animate-fade-in-up delay-800 print-force-new-page"
          >
            <RocketIcon className="h-6 w-6 text-accent" />
            <h2 className="font-display text-2xl sm:text-3xl">Projects</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* ===== PROJECT CARDS ===== */}
          {RESUME_DATA.projects.map((project, index) => (
            <article
              key={project.title}
              className="bento-card animate-fade-in-up"
              style={{ animationDelay: `${900 + index * 75}ms` }}
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-bold inline-flex items-center gap-2"
                    >
                      {project.title}
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-secondary px-2 py-0.5 font-mono text-[10px] text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          {/* ===== FOOTER CARD ===== */}
          <article
            className="bento-card bento-cta col-span-full flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left animate-fade-in-up delay-1000"
          >
            <div className="relative z-10">
              <p className="font-display text-xl sm:text-2xl">Let's build something together</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Always excited to collaborate on meaningful projects
              </p>
            </div>
            <ContactModal email={RESUME_DATA.contact.email}>
              <button className="cta-button rounded-xl px-6 py-3 font-semibold">
                <span>Say Hello</span>
              </button>
            </ContactModal>
          </article>
        </div>
      </div>

      <CommandMenu
        links={RESUME_DATA.contact.social.map((social) => ({
          url: social.url,
          title: social.name,
        }))}
      />
    </main>
  );
}
