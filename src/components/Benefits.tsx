const benefits = [
  {
    title: "Pro pracovní pobyty",
    description: "Vhodné zázemí pro služební cesty i opakované pobyty v Brně.",
    image: "/images/40.jpg",
    imagePosition: "center center",
  },
  {
    title: "Klidná lokalita",
    description: "Brno-Komárov mimo rušné centrum, ale s dobrou dostupností.",
    image: "/images/31.jpg",
    imagePosition: "center center",
  },
  {
    title: "Soukromí a pohodlí",
    description: "Pokoje s vlastním zázemím pro klidný a pohodlný pobyt.",
    image: "/images/23.jpg",
    imagePosition: "center center",
  },
  {
    title: "Jednoduchá rezervace",
    description: "Termín si zarezervujete online rychle a přehledně.",
    image: "/images/30.jpg",
    imagePosition: "center center",
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
            Proč si hosté vybírají právě nás
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600 sm:mt-5 sm:text-lg sm:leading-8">
            Klidné a praktické ubytování pro hosty, kteří chtějí mít vše bez komplikací.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="relative isolate overflow-hidden rounded-2xl bg-[#fdfaf6] p-6 shadow-[0_8px_20px_rgba(28,25,23,0.035)] ring-1 ring-stone-200/75 sm:p-8"
            >
              <div
                className="absolute inset-0 bg-cover bg-no-repeat opacity-[0.24] sm:opacity-[0.16]"
                style={{
                  backgroundImage: `url(${benefit.image})`,
                  backgroundPosition: benefit.imagePosition,
                  backgroundSize: "cover",
                  filter: "brightness(1.12) saturate(0.88)",
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(253,250,246,0.76),rgba(253,250,246,0.92)_46%,rgba(253,250,246,0.97))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.86),transparent_56%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.62),transparent_48%)]" />

              <div className="relative">
                <h3 className="text-lg font-semibold leading-7 text-stone-900 sm:text-xl sm:leading-8">
                  {benefit.title}
                </h3>
                <p className="mt-2.5 max-w-[22rem] text-[15px] leading-6 text-stone-700 sm:mt-3 sm:leading-7">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
