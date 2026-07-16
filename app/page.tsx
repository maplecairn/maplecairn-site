import { Compass, CreditCard, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MapleTrustIcon } from "@/components/cairn-icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BORDER_MEDIUM, BORDER_SUBTLE, NEWSLETTER_FORM_URL } from "@/lib/constants";
import { formatSolePropStackDate, getAllSolePropStackPosts } from "@/lib/sole-prop-stack";

// Warm tan surface for homepage cards (Writing thumbnails plus the project
// cards). Sits in the brand's cream-and-brick-red palette, a touch darker than
// the page for subtle definition.
const CARD_TINT = "#ede4d6";

const WRITING_ICONS = [CreditCard, TrendingUp, Compass];

export default function Home() {
  const writingPosts = getAllSolePropStackPosts();
  const placeholderCount = Math.max(0, 3 - writingPosts.length);

  return (
    <div className="mc-paper-grain min-h-full bg-[#faf7f2] font-sans text-[#1a1a1a] antialiased">
      <SiteHeader />

      <main>
        <section className="mc-hero border-b px-10 py-12" style={{ borderColor: BORDER_SUBTLE }}>
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="mc-reveal-group min-w-0">
              <p className="mc-reveal mb-7 inline-flex items-center gap-2 rounded-full bg-[rgba(168,51,42,0.08)] px-3.5 py-1.5 text-xs font-medium text-[#7a2a23]">
                <MapleTrustIcon className="h-3.5 w-3.5 shrink-0" />
                Made in Canada · Newsletter coming soon
              </p>
              <h1 className="mc-reveal mc-reveal--lead font-head text-5xl font-medium leading-none tracking-tight text-[#1a1a1a] sm:text-6xl">
                Canadian personal finance hacks from a{" "}
                <em className="font-head italic text-[#a8332a]">self-employed builder</em>.
              </h1>
              <p className="mc-reveal mb-8 mt-6 max-w-md text-base leading-relaxed text-[#5a544a]">
                Practical money moves and the AI tools I&apos;m using to build small things on the side.
                No fluff.
              </p>
              <div id="subscribe" className="mc-reveal mb-3 max-w-md scroll-mt-28">
                <p className="mb-3 text-sm font-medium text-[#1a1a1a]">
                  Newsletter coming soon.
                </p>
                <a
                  href={NEWSLETTER_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mc-btn mc-focus-on-brick inline-flex min-h-12 items-center justify-center rounded-md bg-[#a8332a] px-6 py-3 text-sm font-medium text-white hover:bg-[#8e2b24]"
                >
                  Get notified
                </a>
              </div>
              <p className="mc-reveal text-xs text-[#8a8275]">
                I&apos;ll email you when the newsletter launches. No spam.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/logo/maple-cairn-glyph.png"
                alt="Maple Cairn logo: a stack of coins with a maple leaf"
                width={533}
                height={371}
                priority
                className="h-auto w-full max-w-[340px] md:max-w-[410px]"
              />
            </div>
          </div>
        </section>

        <section
          id="writing"
          className="mc-section-white scroll-mt-24 border-t bg-white px-10 py-14"
          style={{ borderColor: BORDER_SUBTLE }}
        >
          <div className="mx-auto max-w-6xl">
            <div className="mc-reveal--section mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-[#a8332a]">
                  Sole prop stack
                </p>
                <h2 className="mt-2 font-head text-3xl font-medium tracking-tight text-[#1a1a1a] sm:text-4xl">
                  Writing
                </h2>
              </div>
              <Link
                href="/sole-prop-stack"
                className="mc-link mc-focus text-sm text-[#5a544a]"
              >
                View all <span className="mc-arrow" aria-hidden>→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {writingPosts.map((post, index) => {
                const Icon = WRITING_ICONS[index % WRITING_ICONS.length];
                return (
                  <Link
                    key={post.slug}
                    href={`/sole-prop-stack/${post.slug}`}
                    className="mc-card mc-focus flex flex-col"
                  >
                    <div
                      className="mc-card-thumb mb-4 flex h-[140px] items-center justify-center rounded-lg"
                      style={{ backgroundColor: CARD_TINT }}
                    >
                      <Icon className="h-10 w-10" stroke="#a8332a" strokeWidth={1.5} aria-hidden />
                    </div>
                    <p className="text-xs text-[#8a8275]">{formatSolePropStackDate(post.date)}</p>
                    <h3 className="mt-2 font-head text-lg font-medium leading-snug text-[#1a1a1a]">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5a544a]">{post.description}</p>
                  </Link>
                );
              })}
              {Array.from({ length: placeholderCount }).map((_, index) => {
                const Icon = WRITING_ICONS[(writingPosts.length + index) % WRITING_ICONS.length];
                return (
                  <article key={`coming-soon-${index}`} className="flex flex-col">
                    <div
                      className="mc-card-thumb mb-4 flex h-[140px] items-center justify-center rounded-lg"
                      style={{ backgroundColor: CARD_TINT }}
                    >
                      <Icon className="h-10 w-10" stroke="#a8332a" strokeWidth={1.5} aria-hidden />
                    </div>
                    <p className="text-xs text-[#8a8275]">Coming soon</p>
                    <h3 className="mt-2 font-head text-lg font-medium leading-snug text-[#1a1a1a]">
                      More articles on the way
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5a544a]">
                      New Sole Prop Stack posts are in the works.
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="build-log"
          className="scroll-mt-24 border-t px-10 py-14"
          style={{ borderColor: BORDER_SUBTLE, backgroundColor: "#faf7f2" }}
        >
          <div className="mx-auto max-w-6xl">
            <div className="mc-reveal--section mb-9">
              <p className="text-xs font-medium uppercase tracking-widest text-[#a8332a]">Build log</p>
              <h2 className="mt-2 font-head text-3xl font-medium tracking-tight text-[#1a1a1a] sm:text-4xl">
                What I&apos;m shipping
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#5a544a]">
                Micro products built with AI tools. Live links, real numbers, and the lessons that only come
                from shipping.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <Link
                href="/build-log/maple-cairn-in-two-days"
                className="mc-card mc-focus block rounded-xl p-6"
                style={{ backgroundColor: CARD_TINT, border: `0.5px solid ${BORDER_MEDIUM}` }}
              >
                <div className="mb-3.5 flex items-start justify-between gap-3">
                  <span
                    className="rounded-full px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-[#7a2a23]"
                    style={{ backgroundColor: "rgba(168,51,42,0.08)" }}
                  >
                    Shipped
                  </span>
                  <span className="text-xs text-[#8a8275]">Project 01</span>
                </div>
                <h3 className="mb-2 font-head text-xl font-medium text-[#1a1a1a]">
                  Maple Cairn (this site)
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[#5a544a]">
                  Built from zero to live in a weekend with Cursor, Next.js, and Vercel. The whole stack
                  documented in the first build log entry.
                </p>
                <div
                  className="flex items-center border-t pt-4 text-xs text-[#5a544a]"
                  style={{ borderColor: BORDER_SUBTLE }}
                >
                  <p>
                    <span className="font-semibold text-[#1a1a1a]">Cursor</span>
                    <span> · Next.js · Vercel</span>
                  </p>
                  <span className="ml-auto font-medium text-[#a8332a]">
                    Read build log <span className="mc-arrow" aria-hidden>→</span>
                  </span>
                </div>
              </Link>
              <article
                className="rounded-xl p-6"
                style={{ backgroundColor: CARD_TINT, border: `0.5px solid ${BORDER_MEDIUM}` }}
              >
                <div className="mb-3.5 flex items-start justify-between gap-3">
                  <span
                    className="rounded-full px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-[#7a5a23]"
                    style={{ backgroundColor: "rgba(168,128,42,0.12)" }}
                  >
                    Building
                  </span>
                  <span className="text-xs text-[#8a8275]">Project 02</span>
                </div>
                <h3 className="mb-2 font-head text-xl font-medium text-[#1a1a1a]">
                  Sole Prop Tax Estimator
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[#5a544a]">
                  A free tool to estimate CRA taxes, GST/HST, and CPP for Canadian sole proprietors.
                  Province-aware. Live soon.
                </p>
                <div
                  className="flex items-center border-t pt-4 text-xs text-[#5a544a]"
                  style={{ borderColor: BORDER_SUBTLE }}
                >
                  <p>
                    <span className="font-semibold text-[#1a1a1a]">React</span>
                    <span> · Cursor · CRA data</span>
                  </p>
                  <span className="ml-auto text-[#5a544a]">Follow along →</span>
                </div>
              </article>
              <article
                className="rounded-xl p-6"
                style={{ backgroundColor: CARD_TINT, border: `0.5px solid ${BORDER_MEDIUM}` }}
              >
                <div className="mb-3.5 flex items-start justify-between gap-3">
                  <span
                    className="rounded-full px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-[#7a5a23]"
                    style={{ backgroundColor: "rgba(168,128,42,0.12)" }}
                  >
                    In testing
                  </span>
                  <span className="text-xs text-[#8a8275]">Project 03</span>
                </div>
                <h3 className="mb-2 font-head text-xl font-medium text-[#1a1a1a]">
                  Riftbound
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[#5a544a]">
                  A tool for Riftbound, the League of Legends TCG. Built and running in private testing.
                  Details when it comes out of stealth.
                </p>
                <div
                  className="flex items-center border-t pt-4 text-xs text-[#5a544a]"
                  style={{ borderColor: BORDER_SUBTLE }}
                >
                  <p>
                    <span className="font-semibold text-[#1a1a1a]">Python</span>
                    <span> · Scrapers · CLI</span>
                  </p>
                  <span className="ml-auto text-[#5a544a]">Details soon →</span>
                </div>
              </article>
              <article
                className="mc-card-dashed flex flex-col items-start justify-center rounded-xl p-6"
                style={{
                  backgroundColor: "rgba(168,51,42,0.04)",
                  border: "0.5px dashed rgba(168,51,42,0.3)",
                }}
              >
                <p className="text-xs font-medium uppercase tracking-widest text-[#a8332a]">
                  What&apos;s next?
                </p>
                <h3 className="mt-3 font-head text-lg font-medium text-[#1a1a1a]">
                  Subscribe to see what I build next.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5a544a]">
                  Newsletter readers will get build logs first, including the wins, fails, and the
                  actual numbers.
                </p>
                <a href="#subscribe" className="mc-link mc-focus mt-4 text-sm font-medium text-[#a8332a]">
                  Subscribe <span className="mc-arrow" aria-hidden>→</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        <section
          id="tools"
          className="mc-section-white scroll-mt-24 border-t bg-white px-10 py-14"
          style={{ borderColor: BORDER_SUBTLE }}
        >
          <div className="mx-auto max-w-6xl">
            <div className="mc-reveal--section mb-9">
              <p className="text-xs font-medium uppercase tracking-widest text-[#a8332a]">Tools I use</p>
              <h2 className="mt-2 font-head text-3xl font-medium tracking-tight text-[#1a1a1a] sm:text-4xl">
                The stack I&apos;m building with
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5a544a]">
                I only list tools I actively use and would pay for. Just the Claude link is affiliate.{" "}
                <a href="/affiliate-disclosure" className="mc-link mc-focus font-medium text-[#a8332a]">
                  Full disclosure <span className="mc-arrow" aria-hidden>→</span>
                </a>
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              <article className="mc-card rounded-lg p-4.5" style={{ border: `0.5px solid ${BORDER_MEDIUM}` }}>
                <div className="mb-2.5 flex items-center gap-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-black text-xs font-semibold text-white">
                    C
                  </span>
                  <span className="text-base font-medium text-[#1a1a1a]">Cursor</span>
                </div>
                <p className="mb-3 text-xs leading-relaxed text-[#5a544a]">
                  My code editor. Where the actual building happens.
                </p>
                <a href="https://cursor.com" className="mc-link mc-focus text-xs font-medium text-[#a8332a]">
                  Try it <span className="mc-arrow" aria-hidden>→</span>
                </a>
              </article>
              <article className="mc-card rounded-lg p-4.5" style={{ border: `0.5px solid ${BORDER_MEDIUM}` }}>
                <div className="mb-2.5 flex items-center gap-2">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-semibold text-white"
                    style={{ backgroundColor: "#f97316" }}
                  >
                    C
                  </span>
                  <span className="text-base font-medium text-[#1a1a1a]">Claude</span>
                </div>
                <p className="mb-3 text-xs leading-relaxed text-[#5a544a]">
                  The thinking partner for strategy, copy, and design.
                </p>
                <a href="https://claude.ai/referral/mPo9S2mSLA" className="mc-link mc-focus text-xs font-medium text-[#a8332a]">
                  Try it <span className="mc-arrow" aria-hidden>→</span>
                </a>
              </article>
              <article className="mc-card rounded-lg p-4.5" style={{ border: `0.5px solid ${BORDER_MEDIUM}` }}>
                <div className="mb-2.5 flex items-center gap-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-black text-xs font-semibold text-white">
                    ▲
                  </span>
                  <span className="text-base font-medium text-[#1a1a1a]">Vercel</span>
                </div>
                <p className="mb-3 text-xs leading-relaxed text-[#5a544a]">
                  Hosts this site. Auto-deploys on every commit.
                </p>
                <a href="https://vercel.com" className="mc-link mc-focus text-xs font-medium text-[#a8332a]">
                  Try it <span className="mc-arrow" aria-hidden>→</span>
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
