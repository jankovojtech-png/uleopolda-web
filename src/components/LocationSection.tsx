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
            Klidná část Brna s výbornou dostupností
          </h2>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            Penzion se nachází v Brně-Komárově, v klidné části města s velmi dobrou dostupností do
            centra, průmyslových areálů i na hlavní dopravní tahy. Vhodná poloha pro služební cesty
            i pobyty jednotlivců.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-[#f7f2eb] shadow-[0_18px_44px_rgba(28,25,23,0.06)] ring-1 ring-stone-200/70">
          <LightboxImage
            src="/images/27.jpg"
            alt="Klidná část Brna s výbornou dostupností"
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
