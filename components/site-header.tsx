import Link from "next/link";
import { BORDER_SUBTLE } from "@/lib/constants";
import { CairnNavIcon } from "@/components/cairn-icons";

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-50 border-b bg-[#faf7f2] px-10 py-5"
      style={{ borderColor: BORDER_SUBTLE }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <CairnNavIcon className="shrink-0" />
          <span className="font-serif text-lg font-medium tracking-tight sm:text-xl">
            Maple Cairn
          </span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          <nav
            className="hidden items-center gap-6 text-sm text-[#5a544a] md:flex"
            aria-label="Primary"
          >
            <Link href="/build-log" className="transition-colors hover:text-[#a8332a]">
              Build Log
            </Link>
            <Link href="/sole-prop-stack" className="transition-colors hover:text-[#a8332a]">
              Sole Prop Stack
            </Link>
            <Link href="/#tools" className="transition-colors hover:text-[#a8332a]">
              Tools
            </Link>
            <Link href="/about" className="transition-colors hover:text-[#a8332a]">
              About
            </Link>
          </nav>
          <Link
            href="/#subscribe"
            className="shrink-0 rounded-full bg-[#a8332a] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#8e2b24]"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </header>
  );
}
