// Single source of truth for site-wide SEO constants and structured data.
// Keep the domain here in sync with app/sitemap.ts and app/robots.ts.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bostonexclusivelivery.com";

export const SITE_NAME = "Boston Exclusive Transportation";
export const SITE_SHORT = "BET";

export const SITE_DESCRIPTION =
  "Private car service in Boston. Late-model luxury fleet, vetted chauffeurs, flat Logan rates with flight tracking. Quotes include tolls and gratuity.";

// Public contact details. The primary number matches PHONE_DISPLAY/PHONE_HREF
// in lib/services.ts, which the site UI renders.
export const PHONE_PRIMARY = "+1-617-251-8384";
export const PHONE_SECONDARY = "+1-617-777-6164";
export const SUPPORT_EMAIL = "support@bostonexclusive.com";

// TODO: add real social profile URLs (Instagram, Facebook, X, etc.).
export const SOCIAL_PROFILES: string[] = [];

/**
 * Organization + LocalBusiness + WebSite JSON-LD for the whole site.
 * Rendered once in the root layout.
 */
export function siteJsonLd() {
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: "Boston Exclusive, LLC",
    url: SITE_URL,
    logo: `${SITE_URL}/BET-Logo.svg`,
    email: SUPPORT_EMAIL,
    telephone: PHONE_PRIMARY,
    ...(SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES } : {}),
  };

  const localBusiness = {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    logo: `${SITE_URL}/BET-Logo.svg`,
    description: SITE_DESCRIPTION,
    email: SUPPORT_EMAIL,
    telephone: PHONE_PRIMARY,
    priceRange: "$$$",
    // TODO: add streetAddress + postalCode when available.
    address: {
      "@type": "PostalAddress",
      addressLocality: "Boston",
      addressRegion: "MA",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Boston" },
      { "@type": "AdministrativeArea", name: "Greater Boston" },
      { "@type": "State", name: "Massachusetts" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE_PRIMARY,
        contactType: "reservations",
        areaServed: "US",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: PHONE_SECONDARY,
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    ...(SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES } : {}),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, localBusiness, website],
  };
}
