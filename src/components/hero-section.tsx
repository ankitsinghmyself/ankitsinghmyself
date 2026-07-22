"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Download,
  MapPin,
} from "lucide-react";

import { hero, resumeHref, socials } from "@/lib/site";
import BackgroundParticleField from "@/components/background-particle-field";
import HeroNameStatic from "@/components/hero-name-static";
import HeroGlowOrbs from "@/components/hero-glow-orbs";
import HeroTechFloater from "@/components/hero-tech-floater";
import { fadeUp, staggerContainer } from "@/lib/motion";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden">
      {/* Ambient background layers */}
      <BackgroundParticleField />
      <HeroGlowOrbs />

      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating tech badges */}
      <HeroTechFloater />

      {/* Main content */}
      <motion.div
        className="relative z-20 mx-auto flex w-full max-w-5xl flex-col items-center px-4 pb-20 pt-28 text-center sm:px-6 lg:px-8"
        variants={staggerContainer(0.08, 0.14)}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div
          variants={fadeUp(0, 20)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#56ccf2]/20 bg-[#56ccf2]/8 px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#56ccf2] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#56ccf2]" />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7dd3fc]">
            {hero.availability}
          </span>
        </motion.div>

        {/* Name */}
        <motion.div variants={fadeUp(0.08, 24)} className="w-full">
          <HeroNameStatic text={hero.name} />
        </motion.div>

        {/* Title */}
        <motion.p
          variants={fadeUp(0.16, 20)}
          className="mt-4 text-lg font-medium text-white/82 sm:text-2xl"
        >
          {hero.title}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp(0.24, 20)}
          className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/58 sm:text-base"
        >
          {hero.subtitle}
        </motion.p>

        {/* Location */}
        <motion.div
          variants={fadeUp(0.32, 16)}
          className="mt-4 inline-flex items-center gap-2 text-sm text-white/46"
        >
          <MapPin className="size-4 text-[#56ccf2]" />
          {hero.location}
        </motion.div>

        {/* Tech stack kicker */}
        <motion.p
          variants={fadeUp(0.38, 16)}
          className="neo-kicker mt-6"
        >
          {hero.kicker}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp(0.46, 20)}
          className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/#contact"
            prefetch={false}
            className="group neo-button-primary inline-flex h-12 items-center justify-center gap-2.5 rounded-xl px-6 text-sm font-semibold"
          >
            Let&apos;s Talk
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href={resumeHref}
            target="_blank"
            prefetch={false}
            className="group neo-button-secondary inline-flex h-12 items-center justify-center gap-2.5 rounded-xl px-6 text-sm font-semibold"
          >
            Resume
            <Download className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeUp(0.54, 16)}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {socials.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              aria-label={item.label}
              className="group social-chip inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/74 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-white hover:shadow-[0_8px_24px_rgba(86,204,242,0.15)]"
            >
              <item.icon className="size-4 transition-transform duration-200 group-hover:scale-110" />
            </Link>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp(0.62, 16)}
          className="mt-16 flex items-center justify-center"
        >
          <Link
            href="/#about"
            prefetch={false}
            className="group inline-flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/42 transition-colors duration-200 hover:text-white/70"
          >
            <span className="transition-transform duration-200 group-hover:translate-y-0.5">
              Scroll
            </span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="size-4" />
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

