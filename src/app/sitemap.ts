import { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/constants";
import { caseStudies } from "@/lib/case-studies";

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

const MONTHLY: ChangeFrequency = "monthly";
const WEEKLY: ChangeFrequency = "weekly";

const routes: Array<{
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
}> = [
  { path: "", changeFrequency: WEEKLY, priority: 1 },
  { path: "/work", changeFrequency: MONTHLY, priority: 0.8 },
  ...caseStudies.map((study) => ({
    path: `/case-study/${study.slug}`,
    changeFrequency: MONTHLY,
    priority: 0.7,
  })),
  { path: "/uses", changeFrequency: MONTHLY, priority: 0.7 },
  { path: "/bookshelf", changeFrequency: MONTHLY, priority: 0.6 },
  { path: "/contact", changeFrequency: MONTHLY, priority: 0.6 },
  { path: "/about", changeFrequency: MONTHLY, priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
