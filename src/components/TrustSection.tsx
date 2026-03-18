const facts = [
  { value: "4 typy", label: "pokojů a apartmánů" },
  { value: "Vlastní koupelna", label: "u všech nabízených typů" },
  { value: "Wi‑Fi zdarma", label: "pro pracovní i běžný pobyt" },
  { value: "Krátké i delší pobyty", label: "pro jednotlivce, páry i firmy" },
];

export function TrustSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 rounded-[2rem] bg-[#f7f2eb] p-8 shadow-[0_24px_60px_rgba(28,25,23,0.06)] ring-1 ring-stone-200/70 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
              Konkrétní informace
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.02em] text-stone-900 sm:text-5xl">
              Co u nás najdete před rezervací
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-600">
              Penzion U Leopolda je rodinné ubytování v Brně-Komárově. Nabízíme pokoje i apartmány
              pro hosty, kteří chtějí praktické zázemí bez zbytečné složitosti.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {facts.map((fact) => (
              <article
                key={fact.value}
                className="rounded-[1.5rem] bg-[#fcfaf7] p-7 ring-1 ring-stone-200/70"
              >
                <p className="text-2xl font-semibold leading-tight text-stone-900">{fact.value}</p>
                <p className="mt-3 text-[15px] leading-7 text-stone-600">{fact.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
