import type { ReactNode } from "react";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { PUBLISHED_DATE, SITE_URL, UPDATED_DATE, breadcrumbs, formatDate } from "@/content/site-seo";

export function infoHead(opts: { path: string; title: string; description: string; type?: string; schema?: object[] }) {
  const url = `${SITE_URL}${opts.path}`;
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": opts.type ?? "WebPage",
          name: opts.title,
          url,
          description: opts.description,
          datePublished: PUBLISHED_DATE,
          dateModified: UPDATED_DATE,
          isPartOf: { "@id": `${SITE_URL}/#website` },
          publisher: { "@id": `${SITE_URL}/#project` },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbs([
            { name: "Solaris", path: "/perfumes/solaris" },
            { name: opts.title.split(" | ")[0] ?? opts.title, path: opts.path },
          ]),
        ),
      },
      ...(opts.schema ?? []).map((s) => ({ type: "application/ld+json", children: JSON.stringify(s) })),
    ],
  };
}

export function InfoPage({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-xs uppercase text-gold">{eyebrow}</p>
        <h1 className="mt-5 font-display text-3xl font-light leading-tight text-ink md:text-5xl">{title}</h1>
        <p className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground">
          <span>Published: <time dateTime={PUBLISHED_DATE}>{formatDate(PUBLISHED_DATE)}</time></span>
          <span>Last updated: <time dateTime={UPDATED_DATE}>{formatDate(UPDATED_DATE)}</time></span>
        </p>
        <div className="rule-gold my-7 w-28" />
        <div className="journal-prose">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
