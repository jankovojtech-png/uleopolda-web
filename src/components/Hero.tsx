"use client";

import { useEffect, useState } from "react";

import { LightboxImage } from "@/components/LightboxImage";

const heroImages = [
  "/images/31.jpg",
  "/images/32.jpg",
  "/images/4.jpg",
  "/images/1.jpg",
  "/images/30.jpg",
  "/images/17.jpg",
];

const trustPoints = ["Parkování zdarma", "Wi-Fi zdarma", "Vlastní koupelna", "Klidná lokalita"];

export function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 45000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f4ecdf] text-stone-900">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-[center_52%] brightness-[1.34] contrast-[1.06] saturate-[1.08] transition-opacity duration-[1800ms] ease-in-out sm:bg-[center_50%] sm:brightness-[1.22] lg:bg-center lg:brightness-100 lg:contrast-100 lg:saturate-100 ${
              activeImage === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,247,241,0.14)_0%,rgba(251,247,241,0.06)_34%,rgba(251,247,241,0.36)_100%)] sm:bg-[linear-gradient(90deg,rgba(247,242,235,0.64)_0%,rgba(247,242,235,0.44)_44%,rgba(247,242,235,0.14)_100%)] lg:bg-[linear-gradient(90deg,rgba(247,242,235,0.9)_0%,rgba(247,242,235,0.8)_42%,rgba(247,242,235,0.42)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.08)_100%)] lg:bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.2)_100%)]" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-start gap-8 px-6 pt-20 pb-12 sm:min-h-[86vh] sm:items-center sm:gap-14 sm:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:py-32">
        <div className="max-w-3xl rounded-[1.75rem] bg-white/34 p-5 backdrop-blur-[1px] sm:bg-transparent sm:p-0 sm:backdrop-blur-0">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-stone-600 sm:mb-6 sm:text-sm sm:font-medium sm:tracking-[0.32em]">
            Penzion U Leopolda • Brno-Komárov
          </p>
          <h1 className="max-w-3xl text-[2.2rem] font-semibold leading-[1.02] tracking-[-0.035em] text-stone-900 sm:text-5xl lg:text-6xl">
            Klidné ubytování v Brně
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-6 text-stone-700 sm:mt-6 sm:text-lg sm:leading-8">
            Čisté pokoje a apartmány pro krátké pobyty, pracovní cesty i delší ubytování.
          </p>
          <p className="mt-4 text-base font-medium text-stone-800 sm:text-lg">Ceny od 1440 Kč / noc</p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <a
              href="https://booking.previo.app/?id=019d0173-7772-7164-b6da-ed6b8dc36337&lang=cs&cur=CZK"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-stone-900 px-8 py-4 text-center text-sm font-semibold text-white shadow-[0_14px_34px_rgba(28,25,23,0.18)] ring-1 ring-stone-950/10 transition duration-200 hover:-translate-y-0.5 hover:bg-stone-800 hover:shadow-[0_18px_40px_rgba(28,25,23,0.22)]"
            >
              Rezervovat pobyt
            </a>
            <a
              href="tel:+420603734251"
              className="rounded-full border border-stone-300/80 bg-white/86 px-8 py-4 text-center text-sm font-semibold text-stone-800 transition duration-200 hover:border-stone-400 hover:bg-white hover:text-stone-900"
            >
              Zavolat
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5 text-sm text-stone-800 sm:mt-8 sm:gap-3">
            {trustPoints.map((item) => (
              <span
                key={item}
                className="rounded-full border border-stone-300/75 bg-white/88 px-3.5 py-2 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="rounded-[2rem] border border-white/70 bg-white/66 p-4 shadow-[0_16px_38px_rgba(28,25,23,0.075)] backdrop-blur-md">
            <LightboxImage
              src="/images/18.jpg"
              alt="Světlý pokoj v penzionu U Leopolda"
              width={1152}
              height={768}
              className="h-[320px] w-full rounded-[1.5rem] object-cover"
              wrapperClassName="block w-full overflow-hidden rounded-[1.5rem] text-left"
            />
            <div className="grid gap-4 p-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
                  Online rezervace a kontakt
                </p>
                <p className="mt-3 text-2xl font-semibold text-stone-900">
                  Rezervace online i přímý kontakt
                </p>
                <p className="mt-3 text-[15px] leading-7 text-stone-600">
                  Rezervaci pobytu vyřídíte online během pár kliknutí. Pokud si nejste jistí výběrem
                  pokoje nebo chcete poradit, ozvěte se nám.
                </p>
              </div>

              <div className="grid gap-3 text-sm text-stone-700">
                <a
                  href="tel:+420603734251"
                  className="rounded-2xl bg-[#faf7f2] px-4 py-3 transition hover:bg-white"
                >
                  Zavolat: +420 603 734 251
                </a>
                <a
                  href="mailto:penzion@uleopolda.cz"
                  className="rounded-2xl bg-[#faf7f2] px-4 py-3 transition hover:bg-white"
                >
                  Napsat: penzion@uleopolda.cz
                </a>
                <a
                  href="#kontakt"
                  className="rounded-2xl bg-[#faf7f2] px-4 py-3 transition hover:bg-white"
                >
                  Kontaktní údaje a mapa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
