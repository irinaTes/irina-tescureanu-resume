export const profile = {
  name: "Teșcureanu Irina-Gabriela",
  role: "Front End Developer",
  location: "Bucharest, Romania",
  dob: "31 / 10 / 1997",
  phone: "+40 72 7530 728",
  email: "tescureanu.i@gmail.com",
  linkedin: "https://www.linkedin.com/in/irina-gabriela-tescureanu-3b6734158/",
  summary:
    "Front-end developer with 5+ years building responsive web applications end-to-end, from UX and architecture through implementation, automated testing, CI/CD, and launch. Specialized in ReactJS with hands-on experience integrating RESTful APIs and AI-powered features. Comfortable in agile, cross-functional teams, with an emphasis on peer-reviewed, well-documented code and collaboration with designers, PMs, and QA.",
};

export type Job = {
  index: string;
  title: string;
  company: string;
  period: string;
  context: string;
  bullets: string[];
  tools: string[];
  url?: string;
};

export const jobs: Job[] = [
  {
    index: "01",
    title: "Full Stack Developer",
    company: "BinarCode",
    period: "Nov 2024 — Present",
    context:
      "Cluj-Napoca based company with a subsidiary in Chisinau. PBX.IM is an SMB VoIP platform; contributed to its launch and client onboarding in a 3-developer agile team working in two-week sprints with regular code reviews and shared ownership of delivery.",
    bullets: [
      "Raised website Lighthouse score from 50% → 98%, improving performance, SEO, accessibility, and responsiveness across devices and browsers.",
      "Built an AI-powered chat interface integrated with PBX.IM documentation and the Freshdesk API, streamlining the customer support workflow.",
      "Delivered features across frontend and backend with React/Next.js and TypeScript, supported by automated tests and CI/CD.",
    ],
    url: "https://pbx.im/",
    tools: [
      "React/Next.js",
      "TypeScript",
      "Radix UI",
      "AgGrid",
      "React Query",
      "Tailwind",
      "WebRTC",
      "Prismic (CMS)",
      "Laravel",
      "PostgreSQL",
      "Git",
      "Postman",
      "Agile / Scrum",
    ],
  },
  {
    index: "02",
    title: "Front End Developer",
    company: "Backstage IT → Tailormade Logistics",
    period: "Sep 2023 — Mar 2024",
    context:
      "Backstage IT (Chisinau, Rep. of Moldova), outsourced to Tailormade Logistics (Belgium) — a European logistics provider serving brands like H&M and Calzedonia. Built TEM (Talent & Employee Management) for a large company with hundreds of employees; led product discovery & app architecture in a 2-dev team.",
    bullets: [
      "Built the UI from zero to production, ensuring both design quality & functionality.",
      "Created a shared UI library adopted across apps, speeding up dev cycles.",
      "Refactored multiple internal tools, achieving significant functional and visual improvements that boosted usability for multiple teams.",
    ],
    tools: ["Vue.js", "TypeScript", "Pinia", "Tailwind", "Vue Query", "Git", "Postman"],
  },
  {
    index: "03",
    title: "Front End Developer",
    company: "Stone Soup Tech · Wisor",
    period: "Aug 2022 — Aug 2023",
    url: "https://wisor.ai/",
    context:
      "Bucharest. Wisor — a plug & play Freight Forwarding SaaS providing automated quoting and AI/NLP-powered customer communication.",
    bullets: [
      "Designed and built new features from scratch for a freight-forwarding SaaS with AI/NLP-powered customer communication, driving product innovation.",
      "Refactored and extended the React/Next.js codebase for long-term scalability, managing application state and routing for complex multi-step flows; resolved critical bugs while improving performance and reliability.",
    ],
    tools: [
      "React/Next.js",
      "styled-components",
      "Material UI",
      "Redux",
      "Git",
      "Agile / Scrum / Kanban",
    ],
  },
  {
    index: "04",
    title: "Front End Developer",
    company: "Stone Soup Tech · Livid Digital",
    period: "Aug 2020 — Aug 2022",
    context:
      "Bucharest. Livid Digital is a white-label, live video chat & streaming sales tool for showrooms. It was first built for Hyundai Motor Deutschland and later adapted for Opel, Lotus, and Daramis.",
    bullets: [
      "Contributed from day one, later led the frontend team for 2 years.",
      "Built a real-time support dashboard with call interception and live messaging, enabling multiple agents to collaborate via a concurrent admin console.",
      "Developed a universal chat script for seamless website integration.",
      "Built a behavior-based nudge engine (scroll depth, time-on-page, exit intent) with rule targeting and inline CTAs.",
      "White-labeled and modularized the core product to support multiple brands.",
    ],
    tools: [
      "Vue/Nuxt.js",
      "Vuex",
      "Bootstrap",
      "SASS",
      "WebRTC",
      "Vanilla JavaScript",
      "Webpack",
      "Git",
      "Agile / Kanban",
    ],
  },
  {
    index: "05",
    title: "Front End Developer",
    company: "Thales Alenia Space (Thales Group)",
    period: "Jul 2019 — Jul 2020",
    context:
      "Bucharest. Started as an intern and continued mainly as a front-end developer, occasionally helping on the backend. Worked on MTG — a web application that interprets real-time satellite data.",
    bullets: [
      "Established the frontend architecture for MTG, the real-time satellite-data web application.",
      "Implemented core features end-to-end: live dashboard, health indicators, and an alerts/events view.",
      "Contributed to the backend by shaping data models and REST endpoints.",
    ],
    tools: ["RxJS", "Node.js", "Git", "Postman"],
  },
];

