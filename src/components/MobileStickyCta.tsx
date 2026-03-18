export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-200/80 bg-[#f8f4ee]/95 px-4 py-3 shadow-[0_-10px_24px_rgba(28,25,23,0.08)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3">
        <a
          href="tel:+420603734251"
          className="inline-flex items-center justify-center rounded-full border border-stone-300/80 bg-white px-4 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-400 hover:bg-[#fcfaf7]"
        >
          Zavolat
        </a>
        <a
          href="https://booking.previo.app/?id=019d0173-7772-7164-b6da-ed6b8dc36337&lang=cs&cur=CZK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-stone-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
        >
          Rezervovat
        </a>
      </div>
    </div>
  );
}
