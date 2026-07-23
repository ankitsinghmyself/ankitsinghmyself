import type { Metadata } from "next";

import AboutPageContent from "./about-page-content";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "About | Ankit Singh — Senior Full Stack Software Engineer",
  description:
    "Senior Full-Stack Engineer specializing in high-throughput distributed systems. Engineering journey from core Java to distributed systems, Kafka, Kubernetes, and cloud-native architecture.",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
