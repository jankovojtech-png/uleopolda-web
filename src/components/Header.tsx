"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "O nás", href: "/#o-nas" },
  { label: "Ubytování", href: "/#ubytovani" },
  { label: "Delší pobyty", href: "/#firmy" },
  { label: "Galerie", href: "/#galerie" },
  { label: "Pokoje", href: "/pokoje" },
  { label: "Lokalita", href: "/#lokalita" },
  { label: "Kontakt", href: "/#kontakt" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/60 bg-[#f8f4ee]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-4.5">
        <Link
          href="/"
          className="text-[14px] font-semibold uppercase tracking-[0.24em] text-stone-800 transition hover:text-stone-950 sm:text-[15px] sm:tracking-[0.28em]"
          onClick={() => setIsOpen(false)}
        >
          Penzion U Leopolda
        </Link>

        <nav className="hidden items-center gap-10 text-sm text-stone-500 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition duration-200 hover:text-stone-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://booking.previo.app/?id=019d0173-7772-7164-b6da-ed6b8dc36337&lang=cs&cur=CZK"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-stone-900 px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(41,37,36,0.16)] ring-1 ring-stone-900/10 transition duration-200 hover:bg-stone-800 hover:shadow-[0_14px_34px_rgba(41,37,36,0.18)] sm:px-6 sm:py-3.5"
          >
            Rezervovat pobyt
          </a>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300/80 bg-white/70 text-stone-800 transition hover:border-stone-400 hover:bg-white md:hidden"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="sr-only">{isOpen ? "Zavřít menu" : "Otevřít menu"}</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              {isOpen ? (
                <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-stone-200/70 bg-[#f8f4ee] md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4 text-sm text-stone-700">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 transition hover:bg-white hover:text-stone-900"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#kontakt"
              className="mt-2 rounded-2xl border border-stone-300/80 px-4 py-3 text-center font-semibold text-stone-800 transition hover:bg-white"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
