'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowOutwardIcon, CarIcon, ChevronLeftIcon, ChevronRightIcon, LuggageIcon, SeatIcon } from './FleetIcons';

/**
 * Spec icons shrink one step below `sm` so that the widest labels
 * (Sprinter: Seats:12 / Luggage:10) still fit inside the card.
 */
const CHIP_ICON = 'w-4 h-4 sm:w-5 sm:h-5 shrink-0';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface VehicleCardProps {
  name: string;
  category: string;
  seats: number;
  luggage: number;
  year: number;
  images: { src: string; alt: string }[];
  reserveHref?: string;
  /** Links Details through to /fleet/[slug]. */
  detailHref: string;
}

// ─── VehicleCard ──────────────────────────────────────────────────────────────

export default function VehicleCard({
  name,
  category,
  seats,
  luggage,
  year,
  images,
  reserveHref = '/reserve',
  detailHref,
}: VehicleCardProps) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);

  const goTo = useCallback(
    (index: number) => setCurrent((index + images.length) % images.length),
    [images.length],
  );

  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
  };

  return (
    <div
      data-fleet-card
      className="flex items-center px-4 py-2 shrink-0 snap-start w-[88vw] max-w-[360px] sm:w-[340px] md:w-[360px]"
    >
      <div
        className="flex flex-col items-start w-full rounded-[20px] p-0.5"
        style={{ background: '#131618' }}
      >
        {/* ── Image carousel ───────────────────────────────────────── */}
        <div
          className="relative w-full shrink-0 rounded-tl-[18px] rounded-tr-[18px] overflow-hidden"
          style={{ aspectRatio: '282 / 266' }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          aria-label="Vehicle images"
        >
          {images.map((img, i) => (
            <div
              key={img.src}
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: i === current ? 1 : 0 }}
              aria-hidden={i !== current}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i === 0}
                className="object-cover object-center"
                sizes="(max-width: 480px) 100vw, 400px"
              />
            </div>
          ))}

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label={`Previous ${name} photo`}
                className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#131618]/55 text-[#f3f4f1] transition-colors hover:border-[#1c60ff] hover:bg-[#1c60ff]"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label={`Next ${name} photo`}
                className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#131618]/55 text-[#f3f4f1] transition-colors hover:border-[#1c60ff] hover:bg-[#1c60ff]"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
              <div
                className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-[6px]"
                role="tablist"
                aria-label="Image indicators"
              >
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`View image ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={[
                      'h-[6px] rounded-full border-0 p-0 transition-all duration-300',
                      i === current
                        ? 'w-6 bg-white'
                        : 'w-[6px] bg-white/40 hover:bg-white/60',
                    ].join(' ')}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* ── Info section ─────────────────────────────────────────── */}
        <div className="flex flex-col items-start w-full shrink-0">

          {/* Name + category */}
          <div
            className="flex flex-col gap-1 w-full px-4 pt-3 pb-1.5 border-t"
            style={{
              background: '#131618',
              borderColor: '#515c65',
              borderTopWidth: '0.5px',
              borderStyle: 'solid',
            }}
          >
            <p
              className="w-full shrink-0"
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 500,
                fontSize: 20,
                lineHeight: '24px',
                letterSpacing: '-0.6px',
                color: '#f3f4f1',
              }}
            >
              {detailHref ? (
                <Link href={detailHref} className="hover:underline">
                  {name}
                </Link>
              ) : (
                name
              )}
            </p>
            <p
              className="w-full shrink-0"
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 400,
                fontSize: 12,
                lineHeight: '16px',
                letterSpacing: '-0.36px',
                color: '#bbbcb8',
              }}
            >
              {category}
            </p>
          </div>

          {/* Specs row — wraps instead of overflowing when labels run long */}
          <div
            className="flex flex-wrap items-center gap-x-2 gap-y-2 w-full px-4 py-3 border-b sm:flex-nowrap sm:justify-between sm:gap-x-0"
            style={{
              background: '#131618',
              borderColor: '#515c65',
              borderBottomWidth: '0.5px',
              borderStyle: 'solid',
            }}
          >
            {/* Seats */}
            <div
              className="flex items-center gap-1 px-2.5 py-1 rounded-full shrink-0 sm:px-3"
              style={{ background: '#24282b', color: '#eff0eb' }}
            >
              <SeatIcon className={CHIP_ICON} />
              <span
                className="whitespace-nowrap"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: '16px',
                  letterSpacing: '-0.36px',
                }}
              >
                Seats:{seats}
              </span>
            </div>

            {/* Divider — decorative, dropped once the row can wrap */}
            <div
              className="hidden shrink-0 sm:block"
              style={{
                width: 0.5,
                height: 28,
                background: '#515c65',
              }}
              aria-hidden="true"
            />

            {/* Luggage */}
            <div
              className="flex items-center gap-1 px-2.5 py-1 rounded-full shrink-0 sm:px-3"
              style={{ background: '#24282b', color: '#eff0eb' }}
            >
              <LuggageIcon className={CHIP_ICON} />
              <span
                className="whitespace-nowrap"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: '16px',
                  letterSpacing: '-0.36px',
                }}
              >
                Luggage:{luggage}
              </span>
            </div>

            {/* Divider */}
            <div
              className="hidden shrink-0 sm:block"
              style={{
                width: 0.5,
                height: 28,
                background: '#515c65',
              }}
              aria-hidden="true"
            />

            {/* Year */}
            <div
              className="flex items-center gap-1 px-2.5 py-1 rounded-full shrink-0 sm:px-3"
              style={{ background: '#24282b', color: '#eff0eb' }}
            >
              <CarIcon className={CHIP_ICON} />
              <span
                className="whitespace-nowrap"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: '16px',
                  letterSpacing: '-0.36px',
                }}
              >
                {year}
              </span>
            </div>
          </div>

          {/* Details + Reserve button */}
          <div
            className="flex flex-wrap items-center justify-between gap-3 w-full p-4 rounded-bl-[14px] rounded-br-[14px]"
            style={{ background: '#131618' }}
          >
            <Link
              href={detailHref}
              className="whitespace-nowrap shrink-0 underline underline-offset-4 transition-opacity hover:opacity-80"
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontWeight: 500,
                fontSize: 16,
                lineHeight: '20px',
                letterSpacing: '-0.48px',
                textTransform: 'uppercase',
                color: '#eff0eb',
              }}
            >
              Details
            </Link>

            <Link
              href={reserveHref}
              className="flex items-center justify-between gap-1 rounded-full flex-1 min-w-[152px] max-w-[180px] transition-opacity hover:opacity-90"
              style={{
                background: '#eff0eb',
                paddingLeft: 16,
                paddingRight: 4,
                paddingTop: 4,
                paddingBottom: 4,
              }}
            >
              <span
                className="whitespace-nowrap"
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: '20px',
                  letterSpacing: '-0.48px',
                  textTransform: 'uppercase',
                  color: '#191a19',
                }}
              >
                Get a quote
              </span>
              <span
                className="flex items-center justify-center rounded-full shrink-0"
                style={{
                  background: '#2e2e2d',
                  width: 24,
                  height: 24,
                  color: '#eff0eb',
                }}
                aria-hidden="true"
              >
                <ArrowOutwardIcon className="w-4 h-4" />
              </span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
