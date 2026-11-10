import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";

import { ArrowOutwardIcon } from "@/components/FleetIcons";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/services";
import { POSTS, postReadingMinutes } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";
import s from "./blog.module.css";

const geist = Geist({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

const title = "Boston Car Service Guides";
const description =
  "Practical guides to booking a Boston car service: Logan pickups, hourly chauffeurs, corporate travel, and the drive to New York.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title, description, url: "/blog", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function BlogIndexPage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Boston Exclusive Transportation guides",
    itemListElement: POSTS.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.h1,
      url: `${SITE_URL}/blog/${post.slug}`,
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
    ],
  };

  return (
    <div className={`${s.page} ${geist.variable} ${geistMono.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className={s.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
        <span className={s.breadcrumbCurrent}>Blog</span>
      </nav>

      <div className={s.shell}>
        <header className={s.header}>
          <p className={s.eyebrow}>Blog</p>
          <h1 className={s.h1}>Guides for the ride</h1>
          <p className={s.lede}>
            What to settle before you book a car in Boston: the vehicle, the pickup, and the price.
          </p>
        </header>

        <ul className={s.indexList}>
          {POSTS.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className={s.feature}>
                <div className={s.featureCopy}>
                  <p className={s.byline}>
                    <time dateTime={post.publishedAt}>{post.displayDate}</time>
                    <span>{postReadingMinutes(post)} minute read</span>
                  </p>
                  <h2 className={s.featureTitle}>{post.h1}</h2>
                  <p className={s.featureExcerpt}>{post.excerpt}</p>
                  <span className={s.featureLink}>
                    Read the guide
                    <ArrowOutwardIcon />
                  </span>
                </div>
                <div className={s.featureMedia}>
                  <Image
                    src={post.hero.src}
                    alt={post.hero.alt}
                    fill
                    className={s.featureImg}
                    sizes="(max-width: 760px) 100vw, 480px"
                    priority
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <section className={s.cta}>
          <div className={s.ctaCopy}>
            <p className={s.ctaTitle}>Already know the trip?</p>
            <p className={s.ctaBody}>
              Send the addresses and the time. The quote includes tolls and gratuity.
            </p>
          </div>
          <div className={s.ctaActions}>
            <Link href="/reserve" className={s.ctaPrimary}>
              Get a quote
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
