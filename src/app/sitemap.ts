import { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/constants";

const routes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/work", changeFrequency: "monthly", priority: 0.8 },
  { path: "/case-study", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/case-study/micro-frontend-platform",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  { path: "/uses", changeFrequency: "monthly", priority: 0.7 },
  { path: "/bookshelf", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
