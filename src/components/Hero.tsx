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

const trustPoints = [
  "Parkování zdarma",
  "Wi-Fi zdarma",
  "Vlastní koupelna",
  "Klidná lokalita",
];

export function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 45000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#eae1d4] text-stone-900">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1800ms] ease-in-out ${
              activeImage === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,242,235,0.96)_0%,rgba(247,242,235,0.9)_42%,rgba(247,242,235,0.52)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.3)_100%)]" />

      <div className="relative mx-auto grid min-h-[86vh] max-w-6xl items-center gap-14 px-6 py-24 sm:py-28 lg:grid-cols-[1.02fr_0.98fr] lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.32em] text-stone-500">
            Penzion U Leopolda • Brno-Komárov
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-stone-900 sm:text-6xl lg:text-6xl">
            Klidné ubytování v Brně s parkováním a rychlou dostupností do centra
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl sm:leading-9">
            Ideální pro pracovní cesty i krátké pobyty. Čisté pokoje, jednoduchá rezervace a
            férové ceny.
          </p>
          <p className="mt-4 text-base font-medium text-stone-700 sm:text-lg">
            Ceny od 1 490 Kč / noc
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://booking.previo.app/?id=019d0173-7772-7164-b6da-ed6b8dc36337&lang=cs&cur=CZK"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#cdae7a] px-8 py-4 text-center text-sm font-semibold text-stone-900 shadow-[0_12px_30px_rgba(154,124,73,0.18)] transition duration-200 hover:bg-[#d6b889] hover:shadow-[0_14px_34px_rgba(154,124,73,0.22)]"
            >
              Rezervovat pobyt
            </a>
            <a
              href="#kontakt"
              className="rounded-full border border-stone-300/80 bg-white/40 px-8 py-4 text-center text-sm font-semibold text-stone-700 backdrop-blur-sm transition duration-200 hover:border-stone-400 hover:bg-white/70 hover:text-stone-900"
            >
              Kontakt
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-stone-700">
            {trustPoints.map((item) => (
              <span
                key={item}
                className="rounded-full border border-stone-300/80 bg-white/55 px-4 py-2 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="rounded-[2rem] border border-white/70 bg-white/55 p-4 shadow-[0_24px_60px_rgba(28,25,23,0.12)] backdrop-blur-md">
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
                  Rychlý kontakt
                </p>
                <p className="mt-3 text-2xl font-semibold text-stone-900">
                  Rezervace bez zbytečného čekání
                </p>
                <p className="mt-3 text-[15px] leading-7 text-stone-600">
                  Pro běžný pobyt využijte online rezervaci. Pro delší termín, více pokojů nebo
                  firemní ubytování nás kontaktujte přímo.
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
