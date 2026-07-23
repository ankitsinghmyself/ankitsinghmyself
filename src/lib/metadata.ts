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
  title = "Ankit Singh | Senior Full Stack Software Engineer",
  description = "Senior Full Stack Software Engineer with 5+ years building scalable enterprise systems — React/Next.js frontends, Spring Boot microservices, Apache Kafka event-driven architectures, and cloud-native applications on Kubernetes and AWS.",
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
    "senior full stack engineer",
    "senior full stack developer",
    "full stack software engineer",
    "senior software engineer",
    "spring boot developer",
    "apache kafka engineer",
    "kubernetes engineer",
    "microservices architecture",
    "event-driven systems",
    "enterprise application development",
    "backend developer",
    "frontend developer",
    "react developer",
    "next.js developer",
    "java developer",
    "spring boot microservices",
    "kafka event streaming",
    "docker kubernetes",
    "typescript developer",
    "cloud native applications",
    "distributed systems",
    "portfolio website",
    "developer portfolio",
    "Lowe's India engineer",
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
