/**
 * Centralized Portfolio Data Configuration
 * Holds all profile details, albums (experience, projects, awards), skills, and links for Emiliano Gonzalez Perez.
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
    homeGallery: [
      {
        id: "hero-portrait",
        title: "Emiliano Gonzalez Perez",
        caption: "Software Engineer & Builder",
        type: "portrait",
        tag: "CETYS Universidad",
      },
      {
        id: "hero-hackathon",
        title: "SEMPRA Innovation Winner",
        caption: "1st Place Hackathon 2026",
        type: "award",
        tag: "Enterprise AI Safety",
      },
      {
        id: "hero-icpc",
        title: "Competitive Programming",
        caption: "ICPC Regional Finalist",
        type: "code",
        tag: "Algorithms & Data Structures",
      },
      {
        id: "hero-expo",
        title: "Expo Ingeniería Champion",
        caption: "Smart Bussing 2025 & 2026",
        type: "transit",
        tag: "A* Shortest Path",
      },
    ],
  },

  summary: {
    title: "Summary",
    paragraphs: [
      "I am a senior Software Engineering student at CETYS Universidad in Mexico who is passionate about building impactful, high-performance software solutions. Over the years, I have honed my expertise across full-stack development, cloud architecture, and competitive algorithmic problem solving, always striving to deliver robust systems that balance engineering rigor with real-world user value.",
      "Beyond technical skills, I am confident in public speaking, enjoy working in teams, and take pride in being responsible, diligent, and organized. I always aim for the highest quality in my work, no matter the challenge. I'm now seeking an opportunity to contribute my ideas, learn from real world experiences, and be part of something that can help shape a better future together.",
    ],
    quote: "Maybe tomorrow begin like a dream",
  },

  /**
   * Vinyl Album Suite: Experience, Projects, Awards
   * Tracks are ordered chronologically from most recent to oldest.
   * `dateBadge` acts as the track duration (e.g. 06:26, 24-25, 2026).
   */
  albums: {
    experience: {
      id: "experience",
      title: "Work Experience",
      artist: "Emiliano Gonzalez Perez",
      subtitle: "Engineering Careers & Production SaaS",
      year: "2024 – 2026",
      coverTheme: "dark-amber",
      coverTag: "PRODUCTION SAAS",
      coverGradient: "linear-gradient(135deg, #1f1406 0%, #3d2305 50%, #b45309 100%)",
      coverImage: "experience",
      badge: "PRODUCTION",
      description:
        "High-stakes engineering roles spanning multi-tenant SaaS architecture, cloud infrastructure, AI pipelines, and mobile services.",
      tracks: [
        {
          id: "dilato",
          trackNumber: "01",
          title: "Software Engineer Intern",
          company: "DILATO Infotech Limited | ListaHire",
          role: "Software Engineer Intern",
          dateBadge: "06:26",
          dateFull: "June 2026 – Present",
          location: "Tijuana, B.C, México",
          category: "Work Experience",
          badge: "ACTIVE ROLE",
          accentColor: "#FFB800",
          summary:
            "Engineering core multi-tenant SaaS infrastructure for ListaHire, hardening platform security, resolving session concurrency, and implementing AI data pipelines.",
          metrics: [
            { label: "Data Isolation", value: "10+ RLS Tables" },
            { label: "Onboarding Speed", value: "3x Acceleration" },
            { label: "Token Collision", value: "0 Race Conditions" },
          ],
          bullets: [
            "Implemented Row-Level Security (RLS) across 10+ Supabase tables, closing a data isolation gap and preventing cross-tenant data leakage in a multi-tenant SaaS platform.",
            "Diagnosed and resolved a critical token collision bug causing mid-session logouts by architecting a centralized auth module and race-condition-safe request deduplication, eliminating the app's most significant stability issue.",
            "Integrated Gemini API to extract structured parameters from job descriptions across 50+ vacancies, validating outputs against schema constraints to ensure accuracy, cutting manual data entry and accelerating onboarding by 3x.",
          ],
          tags: ["Supabase", "Row-Level Security", "Gemini API", "Node.js", "React", "Auth Systems"],
          links: [
            { label: "GitHub Profile", url: "https://github.com/Emiliano0X1", icon: "github" },
            { label: "LinkedIn Post", url: "https://www.linkedin.com/in/emiliano-gonzalez-perez-601226292", icon: "linkedin" },
          ],
          collage: [
            {
              id: "dilato-arch",
              title: "Multi-Tenant RLS Architecture",
              caption: "Zero data leakage across Supabase tenancy boundaries",
              tag: "Security Architecture",
            },
            {
              id: "dilato-ai",
              title: "Gemini Structured Ingestion",
              caption: "Automated schema-validated JD parameter parsing",
              tag: "AI Pipeline",
            },
            {
              id: "dilato-auth",
              title: "Deduplication Auth Middleware",
              caption: "Eliminated token collisions and ghost sessions",
              tag: "Session Guard",
            },
          ],
        },
        {
          id: "sempra-exp",
          trackNumber: "02",
          title: "Full Stack Developer",
          company: "SEMPRA Infrastructure | Innovation Winner",
          role: "Full Stack Developer",
          dateBadge: "05:26",
          dateFull: "January 2026 – May 2026",
          location: "Ensenada, B.C, México",
          category: "Work Experience",
          badge: "1ST PLACE WINNER",
          accentColor: "#F59E0B",
          summary:
            "Engineered AURA, an enterprise B2B SaaS platform designed to train 1,000+ employees and eliminate critical workplace accidents across energy infrastructure facilities.",
          metrics: [
            { label: "Authoring Speed", value: "3h → 10s" },
            { label: "Audience", value: "1,000+ Personnel" },
            { label: "Module Scaling", value: "12x Monthly" },
          ],
          bullets: [
            "Built an enterprise B2B SaaS platform (React/Vite, Node.js/Express, PostgreSQL, Prisma ORM) to reduce workplace accidents through educational, role-based training workflows across 3 corporate personas.",
            "Owned the admin content creation feature end-to-end, designing a React/Vite UI with live preview, building a multiformat ingestion pipeline (images, PDFs), and integrating Gemini API to auto-generate personalized training content.",
            "Cut training module creation time from 3 hours to 10 seconds per module, enabling 12x more safety content to be deployed monthly.",
          ],
          tags: ["React / Vite", "Node.js / Express", "PostgreSQL", "Prisma ORM", "Gemini API", "B2B SaaS"],
          links: [
            { label: "Project Details", url: "https://github.com/Emiliano0X1", icon: "github" },
            { label: "Innovation Showcase", url: "https://www.linkedin.com/in/emiliano-gonzalez-perez-601226292", icon: "linkedin" },
          ],
          collage: [
            {
              id: "sempra-ui",
              title: "AURA Interactive Training Console",
              caption: "Live role-based workflows for energy facility personnel",
              tag: "Enterprise UX",
            },
            {
              id: "sempra-gemini",
              title: "Generative Module Synthesis",
              caption: "Ingests raw safety PDFs and outputs quizzes & interactive scenarios",
              tag: "AI Engine",
            },
            {
              id: "sempra-data",
              title: "Compliance Analytics Dashboard",
              caption: "Real-time incident rate tracking and training certification stats",
              tag: "Data Viz",
            },
          ],
        },
        {
          id: "cafetto",
          trackNumber: "03",
          title: "Full Stack Mobile Developer",
          company: "CAFETTO | Official App Service",
          role: "Full Stack Mobile & Cloud Developer",
          dateBadge: "07:24",
          dateFull: "July 2024 – June 2025",
          location: "Puebla, Puebla, México",
          category: "Work Experience",
          badge: "PRODUCTION APP",
          accentColor: "#EAB308",
          summary:
            "Architected an end-to-end mobile ordering ecosystem with Amazon SQS priority queues and containerized microservices on AWS ECS with Fargate.",
          metrics: [
            { label: "Order Volume", value: "+180% Daily Growth" },
            { label: "Infra", value: "AWS ECS & Fargate" },
            { label: "Throughput", value: "70+ Orders/Day" },
          ],
          bullets: [
            "Engineered a scalable full-stack mobile app (React Native, Java, Spring Boot) with a layered backend and priority queue-based order processing using Amazon SQS, handling a 180% increase in daily orders (25 to 70+ per day).",
            "Built the React Native frontend end-to-end—order tracking screens, Firebase push notifications—and deployed containerized backend (Docker) on AWS ECS with Fargate behind an Application Load Balancer.",
          ],
          tags: ["React Native", "Java", "Spring Boot", "Amazon SQS", "AWS ECS / Fargate", "Docker", "Firebase"],
          links: [
            { label: "Repository", url: "https://github.com/Emiliano0X1", icon: "github" },
          ],
          collage: [
            {
              id: "cafetto-mobile",
              title: "Customer Order Tracking Screen",
              caption: "Real-time status updates with Firebase Cloud Messaging",
              tag: "Mobile UX",
            },
            {
              id: "cafetto-queue",
              title: "SQS Priority Queue Worker",
              caption: "Zero dropped orders during peak rush-hour loads",
              tag: "Cloud Backend",
            },
            {
              id: "cafetto-docker",
              title: "ECS Fargate Microservices",
              caption: "Containerized Java Spring Boot behind AWS ALB",
              tag: "DevOps / Infra",
            },
          ],
        },
      ],
    },

    projects: {
      id: "projects",
      title: "Featured Projects",
      artist: "Emiliano Gonzalez Perez",
      subtitle: "High-Performance Systems & AI Engines",
      year: "2025 – 2026",
      coverTheme: "sand-gold",
      coverTag: "SYSTEMS & AI",
      coverGradient: "linear-gradient(135deg, #1c1917 0%, #451a03 50%, #d97706 100%)",
      coverImage: "projects",
      badge: "INNOVATION",
      description:
        "Engineered systems solving real-world challenges: A* transit routing, generative AI safety platforms, and real-time competitive matchmaking.",
      tracks: [
        {
          id: "smart-bussing",
          trackNumber: "01",
          title: "Smart Bussing Engine",
          company: "Smart Bussing Transit Engine",
          role: "Backend Lead & Project Leader",
          dateBadge: "05:26",
          dateFull: "2025 – 2026",
          location: "Ensenada, B.C, México",
          category: "Selected Projects",
          badge: "2X 1ST PLACE WINNER",
          accentColor: "#568796",
          summary:
            "This is Smart Bussing, a multiplatform application designed to help people use public transportation in Ensenada, Baja California. With Smart Bussing, our goal was to make public transportation easier to use while helping people better manage their resources, providing the city with transportation and route trends.",
          story: {
            why: "When I was a teenager, I relied on public transportation and experienced firsthand how complicated it was to understand the routes. I got lost several times, and I realized that many other people faced the same problem. Some even spend more money on private transportation simply because they don’t know how to navigate the public transportation system.",
            impact: "With Smart Bussing, our goal was to make public transportation easier to use while helping people better manage their resources. At the same time, the platform provides the city with information about transportation and route trends, creating opportunities for better decisions and contributing to the development of a smarter city.",
            leadership: "As Backend Lead and one of the project leaders, I designed and implemented the backend architecture, developed the route-finding system using the A* algorithm to find the shortest path from Point A to Point B, integrated Mapbox to visualize transportation data, and contributed to the iOS deployment.",
            growth: "However, the biggest lesson was that building a product is more than writing code. I participated in designing the business model, presenting our solution to judges, receiving feedback, and iterating on our proposal. This taught me how to communicate technical ideas, understand user needs, and think about real-world impact.",
            expoAward: "Smart Bussing won first place twice in a row at CETYS Universidad’s ExpoIngeniería. I’m especially proud because it started from a problem I personally experienced and became a solution that could genuinely help my community.",
          },
          metrics: [
            { label: "Routing Latency", value: "< 500ms" },
            { label: "Active Commuters", value: "100+ Users" },
            { label: "Expo Championship", value: "2x 1st Place" },
          ],
          bullets: [
            "Designed and implemented the scalable Java / Spring Boot backend architecture, supporting concurrent route queries and live GPS stop recalculations.",
            "Implemented the A* pathfinding algorithm to calculate the shortest and fastest route from Point A to Point B across Ensenada's transit network with sub-500ms response.",
            "Integrated Mapbox GL custom vector layers for real-time visualization of bus lines, stops, and dynamic passenger navigation paths.",
            "Contributed to the multiplatform mobile client deployment on iOS with React Native and Expo.",
            "Pitched solution to industry juries, defended technical architecture, and won 1st Place twice in a row at CETYS Universidad ExpoIngeniería (2025 & 2026).",
          ],
          tags: ["Java", "Spring Boot", "A* Algorithm", "Mapbox GL", "React Native", "iOS", "Docker", "PostgreSQL"],
          links: [
            { label: "GitHub Repository", url: "https://github.com/Dusuan/SmartBussingMobile", icon: "github" },
            { label: "LinkedIn Post", url: "https://lnkd.in/p/gFkZDfZ5", icon: "linkedin" },
          ],
          collage: [
            {
              id: "bussing-algo",
              title: "A* Shortest Path Routing",
              caption: "Calculates the shortest and fastest path from Point A to Point B across transit lines",
              tag: "Algorithm Engine",
              type: "diagram",
            },
            {
              id: "bussing-map",
              title: "Live Mapbox Route Rendering",
              caption: "Interactive transit stop overlays with step-by-step guidance across Ensenada",
              tag: "Interactive Map",
              type: "map",
            },
            {
              id: "bussing-award",
              title: "ExpoIngeniería CETYS Trophy",
              caption: "Consecutive 1st Place Champion in 2025 & 2026 evaluated by industry judges",
              tag: "2x 1st Place",
              type: "award",
            },
            {
              id: "bussing-mobile",
              title: "Multiplatform iOS & Android App",
              caption: "Intuitive commuter UX designed to eliminate lost journeys and save money",
              tag: "Mobile UX",
              type: "mobile",
            },
          ],
        },
        {
          id: "aura-sempra",
          trackNumber: "02",
          title: "AURA Safety SaaS",
          company: "AURA Enterprise Safety SaaS",
          role: "Full-Stack AI Engineer",
          dateBadge: "04:26",
          dateFull: "January – April 2026",
          location: "Ensenada, B.C, México",
          category: "Selected Projects",
          badge: "AI PLATFORM",
          accentColor: "#F59E0B",
          summary:
            "Enterprise B2B safety training platform powered by Gemini API, slashing content creation time by 99% and personalizing critical training for 1,000+ personnel.",
          metrics: [
            { label: "Module Generation", value: "3 Hours → 10s" },
            { label: "Target Audience", value: "1,000+ Workers" },
            { label: "Hackathon", value: "1st Place SEMPRA" },
          ],
          bullets: [
            "Architected full-stack enterprise B2B SaaS with interactive quizzes, safety simulator scenarios, and admin preview studio.",
            "Integrated Gemini 1.5 Pro to parse company safety manuals and generate contextual training modules with automated quiz validation.",
            "Awarded 1st Place at the SEMPRA Infrastructure Innovation Hackathon 2026.",
          ],
          tags: ["React / Vite", "Node.js", "Express", "PostgreSQL", "Gemini API", "Prisma"],
          links: [
            { label: "GitHub Code", url: "https://github.com/Emiliano0X1", icon: "github" },
          ],
          collage: [
            {
              id: "aura-preview",
              title: "Admin Live Safety Studio",
              caption: "Instant live markdown and interactive quiz generator",
              tag: "Admin Suite",
            },
            {
              id: "aura-llm",
              title: "Gemini Structured Parser",
              caption: "Converts hazardous material safety sheets into micro-trainings",
              tag: "AI Architecture",
            },
          ],
        },
        {
          id: "leetarena",
          trackNumber: "03",
          title: "LeetArena Matchmaking",
          company: "LeetArena Matchmaking Platform",
          role: "System & ML Engineer",
          dateBadge: "11:25",
          dateFull: "2025",
          location: "Ensenada, B.C, México",
          category: "Selected Projects",
          badge: "REAL-TIME & ML",
          accentColor: "#EAB308",
          summary:
            "Real-time competitive coding platform with WebSockets duel synchronization, Random Forest outcome prediction, and automated Gemini match recaps.",
          metrics: [
            { label: "Prediction Accuracy", value: "84% Random Forest" },
            { label: "Sync Latency", value: "< 25ms WebSockets" },
            { label: "Recap Gen", value: "Instant AI Summary" },
          ],
          bullets: [
            "Built a low-latency 1v1 algorithmic duel system over WebSockets with real-time test case validation and live code diff broadcasting.",
            "Trained a Random Forest model with scikit-learn on past contest submissions to predict match winners based on solve velocity and error frequency.",
            "Integrated Gemini API to auto-generate post-match technical analysis and code complexity breakdown for contestants.",
          ],
          tags: ["WebSockets", "Python", "scikit-learn", "Pandas", "Gemini API", "React"],
          links: [
            { label: "GitHub Code", url: "https://github.com/Emiliano0X1", icon: "github" },
          ],
          collage: [
            {
              id: "leet-arena-view",
              title: "1v1 Duel Arena",
              caption: "Synchronized dual code editors with real-time test runners",
              tag: "WebSockets UI",
            },
            {
              id: "leet-ml-model",
              title: "Win Probability Matrix",
              caption: "Random Forest dynamic probability tracker updated on keystrokes",
              tag: "Machine Learning",
            },
          ],
        },
      ],
    },

    competitions: {
      id: "competitions",
      title: "Hackathons & Competitions",
      artist: "Emiliano Gonzalez Perez",
      subtitle: "Hackathons, ICPC & Engineering Competitions",
      year: "2024 – 2026",
      coverTheme: "bronze-obsidian",
      coverTag: "HACKATHONS & ICPC",
      coverGradient: "linear-gradient(135deg, #18181b 0%, #3b1408 50%, #ea580c 100%)",
      coverImage: "competitions",
      badge: "CHAMPIONSHIPS",
      description:
        "Proven competitive record in algorithmic problem solving, collegiate engineering expos, and international tech hackathons.",
      tracks: [
        {
          id: "expo-cetys",
          trackNumber: "01",
          title: "Expo Ingeniería CETYS",
          company: "Expo Ingeniería CETYS (2x Champion)",
          role: "1st Place Winner (2025 & 2026 Consecutively)",
          dateBadge: "05:26",
          dateFull: "May 2025 & May 2026",
          location: "CETYS Universidad, Campus Ensenada",
          category: "Hackathons & Competitions",
          badge: "2X CHAMPION",
          accentColor: "#FFB800",
          summary:
            "Back-to-back 1st Place champion in CETYS Universidad's premier annual engineering exposition for creating the Smart Bussing multi-modal transit system.",
          metrics: [
            { label: "Editions", value: "2025 & 2026" },
            { label: "Category", value: "Software Engineering" },
            { label: "Result", value: "1st Place Winner" },
          ],
          bullets: [
            "Evaluated by industry jury and faculty for software architecture, A* shortest path routing, real-world viability, and user experience.",
            "Defended technical implementation and live demonstration in front of 300+ attendees and faculty members.",
          ],
          tags: ["Engineering Expo", "1st Place", "A* Algorithm", "Transit API"],
          links: [
            { label: "View Profile", url: "https://www.linkedin.com/in/emiliano-gonzalez-perez-601226292", icon: "linkedin" },
          ],
          collage: [
            {
              id: "expo-banner",
              title: "Expo Ingeniería Trophy",
              caption: "Awarded top honor across collegiate engineering projects",
              tag: "CETYS Award",
            },
          ],
        },
        {
          id: "sempra-hackathon",
          trackNumber: "02",
          title: "SEMPRA Hackathon",
          company: "SEMPRA Innovation Hackathon",
          role: "1st Place Winner • Enterprise AI",
          dateBadge: "04:26",
          dateFull: "April 2026",
          location: "Ensenada, B.C, México",
          category: "Hackathons & Competitions",
          badge: "HACKATHON WINNER",
          accentColor: "#F59E0B",
          summary:
            "Winner of SEMPRA Infrastructure's enterprise hackathon for engineering an AI-powered safety platform that cuts module authoring time from 3 hours to 10 seconds.",
          metrics: [
            { label: "Corporate Jury", value: "SEMPRA Leadership" },
            { label: "Time Limit", value: "48-Hour Sprint" },
            { label: "Outcome", value: "1st Place Prize" },
          ],
          bullets: [
            "Engineered complete end-to-end enterprise solution (React/Vite, Node.js/Express, PostgreSQL, Gemini API) within a high-pressure 48-hour development sprint.",
            "Selected as the #1 winning solution by corporate executives and technical directors.",
          ],
          tags: ["Hackathon", "SEMPRA Infrastructure", "Gemini API", "Enterprise SaaS"],
          links: [
            { label: "LinkedIn Post", url: "https://www.linkedin.com/in/emiliano-gonzalez-perez-601226292", icon: "linkedin" },
          ],
          collage: [
            {
              id: "sempra-award-photo",
              title: "SEMPRA Hackathon Ceremony",
              caption: "1st place prize awarded by SEMPRA Infrastructure executives",
              tag: "Hackathon Winner",
            },
          ],
        },
        {
          id: "icpc-regional",
          trackNumber: "03",
          title: "ICPC Mexico Regional",
          company: "ICPC Regional Contestant & Top 3",
          role: "Competitive Programmer • Top 3 Ensenada",
          dateBadge: "10:25",
          dateFull: "2025 & 2026",
          location: "Mexico Regional Contest",
          category: "Hackathons & Competitions",
          badge: "TOP 3 ENSENADA",
          accentColor: "#EAB308",
          summary:
            "Represented CETYS Universidad at the ICPC Mexico Regionals, ranking among the top 3 teams in Ensenada solving complex algorithmic problems under time constraints.",
          metrics: [
            { label: "Competition", value: "ICPC Regional" },
            { label: "Regional Rank", value: "Top 3 Ensenada" },
            { label: "Domains", value: "Graphs, DP, Trees" },
          ],
          bullets: [
            "Solved advanced algorithmic problems spanning Dynamic Programming, Graph Theory, Segment Trees, and Number Theory under strict 5-hour contest rules.",
            "Ranked top 3 in Ensenada and represented CETYS Universidad in national rounds.",
          ],
          tags: ["ICPC", "Competitive Programming", "C++ / Java", "Algorithms"],
          links: [
            { label: "LinkedIn", url: "https://www.linkedin.com/in/emiliano-gonzalez-perez-601226292", icon: "linkedin" },
          ],
          collage: [
            {
              id: "icpc-scoreboard",
              title: "ICPC Regional Scoreboard",
              caption: "Ranked among top collegiate teams in the region",
              tag: "ICPC Finalist",
            },
          ],
        },
        {
          id: "la-ai-hackathon",
          trackNumber: "04",
          title: "LA AI Hackathon",
          company: "Los Angeles AI Engineering Selection",
          role: "Selected Finalist • Generative AI Track",
          dateBadge: "02:26",
          dateFull: "February 2026",
          location: "Los Angeles, CA / Online",
          category: "Hackathons & Competitions",
          badge: "SELECTED FINALIST",
          accentColor: "#D97706",
          summary:
            "Selected among top student and professional applicants across the border region to participate in the high-profile Los Angeles AI Hackathon.",
          metrics: [
            { label: "Focus", value: "Generative AI & LLMs" },
            { label: "Selection", value: "Top 10% Applicants" },
          ],
          bullets: [
            "Selected through competitive application process assessing full-stack engineering proficiency and AI system architecture.",
          ],
          tags: ["AI Hackathon", "Generative AI", "LLM Systems", "Los Angeles"],
          links: [
            { label: "LinkedIn", url: "https://www.linkedin.com/in/emiliano-gonzalez-perez-601226292", icon: "linkedin" },
          ],
          collage: [
            {
              id: "la-hackathon-cert",
              title: "LA AI Engineering Selection",
              caption: "Selected finalist for generative AI track",
              tag: "AI Competition",
            },
          ],
        },
        {
          id: "nasa-space-apps",
          trackNumber: "05",
          title: "NASA Space Apps",
          company: "NASA Space Apps Challenge Hackathon",
          role: "Open Earth Observation Engineer",
          dateBadge: "10:24",
          dateFull: "October 2024",
          location: "Global Hackathon",
          category: "Hackathons & Competitions",
          badge: "NASA CHALLENGE",
          accentColor: "#B45309",
          summary:
            "Engineered satellite data processing and interactive visualization software for NASA Space Apps Challenge tackling environmental datasets.",
          metrics: [
            { label: "Organizers", value: "NASA & Space Agencies" },
            { label: "Domain", value: "Earth Observation Data" },
          ],
          bullets: [
            "Built data analysis workflows processing open NASA Earth Observation satellite imagery and environmental metrics within 48 hours.",
          ],
          tags: ["NASA Space Apps", "Satellite Data", "Python", "Data Viz"],
          links: [
            { label: "NASA Space Apps", url: "https://github.com/Emiliano0X1", icon: "github" },
          ],
          collage: [
            {
              id: "nasa-project-visual",
              title: "Satellite Dataset Visualization",
              caption: "Open Earth observation spatial mapping system",
              tag: "NASA Project",
            },
          ],
        },
      ],
    },
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
