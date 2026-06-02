'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ─── Icons ────────────────────────────────────────────────────────────────────

function SeatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="13" cy="4" r="1.5" fill="#eff0eb" />
      <path
        d="M7 8h5l1 4H8L7 8z"
        fill="#eff0eb"
      />
      <path
        d="M8 12v4h7v-4"
        stroke="#eff0eb"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 16h2"
        stroke="#eff0eb"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LuggageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="9" width="14" height="11" rx="1.5" stroke="#eff0eb" strokeWidth="1.5" />
      <path
        d="M9 9V7a3 3 0 0 1 6 0v2"
        stroke="#eff0eb"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line x1="12" y1="12" x2="12" y2="17" stroke="#eff0eb" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="9.5" y1="14.5" x2="14.5" y2="14.5" stroke="#eff0eb" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 11l1.5-4.5h11L19 11"
        stroke="#eff0eb"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="3" y="11" width="18" height="7" rx="1.5" stroke="#eff0eb" strokeWidth="1.5" />
      <circle cx="7.5" cy="18" r="1.5" fill="#eff0eb" />
      <circle cx="16.5" cy="18" r="1.5" fill="#eff0eb" />
    </svg>
  );
}

function ArrowOutwardIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 5H19M19 5V15M19 5L5 19"
        stroke="#eff0eb"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface VehicleCardProps {
  name: string;
  category: string;
  seats: number;
  luggage: number;
  year: number;
  pricePerHour: number;
  images: { src: string; alt: string }[];
  reserveHref?: string;
}

// ─── VehicleCard ──────────────────────────────────────────────────────────────

export default function VehicleCard({
  name,
  category,
  seats,
  luggage,
  year,
  pricePerHour,
  images,
  reserveHref = '/reserve',
}: VehicleCardProps) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);

  const goTo = useCallback(
    (index: number) => setCurrent((index + images.length) % images.length),
    [images.length],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
  };

  return (
    <div className="flex items-center px-4 py-2 shrink-0 snap-start w-[300px] md:w-[360px]">
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

          {/* Dot indicators */}
          {images.length > 1 && (
            <div
              className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-[6px] z-10"
              role="tablist"
              aria-label="Image indicators"
            >
              {images.map((_, i) => (
                <button
                  key={i}
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
              {name}
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

          {/* Specs row */}
          <div
            className="flex items-center justify-between w-full px-4 py-3 border-b"
            style={{
              background: '#131618',
              borderColor: '#515c65',
              borderBottomWidth: '0.5px',
              borderStyle: 'solid',
            }}
          >
            {/* Seats */}
            <div
              className="flex items-center gap-1 px-3 py-1 rounded-full shrink-0"
              style={{ background: '#24282b' }}
            >
              <SeatIcon />
              <span
                className="whitespace-nowrap"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: '16px',
                  letterSpacing: '-0.36px',
                  color: '#eff0eb',
                }}
              >
                Seats:{seats}
              </span>
            </div>

            {/* Divider */}
            <div
              className="shrink-0"
              style={{
                width: 0.5,
                height: 28,
                background: '#515c65',
              }}
              aria-hidden="true"
            />

            {/* Luggage */}
            <div
              className="flex items-center gap-1 px-3 py-1 rounded-full shrink-0"
              style={{ background: '#24282b' }}
            >
              <LuggageIcon />
              <span
                className="whitespace-nowrap"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: '16px',
                  letterSpacing: '-0.36px',
                  color: '#eff0eb',
                }}
              >
                Luggage:{luggage}
              </span>
            </div>

            {/* Divider */}
            <div
              className="shrink-0"
              style={{
                width: 0.5,
                height: 28,
                background: '#515c65',
              }}
              aria-hidden="true"
            />

            {/* Year */}
            <div
              className="flex items-center gap-1 px-3 py-1 rounded-full shrink-0"
              style={{ background: '#24282b' }}
            >
              <CarIcon />
              <span
                className="whitespace-nowrap"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: '16px',
                  letterSpacing: '-0.36px',
                  color: '#eff0eb',
                }}
              >
                {year}
              </span>
            </div>
          </div>

          {/* Price + Reserve button */}
          <div
            className="flex items-center justify-between w-full p-4 rounded-bl-[14px] rounded-br-[14px]"
            style={{ background: '#131618' }}
          >
            <p
              className="whitespace-nowrap shrink-0"
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 500,
                fontSize: 20,
                lineHeight: '24px',
                letterSpacing: '-0.6px',
                color: '#eff0eb',
              }}
            >
              ${pricePerHour}/h
            </p>

            <Link
              href={reserveHref}
              className="flex items-center gap-1 rounded-full shrink-0 transition-opacity hover:opacity-90"
              style={{
                background: '#eff0eb',
                paddingLeft: 16,
                paddingRight: 4,
                paddingTop: 4,
                paddingBottom: 4,
                width: 162,
              }}
            >
              <span
                className="flex-1 min-w-0 uppercase"
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: '20px',
                  letterSpacing: '-0.48px',
                  color: '#191a19',
                }}
              >
                Reserve
              </span>
              <span
                className="flex items-center justify-center rounded-full shrink-0"
                style={{
                  background: '#2e2e2d',
                  width: 24,
                  height: 24,
                }}
                aria-hidden="true"
              >
                <ArrowOutwardIcon />
              </span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
