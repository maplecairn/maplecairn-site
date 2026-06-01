import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { formatBuildLogDate, getAllBuildLogPosts } from "@/lib/build-log";
import { BORDER_MEDIUM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Build log",
  description:
    "Micro products built with AI tools. Live links, real numbers, and lessons from shipping.",
};

export default function BuildLogIndexPage() {
  const posts = getAllBuildLogPosts();

  return (
    <div className="min-h-full bg-[#faf7f2] font-sans text-[#1a1a1a] antialiased">
      <SiteHeader />
      <main className="px-10 py-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-[#a8332a]">Build log</p>
          <h1 className="mt-2 font-serif text-4xl font-medium tracking-tight text-[#1a1a1a] sm:text-5xl">
            What I&apos;m shipping
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#5a544a]">
            Micro products built with AI tools. Live links, real numbers, and the lessons that only
            come from shipping.
          </p>
          <ul className="mt-12 space-y-5">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/build-log/${post.slug}`}
                  className="block rounded-xl bg-white p-6 transition-shadow hover:shadow-sm"
                  style={{ border: `0.5px solid ${BORDER_MEDIUM}` }}
                >
                  <div className="mb-3 flex items-center justify-between gap-3 text-xs text-[#8a8275]">
                    <span
                      className="rounded-full px-2.5 py-1 font-medium uppercase tracking-wider text-[#7a2a23]"
                      style={{ backgroundColor: "rgba(168,51,42,0.08)" }}
                    >
                      Entry {post.entry_number}
                    </span>
                    <span>
                      {formatBuildLogDate(post.date)} · {post.readMinutes} min read
                    </span>
                  </div>
                  <h2 className="font-serif text-xl font-medium text-[#1a1a1a]">{post.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#5a544a]">{post.description}</p>
                  <p className="mt-4 text-sm font-medium text-[#a8332a]">Read entry →</p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-[#5a544a]">
            <Link href="/" className="font-medium text-[#a8332a] hover:underline">
              ← Back to home
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
