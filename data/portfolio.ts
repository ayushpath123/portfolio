export type Project = {
  title: string;
  year: string;
  stack: string[];
  description: string;
  highlights: string[];
  github: string;
  live: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  stack: string[];
};

export const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "LangChain",
  "Docker",
  "AWS",
];

export const aboutStats: Stat[] = [
  { value: "3+", label: "years experience" },
  { value: "4+", label: "projects shipped" },
  { value: "800+", label: "dsa problems solved" },
];

export const heroTypewriterPhrases = [
  "full-stack developer",
  "ai engineer",
  "open source contributor",
  "problem solver",
];

export const experiences: ExperienceEntry[] = [
  {
    company: "ENTNT",
    role: "Software Developer Intern",
    period: "Dec 2025 – Present",
    bullets: [
      "Building AI-driven software products for global clients.",
      "Full-stack development across analysis, implementation, and deployment.",
      "Delivering scalable, high-quality solutions with distributed teams.",
    ],
    
    stack: ["WebRTC", "React.js", "Node.js", "Distributed Systems"],
  },
  {
    company: "Dentsu",
    role: "Software Developer Intern",
    period: "Jun 2025 – July 2025",
    bullets: [
      "Built NLQ-based AI chatbots using GPT-4o & Snowflake Cortex for natural-language → SQL.",
      "Built a monitoring dashboard for 2000+ jobs using React, Express, FastAPI.",
      "Improved RCA/observability & reduced job failures by 35%.",
    ],
    stack: ["GPT-4o", "Snowflake", "React", "Express", "FastAPI"],
  },
  {
    company: "DataAstraa",
    role: "Software Developer Intern",
    period: "Aug 2024 – Sep 2024",
    bullets: [
      "Migrated 1000+ lines of code → TypeScript modular architecture.",
      "Improved API performance from 1.8s → 400ms.",
      "Built custom React hook library reducing repetitive logic by 60%.",
    ],
    stack: ["TypeScript", "React", "MongoDB", "Performance"],
  },
];

export const projects: Project[] = [
  {
    title: "Mail.ai",
    year: "2025",
    stack: ["Next.js", "Prisma", "Redis", "BullMQ", "Stripe"],
    description: "AI-powered bulk email platform using Groq SDK.",
    highlights: [
      "40% faster delivery & 99.9% uptime Redis + BullMQ pipeline.",
      "Usage-based Stripe billing with enterprise-ready controls.",
    ],
    github: "https://github.com/ayushpath123/Mail.ai",
    live: "https://mail-ai-beta.vercel.app/",
  },
  {
    title: "AI Code Assistant",
    year: "2025",
    stack: ["Python", "LangChain", "GPT-4", "Pinecone", "FastAPI"],
    description: "Multi-language AI code assistant for reviews & debugging.",
    highlights: [
      "RAG pipeline using Pinecone for code context retrieval.",
      "AI code review + debugging improvements shipped faster.",
    ],
    github: "https://github.com/ayushpath123/Code_Assistant",
    live: "https://cursora.vercel.app/",
  },
  {
    title: "LinkIT",
    year: "2024",
    stack: ["Next.js", "NextAuth", "React", "Prisma"],
    description: "A modern link-in-bio and link management platform.",
    highlights: [
      "Create and customize personal link-in-bio profiles.",
      "Organize and store links into categorized collections.",
      "Secure authentication using NextAuth with fast, responsive UI.",
    ],
    github: "https://github.com/ayushpath123/linkitt",
    live: "https://linkit-delta.vercel.app/",
  },
  {
    title: "Confesr",
    year: "2024",
    stack: ["Hono", "Cloudflare Workers", "Prisma", "React"],
    description: "An anonymous confession platform built for privacy and speed.",
    highlights: [
      "End-to-end anonymous confession system with zero identity requirement.",
      "Powered by Cloudflare's Hono for serverless, ultra-fast routing.",
      "Responsive and dynamic UI with Prisma-driven backend.",
    ],
    github: "https://github.com/ayushpath123/Confessr",
    live: "https://confesr.vercel.app/",
  },
  
];

export const achievements = [
  "Solved 800+ DSA problems (LC + CC + GFG).",
  "Knight (1800+) on LeetCode.",
  "3★ CodeChef, Pupil on Codeforces.",
  "Hackathon winner — secure login system for IIIT.",
];

export const heroContent = {
  name: "Ayush Pathak",
  summary:
    "I build things for the web. Focused on clean code, realtime systems, AI copilots, and infrastructure that scales.",
  aboutParagraphs: [
    "I'm Ayush Pathak, a Data Science & AI student at IIIT Dharwad who ships developer experiences across product design, backend systems, and AI-first features — from NLQ copilots at Dentsu to TypeScript migrations at DataAstraa.",
    "My work spans multi-tenant SaaS dashboards, resilient messaging rails, Stripe-powered monetization, and Pinecone-backed RAG copilots. Every project blends strong UX, measurable performance wins, and production reliability.",
  ],
  contact: {
    phone: "+91 9316568042",
    email: "22bds044@iiitdwd.ac.in",
    location: "India",
    linkedin: "https://www.linkedin.com/in/ayush-pathak-662768245/",
    github: "https://github.com/ayushpath123",
  },
  education: "IIIT Dharwad — B.Tech in Data Science & AI (2022–2026)",
};

