import type { MetadataRoute } from "next";

import { FLEET } from "@/lib/fleet";
import { SERVICES } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Top-level, hand-maintained routes.
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/fleet`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/reserve`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/faq`, changeFrequency: "monthly", priority: 0.5 },
  ];

  // Dynamic /services/[slug] pages.
  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Dynamic /fleet/[slug] pages.
  const fleetRoutes: MetadataRoute.Sitemap = FLEET.map((vehicle) => ({
    url: `${SITE_URL}/fleet/${vehicle.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...fleetRoutes].map((route) => ({
    ...route,
    lastModified,
  }));
}
