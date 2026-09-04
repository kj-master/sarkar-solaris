import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { SiteHeader, SiteFooter, RangeStrip } from "@/components/site-chrome";
import { posts, type BlogPost, SITE_URL, SHOP_URL } from "@/content/blog";

export function articleHead(post: BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const image = `${SITE_URL}${post.image}`;
  return {
    meta: [
      { title: post.seoTitle },
      { name: "description", content: post.description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: post.seoTitle },
      { property: "og:description", content: post.description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: post.seoTitle },
      { name: "twitter:description", content: post.description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.h1,
          description: post.description,
          image: [image],
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          author: { "@type": "Organization", name: "Sarkar" },
          publisher: {
            "@type": "Organization",
            name: "Sarkar",
            url: SITE_URL,
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(", "),
        }),
      },
    ],
  };
}

export function JournalArticle({
  post,
  children,
}: {
  post: BlogPost;
  children: ReactNode;
}) {
  const related = post.related
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter(Boolean) as BlogPost[];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader active="blog" />

      <main>
        <article>
          <div className="mx-auto max-w-3xl px-5 pt-10 md:px-8 md:pt-14">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-[0.56rem] uppercase tracking-[0.26em] text-muted-foreground">
                <li>
                  <Link to="/perfumes/solaris" className="hover:text-ink">
                    Sarkar
                  </Link>
                </li>
                <li aria-hidden>·</li>
                <li>
                  <Link to="/blog" className="hover:text-ink">
                    Blogs
                  </Link>
                </li>
                <li aria-hidden>·</li>
                <li className="text-ink">{post.category}</li>
              </ol>
            </nav>

            <p className="mt-8 text-[0.6rem] uppercase tracking-[0.36em] text-gold">
              {post.category} · {post.readingTime}
            </p>
            <h1 className="mt-5 font-display text-3xl font-light leading-[1.1] tracking-tight text-ink md:text-5xl">
              {post.h1}
            </h1>
            <div className="rule-gold my-7 w-28" />
          </div>

          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <figure className="overflow-hidden bg-ink">
              <img
                src={post.image}
                srcSet={
                  post.imageMobile
                    ? `${post.imageMobile} 640w, ${post.image} 1100w`
                    : undefined
                }
                sizes="(max-width: 768px) 100vw, 1100px"
                alt={post.imageAlt}
                width={1100}
                height={730}
                fetchPriority="high"
                decoding="async"
                className="aspect-[3/2] w-full object-cover"
              />
            </figure>
          </div>

          <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
            <div className="journal-prose">{children}</div>

            <aside className="mt-14 border border-border bg-card p-7">
              <p className="text-[0.58rem] uppercase tracking-[0.3em] text-gold">
                Sarkar Solaris
              </p>
              <p className="mt-4 font-display text-2xl font-light leading-tight text-ink">
                {post.cta}
              </p>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                Eau de Parfum · 100 ML · Vanilla, sandalwood and amber. MRP ₹1,499, incl. of
                all taxes.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/perfumes/solaris"
                  className="min-h-11 bg-ink px-8 py-3 text-[0.62rem] uppercase tracking-[0.28em] text-background transition-opacity hover:opacity-85"
                >
                  Explore Sarkar Solaris
                </Link>
                <a
                  href={SHOP_URL}
                  className="min-h-11 border border-ink px-8 py-3 text-[0.62rem] uppercase tracking-[0.28em] text-ink transition-colors hover:bg-ink hover:text-background"
                >
                  Shop the collection
                </a>
              </div>
            </aside>
          </div>
        </article>

        <section className="border-t border-border bg-card">
          <div className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">
            <h2 className="font-display text-2xl font-light text-ink md:text-3xl">
              Related reading
            </h2>
            <div className="rule-gold my-6 w-20" />
            <div className="grid gap-4 md:grid-cols-2">
              {related.map((r) => (
                <article key={r.slug} className="border border-border bg-background">
                  <img
                    src={r.image}
                    srcSet={
                      r.imageMobile
                        ? `${r.imageMobile} 640w, ${r.image} 1100w`
                        : undefined
                    }
                    sizes="(max-width: 768px) 100vw, 520px"
                    alt={r.imageAlt}
                    width={1100}
                    height={730}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <div className="p-6">
                    <p className="text-[0.56rem] uppercase tracking-[0.28em] text-muted-foreground">
                      {r.category}
                    </p>
                    <h3 className="mt-3 font-display text-lg font-light leading-snug text-ink">
                      {r.h1}
                    </h3>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: r.slug }}
                      className="mt-5 inline-block border-b border-gold pb-1 text-[0.58rem] uppercase tracking-[0.26em] text-ink"
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
