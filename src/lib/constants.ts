import { BriefcaseBusiness, CircleUserRound, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const socials = [
  { name: "Github", href: "https://github.com/ankitsinghmyself/", icon: FaGithub },
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
  { name: "About", href: "/about", Icon: CircleUserRound },
  { name: "Work", href: "/work", Icon: BriefcaseBusiness },
  // { name: "Notebook", href: "/notebook", Icon: Pencil },
  { name: "Contact", href: "/contact", Icon: Mail },
];

export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "ankitsinghmyself@gmail.com";
