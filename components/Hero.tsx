'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ─── Slide data ───────────────────────────────────────────────────────────────
// Place images in /public and update the src paths as needed.
const SLIDES = [
  {
    src: '/hero1.jpg',
    alt: 'Two luxury black SUVs parked in front of a mansion at night',
  },
  {
    src: '/hero2.jpg',
    alt: 'Boston Exclusive Transportation luxury fleet',
  },
];

const SLIDE_DURATION = 5000; // ms between auto-advances

// ─── Icons ───────────────────────────────────────────────────────────────────
function ArrowOutward() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 5H19M19 5V15M19 5L5 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD233" aria-hidden="true">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#FFD233" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0); // forces dot progress bar to restart
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const touchStartX = useRef(0);

  const goTo = useCallback((index: number) => {
    setCurrent((index + SLIDES.length) % SLIDES.length);
    setAnimKey((k) => k + 1);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-advance
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, SLIDE_DURATION);
  }, [next]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prev();
        startTimer();
      }
      if (e.key === 'ArrowRight') {
        next();
        startTimer();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev, startTimer]);

  // Touch / swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      dx < 0 ? next() : prev();
      startTimer();
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden bg-[#0c0d0f]"
      style={{ height: '100svh', minHeight: 600 }}
      aria-label="Hero slideshow"
      onMouseEnter={() => {
        if (timerRef.current) clearInterval(timerRef.current);
      }}
      onMouseLeave={startTimer}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ── Slides ─────────────────────────────────────────────── */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}

      {/* ── Gradient overlays ──────────────────────────────────── */}
      {/* Top — fades into navbar */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, rgba(12,13,15,0.55) 0%, transparent 28%)' }}
      />
      {/* Bottom — makes text legible */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to top, rgba(12,13,15,0.97) 0%, rgba(12,13,15,0.78) 28%, rgba(12,13,15,0.3) 52%, transparent 72%)',
        }}
      />

      {/* ── Prev / Next arrows (desktop only) ─────────────────── */}
      <button
        type="button"
        onClick={() => {
          prev();
          startTimer();
        }}
        aria-label="Previous slide"
        className="
          hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-20
          w-11 h-11 items-center justify-center rounded-full
          bg-[rgba(19,22,24,0.5)] border border-[rgba(81,92,101,0.5)]
          backdrop-blur-sm transition-all duration-200
          hover:bg-[rgba(28,96,255,0.7)] hover:border-[#1c60ff]
        "
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        onClick={() => {
          next();
          startTimer();
        }}
        aria-label="Next slide"
        className="
          hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-20
          w-11 h-11 items-center justify-center rounded-full
          bg-[rgba(19,22,24,0.5)] border border-[rgba(81,92,101,0.5)]
          backdrop-blur-sm transition-all duration-200
          hover:bg-[rgba(28,96,255,0.7)] hover:border-[#1c60ff]
        "
      >
        <ChevronRight />
      </button>

      {/* ── Content ────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end">
        <div className="w-full max-w-[1440px] mx-auto px-5 pb-20 lg:px-16 lg:pb-16">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            {/* Left — rating + headline */}
            <div className="flex flex-col gap-4 lg:gap-5">
              {/* Rating badge */}
              <div className="flex items-center gap-2">
                <StarIcon />
                <span className="font-['Geist',sans-serif] text-[13px] font-medium text-white">
                  4.8 on Capterra
                </span>
                <span className="font-['Geist',sans-serif] text-[13px] text-[#bbbcb8]">
                  320 reviews
                </span>
              </div>

              {/* Headline */}
              <h1
                className="font-['Playfair_Display',serif] italic font-bold text-white leading-[1.05] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(42px, 5.5vw, 80px)', maxWidth: 520 }}
              >
                First in Class
                <br />
                for Traveling
              </h1>
            </div>

            {/* Right — description + CTAs */}
            <div className="flex flex-col gap-6 lg:max-w-[380px] lg:pb-1 shrink-0">
              <p className="font-['Geist',sans-serif] text-[16px] leading-[1.6] text-[#bbbcb8] tracking-[-0.01em]">
                Travel in style through Boston with our fleet of luxury vehicles and professional drivers. We handle the
                road so you can focus on what matters.
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <Link
                  href="/fleet"
                  className="
                    inline-flex items-center gap-1.5 px-5 py-3 rounded-full
                    bg-transparent border border-white/40 text-white
                    font-['Geist_Mono',monospace] font-medium text-[14px] lg:text-[15px]
                    leading-5 tracking-[-0.02em] uppercase whitespace-nowrap
                    transition-all duration-200 hover:border-white/80 hover:bg-white/5
                  "
                >
                  EXPLORE
                </Link>
                <Link
                  href="/reserve"
                  className="
                    inline-flex items-center gap-1.5 px-5 py-3 rounded-full
                    bg-[#1c60ff] text-[#0c0d0f]
                    font-['Geist_Mono',monospace] font-medium text-[14px] lg:text-[15px]
                    leading-5 tracking-[-0.02em] uppercase whitespace-nowrap
                    transition-opacity duration-150 hover:opacity-90
                  "
                >
                  LET&apos;S RIDE
                  <ArrowOutward />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Dot indicators ─────────────────────────────────────── */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2"
        role="tablist"
        aria-label="Slide indicators"
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => {
              goTo(i);
              startTimer();
            }}
            className={`
              relative h-[6px] rounded-full overflow-hidden border-0
              transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]
              ${i === current ? 'w-6 bg-white' : 'w-[6px] bg-white/35 hover:bg-white/60'}
            `}
          >
            {/* Animated progress fill on the active dot */}
            {i === current && (
              <span
                key={animKey}
                className="absolute inset-0 origin-left bg-white/40 rounded-full"
                style={{
                  animation: `hero-dot-progress ${SLIDE_DURATION}ms linear forwards`,
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Inline keyframe for dot progress (avoids needing globals.css changes) */}
      <style>{`
        @keyframes hero-dot-progress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}
