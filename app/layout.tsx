import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, Newsreader, Geist_Mono } from "next/font/google";
import "./globals.css";

// Display serif for headings and the wordmark. Fraunces is warm and optically
// sized, with a characterful italic for brick-red emphasis.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

// Reading serif for long-form post body. Newsreader is editorial and tuned for
// screens, a deliberate step up from the old generic system-serif fallback.
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

// UI sans for nav, buttons, labels, and metadata.
const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

// Monospace for code blocks.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maplecairn.ca"),
  manifest: "/site.webmanifest",
  title: {
    default: "Maple Cairn · Canadian personal finance + build log",
    template: "%s · Maple Cairn",
  },
  description:
    "Canadian personal finance for self-employed builders: cards, taxes, and AI-powered micro products. Writing and build logs from Toronto.",
  openGraph: {
    type: "website",
    siteName: "Maple Cairn",
    locale: "en_CA",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${newsreader.variable} ${hankenGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
