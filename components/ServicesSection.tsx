'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowOutwardIcon } from './FleetIcons';
import { SERVICES } from '@/lib/services';
import s from './services-deck.module.css';

const DECK_SLUGS = [
  'corporate',
  'airport-transfers',
  'weddings',
  'event-travel',
  'hourly-chauffeur',
  'city-to-city',
] as const;

const SLOTS = [
  { x: 0, y: 0, rot: -4.89 },
  { x: 0.6358, y: 0.03, rot: 0 },
  { x: 0.8716, y: 0.015, rot: 0 },
  { x: 1.0537, y: 0.015, rot: 3.03 },
  { x: 1.2985, y: 0.021, rot: 2.02 },
  { x: 1.5343, y: 0.021, rot: 1.18 },
];

export default function ServicesSection() {
  const cards = DECK_SLUGS.map((slug) =>
    SERVICES.find((service) => service.slug === slug),
  ).filter((service): service is NonNullable<typeof service> => Boolean(service));
  const [active, setActive] = useState(0);
  const [isMobileDeck, setIsMobileDeck] = useState(false);
  const order = cards.map((_, index) => (active + index) % cards.length);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 860px)');
    const sync = () => setIsMobileDeck(media.matches);

    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  return (
    <section className={s.section} aria-labelledby="services-deck-title">
      <header className={s.head}>
        <p className={s.eyebrow}>SERVICES</p>
        <h2 id="services-deck-title" className={s.h2}>
          However you need to move
        </h2>
        <p className={s.lede}>
          Six ways we drive, one standard — late-model vehicles, vetted chauffeurs,
          and a price quoted before you book.
        </p>
      </header>

      <div className={s.deckWrap}>
        <ul className={s.deck}>
          {order.map((cardIndex, slotIndex) => {
            const service = cards[cardIndex];
            const slot = SLOTS[slotIndex];
            const isActive = slotIndex === 0;

            return (
              <li
                key={service.slug}
                className={s.slot}
                style={
                  {
                    '--x': slot.x,
                    '--y': slot.y,
                    '--rot': `${slot.rot}deg`,
                    zIndex: SLOTS.length - slotIndex,
                  } as CSSProperties
                }
              >
                <article className={s.card}>
                  <div className={s.imageWrap}>
                    <div className={s.image}>
                      {service.image ? (
                        <Image
                          src={service.image.src}
                          alt=""
                          fill
                          className={s.photo}
                          sizes="335px"
                        />
                      ) : (
                        <span className={s.phLabel}>IMG · {service.name}</span>
                      )}
                      <span className={s.imageScrim} aria-hidden="true" />
                    </div>
                  </div>

                  <div className={s.text}>
                    <h3 className={s.cardTitle}>{service.name}</h3>
                    <p className={s.cardBody}>{service.summary}</p>
                  </div>

                  <div className={s.action}>
                    <Link
                      href={service.href}
                      className={s.learn}
                      tabIndex={isActive || isMobileDeck ? undefined : -1}
                    >
                      LEARN MORE
                    </Link>
                    <span className={s.arrow} aria-hidden="true">
                      <ArrowOutwardIcon />
                    </span>
                  </div>
                </article>

                {!isActive && (
                  <button
                    type="button"
                    className={s.bring}
                    onClick={() => setActive(cardIndex)}
                  >
                    <span className={s.srOnly}>Show {service.name}</span>
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className={s.foot}>
        <div className={s.dots} role="tablist" aria-label="Choose a service">
          {cards.map((service, index) => (
            <button
              key={service.slug}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={service.name}
              className={index === active ? s.dotActive : s.dot}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
        <Link href="/services" className={s.allLink}>
          See all services &rarr;
        </Link>
      </div>
    </section>
  );
}
