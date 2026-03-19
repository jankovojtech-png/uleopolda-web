const benefits = [
  {
    title: "Pro pracovní pobyty",
    description: "Praktické zázemí pro služební cesty i opakované pobyty v Brně.",
  },
  {
    title: "Klidná lokalita",
    description: "Brno-Komárov mimo rušné centrum, ale s dobrou dostupností.",
  },
  {
    title: "Soukromí a pohodlí",
    description: "Pokoje s vlastním zázemím pro nerušený a pohodlný pobyt.",
  },
  {
    title: "Jednoduchá rezervace",
    description: "Termín si rezervujete online rychle a bez zbytečného čekání.",
  },
];

export function Benefits() {
  return (
    <section className="bg-[#f6efe6] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
            Pro koho je penzion vhodný
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.02em] text-stone-900 sm:mt-4 sm:text-5xl">
            Ubytování, které dává smysl při pobytu v Brně
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600 sm:mt-5 sm:text-lg sm:leading-8">
            Klid, čistota a jednoduchá rezervace bez zbytečně dlouhého rozhodování.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="rounded-2xl bg-[#fdfaf6] p-6 shadow-[0_8px_20px_rgba(28,25,23,0.035)] ring-1 ring-stone-200/75 sm:p-8"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#efe4d3] text-sm font-semibold text-stone-700 sm:mb-6 sm:h-12 sm:w-12">
                0{index + 1}
              </div>
              <h3 className="text-lg font-semibold leading-7 text-stone-900 sm:text-xl sm:leading-8">
                {benefit.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-6 text-stone-700 sm:mt-3 sm:leading-7">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
