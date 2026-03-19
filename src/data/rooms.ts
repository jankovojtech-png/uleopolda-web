export type Room = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  capacity: string;
  capacityNote: string;
  priceFrom: string;
  features: string[];
  coverImage: string;
  gallery: string[];
};

export const rooms: Room[] = [
  {
    slug: "maly-apartman",
    title: "Malý apartmán",
    shortDescription:
      "Kompaktní apartmán s vlastním zázemím, ideální pro klidný pobyt jednotlivců i párů.",
    description:
      "Malý apartmán nabízí útulné a klidné zázemí pro hosty, kteří hledají soukromí a pohodlí. Hodí se pro kratší i delší pobyt a díky vlastnímu zázemí působí velmi prakticky a příjemně.",
    capacity: "1-3 osoby",
    capacityNote: "až pro 3 osoby",
    priceFrom: "od 1590 Kč / noc",
    features: [
      "vlastní koupelna",
      "Wi-Fi zdarma",
      "TV",
      "klimatizace",
      "snídaně za příplatek",
      "vlastní vstupní předsíň",
      "bezpečnostní zámkový systém",
    ],
    coverImage: "/images/30.jpg",
    gallery: ["/images/30.jpg", "/images/34.jpg", "/images/35.jpg", "/images/36.jpg", "/images/37.jpg"],
  },
  {
    slug: "velky-apartman",
    title: "Velký apartmán",
    shortDescription: "Prostornější apartmán vhodný pro delší pobyty nebo více osob.",
    description:
      "Velký apartmán je vhodný pro hosty, kteří chtějí více prostoru a pohodlí při delším pobytu. Ocení jej pracovní skupiny, páry i hosté, kteří mají rádi vzdušné a prakticky řešené ubytování.",
    capacity: "1-4 osoby",
    capacityNote: "až pro 4 osoby",
    priceFrom: "od 1740 Kč / noc",
    features: [
      "vlastní koupelna",
      "Wi-Fi zdarma",
      "TV",
      "klimatizace",
      "snídaně za příplatek",
      "vlastní vstupní předsíň",
      "bezpečnostní zámkový systém",
    ],
    coverImage: "/images/33.jpg",
    gallery: ["/images/33.jpg", "/images/38.jpg", "/images/39.jpg", "/images/45.jpg"],
  },
  {
    slug: "dvouluzkovy-pokoj",
    title: "Dvoulůžkový pokoj",
    shortDescription: "Pohodlné ubytování pro dvě osoby s důrazem na klid a komfort.",
    description:
      "Dvoulůžkový pokoj je jednoduchou a pohodlnou volbou pro páry i hosty na pracovních cestách. Nabízí vše potřebné pro příjemný pobyt v klidném prostředí rodinného penzionu.",
    capacity: "1-2 osoby",
    capacityNote: "až pro 3 osoby",
    priceFrom: "od 1490 Kč / noc",
    features: [
      "vlastní koupelna",
      "Wi-Fi zdarma",
      "TV",
      "klimatizace",
      "snídaně za příplatek",
      "bezpečnostní zámkový systém",
    ],
    coverImage: "/images/18.jpg",
    gallery: ["/images/11.jpg", "/images/12.jpg", "/images/4.jpg", "/images/5.jpg", "/images/1.jpg", "/images/23.jpg"],
  },
  {
    slug: "jednoluzkovy-pokoj",
    title: "Jednolůžkový pokoj",
    shortDescription: "Praktické a útulné řešení pro jednotlivce.",
    description:
      "Jednolůžkový pokoj je ideální pro jednotlivce, kteří chtějí čisté, klidné a praktické ubytování. Hodí se pro pracovní pobyty i kratší zastavení v Brně.",
    capacity: "1 osoba",
    capacityNote: "pro 1 osobu",
    priceFrom: "od 1440 Kč / noc",
    features: [
      "vlastní koupelna",
      "Wi-Fi zdarma",
      "TV",
      "klimatizace",
      "snídaně za příplatek",
      "bezpečnostní zámkový systém",
    ],
    coverImage: "/images/24.jpg",
    gallery: ["/images/24.jpg", "/images/40.jpg", "/images/41.jpg", "/images/42.jpg", "/images/43.jpg", "/images/44.jpg"],
  },
];
