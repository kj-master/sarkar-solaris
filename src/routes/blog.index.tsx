import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader, SiteFooter, RangeStrip } from "@/components/site-chrome";
import { posts, SITE_URL } from "@/content/blog";

const TITLE = "Sarkar Blogs | Perfume & Fragrance Guides";
const DESCRIPTION =
  "Fragrance guides from the Sarkar Blog: choosing a perfume, understanding concentrations, evening wear and the art of layering.";
const URL_PATH = `${SITE_URL}/blog`;
const OG_IMAGE = `${SITE_URL}${posts[2]?.image ?? ""}`;


export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL_PATH },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: URL_PATH }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "The Sarkar Blog",
          description: DESCRIPTION,
          url: URL_PATH,
          publisher: { "@type": "Organization", name: "Sarkar", url: SITE_URL },
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.h1,
            url: `${SITE_URL}/blog/${p.slug}`,
            datePublished: p.datePublished,
          })),
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader active="blog" />

      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
            <p className="text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">
              Editorial
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-light leading-[1.05] tracking-tight text-ink md:text-6xl">
              Blogs
            </h1>
            <div className="rule-gold my-7 w-32" />
            <p className="max-w-xl text-sm font-light leading-relaxed text-muted-foreground">
              Notes on fragrance, how scent is chosen, how concentrations differ, how an
              evening changes what you wear, and the small disciplines that make a perfume
              last. Written to be useful before it is anything else.
            </p>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
            <div className="grid gap-8 md:grid-cols-2 md:gap-x-6 md:gap-y-14">
              {posts.map((p, i) => (
                <article key={p.slug} className="group flex flex-col">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="overflow-hidden bg-ink"
                    aria-label={p.h1}
                  >
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      width={1100}
                      height={730}
                      loading={i < 2 ? "eager" : "lazy"}
                      decoding="async"
                      className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                  <div className="pt-6">
                    <p className="text-[0.56rem] uppercase tracking-[0.3em] text-gold">
                      {p.category} · {p.readingTime}
                    </p>
                    <h2 className="mt-4 font-display text-2xl font-light leading-snug text-ink">
                      <Link to="/blog/$slug" params={{ slug: p.slug }}>
                        {p.h1}
                      </Link>
                    </h2>
                    <p className="mt-4 max-w-lg text-sm font-light leading-relaxed text-muted-foreground">
                      {p.excerpt}
                    </p>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: p.slug }}
                      className="mt-6 inline-block border-b border-gold pb-1 text-[0.58rem] uppercase tracking-[0.26em] text-ink"
                    >
                      Read article
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <RangeStrip />
      </main>

      <SiteFooter />
    </div>
  );
}
