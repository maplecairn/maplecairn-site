import { Compass, CreditCard, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MapleTrustIcon } from "@/components/cairn-icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BORDER_MEDIUM, BORDER_SUBTLE, NEWSLETTER_FORM_URL } from "@/lib/constants";
import { formatSolePropStackDate, getAllSolePropStackPosts } from "@/lib/sole-prop-stack";

const GRADIENT_COVER =
  "linear-gradient(135deg, rgba(168,51,42,0.06), rgba(168,51,42,0.12))";

const WRITING_ICONS = [CreditCard, TrendingUp, Compass];

export default function Home() {
  const writingPosts = getAllSolePropStackPosts();
  const placeholderCount = Math.max(0, 3 - writingPosts.length);

  return (
    <div className="min-h-full bg-[#faf7f2] font-sans text-[#1a1a1a] antialiased">
      <SiteHeader />

      <main>
        <section className="border-b px-10 py-16" style={{ borderColor: BORDER_SUBTLE }}>
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="min-w-0">
              <p className="mb-7 inline-flex items-center gap-2 rounded-full bg-[rgba(168,51,42,0.08)] px-3.5 py-1.5 text-xs font-medium text-[#7a2a23]">
                <MapleTrustIcon className="h-3.5 w-3.5 shrink-0" />
                Made in Canada · Free weekly email
              </p>
              <h1 className="font-serif text-5xl font-medium leading-none tracking-tight text-[#1a1a1a] sm:text-6xl">
                Canadian personal finance hacks from a{" "}
                <em className="font-serif italic text-[#a8332a]">self-employed builder</em>.
              </h1>
              <p className="mb-8 mt-6 max-w-md text-base leading-relaxed text-[#5a544a]">
                Practical money moves and the AI tools I&apos;m using to build small things on the side.
                Weekly. No fluff.
              </p>
              <div id="subscribe" className="mb-3 max-w-md scroll-mt-28">
                <p className="mb-3 text-sm font-medium text-[#1a1a1a]">
                  Newsletter coming soon.
                </p>
                <a
                  href={NEWSLETTER_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#a8332a] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#8e2b24]"
                >
                  Get notified
                </a>
              </div>
              <p className="text-xs text-[#8a8275]">
                I&apos;ll email you when the newsletter launches. No spam.
              </p>
            </div>
            <div className="flex min-h-[280px] items-center justify-center lg:min-h-[360px]">
              <Image
                src="/images/logo/cairn.png"
                alt="Maple Cairn logo: a stacked cairn in brick red"
                width={557}
                height={605}
                priority
                className="h-auto w-full max-w-[200px] md:max-w-[260px]"
              />
            </div>
          </div>
        </section>

        <section
          id="writing"
          className="scroll-mt-24 border-t bg-white px-10 py-[4.5rem]"
          style={{ borderColor: BORDER_SUBTLE }}
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-[#a8332a]">
                  Sole prop stack
                </p>
                <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#1a1a1a] sm:text-4xl">
                  Writing
                </h2>
              </div>
              <Link
                href="/sole-prop-stack"
                className="text-sm text-[#5a544a] transition-colors hover:text-[#a8332a]"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {writingPosts.map((post, index) => {
                const Icon = WRITING_ICONS[index % WRITING_ICONS.length];
                return (
                  <Link
                    key={post.slug}
                    href={`/sole-prop-stack/${post.slug}`}
                    className="flex flex-col transition-opacity hover:opacity-90"
                  >
                    <div
                      className="mb-4 flex h-[140px] items-center justify-center rounded-lg"
                      style={{ backgroundImage: GRADIENT_COVER }}
                    >
                      <Icon className="h-10 w-10" stroke="#a8332a" strokeWidth={1.5} aria-hidden />
                    </div>
                    <p className="text-xs text-[#8a8275]">{formatSolePropStackDate(post.date)}</p>
                    <h3 className="mt-2 font-serif text-lg font-medium leading-snug text-[#1a1a1a]">
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
                      className="mb-4 flex h-[140px] items-center justify-center rounded-lg"
                      style={{ backgroundImage: GRADIENT_COVER }}
                    >
                      <Icon className="h-10 w-10" stroke="#a8332a" strokeWidth={1.5} aria-hidden />
                    </div>
                    <p className="text-xs text-[#8a8275]">Coming soon</p>
                    <h3 className="mt-2 font-serif text-lg font-medium leading-snug text-[#1a1a1a]">
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
          className="scroll-mt-24 border-t px-10 py-[4.5rem]"
          style={{ borderColor: BORDER_SUBTLE, backgroundColor: "#faf7f2" }}
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-9">
              <p className="text-xs font-medium uppercase tracking-widest text-[#a8332a]">Build log</p>
              <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#1a1a1a] sm:text-4xl">
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
                className="block rounded-xl p-6 transition-shadow hover:shadow-sm"
                style={{ backgroundImage: GRADIENT_COVER, border: `0.5px solid ${BORDER_MEDIUM}` }}
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
                <h3 className="mb-2 font-serif text-xl font-medium text-[#1a1a1a]">
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
                  <span className="ml-auto font-medium text-[#a8332a]">Read build log →</span>
                </div>
              </Link>
              <article
                className="rounded-xl p-6"
                style={{ backgroundImage: GRADIENT_COVER, border: `0.5px solid ${BORDER_MEDIUM}` }}
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
                <h3 className="mb-2 font-serif text-xl font-medium text-[#1a1a1a]">
                  Sole Prop Tax Estimator
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[#5a544a]">
                  A free tool to estimate CRA taxes, GST/HST, and CPP for Canadian sole proprietors.
                  Province-aware. Live next week.
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
                style={{ backgroundImage: GRADIENT_COVER, border: `0.5px solid ${BORDER_MEDIUM}` }}
              >
                <div className="mb-3.5 flex items-start justify-between gap-3">
                  <span
                    className="rounded-full px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-[#5a5a5a]"
                    style={{ backgroundColor: "rgba(0,0,0,0.06)" }}
                  >
                    Planned
                  </span>
                  <span className="text-xs text-[#8a8275]">Project 03</span>
                </div>
                <h3 className="mb-2 font-serif text-xl font-medium text-[#1a1a1a]">
                  Pokemon TCG drop alerts
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[#5a544a]">
                  A Discord bot that watches Canadian retailers for new Pokemon TCG drops. Free tier plus
                  premium alerts. Late May.
                </p>
                <div
                  className="flex items-center border-t pt-4 text-xs text-[#5a544a]"
                  style={{ borderColor: BORDER_SUBTLE }}
                >
                  <p>
                    <span className="font-semibold text-[#1a1a1a]">Discord</span>
                    <span> · Scrapers · Cron</span>
                  </p>
                  <span className="ml-auto text-[#5a544a]">Coming soon →</span>
                </div>
              </article>
              <article
                className="flex flex-col items-start justify-center rounded-xl p-6"
                style={{
                  backgroundColor: "rgba(168,51,42,0.04)",
                  border: "0.5px dashed rgba(168,51,42,0.3)",
                }}
              >
                <p className="text-xs font-medium uppercase tracking-widest text-[#a8332a]">
                  What&apos;s next?
                </p>
                <h3 className="mt-3 font-serif text-lg font-medium text-[#1a1a1a]">
                  Subscribe to see what I build next.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5a544a]">
                  Newsletter readers get build logs first — including the wins, fails, and the actual
                  numbers.
                </p>
                <a href="#subscribe" className="mt-4 text-sm font-medium text-[#a8332a] hover:underline">
                  Subscribe →
                </a>
              </article>
            </div>
          </div>
        </section>

        <section
          id="tools"
          className="scroll-mt-24 border-t bg-white px-10 py-[4.5rem]"
          style={{ borderColor: BORDER_SUBTLE }}
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-9">
              <p className="text-xs font-medium uppercase tracking-widest text-[#a8332a]">Tools I use</p>
              <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#1a1a1a] sm:text-4xl">
                The stack I&apos;m building with
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5a544a]">
                Affiliate-supported. I only list what I actively use and would pay for.{" "}
                <a href="/affiliate-disclosure" className="font-medium text-[#a8332a] underline">
                  Full disclosure →
                </a>
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
              <article className="rounded-lg p-4.5" style={{ border: `0.5px solid ${BORDER_MEDIUM}` }}>
                <div className="mb-2.5 flex items-center gap-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-black text-xs font-semibold text-white">
                    C
                  </span>
                  <span className="text-base font-medium text-[#1a1a1a]">Cursor</span>
                </div>
                <p className="mb-3 text-xs leading-relaxed text-[#5a544a]">
                  My code editor. Where the actual building happens.
                </p>
                <a href="https://cursor.com" className="text-xs font-medium text-[#a8332a] hover:underline">
                  Try it →
                </a>
              </article>
              <article className="rounded-lg p-4.5" style={{ border: `0.5px solid ${BORDER_MEDIUM}` }}>
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
                <a href="https://claude.ai" className="text-xs font-medium text-[#a8332a] hover:underline">
                  Try it →
                </a>
              </article>
              <article className="rounded-lg p-4.5" style={{ border: `0.5px solid ${BORDER_MEDIUM}` }}>
                <div className="mb-2.5 flex items-center gap-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-black text-xs font-semibold text-white">
                    ▲
                  </span>
                  <span className="text-base font-medium text-[#1a1a1a]">Vercel</span>
                </div>
                <p className="mb-3 text-xs leading-relaxed text-[#5a544a]">
                  Hosts this site. Auto-deploys on every commit.
                </p>
                <a href="https://vercel.com" className="text-xs font-medium text-[#a8332a] hover:underline">
                  Try it →
                </a>
              </article>
              <article className="rounded-lg p-4.5" style={{ border: `0.5px solid ${BORDER_MEDIUM}` }}>
                <div className="mb-2.5 flex items-center gap-2">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-semibold"
                    style={{ backgroundColor: "#ffd23f", color: "#1a1a1a" }}
                  >
                    B
                  </span>
                  <span className="text-base font-medium text-[#1a1a1a]">Beehiiv</span>
                </div>
                <p className="mb-3 text-xs leading-relaxed text-[#5a544a]">
                  Powers the newsletter. Free up to 2,500 readers.
                </p>
                <a href="https://beehiiv.com" className="text-xs font-medium text-[#a8332a] hover:underline">
                  Try it →
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
