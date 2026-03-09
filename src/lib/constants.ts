import { BriefcaseBusiness, FileText, Mail, Monitor } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "ankitsinghmyself@gmail.com";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ankitsinghmyself.vercel.app";

export const socials = [
  {
    name: "Github",
    href: "https://github.com/ankitsinghmyself/",
    icon: FaGithub,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/singh311094/",
    icon: FaXTwitter,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ankitsinghmyself/",
    icon: FaLinkedin,
  },
];

export const navLinks = [
  { name: "Work", href: "/work", Icon: BriefcaseBusiness },
  { name: "Case Study", href: "/case-study/micro-frontend-platform", Icon: FileText },
  { name: "Lab", href: "/uses", Icon: Monitor },
  { name: "Contact", href: "/contact", Icon: Mail },
];

export const EXPERIENCE_START_YEAR = 2020;
export const EXPERIENCE_START_MONTH_INDEX = 7;
export const EXPERIENCE_START_LABEL = "Aug 2020";

export function getExperienceYearsLabel(referenceDate = new Date()) {
  const years =
    referenceDate.getUTCFullYear() -
    EXPERIENCE_START_YEAR -
    (referenceDate.getUTCMonth() < EXPERIENCE_START_MONTH_INDEX ? 1 : 0);

  return `${Math.max(years, 0)}+`;
}

export function getExperienceYearsText(referenceDate = new Date()) {
  return `${getExperienceYearsLabel(referenceDate)} years`;
}
