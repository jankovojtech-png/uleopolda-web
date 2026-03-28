const steps = [
  {
    number: "1",
    title: "Vyberete si termín a pokoj",
  },
  {
    number: "2",
    title: "Během chvilky potvrdíte rezervaci",
  },
  {
    number: "3",
    title: "My už se postaráme o váš skvělý pobyt",
  },
];

export function ReservationStepsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[2rem] bg-[#f7f2eb] p-8 shadow-[0_24px_60px_rgba(28,25,23,0.06)] ring-1 ring-stone-200/70 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
              Jak funguje rezervace
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.02em] text-stone-900 sm:text-5xl">
              Tři jednoduché kroky k vašemu pobytu
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-[1.5rem] bg-[#fcfaf7] p-7 ring-1 ring-stone-200/70"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-200/70 text-sm font-semibold text-stone-800">
                  {step.number}
                </div>
                <h3 className="mt-5 text-xl font-semibold leading-8 text-stone-900">{step.title}</h3>
              </article>
            ))}
          </div>

          <a
            href="https://booking.previo.app/?id=019d0173-7772-7164-b6da-ed6b8dc36337&lang=cs&cur=CZK"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full bg-stone-900 px-8 py-4 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(41,37,36,0.12)] transition duration-200 hover:bg-stone-800"
          >
            Rezervovat pobyt
          </a>
        </div>
      </div>
    </section>
  );
}
