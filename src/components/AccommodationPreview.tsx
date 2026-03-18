import { LightboxImage } from "@/components/LightboxImage";

const accommodationCards = [
  {
    title: "Ubytování na několik nocí",
    text: "Pokoje a apartmány pro hosty, kteří chtějí čisté, klidné a dobře dostupné zázemí v Brně.",
    image: "/images/3.jpg",
  },
  {
    title: "Praktická volba pro pracovní a delší pobyt",
    text: "Vhodné pro pracovní cesty, opakované pobyty i hosty, kteří ocení soukromí, Wi‑Fi a klidnou lokalitu.",
    image: "/images/26.jpg",
  },
];

export function AccommodationPreview() {
  return (
    <section id="ubytovani" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
              Ubytování
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.02em] text-stone-900 sm:text-5xl">
              Přehled ubytování pro hosty, kteří chtějí mít jasno
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              Nabízíme pokoje i apartmány pro jednotlivce, páry i hosty na pracovních cestách.
              Vyberete si podle délky pobytu i potřebného komfortu.
            </p>
          </div>
          <a
            href="https://booking.previo.app/?id=019d0173-7772-7164-b6da-ed6b8dc36337&lang=cs&cur=CZK"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-stone-700 transition duration-200 hover:text-stone-900"
          >
            Rezervovat pobyt
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {accommodationCards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-[1.75rem] bg-[#fbf8f4] shadow-[0_18px_40px_rgba(28,25,23,0.06)] ring-1 ring-stone-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(28,25,23,0.08)]"
            >
              <LightboxImage
                src={card.image}
                alt={card.title}
                width={1152}
                height={768}
                className="h-80 w-full object-cover"
                wrapperClassName="block w-full text-left"
              />
              <div className="p-9 sm:p-10">
                <h3 className="text-2xl font-semibold leading-8 text-stone-900">{card.title}</h3>
                <p className="mt-5 text-[17px] leading-8 text-stone-600">{card.text}</p>
                <a
                  href="#pokoje"
                  className="mt-6 inline-flex text-sm font-semibold text-stone-700 transition hover:text-stone-900"
                >
                  Prohlédnout pokoje
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
