import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMobileAlt,
  FaUniversalAccess,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  SiAmazonwebservices,
  SiDocker,
  SiExpress,
  SiGithubactions,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiMysql,
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";

import {
  CONTACT_EMAIL,
  getExperienceYearsText,
} from "./constants";

const experienceYearsText = getExperienceYearsText();

export const navigation = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export const resumeHref =
  "https://drive.google.com/file/d/1cXjUkPhHm7zFPj0dfIUEFkJ1zwCbPW3-/view?usp=sharing";

export const hero = {
  name: "Ankit Singh",
  kicker: "React / Next.js / UX-UI Certified",
  title: "Senior Frontend Engineer",
  subtitle:
    `Senior Frontend Engineer with ${experienceYearsText} delivering scalable React, Next.js, and TypeScript products, with deep focus on micro-frontends, BFF architecture, performance, accessibility, and design-aware UX.`,
  availability: "Open to work",
  location: "Bengaluru, India / Remote",
};

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ankitsinghmyself/",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ankitsinghmyself/",
    icon: FaLinkedin,
  },
  {
    label: "X",
    href: "https://x.com/singh311094/",
    icon: FaXTwitter,
  },
  {
    label: "Email",
    href: `mailto:${CONTACT_EMAIL}`,
    icon: FaEnvelope,
  },
];

export const about = {
  title: "About Me",
  greeting: "Senior Frontend Engineer",
  paragraphs: [
    `With ${experienceYearsText} in frontend engineering, I build scalable products using React, Next.js, TypeScript, and Node.js.`,
    "I focus on micro-frontends, BFF integration, performance, accessibility, and polished UX, helping teams ship faster with cleaner standards and 35%+ load-time gains.",
  ],
  stats: [
    { label: "Experience", value: experienceYearsText },
    { label: "Performance", value: "35% faster load" },
    { label: "Teams Enabled", value: "10+ teams" },
    { label: "Certification", value: "Meta UX/UI" },
  ],
};

export const experiences = [
  {
    role: "Software Engineer (Frontend Lead)",
    company: "Lowe's India",
    period: "July 2023 - Present",
    summary:
      "Leading frontend performance, micro-frontend delivery, and BFF integration for internal product surfaces.",
    highlights: [
      "Reduced initial page load time by 35% through code splitting, lazy loading, and API caching.",
      "Led 5+ micro-frontend modules and built a BFF layer that cut payload size by 20% and improved API response times by 40%.",
    ],
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Module Federation",
      "Node.js",
      "GitHub Actions",
    ],
  },
  {
    role: "Software Engineer",
    company: "Skills Outsource Think Pvt Ltd.",
    period: "November 2021 - July 2023",
    summary:
      "Built production web and mobile experiences for logistics and driver operations.",
    highlights: [
      "Delivered 10+ REST API integrations and responsive cross-browser UI for a live logistics platform used by 500+ users.",
      "Built a React Native driver app with 20+ screens and resolved critical production issues within 24 hours.",
    ],
    tags: [
      "React",
      "TypeScript",
      "React Native",
      "SCSS",
      "REST APIs",
      "Cross-browser UI",
    ],
  },
  {
    role: "Software Developer",
    company: "GlobalShiksha India Pvt. Ltd.",
    period: "August 2020 - October 2021",
    summary:
      "Built reusable frontend systems and real-time integrations across multiple product modules.",
    highlights: [
      "Built 15+ reusable React components and standardized UI across 5+ modules.",
      "Scaled a shared component system that reduced development effort by 25% and improved lead workflow automation.",
    ],
    tags: [
      "React",
      "Component Library",
      "SCSS",
      "REST APIs",
      "Facebook Webhooks",
      "Reusable UI",
    ],
  },
];

export const projects = [
  {
    title: "Micro-frontend Platform",
    summary:
      "Led 5+ Module Federation surfaces that allowed 10+ engineering teams to ship independently without cross-team release bottlenecks.",
    tags: ["Module Federation", "React", "TypeScript"],
    href: "/case-study/micro-frontend-platform",
    doc_link: 'https://l1nq.com/yv9kog7',
  },
  {
    title: "Backstage-Integrated BFF Layer",
    summary:
      "Built a Node.js and Express backend-for-frontend that reduced payload size by 20% and improved API response times by 40%.",
    tags: ["Node.js", "Express", "backstage"],
    href: "/case-study/backstage-bff-layer",
    doc_link: "https://l1nq.com/lpae5vs",
  },
  {
    title: "Performance and Accessibility",
    summary:
      "Improved initial load time by 35% through code splitting, lazy loading, caching, and quality checks guided by Lighthouse and Web Vitals.",
    tags: ["Performance", "WCAG 2.1", "Lighthouse"],
    href: "/case-study/performance-and-accessibility",
  },
  {
    title: "Logistics Platform UI",
    summary:
      "Shipped 10+ REST integrations and responsive cross-browser interfaces for a live logistics product used by 500+ users.",
    tags: ["React", "TypeScript", "REST APIs"],
    href: "/case-study/logistics-platform-ui",
  },
  {
    title: "Driver Mobile App",
    summary:
      "Built 20+ React Native screens with navigation, push notifications, and production API integration for iOS and Android drivers.",
    tags: ["React Native", "Mobile", "APIs"],
    href: "/case-study/driver-mobile-app",
  },
  {
    title: "Shared Component System",
    summary:
      "Built reusable components and shared UI patterns that cut frontend effort by 25% while improving consistency across product modules.",
    tags: ["Design System", "SCSS", "Reusable UI"],
    href: "/case-study/shared-component-system",
  },
];

export const skills = [
  { label: "React", icon: SiReact },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "TypeScript", icon: SiTypescript },
  { label: "JavaScript", icon: SiJavascript },
  { label: "React Native", icon: FaMobileAlt },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "Express", icon: SiExpress },
  { label: "GraphQL", icon: SiGraphql },
  { label: "Redux Toolkit", icon: SiRedux },
  { label: "Tailwind CSS", icon: SiTailwindcss },
  { label: "SCSS", icon: SiSass },
  { label: "Styled Components", icon: SiStyledcomponents },
  { label: "Module Federation", icon: SiWebpack },
  { label: "AWS", icon: SiAmazonwebservices },
  { label: "GitHub Actions", icon: SiGithubactions },
  { label: "Jest", icon: SiJest },
  { label: "Testing Library", icon: SiTestinglibrary },
  { label: "Docker", icon: SiDocker },
  { label: "MySQL", icon: SiMysql },
  { label: "Accessibility", icon: FaUniversalAccess },
];

export const contact = {
  email: CONTACT_EMAIL,
  note:
    "Open to senior frontend roles, design systems work, performance-focused product teams, and design-aware web builds.",
  methods: [
    {
      label: "Email",
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
    },
    {
      label: "Location",
      value: "Bengaluru, India / Remote",
      href: "#",
    },
    {
      label: "LinkedIn",
      value: "ankitsinghmyself",
      href: "https://www.linkedin.com/in/ankitsinghmyself/",
    },
    {
      label: "GitHub",
      value: "ankitsinghmyself",
      href: "https://github.com/ankitsinghmyself/",
    },
  ],
};
