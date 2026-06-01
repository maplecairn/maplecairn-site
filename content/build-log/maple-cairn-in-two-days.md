---
title: "How I built Maple Cairn in two days with Cursor, Claude, and a lot of Googling"
description: "A snapshot of what vibe coding actually looks like when you're 6+ years into financial services and zero days into building software."
date: "2026-05-14"
slug: "maple-cairn-in-two-days"
entry_number: "01"
---

Three days ago I didn't know what `mkdir` meant. I now have a real website on a real domain (`maplecairn.ca`), built over a long weekend with AI tools that didn't exist in usable form 18 months ago.

This is the build log entry for project zero: the site you're reading this on.

It's not a polished case study. It's a snapshot of what "vibe coding" actually looks like when you're six years into financial services (insurance, management consulting, fintech) and zero days into building software. The wins, the small humiliations, and the moments that mattered.

*Heads up: this is the narrative version. The actual step-by-step walkthrough, every command and every config, is coming as a separate post this week.*

## Why I'm doing this at all

I'm on sabbatical. Rather than spend it on a beach, I wanted to learn what it feels like to build things instead of strategize about them. My background has been semi-technical. Close enough to engineering to know what good looks like, never the person actually writing the code. The tooling is good enough now that anyone willing to dabble for a few hours can either get noticeably more productive at their day job or build something on the side that compounds.

That's what got me excited. I wanted to explore operating as a solo founder. Running my own little business end-to-end, learning the parts I've outsourced or had organizational support for my whole career.

The plan for the next 60 days: tinker across a few projects, ship them honestly even when they're rough, document the journey as I go.

This site has two anchors.

**Sole Prop Stack** is the Canadian personal finance content, with a focus on the self-employed. There's a gap between "advice for T4 employees" and "advice for sole props" that bigger Canadian PF blogs don't fully cover. Different tax rules, different retirement accounts, different credit card math. A lot of the hacks here apply to T4 income earners too. Credit card optimization, travel rewards, banking tricks. Just framed for the self-employed angle first.

**Build Log** is the meta-project. Documenting what it actually takes to ship small things with AI tools when you don't come from a tech background. This post is entry one. The site itself is the first thing built. Meta on purpose.

Writing this publicly is partly an accountability mechanism. If I'm telling you I'm shipping another small product next, it's harder to not ship it. That's the trick.

## The origin of the name

Quick aside on the name.

I'm Canadian. *Maple* is the obvious nod. Homage to the country, the audience, the Canadian personal finance landscape that's underserved relative to the US.

*Cairn* is the less obvious half. A cairn is a stack of stones used as a trail marker, historically used by hikers, sailors, and travelers to mark a safe path for the people coming behind them. The metaphor I wanted: stepping stones for other people starting or refining their personal finance journey.

