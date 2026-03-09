import type { Metadata } from "next";

import HomePage from "@/components/home-page";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Ankit Singh | Software Engineer",
  description:
    "A dark, responsive one-page portfolio for Ankit Singh featuring about, experience, projects, skills, and contact sections.",
});

export default HomePage;
