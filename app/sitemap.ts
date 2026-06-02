import type { MetadataRoute } from "next";
import { getAllBuildLogPosts } from "@/lib/build-log";
import { getAllSolePropStackPosts } from "@/lib/sole-prop-stack";

const BASE = "https://maplecairn.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = [
    ...getAllSolePropStackPosts().map((p) => ({ path: `/sole-prop-stack/${p.slug}`, date: p.date })),
    ...getAllBuildLogPosts().map((p) => ({ path: `/build-log/${p.slug}`, date: p.date })),
  ];

  return [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/sole-prop-stack`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/build-log`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/affiliate-disclosure`, changeFrequency: "yearly", priority: 0.3 },
    ...posts.map((p) => ({
      url: `${BASE}${p.path}`,
      lastModified: new Date(`${p.date}T12:00:00`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
