import type { Metadata } from "next";

import HomePageNeo from "@/components/home-page-neo";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Ankit Singh | Senior Full Stack Software Engineer",
  description:
    "Senior Full Stack Software Engineer — building scalable enterprise systems with React, Spring Boot, Kafka, and Kubernetes.",
});

export default HomePageNeo;
