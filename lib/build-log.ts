import {
  type ContentSection,
  type Post,
  type PostFrontmatter,
  formatPostDate,
  getAllPosts,
  getPostBySlug,
  getPostSlugs,
} from "@/lib/posts";

const SECTION = "build-log" satisfies ContentSection;

export type BuildLogFrontmatter = PostFrontmatter;
export type BuildLogPost = Post;

export const getBuildLogSlugs = () => getPostSlugs(SECTION);
export const getBuildLogPost = (slug: string) => getPostBySlug(SECTION, slug);
export const getAllBuildLogPosts = () => getAllPosts(SECTION);
export const formatBuildLogDate = formatPostDate;
