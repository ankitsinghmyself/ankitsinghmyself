import { CONTACT_EMAIL, getExperienceYearsLabel } from "./constants";

export const experienceYears = getExperienceYearsLabel();

export const resumeHref =
  "https://drive.google.com/file/d/1cXjUkPhHm7zFPj0dfIUEFkJ1zwCbPW3-/view?usp=sharing";

// ─── Blueprint Navigation ───
export const neoNav = [
  { label: "Projects", href: "/projects" },
  { label: "Stack", href: "/stack" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ─── Blueprint Hero ───
export const neoHero = {
  statusBadge: 'FILE_REF: PORTFOLIO_INDEX_2020',
  tagline:
    "Specializing in high-concurrency distributed systems and resilient microservices architecture. Engineering precision at every layer of the stack.",
  ctaPrimary: { label: "VIEW_PROJECTS", href: "#projects" },
  ctaSecondary: { label: "GET_CV", href: resumeHref },
};

// ─── Blueprint Architecture Layers ───
export const architectureLayers = [
  {
    icon: "hub",
    label: "Kubernetes",
    sublabel: "NODE_CLUSTER_v4",
    color: "border-primary",
    iconColor: "text-primary",
  },
  {
    icon: "sync_alt",
    label: "Kafka",
    sublabel: "MSG_BROKER_01",
    color: "border-primary",
    iconColor: "text-primary",
  },
  {
    icon: "terminal",
    label: "Spring Boot",
    sublabel: "APP_RUNTIME",
    color: "border-secondary",
    iconColor: "text-secondary",
  },
  {
    icon: "database",
    label: "MongoDB",
    sublabel: "STORAGE_ENGINE",
    color: "border-primary",
    iconColor: "text-primary",
  },
];

// ─── Blueprint Bento Projects ───
export const blueprintProjects = [
  {
    title: "Distributed_Ledger_v2",
    description: "High-throughput transaction processor with Kafka integration.",
    tags: ["JAVA", "KAFKA"],
    colSpan: "md:col-span-2 md:row-span-1",
    rowSpan: "",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlbcwBOUSj9deDlCeTJCUa4Il3ttjKzg82bwqQGHg89wZO5b6bELRCP792BEJGXZ8AWJzuhs2ol9XfqKze3wlVz-Efvwhx9Hn7jL3Tqd2U9nSo0nHUaS7M6TamTrodm6cyT9TcIWQnfwXTuByaTKWoEWPqINEbkVnPAikB7Pzgi_73er07HqdG61vbo6e3A6gSgzFMmuR-5CDXZfjkvNUpCXoxW6vjKObU2admTqK3E1E_7MUQJCqLiA",
    imgAlt: "A clean technical diagram of a microservices architecture showing interconnected nodes with lines and data flow symbols. The style is minimalist blueprint with white and navy colors, featuring subtle secondary orange accents for active paths. High professional lighting and structured layout.",
    hasImage: true,
  },
  {
    title: "Kube_Orchestrator",
    description: "Custom Kubernetes operator for automated database provisioning and scaling.",
    tags: ["GO", "K8S", "TERRAFORM"],
    colSpan: "md:col-span-1 md:row-span-2",
    rowSpan: "",
    image: "",
    hasImage: false,
  },
  {
    title: "React_Core_UI",
    description: "Enterprise-grade design system and component library.",
    tags: ["TS", "REACT"],
    colSpan: "md:col-span-1",
    rowSpan: "",
    image: "",
    hasImage: false,
  },
  {
    title: "Stream_Pipe",
    description: "Real-time data ingestion pipeline with MongoDB sink.",
    tags: ["MONGODB", "SPRING"],
    colSpan: "md:col-span-1",
    rowSpan: "",
    image: "",
    hasImage: false,
  },
];

// ─── Blueprint Stack ───
export const neoStack = [
  {
    title: "CORE_ENGINE",
    icon: "settings",
    items: ["Java 17+ (LTS)", "Spring Boot 3.x", "ReactJS"],
  },
  {
    title: "DATA_INFRA",
    icon: "storage",
    items: ["Apache Kafka", "MongoDB Atlas", "PostgreSQL"],
  },
];

// ─── Blueprint Stack Page Types ───
export type StackBackendItem = {
  icon: string;
  name: string;
  spec: string;
  badge: string | null;
  description: string;
};

export type StackDataItem = {
  icon: string;
  name: string;
  spec: string;
};

export type StackFrontendItem = {
  icon: string | null;
  name: string;
  spec: string;
  sub: string;
  fullWidth?: boolean;
};

export type StackOrchestrationRowItem = {
  icon: string;
  name: string;
  spec: string;
  type: "row";
};

export type StackOrchestrationIacItem = {
  name: string;
  spec: string;
  type: "iac";
  description: string;
};

export type StackSection =
  | {
      id: "backend";
      label: string;
      title: string;
      colSpan: string;
      items: StackBackendItem[];
    }
  | {
      id: "data-infra";
      label: string;
      title: string;
      colSpan: string;
      items: StackDataItem[];
    }
  | {
      id: "frontend";
      label: string;
      title: string;
      colSpan: string;
      items: StackFrontendItem[];
    }
  | {
      id: "orchestration";
      label: string;
      title: string;
      colSpan: string;
      items: (StackOrchestrationRowItem | StackOrchestrationIacItem)[];
    };

// ─── Blueprint Stack Page: Detailed Bento Data ───
export const stackSections: StackSection[] = [
  {
    id: "backend",
    label: "01",
    title: "Backend & JVM",
    colSpan: "md:col-span-8",
    items: [
      {
        icon: "code",
        name: "JAVA",
        spec: "SPEC: 21_AMAZON_CORRETTO",
        badge: "LTS",
        description: "Multi-threading, Virtual Threads, Records.",
      },
      {
        icon: "bolt",
        name: "SPRING BOOT",
        spec: "SPEC: 3.2.2_MVC_WEBFLUX",
        badge: null,
        description: "Security, Cloud Stream, JPA, AOP.",
      },
      {
        icon: "hub",
        name: "KAFKA",
        spec: "SPEC: CONFLUENT_7.5",
        badge: null,
        description: "Event streaming, Schema Registry, KSQL.",
      },
    ],
  },
  {
    id: "data-infra",
    label: "02",
    title: "Data Infrastructure",
    colSpan: "md:col-span-4",
    items: [
      { icon: "database", name: "POSTGRESQL", spec: "V16.1_RDS" },
      { icon: "folder_zip", name: "MONGODB", spec: "ATLAS_7.0_MDB" },
      { icon: "memory", name: "REDIS", spec: "ELASTICACHE_OSS" },
    ],
  },
  {
    id: "frontend",
    label: "03",
    title: "Frontend Systems",
    colSpan: "md:col-span-5",
    items: [
      { icon: null, name: "REACT", spec: "V18.2_HOOKS", sub: "LIB_01" },
      { icon: null, name: "TYPESCRIPT", spec: "STRICT_5.3", sub: "LIB_02" },
      { icon: null, name: "TAILWIND CSS", spec: "JIT_ENGINE", sub: "STYLING", fullWidth: true },
    ],
  },
  {
    id: "orchestration",
    label: "04",
    title: "Orchestration",
    colSpan: "md:col-span-7",
    items: [
      {
        icon: "grid_view",
        name: "KUBERNETES",
        spec: "VER: 1.29_EKS",
        type: "row",
      },
      {
        icon: "box",
        name: "DOCKER",
        spec: "VER: 24.0_RUNTIME",
        type: "row",
      },
      {
        name: "TERRAFORM",
        spec: "HCL_SPEC: 1.7.0",
        type: "iac",
        description:
          "Modular provisioning of VPCs, Subnets, and IAM roles across AWS regions.",
      },
    ],
  },
];

// ─── Blueprint Terminal Lines ───
export const terminalLines = [
  "[ SCANNING_INFRA ] ... OK",
  "[ LOAD_BALANCER ] ... ACTIVE",
  "[ MEMORY_USAGE ] ... 42.1%",
  "[ LATENCY_MS ] ... 14ms",
];

export const contact = {
  email: CONTACT_EMAIL,
  github: "https://github.com/ankitsinghmyself/",
  linkedin: "https://www.linkedin.com/in/ankitsinghmyself/",
};

