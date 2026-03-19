"use client";

import { useEffect, useMemo, useState } from "react";

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

const fallbackData: ReviewsResponse = {
  rating: 4.6,
  total: 0,
  reviews: [
    {
      author: "Host",
      rating: 5,
      text: "Klidné místo na přespání.",
    },
    {
      author: "Host",
      rating: 5,
      text: "Čisté pokoje a pohodlné postele.",
    },
    {
      author: "Host",
      rating: 5,
      text: "Bezproblémová domluva před příjezdem.",
    },
    {
      author: "Host",
      rating: 5,
      text: "Skvělá volba na pracovní cestu.",
    },
    {
      author: "Host",
      rating: 5,
      text: "Parkování hned u penzionu.",
    },
    {
      author: "Host",
      rating: 5,
      text: "Dobře dostupné do centra Brna.",
    },
  ],
};

function getVisibleReviews(reviews: Review[], startIndex: number) {
  if (reviews.length <= 3) {
    return reviews;
  }

  return Array.from({ length: 3 }, (_, index) => reviews[(startIndex + index) % reviews.length]);
}

function formatRating(value: number) {
  return new Intl.NumberFormat("cs-CZ", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
}

function toInitials(author: string) {
  const parts = author
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);

  if (!parts.length) {
    return "H.";
  }

  return parts.map((part) => `${part.charAt(0).toUpperCase()}.`).join(" ");
}

function trimReviewText(text: string, maxLength = 160) {
  const normalized = text.trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  const trimmed = normalized.slice(0, maxLength).trimEnd();
  const lastSpace = trimmed.lastIndexOf(" ");

  return `${(lastSpace > 100 ? trimmed.slice(0, lastSpace) : trimmed).trimEnd()}...`;
}

function sortReviews(reviews: Review[]) {
  return [...reviews].sort((left, right) => {
    if (right.rating !== left.rating) {
      return right.rating - left.rating;
    }

    return left.text.length - right.text.length;
  });
}

function renderStars(rating: number) {
  return Array.from({ length: 5 }, (_, index) => (
    <span key={`${rating}-${index}`} aria-hidden="true">
      {index < Math.round(rating) ? "â…" : "â†"}
    </span>
  ));
}

export function ReviewsSection() {
  const [data, setData] = useState<ReviewsResponse>(fallbackData);
  const [startIndex, setStartIndex] = useState(0);

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
          reviews: sortReviews(payload.reviews.slice(0, 6)),
        });
      } catch {
        if (isMounted) {
          setData({
            ...fallbackData,
            reviews: sortReviews(fallbackData.reviews),
          });
        }
      }
    }

    loadReviews();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (data.reviews.length <= 3) {
      return;
    }

    const interval = window.setInterval(() => {
      setStartIndex((current) => (current + 1) % data.reviews.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [data.reviews.length]);

  const visibleReviews = useMemo(
    () => getVisibleReviews(data.reviews, startIndex),
    [data.reviews, startIndex],
  );

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
            Recenze hostĹŻ
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.02em] text-stone-900 sm:text-5xl">
            Co Ĺ™Ă­kajĂ­ hostĂ©
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-600">
            HostĂ© oceĹujĂ­ pĹ™edevĹˇĂ­m klid, ÄŤistotu a jednoduchou domluvu.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-base font-semibold text-stone-700">
            <span className="flex text-[15px] text-[#cdae7a]">{renderStars(data.rating)}</span>
            <span>{formatRating(data.rating)} / 5</span>
            <span>{new Intl.NumberFormat("cs-CZ").format(data.total)} recenzĂ­ na</span>
            <span className="text-sm font-medium uppercase tracking-[0.22em] text-stone-500">Google</span>
          </div>
          <a
            href={GOOGLE_MAPS_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex text-sm text-stone-500 transition hover:text-stone-700"
          >
            Zobrazit vĹˇechny recenze na Google â†’
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visibleReviews.map((review, index) => (
            <blockquote
              key={`${review.author}-${index}-${review.text.slice(0, 24)}`}
              className="rounded-[1.5rem] bg-[#faf7f2] px-6 py-5 text-[15px] leading-7 text-stone-700 shadow-[0_12px_30px_rgba(28,25,23,0.05)] ring-1 ring-stone-200/70"
            >
              <p>{trimReviewText(review.text)}</p>
              <footer className="mt-4 flex items-center justify-between gap-3 text-sm font-semibold text-stone-500">
                <span>{toInitials(review.author)}</span>
                <span className="text-[14px] text-[#cdae7a]">{renderStars(review.rating)}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
