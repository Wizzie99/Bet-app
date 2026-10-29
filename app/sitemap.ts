import type { MetadataRoute } from "next";

import { FLEET } from "@/lib/fleet";
import { SERVICES } from "@/lib/services";

// Keep this in sync with the canonical/OG URLs in the page files, which read
// from the same env var.
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bostonexclusivelivery.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Top-level, hand-maintained routes.
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/fleet`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/reserve`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/faq`, changeFrequency: "monthly", priority: 0.5 },
  ];

  // Dynamic /services/[slug] pages.
  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Dynamic /fleet/[slug] pages.
  const fleetRoutes: MetadataRoute.Sitemap = FLEET.map((vehicle) => ({
    url: `${BASE_URL}/fleet/${vehicle.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...fleetRoutes].map((route) => ({
    ...route,
    lastModified,
  }));
}
