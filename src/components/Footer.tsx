import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-stone-200/70 bg-[#f8f4ee] py-7">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 U Leopolda. Všechna práva vyhrazena.</p>
          <div className="flex gap-6">
            <Link href="/parkovani" className="transition duration-200 hover:text-stone-900">
              Parkování
            </Link>
            <Link href="/#kontakt" className="transition duration-200 hover:text-stone-900">
              Kontakt
            </Link>
            <Link href="/pokoje" className="transition duration-200 hover:text-stone-900">
              Pokoje
            </Link>
            <a
              href="https://booking.previo.app/?id=019d0173-7772-7164-b6da-ed6b8dc36337&lang=cs&cur=CZK"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-200 hover:text-stone-900"
            >
              Rezervace
            </a>
          </div>
        </div>

        <div className="mt-4 border-t border-stone-200/60 pt-3 text-xs leading-5 text-stone-400">
          <p>
            Provozovatel: Vojtěch Janko | IČO: 02016915 | DIČ: CZ9304194196 | Adresa penzionu:
            Jeneweinova 49/51, 617 00 Brno-Komárov
          </p>
        </div>
      </div>
    </footer>
  );
}
