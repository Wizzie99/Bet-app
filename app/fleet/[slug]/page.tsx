// app/fleet/[slug]/page.tsx
//
// Vehicle detail page — implemented from Figma
// Boston-Exclusive-WEB · node 1112:4314 ("Reserve / Escalade — Desktop")
//
// ── SETUP (still outstanding) ─────────────────────────────────────
// 1. Photography: S-Class, Escalade, and Suburban use /public/Images.
//    Other vehicles still render labelled placeholder tiles.
// 2. Fonts: Geist + Geist Mono load below. Lastik is a licensed face —
//    drop Lastik-Free.woff2 into /public/fonts (see the module CSS).
// 3. Set NEXT_PUBLIC_SITE_URL so canonical/OG URLs and JSON-LD resolve.
//
// ── DEVIATIONS FROM THE FRAME ─────────────────────────────────────
// · The frame carried its own header; app/layout.tsx already renders
//   <Navbar>, <main>, and <Footer>, so the header and skip link are
//   dropped and the shell is a <div> to avoid nesting a second <main>.
// · Frame breadcrumb read "Mercedes Benz S-Class" while the H1 read
//   "Chevrolet Suburban" — both now come from one data record.
// · Alternates row repeated "Cadillac-Escalade / Seats:4" three times;
//   now pulls three real, distinct vehicles.
// · Copy typos fixed: "we charger 50%" → "we charge 50%";
//   "Above that. the" → "Above that, the"; "counts as no-show" →
//   "counts as a no-show"; "after ride is complete" → "after the ride
//   is complete"; "Your chauffeur , 12 hours out" → comma spacing.
// · Escalade labelled "Premium SUV" in the frame; it's a Luxury SUV.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";

import { CarIcon, CheckIcon, LuggageIcon, SeatIcon } from "@/components/FleetIcons";
import { FLEET, FLIGHT_ROWS, INCLUDED, getAlternates, getVehicle, hasFleetPhoto } from "@/lib/fleet";
import Gallery from "./Gallery";
import s from "./vehicle-detail.module.css";

