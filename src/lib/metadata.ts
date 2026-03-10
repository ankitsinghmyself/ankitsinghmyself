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
  title = "Ankit Singh | Creative Developer",
  description = "Creative developer building portfolio systems, AI-flavored interfaces, and modern web experiences with strong visual direction.",
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
    "creative developer",
    "software engineer",
    "frontend developer",
    "frontend engineer",
    "web developer",
    "react developer",
    "next.js developer",
    "next.js portfolio",
    "javascript developer",
    "typescript developer",
    "ui engineer",
    "ux engineering",
    "creative technologist",
    "web animation",
    "motion design",
    "interactive portfolio",
    "portfolio website",
    "AI interface design",
    "ai interface design",
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
    "modern web experiences",
    "creative coding",
    "interface design",
    "portfolio",
    "personal website",
    "developer portfolio",
    "visual systems",
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
