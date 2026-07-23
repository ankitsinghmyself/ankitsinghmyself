import type { Metadata } from "next";

import { constructMetadata } from "@/lib/metadata";
import ProjectsPageContent from "./projects-page-content";

export const metadata: Metadata = constructMetadata({
  title: "Selected Artifacts | Ankit Singh — Senior Full Stack Software Engineer",
  description:
    "Portfolio of engineering artifacts — distributed systems, microservices architecture, event-driven platforms, and cloud-native infrastructure projects.",
});

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}


