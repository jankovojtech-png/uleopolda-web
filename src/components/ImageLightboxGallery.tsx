"use client";

import Image from "next/image";

import { useLightbox } from "@/components/LightboxProvider";

type GalleryImage = {
  src: string;
  alt: string;
};

type ImageLightboxGalleryProps = {
  images: GalleryImage[];
  gridClassName: string;
  imageClassName: string;
  itemClassName: string;
};

export function ImageLightboxGallery({
  images,
  gridClassName,
  imageClassName,
  itemClassName,
}: ImageLightboxGalleryProps) {
  const { openLightbox } = useLightbox();

  return (
    <div className={gridClassName}>
      {images.map((image, index) => (
        <button
          key={`${image.src}-${index}`}
          type="button"
          onClick={() => openLightbox(images, index)}
          className={`${itemClassName} text-left`}
          aria-label={`Zvetsit fotografii: ${image.alt}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={1152}
            height={768}
            className={imageClassName}
          />
        </button>
      ))}
    </div>
  );
}
