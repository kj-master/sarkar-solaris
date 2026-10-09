import { Link } from "@tanstack/react-router";

import { BRAND_DISCLAIMER, CONTACT_EMAIL, CONTACT_EMAIL_IS_PLACEHOLDER, brandReferences } from "@/content/site-seo";

const link = "underline underline-offset-4 hover:text-ink";

export function ProjectLinks() {
  return (
    <div className="mt-5 space-y-3 text-xs font-light leading-relaxed text-muted-foreground">
      <p>University concept prototype, not the official Sarkar store. Product prices, shipping and feedback on this site are illustrative.</p>
      <nav aria-label="Project pages" className="flex flex-wrap gap-x-4 gap-y-3">
        <Link to="/about" className={link}>About this project</Link>
        <Link to="/contact" className={link}>Contact</Link>
        <Link to="/press" className={link}>Press</Link>
        <Link to="/shipping-returns" className={link}>Shipping &amp; Returns</Link>
        <Link to="/privacy" className={link}>Privacy Policy</Link>
        <Link to="/terms" className={link}>Terms</Link>
        <a href="/llms.txt" className={link}>AI-readable reference</a>
      </nav>
      <p>
        Contact:{" "}
        {CONTACT_EMAIL_IS_PLACEHOLDER ? (
          <span>email coming soon</span>
        ) : (
          <a href={`mailto:${CONTACT_EMAIL}`} className={link}>{CONTACT_EMAIL}</a>
        )}
      </p>
      <p className="pt-2 text-[0.58rem] uppercase tracking-[0.28em]">Brand inspiration &amp; references</p>
      <p>{BRAND_DISCLAIMER}</p>
      <nav aria-label="Brand references" className="flex flex-wrap gap-x-4 gap-y-3">
        {brandReferences.map((r) => (
          <a key={r.href} href={r.href} target="_blank" rel="noopener nofollow" className={link}>{r.label}</a>
        ))}
      </nav>
    </div>
  );
}
