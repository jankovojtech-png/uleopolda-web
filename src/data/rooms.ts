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
    shortDescription: "Kompaktní apartmán s vlastním zázemím pro jednotlivce i páry.",
    description:
      "Malý apartmán nabízí klidné a praktické zázemí pro kratší i delší pobyt. Díky vlastní koupelně a oddělenému prostoru je vhodný pro hosty, kteří chtějí více soukromí a pohodlí.",
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
    shortDescription: "Prostornější apartmán pro delší pobyty, rodiny nebo více osob.",
    description:
      "Velký apartmán ocení hosté, kteří chtějí více prostoru a pohodlí. Hodí se pro delší pobyty, pracovní skupiny i rodiny, které hledají praktické a klidné ubytování v Brně.",
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
    shortDescription: "Pohodlný pokoj pro dvě osoby, vhodný i na pracovní cestu.",
    description:
      "Dvoulůžkový pokoj je dobrá volba pro páry i hosty na pracovní cestě. Nabízí vše potřebné pro klidný pobyt a jednoduché přespání v příjemném prostředí rodinného penzionu.",
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
    shortDescription: "Praktický pokoj pro jednotlivce na krátký i pracovní pobyt.",
    description:
      "Jednolůžkový pokoj je vhodný pro hosty, kteří hledají čisté, klidné a jednoduché ubytování pro jednu osobu. Hodí se pro pracovní pobyty i kratší zastavení v Brně.",
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
