import type { Metadata } from "next";
import Link from "next/link";
import { MarkdownContent } from "@/components/markdown-content";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BORDER_SUBTLE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "How affiliate marketing works on Maple Cairn, who I'm partnered with, and what each side gets out of it.",
};

const content = `Maple Cairn includes affiliate links to a small number of products and services I personally use. When you sign up through one of these links, I may earn a referral fee, commission, or platform-tier benefit. In most cases you get something on your end too. What that looks like varies by affiliate; the table below has the specifics.

**What affiliate compensation does and does not do:**

- It helps support the cost of running this site and the time I put into the writing.
- It doesn't change the products I recommend, how I describe them, or the price you pay.
- It doesn't give me access to your personal information beyond what the platform itself tracks (typically: that the sign-up came from my link, sometimes the rebate amount).

If there's no affiliate relationship behind something I write about, I'll say so.

## Current affiliate relationships

| Product | Type | What you get | What I get |
|---|---|---|---|
| [Chexy](https://app.chexy.co?ref=wCR3ekxk9KT2IM4ncAsOd873BZG2) | Direct referral | Lower Chexy fees through the referral mechanic | Lower Chexy fees on my own future payments, progressing toward Chexy's lower-fee tiers (Pink 1.5%, Gold 1.0%, Elite 0.5%) |
| [Rakuten Canada](https://www.rakuten.ca/r/maplecairn) | Direct referral | $30 cash bonus when you reach Rakuten's first-purchase threshold | $30 referral credit |
| [Wealthsimple](https://www.wealthsimple.com/invite/MZEDLB) | Direct referral | $25 cash bonus when you fund any Wealthsimple account | $25 referral credit |
| [Amex Cobalt via GCR](https://www.greatcanadianrebates.ca/register.php?r=292741&p=Amex-Cobalt) | GCR-mediated | $40 GCR cash back rebate on card approval, plus the Amex welcome offer | GCR referral commission |
| [Scotia Momentum Visa Infinite+ via GCR](https://www.greatcanadianrebates.ca/register.php?r=292741&p=Scotia-Momentum-Infinite) | GCR-mediated | $100 GCR cash back rebate on card approval, plus the Scotia welcome offer | GCR referral commission |
| [Great Canadian Rebates](https://www.greatcanadianrebates.ca/register/292741/) | Direct referral | Standard GCR account, no special bonus | Small referral commission for the sign-up |
| [Claude (Anthropic)](https://claude.ai/referral/mPo9S2mSLA) | Direct referral | 1-week free trial of Claude Pro | Referral credit on my Claude account |

This list grows as I add new affiliates. The current set covers the products I've actually written about. If I add an affiliate relationship for a product I haven't written about yet, it will show up here before any post links to it.

## How Great Canadian Rebates works

GCR is a Canadian cash back portal. When you apply for a credit card through one of GCR's links, GCR pays you a cash back rebate after the card is approved, and the card issuer pays GCR a referral fee. I get a small cut of that fee for the referral.

To actually receive your GCR rebate, you have to:

- Apply directly through the GCR link without browsing to other pages mid-application
- Save the reference number the issuer provides at application
- Be a first-time applicant for that specific card
- Skip outside promo codes during the application (using one voids the rebate)
- Follow up with GCR within 3 months if the rebate hasn't posted

GCR publishes their full terms on each card's product page. The rebate amounts listed above are current as of writing and may change.

## Tools I link without an affiliate relationship

The Tools section of the homepage lists Cursor, Claude, and Vercel. Only the Claude link is a referral link (above); Cursor and Vercel aren't affiliate. I link them because I use them. If any of those relationships change to affiliate in the future, I'll update this page.

## Things I won't do

- I won't accept money to recommend something I don't actually use.
- I won't hide an affiliate relationship to make a recommendation look more "editorial."
- I won't recommend a product purely because the affiliate payout is higher than a competitor's.

## Contact

If you have questions about any of this, or you notice something you think is misleading, email me at [maplecairn@gmail.com](mailto:maplecairn@gmail.com).
`;

export default function AffiliateDisclosurePage() {
  return (
    <div className="mc-paper-grain min-h-full bg-[#faf7f2] font-sans text-[#1a1a1a] antialiased">
      <SiteHeader />
      <main className="border-b px-5 sm:px-10 py-12" style={{ borderColor: BORDER_SUBTLE }}>
        <article className="mx-auto max-w-2xl">
          <Link
            href="/"
            className="mc-link mc-focus text-sm font-medium text-[#a8332a]"
          >
            ← Back to home
          </Link>
          <h1 className="mc-reveal mt-8 font-head text-3xl font-medium leading-tight tracking-tight text-[#1a1a1a] sm:text-4xl">
            Affiliate Disclosure
          </h1>
          <p className="mt-4 text-sm text-[#5a544a]">Last updated: June 1, 2026</p>
          <p className="mt-6 font-serif text-lg leading-relaxed text-[#5a544a]">
            How affiliate marketing works on Maple Cairn, who I&apos;m partnered with, and
            what each side gets out of it.
          </p>
          <div className="mt-8">
            <MarkdownContent content={content} />
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
