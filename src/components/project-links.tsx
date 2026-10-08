import { Link } from "@tanstack/react-router";

export function ProjectLinks() {
  return (
    <div className="mt-5 space-y-3 text-xs font-light leading-relaxed text-muted-foreground">
      <p>University concept, not the official Sarkar store. Product prices, shipping and feedback on this page are illustrative.</p>
      <nav aria-label="Project and official sources" className="flex flex-wrap gap-x-4 gap-y-3">
        <Link to="/about" className="underline underline-offset-4 hover:text-ink">About this project &amp; sources</Link>
        <a href="https://www.sarkar.store/pages/know-sarkar" className="underline underline-offset-4 hover:text-ink">Official Sarkar brand story</a>
        <a href="https://www.instagram.com/houseofsarkar/" className="underline underline-offset-4 hover:text-ink">Official Sarkar Instagram</a>
        <a href="/llms.txt" className="underline underline-offset-4 hover:text-ink">AI-readable reference</a>
      </nav>
    </div>
  );
}