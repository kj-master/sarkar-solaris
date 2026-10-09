import { createFileRoute, Link } from "@tanstack/react-router";

import { InfoPage, infoHead } from "@/components/info-page";
import { AUTHOR_BYLINE, BRAND_DISCLAIMER, CONTACT_EMAIL, CONTACT_EMAIL_IS_PLACEHOLDER, brandReferences } from "@/content/site-seo";

export const Route = createFileRoute("/press")({
  head: () =>
    infoHead({
      path: "/press",
      title: "Press | Sarkar Solaris Concept Project",
      description: "Press information for Sarkar Solaris, an independent university fragrance concept with vanilla, sandalwood and amber. No press coverage is claimed.",
    }),
  component: PressPage,
});

function PressPage() {
  return (
    <InfoPage eyebrow="Press" title="Press information">
      <h2>What is Sarkar Solaris?</h2>
      <p>
        Sarkar Solaris is an independent university concept for a 100 ml Eau de Parfum with a vanilla top note, sandalwood heart and amber base.
        It was developed as a brand-extension study and is shown with an illustrative MRP of ₹1,499. It is a concept prototype, not a product you can buy. {AUTHOR_BYLINE}.
      </p>
      <h2>Context: the real Sarkar brand</h2>
      <p>
        Solaris takes its visual cues from Sarkar, an existing Indian fragrance brand associated with Bhuvan Bam. The real range includes{" "}
        <a href="https://www.sarkar.store/products/throne">Throne</a>, <a href="https://www.sarkar.store/products/orion">Orion</a>,{" "}
        <a href="https://www.sarkar.store/products/noble">Noble</a> and <a href="https://www.sarkar.store/products/regal">Regal</a>. For accurate brand information, see the{" "}
        <a href="https://www.sarkar.store/pages/know-sarkar">official Sarkar brand story</a>.
      </p>
      <p><strong>{BRAND_DISCLAIMER}</strong></p>
      <h3>References</h3>
      <ul>
        {brandReferences.map((r) => (
          <li key={r.href}><a href={r.href} target="_blank" rel="noopener nofollow">{r.label}</a></li>
        ))}
      </ul>
      <h2>Press coverage</h2>
      <p>This project has no press coverage to date. Nothing on this site should be read as media endorsement.</p>
      <h2>Brand assets</h2>
      <p>
        Concept imagery of the Solaris bottle appears on the <Link to="/perfumes/solaris">Solaris page</Link>. The Sarkar name, bottle design and logo belong to their owners and are not licensed for reuse by this project.
      </p>
      <h2>Press contact</h2>
      <p>
        Email {CONTACT_EMAIL_IS_PLACEHOLDER ? <strong>[email coming soon]</strong> : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>} or use the <Link to="/contact">contact page</Link>.
      </p>
    </InfoPage>
  );
}
