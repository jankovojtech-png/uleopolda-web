const benefits = [
  {
    title: "Pro pracovní pobyty",
    description: "Vhodné pro služební cesty i opakované pobyty v Brně.",
  },
  {
    title: "Klidná lokalita",
    description: "Penzion se nachází v Brně-Komárově mimo rušné centrum.",
  },
  {
    title: "Soukromí a pohodlí",
    description: "Pokoje s vlastním zázemím pro nerušený pobyt.",
  },
  {
    title: "Jednoduchá rezervace",
    description: "Termín si rezervujete online nebo se domluvíte přímo.",
  },
];

export function Benefits() {
  return (
    <section className="bg-[#f3ede4] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
            Pro koho je penzion vhodný
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.02em] text-stone-900 sm:text-5xl">
            Ubytování, které oceníte při pobytu v Brně
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-600">
            Klidná lokalita, čisté pokoje a jednoduchá rezervace.
            <br />
            Ideální pro pracovní pobyty, krátké přespání i delší ubytování.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="rounded-2xl bg-[#faf7f2] p-8 shadow-[0_12px_30px_rgba(28,25,23,0.05)] ring-1 ring-stone-200/70"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-stone-200/70 text-sm font-semibold text-stone-700">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold leading-8 text-stone-900">{benefit.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-stone-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
