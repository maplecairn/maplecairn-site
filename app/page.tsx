export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-[#fafaf9] font-sans text-stone-800">
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-6 py-16 sm:py-24">
        <header className="mb-20 text-center sm:mb-28">
          <h1 className="font-serif text-4xl font-medium tracking-tight text-stone-900 sm:text-5xl sm:leading-tight">
            Maple Cairn
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-stone-600 sm:text-xl sm:leading-relaxed">
            Canadian personal finance hacks from a self-employed builder.
            Documenting what I&apos;m shipping with AI tools.
          </p>
        </header>

        <section
          className="grid gap-6 sm:grid-cols-2 sm:gap-8"
          aria-labelledby="pillars-heading"
        >
          <h2 id="pillars-heading" className="sr-only">
            Content pillars
          </h2>
          <article className="rounded-xl border border-stone-200 bg-white/90 p-8 shadow-sm transition-all duration-200 hover:border-emerald-800/45 hover:shadow-md">
            <h3 className="font-serif text-xl font-medium text-stone-900">
              Sole Prop Stack
            </h3>
            <p className="mt-2 text-sm font-medium text-emerald-900/90">
              Canadian personal finance for the self-employed
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone-600">
              Practical posts on credit cards, tax savings, retirement, and the
              moves that move the needle when you&apos;re your own employer.
            </p>
          </article>
          <article className="rounded-xl border border-stone-200 bg-white/90 p-8 shadow-sm transition-all duration-200 hover:border-rose-900/35 hover:shadow-md">
            <h3 className="font-serif text-xl font-medium text-stone-900">
              Build Log
            </h3>
            <p className="mt-2 text-sm font-medium text-rose-900/85">
              Shipping micro products with AI
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone-600">
              Documenting the vibe coding journey. Tools, fails, wins, and the
              actual numbers behind what I build.
            </p>
          </article>
        </section>

        <section
          className="mt-20 border-t border-stone-200 pt-16 text-center sm:mt-24 sm:pt-20"
          aria-labelledby="newsletter-heading"
        >
          <h2
            id="newsletter-heading"
            className="font-serif text-2xl font-medium text-stone-900"
          >
            Get the newsletter
          </h2>
          <p className="mt-3 text-stone-600">Weekly. The best stuff. No spam.</p>
          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row sm:items-stretch">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              className="min-h-11 flex-1 rounded-lg border border-stone-300 bg-white px-4 text-stone-900 placeholder:text-stone-400 outline-none ring-emerald-800/20 transition-shadow focus:border-emerald-800/50 focus:ring-2"
            />
            <button
              type="button"
              className="min-h-11 shrink-0 rounded-lg bg-emerald-900 px-6 text-sm font-medium text-stone-50 transition-colors hover:bg-emerald-950"
            >
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-xs text-stone-500">
            I&apos;ll never share your email. Unsubscribe anytime.
          </p>
        </section>
      </main>

      <footer className="mt-auto border-t border-stone-200/80 bg-[#f5f5f4] py-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-6 text-center">
          <nav
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-stone-600"
            aria-label="Footer"
          >
            <a
              href="/about"
              className="transition-colors hover:text-emerald-900"
            >
              About
            </a>
            <span className="text-stone-300" aria-hidden>
              |
            </span>
            <a href="/now" className="transition-colors hover:text-emerald-900">
              Now
            </a>
            <span className="text-stone-300" aria-hidden>
              |
            </span>
            <a
              href="/affiliate-disclosure"
              className="transition-colors hover:text-emerald-900"
            >
              Affiliate Disclosure
            </a>
          </nav>
          <p className="text-xs text-stone-500">
            © 2026 Maple Cairn. Made in Canada.
          </p>
        </div>
      </footer>
    </div>
  );
}
