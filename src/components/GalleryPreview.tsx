import { ImageLightboxGallery } from "@/components/ImageLightboxGallery";

const galleryImages = [
  {
    src: "/images/18.jpg",
    alt: "Dvoulůžkový pokoj",
  },
  {
    src: "/images/22.jpg",
    alt: "Pokoj s koupelnou",
  },
  {
    src: "/images/20.jpg",
    alt: "Jednolůžkový pokoj",
  },
  {
    src: "/images/32.jpg",
    alt: "Společné prostory penzionu",
  },
  {
    src: "/images/31.jpg",
    alt: "Světlý pokoj s koupelnou",
  },
  {
    src: "/images/29.jpg",
    alt: "Moderní koupelna",
  },
  {
    src: "/images/19.jpg",
    alt: "Detail sprchového koutu",
  },
  {
    src: "/images/2.jpg",
    alt: "Chodba penzionu",
  },
  {
    src: "/images/4.jpg",
    alt: "Koupelna s podsvíceným zrcadlem",
  },
];

export function GalleryPreview() {
  return (
    <section id="galerie" className="bg-[#f3ede4] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
            Galerie
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.02em] text-stone-900 sm:text-5xl">
            Nahlédněte do pokojů a zázemí penzionu
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-600">
            Krátký výběr fotografií ukazuje atmosféru pokojů, koupelen i společných prostor.
          </p>
        </div>

        <ImageLightboxGallery
          images={galleryImages}
          gridClassName="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          itemClassName="group overflow-hidden rounded-[1.75rem] bg-[#faf7f2] shadow-[0_14px_36px_rgba(28,25,23,0.05)] ring-1 ring-stone-200/70"
          imageClassName="h-[360px] w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-105"
        />
      </div>
    </section>
  );
}
