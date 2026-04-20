import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Download,
  ExternalLink,
  MapPin,
} from "lucide-react";

import HeroNameStatic from "@/components/hero-name-static";
import ContactFormGate from "@/components/contact-form-gate";
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
    <div className="mb-12 text-center">
      <p className="neo-kicker">{kicker}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/56">
          {description}
        </p>
      ) : null}
    </div>
  );
};

const HomePage = () => {
  return (
    <main className="neo-shell overflow-hidden">
      <section className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-16 pt-28 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-4xl flex-col">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#56ccf2]/20 bg-[#071225]/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7dd3fc]">
            <span className="h-2 w-2 rounded-full bg-[#56ccf2]" />
            {hero.availability}
          </div>

          <div className="mx-auto mt-10">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#7c4dff]/35 bg-[radial-gradient(circle_at_30%_30%,rgba(124,77,255,0.38),rgba(5,10,22,0.2))] shadow-[0_0_45px_rgba(124,77,255,0.3)] sm:h-24 sm:w-24">
              <Code2 className="size-9 text-[#c4b5fd] sm:size-10" />
            </div>
          </div>

          <p className="neo-kicker mt-8">{hero.kicker}</p>
          <HeroNameStatic text={hero.name} />
          <p className="mt-4 text-lg font-medium text-white/82 sm:text-2xl">
            {hero.title}
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/58 sm:text-base">
            {hero.subtitle}
          </p>
          <div className="mt-4 inline-flex items-center justify-center gap-2 text-sm text-white/46">
            <MapPin className="size-4 text-[#56ccf2]" />
            {hero.location}
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/#contact"
              prefetch={false}
              className="neo-button-primary inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold"
            >
              Let&apos;s Talk
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href={resumeHref}
              target="_blank"
              prefetch={false}
              className="neo-button-secondary inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold"
            >
              Resume
              <Download className="size-4" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {socials.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                aria-label={item.label}
                className="social-chip inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/74 transition hover:-translate-y-1 hover:bg-white/10 hover:text-white"
              >
                <item.icon className="size-4" />
              </Link>
            ))}
          </div>

          <div className="mt-14 flex items-center justify-center">
            <Link
              href="/#about"
              prefetch={false}
              className="inline-flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/42"
            >
              Scroll
              <ArrowDown className="size-4" />
            </Link>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="relative scroll-mt-28 border-t border-white/6 py-16 sm:py-20 [contain-intrinsic-size:1px_960px] [content-visibility:auto]"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7c4dff]/30 to-transparent" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading kicker="About Me" title="About Me" />

          <div className="neo-panel relative grid items-center gap-8 overflow-hidden rounded-[32px] p-4 sm:p-6 lg:grid-cols-[340px_1fr] lg:p-8 xl:gap-12">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(circle_at_left,rgba(124,77,255,0.12),transparent_36%),radial-gradient(circle_at_right,rgba(86,204,242,0.08),transparent_30%)]"
            />
            <div className="relative mx-auto w-full max-w-sm lg:max-w-[340px]">
              <div
                aria-hidden="true"
                className="absolute inset-x-8 bottom-8 top-12 rounded-[32px] bg-[radial-gradient(circle,rgba(124,77,255,0.32),rgba(86,204,242,0.2),transparent_72%)] blur-3xl"
              />
              <div className="neo-panel-soft relative overflow-hidden rounded-[30px] border border-white/10 p-3 transition-transform duration-300 hover:-translate-y-1.5 sm:p-4">
                <div className="relative aspect-[11/13] overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#e8e0dc_0%,#d8cfca_42%,#b8b0ac_100%)]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.42),transparent_44%)]"
                  />
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/IMG_5057.png"
                      alt="Photo of Ankit Singh"
                      fill
                      sizes="(min-width: 1280px) 360px, (min-width: 1024px) 320px, (min-width: 640px) 420px, 100vw"
                      className="translate-y-4 scale-[1.16] object-cover object-top transition-transform duration-700 hover:scale-[1.2]"
                    />
                  </div>
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
              </div>
            </div>

            <div className="relative flex flex-col justify-center lg:border-l lg:border-white/8 lg:pl-8 xl:pl-10">
              <div className="inline-flex w-fit items-center rounded-full border border-[#56ccf2]/20 bg-[#56ccf2]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7dd3fc]">
                {about.greeting}
              </div>

              <h3 className="mt-5 max-w-2xl text-2xl font-semibold tracking-[-0.05em] text-white sm:text-[2rem]">
                Fast frontend. Strong UX. Production-ready delivery.
              </h3>

              <div className="mt-5 space-y-4 text-sm leading-7 text-white/66 sm:text-[15px]">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {about.stats.map((item) => (
                  <div
                    key={item.label}
                    className="neo-panel-soft motion-card flex min-h-[96px] flex-col justify-between rounded-2xl px-4 py-4 transition-transform duration-300 hover:-translate-y-1.5"
                  >
                    <p className="text-lg font-semibold text-white sm:text-xl">
                      {item.value}
                    </p>
                    <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-white/38">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#projects"
                  className="neo-button-primary inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold"
                >
                  View Projects
                </Link>
                <Link
                  href="/#contact"
                  className="neo-button-secondary inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="relative scroll-mt-28 border-t border-white/6 py-16 sm:py-20 [contain-intrinsic-size:1px_1100px] [content-visibility:auto]"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading kicker="My Journey" title="Experience" />

          <div className="relative">
            <div className="absolute bottom-0 left-[13px] top-0 w-px bg-gradient-to-b from-[#7c4dff]/0 via-[#7c4dff]/40 to-[#56ccf2]/0 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-8">
              {experiences.map((item, index) => (
                <div
                  key={`${item.company}-${item.role}`}
                  className="relative md:grid md:grid-cols-2 md:gap-10"
                >
                  <div
                    className={`ml-10 md:ml-0 ${index % 2 === 0
                      ? "md:col-start-1 md:pr-10"
                      : "md:col-start-2 md:pl-10"
                      }`}
                  >
                    <article className="neo-panel motion-card rounded-[22px] p-5 transition-transform duration-300 hover:-translate-y-1.5">
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
                    </article>
                  </div>

                  <div className="absolute left-0 top-6 flex h-7 w-7 items-center justify-center rounded-full border border-[#7c4dff]/35 bg-[#091327] shadow-[0_0_24px_rgba(124,77,255,0.28)] md:left-1/2 md:-translate-x-1/2">
                    <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#56ccf2] to-[#ff2d9a]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative scroll-mt-28 border-t border-white/6 py-16 sm:py-20 [contain-intrinsic-size:1px_980px] [content-visibility:auto]"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading kicker="My Work" title="Projects" />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="neo-panel motion-card rounded-[22px] p-5 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="inline-flex justify-between w-full">
                  <div className="inline-flex rounded-full border border-[#56ccf2]/20 bg-[#56ccf2]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7dd3fc]">
                    Case Study
                  </div>
                  {project.doc_link && (
                    <Link
                      href={project.doc_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      prefetch={false}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#9ec8ff] transition hover:text-white"
                      aria-label="Documentation"
                    >
                      Doc
                      <ExternalLink className="size-4" />
                    </Link>
                  )}
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
                <div className="mt-5 inline-flex justify-between w-full">
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#9ec8ff] transition hover:text-white"
                  >
                    View section
                    <ArrowRight className="size-4" />
                  </Link>


                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="relative scroll-mt-28 border-t border-white/6 py-16 sm:py-20 [contain-intrinsic-size:1px_780px] [content-visibility:auto]"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading kicker="Tech Stack" title="Skills" />

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="neo-panel-soft motion-card group flex min-h-[88px] flex-col items-center justify-center rounded-[18px] px-3 py-4 text-center transition-transform duration-300 hover:-translate-y-1.5"
              >
                <skill.icon className="size-7 text-[#9ec8ff] transition duration-300 group-hover:scale-110 group-hover:text-white" />
                <p className="mt-3 text-xs font-medium text-white/74">
                  {skill.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative scroll-mt-28 border-t border-white/6 py-16 sm:py-20 [contain-intrinsic-size:1px_820px] [content-visibility:auto]"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Get in Touch"
            title="Contact Me"
            description={contact.note}
          />

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="neo-panel rounded-[24px] p-5 sm:p-6">
              <p className="text-lg font-semibold text-white">Get in touch</p>
              <p className="mt-3 text-sm leading-7 text-white/58">
                Send a message or reach out directly through any of the channels
                below.
              </p>

              <div className="mt-6 grid gap-3">
                {contact.methods.map((item) => (
                  <div
                    key={item.label}
                    className="motion-card rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition-transform duration-300 hover:-translate-y-1"
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
                  </div>
                ))}
              </div>
            </div>

            <div className="neo-panel rounded-[24px] p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6 min-h-[340px]">
              <ContactFormGate email={contact.email} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
