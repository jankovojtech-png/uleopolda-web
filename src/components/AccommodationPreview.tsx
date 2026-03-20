import { LightboxImage } from "@/components/LightboxImage";

const accommodationCards = [
  {
    title: "Pokoje a apartmány na pár nocí",
    text: "Čisté a klidné ubytování pro krátký pobyt, přespání i víkend v Brně.",
    image: "/images/3.jpg",
  },
  {
    title: "Praktická volba na pracovní cestu",
    text: "Vhodné zázemí pro jednotlivce i kolegy, kteří potřebují klid, Wi-Fi a snadný příjezd.",
    image: "/images/26.jpg",
  },
];

export function AccommodationPreview() {
  return (
    <section id="ubytovani" className="py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-4 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
              Ubytování
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.02em] text-stone-900 sm:mt-4 sm:text-5xl">
              Jaké ubytování u nás najdete
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600 sm:mt-5 sm:text-lg sm:leading-8">
              Rychlý přehled pro hosty, kteří hledají pokoj nebo apartmán v Brně.
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

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
          {accommodationCards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-[1.75rem] bg-[#fdfaf6] shadow-[0_10px_24px_rgba(28,25,23,0.04)] ring-1 ring-stone-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(28,25,23,0.06)]"
            >
              <LightboxImage
                src={card.image}
                alt={card.title}
                width={1152}
                height={768}
                className="h-64 w-full object-cover object-center sm:h-80"
                wrapperClassName="block w-full text-left"
              />
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold leading-7 text-stone-900 sm:text-2xl sm:leading-8">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-stone-700 sm:mt-4 sm:text-[17px] sm:leading-8">
                  {card.text}
                </p>
                <a
                  href="#pokoje"
                  className="mt-5 inline-flex text-sm font-semibold text-stone-700 transition hover:text-stone-900"
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
