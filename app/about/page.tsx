import type { Metadata } from "next";
import Link from "next/link";
import { MarkdownContent } from "@/components/markdown-content";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BORDER_SUBTLE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Maple Cairn is Canadian personal finance written from the perspective of a self-employed builder. Real numbers, no hype.",
};

const content = `Maple Cairn is a Canadian personal finance site written from the perspective of a self-employed builder. The premise is simple: real money tactics, with actual numbers, and none of the hype.

I'm Michael K. I've spent six-plus years in financial services, across insurance, consulting, and fintech. Maple Cairn is a side project: the Canadian personal finance I actually use, plus the small things I build on the side. I'm a sole proprietor in Toronto, and most of what I write about is what I'm doing with my own money.

There are two halves to the site.

**Sole Prop Stack** is practical Canadian personal finance for the self-employed. Credit card stacks, using points to fly business class, sole prop tax strategy, and registered accounts. The math uses hypothetical numbers you can plug your own situation into, never my actual balances.

**Build Log** is the meta side: how I'm building Maple Cairn and other small products, mostly with AI tools, as someone who wasn't a developer a little while ago. Live links, real costs, and the lessons that only come from shipping.

A few promises. I only write about products I actually use. Where there's an affiliate link I say so, and the full breakdown lives on the [affiliate disclosure](/affiliate-disclosure) page. Nothing here is financial advice. I'm not an accountant or a CFP, and your situation can differ from mine in ways I can't see from here.

If that sounds like your kind of thing, the newsletter is the best way to follow along.

Michael K`;

export default function AboutPage() {
  return (
    <div className="mc-paper-grain min-h-full bg-[#faf7f2] font-sans text-[#1a1a1a] antialiased">
      <SiteHeader />
      <main className="border-b px-10 py-12" style={{ borderColor: BORDER_SUBTLE }}>
        <article className="mx-auto max-w-2xl">
          <Link href="/" className="mc-link mc-focus text-sm font-medium text-[#a8332a]">
            ← Back to home
          </Link>
          <h1 className="mc-reveal mt-8 font-head text-3xl font-medium leading-tight tracking-tight text-[#1a1a1a] sm:text-4xl">
            About Maple Cairn
          </h1>
          <p className="mt-4 text-sm text-[#5a544a]">Canadian personal finance, minus the fluff.</p>
          <div className="mt-8">
            <MarkdownContent content={content} />
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
