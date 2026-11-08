'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import CarouselArrow from './CarouselArrow';
import VehicleCard, { VehicleCardProps } from './VehicleCard';

const FLEET: VehicleCardProps[] = [
  {
    name: 'Volvo S90',
    category: 'Premium Sedan',
    seats: 3,
    luggage: 3,
    year: 2025,
    images: [
      { src: '/Images/Volvo-S90-Frontal.jpg', alt: 'Volvo S90 front three-quarter' },
      { src: '/Images/Volvo-S90-Interior-Dashboard.jpg', alt: 'Volvo S90 front seats and dashboard' },
      { src: '/Images/Volvo-S90-Interior-Back.jpg', alt: 'Volvo S90 rear bench' },
      { src: '/Images/Volvo-S90-Interior-Front.jpg', alt: 'Volvo S90 cabin looking forward from the rear seat' },
    ],
    reserveHref: '/reserve',
    detailHref: '/fleet/volvo-s90',
  },
  {
    name: 'Chevrolet Suburban',
    category: 'Executive Sedan',
    seats: 4,
    luggage: 3,
    year: 2025,
    images: [
      { src: '/Images/Chevrolet-Suburban-Frontal.jpg', alt: 'Chevrolet Suburban front three-quarter' },
      { src: '/Images/Chevrolet-Suburban-Interior-Front-Seat.jpg', alt: 'Chevrolet Suburban front seats' },
      { src: '/Images/Chevrolet-Suburban-Interior.jpg', alt: 'Chevrolet Suburban cabin' },
      { src: '/Images/Chevrolet-Suburban-Interior-Middle-Seat.jpg', alt: 'Chevrolet Suburban second-row seats' },
    ],
    reserveHref: '/reserve',
    detailHref: '/fleet/chevrolet-suburban',
  },
  {
    name: 'Mercedes-Benz S-Class',
    category: 'Premium Sedan',
    seats: 4,
    luggage: 4,
    year: 2025,
    images: [
      { src: '/Images/Mercedes-Benz-S-Class-Exterior.jpg', alt: 'Mercedes-Benz S-Class front three-quarter' },
      { src: '/Images/S-Class-Front-Seat.jpg', alt: 'Mercedes-Benz S-Class front seats' },
      { src: '/Images/S-Class-Interior.jpg', alt: 'Mercedes-Benz S-Class rear bench' },
      { src: '/Images/S-Class-Back-Interior.jpg', alt: 'Mercedes-Benz S-Class rear cabin' },
    ],
    reserveHref: '/reserve',
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
      { src: '/Images/Cadillac-Escalade-Interior.jpg', alt: 'Cadillac Escalade cabin' },
      { src: '/Images/Cadillac-Escalade-Interior-Back.jpg', alt: 'Cadillac Escalade second-row seats' },
      { src: '/Images/Escalade-Trunk.jpg', alt: 'Cadillac Escalade cargo area' },
    ],
    reserveHref: '/reserve',
    detailHref: '/fleet/cadillac-escalade',
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
    reserveHref: '/reserve',
    detailHref: '/fleet/mercedes-benz-sprinter',
  },
];

const arrowButtonClass = (active: boolean) =>
  `flex h-10 w-10 items-center justify-center rounded-[4px] transition-[transform,background-color,color] duration-150 disabled:cursor-default enabled:hover:-translate-y-0.5 ${
    active ? 'bg-[#131618] text-[#eff0eb]' : 'bg-[#f3f4f1] text-[#1c1b1f]'
  }`;

export default function FleetSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);

  const updateControls = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollBack(el.scrollLeft > 2);
    setCanScrollForward(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateControls();
    const resizeObserver = new ResizeObserver(updateControls);
    resizeObserver.observe(el);
    el.addEventListener('scroll', updateControls, { passive: true });
    return () => {
      resizeObserver.disconnect();
      el.removeEventListener('scroll', updateControls);
    };
  }, [updateControls]);

  const scroll = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-fleet-card]');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({
      left: direction * (card?.offsetWidth ?? el.clientWidth * 0.75),
      behavior: reduced ? 'auto' : 'smooth',
    });
  };

  return (
    <section className="w-full overflow-hidden bg-[#eff0eb] py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-16">
      {/* Header */}
      <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
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
          From a Volvo S90 to a Mercedes Sprinter for 12 — every vehicle is
          late-model, detailed, and driven by one of our own chauffeurs.
          Airport transfers are flat-rate.
        </p>
      </div>

      {/* Cards — always horizontal scroll */}
      <div
        ref={scrollerRef}
        className="-ml-4 -mr-5 flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pr-5 lg:-mr-16 lg:pr-16"
        style={{ scrollbarWidth: 'none' }}
      >
        {FLEET.map((vehicle) => (
          <VehicleCard key={vehicle.name} {...vehicle} />
        ))}
      </div>

      <div className="mt-2 flex items-center justify-start gap-3">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Previous vehicle"
          disabled={!canScrollBack}
          className={arrowButtonClass(canScrollBack)}
        >
          <CarouselArrow direction="left" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Next vehicle"
          disabled={!canScrollForward}
          className={arrowButtonClass(canScrollForward)}
        >
          <CarouselArrow direction="right" />
        </button>
      </div>
      </div>
    </section>
  );
}
