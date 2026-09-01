/**
 * SARKAR JOURNAL — content + on-page SEO data model.
 *
 * Every field here is the single source of truth for the article routes,
 * the /blog listing page, the sitemap and the BlogPosting JSON-LD.
 */

import concentrationImg from "@/assets/sarkar-perfume-range-lineup.webp";
import chooseImg from "@/assets/sarkar-perfume-range-personality.webp";
import eveningImg from "@/assets/sarkar-solaris-regal-evening-perfume.webp";
import layeringImg from "@/assets/solaris-interior.webp";

export const SITE_URL = "https://sarkar-solaris.lovable.app";
export const SHOP_URL = "https://www.sarkar.store/collections/shop-all";
export const SOLARIS_PATH = "/perfumes/solaris";

export interface BlogPost {
  slug: string;
  /** On-page H1 */
  h1: string;
  /** <title> — under 60 characters */
  seoTitle: string;
  /** meta description — under 155 characters */
  description: string;
  excerpt: string;
  category: string;
  readingTime: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  h2s: string[];
  internalLinks: string[];
  externalLink: { label: string; href: string };
  cta: string;
  image: string;
  imageAlt: string;
  datePublished: string;
  dateModified: string;
  /** slugs of related journal articles */
  related: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "how-to-choose-the-right-perfume",
    h1: "How to Choose the Right Perfume for Your Personality and Skin Type",
    seoTitle: "How to Choose the Best Perfume for You",
    description:
      "A practical guide to finding the best perfume for your personality and skin type — fragrance families, testing, and building a signature scent.",
    excerpt:
      "Fragrance families, skin chemistry and the quiet art of testing properly — how to find a scent that reads as yours.",
    category: "Fragrance Guide",
    readingTime: "4 min read",
    primaryKeyword: "best perfume",
    secondaryKeywords: [
      "how to choose a perfume",
      "perfume for your personality",
      "perfume for different skin types",
    ],
    h2s: [
      "Why the best perfume is a personal decision",
      "Start with fragrance families",
      "Let personality guide the register, not the rules",
      "Skin type changes everything",
      "How to test a fragrance properly",
      "Finding a signature scent",
      "Occasion and season",
    ],
    internalLinks: [
      "/blog/eau-de-parfum-vs-eau-de-toilette-vs-attar",
      "/blog/best-perfumes-for-evening-wear",
      "/perfumes/solaris",
    ],
    externalLink: {
      label: "International Fragrance Association",
      href: "https://ifrafragrance.org/",
    },
    cta: "Discover the Sarkar collection.",
    image: chooseImg,
    imageAlt:
      "Polished sandalwood blocks and shavings lit by warm golden light, a classic woody fragrance material",
    datePublished: "2026-08-27",
    dateModified: "2026-08-27",
    related: ["eau-de-parfum-vs-eau-de-toilette-vs-attar", "best-perfumes-for-evening-wear"],
  },
  {
    slug: "eau-de-parfum-vs-eau-de-toilette-vs-attar",
    h1: "Eau de Parfum vs Eau de Toilette vs Attar: Which Is Best for You?",
    seoTitle: "Eau de Parfum vs Eau de Toilette vs Attar",
    description:
      "Eau de parfum, eau de toilette or attar? A clear guide to concentration, character and projection so you can choose by preference, not price.",
    excerpt:
      "Concentration, character and projection explained — and how to choose between the three formats without defaulting to price.",
    category: "Fragrance Basics",
    readingTime: "4 min read",
    primaryKeyword: "eau de parfum",
    secondaryKeywords: [
      "eau de parfum vs eau de toilette",
      "attar vs perfume",
      "types of perfume",
    ],
    h2s: [
      "What eau de parfum actually means",
      "What eau de toilette means",
      "What attar means",
      "A side-by-side comparison",
      "Why concentration matters",
      "Choosing by preference rather than price",
    ],
    internalLinks: [
      "/blog/how-to-choose-the-right-perfume",
      "/blog/fragrance-layering-guide",
      "/perfumes/solaris",
    ],
    externalLink: {
      label: "Britannica on perfume composition",
      href: "https://www.britannica.com/art/perfume",
    },
    cta: "Meet Solaris — power, in a warmer light.",
    image: concentrationImg,
    imageAlt:
      "Close-up of the Sarkar chess-king cap and golden amber eau de parfum glass",
    datePublished: "2026-08-27",
    dateModified: "2026-08-27",
    related: ["how-to-choose-the-right-perfume", "fragrance-layering-guide"],
  },
  {
    slug: "best-perfumes-for-evening-wear",
    h1: "Best Perfumes for Evening Wear: Fragrances That Leave an Impression",
    seoTitle: "Best Perfume for Evening Wear: A Guide",
    description:
      "How to choose the best perfume for evening wear — warm, woody and amber profiles that create presence at dinners, weddings and late hours.",
    excerpt:
      "Warm, woody and amber compositions, and why the hours after sundown ask something different of a fragrance.",
    category: "Occasion",
    readingTime: "4 min read",
    primaryKeyword: "best perfume",
    secondaryKeywords: [
      "best evening perfumes",
      "perfume for evening wear",
      "long lasting perfume for night",
    ],
    h2s: [
      "Why the best perfume for evening differs from a daytime scent",
      "The profiles that suit the hours after sundown",
      "Dinners, rooftops and dates",
      "Weddings and special occasions",
      "Projection and trail",
      "Sophisticated rather than sweet",
    ],
    internalLinks: [
      "/blog/how-to-choose-the-right-perfume",
      "/perfumes/solaris",
      "/blog/fragrance-layering-guide",
    ],
    externalLink: {
      label: "Britannica on perfume families",
      href: "https://www.britannica.com/art/perfume",
    },
    cta: "Find the fragrance that leaves your signature.",
    image: eveningImg,
    imageAlt:
      "Sarkar Solaris perfume bottle in a dark evening setting with warm ambient light",
    datePublished: "2026-08-27",
    dateModified: "2026-08-27",
    related: ["how-to-choose-the-right-perfume", "fragrance-layering-guide"],
  },
  {
    slug: "fragrance-layering-guide",
    h1: "The Art of Fragrance Layering: How to Make Your Perfume Last All Day",
    seoTitle: "Fragrance Layering: Make Perfume Last Longer",
    description:
      "A step-by-step guide to fragrance layering — complementary profiles, body products, pulse points and the mistakes that cut a scent short.",
    excerpt:
      "A step-by-step method for building depth, from body products to pulse points — and the habits that quietly shorten a scent.",
    category: "How-To",
    readingTime: "4 min read",
    primaryKeyword: "perfume and fragrances",
    secondaryKeywords: [
      "how to layer perfumes",
      "fragrance layering",
      "how to make perfume last longer",
    ],
    h2s: [
      "What fragrance layering means",
      "Choosing complementary profiles",
      "Build from the skin outward",
      "Where to apply",
      "How clothing, skin and weather change perfume and fragrances",
      "Common mistakes",
      "A simple beginner routine",
    ],
    internalLinks: [
      "/blog/how-to-choose-the-right-perfume",
      "/blog/eau-de-parfum-vs-eau-de-toilette-vs-attar",
      "/perfumes/solaris",
    ],
    externalLink: {
      label: "International Fragrance Association",
      href: "https://ifrafragrance.org/",
    },
    cta: "Discover the Sarkar collection.",
    image: layeringImg,
    imageAlt:
      "Sarkar perfume bottle on dark wood in a sunlit interior, warm afternoon light",
    datePublished: "2026-08-27",
    dateModified: "2026-08-27",
    related: ["how-to-choose-the-right-perfume", "eau-de-parfum-vs-eau-de-toilette-vs-attar"],
  },
];

export const getPost = (slug: string): BlogPost =>
  posts.find((p) => p.slug === slug) as BlogPost;
