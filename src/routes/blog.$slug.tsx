import { createFileRoute, notFound } from "@tanstack/react-router";

import { JournalArticle, articleHead } from "@/components/journal-article";
import { articleBodies } from "@/content/articles";
import { posts } from "@/content/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    }
    return articleHead(loaderData.post);
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { post } = Route.useLoaderData();
  const Body = articleBodies[post.slug];
  return (
    <JournalArticle post={post}>
      <Body />
    </JournalArticle>
  );
}
