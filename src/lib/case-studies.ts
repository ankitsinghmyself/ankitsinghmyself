export type CaseStudySection = {
  title: string;
  content: string | string[];
};

export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  company: string;
  period: string;
  tags: string[];
  metrics: CaseStudyMetric[];
  sections: CaseStudySection[];
  diagram?: {
    title: string;
    description?: string;
    nodes: Array<{
      title: string;
      subtitle: string;
    }>;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "micro-frontend-platform",
    title: "Micro-frontend Platform",
    summary:
      "Led a modular frontend platform that let multiple teams ship independently while improving performance and platform governance.",
    role: "Frontend Lead",
    company: "Lowe's India",
    period: "2023 - Present",
    tags: [
      "Module Federation",
      "React",
      "Next.js",
      "TypeScript",
      "BFF",
      "Performance",
    ],
    metrics: [
      { label: "Teams Enabled", value: "10+ teams" },
      { label: "Load Time", value: "35% faster" },
      { label: "Payload Size", value: "20% smaller" },
      { label: "API Response", value: "40% faster" },
    ],
    diagram: {
      title: "Platform Flow",
      description: "A shared shell orchestrates independent micro-frontends.",
      nodes: [
        { title: "Host Shell", subtitle: "Routing + Shared UX" },
        { title: "Micro-Frontends", subtitle: "Team-owned modules" },
        { title: "Shared Services", subtitle: "Auth, data, analytics" },
      ],
    },
    sections: [
      {
        title: "Context",
        content:
          "Multiple product teams were contributing to a single frontend surface, slowing releases and creating brittle integration points. We needed a way to scale delivery without losing consistency or performance.",
      },
      {
        title: "Problem",
        content:
          "Shared ownership across teams caused release bottlenecks, duplicate patterns, and inconsistent UX. Build times and runtime performance were also trending down as the application grew.",
      },
      {
        title: "Goals",
        content: [
          "Enable teams to deploy independently without cross-team coordination.",
          "Keep performance and UX consistent across micro-frontends.",
          "Introduce governance, shared contracts, and quality checks.",
        ],
      },
      {
        title: "Responsibilities",
        content: [
          "Defined the micro-frontend architecture and module contracts.",
          "Built the platform shell and shared UI foundations.",
          "Led performance optimization and quality guardrails.",
        ],
      },
      {
        title: "Constraints",
        content: [
          "Existing legacy frontend had to remain operational.",
          "Multiple teams with different release cadences.",
          "Strict performance budgets and accessibility standards.",
        ],
      },
      {
        title: "Approach",
        content: [
          "Adopted Module Federation with a stable host shell.",
          "Created shared UI primitives, routing, and auth contracts.",
          "Introduced performance budgets, automated checks, and runbooks.",
        ],
      },
      {
        title: "Solution",
        content: [
          "Launched 5+ micro-frontend modules with independent deploys.",
          "Added a BFF layer to consolidate data and reduce payload size.",
          "Standardized analytics, error tracking, and release monitoring.",
        ],
      },
      {
        title: "Results",
        content: [
          "Enabled 10+ teams to ship without release bottlenecks.",
          "Improved initial load time by 35% through optimized bundles.",
          "Reduced payload size by 20% and improved API response times by 40%.",
        ],
      },
      {
        title: "Learnings",
        content: [
          "Governance and documentation matter as much as tooling.",
          "Shared contracts prevent drift across independently shipped apps.",
          "Performance budgets must be enforced early to be effective.",
        ],
      },
      {
        title: "Next Steps",
        content: [
          "Expand the platform to additional business surfaces.",
          "Provide templates and automation for faster onboarding.",
          "Continue to raise the performance bar with shared tooling.",
        ],
      },
    ],
  },
  {
    slug: "backstage-bff-layer",
    title: "Backstage-Integrated BFF Layer",
    summary:
      "Built a Node.js and Express backend-for-frontend integrated with Backstage to aggregate and normalize multiple services, reducing payload size by 20% and improving API response times by 40%.",
    role: "Software Engineer",
    company: "Lowe's India",
    period: "2023 - Present",
    tags: ["Node.js", "Express", "Backstage"],
    metrics: [
      { label: "Payload Size", value: "20% smaller" },
      { label: "API Response", value: "40% faster" },
      { label: "Endpoints", value: "10+ aggregated" },
      { label: "Teams Served", value: "5+ teams" },
    ],
    diagram: {
      title: "Backstage → BFF → UI Flow",
      description:
        "Backstage acts as a platform layer, while the BFF aggregates and normalizes upstream services for frontend consumption.",
      nodes: [
        { title: "Client UI", subtitle: "React / Next.js" },
        { title: "Backstage", subtitle: "Plugin / Platform Layer" },
        { title: "BFF Layer", subtitle: "Node.js + Express" },
        { title: "Upstream APIs", subtitle: "Core services" },
      ],
    },
    sections: [
      {
        title: "Context",
        content:
          "Frontend teams were pulling from multiple services directly, causing over-fetching, inconsistent contracts, and slow page loads. Backstage was used as a platform layer, but frontend teams still needed a simplified and stable API contract.",
      },
      {
        title: "Problem",
        content:
          "Multiple upstream APIs returned large payloads and inconsistent shapes, leading to slow rendering and repeated frontend transformation logic.",
      },
      {
        title: "Goals",
        content: [
          "Reduce payload size and speed up API response times.",
          "Create stable contracts for frontend teams.",
          "Centralize caching, auth, and error handling.",
        ],
      },
      {
        title: "Responsibilities",
        content: [
          "Designed the BFF contract and data aggregation strategy.",
          "Implemented Node.js/Express services with caching and retries.",
          "Integrated the BFF layer with Backstage services/plugins.",
          "Instrumented observability for latency and error tracking.",
        ],
      },
      {
        title: "Constraints",
        content: [
          "Legacy APIs could not be changed quickly.",
          "Strict performance budgets for critical pages.",
          "Needed to support multiple frontend surfaces.",
        ],
      },
      {
        title: "Approach",
        content: [
          "Introduced an aggregation layer with normalized response shapes.",
          "Implemented caching and selective field mapping.",
          "Added service-level SLAs and monitoring dashboards.",
        ],
      },
      {
        title: "Solution",
        content: [
          "Built a Backstage-integrated BFF layer to unify multiple upstream services into a single frontend contract.",
          "Deployed on AWS with autoscaling, health checks, and monitoring.",
          "Consolidated 10+ endpoints into a single frontend contract.",
          "Rolled out phased migration with backward compatibility.",
        ],
      },
      {
        title: "Results",
        content: [
          "Reduced payload size by 20% and improved response time by 40%.",
          "Simplified frontend data handling with consistent contracts.",
          "Improved reliability with centralized error handling.",
          "Reduced direct dependency of frontend teams on multiple backend services.",
        ],
      },
      {
        title: "Learnings",
        content: [
          "Contracts are as important as performance wins.",
          "Platform layers like Backstage still require a well-designed BFF for frontend efficiency.",
          "Observability must be built in from day one.",
          "Incremental migrations reduce risk and speed adoption.",
        ],
      },
    ],
  },
  {
    slug: "performance-and-accessibility",
    title: "Performance and Accessibility",
    summary:
      "Improved initial load time by 35% through code splitting, lazy loading, caching, and quality checks guided by Lighthouse and Web Vitals.",
    role: "Frontend Engineer",
    company: "Lowe's India",
    period: "2023 - Present",
    tags: ["Performance", "WCAG 2.1", "Lighthouse"],
    metrics: [
      { label: "Load Time", value: "35% faster" },
      { label: "Lighthouse", value: "90+ score" },
      { label: "A11y", value: "WCAG 2.1 AA" },
      { label: "Core Web Vitals", value: "Green" },
    ],
    diagram: {
      title: "Quality Loop",
      description: "A continuous cycle for speed and accessibility.",
      nodes: [
        { title: "Audit", subtitle: "Lighthouse + A11y" },
        { title: "Optimize", subtitle: "Split, cache, lazy load" },
        { title: "Measure", subtitle: "Web Vitals + CI gates" },
      ],
    },
    sections: [
      {
        title: "Context",
        content:
          "User-facing pages were growing in size, impacting time-to-interactive and accessibility scores.",
      },
      {
        title: "Problem",
        content:
          "Slow initial loads and inconsistent accessibility checks made it hard to meet quality benchmarks.",
      },
      {
        title: "Goals",
        content: [
          "Reduce initial load time across priority pages.",
          "Enforce accessibility standards throughout delivery.",
          "Introduce repeatable performance checks.",
        ],
      },
      {
        title: "Responsibilities",
        content: [
          "Audited performance bottlenecks and accessibility gaps.",
          "Implemented code splitting, lazy loading, and caching.",
          "Introduced Lighthouse and Web Vitals gates in CI.",
        ],
      },
      {
        title: "Constraints",
        content: [
          "Large, shared codebase with multiple owners.",
          "Need to improve performance without breaking UX.",
          "Accessibility fixes had to align with design system rules.",
        ],
      },
      {
        title: "Approach",
        content: [
          "Prioritized top routes based on traffic and conversion impact.",
          "Reduced bundle sizes and optimized assets.",
          "Documented accessibility checklists and testing flow.",
        ],
      },
      {
        title: "Solution",
        content: [
          "Shipped performance optimizations with measurable gains.",
          "Standardized a11y linting and manual QA checks.",
          "Created dashboards to track ongoing quality scores.",
        ],
      },
      {
        title: "Results",
        content: [
          "Improved initial load time by 35% on key routes.",
          "Reached consistent WCAG 2.1 AA compliance.",
          "Maintained 90+ Lighthouse scores in production.",
        ],
      },
      {
        title: "Learnings",
        content: [
          "Performance work is most effective when baked into CI.",
          "Accessibility improves faster with shared team checklists.",
          "Small wins compound when tracked and shared.",
        ],
      },
    ],
  },
  {
    slug: "logistics-platform-ui",
    title: "Logistics Platform UI",
    summary:
      "Shipped 10+ REST integrations and responsive cross-browser interfaces for a live logistics product used by 500+ users.",
    role: "Software Engineer",
    company: "Skills Outsource Think Pvt Ltd.",
    period: "2021 - 2023",
    tags: ["React", "TypeScript", "REST APIs"],
    metrics: [
      { label: "Integrations", value: "10+ REST APIs" },
      { label: "Users", value: "500+ users" },
      { label: "Screens", value: "20+ views" },
      { label: "Browsers", value: "Cross-browser" },
    ],
    diagram: {
      title: "Operations Flow",
      description: "Interfaces orchestrate dispatch and live ops.",
      nodes: [
        { title: "Ops UI", subtitle: "React + TypeScript" },
        { title: "Integrations", subtitle: "REST workflows" },
        { title: "Dispatch", subtitle: "Drivers + status" },
      ],
    },
    sections: [
      {
        title: "Context",
        content:
          "The logistics platform needed a scalable UI to support operations, driver management, and dispatch workflows.",
      },
      {
        title: "Problem",
        content:
          "Legacy UI was hard to maintain and lacked consistency across critical workflows.",
      },
      {
        title: "Goals",
        content: [
          "Build responsive, cross-browser interfaces.",
          "Integrate multiple REST APIs reliably.",
          "Improve maintainability with reusable UI patterns.",
        ],
      },
      {
        title: "Responsibilities",
        content: [
          "Implemented core UI modules in React and TypeScript.",
          "Integrated 10+ REST endpoints with robust state handling.",
          "Collaborated with backend and QA teams on delivery.",
        ],
      },
      {
        title: "Constraints",
        content: [
          "Tight delivery timelines for operations teams.",
          "Need for accurate real-time status updates.",
          "Must support a range of browser environments.",
        ],
      },
      {
        title: "Approach",
        content: [
          "Built reusable components for tables, filters, and forms.",
          "Standardized API handling and error states.",
          "Prioritized mobile-friendly layouts for field teams.",
        ],
      },
      {
        title: "Solution",
        content: [
          "Delivered core modules for dispatch and driver operations.",
          "Improved UI consistency and reduced rework.",
          "Implemented cross-browser QA checks and fixes.",
        ],
      },
      {
        title: "Results",
        content: [
          "Shipped 10+ REST integrations with stable UX.",
          "Supported 500+ active users with responsive UI.",
          "Reduced UI rework through shared components.",
        ],
      },
      {
        title: "Learnings",
        content: [
          "Shared UI patterns improve delivery speed and consistency.",
          "Early QA prevents cross-browser regressions.",
          "Operational tools need clear, dependable UX.",
        ],
      },
    ],
  },
  {
    slug: "driver-mobile-app",
    title: "Driver Mobile App",
    summary:
      "Built 20+ React Native screens with navigation, push notifications, and production API integration for iOS and Android drivers.",
    role: "Software Engineer",
    company: "Skills Outsource Think Pvt Ltd.",
    period: "2021 - 2023",
    tags: ["React Native", "Mobile", "APIs"],
    metrics: [
      { label: "Screens", value: "20+ screens" },
      { label: "Platforms", value: "iOS + Android" },
      { label: "Notifications", value: "Push enabled" },
      { label: "Integrations", value: "Production APIs" },
    ],
    diagram: {
      title: "Mobile Workflow",
      description: "Realtime updates across devices and backend.",
      nodes: [
        { title: "Driver App", subtitle: "React Native" },
        { title: "Realtime", subtitle: "Sync + notifications" },
        { title: "Backend", subtitle: "Core logistics APIs" },
      ],
    },
    sections: [
      {
        title: "Context",
        content:
          "Drivers needed a mobile-first workflow to manage assignments, status updates, and navigation on the go.",
      },
      {
        title: "Problem",
        content:
          "Existing tools were desktop-only and not optimized for field usage, leading to delays and errors.",
      },
      {
        title: "Goals",
        content: [
          "Provide a fast, reliable mobile workflow for drivers.",
          "Integrate live status updates and notifications.",
          "Ensure stable performance on low-end devices.",
        ],
      },
      {
        title: "Responsibilities",
        content: [
          "Built the React Native UI and navigation flow.",
          "Integrated push notifications and API services.",
          "Worked with backend teams on mobile-friendly endpoints.",
        ],
      },
      {
        title: "Constraints",
        content: [
          "Unreliable network conditions in the field.",
          "Low-end device support requirements.",
          "Strict timelines for pilot launch.",
        ],
      },
      {
        title: "Approach",
        content: [
          "Optimized screen rendering and asset usage.",
          "Added offline-friendly states and caching.",
          "Iterated quickly with pilot feedback.",
        ],
      },
      {
        title: "Solution",
        content: [
          "Delivered 20+ screens with navigation and alerts.",
          "Integrated real-time updates and status workflows.",
          "Launched pilot with actionable feedback loops.",
        ],
      },
      {
        title: "Results",
        content: [
          "Improved driver workflow speed and visibility.",
          "Reduced reliance on desktop operations.",
          "Expanded the app to additional regions after pilot.",
        ],
      },
      {
        title: "Learnings",
        content: [
          "Offline-ready UX is critical for field workflows.",
          "Pilot feedback loops accelerate adoption.",
          "Mobile performance needs early attention.",
        ],
      },
    ],
  },
  {
    slug: "shared-component-system",
    title: "Shared Component System",
    summary:
      "Built reusable components and shared UI patterns that cut frontend effort by 25% while improving consistency across product modules.",
    role: "Software Developer",
    company: "GlobalShiksha India Pvt. Ltd.",
    period: "2020 - 2021",
    tags: ["Design System", "SCSS", "Reusable UI"],
    metrics: [
      { label: "Effort Reduced", value: "25% less" },
      { label: "Components", value: "15+ shared" },
      { label: "Modules", value: "5+ modules" },
      { label: "Design Consistency", value: "Improved" },
    ],
    diagram: {
      title: "Design System Flow",
      description: "Shared tokens power modular UI delivery.",
      nodes: [
        { title: "Tokens", subtitle: "Color, spacing, type" },
        { title: "Components", subtitle: "Reusable UI blocks" },
        { title: "Modules", subtitle: "Product surfaces" },
      ],
    },
    sections: [
      {
        title: "Context",
        content:
          "Multiple product modules were built in parallel without shared UI foundations, creating inconsistencies.",
      },
      {
        title: "Problem",
        content:
          "Repeated UI work slowed delivery and made the product feel fragmented.",
      },
      {
        title: "Goals",
        content: [
          "Create reusable UI components for core workflows.",
          "Improve consistency across modules.",
          "Reduce development effort and UI rework.",
        ],
      },
      {
        title: "Responsibilities",
        content: [
          "Designed reusable component patterns and tokens.",
          "Implemented a shared SCSS-based UI system.",
          "Collaborated with designers to standardize patterns.",
        ],
      },
      {
        title: "Constraints",
        content: [
          "Legacy screens needed to remain functional.",
          "Multiple teams with different delivery schedules.",
          "Limited design resources for large-scale revamps.",
        ],
      },
      {
        title: "Approach",
        content: [
          "Prioritized the most reused components first.",
          "Documented usage and built quick-start templates.",
          "Incrementally migrated older modules to new patterns.",
        ],
      },
      {
        title: "Solution",
        content: [
          "Released 15+ shared components and tokens.",
          "Adopted the system across 5+ product modules.",
          "Provided a shared UI kit for faster onboarding.",
        ],
      },
      {
        title: "Results",
        content: [
          "Reduced frontend effort by 25% on new screens.",
          "Improved visual consistency across modules.",
          "Cut UI rework through standardized patterns.",
        ],
      },
      {
        title: "Learnings",
        content: [
          "Adoption improves when the system is easy to start with.",
          "Documentation is crucial for scale.",
          "Incremental rollouts reduce resistance.",
        ],
      },
    ],
  },
];
