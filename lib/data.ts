export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    slug: "ai-saas-platform",
    title: "AI SaaS Platform",
    description:
      "A full-stack AI-powered SaaS platform with real-time collaboration, GPT-4 integration, and subscription billing via Stripe.",
    longDescription:
      "Built a production-ready SaaS platform that leverages OpenAI's GPT-4 API for intelligent content generation. Features include real-time collaboration using WebSockets, team workspaces, role-based access control, and a Stripe-powered subscription system with multiple tiers. The platform handles thousands of daily active users with 99.9% uptime.",
    image: "https://cdn.shopify.com/s/files/1/0817/7988/4088/articles/6DaWtQPc3lNh5d7l5wAi97.png?v=1712946186",
    tags: ["Next.js", "TypeScript", "OpenAI", "Stripe", "PostgreSQL", "Prisma"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "ecommerce-storefront",
    title: "E-Commerce Storefront",
    description:
      "A high-performance e-commerce storefront with server-side rendering, dynamic product filtering, and a seamless checkout experience.",
    longDescription:
      "Engineered a blazing-fast e-commerce storefront using Next.js 14 with full SSR/ISR support. Integrated with Shopify's Storefront API for product management, implemented advanced filtering and search with Algolia, and built a custom cart system with persistent state. Achieved a 98 Lighthouse performance score.",
    image: "https://pixel77.com/wp-content/uploads/2024/06/ecommerce-website-designs-1-1024x768.webp",
    tags: ["Next.js", "Shopify API", "Algolia", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "realtime-dashboard",
    title: "Real-Time Analytics Dashboard",
    description:
      "An interactive analytics dashboard with live data streaming, customizable widgets, and advanced data visualization charts.",
    longDescription:
      "Designed and built a comprehensive analytics dashboard that streams live data using Server-Sent Events. Features include drag-and-drop widget customization, 15+ chart types powered by Recharts, date range filtering, CSV export, and multi-tenant support. Used Redis for caching and WebSocket connections for sub-second data updates.",
    image: "https://images.ctfassets.net/lzny33ho1g45/3L77mMruOrEOWxyDmcKkEp/2e1d7aff0d998602ddaa18fad2bb75fb/image2.jpg",
    tags: ["React", "Node.js", "Redis", "WebSockets", "Recharts", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    slug: "mobile-fitness-app",
    title: "Fitness Tracking App",
    description:
      "A cross-platform mobile fitness app with workout tracking, nutrition logging, progress analytics, and social challenges.",
    longDescription:
      "Developed a cross-platform fitness application using React Native and Expo. Features include AI-powered workout recommendations, barcode scanning for nutrition tracking, Apple Health / Google Fit integration, social challenges with friends, and detailed progress analytics with beautiful charts. Published on both App Store and Google Play.",
    image: "https://kodekloud.com/kk-media/image/upload/v1752883826/notes-assets/images/Rust-Programming-Introduction-to-CLI-Tools-and-Importance-in-DevOps/cli-tools-devops-automation-overview.jpg",
    tags: ["React Native", "Expo", "TypeScript", "Supabase", "TensorFlow Lite"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    slug: "devops-cli-tool",
    title: "DevOps CLI Toolkit",
    description:
      "A powerful CLI toolkit that automates deployment pipelines, infrastructure provisioning, and environment management.",
    longDescription:
      "Built an open-source CLI toolkit used by 500+ developers to streamline DevOps workflows. Features include one-command deployment to AWS/GCP/Azure, automated SSL certificate management, environment variable syncing, database migration runners, and Slack/Discord notifications. Written in Go for maximum performance.",
    image: "https://www.gfecdn.net/img/blog/open-source-design-systems/material-design.jpg",
    tags: ["Go", "AWS", "Terraform", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    slug: "design-system",
    title: "Open Source Design System",
    description:
      "A comprehensive React component library with 60+ accessible components, dark mode support, and full TypeScript types.",
    longDescription:
      "Created and maintained an open-source design system with 60+ production-ready React components. Built with accessibility-first principles (WCAG 2.1 AA), full TypeScript support, automatic dark mode, and comprehensive Storybook documentation. The library has 2,000+ GitHub stars and is used by 50+ companies.",
    image: "https://www.datocms-assets.com/22695/1751314585-1664023742-component-library-vs-ds-image-4-component-libraries-contain-ui-elements-freepik.webp",
    tags: ["React", "TypeScript", "Storybook", "Radix UI", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 5 },
      { name: "Next.js", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Framer Motion", level: 4 },
      { name: "Vue.js", level: 3 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 5 },
      { name: "Python", level: 4 },
      { name: "Go", level: 3 },
      { name: "PostgreSQL", level: 4 },
      { name: "Redis", level: 4 },
      { name: "GraphQL", level: 4 },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 4 },
      { name: "Docker", level: 4 },
      { name: "Kubernetes", level: 3 },
      { name: "GitHub Actions", level: 5 },
      { name: "Terraform", level: 3 },
      { name: "Vercel", level: 5 },
    ],
  },
  {
    category: "Tools & Design",
    skills: [
      { name: "Figma", level: 4 },
      { name: "Git", level: 5 },
      { name: "Prisma", level: 4 },
      { name: "Storybook", level: 4 },
      { name: "Jest", level: 4 },
      { name: "Playwright", level: 3 },
    ],
  },
];

export const personalInfo = {
  name: "Alex Rivera",
  title: "Full-Stack Engineer",
  tagline: "I build fast, beautiful, and accessible web experiences.",
  bio: "I'm a full-stack engineer with 6+ years of experience crafting high-performance web applications. I specialize in React, Next.js, and Node.js, with a passion for clean code, great UX, and developer tooling. When I'm not coding, I'm contributing to open source, writing technical articles, or exploring the mountains.",
  location: "San Francisco, CA",
  email: "alex@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  avatar: "https://experis.be/wp-content/uploads/2023/05/Online-web-developer-profile-1200x675.jpg",
  resumeUrl: "/resume.pdf",
  yearsExperience: 6,
  projectsCompleted: 40,
  openSourceStars: 3200,
};
