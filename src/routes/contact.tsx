import { createFileRoute, Link } from "@tanstack/react-router";

import { InfoPage, infoHead } from "@/components/info-page";
import { CONTACT_EMAIL, CONTACT_EMAIL_IS_PLACEHOLDER } from "@/content/site-seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    infoHead({
      path: "/contact",
      title: "Contact | Sarkar Solaris Concept Project",
      description: "How to contact Kanan Jain about the Sarkar Solaris university fragrance concept, and where to reach the official Sarkar brand instead.",
      type: "ContactPage",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <InfoPage eyebrow="Solaris concept project" title="Contact">
      <h2>How can you contact the Sarkar Solaris project?</h2>
      <p>
        You can reach the creator of this university concept, Kanan Jain, by email at{" "}
        {CONTACT_EMAIL_IS_PLACEHOLDER ? <strong>[email coming soon]</strong> : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>}.
        Use it for questions about the project, the research behind it, or academic feedback. Solaris is a concept prototype, so there are no orders, deliveries or refunds to support.
      </p>
      <h2>Who should you contact about real Sarkar products?</h2>
      <p>
        For real Sarkar fragrances, orders, prices or support, contact the official brand through the{" "}
        <a href="https://www.sarkar.store/">official Sarkar website</a> or <a href="mailto:support@sarkar.store">support@sarkar.store</a>.
        This project is not affiliated with or endorsed by Sarkar or Bhuvan Bam and cannot answer for them.
      </p>
      <p>Read more <Link to="/about">about this project</Link> or see the <Link to="/press">press page</Link>.</p>
    </InfoPage>
  );
}
