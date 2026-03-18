import Link from "next/link";

import { LightboxImage } from "@/components/LightboxImage";
import { rooms } from "@/data/rooms";

export function RoomsSection() {
  return (
    <section id="pokoje" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
            Pokoje
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.02em] text-stone-900 sm:text-5xl">
            Vyberte si pokoj nebo apartmán podle délky a stylu pobytu
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-600">
            Na detailu pokojů najdete přehled dispozic, vybavení a fotografie. Pokud si nejste
            jistí, ozvěte se a doporučíme vhodnou variantu.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {rooms.map((room) => (
            <div
              key={room.title}
              className="overflow-hidden rounded-2xl bg-[#faf7f2] shadow-[0_14px_36px_rgba(28,25,23,0.05)] ring-1 ring-stone-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(28,25,23,0.08)]"
            >
              <LightboxImage
                src={room.coverImage}
                alt={room.title}
                width={1152}
                height={768}
                className="h-64 w-full object-cover"
                wrapperClassName="block w-full text-left"
                gallery={room.gallery.map((image) => ({
                  src: image,
                  alt: `${room.title} - fotografie`,
                }))}
              />
              <Link
                href={`/pokoje#${room.slug}`}
                className="block p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400/70"
              >
                <h3 className="text-xl font-semibold leading-8 text-stone-900">{room.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-stone-600">{room.shortDescription}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
