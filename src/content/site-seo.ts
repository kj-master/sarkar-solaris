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
// TODO: confirm the real first-publication date of the Solaris concept.
export const PUBLISHED_DATE = "2026-09-04";
// TODO: replace with the project's real contact email before submission.
export const CONTACT_EMAIL = "TODO-contact@example.com";
export const CONTACT_EMAIL_IS_PLACEHOLDER = true;
// TODO: add this project's own real social profiles (e.g. a project Instagram). Leave empty until they exist.
export const PROJECT_PROFILES: string[] = [];

export const AUTHOR_ID = `${SITE_URL}/#author`;
export const AUTHOR_BYLINE = "Created by Kanan Jain, BBA student, Atlas SkillTech University, Mumbai";
export const AUTHOR_BIO =
  "Kanan Jain built Sarkar Solaris as a university brand-extension study. The project researched how the existing Sarkar range is presented, how fragrance pyramids are structured, and how vanilla, sandalwood and amber are described in perfumery references, then translated that brief into a concept product and guides.";

export const authorPerson = {
  "@type": "Person",
  "@id": AUTHOR_ID,
  name: "Kanan Jain",
  jobTitle: "BBA student",
  affiliation: { "@type": "CollegeOrUniversity", name: "Atlas SkillTech University", address: "Mumbai, India" },
  url: `${SITE_URL}/about`,
};

export const bhuvanBamPerson = {
  "@type": "Person",
  "@id": `${SITE_URL}/#bhuvan-bam-reference`,
  name: "Bhuvan Bam",
  url: "https://en.wikipedia.org/wiki/Bhuvan_Bam",
};

export const BRAND_DISCLAIMER =
  "Sarkar Solaris is an independent university concept inspired by the Sarkar fragrance brand by Bhuvan Bam. Not affiliated with or endorsed by him or the official brand.";

// TODO verify each reference URL before final submission.
export const brandReferences = [
  { label: "Reference: Bhuvan Bam on Instagram", href: "https://www.instagram.com/bhuvan.bam22/" },
  { label: "Reference: Bhuvan Bam on YouTube", href: "https://www.youtube.com/@BBKiVines" },
  { label: "Reference: Bhuvan Bam on Wikipedia", href: "https://en.wikipedia.org/wiki/Bhuvan_Bam" },
  { label: "Reference: Official Sarkar website", href: "https://www.sarkar.store/" },
  { label: "Reference: Official Sarkar on Instagram", href: "https://www.instagram.com/houseofsarkar/" },
];

// TODO: no dedicated project logo file exists; favicon is used until a real logo (with true dimensions) is supplied.
export const projectLogo = { "@type": "ImageObject", url: `${SITE_URL}/favicon.ico`, width: 256, height: 256 };

export const projectOrganization = {
  ...projectPublisher,
  logo: projectLogo,
  founder: { "@id": AUTHOR_ID },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "project enquiries",
    email: CONTACT_EMAIL,
    url: `${SITE_URL}/contact`,
    availableLanguage: ["en"],
  },
  ...(PROJECT_PROFILES.length ? { sameAs: PROJECT_PROFILES } : {}),
};

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
