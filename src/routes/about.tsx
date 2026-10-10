import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { SITE_URL, projectPublisher, breadcrumbs, UPDATED_DATE, PUBLISHED_DATE, AUTHOR_BYLINE, AUTHOR_BIO, BRAND_DISCLAIMER, brandReferences, authorPerson, formatDate } from "@/content/site-seo";

const title = "About Solaris | Concept Project & Editorial Sources";
const description = "Who is behind the Solaris university concept, how the fragrance guides use sources, and where to verify official Sarkar product information.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { property: "og:url", content: `${SITE_URL}/about` },
      { name: "twitter:card", content: "summary" }, { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@type": "AboutPage", name: title,
      url: `${SITE_URL}/about`, description, datePublished: PUBLISHED_DATE, dateModified: UPDATED_DATE, author: authorPerson,
      mainEntity: projectPublisher,
    }) }, { type: "application/ld+json", children: JSON.stringify(breadcrumbs([
      { name: "Solaris", path: "/perfumes/solaris" }, { name: "About this project", path: "/about" },
    ])) }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-xs uppercase text-gold">Solaris concept project</p>
        <h1 className="mt-5 font-display text-3xl font-light leading-tight text-ink md:text-5xl">About this project</h1>
        <p className="mt-5 text-sm font-light text-ink">{AUTHOR_BYLINE}</p>
        <p className="mt-2 max-w-xl text-sm font-light leading-relaxed text-muted-foreground">{AUTHOR_BIO}</p>
        <p className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground"><span>Published: <time dateTime={PUBLISHED_DATE}>{formatDate(PUBLISHED_DATE)}</time></span><span>Last updated: <time dateTime={UPDATED_DATE}>{formatDate(UPDATED_DATE)}</time></span></p>
        <div className="rule-gold my-7 w-28" />
        <div className="journal-prose">
          <h2>What is Sarkar Solaris?</h2>
          <p>Sarkar Solaris is a university-assignment fragrance concept inspired by the existing Sarkar brand system. It is presented as a premium, unisex 100 ML Eau de Parfum with vanilla, sandalwood and amber. This website is not the official Sarkar ecommerce store, and Solaris is not presented as an officially launched product.</p>
          <h2>About this project statement</h2>
          <p>{BRAND_DISCLAIMER} Everything on this site, including the price, cart and shipping message, is a concept prototype.</p>
          <h2>How was the concept developed?</h2>
          <p>The brief was to extend the Sarkar range with a warmer variant without redesigning anything. Kanan Jain studied the official Sarkar product pages for Throne, Orion, Noble and Regal, read general perfumery references on how note pyramids work, and narrowed the scent to three materials: vanilla, sandalwood and amber. The bottle was kept identical to the existing design, changed only by a subtle golden tint, and the name Solaris was chosen to express warmth and calm authority.</p>
          <h2>Who publishes these guides?</h2>
          <p>The fragrance guides are published as part of the Solaris concept project. They are educational editorial content, not statements issued by the official Sarkar brand. No professional perfumery credentials, independent laboratory testing or firsthand product wear trials are claimed.</p>
          <h2>How we use sources</h2>
          <p>Official Sarkar product pages are the source for the existing range. General fragrance background is linked to Britannica and the International Fragrance Association. Personality and occasion pairings are editorial interpretations, not scientific classifications. Fragrance performance varies; descriptions of notes do not establish a guaranteed duration.</p>
          <h3>Primary brand sources</h3>
          <ul>
            <li><a href="https://www.sarkar.store/pages/know-sarkar">Official Sarkar brand story</a></li>
            <li><a href="https://www.sarkar.store/products/throne">Sarkar Throne product information</a></li>
            <li><a href="https://www.sarkar.store/products/orion">Sarkar Orion product information</a></li>
            <li><a href="https://www.sarkar.store/products/noble">Sarkar Noble product information</a></li>
            <li><a href="https://www.sarkar.store/products/regal">Sarkar Regal product information</a></li>
          </ul>
          <h3>Fragrance reference sources</h3>
          <ul>
            <li><a href="https://www.britannica.com/art/perfume">Britannica: perfume composition and background</a></li>
            <li><a href="https://ifrafragrance.org/">International Fragrance Association: fragrance standards</a></li>
          </ul>
          <h2>Concept details and customer feedback</h2>
          <p>The displayed ₹1,499 price, 24–36 hour shipping message and checkout are prototype details, not a commercial offer. Customer feedback is illustrative, not verified reviews. Solaris composition and campaign imagery express a design concept rather than evidence of a manufactured or tested formula.</p>
          <h2>Official brand presence and enquiries</h2>
          <p>For real products, current prices, availability, support and policies, use the <a href="https://www.sarkar.store/">official Sarkar website</a>. The brand’s social presence is linked separately from this university project: <a href="https://www.instagram.com/houseofsarkar/">Sarkar on Instagram</a>.</p>
          <p>Official Sarkar customer support: <a href="mailto:support@sarkar.store">support@sarkar.store</a>. This is the commercial brand’s support address, not a contact for this university project.</p>
          <ul>
            <li><a href="https://www.sarkar.store/pages/shipping-policy">Official store shipping policy</a></li>
            <li><a href="https://www.sarkar.store/pages/refund-policy">Official store refund policy</a></li>
            <li><a href="https://www.sarkar.store/pages/privacy-policy">Official store privacy policy</a></li>
          </ul>
          <h2>Brand inspiration &amp; references</h2>
          <p>{BRAND_DISCLAIMER}</p>
          <ul>
            {brandReferences.map((r) => (
              <li key={r.href}><a href={r.href} target="_blank" rel="noopener nofollow">{r.label}</a></li>
            ))}
          </ul>
          <p>See also <Link to="/contact">Contact</Link>, <Link to="/press">Press</Link>, <Link to="/shipping-returns">Shipping &amp; Returns</Link>, <Link to="/privacy">Privacy Policy</Link> and <Link to="/terms">Terms</Link>.</p>
          <h2>Explore the project</h2>
          <p><Link to="/perfumes/solaris">Explore the Solaris concept</Link> or read the <Link to="/blog">fragrance guides</Link>. An <a href="/llms.txt">AI-readable reference</a> distinguishes the concept from the official brand and links to the project’s key pages.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}