import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BORDER_MEDIUM } from "@/lib/constants";
import { formatSolePropStackDate, getAllSolePropStackPosts } from "@/lib/sole-prop-stack";

export const metadata: Metadata = {
  title: "Sole Prop Stack",
  description:
    "Canadian personal finance for the self-employed and the side-hustle builder.",
};

export default function SolePropStackIndexPage() {
  const posts = getAllSolePropStackPosts();

  return (
    <div className="mc-paper-grain min-h-full bg-[#faf7f2] font-sans text-[#1a1a1a] antialiased">
      <SiteHeader />
      <main className="px-10 py-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-[#5a544a]">
            <Link href="/" className="mc-link mc-focus font-medium text-[#a8332a]">
              ← Back home
            </Link>
          </p>
          <p className="mt-10 text-xs font-medium uppercase tracking-widest text-[#a8332a]">
            Sole prop stack
          </p>
          <h1 className="mc-reveal mt-2 font-head text-4xl font-medium tracking-tight text-[#1a1a1a] sm:text-5xl">
            Sole Prop Stack
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#5a544a]">
            Canadian personal finance for the self-employed and the side-hustle builder.
          </p>
          <ul className="mt-12 space-y-5">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/sole-prop-stack/${post.slug}`}
                  className="mc-card mc-focus block rounded-xl bg-white p-6"
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
                      {formatSolePropStackDate(post.date)} · {post.readMinutes} min read
                    </span>
                  </div>
                  <h2 className="font-head text-xl font-medium text-[#1a1a1a]">{post.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#5a544a]">{post.description}</p>
                  <p className="mt-4 text-sm font-medium text-[#a8332a]">
                    Read post <span className="mc-arrow" aria-hidden>→</span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
