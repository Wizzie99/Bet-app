import Image from 'next/image';
import Link from 'next/link';

const STATS = [
  { value: '50,000', label: 'Rides completed' },
  { value: '6+',     label: 'Years serving Boston' },
  { value: '98%',    label: 'Customer satisfaction' },
];

export default function StatsSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ padding: '112px 64px' }}>
      {/* Background */}
      <Image
        src="/Images/boston-skyline.jpg"
        alt="Boston skyline at sunset"
        fill
        className="object-cover object-bottom"
        sizes="100vw"
        priority
      />
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col gap-20">

        {/* Top row — heading + description + CTAs */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          <h2
            style={{
              fontFamily: "'Lastik', 'Georgia', serif",
              fontWeight: 400,
              fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: 1.2,
              letterSpacing: '-0.96px',
              color: '#eff0eb',
              maxWidth: 364,
            }}
          >
            Trusted by<br />Boston for years
          </h2>

          <div className="flex flex-col gap-8 max-w-[530px]">
            <p
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 500,
                fontSize: 20,
                lineHeight: '26px',
                letterSpacing: '-0.6px',
                color: '#eff0eb',
              }}
            >
              We&apos;ve built our reputation on reliability and excellence. These numbers tell our story.
            </p>

            <div className="flex items-center gap-4">
              {/* Ghost button — Contact */}
              <Link
                href="/contact"
                className="flex items-center gap-1.5 px-5 py-3 rounded-md transition-colors hover:bg-white/10"
              >
                <span
                  className="uppercase"
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: '20px',
                    letterSpacing: '-0.48px',
                    color: '#eff0eb',
                  }}
                >
                  Contact
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 18l6-6-6-6" stroke="#eff0eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              {/* Filled button — Book */}
              <Link
                href="/reserve"
                className="flex items-center gap-1.5 px-5 py-3 rounded-md transition-opacity hover:opacity-90"
                style={{ background: '#eff0eb' }}
              >
                <span
                  className="uppercase"
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: '20px',
                    letterSpacing: '-0.48px',
                    color: '#595a59',
                  }}
                >
                  Book
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H7M17 7v10" stroke="#595a59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 w-full">
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col gap-2 flex-1 min-w-0 pl-8"
              style={{ borderLeft: '1px solid #eff0eb' }}
            >
              <p
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontWeight: 400,
                  fontSize: 'clamp(48px, 6vw, 80px)',
                  lineHeight: 1.3,
                  letterSpacing: '-4px',
                  color: '#eff0eb',
                }}
              >
                {value}
              </p>
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 700,
                  fontSize: 20,
                  lineHeight: 1.4,
                  color: '#eff0eb',
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
