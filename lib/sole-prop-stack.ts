import {
  type ContentSection,
  type Post,
  type PostFrontmatter,
  formatPostDate,
  getAllPosts,
  getPostBySlug,
  getPostSlugs,
} from "@/lib/posts";

const SECTION = "sole-prop-stack" satisfies ContentSection;

export type SolePropStackFrontmatter = PostFrontmatter;
export type SolePropStackPost = Post;

export const getSolePropStackSlugs = () => getPostSlugs(SECTION);
export const getSolePropStackPost = (slug: string) => getPostBySlug(SECTION, slug);
export const getAllSolePropStackPosts = () => getAllPosts(SECTION);
export const formatSolePropStackDate = formatPostDate;
