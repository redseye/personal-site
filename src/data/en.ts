import type { SiteContent } from "./types";

export const en: SiteContent = {
  meta: {
    title: "George Lin - Senior Software Engineer & System Analyst",
    description:
      "8+ years of full-stack development experience. Specialized in system analysis, project management, and architecture design across finance, warehousing, CRM & ERP domains.",
  },
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    contact: "Contact",
    resume: "Download CV",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "George Lin",
    title: "Senior Software Engineer & System Analyst",
    subtitle:
      "8+ years of full-stack development. Specialized in system analysis and architecture design — from requirements gathering to production deployment.",
    cta: "Get in Touch",
    ctaSecondary: "View Experience",
    stats: [
      { value: "8+", label: "Years Experience" },
      { value: "5", label: "Years in Finance" },
      { value: "124+", label: "Features Delivered" },
      { value: "9", label: "Team Members Led" },
    ],
  },
  about: {
    label: "About",
    title: "About Me",
    paragraphs: [
      "With over 8 years of full-stack development experience spanning finance, warehousing, CRM & ERP industries. Not just a developer — a versatile software engineer with strong system analysis, project management, and team building capabilities.",
      "Previously served as Senior Architect Engineer at Delta Electronics, and grew from Software Engineer to System Analyst at HY-Tech, leading a 9-person team managing 3 concurrent projects. Skilled at cross-department collaboration with PMs, Sales, QA, and DevOps teams.",
      "Currently working as a freelancer while teaching programming to students ranging from junior high school to working professionals. Passionate about transforming complex system requirements into clear architectural designs.",
    ],
    highlights: [
      { value: "5 yrs", label: "System Analysis" },
      { value: "3 yrs", label: "Project Management" },
      { value: "3 yrs", label: "Teaching" },
      { value: "20", label: "Max Team Size" },
    ],
  },
  skills: {
    label: "Skills",
    title: "Tech Stack",
    subtitle: "Battle-tested skills from years of hands-on experience",
    categories: [
      {
        name: "Backend",
        items: [
          { name: "C#/.NET", level: 95 },
          { name: "C++", level: 80 },
          { name: "PHP", level: 70 },
          { name: "Node.js", level: 60 },
          { name: "Python", level: 55 },
          { name: "Go", level: 45 },
        ],
      },
      {
        name: "Frontend",
        items: [
          { name: "JavaScript", level: 90 },
          { name: "Vue.js", level: 85 },
          { name: "jQuery", level: 85 },
          { name: "React", level: 65 },
          { name: "CSS/Bootstrap", level: 80 },
        ],
      },
      {
        name: "Database & Middleware",
        items: [
          { name: "MSSQL", level: 90 },
          { name: "MySQL", level: 80 },
          { name: "Redis", level: 70 },
          { name: "Kafka", level: 60 },
        ],
      },
      {
        name: "Tools & Platforms",
        items: [
          { name: "Git/SVN/TFS", level: 90 },
          { name: "GCP", level: 70 },
          { name: "Docker", level: 55 },
          { name: "NUnit", level: 75 },
        ],
      },
    ],
  },
  experience: {
    label: "Experience",
    title: "Work Experience",
    jobs: [
      {
        company: "Freelance",
        role: "Full-Stack Developer & System Analyst",
        period: "2023/08 - Present",
        type: "Freelance",
        bullets: [
          "Independently evaluate project scope and development timelines",
          "Conduct requirement interviews and system analysis, produce comprehensive SA documentation",
          "Handle system design, database design, and full-stack development",
          "Deliver user education and training for smooth system handoff",
        ],
      },
      {
        company: "Delta Electronics",
        role: "Software Design Sr. Engineer",
        period: "2023/03 - 2023/08",
        type: "Full-time",
        bullets: [
          "Senior engineer on the Architect Team, responsible for AI system frontend & backend",
          "Designed system component architecture",
          "Tech stack: Java Spring + React",
        ],
      },
      {
        company: "HY-Tech",
        role: "System Analyst",
        period: "2019/06 - 2023/03",
        type: "Full-time",
        bullets: [
          "Department System Analyst leading a team of 9",
          "Managed system analysis, design, and delivery for 3 concurrent projects",
          "Delivered 124 new features, resolved 39 refactors and critical issues",
          "Assisted PM with schedule control, resource integration, and team management",
          "Integrated AI analytics, facial recognition, and multi-factor authentication systems",
        ],
      },
      {
        company: "H&L Consulting",
        role: "Chief Engineer",
        period: "2018/06 - 2019/04",
        type: "Full-time",
        bullets: [
          "Led complete restructuring of internal systems: 6 categories, 25 main features",
          "Built and managed a 3-person IT team",
          "Frontend Vue.js + Backend .NET Framework 4.5, achieving full separation",
          "System deployed on GCP with Google enterprise accounts",
        ],
      },
      {
        company: "HY-Tech",
        role: "Software Engineer & System Analyst",
        period: "2015/04 - 2018/03",
        type: "Full-time",
        bullets: [
          "Executed 7+ projects, growing from developer to development lead",
          "Assisted 4 enterprises with system development and deployment",
          "Covered finance, warehousing, telecom retail, and government sectors",
          "Development includes frontend, backend, WebAPI, and socket communication",
        ],
      },
    ],
  },
  other: {
    label: "More",
    title: "Other Experience",
    items: [
      {
        title: "Programming Teaching",
        period: "2019 - Present",
        bullets: [
          "APCS, CPE, and programming skill coaching",
          "Languages: C++, C#, .NET 6, JavaScript, jQuery, SQL",
          "Remote teaching, 5 steady students from junior high to working professionals",
        ],
      },
      {
        title: "Freelance Development",
        period: "2016 - Present",
        bullets: [
          "Independent system development (.NET, MSSQL, Vue.js, jQuery)",
          "Web and desktop application development",
          "SA document recreation, logic flaw identification, and system refactoring assistance",
        ],
      },
    ],
  },
  contact: {
    label: "Contact",
    title: "Get in Touch",
    subtitle:
      "Whether it's a project collaboration, technical consulting, or programming lessons — feel free to reach out.",
    email: "fgtyu2001@gmail.com",
    phone: "0928-352-553",
    github: "https://github.com/redseye",
    cta: "Send Email",
  },
  footer: {
    copyright: "George Lin. All rights reserved.",
    status: "Open to Work",
  },
};
