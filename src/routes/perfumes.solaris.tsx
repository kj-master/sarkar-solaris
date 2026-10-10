import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";

import heroImg from "@/assets/solaris-hero.webp";
import heroImgSm from "@/assets/solaris-hero-640.webp";
import terraceImg from "@/assets/solaris-terrace.webp";
import interiorImg from "@/assets/solaris-interior.webp";
import nightImg from "@/assets/solaris-night.webp";
import closeupImg from "@/assets/solaris-closeup.webp";
import lifestyleImg from "@/assets/solaris-lifestyle.webp";
import vanillaImg from "@/assets/note-vanilla.webp";
import sandalwoodImg from "@/assets/note-sandalwood.webp";
import amberImg from "@/assets/note-amber.webp";
import throneImg from "@/assets/range-throne.webp";
import orionImg from "@/assets/range-orion.webp";
import nobleImg from "@/assets/range-noble.webp";
import regalImg from "@/assets/range-regal.webp";
import { ProjectLinks } from "@/components/project-links";
import { breadcrumbs, authorPerson, bhuvanBamPerson, projectPublisher, AUTHOR_BYLINE, AUTHOR_BIO, BRAND_DISCLAIMER, PUBLISHED_DATE, UPDATED_DATE, formatDate } from "@/content/site-seo";

const faqs = [
  ["What is Sarkar Solaris?", "Sarkar Solaris is an independent university concept for a 100 ml Eau de Parfum built around vanilla, sandalwood and amber. It was created by Kanan Jain as a brand-extension study inspired by the Sarkar fragrance brand. It is a concept prototype, not an official Sarkar product, and it is not affiliated with or endorsed by Sarkar or Bhuvan Bam."],
  ["What does Sarkar Solaris smell like?", "Sarkar Solaris is designed to smell warm, creamy and woody. You would first notice smooth vanilla, then soft sandalwood, settling into a golden amber base. The brief was quiet confidence: a scent that feels composed and refined rather than loud or sugary. This describes the intended profile of the concept, not a lab-tested formula."],
  ["What are the notes in Sarkar Solaris?", "Sarkar Solaris has a simple three-tier note pyramid. The top note is vanilla, the heart note is sandalwood and the base note is amber. There are no other listed notes. Keeping the pyramid to three materials was a deliberate choice so each one stays easy to recognise."],
  ["Who is Sarkar Solaris for?", "Sarkar Solaris is positioned as a unisex fragrance for you if you prefer warm, woody scents over fresh or citrus ones. The concept suits evening dinners, cooler rooftop evenings and special occasions where you want presence without projection that feels performed."],
  ["How much does Sarkar Solaris cost?", "The Solaris page shows an illustrative MRP of ₹1,499 for 100 ml, inclusive of all taxes. That price was set to sit alongside the existing Sarkar range for the assignment. Because Solaris is a concept prototype, you cannot actually buy it and no payment is taken."],
  ["How long does shipping take?", "The concept page states that orders ship within 24–36 hours of ordering. That dispatch window is illustrative and models a typical fragrance store. Since Sarkar Solaris is a university prototype, nothing is shipped. For real Sarkar orders, use the official Sarkar shipping policy."],
  ["Is Sarkar Solaris an official Sarkar perfume?", "No. Sarkar Solaris is an independent university concept inspired by the Sarkar fragrance brand by Bhuvan Bam. It is not affiliated with, endorsed by or operated by Bhuvan Bam or the official brand. For real Sarkar products, visit sarkar.store."],
] as const;

const sources = [
  { lead: "According to Encyclopaedia Britannica,", text: "perfumes are built from top, middle and base notes that evaporate at different rates.", label: "Britannica: Perfume", href: "https://www.britannica.com/art/perfume" },
  { lead: "According to Britannica,", text: "vanilla flavour and aroma come from the cured pods of the vanilla orchid.", label: "Britannica: Vanilla", href: "https://www.britannica.com/plant/vanilla" },
  { lead: "According to Britannica,", text: "sandalwood oil is distilled from the fragrant heartwood of the sandalwood tree.", label: "Britannica: Sandalwood", href: "https://www.britannica.com/plant/sandalwood" },
  { lead: "According to Britannica,", text: "true amber is fossilised tree resin; in perfumery, amber usually describes a warm, resinous accord.", label: "Britannica: Amber", href: "https://www.britannica.com/science/amber" },
  { lead: "According to the International Fragrance Association (IFRA),", text: "fragrance ingredients are governed by industry safety standards.", label: "IFRA: Standards", href: "https://ifrafragrance.org/safe-use/introduction" },
];

