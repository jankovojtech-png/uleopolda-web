import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ImageLightboxGallery } from "@/components/ImageLightboxGallery";
import { rooms } from "@/data/rooms";

export const metadata: Metadata = {
  title: "Pokoje a apartmány | U Leopolda",
  description: "Přehled pokojů a apartmánů v Penzionu U Leopolda v Brně.",
};

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-stone-900">
      <Header />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
              Pokoje
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-[-0.03em] text-stone-900 sm:text-6xl">
              Pokoje a apartmány
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-600 sm:text-xl sm:leading-9">
              Vyberte si typ ubytování a podívejte se na vybavení i fotografie.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-6xl space-y-12 px-6">
          {rooms.map((room, index) => (
            <article
              key={room.title}
              id={room.slug}
              className={`scroll-mt-28 rounded-[2rem] px-6 py-8 shadow-[0_18px_44px_rgba(28,25,23,0.05)] ring-1 ring-stone-200/70 lg:px-8 lg:py-10 ${
                index % 2 === 0 ? "bg-[#faf7f2]" : "bg-[#f3ede4]"
              }`}
            >
              <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
                    {room.capacity}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight text-stone-900 sm:text-4xl">
                    {room.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-[17px] leading-8 text-stone-600">
                    {room.description}
                  </p>

                  <ul className="mt-8 space-y-3 text-[15px] leading-7 text-stone-600">
                    {room.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://booking.previo.app/?id=019d0173-7772-7164-b6da-ed6b8dc36337&lang=cs&cur=CZK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex rounded-full bg-stone-900 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(41,37,36,0.12)] transition duration-200 hover:bg-stone-800"
                  >
                    Rezervovat pobyt
                  </a>
                </div>

                <ImageLightboxGallery
                  images={room.gallery.map((image) => ({
                    src: image,
                    alt: `${room.title} - fotografie`,
                  }))}
                  gridClassName="grid gap-4 sm:grid-cols-2"
                  itemClassName="overflow-hidden rounded-[1.5rem] bg-white/70 ring-1 ring-stone-200/70 transition duration-200 hover:shadow-[0_12px_28px_rgba(28,25,23,0.08)]"
                  imageClassName="h-64 w-full object-cover transition duration-300 hover:scale-[1.02]"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
