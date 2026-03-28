const practicalItems = [
  "Příjezd je možný po předchozí domluvě i ve večerních hodinách – do objektu se dostanete pohodlně kartou.",
  "Snídaně podáváme formou bohatých švédských stolů v naší zimní zahradě nebo letním altánu.",
  "K dispozici je billiardová místnost pro večerní odpočinek a nabízíme i prostory pro menší rodinné či firemní akce.",
  "Parkování je možné na našich vyhrazených stáních nebo v přilehlých ulicích. Pro vyložení věcí lze zastavit přímo u vchodu.",
];

export function PracticalInfoBlock() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[2rem] bg-[#f7f2eb] p-8 shadow-[0_24px_60px_rgba(28,25,23,0.06)] ring-1 ring-stone-200/70 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
              Praktické informace
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-stone-900 sm:text-4xl">
              Co je dobré vědět před příjezdem
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {practicalItems.map((item) => (
              <p
                key={item}
                className="rounded-[1.5rem] bg-[#fcfaf7] px-6 py-5 text-[15px] leading-7 text-stone-700 ring-1 ring-stone-200/70"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