const TITLE = "Sarkar Solaris Perfume | Quiet. Golden. Commanding.";
const DESCRIPTION =
  "Explore Sarkar Solaris, a university fragrance concept with vanilla, sandalwood and amber. Warm, woody and quietly commanding.";
const SITE_URL = "https://sarkar-solaris.lovable.app";
const URL_PATH = `${SITE_URL}/perfumes/solaris`;
const HERO_URL = `${SITE_URL}${heroImg}`;

export const Route = createFileRoute("/perfumes/solaris")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { property: "og:url", content: URL_PATH },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [
      { rel: "canonical", href: URL_PATH },
      {
        rel: "preload",
        as: "image",
        href: heroImg,
        imagesrcset: `${heroImgSm} 640w, ${heroImg} 928w`,
        imagesizes: "(max-width: 767px) 100vw, 50vw",
        fetchpriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Sarkar Solaris",
          brand: { "@type": "Brand", name: "SARKAR" },
          category: "Eau de Parfum",
          description: DESCRIPTION,
          image: HERO_URL,
          url: URL_PATH,
          sku: "SARKAR-SOLARIS-100ML-CONCEPT",
          author: authorPerson,
          mentions: bhuvanBamPerson,
          datePublished: PUBLISHED_DATE,
          offers: {
            "@type": "Offer",
            price: "1499",
            priceCurrency: "INR",
            // Concept prototype: shown as OutOfStock because it cannot actually be bought.
            availability: "https://schema.org/OutOfStock",
            itemCondition: "https://schema.org/NewCondition",
            priceValidUntil: "2026-12-31",
            url: `${URL_PATH}#buy`,
            seller: projectPublisher,
          },
          // TODO: add AggregateRating/Review only if real reviews exist.
          additionalProperty: [{
            "@type": "PropertyValue",
            name: "Project status",
            value: "University assignment concept; not an officially launched Sarkar product",
          }, {
            "@type": "PropertyValue",
            name: "Illustrative concept price",
            value: "INR 1499, inclusive of taxes; not a commercial offer",
          }],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: TITLE,
          url: URL_PATH,
          datePublished: PUBLISHED_DATE,
          dateModified: UPDATED_DATE,
          author: authorPerson,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbs([
          { name: "Solaris concept", path: "/perfumes/solaris" },
        ])),
      },
    ],
  }),
  component: SolarisPage,
});

const notes = [
  {
    tier: "Top Notes",
    name: "Vanilla",
    image: vanillaImg,
    alt: "Sarkar Solaris vanilla fragrance note — split vanilla pods lit by warm golden light",
    words: ["Warm", "Creamy", "Smooth"],
    copy: "Vanilla is the top note of Sarkar Solaris, so it is the first thing you notice. It gives the concept a warm, creamy opening that reads as smooth texture rather than sugary sweetness, setting a calm, confident tone before the sandalwood heart and amber base take over.",
  },
  {
    tier: "Heart Notes",
    name: "Sandalwood",
    image: sandalwoodImg,
    alt: "Sarkar Solaris sandalwood fragrance note — polished sandalwood blocks and shavings",
    words: ["Woody", "Soft", "Grounded"],
    copy: "In the Solaris concept, sandalwood is the heart note. It adds a soft, grounded woody character to the warm fragrance profile.",
  },
  {
    tier: "Base Notes",
    name: "Amber",
    image: amberImg,
    alt: "Sarkar Solaris amber fragrance note — translucent golden amber resin on dark stone",
    words: ["Golden", "Deep", "Warm"],
    copy: "In the Solaris concept, amber is the base note. It represents golden depth and warmth; a lasting trail is a design intention, not a verified wear-time claim.",
  },
];

const campaign = [
  {
    src: terraceImg,
    alt: "Sarkar Solaris perfume on a terrace ledge at golden hour",
    caption: "Golden hour · Terrace",
  },
  {
    src: interiorImg,
    alt: "Sarkar Solaris perfume bottle on dark wood in a sunlit interior",
    caption: "Late afternoon · Interior",
  },
  {
    src: nightImg,
    alt: "Sarkar Solaris perfume bottle in a dark evening setting with warm ambient light",
    caption: "After dark · Ambient",
  },
  {
    src: closeupImg,
    alt: "Close-up of the Sarkar Solaris chess-king cap and golden amber glass",
    caption: "Detail · Chess-king cap",
  },
];

