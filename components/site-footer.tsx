import Link from "next/link";
import { BORDER_SUBTLE } from "@/lib/constants";
import { CairnNavIcon } from "@/components/cairn-icons";

export function SiteFooter() {
  return (
    <footer
      className="border-t px-10 py-12"
      style={{ borderColor: BORDER_SUBTLE, backgroundColor: "#faf7f2" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="mc-focus flex items-center gap-2.5">
          <CairnNavIcon className="shrink-0" width={22} height={26} />
          <span className="font-head text-base font-medium">Maple Cairn</span>
        </Link>
        <nav
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#5a544a]"
          aria-label="Footer"
        >
          <Link href="/" className="mc-focus hover:text-[#a8332a]">
            About
          </Link>
          <span className="text-[#8a8275]" aria-hidden>
            /
          </span>
          <Link href="/" className="mc-focus hover:text-[#a8332a]">
            Now
          </Link>
          <span className="text-[#8a8275]" aria-hidden>
            /
          </span>
          <Link href="/affiliate-disclosure" className="mc-focus hover:text-[#a8332a]">
            Affiliate Disclosure
          </Link>
          <span className="text-[#8a8275]" aria-hidden>
            /
          </span>
          <Link href="/" className="mc-focus hover:text-[#a8332a]">
            RSS
          </Link>
        </nav>
        <p className="text-xs text-[#8a8275] lg:text-right">© 2026 · Built in Toronto, Canada</p>
      </div>
    </footer>
  );
}
