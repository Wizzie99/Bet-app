// app/fleet/page.tsx
//
// Fleet index — the landing target for the "Fleet" links in the navbar,
// footer, mobile menu, and the Hero "See the fleet" button. Cards link through
// to app/fleet/[slug].
//
// Cards use /public/Images when a matching shoot exists; the rest stay
// labelled placeholders until those files land.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";

import { ArrowOutwardIcon, CarIcon, LuggageIcon, SeatIcon } from "@/components/FleetIcons";
import { FLEET, hasFleetPhoto } from "@/lib/fleet";
import s from "./fleet-index.module.css";

const geist = Geist({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://YOUR-DOMAIN.com";

const title = "Luxury Fleet — Sedans, SUVs & Sprinters | BET Boston";
const description =
  "Choose from the S-Class, Escalade, Suburban, Sprinter and more. Seats, luggage capacity, and hourly rates listed for every vehicle.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE}/fleet` },
  openGraph: { title, description, url: `${SITE}/fleet`, type: "website" },
  twitter: { card: "summary_large_image" },
};

function Placeholder({ label }: { label: string }) {
  return (
    <div className={s.ph}>
      <span className={s.phLabel}>{label}</span>
    </div>
  );
}

export default function FleetIndexPage() {
  const fromRate = Math.min(...FLEET.map((v) => v.hourlyRate));

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Boston Exclusive Transportation fleet",
    itemListElement: FLEET.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${v.year} ${v.name}`,
      url: `${SITE}/fleet/${v.slug}`,
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Fleet", item: `${SITE}/fleet` },
    ],
  };

  return (
    <div className={`${s.page} ${geist.variable} ${geistMono.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className={s.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
        <span className={s.breadcrumbCurrent}>Fleet</span>
      </nav>

      <div className={s.shell}>
        {/* ── Masthead ── */}
        <section className={s.masthead}>
          <p className={s.eyebrow}>●&nbsp;&nbsp;{FLEET.length} VEHICLES · FROM ${fromRate}/HR</p>
          <h1 className={s.h1}>Check our fleet</h1>
          <p className={s.lede}>
            Sedans, SUVs, and vans in current model years, each maintained in-house and
            driven by a chauffeur we vetted ourselves. Every quote includes tolls,
            gratuity, and flight tracking — pick the vehicle that fits your party and
            your bags.
          </p>
        </section>

        {/* ── Vehicles ── */}
        <ul className={s.grid}>
          {FLEET.map((v) => (
            <li key={v.slug}>
              <Link href={`/fleet/${v.slug}`} className={s.card}>
                <div className={s.media}>
                  {hasFleetPhoto(v.cardImage) ? (
                    <Image
                      src={v.cardImage}
                      alt={v.gallery[0].alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                  ) : (
                    <Placeholder label={v.gallery[0].alt} />
                  )}
                  <span className={s.mediaTag}>{v.tier}</span>
                </div>

                <div className={s.cardBody}>
                  <div className={s.cardHead}>
                    <span className={s.cardName}>{v.name}</span>
                    <span className={s.cardClass}>
                      {v.year} · {v.klass}
                    </span>
                  </div>

                  <ul className={s.specs}>
                    <li className={s.chip}>
                      <SeatIcon />
                      Seats:{v.seats}
                    </li>
                    <li className={s.divider} aria-hidden="true" />
                    <li className={s.chip}>
                      <LuggageIcon />
                      Luggage:{v.luggage}
                    </li>
                    <li className={s.divider} aria-hidden="true" />
                    <li className={s.chip}>
                      <CarIcon />
                      {v.year}
                    </li>
                  </ul>

                  <p className={s.cardBlurb}>{v.blurb}</p>

                  <div className={s.cardFoot}>
                    <span className={s.rate}>
                      ${v.hourlyRate}/hr <span className={s.rateNote}>· ${v.airportFlat} to Logan</span>
                    </span>
                    <span className={s.viewLink}>
                      Details
                      <ArrowOutwardIcon />
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Closing CTA ── */}
        <section className={s.cta}>
          <div className={s.ctaCopy}>
            <h2 className={s.ctaTitle}>Not sure which one you need?</h2>
            <p className={s.ctaBody}>
              Tell us your party size, bag count, and pickup time and we&rsquo;ll put the
              right vehicle on it. Larger groups, multi-car moves, and hourly day hires
              are all handled by the same dispatcher.
            </p>
          </div>
          <div className={s.ctaActions}>
            <Link href="/reserve" className={s.ctaPrimary}>
              Reserve now
              <ArrowOutwardIcon />
            </Link>
            <a href="tel:+18579304661" className={s.ctaTel}>
              24/7&nbsp;&nbsp;(857)&nbsp;930-4661
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
