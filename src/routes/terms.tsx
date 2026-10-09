import { createFileRoute, Link } from "@tanstack/react-router";

import { InfoPage, infoHead } from "@/components/info-page";
import { BRAND_DISCLAIMER } from "@/content/site-seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    infoHead({
      path: "/terms",
      title: "Terms of Use | Sarkar Solaris Concept",
      description: "Terms for using the Sarkar Solaris university concept site: an educational prototype, not a store or an official Sarkar product.",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <InfoPage eyebrow="Trust & policies" title="Terms of Use">
      <h2>What is this website?</h2>
      <p>
        This website is an educational concept prototype created for a university assignment. Sarkar Solaris is not for sale, and prices, shipping times, the cart and sample feedback are illustrative.
        By using the site, you accept that nothing here is a commercial offer.
      </p>
      <h2>Brand and ownership</h2>
      <p>{BRAND_DISCLAIMER} The Sarkar name, bottle design and products belong to their respective owners.</p>
      <h2>Accuracy of information</h2>
      <p>
        Fragrance guides are general education, not medical or skin-care advice. Patch-test any real fragrance, and check the{" "}
        <a href="https://www.sarkar.store/">official Sarkar website</a> for real product details.
      </p>
      <p>See also the <Link to="/privacy">Privacy Policy</Link> and <Link to="/shipping-returns">Shipping &amp; Returns</Link>.</p>
    </InfoPage>
  );
}
