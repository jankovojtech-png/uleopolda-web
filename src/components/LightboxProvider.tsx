"use client";

import Image from "next/image";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type LightboxImage = {
  src: string;
  alt: string;
};

type LightboxContextValue = {
  openLightbox: (images: LightboxImage[], startIndex?: number) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<LightboxImage[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
    setImages([]);
  }, []);

  const openLightbox = useCallback((nextImages: LightboxImage[], startIndex = 0) => {
    if (nextImages.length === 0) {
      return;
    }

    setImages(nextImages);
    setActiveIndex(startIndex);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || images.length === 0) {
        return current;
      }

      return (current - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || images.length === 0) {
        return current;
      }

      return (current + 1) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, closeLightbox, showNext, showPrevious]);

  const value = useMemo(
    () => ({
      openLightbox,
    }),
    [openLightbox],
  );

  const activeImage = activeIndex === null ? null : images[activeIndex];

  return (
    <LightboxContext.Provider value={value}>
      {children}

      {activeImage ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-4 py-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
        >
          <div
            className="relative max-h-full w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-stone-800 shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition hover:bg-white"
              aria-label="Zavrit fotografii"
            >
              X
            </button>

            {images.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={showPrevious}
                  className="absolute top-1/2 left-4 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl leading-none text-stone-800 shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition hover:bg-white"
                  aria-label="Predchozi fotografie"
                >
                  {"<"}
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute top-1/2 right-4 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl leading-none text-stone-800 shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition hover:bg-white"
                  aria-label="Dalsi fotografie"
                >
                  {">"}
                </button>
              </>
            ) : null}

            <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                width={1600}
                height={1067}
                className="max-h-[85vh] w-full object-contain bg-[#f8f4ee]"
              />
            </div>
          </div>
        </div>
      ) : null}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const context = useContext(LightboxContext);

  if (!context) {
    throw new Error("useLightbox must be used within LightboxProvider");
  }

  return context;
}
