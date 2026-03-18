function AddressIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-stone-500" fill="none" aria-hidden="true">
      <path
        d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-stone-500" fill="none" aria-hidden="true">
      <path
        d="M6.8 4.5h2.5l1.2 4-1.6 1.6a15 15 0 0 0 5 5l1.6-1.6 4 1.2v2.5a1.5 1.5 0 0 1-1.5 1.5A14.5 14.5 0 0 1 4.5 6A1.5 1.5 0 0 1 6 4.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-stone-500" fill="none" aria-hidden="true">
      <path
        d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="m5 7 7 5 7-5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section id="kontakt" className="bg-[#f3ede4] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
              Kontakt
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.02em] text-stone-900 sm:text-5xl">
              Rezervace a dotazy na jednom místě
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-600">
              Pro běžný pobyt použijte online rezervaci. Pokud řešíte delší termín, firemní
              ubytování nebo se chcete na něco doptat, kontaktujte nás přímo.
            </p>
            <p className="mt-4 text-base leading-7 text-stone-600">
              Menší soukromé akce jsou možné po předchozí domluvě.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] bg-[#faf7f2] p-9 shadow-[0_14px_36px_rgba(28,25,23,0.05)] ring-1 ring-stone-200/70">
              <h3 className="text-xl font-semibold text-stone-900">Kontaktní údaje</h3>
              <div className="mt-7 space-y-5 text-[17px] leading-8 text-stone-600">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Jeneweinova+134+49+Brno-Komarov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl transition duration-200 hover:text-stone-900"
                >
                  <AddressIcon />
                  <span>
                    Jeneweinova 134/49
                    <br />
                    Brno-Komárov
                    <span className="mt-1 block text-sm text-stone-500 transition duration-200 group-hover:text-stone-700">
                      Otevřít v mapě
                    </span>
                  </span>
                </a>

                <a
                  href="tel:+420603734251"
                  className="flex items-start gap-4 transition duration-200 hover:text-stone-900"
                >
                  <PhoneIcon />
                  <span>+420 603 734 251</span>
                </a>

                <a
                  href="mailto:penzion@uleopolda.cz"
                  className="flex items-start gap-4 transition duration-200 hover:text-stone-900"
                >
                  <MailIcon />
                  <span>penzion@uleopolda.cz</span>
                </a>
              </div>
            </div>

            <div
              id="rezervace"
              className="rounded-[1.75rem] bg-stone-900 p-9 text-white shadow-[0_18px_40px_rgba(28,25,23,0.12)]"
            >
              <h3 className="text-xl font-semibold">Rezervace</h3>
              <p className="mt-5 text-[17px] leading-8 text-stone-300">
                Nejrychlejší cesta k volnému termínu je online rezervace. Pro delší nebo firemní
                pobyty doporučujeme kontakt přímo.
              </p>
              <a
                href="https://booking.previo.app/?id=019d0173-7772-7164-b6da-ed6b8dc36337&lang=cs&cur=CZK"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex rounded-full bg-[#d8bb8d] px-7 py-3.5 text-sm font-semibold text-stone-950 shadow-[0_12px_28px_rgba(154,124,73,0.18)] transition duration-200 hover:bg-[#e0c496]"
              >
                Rezervovat pobyt
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
