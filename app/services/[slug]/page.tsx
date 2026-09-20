// app/services/[slug]/page.tsx
//
// One template for all eight service pages. Content and copy live in
// lib/services.ts; each page renders metadata → H1 → intro → sections →
// FAQ → CTA, with related-service cross-links. The on-page FAQ and the
// FAQPage JSON-LD read from the same array so they match word-for-word.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";

import { ArrowOutwardIcon } from "@/components/FleetIcons";
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICES,
  getRelatedServices,
  getService,
} from "@/lib/services";
import s from "./service-detail.module.css";

const geist = Geist({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://YOUR-DOMAIN.com";

/* ── Static generation ─────────────────────────────────────────── */

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `${SITE}/services/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `${SITE}/services/${service.slug}`,
      type: "website",
      ...(service.image
        ? { images: [{ url: `${SITE}${service.image.src}`, width: 1200, height: 630 }] }
        : {}),
    },
    twitter: { card: "summary_large_image" },
  };
}

/* ── Page ──────────────────────────────────────────────────────── */

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.slug);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
      { "@type": "ListItem", position: 3, name: service.name },
    ],
  };

  return (
    <div className={`${s.page} ${geist.variable} ${geistMono.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* ── Breadcrumb ── */}
      <nav className={s.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
        <Link href="/services">Services</Link>
        <span aria-hidden="true">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
        <span className={s.breadcrumbCurrent}>{service.name}</span>
      </nav>

      <div className={s.shell}>
        <div className={service.image ? `${s.hero} ${s.heroPhoto}` : s.hero}>
          {service.image ? (
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              className={s.heroImg}
              sizes="(max-width: 1000px) 100vw, 920px"
              priority
            />
          ) : (
            <div className={s.ph}>
              <span className={s.phLabel}>IMG · {service.name}</span>
            </div>
          )}
        </div>

        {/* ── Header ── */}
        <header className={s.header}>
          <p className={s.eyebrow}>Services</p>
          <h1 className={s.h1}>{service.h1}</h1>
          <p className={s.intro}>{service.intro}</p>
        </header>

        {/* ── Content sections ── */}
        <div className={s.sections}>
          {service.sections.map((section) => {
            const isRate = section.heading === "Rates";
            return (
              <section
                key={section.heading}
                className={isRate ? `${s.section} ${s.sectionRate}` : s.section}
              >
                <h2 className={s.h2}>{section.heading}</h2>
                <p className={s.sectionBody}>{section.body}</p>
              </section>
            );
          })}
        </div>

        {/* ── FAQ ── */}
        <section className={s.faq} aria-labelledby="faq-heading">
          <h2 id="faq-heading" className={s.faqHead}>
            Common questions
          </h2>
          {service.faq.map((item) => (
            <div key={item.q} className={s.faqItem}>
              <h3 className={s.faqQ}>{item.q}</h3>
              <p className={s.faqA}>{item.a}</p>
            </div>
          ))}
        </section>

        {/* ── CTA ── */}
        <section className={s.cta}>
          <div className={s.ctaCopy}>
            <p className={s.ctaTitle}>Ready when you are</p>
            <p className={s.ctaBody}>
              Get a price before you book — no surge, tolls and gratuity already included.
            </p>
          </div>
          <div className={s.ctaActions}>
            <Link href={`/reserve?service=${service.slug}`} className={s.ctaPrimary}>
              {service.ctaLabel}
              <ArrowOutwardIcon />
            </Link>
            <a href={PHONE_HREF} className={s.ctaTel}>
              or call {PHONE_DISPLAY}
            </a>
          </div>
        </section>

        {/* ── Related services ── */}
        {related.length > 0 && (
          <section className={s.related} aria-labelledby="related-heading">
            <h2 id="related-heading" className={s.relatedHead}>
              Related services
            </h2>
            <div className={s.relatedRow}>
              {related.map((item) => (
                <Link key={item.slug} href={item.href} className={s.relatedCard}>
                  <span className={s.relatedName}>
                    {item.name}
                    <ArrowOutwardIcon />
                  </span>
                  <p className={s.relatedSummary}>{item.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
