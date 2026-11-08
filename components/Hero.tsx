'use client';

import Image from 'next/image';
import Link from 'next/link';

const HERO_IMAGE = {
  src: '/Images/Hero-Image-Bet.jpg',
  alt: 'Passenger in a suit seated in the rear of a luxury sedan at sunset, with an airplane outside the window',
};

// ─── Icons ───────────────────────────────────────────────────────────────────
function ArrowOutward() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 5H19M19 5V15M19 5L5 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#0c0d0f] lg:h-[100svh] lg:min-h-[600px]"
      aria-label="Hero"
    >
      {/* Phone: the photo keeps its own 1920×1438 frame so the passenger,
          sunset, and airplane stay in view. Desktop: full-bleed cover. */}
      <div className="relative aspect-[1920/1438] w-full lg:absolute lg:inset-0 lg:aspect-auto">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          className="pointer-events-none object-cover object-center"
          sizes="100vw"
        />

        {/* Same bottom scrim as desktop. On small screens it is pinned to the
            photo edge so the image fades into the dark copy area underneath. */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[48%] lg:hidden"
          style={{
            background:
              'linear-gradient(to top, rgba(12,13,15,0.97) 0%, rgba(12,13,15,0.78) 28%, rgba(12,13,15,0.3) 52%, transparent 72%)',
          }}
        />
        {/* Desktop gradients — text sits on the image */}
        <div
          className="absolute inset-0 pointer-events-none z-10 hidden lg:block"
          style={{ background: 'linear-gradient(to bottom, rgba(12,13,15,0.55) 0%, transparent 28%)' }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-10 hidden lg:block"
          style={{
            background:
              'linear-gradient(to top, rgba(12,13,15,0.97) 0%, rgba(12,13,15,0.78) 28%, rgba(12,13,15,0.3) 52%, transparent 72%)',
          }}
        />
      </div>

      {/* Copy sits under the photo on small screens, over it from lg up. */}
      <div className="relative z-20 pointer-events-none lg:absolute lg:inset-0 lg:flex lg:flex-col lg:justify-end">
        <div className="pointer-events-auto w-full max-w-[1440px] mx-auto px-5 pt-8 pb-14 lg:px-16 lg:pt-0 lg:pb-16">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h1
              className="text-white leading-[1.05]"
              style={{ fontFamily: "'Lastik', 'Georgia', serif", fontWeight: 400, fontSize: 'clamp(42px, 5.5vw, 80px)', letterSpacing: '-0.02em', maxWidth: 640 }}
            >
              First-class car
              <br />
              service in Boston
            </h1>

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
    </section>
  );
}
