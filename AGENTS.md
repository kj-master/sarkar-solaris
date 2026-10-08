<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep shared project provenance, editorial summaries and schema helpers in `src/content/site-seo.ts` so page metadata and visible attribution identify the university project consistently, separately from the official brand.
- Serve the concise AI guide as `public/llms.txt` and the user-supplied detailed reference as `public/llms-full.txt` so crawlers can choose a short index or the complete reference without client-side rendering.
- Publish editorial provenance and official-source links on `/about`, linked from the existing footers, so trust context stays discoverable without redesigning the product page.
