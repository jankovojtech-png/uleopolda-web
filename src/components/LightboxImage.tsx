"use client";

import Image from "next/image";
import type { MouseEvent, ReactNode } from "react";

import { useLightbox } from "@/components/LightboxProvider";

type LightboxImageItem = {
  src: string;
  alt: string;
};

type LightboxImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  wrapperClassName?: string;
  gallery?: LightboxImageItem[];
  index?: number;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export function LightboxImage({
  src,
  alt,
  width,
  height,
  className,
  wrapperClassName,
  gallery,
  index = 0,
  children,
  onClick,
}: LightboxImageProps) {
  const { openLightbox } = useLightbox();

  const images = gallery ?? [{ src, alt }];

  return (
    <button
      type="button"
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          openLightbox(images, index);
        }
      }}
      className={wrapperClassName ?? "block w-full text-left"}
      aria-label={`Zvetsit fotografii: ${alt}`}
    >
      <Image src={src} alt={alt} width={width} height={height} className={className} />
      {children}
    </button>
  );
}
