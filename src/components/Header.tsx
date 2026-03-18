import Link from "next/link";

const navigation = [
  { label: "Ubytování", href: "/#ubytovani" },
  { label: "Pro firmy", href: "/#firmy" },
  { label: "Galerie", href: "/#galerie" },
  { label: "Pokoje", href: "/pokoje" },
  { label: "Lokalita", href: "/#lokalita" },
  { label: "Kontakt", href: "/#kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/60 bg-[#f8f4ee]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4.5">
        <Link
          href="/"
          className="text-[15px] font-semibold uppercase tracking-[0.28em] text-stone-800 transition hover:text-stone-950"
        >
          U Leopolda
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

        <a
          href="https://booking.previo.app/?id=019d0173-7772-7164-b6da-ed6b8dc36337&lang=cs&cur=CZK"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-stone-900 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(41,37,36,0.16)] ring-1 ring-stone-900/10 transition duration-200 hover:bg-stone-800 hover:shadow-[0_14px_34px_rgba(41,37,36,0.18)]"
        >
          Rezervovat
        </a>
      </div>
    </header>
  );
}
