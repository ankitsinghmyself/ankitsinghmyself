"use client";

import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

import { navigation, resumeHref } from "@/lib/site";
import Logo from "./logo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-5xl rounded-full border border-white/10 bg-[#071225]/84 px-3 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 transition-transform duration-200 hover:-translate-y-0.5"
            onClick={() => setMenuOpen(false)}
          >
            <Logo width={24} height={24} />
            <span className="text-sm font-semibold text-white">Ankit</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="header-link inline-flex text-xs font-medium text-white/72 transition hover:-translate-y-0.5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href={resumeHref}
              target="_blank"
              className="inline-flex h-9 items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 text-xs font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Resume
              <Download className="size-3.5" />
            </Link>
          </div>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white transition-transform duration-200 active:scale-95 md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>

        <div
          className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-300 md:hidden ${
            menuOpen
              ? "mt-3 grid-rows-[1fr] opacity-100"
              : "mt-0 grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="grid gap-2 border-t border-white/10 pt-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/82 transition duration-200 hover:bg-white/10"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={resumeHref}
                target="_blank"
                className="mt-1 inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#7c4dff] via-[#675dff] to-[#ff2d9a] px-4 text-sm font-semibold text-white transition-transform duration-200 active:scale-[0.98]"
                onClick={() => setMenuOpen(false)}
              >
                Resume
                <Download className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
