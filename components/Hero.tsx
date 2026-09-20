'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ─── Slide data ───────────────────────────────────────────────────────────────
// Place images in /public and update the src paths as needed.
const SLIDES = [
  {
    src: '/Images/Hero-Image.jpg',
    alt: 'Two passengers in the back seat of a luxury sedan looking out at the city',
  },
  {
    src: '/Images/hero1.jpg',
    alt: 'Two luxury black SUVs parked in front of a mansion at night',
  },
];

const SLIDE_DURATION = 60_000; // 1 minute before switching to the other slide

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

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length);
    setAnimKey((k) => k + 1);
  }, []);
  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
    setAnimKey((k) => k + 1);
  }, []);

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
      style={{ position: 'relative', height: '100svh', minHeight: 600, overflow: 'hidden', background: '#0c0d0f' }}
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
          className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="pointer-events-none object-cover object-center"
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

      {/* ── Prev / Next arrows ────────────────────────────────── */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prev();
          startTimer();
        }}
        aria-label="Previous slide"
        className="hero-nav-btn"
        style={{ left: 16 }}
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          next();
          startTimer();
        }}
        aria-label="Next slide"
        className="hero-nav-btn"
        style={{ right: 16 }}
      >
        <ChevronRight />
      </button>

      {/* ── Content ────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end pointer-events-none">
        <div className="pointer-events-auto w-full max-w-[1440px] mx-auto px-5 pb-20 lg:px-16 lg:pb-16">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            {/* Left — rating + headline */}
            <div className="flex flex-col gap-4 lg:gap-5">
              {/* Rating badge */}
              <div className="flex items-center gap-2">
                <StarIcon />
                <span className="font-['Geist',sans-serif] text-[13px] font-medium text-white">
                  4.9 on Google
                </span>
                <span className="font-['Geist',sans-serif] text-[13px] text-[#bbbcb8]">
                  · 320 reviews
                </span>
              </div>

              {/* Headline */}
              <h1
                className="text-white leading-[1.05]"
                style={{ fontFamily: "'Lastik', 'Georgia', serif", fontWeight: 400, fontSize: 'clamp(42px, 5.5vw, 80px)', letterSpacing: '-0.02em', maxWidth: 640 }}
              >
                First-class car
                <br />
                service in Boston
              </h1>
            </div>

            {/* Right — description + CTAs */}
            <div className="flex flex-col gap-6 lg:max-w-[380px] lg:pb-1 shrink-0">
              <p className="font-['Geist',sans-serif] text-[16px] leading-[1.6] text-[#bbbcb8] tracking-[-0.01em]">
                Late-model luxury vehicles, vetted chauffeurs, and flat airport rates. We handle the
                road so you can focus on what matters.
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <Link
                  href="/reserve"
                  className="
                    inline-flex items-center gap-1.5 px-5 py-3 rounded-full
                    bg-[#1c60ff] text-[#0c0d0f]
                    font-['Geist_Mono',monospace] font-medium text-[14px] lg:text-[15px]
                    leading-5 tracking-[-0.02em] whitespace-nowrap uppercase
                    transition-opacity duration-150 hover:opacity-90
                  "
                >
                  Get a quote
                  <ArrowOutward />
                </Link>
                <Link
                  href="/fleet"
                  className="
                    inline-flex items-center gap-1.5 px-5 py-3 rounded-full
                    bg-transparent border border-white/40 text-white
                    font-['Geist_Mono',monospace] font-medium text-[14px] lg:text-[15px]
                    leading-5 tracking-[-0.02em] whitespace-nowrap uppercase
                    transition-all duration-200 hover:border-white/80 hover:bg-white/5
                  "
                >
                  See the fleet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Dot indicators ─────────────────────────────────────── */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2"
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
        .hero-nav-btn {
          position: absolute;
          top: 50%;
          z-index: 30;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          padding: 0;
          border: 1px solid rgba(81, 92, 101, 0.5);
          border-radius: 999px;
          background: rgba(19, 22, 24, 0.5);
          color: #fff;
          cursor: pointer;
          transform: translateY(-50%);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .hero-nav-btn:hover {
          background: rgba(28, 96, 255, 0.7);
          border-color: #1c60ff;
        }
      `}</style>
    </section>
  );
}
