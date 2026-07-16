import Link from "next/link";
import { BORDER_SUBTLE } from "@/lib/constants";
import { CairnNavIcon } from "@/components/cairn-icons";

export function SiteFooter() {
  return (
    <footer
      className="border-t px-5 sm:px-10 py-12"
      style={{ borderColor: BORDER_SUBTLE, backgroundColor: "#faf7f2" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="mc-focus flex items-center gap-2.5">
          <CairnNavIcon className="shrink-0" height={22} />
          <span className="font-head text-base font-medium">Maple Cairn</span>
        </Link>
        <nav
          className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#5a544a]"
          aria-label="Footer"
        >
          <Link href="/about" className="mc-focus inline-flex min-h-10 items-center hover:text-[#a8332a]">
            About
          </Link>
          <span className="text-[#8a8275]" aria-hidden>
            /
          </span>
          <Link
            href="/affiliate-disclosure"
            className="mc-focus inline-flex min-h-10 items-center hover:text-[#a8332a]"
          >
            Affiliate Disclosure
          </Link>
          <span className="text-[#8a8275]" aria-hidden>
            /
          </span>
          <a href="/feed.xml" className="mc-focus inline-flex min-h-10 items-center hover:text-[#a8332a]">
            RSS
          </a>
        </nav>
        <p className="text-xs text-[#8a8275] lg:text-right">© 2026 · Built in Toronto</p>
      </div>
    </footer>
  );
}
