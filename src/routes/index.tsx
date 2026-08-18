import { createFileRoute } from "@tanstack/react-router";
import bottle from "@/assets/sarkar-solaris-bottle.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarkar Solaris — Radiant Amber Parfum | Sarkar" },
      {
        name: "description",
        content:
          "Sarkar Solaris: bright bergamot and saffron meet warm vanilla, golden amber and polished woods. A radiant, long-lasting addition to the Sarkar range.",
      },
      { property: "og:title", content: "Sarkar Solaris — Radiant Amber Parfum" },
      {
        property: "og:description",
        content:
          "Bright citrus and saffron meet warm vanilla, golden amber and polished woods, creating a radiant expression of power that stays with you.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Solaris,
});

const pyramid = [
  {
    stage: "Top",
    label: "First light",
    notes: ["Bergamot", "Fresh Mandarin", "Saffron"],
  },
  {
    stage: "Heart",
    label: "Golden hour",
    notes: ["Warm Vanilla", "Amber", "Warm Spices"],
  },
  {
    stage: "Base",
    label: "Afterglow",
    notes: ["Creamy Sandalwood", "Cedarwood", "Soft Musk"],
  },
];

const character = [
  "Radiant",
  "Warm",
  "Golden",
  "Woody",
  "Sophisticated",
];

const packagingRules = [
  "Bottle silhouette, cap and proportions carried over unchanged from the existing Sarkar chess-king flacon.",
  "Sarkar wordmark, placement and packaging layout remain exactly as-is.",
  "Only variant-level change: a warm golden amber glass tint in place of the existing colourways.",
  "No decorative additions, no new structure — Solaris reads as another variant in the range.",
];

function Solaris() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="halo pointer-events-none absolute inset-x-0 top-[-10%] h-[80vh]" />

      <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <span className="font-display text-xl tracking-[0.45em] text-foreground">
          SARKAR
        </span>
        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
          New Variant · Parfum
        </span>
      </header>

      <section className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-6 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <p className="text-[0.68rem] uppercase tracking-[0.42em] text-primary">
            The Sarkar Range
          </p>
          <h1 className="mt-5 font-display text-6xl leading-[0.95] tracking-tight text-gradient-solaris md:text-7xl">
            SOLARIS
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.32em] text-muted-foreground">
            Radiant · Golden · Unyielding
          </p>
          <div className="rule-gold my-8 w-40" />
          <p className="max-w-md font-display text-2xl leading-snug text-foreground/90">
            “Bright citrus and saffron meet warm vanilla, golden amber and
            polished woods, creating a radiant expression of power that stays
            with you.”
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {character.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border px-4 py-1.5 text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <figure className="order-1 md:order-2">
          <img
            src={bottle.url}
            alt="Sarkar Solaris parfum in the existing Sarkar chess-king flacon, tinted warm golden amber"
            className="shadow-solaris mx-auto w-full max-w-md"
            width={1024}
            height={1024}
          />
          <figcaption className="mt-4 text-center text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
            Existing Sarkar flacon · Amber variant tint
          </figcaption>
        </figure>
      </section>

      <section className="relative border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-4xl text-foreground">
            The Composition
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {pyramid.map((p) => (
              <div key={p.stage} className="border-t border-border pt-6">
                <p className="text-[0.68rem] uppercase tracking-[0.3em] text-primary">
                  {p.stage}
                </p>
                <p className="mt-2 font-display text-2xl text-foreground">
                  {p.label}
                </p>
                <ul className="mt-5 space-y-2">
                  {p.notes.map((n) => (
                    <li
                      key={n}
                      className="text-sm tracking-wide text-muted-foreground"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-14 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Built for longevity and projection. Sophisticated, modern and
            masculine — warmth without sweetness, radiance without softness.
          </p>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-4xl text-foreground">
            Packaging Discipline
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            Solaris enters the range without altering the Sarkar brand system.
          </p>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {packagingRules.map((r) => (
              <li
                key={r}
                className="rounded-sm border border-border bg-card p-6 text-sm leading-relaxed text-card-foreground"
              >
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-10">
          <span className="font-display text-sm tracking-[0.45em] text-muted-foreground">
            SARKAR
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
            Solaris · Eau de Parfum
          </span>
        </div>
      </footer>
    </main>
  );
}
