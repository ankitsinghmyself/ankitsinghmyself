import Link from "next/link";

import { contact, socials } from "@/lib/site";
import Logo from "./logo";

type FooterProps = {
  year: number;
};

const Footer = ({ year }: FooterProps) => {
  return (
    <footer className="border-t border-white/8 bg-[#050916]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <Logo width={22} height={22} />
            <span className="text-sm font-semibold text-white">Ankit Singh</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/58">
            Senior frontend engineering, scalable systems, and design-aware web
            experiences with measurable product impact.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/42">
            Contact
          </p>
          <div className="mt-4 grid gap-3 text-sm text-white/66">
            <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
            <span>Bengaluru, India / Remote</span>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/42">
            Elsewhere
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {socials.map((item) => (
              <div
                key={item.label}
              >
                <Link
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/72 transition duration-200 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 px-4 py-4 text-center text-xs text-white/34 sm:px-6 lg:px-8">
        {year} Ankit Singh
      </div>
    </footer>
  );
};

export default Footer;
