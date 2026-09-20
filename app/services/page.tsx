// app/services/page.tsx
//
// Services hub — the landing target for the "Services" parent link in the
// navbar and footer. Lists all eight services, each linking to its
// /services/[slug] page.

import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";

import { ArrowOutwardIcon } from "@/components/FleetIcons";
import { PHONE_DISPLAY, PHONE_HREF, SERVICES } from "@/lib/services";
import s from "./services-index.module.css";

const geist = Geist({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://YOUR-DOMAIN.com";

const title = "Car Services in Boston — Airport, Corporate, Events | BET";
const description =
  "Airport transfers, hourly chauffeurs, corporate accounts, weddings and event travel across Greater Boston.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE}/services` },
  openGraph: { title, description, url: `${SITE}/services`, type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function ServicesIndexPage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Boston Exclusive Transportation services",
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.name,
      url: `${SITE}/services/${service.slug}`,
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
    ],
  };

  return (
    <div className={`${s.page} ${geist.variable} ${geistMono.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className={s.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
        <span className={s.breadcrumbCurrent}>Services</span>
      </nav>

      <div className={s.shell}>
        <header className={s.header}>
          <p className={s.eyebrow}>Services</p>
          <h1 className={s.h1}>However you need to move</h1>
          <p className={s.lede}>
            Eight ways we drive, one standard — late-model vehicles, vetted chauffeurs,
            and a price quoted before you book, with tolls and gratuity already inside it.
          </p>
        </header>

        <ul className={s.grid}>
          {SERVICES.map((service) => (
            <li key={service.slug}>
              <Link href={service.href} className={s.card}>
                <span className={s.cardName}>
                  {service.name}
                  <ArrowOutwardIcon />
                </span>
                <p className={s.cardSummary}>{service.summary}</p>
              </Link>
            </li>
          ))}
        </ul>

        <section className={s.cta}>
          <div className={s.ctaCopy}>
            <p className={s.ctaTitle}>Not sure which one you need?</p>
            <p className={s.ctaBody}>
              Tell us the trip and we&rsquo;ll put the right vehicle and chauffeur on it —
              airport, hourly, group, or something in between.
            </p>
          </div>
          <div className={s.ctaActions}>
            <Link href="/reserve" className={s.ctaPrimary}>
              Reserve now
              <ArrowOutwardIcon />
            </Link>
            <a href={PHONE_HREF} className={s.ctaTel}>
              or call {PHONE_DISPLAY}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
