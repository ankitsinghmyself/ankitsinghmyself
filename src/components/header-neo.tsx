"use client";

import React, { useState } from "react";
import Link from "next/link";
import { neoNav, resumeHref } from "@/lib/site";

const HeaderNeo = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-outline-variant bg-surface sticky top-0 z-50">
      <div className="flex justify-between items-center h-16 px-margin-desktop max-w-[1440px] mx-auto">
        <Link
          href="/"
          className="font-headline-md text-headline-md font-bold text-primary flex items-center gap-2"
        >
          <span
            className="material-symbols-outlined text-secondary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            architecture
          </span>
          ENGINEER_CORE_v1.0
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {neoNav.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant pb-1 hover:text-secondary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href={resumeHref}
            target="_blank"
            className="bg-primary text-on-primary px-6 py-2 font-label-md uppercase tracking-wider hover:opacity-90 active:opacity-70 transition-all border border-primary"
          >
            Resume.pdf
          </Link>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center w-10 h-10 border border-outline-variant bg-surface"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-on-surface">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>

          {menuOpen && (
            <div className="absolute top-full left-0 right-0 border-b border-outline-variant bg-surface shadow-lg z-50">
              <div className="flex flex-col gap-1 p-4">
                {neoNav.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-label-md text-label-md uppercase tracking-wider py-3 px-4 border border-outline-variant hover:bg-surface-container transition-colors text-on-surface"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href={resumeHref}
                  target="_blank"
                  className="font-label-md text-label-md uppercase tracking-wider py-3 px-4 bg-primary text-on-primary text-center mt-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Resume.pdf
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderNeo;

