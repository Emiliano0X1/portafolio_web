/**
 * Centralized Portfolio Data Configuration
 * Holds all profile details, experience, projects, skills, and links for Emiliano Gonzalez Perez.
 */

export const portfolioData = {
  personal: {
    name: "Emiliano Gonzalez Perez",
    role: "SOFTWARE ENGINEER & FULL STACK DEVELOPER",
    headline: "Senior Software Engineering Student at CETYS Universidad",
    subheadline: "Passionate about building scalable applications with AI integrations & real-time systems.",
    education: "B. Sc. in Software Engineering • GPA 95.91/100 (Graduating June 2027)",
    cvLink: "#",
    email: "egp2506@gmail.com",
    phone: "+52 1 646 1981307",
    location: "Ensenada, B.C, México",
    github: "https://github.com/Emiliano0X1",
    linkedin: "https://www.linkedin.com/in/emiliano-gonzalez-perez-601226292",
    footerText: "© 2026 Emiliano Gonzalez Perez • Built with precision & passion",
  },

  summary: {
    title: "Summary",
    paragraphs: [
      "I am a senior Software Engineering student at CETYS Universidad in Mexico who is passionate about building impactful, high-performance software solutions. Over the years, I have honed my expertise across full-stack development, cloud architecture, and competitive algorithmic problem solving, always striving to deliver robust systems that balance engineering rigor with real-world user value.",
      "Beyond technical skills, I am confident in public speaking, enjoy working in teams, and take pride in being responsible, diligent, and organized. I always aim for the highest quality in my work, no matter the challenge. I'm now seeking an opportunity to contribute my ideas, learn from real world experiences, and be part of something that can help shape a better future together.",
    ],
    quote:
      "Maybe tomorrow begin like a dream",
  },

  experience: {
    title: "Work Experience",
    jobs: [
      {
        id: "dilato",
        role: "SOFTWARE ENGINEER INTERN",
        company: "DILATO Infotech Limited | ListaHire Project",
        period: "June 2026 – Present",
        location: "Tijuana, B.C, México",
        description:
          "Engineering core SaaS infrastructure for ListaHire, hardening platform security, eliminating session concurrency issues, and building AI data pipelines.",
        bullets: [
          "Implemented Row-Level Security (RLS) across 10+ Supabase tables, closing a data isolation gap and preventing cross-tenant data leakage in a multi-tenant SaaS platform.",
          "Diagnosed and resolved a critical token collision bug causing mid-session logouts by architecting a centralized auth module and race-condition-safe request deduplication, eliminating the app's most significant stability issue.",
          "Integrated Gemini API to extract structured parameters from job descriptions across 50+ vacancies, validating outputs against schema constraints to ensure accuracy, cutting manual data entry and accelerating onboarding by 3x.",
        ],
      },
      {
        id: "sempra",
        role: "FULL STACK DEVELOPER (1ST PLACE HACKATHON)",
        company: "SEMPRA Infrastructure | Innovation Hackathon Winner",
        period: "January 2026 – May 2026",
        location: "Ensenada, B.C, México",
        description:
          "Engineered AURA, an enterprise B2B SaaS platform designed to train 1,000+ employees and reduce critical workplace accidents across energy infrastructure facilities.",
        bullets: [
          "Built an enterprise B2B SaaS platform (React/Vite, Node.js/Express, PostgreSQL, Prisma ORM) to reduce workplace accidents through educational, role-based training workflows across 3 corporate personas.",
          "Owned the admin content creation feature end-to-end, designing a React/Vite UI with live preview, building a multiformat ingestion pipeline (images, PDFs), and integrating Gemini API to auto-generate personalized training content.",
          "Cut training module creation time from 3 hours to 10 seconds per module, enabling 12x more safety content to be deployed monthly.",
        ],
      },
      {
        id: "cafetto",
        role: "FULL STACK DEVELOPER",
        company: "CAFETTO | Official App Service",
        period: "July 2024 – June 2025",
        location: "Puebla, Puebla, México",
        description:
          "Engineered an end-to-end ordering mobile app and cloud backend with asynchronous queue architectures to support rapid operational expansion.",
        bullets: [
          "Engineered a scalable full-stack mobile app (React Native, Java, Spring Boot) with a layered backend and priority queue-based order processing using Amazon SQS, handling a 180% increase in daily orders (25 to 70+ per day).",
          "Built the React Native frontend end-to-end—order tracking screens, Firebase push notifications—and deployed containerized backend (Docker) on AWS ECS with Fargate behind an Application Load Balancer.",
        ],
      },
    ],

    selectedProjectsTitle: "Selected Projects",
    projects: [
      {
        id: "smart-bussing",
        title: "Smart Bussing",
        subtitle: "1st Place Winner • Expo Ingeniería CETYS (2025 & 2026)",
        tag: "Spring Boot • React/Expo • Mapbox • A* Algorithm",
        description:
          "Led a 5-person backend team building a transit API with A* multicriteria routing delivering route computations in under 500ms for 100+ active users.",
        link: "https://github.com/Emiliano0X1",
        badge: "1ST PLACE",
        accent: "#FFB800",
      },
      {
        id: "aura-sempra",
        title: "AURA Training Platform",
        subtitle: "1st Place Winner • SEMPRA Infrastructure Innovation Hackathon",
        tag: "React/Vite • Node.js • PostgreSQL • Gemini API",
        description:
          "Enterprise safety training SaaS that automates safety training modules with Gemini API, slashing authoring time by 99% for 1,000+ employees.",
        link: "https://github.com/Emiliano0X1",
        badge: "1ST PLACE",
        accent: "#FFB800",
      },
      {
        id: "leetarena",
        title: "LeetArena",
        subtitle: "Real-time Algorithmic Competition Platform",
        tag: "WebSockets • scikit-learn • Pandas • Gemini API",
        description:
          "Real-time competitive coding platform featuring WebSockets sync, Random Forest match outcome predictions, and automated AI match summaries with 50% lower latency.",
        link: "https://github.com/Emiliano0X1",
        badge: "AI PLATFORM",
        accent: "#FFB800",
      },
    ],
  },

  skills: {
    title: "Skills & Tools",
    skillsColumns: [
      [
        "Full-Stack Architecture",
        "AI & LLM Integration (Gemini, Claude)",
        "Real-Time Systems & WebSockets",
        "Row-Level Security & Auth Systems",
        "Algorithms & Data Structures (ICPC)",
      ],
      [
        "Cloud Infrastructure (AWS ECS, Docker)",
        "Relational Databases (PostgreSQL, Supabase)",
        "Mobile Development (React Native, Expo)",
        "CI/CD Pipelines & Automated Testing (JUnit, Jest)",
        "Asynchronous Queues (Amazon SQS)",
      ],
    ],
    tools: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Java", icon: "java" },
      { name: "Spring Boot", icon: "springboot" },
      { name: "Python", icon: "python" },
      { name: "Node.js", icon: "nodejs" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "aws" },
      { name: "Gemini API", icon: "gemini" },
      { name: "Supabase", icon: "supabase" },
      { name: "Git", icon: "git" },
    ],
    awards: [
      { title: "1st Place Expo Ingeniería CETYS", year: "2025 & 2026" },
      { title: "1st Place SEMPRA Innovation Hackathon", year: "2026" },
      { title: "ICPC Regional Contestant & Top 3 Ensenada", year: "2025 & 2026" },
      { title: "Selected for LA AI Hackathon", year: "2026" },
      { title: "NASA Space Apps Challenge Hackathon", year: "2024" },
    ],
  },

  links: {
    title: "Links & Connect",
    socials: [
      { name: "LinkedIn", platform: "linkedin", url: "https://www.linkedin.com/in/emiliano-gonzalez-perez-601226292" },
      { name: "GitHub", platform: "github", url: "https://github.com/Emiliano0X1" },
      { name: "Email", platform: "email", url: "mailto:egp2506@gmail.com" },
    ],
  },
};