const details = [
  { label: "Fragrance Family", value: "Warm / Woody / Amber" },
  { label: "Size", value: "100 ML" },
  { label: "Concentration", value: "Eau de Parfum" },
  { label: "Notes", value: "Vanilla • Sandalwood • Amber" },
  { label: "Shipping", value: "Ships within 24–36 hours of ordering" },
];

const reviews = [
  {
    quote:
      "The vanilla reads creamy rather than sweet, and the sandalwood keeps it composed. It never feels loud.",
    name: "A. M.",
  },
  {
    quote:
      "Amber gives it a golden depth that stays close to the skin. Still there hours into an evening.",
    name: "R. K.",
  },
  {
    quote:
      "Smooth and sophisticated. It reads as confidence without any effort behind it.",
    name: "S. D.",
  },
  {
    quote:
      "Warmth with restraint — the woody base makes it feel considered rather than sugary.",
    name: "V. N.",
  },
];

const range = [
  {
    name: "THRONE",
    descriptor: "WARM · LEATHER · AMBER",
    image: throneImg,
    href: "https://www.sarkar.store/products/throne",
  },
  {
    name: "ORION",
    descriptor: "FRESH · CITRUS · AROMATIC",
    image: orionImg,
    href: "https://www.sarkar.store/products/orion",
  },
  {
    name: "NOBLE",
    descriptor: "FRESH · WOODY · AROMATIC",
    image: nobleImg,
    href: "https://www.sarkar.store/products/noble",
  },
  {
    name: "REGAL",
    descriptor: "OUD · SMOKY · MUSK",
    image: regalImg,
    href: "https://www.sarkar.store/products/regal",
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SolarisPage() {
  const [cart, setCart] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const nudge = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(360, el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 md:backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
          <Link
            to="/perfumes/solaris"
            className="font-display text-base font-medium tracking-[0.42em] text-ink"
            aria-label="SARKAR home"
          >
            SARKAR
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            <a
              href="https://www.sarkar.store/"
              className="text-[0.62rem] font-light uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-ink"
            >
              Home
            </a>
            <a
              href="https://www.sarkar.store/collections/shop-all"
              className="text-[0.62rem] font-light uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-ink"
            >
              Shop
            </a>
            <Link
              to="/perfumes/solaris"
              className="text-[0.62rem] font-light uppercase tracking-[0.28em] text-ink"
            >
              Solaris
            </Link>
            <Link
              to="/blog"
              className="text-[0.62rem] font-light uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-ink"
            >
              Blogs
            </Link>
            <a
              href="https://www.sarkar.store/pages/know-sarkar"
              className="text-[0.62rem] font-light uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-ink"
            >
              Know Sarkar
            </a>

          </nav>
          <button
            type="button"
            onClick={() => scrollToId("buy")}
            className="text-[0.62rem] font-light uppercase tracking-[0.28em] text-ink"
            aria-label={`Cart, ${cart} item${cart === 1 ? "" : "s"}`}
          >
            Cart ({cart})
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:gap-16 md:px-8 md:py-20">
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">
                The Sarkar Range
              </p>
              <h1 className="mt-5 font-display text-5xl font-light leading-[0.95] tracking-tight text-ink md:text-7xl">
                Sarkar Solaris
              </h1>
              <p className="mt-5 text-[0.66rem] uppercase tracking-[0.36em] text-gold">
                QUIET&nbsp;&nbsp;• RADIENT&nbsp;• COMMANDING
              </p>
              <div className="rule-gold my-7 w-32" />
              <p className="max-w-md text-sm font-light leading-relaxed text-muted-foreground">
                Sarkar Solaris is a 100 ml Eau de Parfum concept where vanilla, sandalwood
                and amber come together in a warm, composed trail, a radiant expression of
                power that never needs to announce itself. It is an independent university
                prototype inspired by the Sarkar range, shown at an illustrative ₹1,499.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => scrollToId("buy")}
                  className="min-h-11 bg-ink px-8 text-[0.62rem] uppercase tracking-[0.28em] text-background transition-opacity hover:opacity-85"
                >
                  Buy Solaris
                </button>
                <button
                  type="button"
                  onClick={() => scrollToId("notes")}
                  className="min-h-11 border border-ink px-8 text-[0.62rem] uppercase tracking-[0.28em] text-ink transition-colors hover:bg-ink hover:text-background"
                >
                  Discover the Notes
                </button>
              </div>
            </div>

            <figure className="surface-ink relative flex items-center justify-center overflow-hidden">
              <img
                src={heroImg}
                srcSet={`${heroImgSm} 640w, ${heroImg} 928w`}
                sizes="(max-width: 767px) 100vw, 50vw"
                alt="Sarkar Solaris perfume bottle in a dark cinematic setting with golden light"
                width={928}
                height={1152}
                fetchPriority="high"
                decoding="async"
                className="mx-auto h-auto max-h-[620px] w-full object-contain"
              />
            </figure>
          </div>
        </section>

        {/* STORY */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-16 md:px-8 md:py-24">
            <figure className="order-2 overflow-hidden md:order-1">
              <img
                src={lifestyleImg}
                alt="Sarkar Solaris perfume on a dark marble table in an evening rooftop setting"
                width={1100}
                height={821}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="order-1 md:order-2">
              <p className="text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">
                The Story
              </p>
              <h2 className="mt-5 font-display text-3xl font-light leading-tight text-ink md:text-4xl">
                Power, In a Warmer Light
              </h2>
              <div className="rule-gold my-6 w-24" />
              <p className="max-w-xl text-sm font-light leading-relaxed text-muted-foreground">
                Sarkar Solaris is a premium, unisex Eau de Parfum concept created for a
                university assignment within the existing Sarkar brand system. Its three
                notes are vanilla, sandalwood and amber, expressing quiet power through
                warmth rather than aggression.
              </p>
              <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-muted-foreground">
                The concept interprets the brand’s composed presence in a warmer light.
                For the real brand’s story, see the{" "}
                <a href="https://www.sarkar.store/pages/know-sarkar" className="underline underline-offset-4">official Sarkar introduction</a>.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IT SMELLS LIKE + MADE FOR */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:gap-20 md:px-8 md:py-24">
            <article>
              <h2 className="font-display text-2xl font-light leading-tight text-ink md:text-3xl">
                What does Sarkar Solaris smell like?
              </h2>
              <div className="rule-gold my-6 w-20" />
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                Sarkar Solaris smells warm, creamy and woody. You meet smooth vanilla first,
                then soft sandalwood, and finally a golden amber base. The vanilla is meant to
                feel like texture rather than sugar, so the scent reads composed instead of
                sweet. This is the intended profile of a university concept, not an
                independently tested formula or a promised wear time.
              </p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {["Warm", "Creamy", "Woody", "Golden", "Refined"].map((w) => (
                  <li
                    key={w}
                    className="border border-border bg-background px-4 py-2 text-[0.6rem] uppercase tracking-[0.24em] text-ink-soft"
                  >
                    {w}
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <h2 className="font-display text-2xl font-light leading-tight text-ink md:text-3xl">
                Who is Sarkar Solaris for?
              </h2>
              <div className="rule-gold my-6 w-20" />
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                Solaris is a unisex concept for you if you prefer warm, woody scents over
                fresh ones. It suits low light and considered rooms.
              </p>
              <dl className="mt-7 divide-y divide-border border-y border-border">
                {[
                  ["Evening dinners", "Where warmth carries better than freshness."],
                  ["Rooftop evenings", "Open air, cooler hours, a trail that holds."],
                  ["Special occasions", "When presence should be felt, not performed."],
                ].map(([t, d]) => (
                  <div key={t} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-8">
                    <dt className="w-48 shrink-0 text-[0.62rem] uppercase tracking-[0.24em] text-ink">
                      {t}
                    </dt>
                    <dd className="text-sm font-light text-muted-foreground">{d}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </div>
        </section>

        {/* NOTES */}
        <section id="notes" className="border-b border-border scroll-mt-20">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
            <div className="max-w-xl">
              <p className="text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">
                Composition
              </p>
              <h2 className="mt-4 font-display text-3xl font-light leading-tight text-ink md:text-4xl">
                What are the notes in Sarkar Solaris?
              </h2>
              <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                Top: vanilla. Heart: sandalwood. Base: amber.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
              {notes.map((n) => (
                <figure key={n.name} className="group">
                  <div className="overflow-hidden bg-ink">
                    <img
                      src={n.image}
                      alt={n.alt}
                      width={760}
                      height={950}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="pt-6">
                    <p className="text-[0.58rem] uppercase tracking-[0.32em] text-gold">
                      {n.tier}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-light text-ink">{n.name}</h3>
                    <p className="mt-3 text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
                      {n.words.join(" · ")}
                    </p>
                    <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                      {n.copy}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CAMPAIGN */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
            <h2 className="font-display text-3xl font-light leading-tight text-ink md:text-4xl">
              Solaris&nbsp;
            </h2>
            <div className="rule-gold my-6 w-24" />
            <div className="grid gap-4 sm:grid-cols-2">
              {campaign.map((c) => (
                <figure key={c.caption} className="overflow-hidden bg-ink">
                  <img
                    src={c.src}
                    alt={c.alt}
                    width={1100}
                    height={821}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="bg-background pt-3 text-[0.58rem] uppercase tracking-[0.28em] text-muted-foreground">
                    {c.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* PURCHASE */}
        <section id="buy" className="border-b border-border scroll-mt-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
            <figure className="overflow-hidden bg-ink">
              <img
                src={terraceImg}
                alt="Sarkar Solaris perfume 100 ml bottle photographed at golden hour"
                width={1100}
                height={821}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </figure>

            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">
                Discover Solaris
              </p>
              <h2 className="mt-4 font-display text-3xl font-light leading-tight text-ink md:text-4xl">
                Sarkar Solaris
              </h2>
              <p className="mt-3 text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
                Eau de Parfum · 100 ML
              </p>
              <p className="mt-2 text-[0.62rem] uppercase tracking-[0.28em] text-gold">
                Vanilla • Sandalwood • Amber
              </p>

              <p className="mt-8 font-display text-3xl font-light text-ink">MRP ₹1,499</p>
              <p className="mt-1 text-xs font-light text-muted-foreground">
                MRP incl. of all taxes
              </p>
              <p className="mt-1 text-xs font-light text-muted-foreground">
                Ships within 24–36 hours of ordering
              </p>
              <p className="mt-4 border-l-2 border-gold pl-4 text-xs font-light leading-relaxed text-muted-foreground">
                University concept prototype. Solaris is not an officially launched Sarkar product; price, shipping and checkout are illustrative.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setCart((c) => c + 1)}
                  className="min-h-11 bg-ink px-8 text-[0.62rem] uppercase tracking-[0.28em] text-background transition-opacity hover:opacity-85"
                >
                  Buy Solaris
                </button>
                <button
                  type="button"
                  onClick={() => setCart((c) => c + 1)}
                  className="min-h-11 border border-ink px-8 text-[0.62rem] uppercase tracking-[0.28em] text-ink transition-colors hover:bg-ink hover:text-background"
                >
                  Add to Cart
                </button>
              </div>
              <p aria-live="polite" className="mt-3 min-h-5 text-xs font-light text-muted-foreground">
                {cart > 0
                  ? `${cart} × Sarkar Solaris 100 ML in your bag — prototype checkout.`
                  : ""}
              </p>

              <dl className="mt-10 divide-y divide-border border-y border-border">
                {details.map((d) => (
                  <div key={d.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-8">
                    <dt className="w-44 shrink-0 text-[0.58rem] uppercase tracking-[0.26em] text-muted-foreground">
                      {d.label}
                    </dt>
                    <dd className="text-sm font-light text-ink">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-display text-3xl font-light leading-tight text-ink md:text-4xl">
                What do people say about Solaris?
              </h2>
              <p className="text-[0.56rem] uppercase tracking-[0.28em] text-muted-foreground">
                Illustrative customer feedback · concept prototype
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {reviews.map((r) => (
                <article
                  key={r.name}
                  className="flex flex-col justify-between border border-border bg-background p-6"
                >
                  <p className="text-sm font-light leading-relaxed text-ink-soft">
                    “{r.quote}”
                  </p>
                  <p className="mt-6 text-[0.58rem] uppercase tracking-[0.26em] text-muted-foreground">
                    {r.name}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RANGE CAROUSEL */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-3xl font-light leading-tight text-ink md:text-4xl">
                  Explore the Sarkar Range
                </h2>
                <p className="mt-3 max-w-md text-sm font-light text-muted-foreground">
                  Solaris is one expression within the larger Sarkar fragrance universe.
                </p>
              </div>
              <div className="hidden gap-2 md:flex">
                <button
                  type="button"
                  onClick={() => nudge(-1)}
                  aria-label="Scroll the Sarkar range left"
                  className="flex h-11 w-11 items-center justify-center border border-border text-ink transition-colors hover:border-gold"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => nudge(1)}
                  aria-label="Scroll the Sarkar range right"
                  className="flex h-11 w-11 items-center justify-center border border-border text-ink transition-colors hover:border-gold"
                >
                  →
                </button>
              </div>
            </div>

            <div
              ref={trackRef}
              className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
            >
              {range.map((p) => (
                <article
                  key={p.name}
                  className="w-[72vw] shrink-0 snap-start border border-border sm:w-[46vw] lg:w-[calc((100%-3rem)/4)]"
                >
                  <div className="bg-background">
                    <img
                      src={p.image}
                      alt={`Sarkar ${p.name} perfume bottle`}
                      width={700}
                      height={700}
                      loading="lazy"
                      decoding="async"
                      className="aspect-square w-full object-contain"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-normal tracking-[0.2em] text-ink">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-[0.56rem] uppercase tracking-[0.24em] text-muted-foreground">
                      {p.descriptor}
                    </p>
                    <a
                      href={p.href}
                      className="mt-5 inline-block border-b border-gold pb-1 text-[0.58rem] uppercase tracking-[0.26em] text-ink"
                    >
                      Explore {p.name.charAt(0) + p.name.slice(1).toLowerCase()} parfum
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="surface-ink relative overflow-hidden">
          <img
            src={nightImg}
            alt="Sarkar Solaris perfume bottle glowing in warm ambient light after dark"
            width={1100}
            height={821}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div className="relative mx-auto max-w-3xl px-5 py-24 text-center md:px-8 md:py-32">
            <h2 className="font-display text-3xl font-light leading-tight text-background md:text-5xl">
              Power, In a Warmer Light.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm font-light leading-relaxed text-background/70">
              Discover Solaris - vanilla, sandalwood and amber in a quietly commanding trail.
            </p>
            <button
              type="button"
              onClick={() => scrollToId("buy")}
              className="mt-9 min-h-11 bg-background px-10 text-[0.62rem] uppercase tracking-[0.28em] text-ink transition-opacity hover:opacity-85"
            >
              Buy Solaris
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
          <div>
            <p className="font-display text-base tracking-[0.42em] text-ink">SARKAR</p>
            <p className="mt-4 max-w-xs text-xs font-light leading-relaxed text-muted-foreground">
              Parfum built for quiet, absolute presence. Solaris is a concept variant created
              for a university assignment within the Sarkar brand system.
            </p>
            <ProjectLinks />
          </div>
          <nav aria-label="Footer">
            <p className="text-[0.58rem] uppercase tracking-[0.28em] text-muted-foreground">
              Navigate
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="https://www.sarkar.store/" className="text-xs font-light text-ink">
                  Sarkar home
                </a>
              </li>
              <li>
                <a
                  href="https://www.sarkar.store/collections/shop-all"
                  className="text-xs font-light text-ink"
                >
                  Shop all parfum
                </a>
              </li>
              <li>
                <Link to="/perfumes/solaris" className="text-xs font-light text-ink">
                  Sarkar Solaris
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-xs font-light text-ink">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-xs font-light text-ink">
                  About &amp; sources
                </Link>
              </li>

              <li>
                <a
                  href="https://www.sarkar.store/pages/know-sarkar"
                  className="text-xs font-light text-ink"
                >
                  Know Sarkar
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <p className="text-[0.58rem] uppercase tracking-[0.28em] text-muted-foreground">
              The Range
            </p>
            <ul className="mt-4 space-y-3">
              {range.map((p) => (
                <li key={p.name}>
                  <a href={p.href} className="text-xs font-light text-ink">
                    {p.name.charAt(0) + p.name.slice(1).toLowerCase()} parfum
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <p className="mx-auto max-w-7xl px-5 py-6 text-[0.56rem] uppercase tracking-[0.24em] text-muted-foreground md:px-8">
            © {new Date().getFullYear()} Sarkar · Solaris concept page
          </p>
        </div>
      </footer>
    </div>
  );
}
