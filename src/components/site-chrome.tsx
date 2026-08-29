import { Link } from "@tanstack/react-router";

import nobleImg from "@/assets/range-noble.webp";
import orionImg from "@/assets/range-orion.webp";
import regalImg from "@/assets/range-regal.webp";
import throneImg from "@/assets/range-throne.webp";

const range = [
  { name: "THRONE", href: "https://www.sarkar.store/products/throne", image: throneImg },
  { name: "ORION", href: "https://www.sarkar.store/products/orion", image: orionImg },
  { name: "NOBLE", href: "https://www.sarkar.store/products/noble", image: nobleImg },
  { name: "REGAL", href: "https://www.sarkar.store/products/regal", image: regalImg },
];

export const rangeProducts = range;

export function RangeStrip({
  title = "Explore the Sarkar range",
  note = "Throne, Orion, Noble and Regal — the parfums Solaris joins.",
}: {
  title?: string;
  note?: string;
}) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-16">
        <h2 className="font-display text-2xl font-light text-ink md:text-3xl">{title}</h2>
        <div className="rule-gold my-6 w-20" />
        <p className="max-w-lg text-sm font-light leading-relaxed text-muted-foreground">
          {note}
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {range.map((p) => (
            <li key={p.name} className="border border-border bg-card">
              <a href={p.href} className="block p-4">
                <img
                  src={p.image}
                  alt={`Sarkar ${p.name.charAt(0) + p.name.slice(1).toLowerCase()} parfum bottle`}
                  width={700}
                  height={700}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full bg-background object-contain"
                />
                <p className="mt-4 text-[0.58rem] uppercase tracking-[0.28em] text-ink">
                  {p.name}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const navLink =
  "text-[0.62rem] font-light uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-ink";

export function SiteHeader({ active }: { active?: "solaris" | "journal" }) {
  return (
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
          <a href="https://www.sarkar.store/" className={navLink}>
            Home
          </a>
          <a href="https://www.sarkar.store/collections/shop-all" className={navLink}>
            Shop
          </a>
          <Link
            to="/perfumes/solaris"
            className={active === "solaris" ? navLink.replace("text-muted-foreground", "text-ink") : navLink}
          >
            Solaris
          </Link>
          <Link
            to="/blog"
            className={active === "journal" ? navLink.replace("text-muted-foreground", "text-ink") : navLink}
          >
            Journal
          </Link>
          <a href="https://www.sarkar.store/pages/know-sarkar" className={navLink}>
            Know Sarkar
          </a>
        </nav>
        <a
          href="https://www.sarkar.store/collections/shop-all"
          className="text-[0.62rem] font-light uppercase tracking-[0.28em] text-ink"
        >
          Cart
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-display text-base tracking-[0.42em] text-ink">SARKAR</p>
          <p className="mt-4 max-w-xs text-xs font-light leading-relaxed text-muted-foreground">
            Parfum built for quiet, absolute presence. Solaris is a concept variant created
            for a university assignment within the Sarkar brand system.
          </p>
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
                The Sarkar Journal
              </Link>
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
  );
}
