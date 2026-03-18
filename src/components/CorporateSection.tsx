import { LightboxImage } from "@/components/LightboxImage";

export function CorporateSection() {
  return (
    <section id="firmy" className="bg-[#ebe3d8] py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] bg-[#f7f2eb] px-6 py-8 shadow-[0_24px_60px_rgba(28,25,23,0.06)] ring-1 ring-stone-200/70 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-14 lg:px-10 lg:py-10">
        <div className="max-w-2xl py-4 lg:py-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
            Firemní klientela
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.02em] text-stone-900 sm:text-5xl">
            Ubytování pro firmy a pracovní pobyty
          </h2>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            Pro firmy nabízíme ubytování i na delší období. Pokud řešíte více pokojů, opakované
            pobyty nebo dlouhodobou spolupráci, domluvíme se individuálně podle počtu osob a termínu.
          </p>
          <a
            href="#kontakt"
            className="mt-10 inline-flex rounded-full border border-stone-300/80 bg-white/70 px-8 py-4 text-sm font-semibold text-stone-800 transition duration-200 hover:border-stone-400 hover:bg-white"
          >
            Kontakt
          </a>
        </div>

        <div className="rounded-[1.75rem] bg-white/60 p-4">
          <LightboxImage
            src="/images/23.jpg"
            alt="Pokoj s koupelnou vhodný pro firemní klientelu"
            width={1152}
            height={768}
            className="h-[380px] w-full rounded-[1.35rem] object-cover"
            wrapperClassName="block w-full overflow-hidden rounded-[1.35rem] text-left"
          />
        </div>
      </div>
    </section>
  );
}
