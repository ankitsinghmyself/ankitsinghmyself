import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { caseStudies } from "@/lib/case-studies";

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
    <main className="pt-20">
      <section className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-secondary transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to projects
        </Link>

        <div className="mt-8">
          <p className="text-xs font-medium uppercase tracking-wider text-secondary">
            Case Study
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {study.title}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-secondary">
            {study.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-md border border-border px-2 py-0.5 text-xs text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Role", value: study.role },
            { label: "Company", value: study.company },
            { label: "Period", value: study.period },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-border p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="rounded-lg border border-border p-4">
              <p className="text-lg font-semibold text-foreground">{metric.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-secondary">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-6">
          {study.sections.map((section) => (
            <article key={section.title}>
              <h2 className="text-base font-semibold text-foreground">
                {section.title}
              </h2>
              {Array.isArray(section.content) ? (
                <ul className="mt-3 space-y-2">
                  {section.content.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-secondary"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/30" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm leading-relaxed text-secondary">
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

