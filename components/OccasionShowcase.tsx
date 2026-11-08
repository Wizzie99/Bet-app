'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CarouselArrow from './CarouselArrow';
import { ReserveButton } from './Navbar';
import s from './occasion-showcase.module.css';

const services = [
  {
    title: 'Airport Transfers',
    description:
      'Meet-and-greet at Logan, BOS private terminals, and regional airports. We watch your flight so you never wait at the curb.',
    image: '/Images/occasions/airport.jpg',
    href: '/services/airport-transfers',
    alt: 'Chauffeur greeting travelers with luggage beside a black Suburban',
  },
  {
    title: 'Hourly Chauffeur',
    description:
      'A driver who’s yours for the evening, the day, or as long as you need. Dinner reservations, shows, and quiet rides across the city in a vehicle that’s waiting the moment you step out.',
    image: '/Images/occasions/hourly.jpg',
    href: '/services/hourly-chauffeur',
    alt: 'Chauffeur holding a briefcase beside a black sedan as a passenger steps out',
  },
  {
    title: 'Corporate Travel',
    description:
      'Dependable rides for executives, clients, and roadshows. We track your flights at Logan, keep billing to one account, and our chauffeurs are discreet, so your schedule holds and your calls stay private.',
    image: '/Images/occasions/corporate.jpg',
    href: '/services/corporate',
    alt: 'Three business travelers walking through an airport terminal with luggage',
  },
  {
    title: 'Group Travel',
    description:
      'Sprinter vans, mini coaches, and full motor coaches for teams, conferences, tours, and family trips. One booking and one coordinator, and everyone gets there together.',
    image: '/Images/occasions/group.jpg',
    href: '/services/group-travel',
    alt: 'A group arriving at a hotel as a chauffeur holds the door of a black van',
  },
  {
    title: 'Wedding Limo',
    description:
      'Getting-ready shuttles, guest transport, and the getaway car, all timed to your day. Ribbon, red carpet, and champagne service are available on request.',
    image: '/Images/occasions/wedding.jpg',
    href: '/services/weddings',
    alt: 'A bride and groom smiling in the back seat with a bouquet of white roses',
  },
  {
    title: 'Events & Nights Out',
    description:
      'Fenway, the Garden, dinner, and the ride home. You’re dropped at the door and picked up where you are — no parking, no surge, and no waiting in the rideshare line.',
    image: '/Images/occasions/events.jpg',
    href: '/services/event-travel',
    alt: 'A couple dressed for the evening riding in the back of a car at dusk',
  },
];

export default function OccasionShowcase() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);

  const updateControls = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    setCanScrollBack(carousel.scrollLeft > 2);
    setCanScrollForward(
      carousel.scrollLeft < carousel.scrollWidth - carousel.clientWidth - 2,
    );
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    updateControls();
    const resizeObserver = new ResizeObserver(updateControls);
    resizeObserver.observe(carousel);
    carousel.addEventListener('scroll', updateControls, { passive: true });

    return () => {
      resizeObserver.disconnect();
      carousel.removeEventListener('scroll', updateControls);
    };
  }, [updateControls]);

  const scroll = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector<HTMLElement>('[data-service-card]');
    const gap = 7;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    carousel.scrollBy({
      left: direction * ((card?.offsetWidth ?? carousel.clientWidth * 0.75) + gap),
      behavior: reduced ? 'auto' : 'smooth',
    });
  };

  return (
    <section className={`${s.showcase} py-16 lg:py-24`} aria-labelledby="occasion-title">
      <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-16">
      <div className={s.intro}>
        <h2 id="occasion-title" className={s.title}>
          Every Occasion, Chauffeured
        </h2>
        <div className={s.details}>
          <p className={s.lede}>
            <strong>Wherever the Day Takes You.</strong> We cover airport runs, board meetings,
            wedding days, group outings and nights out on the town etc, with one trusted service for
            every moment worth arriving for.
          </p>
          <ReserveButton label="Reserve now" textClassName="text-white" />
        </div>
      </div>

      <div
        ref={carouselRef}
        className={`${s.carousel} -mr-5 pr-5 lg:-mr-16 lg:pr-16`}
        aria-label="Chauffeur services"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') scroll(-1);
          if (event.key === 'ArrowRight') scroll(1);
        }}
      >
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className={s.card}
            data-service-card
          >
            <div className={s.imageFrame}>
              <Image
                src={service.image}
                alt={service.alt}
                width={2048}
                height={2048}
                className={s.image}
                sizes="(max-width: 640px) 82vw, 381px"
              />
            </div>
            <div className={s.copy}>
              <h3 className={s.cardTitle}>{service.title}</h3>
              <p className={s.cardBody}>{service.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <nav className={s.controls} aria-label="Service carousel controls">
        <button
          className={canScrollBack ? `${s.control} ${s.controlActive}` : s.control}
          type="button"
          aria-label="Previous service"
          disabled={!canScrollBack}
          onClick={() => scroll(-1)}
        >
          <CarouselArrow direction="left" />
        </button>
        <button
          className={canScrollForward ? `${s.control} ${s.controlActive}` : s.control}
          type="button"
          aria-label="Next service"
          disabled={!canScrollForward}
          onClick={() => scroll(1)}
        >
          <CarouselArrow direction="right" />
        </button>
      </nav>
      </div>
    </section>
  );
}
