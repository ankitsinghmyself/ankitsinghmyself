"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Download,
  MapPin,
} from "lucide-react";

import ContactMailForm from "@/components/contact-mail-form";
import {
  about,
  contact,
  experiences,
  hero,
  projects,
  resumeHref,
  skills,
  socials,
} from "@/lib/site";
import {
  fadeUp,
  floatingTransition,
  scaleIn,
  staggerContainer,
  viewport,
} from "@/lib/motion";

type SectionHeadingProps = {
  description?: string;
  kicker: string;
  title: string;
};

const SectionHeading = ({
  description,
  kicker,
  title,
}: SectionHeadingProps) => {
  return (
    <motion.div
      className="mb-12 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer(0.04, 0.1)}
    >
      <motion.p className="neo-kicker" variants={fadeUp()}>
        {kicker}
      </motion.p>
      <motion.h2
        className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl"
        variants={fadeUp()}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/56"
          variants={fadeUp()}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
};

const HomePage = () => {
  const shouldReduceMotion = useReducedMotion();

  const cardHover = shouldReduceMotion
    ? undefined
    : {
        y: -10,
        scale: 1.01,
        transition: {
          type: "spring" as const,
          stiffness: 260,
          damping: 20,
        },
      };

  const chipHover = shouldReduceMotion
    ? undefined
    : {
        y: -4,
        scale: 1.04,
        transition: {
          type: "spring" as const,
          stiffness: 280,
          damping: 18,
        },
      };

  return (
    <main className="neo-shell overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 54, -18, 0],
                  y: [0, -46, 14, 0],
                  scale: [1, 1.08, 0.96, 1],
                }
          }
          className="ambient-orb ambient-orb-one"
          transition={floatingTransition(20)}
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, -42, 26, 0],
                  y: [0, 34, -18, 0],
                  scale: [1, 0.95, 1.06, 1],
                }
          }
          className="ambient-orb ambient-orb-two"
          transition={floatingTransition(24)}
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 20, -28, 0],
                  y: [0, 44, -12, 0],
                  scale: [1, 1.06, 0.92, 1],
                }
          }
          className="ambient-orb ambient-orb-three"
          transition={floatingTransition(26)}
        />
      </div>

      <section className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-16 pt-28 text-center sm:px-6 lg:px-8">
        <motion.div
          animate="visible"
          className="mx-auto flex w-full max-w-4xl flex-col"
          initial="hidden"
          variants={staggerContainer(0.12, 0.1)}
        >
          <motion.div
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#56ccf2]/20 bg-[#071225]/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7dd3fc]"
            variants={fadeUp()}
          >
            <span className="h-2 w-2 rounded-full bg-[#56ccf2] motion-safe:animate-pulse" />
            {hero.availability}
          </motion.div>

          <motion.div className="mx-auto mt-10" variants={scaleIn()}>
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -12, 0],
                      rotate: [0, 2.5, 0],
                    }
              }
              className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#7c4dff]/35 bg-[radial-gradient(circle_at_30%_30%,rgba(124,77,255,0.38),rgba(5,10,22,0.2))] shadow-[0_0_45px_rgba(124,77,255,0.3)] sm:h-24 sm:w-24"
              transition={floatingTransition(7.5)}
            >
              <span className="absolute inset-[-12px] rounded-full border border-white/10 animate-[pulse-ring_4s_ease-in-out_infinite]" />
              <Code2 className="size-9 text-[#c4b5fd] sm:size-10" />
            </motion.div>
          </motion.div>

          <motion.p className="neo-kicker mt-8" variants={fadeUp()}>
            {hero.kicker}
          </motion.p>
          <motion.h1
            className="mt-4 text-5xl font-semibold tracking-[-0.07em] text-white sm:text-7xl lg:text-[5.7rem]"
            variants={fadeUp()}
          >
            Ankit <span className="neo-gradient-text">Singh</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-lg font-medium text-white/82 sm:text-2xl"
            variants={fadeUp()}
          >
            {hero.title}
          </motion.p>
          <motion.p
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/58 sm:text-base"
            variants={fadeUp()}
          >
            {hero.subtitle}
          </motion.p>
          <motion.div
            className="mt-4 inline-flex items-center justify-center gap-2 text-sm text-white/46"
            variants={fadeUp()}
          >
            <MapPin className="size-4 text-[#56ccf2]" />
            {hero.location}
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
            variants={fadeUp()}
          >
            <motion.div whileHover={chipHover} whileTap={{ scale: 0.98 }}>
              <Link
                href="/#contact"
                className="neo-button-primary inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold"
              >
                Let&apos;s Talk
                <ArrowRight className="size-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={chipHover} whileTap={{ scale: 0.98 }}>
              <Link
                href={resumeHref}
                target="_blank"
                className="neo-button-secondary inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold"
              >
                Resume
                <Download className="size-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
            variants={staggerContainer(0.1, 0.08)}
          >
            {socials.map((item) => (
              <motion.div
                key={item.label}
                variants={scaleIn()}
                whileHover={chipHover}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  aria-label={item.label}
                  className="social-chip inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/74 transition hover:bg-white/10 hover:text-white"
                >
                  <item.icon className="size-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-14 flex items-center justify-center"
            variants={fadeUp()}
          >
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, 7, 0] }}
              transition={floatingTransition(2.8)}
            >
              <Link
                href="/#about"
                className="inline-flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/42"
              >
                Scroll
                <ArrowDown className="size-4" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section
        id="about"
        className="relative scroll-mt-28 border-t border-white/6 py-16 sm:py-20"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7c4dff]/30 to-transparent" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading kicker="About Me" title="About Me" />

          <motion.div
            className="neo-panel grid gap-6 rounded-[28px] p-5 sm:p-6 lg:grid-cols-[320px_1fr] lg:p-8"
            initial="hidden"
            viewport={viewport}
            variants={staggerContainer(0.08, 0.12)}
            whileInView="visible"
          >
            <motion.div
              className="overflow-hidden rounded-[24px] border border-white/10 bg-[#091326]"
              variants={fadeUp()}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.015,
                      transition: {
                        type: "spring",
                        stiffness: 220,
                        damping: 18,
                      },
                    }
              }
            >
              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 1.04,
                        transition: { duration: 0.8 },
                      }
                }
              >
                <Image
                  src="/portrait.jpg"
                  alt="Portrait of Ankit Singh"
                  width={900}
                  height={1100}
                  className="h-full min-h-[320px] w-full object-cover object-top"
                />
              </motion.div>
            </motion.div>

            <motion.div className="flex flex-col" variants={fadeUp()}>
              <motion.div
                className="inline-flex w-fit items-center rounded-full border border-[#56ccf2]/20 bg-[#56ccf2]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7dd3fc]"
                variants={fadeUp()}
              >
                {about.greeting}
              </motion.div>

              <motion.div
                className="mt-5 space-y-4 text-sm leading-7 text-white/66 sm:text-[15px]"
                variants={staggerContainer(0.08, 0.08)}
              >
                {about.paragraphs.map((paragraph) => (
                  <motion.p key={paragraph} variants={fadeUp()}>
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>

              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                variants={staggerContainer(0.14, 0.08)}
              >
                {about.stats.map((item) => (
                  <motion.div
                    key={item.label}
                    className="neo-panel-soft motion-card rounded-2xl px-4 py-3"
                    variants={scaleIn()}
                    whileHover={cardHover}
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-white/38">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-8 flex flex-col gap-3 sm:flex-row"
                variants={fadeUp()}
              >
                <motion.div whileHover={chipHover} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/#projects"
                    className="neo-button-primary inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold"
                  >
                    View Projects
                  </Link>
                </motion.div>
                <motion.div whileHover={chipHover} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/#contact"
                    className="neo-button-secondary inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold"
                  >
                    Contact Me
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="experience"
        className="relative scroll-mt-28 border-t border-white/6 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading kicker="My Journey" title="Experience" />

          <div className="relative">
            <div className="absolute bottom-0 left-[13px] top-0 w-px bg-gradient-to-b from-[#7c4dff]/0 via-[#7c4dff]/40 to-[#56ccf2]/0 md:left-1/2 md:-translate-x-1/2" />

            <motion.div
              className="space-y-8"
              initial="hidden"
              viewport={viewport}
              variants={staggerContainer(0.08, 0.16)}
              whileInView="visible"
            >
              {experiences.map((item, index) => (
                <motion.div
                  key={`${item.company}-${item.role}`}
                  className="relative md:grid md:grid-cols-2 md:gap-10"
                  variants={fadeUp()}
                >
                  <div
                    className={`ml-10 md:ml-0 ${
                      index % 2 === 0
                        ? "md:col-start-1 md:pr-10"
                        : "md:col-start-2 md:pl-10"
                    }`}
                  >
                    <motion.article
                      className="neo-panel motion-card rounded-[22px] p-5"
                      whileHover={cardHover}
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-lg font-semibold text-white">
                            {item.role}
                          </p>
                          <p className="mt-1 text-sm text-[#7dd3fc]">
                            {item.company}
                          </p>
                        </div>
                        <p className="text-xs font-medium text-white/42">
                          {item.period}
                        </p>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-white/64">
                        {item.summary}
                      </p>
                      <ul className="mt-4 space-y-3">
                        {item.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3 text-sm leading-7 text-white/62"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#56ccf2]" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="neo-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.article>
                  </div>

                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            boxShadow: [
                              "0 0 0 rgba(124,77,255,0.18)",
                              "0 0 24px rgba(124,77,255,0.42)",
                              "0 0 0 rgba(124,77,255,0.18)",
                            ],
                          }
                    }
                    className="absolute left-0 top-6 flex h-7 w-7 items-center justify-center rounded-full border border-[#7c4dff]/35 bg-[#091327] md:left-1/2 md:-translate-x-1/2"
                    transition={floatingTransition(3.2)}
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#56ccf2] to-[#ff2d9a]" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative scroll-mt-28 border-t border-white/6 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading kicker="My Work" title="Projects" />

          <motion.div
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            viewport={viewport}
            variants={staggerContainer(0.08, 0.12)}
            whileInView="visible"
          >
            {projects.map((project) => (
              <motion.article
                key={project.title}
                className="neo-panel motion-card rounded-[22px] p-5"
                variants={fadeUp()}
                whileHover={cardHover}
              >
                <div className="inline-flex rounded-full border border-[#56ccf2]/20 bg-[#56ccf2]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7dd3fc]">
                  Case Study
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/64">
                  {project.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="neo-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.div
                  className="mt-5 inline-flex"
                  whileHover={chipHover}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#9ec8ff] transition hover:text-white"
                  >
                    View section
                    <ArrowRight className="size-4" />
                  </Link>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="skills"
        className="relative scroll-mt-28 border-t border-white/6 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading kicker="Tech Stack" title="Skills" />

          <motion.div
            className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
            initial="hidden"
            viewport={viewport}
            variants={staggerContainer(0.04, 0.06)}
            whileInView="visible"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.label}
                className="neo-panel-soft motion-card group flex min-h-[88px] flex-col items-center justify-center rounded-[18px] px-3 py-4 text-center"
                variants={scaleIn()}
                whileHover={cardHover}
              >
                <skill.icon className="size-7 text-[#9ec8ff] transition duration-300 group-hover:scale-110 group-hover:text-white" />
                <p className="mt-3 text-xs font-medium text-white/74">
                  {skill.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="contact"
        className="relative scroll-mt-28 border-t border-white/6 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Get in Touch"
            title="Contact Me"
            description={contact.note}
          />

          <motion.div
            className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]"
            initial="hidden"
            viewport={viewport}
            variants={staggerContainer(0.08, 0.14)}
            whileInView="visible"
          >
            <motion.div
              className="neo-panel rounded-[24px] p-5 sm:p-6"
              variants={fadeUp()}
            >
              <p className="text-lg font-semibold text-white">Get in touch</p>
              <p className="mt-3 text-sm leading-7 text-white/58">
                Send a message or reach out directly through any of the channels
                below.
              </p>

              <motion.div
                className="mt-6 grid gap-3"
                variants={staggerContainer(0.08, 0.08)}
              >
                {contact.methods.map((item) => (
                  <motion.div
                    key={item.label}
                    className="motion-card rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                    variants={fadeUp()}
                    whileHover={cardHover}
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-white/34">
                      {item.label}
                    </p>
                    {item.href === "#" ? (
                      <p className="mt-2 text-sm font-semibold text-white/82">
                        {item.value}
                      </p>
                    ) : (
                      <Link
                        href={item.href}
                        target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                        className="mt-2 inline-flex text-sm font-semibold text-[#9ec8ff] transition hover:text-white"
                      >
                        {item.value}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="neo-panel rounded-[24px] p-5 sm:p-6"
              variants={fadeUp()}
              whileHover={cardHover}
            >
              <ContactMailForm email={contact.email} />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