To find the name I used [namechk.com](https://namechk.com/website-builders/), a tool that checks if a brand name is available across domains and social handles simultaneously. Saves you from picking a name only to discover the .ca is taken or the Instagram handle is gone. Recommended if you're naming anything.

## The stack I landed on

In roughly the order I touched them:

- **Cursor**. AI-powered code editor. Replaced what would have been a tab graveyard of Stack Overflow + ChatGPT + VS Code. Free tier is generous; I'll upgrade to Pro when I hit limits.
- **Claude**. My thinking partner alongside Cursor. Strategy, design feedback, writing this post, debugging when Cursor got stuck. I upgraded to Pro because I ask a lot of "why does this work this way" questions and was hitting free tier limits constantly.
- **Next.js + Tailwind CSS**. The web framework and styling system. Vercel makes Next.js, so they play nicely together.
- **Vercel**. Hosting. Free tier handles way more traffic than I'll generate for the foreseeable future. Push code to GitHub, site auto-deploys 30 seconds later.
- **GitHub**. Code storage and version history. Free tier, public repo (build-in-public).
- **Namecheap**. Domain registrar. Bought both `maplecairn.ca` and `maplecairn.com` with privacy. The .com redirects to the .ca. Combined ~$31 CAD. Auto-renew on.
- **WSL2** (Windows Subsystem for Linux). A Linux environment running inside my Windows laptop. Isolates the dev work from my personal financial files. More on this below.

Monthly cost: about $20 (Claude Pro). Domains were a one-time $31. That's the foundation.

## What I built over two days

Honest split.

Day 1 was mostly strategy and setup, not code. Naming the brand (multiple rounds with Claude), buying domains, setting up brand accounts on Gmail, Instagram, TikTok, X, YouTube. Configuring GitHub with a separate org so the project is sellable if I ever wanted it to be. Installing Node, Cursor, and Vercel CLI on the laptop.

The actual building happened on Day 2. I scaffolded a Next.js project with one command (`npx create-next-app`), pushed it to GitHub, connected GitHub to Vercel for auto-deploy, and pointed `maplecairn.ca` at Vercel via DNS records at Namecheap. Then I used Cursor + Claude to design and build the homepage. Iterated on the design through about four versions before landing on something I liked.

Net result: a live site with a hero, two content pillars, a build log section, an affiliate tools section, and a footer. Mobile-responsive. HTTPS. Global CDN.

The mechanics, getting a site live, were easier than expected. The design and copy iteration was the slow part.

One habit I leaned into: I asked Claude to explain every command before I ran it. `mkdir -p`. `git push origin main`. `npm install -g vercel`. Every CNAME record. Every SSH key step. I'm not trying to become a developer overnight. But I do want enough syntax literacy to debug confidently when something breaks six months from now.

*Want the actual step-by-step? Every command, every prompt, every setting? Coming this week as a separate walkthrough.*

## The moments that were harder than expected

**The "wait, is this actually safe" detour.** I'm paranoid on the internet generally, partly from working at the intersection of blockchain and payments where you see firsthand how creative attackers can be. So when I started running `npm install` for the first time, pulling packages from a public registry, I went down a rabbit hole. The packages I was installing are vetted, open source, used by millions of developers. But you never know. How do these packages get reviewed? What's stopping someone from publishing malicious code? What's an SSH key actually doing under the hood?

The paranoia turned into a practical concern halfway through Day 1. I was about to run install commands on the same laptop that holds my financial files, tax documents, banking sessions. Compromised npm packages have historically been used to steal credentials. The risk is small but real.

So I paused and migrated the whole dev environment into WSL2. A Linux virtual machine running inside Windows. Cost about 60 minutes I hadn't planned to spend. In retrospect it was probably the highest-leverage hour of the weekend. Now anything I install in the dev environment can only see what's inside the Linux sandbox, not the Windows files I actually care about.

If you're working on a laptop that also holds sensitive personal stuff, I'd do this before your first install, not after. Unless you have a dedicated dev laptop (which I don't), the Linux sandbox is the safer path.

**The maple-red color problem.** I wanted a deep brick-red, the kind CBC uses. Restrained, Canadian-feeling. Cursor kept giving me bright coral instead. Three rounds of "no, darker, more brick" before it stuck. The lesson: AI tools execute precise specs beautifully and guess badly. Give them hex codes, not vibes.

**On monetization.** No affiliate deals live yet. For now, if a post is useful, the most helpful thing is to share it. Newsletter signup coming soon.

## What surprised me

**Building a website was way faster than expected.** I actually started this exploration in Lovable first. They spin up a site in 20 minutes and handle most of the wiring for you. Lovable is great for "I need a landing page by tomorrow." But I always like understanding the underlying Lego blocks before building anything more sophisticated. So I switched to Cursor + Next.js + Vercel. Semi-from-scratch with vibe coding tools.

The tradeoff: slower v1, but I now understand what every part of my site is doing.

This is the thing I underestimated. When you actually understand the underlying tools, you can build beyond what the off-the-shelf blocks were designed for. There's more data and API out there than any one person can use, and the interesting work is combining it in ways that solve real pain points. Mine first, then other people's. That's what I'm actually excited to get to. For a pure landing page, Lovable wins. For anything you want to grow into something weirder, semi-from-scratch earns its time back.

**The vibe coding hype is real, just not for the reasons people think.** AI doesn't write better code than experienced developers. What it does is collapse the "I don't know how to start" barrier. It's like having a senior developer sitting next to me, patiently answering every silly question. Without judgment, without billing me hourly, without me having to find a developer friend.

Most of the historical wall to learning to code was social, not technical. Not wanting to ask dumb questions, not having anyone to ask, not knowing what to type first. AI removes that wall. You actually do learn, by reading what AI wrote, asking why, slowly internalizing.

**The skill that matters most isn't coding.** It's scoping requests well and iterating fast. Being precise about what you want, anticipating edge cases, accepting that the first output won't be right and that's fine. The same instinct that makes you good at managing people or running consulting engagements is exactly what makes you good at directing AI coding tools.

A small unexpected delight: Claude helped me prioritize the framework before any code got written. I came in with the high-level idea (be a solo founder, start with PF, expand into projects), and Claude helped sequence what to ship first, what to defer, what to skip. This post is essentially the linear output of that sequencing exercise. The strategy work was as valuable as the coding work. Maybe more.

## What's next

Rough order over the next 60 days.

1. First real Sole Prop Stack post: my current credit card stack, how I rack up Canadian credit card spend organically, and the hacks that actually move the needle. Followups will deep-dive on travel rewards specifically.
2. Another small product I'm not sharing the specifics on yet. Coming soon. Build log will follow when it ships.
3. The step-by-step walkthrough of this build. This week.
4. A weekly newsletter. Short, practical, no fluff.

Newsletter coming soon. For now, the most helpful thing is to share this post if it was useful.

## The takeaway

If you're considering building something, a site, a tool, a small business, the gap between thinking about it and shipping it is much smaller in 2026 than it was even six months ago. The friction has collapsed.

What hasn't collapsed is the discipline to actually finish. Picking a small enough scope. Resisting the perfectionism that turns a 2-day project into a 6-month project. Hitting publish on a v1 you're slightly embarrassed by.

I have a real site at a real domain today because I held the line on "ship in two days." The version you're reading is not the version I wished I had. But it's live. Next week's version will be better than this week's, in a way that the unshipped perfect version never gets to be.

That's all I've got after 48 hours. I'll write more honest takes when I have them.

— Michael K
