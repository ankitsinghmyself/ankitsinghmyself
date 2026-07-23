import type { Metadata } from "next";

import ContactPageContent from "./contact-page-content";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Contact | Ankit Singh — Senior Full Stack Software Engineer",
  description:
    "Interface with the core architect. Submit technical inquiries, project proposals, or system integration requests through the secured communication portal.",
});

export default function ContactPage() {
  return <ContactPageContent />;
}

