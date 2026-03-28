import { LightboxImage } from "@/components/LightboxImage";

export function FamilyTrustBlock() {
  return (
    <section id="o-nas" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 rounded-[1.75rem] bg-[#faf7f2] p-6 shadow-[0_14px_36px_rgba(28,25,23,0.04)] ring-1 ring-stone-200/70 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
              Osobní přístup a rodinná atmosféra
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-stone-900 sm:text-4xl">
              Vítejte u nás
            </h2>
            <p className="mt-5 text-[17px] leading-8 text-stone-700 sm:text-lg">
              Penzion U Leopolda vedeme jako rodina. Zakládáme si na tom, abyste u nás našli nejen čistý a pohodlný pokoj, ale také přátelské prostředí, kde se budete cítit vítáni. Rádi vám osobně poradíme s výběrem pokoje, připravíme čerstvou snídani nebo pomůžeme s organizací vaší oslavy.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-stone-600 sm:text-base">
              Pokud máte jakékoliv speciální přání ohledně příjezdu nebo ubytování, stačí nám zavolat – vždy se snažíme vyjít vstříc.
            </p>
          </div>
          
          <div className="relative mt-4 lg:mt-0">
            <LightboxImage
              src="/images/20.jpg"
              alt="Příjemné prostředí penzionu U Leopolda"
              width={800}
              height={600}
              className="h-[280px] w-full rounded-[1.25rem] object-cover sm:h-[360px] lg:h-[400px]"
              wrapperClassName="block w-full overflow-hidden rounded-[1.25rem] shadow-[0_12px_30px_rgba(28,25,23,0.08)]"
            />
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-[1.25rem] border border-stone-200/80 bg-[#fdfaf6]" />
          </div>
        </div>
      </div>
    </section>
  );
}
