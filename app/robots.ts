import type { MetadataRoute } from "next";

// Keep in sync with app/sitemap.ts and the canonical/OG URLs in the pages.
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bostonexclusivelivery.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
