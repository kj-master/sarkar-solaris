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
      "A practical guide to finding the best perfume for your personality and skin type: fragrance families, testing, and building a signature scent.",
    excerpt:
      "Fragrance families, skin chemistry and five personality types, matched to Throne, Orion, Noble, Regal and Solaris.",
    category: "Fragrance Guide",
    readingTime: "5 min read",
    primaryKeyword: "best perfume",
    secondaryKeywords: [
      "how to choose a perfume",
      "perfume for your personality",
      "perfume for different skin types",
    ],
    h2s: [
      "Why the best perfume is a personal decision",
      "Start with fragrance families",
      "Skin type changes everything",
      "Five personality types and the Sarkar perfume that fits",
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
      "Sarkar Throne, Orion, Noble, Regal and Solaris perfume bottles grouped together under warm golden light",
    datePublished: "2026-08-27",
    dateModified: "2026-08-30",
    related: ["eau-de-parfum-vs-eau-de-toilette-vs-attar", "best-perfumes-for-evening-wear"],
  },
  {
    slug: "eau-de-parfum-vs-eau-de-toilette-vs-attar",
    h1: "Eau de Parfum vs Eau de Toilette vs Attar: Which Is Best for You?",
    seoTitle: "Eau de Parfum vs Eau de Toilette vs Attar",
    description:
      "Eau de parfum, eau de toilette or attar? A clear guide to concentration, character and projection so you can choose by preference, not price.",
    excerpt:
      "Concentration, character and projection explained, plus where the Sarkar parfums sit and how to choose without defaulting to price.",
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
      "Where the Sarkar parfums sit",
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
    cta: "Meet Solaris, power in a warmer light.",
    image: concentrationImg,
    imageAlt:
      "Sarkar Throne, Orion, Noble, Regal and Solaris parfum bottles lined up side by side on a dark surface",
    datePublished: "2026-08-27",
    dateModified: "2026-08-30",
    related: ["how-to-choose-the-right-perfume", "fragrance-layering-guide"],
  },
  {
    slug: "best-perfumes-for-evening-wear",
    h1: "Best Perfumes for Evening Wear: Fragrances That Leave an Impression",
    seoTitle: "Best Perfume for Evening Wear: A Guide",
    description:
      "How to choose the best perfume for evening wear, with two Sarkar recommendations: Solaris for warmth and Regal for oud-led statement nights.",
    excerpt:
      "Warm, woody and amber compositions, and the two Sarkar parfums built for the hours after sundown.",
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
      "Two Sarkar perfumes we recommend for evening wear",
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
      "Sarkar Solaris and Sarkar Regal perfume bottles together in a low-lit evening setting with warm amber light",
    datePublished: "2026-08-27",
    dateModified: "2026-08-30",
    related: ["how-to-choose-the-right-perfume", "fragrance-layering-guide"],
  },
  {
    slug: "fragrance-layering-guide",
    h1: "The Art of Fragrance Layering: How to Make Your Perfume Last All Day",
    seoTitle: "Fragrance Layering: Make Perfume Last Longer",
    description:
      "A guide to fragrance layering: what makes a perfume last, the long-wearing notes in every Sarkar parfum, and the habits that cut a scent short.",
    excerpt:
      "What actually makes a scent last, the long-wearing notes in each Sarkar parfum, and a simple layering routine.",
    category: "How-To",
    readingTime: "4 min read",
    primaryKeyword: "perfume and fragrances",
    secondaryKeywords: [
      "how to layer perfumes",
      "fragrance layering",
      "how to make perfume last longer",
    ],
    h2s: [
      "What makes a perfume last longer",
      "What fragrance layering means",
      "The long-wearing notes in each Sarkar perfume",
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
      "Sarkar parfum bottle on dark wood in a sunlit interior, warm afternoon light",
    datePublished: "2026-08-27",
    dateModified: "2026-08-30",
    related: ["how-to-choose-the-right-perfume", "eau-de-parfum-vs-eau-de-toilette-vs-attar"],
  },
];

export const getPost = (slug: string): BlogPost =>
  posts.find((p) => p.slug === slug) as BlogPost;
