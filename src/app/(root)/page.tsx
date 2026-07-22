import type { Metadata } from "next";

import HomePage from "@/components/home-page";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Ankit Singh | Full Stack Developer",
  description:
    "Full Stack Developer with 6+ years building Spring Boot microservices, Apache Kafka event-driven systems, Kubernetes container orchestration, and modern React/Next.js frontends.",
});

export default HomePage;
