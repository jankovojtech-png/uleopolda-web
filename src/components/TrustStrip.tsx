const trustItems = [
  "Hosté oceňují především klid, čistotu a jednoduchou domluvu.",
  "Pokoje i apartmány mají vlastní koupelnu a praktické vybavení.",
  "Vhodné pro krátké pobyty, pracovní cesty i delší ubytování.",
];

export function TrustStrip() {
  return (
    <section className="border-y border-stone-200/70 bg-[#f8f4ee] py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[1.75rem] border border-stone-200/70 bg-[#faf7f2] px-6 py-6 shadow-[0_14px_36px_rgba(28,25,23,0.04)]">
          <div className="grid gap-4 lg:grid-cols-3">
            {trustItems.map((item) => (
              <p key={item} className="text-[16px] leading-7 text-stone-700">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
