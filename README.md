# Maple Cairn

Source for [maplecairn.ca](https://maplecairn.ca): Canadian personal finance for self-employed builders, plus a build log of small products shipped along the way.

Two content pillars:

- **Sole Prop Stack**: practical money mechanics for self-employed Canadians. Credit card stacks, GST/HST, sole prop tax strategy.
- **Build Log**: how this site and other micro products get built, mostly with AI tools. The site went from zero to live in a weekend; [Entry 01](https://maplecairn.ca/build-log/maple-cairn-in-two-days) documents how.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) with TypeScript
- Tailwind CSS 4
- Markdown/MDX content: gray-matter for frontmatter, react-markdown + remark-gfm for rendering
- Fraunces, Newsreader, and Hanken Grotesk via next/font
- Hosted on Vercel; every push to `main` deploys

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## How content works

Posts are `.md`/`.mdx` files in `content/build-log/` and `content/sole-prop-stack/` with frontmatter (title, description, date, slug, readTime, tags). `lib/posts.ts` reads both extensions, and `components/markdown-content.tsx` renders them. RSS lives at `/feed.xml`, the sitemap at `/sitemap.xml`.

Written by Michael K.
