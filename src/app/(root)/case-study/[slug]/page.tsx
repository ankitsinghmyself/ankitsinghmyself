import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { caseStudies } from "@/lib/case-studies";
import CaseStudyDiagram from "@/components/case-study-diagram";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export const generateStaticParams = () =>
  caseStudies.map((study) => ({
    slug: study.slug,
  }));

const CaseStudyDetailPage = async ({ params }: CaseStudyPageProps) => {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="neo-shell overflow-hidden">
      <section className="mx-auto max-w-5xl px-4 pb-12 pt-28 sm:px-6 lg:px-8">
        <div className="inline-flex">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#9ec8ff] transition hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Back to projects
          </Link>
        </div>

        <div className="mt-8">
          <p className="neo-kicker">Case Study</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">
            {study.title}
          </h1>
          <p className="mt-4 text-sm leading-7 text-white/62 sm:text-base">
            {study.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span key={tag} className="neo-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Role", value: study.role },
            { label: "Company", value: study.company },
            { label: "Period", value: study.period },
          ].map((item) => (
            <div
              key={item.label}
              className="neo-panel-soft rounded-[20px] px-4 py-4"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/38">
                {item.label}
              </p>
              <p className="mt-3 text-sm font-semibold text-white/82">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {study.metrics.map((metric) => (
            <div
              key={metric.label}
              className="neo-panel motion-card rounded-[22px] px-5 py-5"
            >
              <p className="text-sm font-semibold text-white">{metric.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/42">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {study.diagram ? (
          <div className="neo-panel mt-8 rounded-[24px] p-5 sm:p-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/42">
                  System Diagram
                </p>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  {study.diagram.title}
                </h2>
                {study.diagram.description ? (
                  <p className="mt-2 text-sm leading-7 text-white/62">
                    {study.diagram.description}
                  </p>
                ) : null}
              </div>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7dd3fc]">
                Live flow
              </span>
            </div>

            <div className="mt-8 h-[480px] w-full">
              <CaseStudyDiagram nodes={study.diagram.nodes} />
            </div>
          </div>
        ) : null}

        <div className="mt-10 grid gap-4">
          {study.sections.map((section) => (
            <article
              key={section.title}
              className="neo-panel rounded-[22px] p-5"
            >
              <h2 className="text-lg font-semibold text-white">
                {section.title}
              </h2>
              {Array.isArray(section.content) ? (
                <ul className="mt-4 space-y-3">
                  {section.content.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-7 text-white/64"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#56ccf2]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm leading-7 text-white/64">
                  {section.content}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CaseStudyDetailPage;
