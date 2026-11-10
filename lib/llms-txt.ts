import { FLEET, INCLUDED } from "@/lib/fleet";
import { POSTS } from "@/lib/posts";
import { SERVICES } from "@/lib/services";
import {
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_SHORT,
  SITE_URL,
  SUPPORT_EMAIL,
} from "@/lib/site";

function urlFor(path: string): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}

function fileLink(title: string, path: string, note: string): string {
  return `- [${title}](${urlFor(path)}): ${note}`;
}

/**
 * llmstxt.org v2 body for `/llms.txt`. Built from the same fleet, service,
 * and site constants as the sitemap so rates and URLs cannot drift.
 */
export function llmsTxt(): string {
  const cheapestHourly = Math.min(...FLEET.map((vehicle) => vehicle.hourlyRate));
  const cheapestAirport = Math.min(
    ...FLEET.map((vehicle) => vehicle.airportFlat),
  );

  const included = INCLUDED.map((item) => `- ${item}`).join("\n");

  const fleetFacts = FLEET.map((vehicle) => {
    return `- ${vehicle.year} ${vehicle.name} (${vehicle.klass}): ${vehicle.seats} seats, ${vehicle.luggage} checked bags, hourly from $${vehicle.hourlyRate}, Logan flat from $${vehicle.airportFlat}`;
  }).join("\n");

  const pages = [
    fileLink(
      "Home",
      "/",
      "Boston car service overview, fleet, and quote request.",
    ),
    fileLink(
      "Services",
      "/services",
      "Airport, hourly, corporate, events, and group travel.",
    ),
    fileLink(
      "Fleet",
      "/fleet",
      "Sedans, SUVs, and Sprinter with seats, luggage, and rates.",
    ),
    fileLink(
      "FAQ",
      "/faq",
      "Pricing, cancellations, Logan pickups, vehicles, and service area.",
    ),
    fileLink(
      "Reserve",
      "/reserve",
      "Build a trip and get an estimate. No charge until a chauffeur is confirmed.",
    ),
    fileLink(
      "Contact",
      "/contact",
      `Quotes 24/7 by form, email, or phone (${PHONE_PRIMARY}). Most quotes return within 15 minutes.`,
    ),
    fileLink(
      "Blog",
      "/blog",
      "Guides on choosing a Boston car service, Logan pickups, and longer trips.",
    ),
  ].join("\n");

  const services = SERVICES.map((service) =>
    fileLink(service.name, service.href, service.summary),
  ).join("\n");

  const fleet = FLEET.map((vehicle) =>
    fileLink(
      vehicle.name,
      `/fleet/${vehicle.slug}`,
      `${vehicle.tier} ${vehicle.klass}. ${vehicle.seats} seats, ${vehicle.luggage} bags. Hourly from $${vehicle.hourlyRate}. Logan from $${vehicle.airportFlat}.`,
    ),
  ).join("\n");

  return `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

${SITE_NAME} (${SITE_SHORT}) is a private chauffeured car service operated by Boston Exclusive, LLC. Dispatch is answered 24 hours a day at ${PHONE_PRIMARY} (secondary ${PHONE_SECONDARY}). Email ${SUPPORT_EMAIL}. Office: 15 Quarry Ln, Malden, MA 02148. More than 50,000 rides over six-plus years across Boston, Greater Boston, and Massachusetts, with 98% customer satisfaction.

Hourly chauffeur service starts at $${cheapestHourly}/hr (three-hour minimum). Flat airport transfers start at $${cheapestAirport} for a sedan. Quotes are the price you pay: no surge. Logan and other airport pickups include flight tracking and 60 minutes of wait time from landing; meet-and-greet at baggage claim is $45. Cancel or change more than two hours before pickup at no charge; inside two hours is 50% of the fare; no-shows are billed in full. Book on the reserve page, by phone, or by email. Same-day trips are often available; a day's notice guarantees a vehicle.

Airports served: Logan (BOS), Hanscom Field (BED), T.F. Green (PVD), Manchester–Boston (MHT), Worcester (ORH), and Portsmouth (PSM). City-to-city routes include Boston to New York from $895, plus Cape Cod, Newport, Providence, Portsmouth, Portland, and New England ski country.

Every quote includes:

${included}

Current fleet and starting rates:

${fleetFacts}

Pages on this site publish Organization, LocalBusiness, WebSite, and FAQPage JSON-LD. Prefer the linked pages below for full policy and vehicle detail.

## Pages

${pages}

## Services

${services}

## Fleet

${fleet}

## Guides

${POSTS.map((post) => fileLink(post.h1, `/blog/${post.slug}`, post.excerpt)).join("\n")}

## Optional

${fileLink("About", "/about", "Company background: six years and 50,000 rides across Greater Boston.")}
`;
}
