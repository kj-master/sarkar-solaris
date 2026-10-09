import { createFileRoute, Link } from "@tanstack/react-router";

import { InfoPage, infoHead } from "@/components/info-page";

export const Route = createFileRoute("/privacy")({
  head: () =>
    infoHead({
      path: "/privacy",
      title: "Privacy Policy | Sarkar Solaris Concept",
      description: "The Sarkar Solaris concept site has no accounts, payments or forms. Here is what that means for your data.",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <InfoPage eyebrow="Trust & policies" title="Privacy Policy">
      <h2>What data does this site collect?</h2>
      <p>
        This concept site has no sign-up, no payment form and no newsletter, so you never enter personal details here. The cart is a demonstration that resets when you leave the page.
        Like most websites, the hosting provider may record basic technical logs such as page requests, and aggregate visit analytics may be viewed by the creator.
      </p>
      <h2>Do we share or sell your data?</h2>
      <p>No. The project does not sell or share personal data and has no advertising partners.</p>
      <h2>External links</h2>
      <p>
        Links to the official Sarkar website, Instagram, YouTube or Wikipedia take you to sites with their own policies, such as the{" "}
        <a href="https://www.sarkar.store/pages/privacy-policy">official Sarkar privacy policy</a>.
      </p>
      <p>Privacy questions can go through the <Link to="/contact">contact page</Link>.</p>
    </InfoPage>
  );
}
