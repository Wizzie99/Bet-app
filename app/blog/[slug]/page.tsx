import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";

import { ArrowOutwardIcon } from "@/components/FleetIcons";
import { PHONE_DISPLAY, PHONE_HREF, getService } from "@/lib/services";
import {
  POSTS,
  postReadingMinutes,
  getPost,
  type RichText,
} from "@/lib/posts";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import s from "../blog.module.css";

const geist = Geist({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [SITE_NAME],
      images: [{ url: post.hero.src, alt: post.hero.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.hero.src],
    },
  };
}

function Rich({ text }: { text: RichText }) {
  return text.map((part, index) => {
    if (typeof part === "string") return <span key={index}>{part}</span>;
    if (part.external) {
      return (
        <a key={index} href={part.href} target="_blank" rel="noopener noreferrer">
          {part.label}
        </a>
      );
    }
    return (
      <Link key={index} href={part.href}>
        {part.label}
      </Link>
    );
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const minutes = postReadingMinutes(post);
  const related = post.related
    .map((serviceSlug) => getService(serviceSlug))
    .filter((service) => service !== undefined);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.h1,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    image: `${SITE_URL}${post.hero.src}`,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/BET-Logo.svg` },
    },
    mainEntityOfPage: url,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.h1, item: url },
    ],
  };

  return (
    <div className={`${s.page} ${geist.variable} ${geistMono.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className={s.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
        <Link href="/blog">Blog</Link>
        <span aria-hidden="true">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
        <span className={s.breadcrumbCurrent}>{post.h1}</span>
      </nav>

      <div className={s.shell}>
        <header className={s.header}>
          <p className={s.eyebrow}>Guide</p>
          <h1 className={s.h1}>{post.h1}</h1>
          <p className={s.intro}>{post.excerpt}</p>
          <p className={s.byline}>
            <time dateTime={post.publishedAt}>{post.displayDate}</time>
            <span>{minutes} minute read</span>
            <span>{SITE_NAME}</span>
          </p>
        </header>

        <div className={s.hero}>
          <Image
            src={post.hero.src}
            alt={post.hero.alt}
            fill
            className={s.heroImg}
            sizes="(max-width: 1000px) 100vw, 920px"
            priority
          />
        </div>

        <nav className={s.article} aria-label="On this page">
          <h2 className={s.h2}>On this page</h2>
          <ul className={s.toc}>
            {post.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.heading}</a>
              </li>
            ))}
          </ul>
        </nav>

        <article className={s.article}>
          {post.sections.map((section) => (
            <section key={section.id} id={section.id} className={s.section} aria-labelledby={`${section.id}-heading`}>
              <h2 id={`${section.id}-heading`} className={s.h2}>
                {section.heading}
              </h2>
              <div className={s.prose}>
                {section.blocks.map((block, index) =>
                  block.kind === "p" ? (
                    <p key={index}>
                      <Rich text={block.text} />
                    </p>
                  ) : (
                    <ul key={index} className={s.list}>
                      {block.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Rich text={item} />
                        </li>
                      ))}
                    </ul>
                  ),
                )}
              </div>
            </section>
          ))}
        </article>

        <section className={s.cta}>
          <div className={s.ctaCopy}>
            <p className={s.ctaTitle}>Ready when the details are</p>
            <p className={s.ctaBody}>
              Get a price before you book. Tolls and gratuity are already in it.
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

        {related.length > 0 && (
          <section className={s.related} aria-labelledby="related-heading">
            <h2 id="related-heading" className={s.relatedHead}>
              Related services
            </h2>
            <div className={s.relatedRow}>
              {related.map((service) => (
                <Link key={service.slug} href={service.href} className={s.relatedCard}>
                  <span className={s.relatedName}>
                    {service.name}
                    <ArrowOutwardIcon />
                  </span>
                  <p className={s.relatedSummary}>{service.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
