import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/build-log");

export type BuildLogFrontmatter = {
  title: string;
  description: string;
  date: string;
  slug: string;
  entry_number: string;
};

export type BuildLogPost = BuildLogFrontmatter & {
  content: string;
  readMinutes: number;
};

function estimateReadMinutes(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function getBuildLogSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getBuildLogPost(slug: string): BuildLogPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as BuildLogFrontmatter;

  return {
    ...frontmatter,
    content,
    readMinutes: estimateReadMinutes(content),
  };
}

export function getAllBuildLogPosts(): BuildLogPost[] {
  return getBuildLogSlugs()
    .map((slug) => getBuildLogPost(slug))
    .filter((post): post is BuildLogPost => post !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function formatBuildLogDate(isoDate: string): string {
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString("en-CA", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
