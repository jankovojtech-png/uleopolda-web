import { NextResponse } from "next/server";

type GoogleReview = {
  author_name?: string;
  rating?: number;
  text?: string;
};

type CachedReviews = {
  timestamp: number;
  data: {
    rating: number;
    total: number;
    reviews: Array<{
      author: string;
      rating: number;
      text: string;
    }>;
  };
};

const CACHE_DURATION_MS = 24 * 60 * 60 * 1000;
const PLACE_QUERY = "Penzion U Leopolda Brno Komarov";
const MAX_REVIEWS = 6;

let cache: CachedReviews | null = null;

function repairEncoding(value: string) {
  if (!/[ĂÅÄâĹÂ]/.test(value)) {
    return value;
  }

  try {
    return Buffer.from(value, "latin1").toString("utf8");
  } catch {
    return value;
  }
}

function selectTrustedReviews<T extends { rating?: number; text?: string }>(reviews: T[]) {
  const sorted = [...reviews].sort((left, right) => {
    const ratingDifference = (right.rating ?? 0) - (left.rating ?? 0);

    if (ratingDifference !== 0) {
      return ratingDifference;
    }

    return (right.text ?? "").length - (left.text ?? "").length;
  });

  return sorted.slice(0, MAX_REVIEWS);
}

async function fetchPlaceId(apiKey: string) {
  const url = new URL("https://maps.googleapis.com/maps/api/place/findplacefromtext/json");
  url.searchParams.set("input", PLACE_QUERY);
  url.searchParams.set("inputtype", "textquery");
  url.searchParams.set("fields", "place_id");
  url.searchParams.set("key", apiKey);

  const response = await fetch(url.toString(), {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Google Find Place request failed.");
  }

  const payload = (await response.json()) as {
    candidates?: Array<{ place_id?: string }>;
    status?: string;
  };

  const placeId = payload.candidates?.[0]?.place_id;

  if (!placeId) {
    throw new Error(`Google Find Place returned no place_id. Status: ${payload.status ?? "unknown"}`);
  }

  return placeId;
}

async function fetchPlaceDetails(apiKey: string, placeId: string) {
  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "rating,user_ratings_total,reviews");
  url.searchParams.set("reviews_sort", "newest");
  url.searchParams.set("key", apiKey);

  const response = await fetch(url.toString(), {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Google Place Details request failed.");
  }

  return (await response.json()) as {
    result?: {
      rating?: number;
      user_ratings_total?: number;
      reviews?: GoogleReview[];
    };
    status?: string;
  };
}

function normalizeReviews(reviews: GoogleReview[] = []) {
  const normalizedSource = reviews
    .map((review) => ({
      author: repairEncoding(review.author_name ?? "").trim(),
      rating: review.rating ?? 0,
      text: repairEncoding(review.text ?? "").trim(),
    }))
    .filter((review) => review.author && review.text);

  const deduped = normalizedSource.filter((review, index, source) => {
    return (
      source.findIndex(
        (candidate) =>
          candidate.author === review.author &&
          candidate.text === review.text &&
          candidate.rating === review.rating,
      ) === index
    );
  });

  const selected = selectTrustedReviews(deduped).map((review) => ({
    author: review.author,
    rating: review.rating,
    text: review.text,
  }));

  console.info("[google-reviews] pipeline", {
    received: reviews.length,
    normalized: normalizedSource.length,
    deduped: deduped.length,
    sent: selected.length,
  });

  return selected;
}

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "Missing GOOGLE_PLACES_API_KEY." }, { status: 500 });
    }

    if (cache && Date.now() - cache.timestamp < CACHE_DURATION_MS) {
      return NextResponse.json(cache.data);
    }

    const placeId = await fetchPlaceId(apiKey);
    const payload = await fetchPlaceDetails(apiKey, placeId);

    const normalized = {
      rating: payload.result?.rating ?? 0,
      total: payload.result?.user_ratings_total ?? 0,
      reviews: normalizeReviews(payload.result?.reviews),
    };

    cache = {
      timestamp: Date.now(),
      data: normalized,
    };

    return NextResponse.json(normalized);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Google reviews error.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
