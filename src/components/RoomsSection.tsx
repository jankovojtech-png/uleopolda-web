import Link from "next/link";

import { LightboxImage } from "@/components/LightboxImage";
import { rooms } from "@/data/rooms";

const BOOKING_URL =
  "https://booking.previo.app/?id=019d0173-7772-7164-b6da-ed6b8dc36337&lang=cs&cur=CZK";

export function RoomsSection() {
  return (
    <section id="pokoje" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
            Pokoje
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.02em] text-stone-900 sm:text-5xl">
            Pokoje a apartmány podle vašich potřeb
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-600">
            U každého typu najdete cenu, kapacitu, vybavení a fotografie. Pokud si nejste jistí,
            který pokoj bude pro vás ten pravý, zavolejte nám a rádi vám poradíme.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {rooms.map((room) => (
            <div
              key={room.title}
              className="overflow-hidden rounded-2xl bg-[#fcfaf6] shadow-[0_10px_28px_rgba(28,25,23,0.045)] ring-1 ring-stone-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(28,25,23,0.07)]"
            >
              <LightboxImage
                src={room.coverImage}
                alt={room.title}
                width={1152}
                height={768}
                className="h-64 w-full object-cover object-center"
                wrapperClassName="block w-full text-left"
                gallery={room.gallery.map((image) => ({
                  src: image,
                  alt: `${room.title} - fotografie`,
                }))}
              />
              <div className="p-8">
                <h3 className="text-xl font-semibold leading-8 text-stone-900">{room.title}</h3>
                <p className="mt-3 text-lg font-semibold text-stone-900">{room.priceFrom}</p>
                <p className="mt-1 text-sm text-stone-500">{room.capacityNote}</p>
                <p className="mt-4 text-[15px] leading-7 text-stone-600">{room.shortDescription}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(28,25,23,0.14)] transition duration-200 hover:bg-stone-800 hover:shadow-[0_14px_30px_rgba(28,25,23,0.18)]"
                  >
                    Rezervovat
                  </a>
                  <Link
                    href={`/pokoje#${room.slug}`}
                    className="inline-flex items-center justify-center rounded-full border border-stone-300/80 bg-white px-5 py-3 text-sm font-semibold text-stone-800 transition duration-200 hover:border-stone-400 hover:bg-[#fffdf9] hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400/70"
                  >
                    Detail pokoje
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-stone-500">
          Kapacita se může u konkrétního pokoje mírně lišit.
        </p>
      </div>
    </section>
  );
}
