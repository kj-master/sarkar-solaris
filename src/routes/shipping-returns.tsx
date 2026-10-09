import { createFileRoute, Link } from "@tanstack/react-router";

import { InfoPage, infoHead } from "@/components/info-page";

export const Route = createFileRoute("/shipping-returns")({
  head: () =>
    infoHead({
      path: "/shipping-returns",
      title: "Shipping & Returns | Sarkar Solaris Concept",
      description: "Sarkar Solaris is a concept prototype: the 24–36 hour dispatch window is illustrative and no orders are shipped or returned.",
    }),
  component: ShippingPage,
});

function ShippingPage() {
  return (
    <InfoPage eyebrow="Trust & policies" title="Shipping & Returns">
      <h2>How long does shipping take?</h2>
      <p>
        The Solaris page says orders ship within 24–36 hours. That window is part of the concept design, modelled on how fragrance stores usually present dispatch times.
        Because Sarkar Solaris is a university prototype, no order you place here is charged, packed or shipped.
      </p>
      <h2>Can you return Sarkar Solaris?</h2>
      <p>
        There is nothing to return, because nothing is sold. The cart and Buy buttons only demonstrate a checkout flow. If you bought a real Sarkar fragrance, the{" "}
        <a href="https://www.sarkar.store/pages/shipping-policy">official shipping policy</a> and{" "}
        <a href="https://www.sarkar.store/pages/refund-policy">official refund policy</a> apply instead.
      </p>
      <p>Questions? Visit the <Link to="/contact">contact page</Link>.</p>
    </InfoPage>
  );
}
