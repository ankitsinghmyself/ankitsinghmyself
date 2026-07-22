"use client";

import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { hero, resumeHref, socials } from "@/lib/site";

const HeroSenior = () => {
  return (
    <section className="relative flex min-h-[92svh] flex-col items-center justify-center px-5 sm:px-8">
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center pb-16 pt-32 text-center">

        {/* Name */}
        <h1 className="text-[clamp(2.5rem,10vw,5rem)] font-bold tracking-tight text-white leading-[1.08]">
          {hero.name}
        </h1>

        {/* Role */}
        <p className="mt-5 text-[clamp(1.1rem,3.5vw,1.6rem)] font-medium text-white/80">
          {hero.title}
        </p>

        {/* Location */}
        <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/50">
          <MapPin className="size-3.5 text-emerald-400 shrink-0" />
          <span>{hero.location}</span>
        </div>

        {/* Divider */}
        <div className="my-7 h-px w-14 bg-white/10" />

        {/* Bio */}
        <p className="max-w-2xl text-[clamp(0.9rem,2.2vw,1.05rem)] leading-relaxed text-white/60">
          {hero.subtitle}
        </p>

        {/* Tech tags */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {hero.kicker.split(" / ").map((tech) => (
            <span
              key={tech}
              className="inline-flex rounded-md border border-white/8 bg-white/[0.03] px-3 py-1 text-[13px] font-medium text-white/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/#contact"
            prefetch={false}
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-white/12 bg-white px-5 text-sm font-semibold text-[#030816] transition duration-200 hover:bg-white/90 active:scale-[0.97] sm:w-auto"
          >
            Let&apos;s Talk
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href={resumeHref}
            target="_blank"
            prefetch={false}
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 text-sm font-semibold text-white/85 transition duration-200 hover:bg-white/[0.08] active:scale-[0.97] sm:w-auto"
          >
            Resume
            <Download className="size-4" />
          </Link>
        </div>

        {/* Socials */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {socials.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              aria-label={item.label}
              className="inline-flex items-center gap-1.5 text-sm text-white/45 transition duration-200 hover:text-white/80"
            >
              <item.icon className="size-4 shrink-0" />
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSenior;
