import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  slug: string;
  entry_number: string;
};

export type Post = PostFrontmatter & {
  content: string;
  readMinutes: number;
};

export const CONTENT_DIRS = {
  "build-log": "content/build-log",
  "sole-prop-stack": "content/sole-prop-stack",
} as const;

export type ContentSection = keyof typeof CONTENT_DIRS;

function getContentDir(section: ContentSection): string {
  return path.join(process.cwd(), CONTENT_DIRS[section]);
}

function estimateReadMinutes(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function resolvePostFile(contentDir: string, slug: string): string | null {
  for (const ext of [".mdx", ".md"]) {
    const filePath = path.join(contentDir, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      return filePath;
    }
  }

  return null;
}

export function getPostSlugs(section: ContentSection): string[] {
  const contentDir = getContentDir(section);

  if (!fs.existsSync(contentDir)) {
    return [];
  }

  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => file.replace(/\.(md|mdx)$/, ""));
}

export function getPostBySlug(section: ContentSection, slug: string): Post | null {
  const contentDir = getContentDir(section);
  const filePath = resolvePostFile(contentDir, slug);

  if (!filePath) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as PostFrontmatter;

  return {
    ...frontmatter,
    content,
    readMinutes: estimateReadMinutes(content),
  };
}

export function getAllPosts(section: ContentSection): Post[] {
  return getPostSlugs(section)
    .map((slug) => getPostBySlug(section, slug))
    .filter((post): post is Post => post !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function formatPostDate(isoDate: string): string {
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString("en-CA", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