const geist = Geist({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://YOUR-DOMAIN.com";

/* ── Static generation ─────────────────────────────────────────── */

export function generateStaticParams() {
  return FLEET.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const v = getVehicle(slug);
  if (!v) return {};

  const titles: Record<string, string> = {
    "cadillac-escalade": "Cadillac Escalade with Chauffeur in Boston | BET",
    "mercedes-benz-s-class": "Mercedes S-Class Chauffeur Service in Boston | BET",
  };
  const descriptions: Record<string, string> = {
    "cadillac-escalade": `Reserve a ${v.year} Escalade with a professional chauffeur. Seats ${v.seats} with ${v.luggage} bags. $${v.hourlyRate}/hr or flat-rate Logan transfers with flight tracking.`,
    "mercedes-benz-s-class": `Boston's executive sedan. ${v.year} S-Class with a vetted chauffeur from $${v.hourlyRate}/hr. Flat airport rates, gratuity and tolls included.`,
  };

  const title = titles[v.slug] ?? `${v.name} with Chauffeur in Boston | BET`;
  const description =
    descriptions[v.slug] ??
    `Reserve a ${v.year} ${v.name} with a vetted Boston chauffeur. Seats ${v.seats} with ${v.luggage} bags. $${v.hourlyRate}/hr, or $${v.airportFlat} flat to Logan with flight tracking.`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE}/fleet/${v.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE}/fleet/${v.slug}`,
      type: "website",
      images: [{ url: `${SITE}${v.gallery[0].src}`, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image" },
  };
}

/* ── Photography placeholder ───────────────────────────────────── */

function Placeholder({ label, large = false }: { label: string; large?: boolean }) {
  return (
    <div className={s.ph}>
      <span className={large ? `${s.phLabel} ${s.phLabelLg}` : s.phLabel}>{label}</span>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = getVehicle(slug);
  if (!v) notFound();

  const alternates = getAlternates(v.slug);
  const isLargest = FLEET.every((other) => other.seats <= v.seats);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${v.name} chauffeur service`,
    description: v.blurb,
    image: `${SITE}${v.gallery[0].src}`,
    brand: { "@type": "Brand", name: "Boston Exclusive Transportation" },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: String(v.hourlyRate),
      availability: "https://schema.org/InStock",
      url: `${SITE}/fleet/${v.slug}`,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Fleet", item: `${SITE}/fleet` },
      { "@type": "ListItem", position: 3, name: v.name },
    ],
  };

  return (
    <div className={`${s.page} ${geist.variable} ${geistMono.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* ── Breadcrumb ── */}
      <nav className={s.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
        <Link href="/fleet">Fleet</Link>
        <span aria-hidden="true">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
        <span className={s.breadcrumbCurrent}>{v.name}</span>
      </nav>

      <div className={s.shell}>
        {/* ── Gallery ── */}
        <Gallery images={v.gallery} year={v.year} vehicleName={v.name} />

        {/* ── Nameplate ── */}
        <section className={s.nameplate}>
          <p className={s.eyebrow}>●&nbsp;&nbsp;{v.tier.toUpperCase()}</p>
          <h1 className={s.h1}>{v.name}</h1>
          <p className={s.blurb}>{v.blurb}</p>
          <ul className={s.chips}>
            <li className={s.chip}>
              <SeatIcon />
              <span>Seats:{v.seats}</span>
            </li>
            <li className={s.chip}>
              <LuggageIcon />
              <span>Luggage:{v.luggage}</span>
            </li>
            <li className={s.chip}>
              <CarIcon />
              <span>{v.year}</span>
            </li>
          </ul>
        </section>

        {/* ── What the price covers ── */}
        <section className={s.section}>
          <div className={s.sectionHead}>
            <h2 className={s.h2}>What the price covers</h2>
            <p className={s.lede}>
              Your quote is the amount you pay. We don&rsquo;t add anything after the ride.
            </p>
          </div>
          <ul className={s.includedGrid}>
            {INCLUDED.map((item) => (
              <li key={item} className={s.includedRow}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Flight tracking ── */}
        <section className={s.section}>
          <div className={s.sectionHead}>
            <h2 className={s.h2}>We watch your flight, not the clock</h2>
            <p className={s.lede}>
              Add your flight number and we track it from wheels-up. If you land early
              we&rsquo;re already there; if you&rsquo;re delayed, your pickup moves with you at
              no charge.
            </p>
          </div>

          <div className={s.boardCard}>
            <div className={s.boardInner}>
              <div className={s.boardHead}>
                <h3 className={s.boardTitle}>Example — tonight&rsquo;s arrivals into Logan</h3>
                <span className={s.boardLive}>UPDATED 14 SEC AGO</span>
              </div>

              {FLIGHT_ROWS.map((r, i) => (
                <div key={r.code} className={`${s.flightRow} ${i > 0 ? s.flightRowDivided : ""}`}>
                  <span className={s.flightCode}>{r.code}</span>
                  <span className={s.flightRoute}>{r.route}</span>
                  <span className={r.late ? s.flightStatusHot : s.flightStatus}>{r.status}</span>
                </div>
              ))}

              <p className={s.boardNote}>
                For the delayed flight above, your chauffeur is rescheduled automatically
                and the wait-time clock starts when you land — not when you were
                originally due.
              </p>
            </div>
          </div>
        </section>

        {/* ── Before you book ── */}
        <section className={s.section}>
          <h2 className={s.h2}>Before you book</h2>
          <div className={s.policyGrid}>
            <div className={s.policyCard}>
              <h3 className={s.policyTitle}>Cancel free up to 2 hours ahead</h3>
              <p className={s.policyBody}>
                Cancel or change within two hours of pickup and we charge 50%.
                No-shows are billed in full.
              </p>
            </div>
            <div className={s.policyCard}>
              <h3 className={s.policyTitle}>Nothing is charged today</h3>
              <p className={s.policyBody}>
                We authorize your card when a chauffeur is assigned and capture it after
                the ride is complete.
              </p>
            </div>
            <div className={s.policyCard}>
              <h3 className={s.policyTitle}>
                {v.seats} passengers, {v.luggage} bags
              </h3>
              <p className={s.policyBody}>
                Above that, the chauffeur can decline for safety and the ride counts as a
                no-show. Call us and we&rsquo;ll{" "}
                {isLargest ? "add a second vehicle" : "send a Sprinter"}.
              </p>
            </div>
            <div className={s.policyCard}>
              <h3 className={s.policyTitle}>Your chauffeur, 12 hours out</h3>
              <p className={s.policyBody}>
                You&rsquo;ll get their name, photo, and mobile number the night before, and
                live tracking on the day.
              </p>
            </div>
          </div>
        </section>

        {/* ── Alternates ── */}
        <section className={s.section}>
          <h2 className={s.h2Display}>
            If the {v.name.split(" ").slice(-1)[0]} isn&rsquo;t the fit
          </h2>
          <div className={s.altRow}>
            {alternates.map((a) => (
              <Link key={a.slug} href={`/fleet/${a.slug}`} className={s.altCard}>
                <div className={s.altImageWrap}>
                  {hasFleetPhoto(a.cardImage) ? (
                    <Image
                      src={a.cardImage}
                      alt={`${a.year} ${a.name}`}
                      fill
                      className={s.altImage}
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                  ) : (
                    <Placeholder label={`${a.year} ${a.name}`} />
                  )}
                  <span className={s.altScrim} aria-hidden="true" />
                </div>
                <div className={s.altName}>
                  <span className={s.altNameMain}>{a.name}</span>
                  <span className={s.altNameSub}>{a.klass}</span>
                </div>
                <div className={s.altSpecs}>
                  <span className={s.altChip}>
                    <SeatIcon />
                    Seats:{a.seats}
                  </span>
                  <span className={s.altDivider} aria-hidden="true" />
                  <span className={s.altChip}>
                    <LuggageIcon />
                    Luggage:{a.luggage}
                  </span>
                  <span className={s.altDivider} aria-hidden="true" />
                  <span className={s.altChip}>
                    <CarIcon />
                    {a.year}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* ── Sticky reserve bar ── */}
      <div className={s.reserveBar}>
        <Link href={`/reserve?vehicle=${v.slug}`} className={s.reserveLink}>
          Reserve Now
        </Link>
      </div>
    </div>
  );
}
