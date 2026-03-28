import { LightboxImage } from "@/components/LightboxImage";

const practicalItems = [
  "Příjezd je možný po předchozí domluvě i ve večerních hodinách – do objektu se dostanete pohodlně kartou.",
  "Snídaně podáváme formou bohatých švédských stolů v naší zimní zahradě nebo letním altánu.",
  "K dispozici je billiardová místnost pro večerní odpočinek a nabízíme i prostory pro menší rodinné či firemní akce.",
  "Parkování je možné na našich vyhrazených stáních nebo v přilehlých ulicích. Pro vyložení věcí lze zastavit přímo u vchodu.",
];

export function PracticalInfoBlock() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden z-0">
      {/* Jemné pozadí na celou šířku pro rozbití textového bloku */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.25]"
          style={{ backgroundImage: "url('/images/17.jpg')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f6f1ea_0%,transparent_15%,transparent_85%,#f6f1ea_100%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
              Praktické informace
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-stone-900 sm:text-4xl">
              Co je dobré vědět před příjezdem
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              Snažíme se, aby váš pobyt u nás byl co nejvíce bezstarostný. Zde je několik praktických informací, které vám usnadní plánování.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {practicalItems.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] bg-white/80 p-6 text-[15px] leading-7 text-stone-700 shadow-[0_8px_24px_rgba(28,25,23,0.04)] ring-1 ring-stone-200/60 backdrop-blur-md transition hover:bg-white"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
