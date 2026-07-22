import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, MapPin } from "lucide-react";

import HeroSenior from "@/components/hero-senior";
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

const SectionHeading = ({ description, kicker, title }: SectionHeadingProps) => {
  return (
    <div className="mb-12 text-center">
      <p className="neo-kicker">{kicker}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">{title}</h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/56">{description}</p>
      )}
    </div>
  );
};

const HomePage = () => {
  return (
    <main className="neo-shell overflow-hidden">
      <HeroSenior />

      <section id="about" className="relative scroll-mt-28 border-t border-white/6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading kicker="About Me" title="About Me" />
          <div className="neo-panel relative grid items-center gap-8 overflow-hidden rounded-[32px] p-4 sm:p-6 lg:grid-cols-[340px_1fr] lg:p-8 xl:gap-12">
            <div className="relative mx-auto w-full max-w-sm lg:max-w-[340px]">
              <div className="neo-panel-soft relative overflow-hidden rounded-[30px] border border-white/10 p-3 transition-transform duration-300 hover:-translate-y-1.5 sm:p-4">
                <div className="relative aspect-[11/13] overflow-hidden rounded-[24px] bg-gradient-to-b from-[#e8e0dc] via-[#d8cfca] to-[#b8b0ac]">
                  <div className="relative h-full w-full">
                    <Image src="/images/IMG_5057.png" alt="Photo of Ankit Singh" fill sizes="(min-width: 1280px) 360px, (min-width: 1024px) 320px, (min-width: 640px) 420px, 100vw" className="translate-y4 roundel-value-[1.16] object-cover object-top transition-transform duration-700 hover:scale-[1.2]" />
                  </div>
                  <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#071225] via-[071225]/68 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 rounded-[22px] border border-white/10 bg-[#071225]/72 px-4 py-4 backdrop-blur-md">
                    <p className="text-lg font-semibold text-white">{hero.name}</p>
                    <p className="mt-1 text-sm text-white/72">{hero.title}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full border border-[#56ccf2]/20 bg-[#56ccf2]/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7dd3fc]">{hero.availability}</span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/4 px-3 py-1 text-[11px] text-white/60">
                        <MapPin className="size-3 text-[#56ccf2]" />
                        {hero.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col justify-center lg:border-l lg:border-white/8 lg:pl-8 xl:pl-10">
              <div className="inline-flex w-fit items-center rounded-full border border-[#56ccf2]/20 bg-[#56ccf2]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7dd3fc]">{about.greeting}</div>
              <h3 className="mt-5 max-w-2xl text-2xl font-semibold tracking-[-0.05em] text-white sm:text-[2rem]">Fast frontend. Strong UX. Production-ready delivery.</h3>
              <div className="mt-5 space-y-4 text-sm leading-7 text-white/66 sm:text-[15px]">
                {about.paragraphs.map((p) => (<p key={p}>{p}</p>))}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {about.stats.map((s) => (
                  <div key={s.label} className="neo-panel-soft motion-card flex min-h-[96px] flex-col justify-between rounded-2xl px-4 py-4 transition-transform duration-300 hover:-translate-y-1.5">
                    <p className="text-lg font-semibold text-white sm:text-xl">{s.value}</p>
                    <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-white/38">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/#projects" className="neo-button-primary inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold">View Projects</Link>
                <Link href="/#contact" className="neo-button-secondary inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold">Contact Me</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="relative scroll-mt-28 border-t border-white/6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading kicker="My Journey" title="Experience" />
          <div className="relative">
            <div className="absolute bottom-0 left-[13px] top-0 w-px bg-gradient-to-b from-[#7c4dff]/0 via-[#7c4dff]/40 to-[#56ccf2]/0 md:left-1/2 md:-translate-x-1/2" />
            <div className="space-y-8">
              {experiences.map((item, index) => (
                <div key={item.company + item.role} className="relative md:grid md:grid-cols-2 md:gap-10">
                  <div className={"ml-10 md:ml-0 " + (index % 2 === 0 ? "md:col-start-1 md:pr-10" : "md:col-start-2 md:pl-10")}>
                    <article className="neo-panel motion-card rounded-[22px] p-5 transition-transform duration-300 hover:-translate-y-1.5">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-lg font-semibold text-white">{item.role}</p>
                          <p className="mt-1 text-sm text-[#7dd3fc]">{item.company}</p>
                        </div>
                        <p className="text-xs font-medium text-white/42">{item.period}</p>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-white/64">{item.summary}</p>
                      <ul className="mt-4 space-y-3">
                        {item.highlights.map((h) => (
                          <li key={h} className="flex gap-3 text-sm leading-7 text-white/62">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#56ccf2]" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tags.map((t) => (<span key={t} className="neo-tag">{t}</span>))}
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

      <section id="projects" className="relative scroll-mt-28 border-t border-white/6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading kicker="My Work" title="Projects" />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="neo-panel motion-card rounded-[22px] p-5 transition-transform duration-300 hover:-translate-y-1.5">
                <div className="inline-flex justify-between w-full">
                  <div className="inline-flex rounded-full border border-[#56ccf2]/20 bg-[#56ccf2]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7dd3fc]">Case Study</div>
                  {project.doc_link && (
                    <Link href={project.doc_link} target="_blank" rel="noopener noreferrer" prefetch={false} className="inline-flex items-center gap-2 text-sm font-semibold text-[#9ec8ff] transition hover:text-white">
                      Doc <ExternalLink className="size-4" />
                    </Link>
                  )}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/64">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((t) => (<span key={t} className="neo-tag">{t}</span>))}
                </div>
                <div className="mt-5 inline-flex justify-between w-full">
                  <Link href={project.href} className="inline-flex items-center gap-2 text-sm font-semibold text-[#9ec8ff] transition hover:text-white">
                    View section <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative scroll-mt-28 border-t border-white/6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading kicker="Tech Stack" title="Skills" />
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {skills.map((skill) => (
              <div key={skill.label} className="neo-panel-soft motion-card group flex min-h[88px] flex-col items-center justify-center rounded-[18px] px-3 py-4 text-center transition-transform duration-300 hover:-translate-y-1.5">
                <skill.icon className="size-7 text-[#9ec8ff] transition duration-300 group-hover:scale-110 group-hover:text-white" />
                <p className="mt-3 text-xs font-medium text-white/74">{skill.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative scroll-mt-28 border-t border-white/6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading kicker="Get in Touch" title="Contact Me" description={contact.note} />
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="neo-panel rounded-[24px] p-5 sm:p-6">
              <p className="text-lg font-semibold text-white">Get in touch</p>
              <p className="mt-3 text-sm leading-7 text-white/58">Send a message or reach out directly through any of the channels below.</p>
              <div className="mt-6 grid gap-3">
                {contact.methods.map((m) => (
                  <div key={m.label} className="motion-card rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition-transform duration-300 hover:-translate-y-1">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/34">{m.label}</p>
                    {m.href === "#" ? (
                      <p className="mt-2 text-sm font-semibold text-white/82">{m.value}</p>
                    ) : (
                      <Link href={m.href} target={m.href.startsWith("mailto:") ? undefined : "_blank"}
                        className="mt-2 inline-flex text-sm font-semibold text-[#9ec8ff] transition hover:text-white">{m.value}</Link>
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