export const SITE_URL = "https://sarkar-solaris.lovable.app";
export const PROJECT_NAME = "Solaris concept project";
export const PROJECT_ID = `${SITE_URL}/#project`;
export const UPDATED_DATE = "2026-10-08";

export const projectPublisher = {
  "@type": "Organization",
  "@id": PROJECT_ID,
  name: PROJECT_NAME,
  url: `${SITE_URL}/about`,
  description: "University fragrance concept and educational guides inspired by the Sarkar brand. Not the official Sarkar store.",
};

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export const articleSummaries: Record<string, string> = {
  "how-to-choose-the-right-perfume": "Choose a perfume by the fragrance family you enjoy, how it develops on your own skin, and the occasion. In this guide, Solaris represents warm, understated presence; Throne, Orion, Noble and Regal illustrate other scent directions. These personality matches are editorial suggestions, not a skin diagnosis or a guarantee of performance.",
  "eau-de-parfum-vs-eau-de-toilette-vs-attar": "Eau de parfum and eau de toilette are usually alcohol-based fragrance formats; attar generally describes an oil-based perfume. Concentration ranges and wear time vary by formula. Compare the actual product information and test the scent rather than assuming that a format alone guarantees strength, quality or longevity.",
  "best-perfumes-for-evening-wear": "For evening wear, consider the setting, your preferred scent family and how much projection feels comfortable. Solaris is a university concept exploring vanilla, sandalwood and amber; Regal is an existing Sarkar fragrance with an oud-led profile. These are scent-profile recommendations, not comparative wear-test results.",
  "fragrance-layering-guide": "Fragrance layering means combining scented products or perfumes. Start with a small amount and a simple pairing; the formula, application, skin and environment all affect how long a scent is noticeable. Woody, musky and amber base profiles can suggest a lasting dry-down, but a note list does not establish a guaranteed wear time.",
};