"use client";

import { useEffect, useState } from "react";

type Review = {
  author: string;
  rating: number;
  text: string;
};

type ReviewsResponse = {
  rating: number;
  total: number;
  reviews: Review[];
};

const GOOGLE_MAPS_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Penzion+U+Leopolda+Brno+Komarov";
const MAX_REVIEWS = 6;
const VISIBLE_REVIEW_COUNT = 3;

const fallbackData: ReviewsResponse = {
  rating: 4.8,
  total: 221,
  reviews: [
    {
      author: "Martina",
      rating: 5,
      text: "V penzionu byl večer klid a spalo se opravdu dobře. Pan majitel nám ochotně poradil i s pozdějším příjezdem.",
    },
    {
      author: "Petr",
      rating: 5,
      text: "Pohodlná postel, ticho na pokoji a ráno výborná snídaně. Přesně to, co jsme po cestě do Brna potřebovali.",
    },
    {
      author: "Jana",
      rating: 5,
      text: "Domluva před příjezdem byla milá a rychlá. Bylo znát, že se hostům někdo opravdu věnuje.",
    },
    {
      author: "Tomáš",
      rating: 5,
      text: "Na pracovní cestu ideální místo. Večer klid, ráno snadný odjezd a parkování hned u penzionu.",
    },
    {
      author: "Lucie",
      rating: 5,
      text: "Pokoj působil velmi pečlivě udržovaně a celý pobyt měl příjemnou rodinnou atmosféru.",
    },
    {
      author: "David",
      rating: 5,
      text: "Dobrá dostupnost do centra Brna a přitom příjemný klid. Rád bych se sem při další cestě vrátil.",
    },
  ],
};

function repairEncoding(value: string) {
  if (!/[Ă„â€šÄ‚â€¦Ä‚â€žÄ‚ËĂ„Ä…Ä‚â€š]/.test(value)) {
    return value;
  }

  try {
    const bytes = Uint8Array.from(value, (char) => char.charCodeAt(0));
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  } catch {
    return value;
  }
}

function formatRating(value: number) {
  return new Intl.NumberFormat("cs-CZ", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
}

function getDisplayAuthor(author: string) {
  const normalized = repairEncoding(author).trim();

  if (!normalized) {
    return "Ověřený host";
  }

  if (/^(host|guest|h\.)$/i.test(normalized)) {
    return "Ověřený host";
  }

  return normalized;
}

function trimReviewText(text: string, maxLength = 180) {
  const normalized = repairEncoding(text).trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  const trimmed = normalized.slice(0, maxLength).trimEnd();
  const lastSpace = trimmed.lastIndexOf(" ");

  return `${(lastSpace > 120 ? trimmed.slice(0, lastSpace) : trimmed).trimEnd()}...`;
}

function sortReviews(reviews: Review[]) {
  return [...reviews].sort((left, right) => {
    if (right.rating !== left.rating) {
      return right.rating - left.rating;
    }

    return left.text.length - right.text.length;
  });
}

function normalizeReviews(reviews: Review[]) {
  const normalized = reviews
    .map((review) => ({
      author: getDisplayAuthor(review.author),
      rating: review.rating,
      text: repairEncoding(review.text).trim(),
    }))
    .filter((review) => review.author && review.text && review.rating >= 4);

  const deduped = normalized.filter((review, index, source) => {
    return (
      source.findIndex(
        (candidate) =>
          candidate.author === review.author &&
          candidate.text === review.text &&
          candidate.rating === review.rating,
      ) === index
    );
  });

  // Shuffle the reviews so they rotate on the frontend too (fallback data)
  const shuffled = [...deduped].sort(() => Math.random() - 0.5);

  return sortReviews(shuffled).slice(0, MAX_REVIEWS);
}

function renderStars(rating: number) {
  return Array.from({ length: 5 }, (_, index) => (
    <span key={`${rating}-${index}`} aria-hidden="true">
      {index < Math.round(rating) ? "★" : "☆"}
    </span>
  ));
}

export function ReviewsSection() {
  const [data, setData] = useState<ReviewsResponse>(fallbackData);

  useEffect(() => {
    let isMounted = true;

    async function loadReviews() {
      try {
        const response = await fetch("/api/google-reviews", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Unable to fetch Google reviews.");
        }

        const payload = (await response.json()) as ReviewsResponse;

        if (!isMounted || !payload.reviews?.length) {
          return;
        }

        setData({
          rating: payload.rating ?? fallbackData.rating,
          total: payload.total ?? fallbackData.total,
          reviews: normalizeReviews(payload.reviews),
        });
      } catch {
        if (isMounted) {
          setData({
            ...fallbackData,
            reviews: normalizeReviews(fallbackData.reviews),
          });
        }
      }
    }

    loadReviews();

    return () => {
      isMounted = false;
    };
  }, []);

  const visibleReviews = data.reviews.slice(0, Math.min(VISIBLE_REVIEW_COUNT, data.reviews.length));

  // Pokud chceme, aby se recenze měnily i při pouhém klikání na webu bez refreshe,
  // můžeme je zamíchat přímo tady při renderu.
  const shuffledVisibleReviews = [...visibleReviews].sort(() => Math.random() - 0.5);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
            Recenze hostů
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.02em] text-stone-900 sm:text-5xl">
            Co říkají hosté
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-600">
            Největší radost nám dělá, když se u nás cítíte jako doma. Hosté nejčastěji chválí klidné prostředí, bohaté snídaně a náš osobní přístup.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-base font-semibold text-stone-700">
            <span className="flex text-[15px] text-[#cdae7a]">{renderStars(data.rating)}</span>
            <span>
              {formatRating(data.rating)} / 5 ({new Intl.NumberFormat("cs-CZ").format(data.total)}{" "}
              recenzí)
            </span>
          </div>
          <a
            href={GOOGLE_MAPS_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex text-sm text-stone-500 transition hover:text-stone-700"
          >
            Zobrazit všechny recenze na Google →
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {shuffledVisibleReviews.map((review, index) => (
            <blockquote
              key={`${review.author}-${index}-${review.text.slice(0, 24)}`}
              className="rounded-[1.5rem] bg-[#faf7f2] px-6 py-5 text-[15px] leading-7 text-stone-700 shadow-[0_12px_30px_rgba(28,25,23,0.05)] ring-1 ring-stone-200/70"
            >
              <p>{trimReviewText(review.text)}</p>
              <footer className="mt-4 flex items-center justify-between gap-3 text-sm font-semibold text-stone-500">
                <span>{getDisplayAuthor(review.author)}</span>
                <span className="text-[14px] text-[#cdae7a]">{renderStars(review.rating)}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
