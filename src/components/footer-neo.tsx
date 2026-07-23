import Link from "next/link";
import { contact, resumeHref } from "@/lib/site";

type FooterNeoProps = {
  year: number;
};

const FooterNeo = ({ year }: FooterNeoProps) => {
  const socialLinks = [
    { label: "Github", href: contact.github },
    { label: "LinkedIn", href: contact.linkedin },
    { label: "Source_Code", href: contact.github },
  ];

  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center py-8 px-margin-desktop max-w-[1440px] mx-auto">
        <div className="font-label-sm text-label-sm font-data-mono text-on-surface mb-4 md:mb-0">
          &copy; {year} SYSTEM_ARCHITECT // BUILD_772
        </div>

        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              className="font-label-sm text-label-sm font-data-mono text-on-surface-variant opacity-80 hover:text-primary transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-4 md:mt-0 font-label-sm text-label-sm text-primary flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          SYSTEM_STABLE_v1.0
        </div>
      </div>
    </footer>
  );
};

export default FooterNeo;

