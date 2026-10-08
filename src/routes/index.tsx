import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarkar Solaris Fragrance Concept" },
      { name: "description", content: "Sarkar Solaris is a university fragrance concept with vanilla, sandalwood and amber." },
      { property: "og:title", content: "Sarkar Solaris Fragrance Concept" },
      { property: "og:description", content: "A university fragrance concept inspired by the Sarkar brand system." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ to: "/perfumes/solaris" });
  },
});
