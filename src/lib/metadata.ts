import { Metadata } from "next";

import { CONTACT_EMAIL, SITE_URL } from "./constants";

type MetadataProps = {
  preTitle?: string;
  title?: string;
  description?: string;
  url?: string;
  keywords?: string[];
  image?: string;
};

export const constructMetadata = ({
  preTitle = "",
  title = "Ankit Singh | Full Stack Developer",
  description = "Full Stack Developer with 6+ years building Spring Boot microservices, Apache Kafka event-driven systems, Kubernetes orchestration, and modern React/Next.js frontends.",
  url = SITE_URL,
  keywords = [],
  image = "/hero.svg",
}: MetadataProps): Metadata => ({
  title: preTitle + title,
  description,
  authors: [
    {
      name: "Ankit Singh",
      url,
    },
  ],
  creator: "Ankit Singh",
  publisher: "Ankit Singh",
  applicationName: "Ankit Singh Portfolio",
  category: "Technology",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  keywords: [
    "Ankit Singh",
    "full stack developer",
    "full stack engineer",
    "software engineer",
    "spring boot developer",
    "apache kafka engineer",
    "kubernetes engineer",
    "microservices architecture",
    "event-driven systems",
    "backend developer",
    "frontend developer",
    "react developer",
    "next.js developer",
    "next.js portfolio",
    "java developer",
    "spring boot microservices",
    "kafka event streaming",
    "docker kubernetes",
    "javascript developer",
    "typescript developer",
    "ui engineer",
    "ux engineering",
    "web animation",
    "motion design",
    "interactive portfolio",
    "portfolio website",
    "design systems",
    "component library",
    "frontend architecture",
    "performance optimization",
    "accessibility",
    "responsive design",
    "web experiences",
    "digital experience",
    "product engineer",
    "micro frontends",
    "micro-frontend architecture",
    "creative coding",
    "portfolio",
    "personal website",
    "developer portfolio",
    ...keywords,
  ],
  openGraph: {
    type: "website",
    url,
    title: preTitle + title,
    description,
    siteName: "Ankit Singh",
    emails: [CONTACT_EMAIL],
    locale: "en_US",
    images: [
      {
        url: image,
        alt: preTitle + title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@singh311094",
    site: "@singh311094",
    title: preTitle + title,
    description,
    images: [
      {
        url: image,
        alt: preTitle + title,
      },
    ],
  },
  alternates: {
    canonical: url,
  },
  metadataBase: new URL(url),
});
