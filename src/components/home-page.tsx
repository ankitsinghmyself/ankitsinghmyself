"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Download,
  MapPin,
} from "lucide-react";

import BackgroundParticleField from "@/components/background-particle-field";
import ContactMailForm from "@/components/contact-mail-form";
import HeroParticleName from "@/components/hero-particle-name";
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
  const [hasFinePointer, setHasFinePointer] = useState(false);
  const [pointerActive, setPointerActive] = useState(false);
  const pointerRatioX = useMotionValue(0);
  const pointerRatioY = useMotionValue(0);
  const reactiveX = useSpring(pointerRatioX, {
    stiffness: 90,
    damping: 22,
    mass: 0.95,
  });
  const reactiveY = useSpring(pointerRatioY, {
    stiffness: 90,
    damping: 22,
    mass: 0.95,
  });
  const neonWashX = useTransform(reactiveX, [-0.5, 0.5], [-48, 48]);
  const neonWashY = useTransform(reactiveY, [-0.5, 0.5], [-36, 36]);
  const neonMeshX = useTransform(reactiveX, [-0.5, 0.5], [30, -30]);
  const neonMeshY = useTransform(reactiveY, [-0.5, 0.5], [22, -22]);
  const neonTilt = useTransform(reactiveX, [-0.5, 0.5], [-3, 3]);
  const particleLayerX = useTransform(reactiveX, [-0.5, 0.5], [-18, 18]);
  const particleLayerY = useTransform(reactiveY, [-0.5, 0.5], [-12, 12]);
  const orbOneX = useTransform(reactiveX, [-0.5, 0.5], [-16, 22]);
  const orbOneY = useTransform(reactiveY, [-0.5, 0.5], [-18, 14]);
  const orbTwoX = useTransform(reactiveX, [-0.5, 0.5], [18, -14]);
  const orbTwoY = useTransform(reactiveY, [-0.5, 0.5], [16, -20]);
  const orbThreeX = useTransform(reactiveX, [-0.5, 0.5], [-10, 12]);
  const orbThreeY = useTransform(reactiveY, [-0.5, 0.5], [14, -12]);

  useEffect(() => {
    if (shouldReduceMotion) {
      setHasFinePointer(false);
      setPointerActive(false);
      pointerRatioX.set(0);
      pointerRatioY.set(0);
      return;
    }

    const media = window.matchMedia("(pointer: fine)");
    const syncPointerCapability = () => {
      setHasFinePointer(media.matches);
      if (!media.matches) {
        setPointerActive(false);
        pointerRatioX.set(0);
        pointerRatioY.set(0);
      }
    };

    syncPointerCapability();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", syncPointerCapability);

      return () => {
        media.removeEventListener("change", syncPointerCapability);
      };
    }

    media.addListener(syncPointerCapability);

    return () => {
      media.removeListener(syncPointerCapability);
    };
  }, [pointerRatioX, pointerRatioY, shouldReduceMotion]);

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

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (!hasFinePointer || shouldReduceMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const nextX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const nextY = (event.clientY - bounds.top) / bounds.height - 0.5;

    pointerRatioX.set(nextX);
    pointerRatioY.set(nextY);

    if (!pointerActive) {
      setPointerActive(true);
    }
  };

  const handlePointerLeave = () => {
    pointerRatioX.set(0);
    pointerRatioY.set(0);

    if (!pointerActive) {
      return;
    }

    setPointerActive(false);
  };

  return (
    <main
      className="neo-shell overflow-hidden"
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          aria-hidden="true"
          className="neo-gradient-mesh absolute inset-[-18%]"
          animate={{ opacity: hasFinePointer ? (pointerActive ? 0.96 : 0.84) : 0.76 }}
          style={
            hasFinePointer
              ? { x: neonWashX, y: neonWashY, rotate: neonTilt }
              : undefined
          }
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute inset-[-12%] bg-[radial-gradient(circle_at_18%_18%,rgba(86,204,242,0.16),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(124,77,255,0.16),transparent_24%),radial-gradient(circle_at_52%_76%,rgba(255,45,154,0.12),transparent_28%)] blur-[90px]"
          animate={{ opacity: hasFinePointer ? (pointerActive ? 0.84 : 0.66) : 0.58 }}
          style={hasFinePointer ? { x: neonWashX, y: neonWashY } : undefined}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute inset-[-12%] bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_65%_70%,rgba(86,204,242,0.08),transparent_24%),radial-gradient(circle_at_52%_45%,rgba(124,77,255,0.1),transparent_30%)] blur-[120px]"
          animate={{ opacity: hasFinePointer ? (pointerActive ? 0.58 : 0.38) : 0.3 }}
          style={hasFinePointer ? { x: neonMeshX, y: neonMeshY } : undefined}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="absolute inset-0"
          style={
            hasFinePointer ? { x: particleLayerX, y: particleLayerY } : undefined
          }
        >
          <BackgroundParticleField />
        </motion.div>
        <motion.div
          className="ambient-orb ambient-orb-one"
          style={hasFinePointer ? { x: orbOneX, y: orbOneY } : undefined}
        />
        <motion.div
          className="ambient-orb ambient-orb-two"
          style={hasFinePointer ? { x: orbTwoX, y: orbTwoY } : undefined}
        />
        <motion.div
          className="ambient-orb ambient-orb-three"
          style={hasFinePointer ? { x: orbThreeX, y: orbThreeY } : undefined}
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
          <motion.div variants={fadeUp()}>
            <HeroParticleName text={hero.name} />
          </motion.div>
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
            className="neo-panel relative grid items-center gap-8 overflow-hidden rounded-[32px] p-4 sm:p-6 lg:grid-cols-[340px_1fr] lg:p-8 xl:gap-12"
            initial="hidden"
            viewport={viewport}
            variants={staggerContainer(0.08, 0.12)}
            whileInView="visible"
          >
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(circle_at_left,rgba(124,77,255,0.12),transparent_36%),radial-gradient(circle_at_right,rgba(86,204,242,0.08),transparent_30%)]"
            />
            <motion.div
              className="relative mx-auto w-full max-w-sm lg:max-w-[340px]"
              variants={fadeUp()}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-8 bottom-8 top-12 rounded-[32px] bg-[radial-gradient(circle,rgba(124,77,255,0.32),rgba(86,204,242,0.2),transparent_72%)] blur-3xl"
              />
              <motion.div
                className="neo-panel-soft relative overflow-hidden rounded-[30px] border border-white/10 p-3 sm:p-4"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -6,
                        scale: 1.01,
                        transition: {
                          type: "spring",
                          stiffness: 220,
                          damping: 18,
                        },
                      }
                }
              >
                <div className="relative aspect-[11/13] overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#e8e0dc_0%,#d8cfca_42%,#b8b0ac_100%)]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.42),transparent_44%)]"
                  />
                  <motion.div
                    className="relative h-full w-full"
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
                        src="/images/IMG_5057.png"
                        alt="Photo of Ankit Singh"
                        fill
                        sizes="(min-width: 1280px) 360px, (min-width: 1024px) 320px, (min-width: 640px) 420px, 100vw"
                        className="translate-y-4 scale-[1.16] object-cover object-top"
                      />
                    </motion.div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#071225] via-[#071225]/68 to-transparent"
                  />
                  <div className="absolute inset-x-4 bottom-4 rounded-[22px] border border-white/10 bg-[#071225]/72 px-4 py-4 backdrop-blur-md">
                    <p className="text-lg font-semibold text-white">
                      {hero.name}
                    </p>
                    <p className="mt-1 text-sm text-white/72">{hero.title}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full border border-[#56ccf2]/20 bg-[#56ccf2]/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7dd3fc]">
                        {hero.availability}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-white/60">
                        <MapPin className="size-3 text-[#56ccf2]" />
                        {hero.location}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative flex flex-col justify-center lg:border-l lg:border-white/8 lg:pl-8 xl:pl-10"
              variants={fadeUp()}
            >
              <motion.div
                className="inline-flex w-fit items-center rounded-full border border-[#56ccf2]/20 bg-[#56ccf2]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7dd3fc]"
                variants={fadeUp()}
              >
                {about.greeting}
              </motion.div>

              <motion.h3
                className="mt-5 max-w-2xl text-2xl font-semibold tracking-[-0.05em] text-white sm:text-[2rem]"
                variants={fadeUp()}
              >
                Fast frontend. Strong UX. Production-ready delivery.
              </motion.h3>

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
                className="mt-8 grid gap-3 sm:grid-cols-2"
                variants={staggerContainer(0.14, 0.08)}
              >
                {about.stats.map((item) => (
                  <motion.div
                    key={item.label}
                    className="neo-panel-soft motion-card flex min-h-[96px] flex-col justify-between rounded-2xl px-4 py-4"
                    variants={scaleIn()}
                    whileHover={cardHover}
                  >
                    <p className="text-lg font-semibold text-white sm:text-xl">
                      {item.value}
                    </p>
                    <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-white/38">
                      {item.label}
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
