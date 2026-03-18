const benefits = [
  {
    title: "Klidné prostředí",
    description: "Ideální pro odpočinek po práci, cestování i náročném dni v Brně.",
  },
  {
    title: "Rodinný přístup",
    description: "Osobní péče a tradice rodinného penzionu, kde na hostech opravdu záleží.",
  },
  {
    title: "Snídaně v zimní zahradě",
    description: "Příjemný začátek dne v klidné atmosféře se světlem a pohodou.",
  },
  {
    title: "Výborná dostupnost",
    description: "Rychlé spojení do centra Brna i do průmyslových zón v okolí.",
  },
];

export function Benefits() {
  return (
    <section className="bg-[#f3ede4] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
            Hlavní výhody
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.02em] text-stone-900 sm:text-5xl">
            Místo, kde se dobře bydlí i odpočívá
          </h2>
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
