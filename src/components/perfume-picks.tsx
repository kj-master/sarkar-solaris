import { Link } from "@tanstack/react-router";

import nobleImg from "@/assets/range-noble.webp";
import orionImg from "@/assets/range-orion.webp";
import regalImg from "@/assets/range-regal.webp";
import throneImg from "@/assets/range-throne.webp";
import solarisImg from "@/assets/solaris-hero-640.webp";

export interface PerfumePick {
  name: string;
  image: string;
  alt: string;
  fit: "contain" | "cover";
  href: string;
  internal?: boolean;
  /** short personality / character line */
  headline: string;
  notes: string;
  body: string;
}

export const perfumePicks: Record<string, PerfumePick> = {
  solaris: {
    name: "Sarkar Solaris",
    image: solarisImg,
    alt: "Sarkar Solaris golden amber parfum bottle in a dark cinematic setting",
    fit: "cover",
    href: "/perfumes/solaris",
    internal: true,
    headline: "The quiet one who still commands the room",
    notes: "Vanilla, sandalwood, amber",
    body: "If you rarely raise your voice and people listen anyway, Solaris is your register. Vanilla read as texture rather than sugar, sandalwood holding it composed, amber carrying the warmth forward. Unspoken authority, warm rather than loud.",
  },
  throne: {
    name: "Sarkar Throne",
    image: throneImg,
    alt: "Sarkar Throne leather parfum bottle",
    fit: "contain",
    href: "https://www.sarkar.store/products/throne",
    headline: "The one whose presence lingers after they leave",
    notes: "Cardamom and ginger, leather and vanilla, amber, patchouli and cedarwood",
    body: "For late dinners, long drives and people who are remembered rather than announced. Smoke, leather and the final say, at MRP ₹2,499 for 100 ml.",
  },
  orion: {
    name: "Sarkar Orion",
    image: orionImg,
    alt: "Sarkar Orion fresh citrus parfum bottle",
    fit: "contain",
    href: "https://www.sarkar.store/products/orion",
    headline: "The steady, energetic everyday achiever",
    notes: "Lavender and lemon, geranium, rose and cherry, patchouli, sandalwood and musk",
    body: "Bright, clean and easy to live in. Built for workdays, morning runs and anyone who prefers effortless momentum to drama. MRP ₹1,499 for 100 ml.",
  },
  noble: {
    name: "Sarkar Noble",
    image: nobleImg,
    alt: "Sarkar Noble crisp citrus and woody parfum bottle",
    fit: "contain",
    href: "https://www.sarkar.store/products/noble",
    headline: "The composed professional who leads without pushing",
    notes: "Lemon, eucalyptus and bergamot, pepper and cardamom, musk, cedarwood and patchouli",
    body: "Crisp, precise and quietly sure of itself. Boardrooms, first impressions and power lunches. MRP ₹1,499 for 100 ml.",
  },
  regal: {
    name: "Sarkar Regal",
    image: regalImg,
    alt: "Sarkar Regal oud parfum bottle",
    fit: "contain",
    href: "https://www.sarkar.store/products/regal",
    headline: "The traditionalist with old-world gravity",
    notes: "Oud and labdanum, saffron, cedarwood and patchouli, amber, leather and musk",
    body: "Deep, unhurried and made for weddings, black tie and statement nights. For those who command attention without ever asking for it. MRP ₹1,499 for 100 ml.",
  },
};

export function PerfumePickCards({ keys }: { keys: (keyof typeof perfumePicks)[] }) {
  return (
    <div className="not-prose my-10 grid gap-5 sm:grid-cols-2">
      {keys.map((k) => {
        const p = perfumePicks[k];
        if (!p) return null;
        return (
          <article key={p.name} className="border border-border bg-card">
            <img
              src={p.image}
              alt={p.alt}
              width={700}
              height={700}
              loading="lazy"
              decoding="async"
              className={`aspect-square w-full bg-background ${
                p.fit === "cover" ? "object-cover" : "object-contain p-4"
              }`}
            />
            <div className="p-6">
              <p className="text-[0.56rem] uppercase tracking-[0.28em] text-gold">
                {p.headline}
              </p>
              <h3 className="mt-3 font-display text-lg font-light leading-snug text-ink">
                {p.name}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                {p.body}
              </p>
              <p className="mt-3 text-xs font-light leading-relaxed text-ink">
                <strong className="font-medium">Notes:</strong> {p.notes}
              </p>
              {p.internal ? (
                <Link
                  to="/perfumes/solaris"
                  className="mt-5 inline-block border-b border-gold pb-1 text-[0.58rem] uppercase tracking-[0.26em] text-ink"
                >
                  Explore {p.name}
                </Link>
              ) : (
                <a
                  href={p.href}
                  className="mt-5 inline-block border-b border-gold pb-1 text-[0.58rem] uppercase tracking-[0.26em] text-ink"
                >
                  View {p.name}
                </a>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
