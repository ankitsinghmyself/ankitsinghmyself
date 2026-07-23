import type { Metadata } from "next";

import StackPageContent from "./stack-page-content";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "System Core Dependencies | Ankit Singh",
  description:
    "Architecture mapping of production-grade technologies, infrastructure protocols, and environmental specifications utilized in high-concurrency distributed systems.",
});

export default function StackPage() {
  return <StackPageContent />;
}

