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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  keywords: [
    "Ankit Singh",
    "creative developer",
    "portfolio website",
    "interactive portfolio",
    "next.js portfolio",
    "AI interface design",
    "frontend engineer",
    "visual systems",
    "web experiences",
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
  metadataBase: new URL(url),
});