export type Project = {
  name: string;
  period: string;
  description: string;
  tools: string[];
  url?: string;
};

export const otherProjects: Project[] = [
  {
    name: "XPert",
    period: "2020",
    description:
      "A location-based web platform that facilitates searching for and offering services based on the client's desired location and specific service requirements.",
    tools: ["Angular", "Node.js (Express)", "MongoDB"],
  },
  {
    name: "OnRadar",
    period: "Jun 2024 — Oct 2024",
    description:
      "A role-based performance review platform built for VVT Group (Rep. of Moldova). Designed the end-to-end architecture, built the backend with Contentful integration, implemented core review workflows (criteria, ratings, notes, attachments) with clear progress states, and created the visual identity.",
    tools: ["React", "Redux", "Material UI", "Node.js (Express)", "MongoDB", "Contentful"],
    url: "https://onradar.info/"
  },
  {
    name: "ShapeLanguage — Studio Website ",
    period: "2026",
    description:
      "Designed and built a cinematic one-page site for a CGI and 3D animation studio, featuring an interactive real-time 3D logo, bold editorial typography, and curated project showreels.",
    tools: ["Prismic CMS", "Next.js"],
    url: "https://www.shapelanguage.xyz/"
  },
];

export type SkillGroup = {
  group: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3 / SASS"],
  },
  {
    group: "Frameworks",
    items: ["React", "Next.js", "Vue", "Nuxt.js"],
  },
  {
    group: "Styling & UI",
    items: ["Tailwind CSS", "Radix UI", "Material UI", "styled-components", "Bootstrap"],
  },
  {
    group: "State & Data",
    items: ["Redux", "React Query", "Pinia", "Vuex", "RxJS", "REST"],
  },
  {
    group: "Backend & DB",
    items: ["Node.js (Express)", "Laravel", "PostgreSQL", "MongoDB"],
  },
  {
    group: "Tooling & Ops",
    items: ["Vite / Webpack", "Git", "CI/CD", "Postman", "WebRTC", "Agile / Scrum"],
  },
];

export const professionalSkills: string[] = [
  "Customer-centric",
  "Strong communication",
  "Time management & prioritization",
  "Responsible & detail-oriented",
  "Highly adaptable",
  "Ownership & accountability",
];

export type Language = {
  name: string;
  level: string;
};

export const languages: Language[] = [
  { name: "Romanian", level: "Native" },
  { name: "English", level: "C1" },
  { name: "Russian", level: "C1" },
];

export type Education = {
  school: string;
  detail: string;
  period: string;
};

export const education: Education[] = [
  {
    school: '"Politehnica" University of Bucharest',
    detail: "Bachelor in Computer Science",
    period: "2016 — 2020",
  },
];
