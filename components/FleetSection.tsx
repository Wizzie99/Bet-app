'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from './FleetIcons';
import VehicleCard, { VehicleCardProps } from './VehicleCard';

const FLEET: VehicleCardProps[] = [
  {
    name: 'Mercedes-Benz S-Class',
    category: 'Premium Sedan',
    seats: 4,
    luggage: 4,
    year: 2025,
    images: [
      { src: '/Images/Mercedes-Benz-S-Clas-Exterior.jpg', alt: 'Mercedes-Benz S-Class front three-quarter' },
      { src: '/Images/S-Class-Frist set.png', alt: 'Mercedes-Benz S-Class front seats' },
      { src: '/Images/S-Class interior.png', alt: 'Mercedes-Benz S-Class rear bench' },
      { src: '/Images/S-Class-Back-Interior.png', alt: 'Mercedes-Benz S-Class rear cabin' },
    ],
    reserveHref: '/reserve/s-class',
    detailHref: '/fleet/mercedes-benz-s-class',
  },
  {
    name: 'Cadillac Escalade',
    category: 'Luxury SUV',
    seats: 7,
    luggage: 6,
    year: 2025,
    images: [
      { src: '/Images/Cadillac-Escalade-Exterior.jpg', alt: 'Cadillac Escalade front three-quarter' },
      { src: '/Images/Escalade Frontal.png', alt: 'Cadillac Escalade front' },
      { src: '/Images/Escalade Back Side.png', alt: 'Cadillac Escalade rear three-quarter' },
      { src: '/Images/Cadillac-Escalade-Interior.jpg', alt: 'Cadillac Escalade cabin' },
      { src: '/Images/Cadillac-Escalade-Interior-Back.jpg', alt: 'Cadillac Escalade second-row seats' },
      { src: '/Images/Escalade-Trunk.jpg', alt: 'Cadillac Escalade cargo area' },
    ],
    reserveHref: '/reserve/escalade',
    detailHref: '/fleet/cadillac-escalade',
  },
  {
    name: 'Chevrolet Suburban',
    category: 'Executive Sedan',
    seats: 4,
    luggage: 3,
    year: 2025,
    images: [
      { src: '/Images/Chevrolet-Suburban-Frontal.jpg', alt: 'Chevrolet Suburban front three-quarter' },
      { src: "/Images/Chevrolet-Suburban-Interior-Fron't Seat.png", alt: 'Chevrolet Suburban front seats' },
      { src: '/Images/Chevrolet-Suburban-Interior.png', alt: 'Chevrolet Suburban cabin' },
      { src: '/Images/Chevrolet-Suburban-Interior-Middle- Seat.png', alt: 'Chevrolet Suburban second-row seats' },
    ],
    reserveHref: '/reserve/chevrolet-suburban',
    detailHref: '/fleet/chevrolet-suburban',
  },
  {
    name: 'Mercedes-Benz Sprinter',
    category: 'Luxury Van',
    seats: 12,
    luggage: 10,
    year: 2025,
    images: [
      { src: '/Images/Mercedes-Benz-Sprinter.jpg', alt: 'Mercedes-Benz Sprinter front three-quarter' },
    ],
    reserveHref: '/reserve/sprinter',
    detailHref: '/fleet/mercedes-benz-sprinter',
  },
];

export default function FleetSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const cardsInScroller = () =>
    Array.from(scrollerRef.current?.querySelectorAll<HTMLElement>('[data-fleet-card]') ?? []);

  const syncActive = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const cards = cardsInScroller();
    if (cards.length === 0) return;
    const mid = el.scrollLeft + el.clientWidth / 2;
    let nearest = 0;
    let nearestDist = Number.POSITIVE_INFINITY;
    cards.forEach((card, index) => {
      const center = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(center - mid);
      if (dist < nearestDist) {
        nearest = index;
        nearestDist = dist;
      }
    });
    setActive(nearest);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    syncActive();
    el.addEventListener('scroll', syncActive, { passive: true });
    window.addEventListener('resize', syncActive);
    return () => {
      el.removeEventListener('scroll', syncActive);
      window.removeEventListener('resize', syncActive);
    };
  }, [syncActive]);

  const scrollToCard = (index: number) => {
    const cards = cardsInScroller();
    const next = (index + cards.length) % cards.length;
    cards[next]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    setActive(next);
  };

  return (
    <section
      className="w-full py-16 px-4 sm:px-8"
      style={{ background: '#ffffff' }}
    >
      {/* Header */}
      <div className="max-w-[1352px] mx-auto mb-16 flex flex-col gap-6 md:flex-row md:items-start md:justify-between px-4">
        <h2
          style={{
            fontFamily: "'Lastik', 'Georgia', serif",
            fontWeight: 400,
            fontSize: 'clamp(36px, 5vw, 48px)',
            lineHeight: 1.2,
            letterSpacing: '-0.96px',
            color: '#191a19',
            flexShrink: 0,
          }}
        >
          Choose your
          <br />
          vehicle
        </h2>
        <p
          className="md:max-w-[589px]"
          style={{
            fontFamily: "'Geist', sans-serif",
            fontWeight: 400,
            fontSize: 20,
            lineHeight: '26px',
            letterSpacing: '-0.6px',
            color: '#595a59',
          }}
        >
          From a Mercedes S-Class for two to motor coaches for fifty-five —
          every vehicle is late-model, detailed, and driven by one of our own
          chauffeurs. Airport transfers are flat-rate.
        </p>
      </div>

      {/* Cards — always horizontal scroll */}
      <div
        ref={scrollerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
        style={{ scrollbarWidth: 'none' }}
      >
        {FLEET.map((vehicle) => (
          <VehicleCard key={vehicle.name} {...vehicle} />
        ))}
      </div>

      <div className="mx-auto mt-2 flex max-w-[1352px] items-center justify-center gap-3 px-4">
        <button
          type="button"
          onClick={() => scrollToCard(active - 1)}
          aria-label="Previous vehicle"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#515c65] bg-[#131618] text-[#eff0eb] transition-opacity hover:border-[#1c60ff] hover:bg-[#1c60ff]"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollToCard(active + 1)}
          aria-label="Next vehicle"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#515c65] bg-[#131618] text-[#eff0eb] transition-opacity hover:border-[#1c60ff] hover:bg-[#1c60ff]"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
