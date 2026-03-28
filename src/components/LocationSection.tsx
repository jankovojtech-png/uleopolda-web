import { LightboxImage } from "@/components/LightboxImage";

export function LocationSection() {
  return (
    <section id="lokalita" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
            Lokalita
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.02em] text-stone-900 sm:text-5xl">
            Brno-Komárov: klidné zázemí s rychlým dojezdem do centra
          </h2>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            Penzion najdete v Brně-Komárově, kde se večer vyspíte mimo centrum a přitom jste autem
            i MHD rychle tam, kam potřebujete.
          </p>
          <div className="mt-8 space-y-3 text-[15px] leading-7 text-stone-600">
            <p>Na tramvaj se dostanete za pár minut a do centra Brna jste přibližně za 10 minut.</p>
            <p>Autem sem pohodlně přijedete z hlavních tahů i s rychlým napojením na dálnici.</p>
            <p>Hodí se pro hosty, kteří chtějí mít Brno po ruce a večer si odpočinout v klidnějším okolí.</p>
          </div>
          <a
            href="#kontakt"
            className="mt-10 inline-flex rounded-full bg-stone-900 px-8 py-4 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(41,37,36,0.12)] transition duration-200 hover:bg-stone-800"
          >
            Kontakt
          </a>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-[#f7f2eb] shadow-[0_18px_44px_rgba(28,25,23,0.06)] ring-1 ring-stone-200/70">
          <LightboxImage
            src="/images/27.jpg"
            alt="Klidná část Brna s dobrou dostupností"
            width={1152}
            height={768}
            className="h-[460px] w-full object-cover"
            wrapperClassName="block w-full text-left"
          />
        </div>
      </div>
    </section>
  );
}
