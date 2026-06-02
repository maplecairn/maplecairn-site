"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BORDER_SUBTLE, NEWSLETTER_FORM_URL } from "@/lib/constants";
import { CairnNavIcon } from "@/components/cairn-icons";

const NAV_LINKS = [
  { href: "/build-log", label: "Build Log" },
  { href: "/sole-prop-stack", label: "Sole Prop Stack" },
  { href: "/#tools", label: "Tools" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(pathname);
  const headerRef = useRef<HTMLElement>(null);

  // Close the mobile menu whenever the route changes. Adjusting state during
  // render is React's recommended alternative to a route-watching effect.
  if (pathname !== activePath) {
    setActivePath(pathname);
    setMenuOpen(false);
  }

  // While open, close the mobile menu on an outside tap or the Escape key.
  useEffect(() => {
    if (!menuOpen) return;
    function onPointerDown(event: PointerEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  // A nav link is "active" when the current path is at or below its href.
  // In-page anchors (e.g. Tools) and the home/About link never highlight.
  function isActive(href: string) {
    const [path, hash] = href.split("#");
    if (hash) return false;
    const base = path || "/";
    if (base === "/") return false;
    return pathname === base || pathname.startsWith(`${base}/`);
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b bg-[#faf7f2] px-10 py-5"
      style={{ borderColor: BORDER_SUBTLE }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link href="/" className="mc-focus flex shrink-0 items-center gap-3">
          <CairnNavIcon className="shrink-0" />
          <span className="font-head text-lg font-medium tracking-tight sm:text-xl">
            Maple Cairn
          </span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          <nav
            className="hidden items-center gap-6 text-sm text-[#5a544a] md:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`mc-focus border-b-2 pb-1 transition-colors hover:text-[#a8332a] ${
                    active ? "border-[#a8332a]" : "border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <a
            href={NEWSLETTER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mc-btn mc-focus-on-brick shrink-0 rounded-full bg-[#a8332a] px-5 py-2 text-sm font-medium text-white hover:bg-[#8e2b24]"
          >
            Subscribe
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
            className="mc-focus flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-[#1a1a1a] transition-colors hover:bg-[rgba(168,51,42,0.08)] md:hidden"
          >
            {menuOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="mx-auto mt-4 flex max-w-6xl flex-col gap-1 border-t pt-4 md:hidden"
          style={{ borderColor: BORDER_SUBTLE }}
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`mc-focus rounded-md px-2 py-2.5 text-sm transition-colors hover:bg-[rgba(168,51,42,0.06)] ${
                  active ? "font-medium text-[#a8332a]" : "text-[#5a544a]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={NEWSLETTER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mc-btn mc-focus-on-brick mt-2 rounded-full bg-[#a8332a] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#8e2b24]"
          >
            Subscribe
          </a>
        </nav>
      )}
    </header>
  );
}
