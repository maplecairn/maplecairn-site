import { getAllBuildLogPosts } from "@/lib/build-log";
import { getAllSolePropStackPosts } from "@/lib/sole-prop-stack";

const BASE = "https://maplecairn.ca";
const TITLE = "Maple Cairn";
const DESCRIPTION =
  "Canadian personal finance for self-employed builders: cards, taxes, and AI-powered micro products. Writing and build logs from Toronto.";

// Rebuilt on deploy; content only changes when a new post ships.
export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET(): Response {
  const items = [
    ...getAllSolePropStackPosts().map((p) => ({ ...p, path: `/sole-prop-stack/${p.slug}` })),
    ...getAllBuildLogPosts().map((p) => ({ ...p, path: `/build-log/${p.slug}` })),
  ].sort((a, b) => b.date.localeCompare(a.date));

  const itemsXml = items
    .map((p) => {
      const url = `${BASE}${p.path}`;
      const pubDate = new Date(`${p.date}T12:00:00`).toUTCString();
      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(p.description)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(TITLE)}</title>
    <link>${BASE}</link>
    <description>${escapeXml(DESCRIPTION)}</description>
    <language>en-ca</language>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
