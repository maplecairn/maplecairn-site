import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/markdown-content";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { formatBuildLogDate, getBuildLogPost, getBuildLogSlugs } from "@/lib/build-log";
import { BORDER_SUBTLE } from "@/lib/constants";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBuildLogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBuildLogPost(slug);

  if (!post) {
    return { title: "Not found" };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BuildLogEntryPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBuildLogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-full bg-[#faf7f2] font-sans text-[#1a1a1a] antialiased">
      <SiteHeader />
      <main className="border-b px-10 py-12" style={{ borderColor: BORDER_SUBTLE }}>
        <article className="mx-auto max-w-2xl">
          <Link
            href="/build-log"
            className="text-sm font-medium text-[#a8332a] hover:underline"
          >
            ← Back to Build Log
          </Link>
          <p className="mt-8 text-xs font-medium uppercase tracking-widest text-[#a8332a]">
            Build log · Entry {post.entry_number}
          </p>
          <h1 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-[#1a1a1a] sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-[#5a544a]">
            {formatBuildLogDate(post.date)} · {post.readMinutes} min read
          </p>
          <p className="mt-6 font-serif text-lg leading-relaxed text-[#5a544a]">{post.description}</p>
          <div className="mt-8">
            <MarkdownContent content={post.content} />
          </div>
        </article>
      </main>
      <section className="px-10 py-10">
        <div className="mx-auto flex max-w-2xl flex-col gap-4 text-sm text-[#5a544a] sm:flex-row sm:items-center sm:justify-between">
          <Link href="/build-log" className="font-medium text-[#a8332a] hover:underline">
            ← All build log entries
          </Link>
          <Link href="/#subscribe" className="font-medium text-[#a8332a] hover:underline">
            Subscribe for the next entry →
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
