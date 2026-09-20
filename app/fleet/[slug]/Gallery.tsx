"use client";

// Interactive photo gallery for the vehicle detail page.
//
// Client component so it can hold the "active image" state and respond to
// clicks / keyboard input. The server page (page.tsx) stays a Server
// Component and simply hands the gallery its data as props.
//
// Behaviour:
//  · Left / right arrows step through every photo and wrap around at the ends.
//  · The thumbnail strip highlights the photo currently on stage; clicking a
//    thumbnail jumps straight to it.
//  · Stage photos are stacked and cross-faded so swaps are smooth. The
//    prefers-reduced-motion rule in the module CSS disables the fade.

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { hasFleetPhoto } from "@/lib/fleet";
import s from "./vehicle-detail.module.css";

type GalleryImage = { src: string; alt: string };

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={s.navIcon}>
      <path d="M15 5 8 12l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={s.navIcon}>
      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Gallery({
  images,
  year,
  vehicleName,
}: {
  images: GalleryImage[];
  year: number;
  vehicleName: string;
}) {
  const [active, setActive] = useState(0);
  const count = images.length;
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Keep the active thumb visible when the strip scrolls horizontally (mobile).
  // Skipped on first render so the page doesn't jump on load.
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    thumbRefs.current[active]?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [active]);

  // Move to an absolute index, wrapping past either end (cycle).
  const goTo = useCallback(
    (next: number) => setActive(((next % count) + count) % count),
    [count],
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (count < 2) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(active - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goTo(active + 1);
      }
    },
    [active, count, goTo],
  );

  return (
    <section
      className={s.galleryCard}
      aria-roledescription="carousel"
      aria-label={`${vehicleName} photos`}
      onKeyDown={onKeyDown}
    >
      <div className={s.stage}>
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`${s.stageSlide} ${i === active ? s.stageSlideActive : ""}`}
            aria-hidden={i !== active}
          >
            {hasFleetPhoto(img.src) ? (
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={s.stageImg}
                sizes="(max-width: 1440px) 100vw, 1436px"
                priority={i === 0}
              />
            ) : (
              <div className={s.ph}>
                <span className={`${s.phLabel} ${s.phLabelLg}`}>{img.alt}</span>
              </div>
            )}
          </div>
        ))}

        <p className={s.tag}>{year} · BOSTON FLEET</p>

        {count > 1 && (
          <>
            <button
              type="button"
              className={`${s.navBtn} ${s.navPrev}`}
              onClick={() => goTo(active - 1)}
              aria-label="Previous photo"
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              className={`${s.navBtn} ${s.navNext}`}
              onClick={() => goTo(active + 1)}
              aria-label="Next photo"
            >
              <ChevronRightIcon />
            </button>
          </>
        )}

        <p className={s.stageStatus} role="status" aria-live="polite">
          Photo {active + 1} of {count}
        </p>
      </div>

      <div className={s.thumbs} role="tablist" aria-label={`${vehicleName} photo thumbnails`}>
        {images.map((img, i) => (
          <button
            type="button"
            key={img.src}
            ref={(el) => {
              thumbRefs.current[i] = el;
            }}
            role="tab"
            aria-selected={i === active}
            aria-label={`Photo ${i + 1}: ${img.alt}`}
            className={`${s.thumb} ${i === active ? s.thumbActive : ""}`}
            onClick={() => setActive(i)}
          >
            {hasFleetPhoto(img.src) ? (
              <Image src={img.src} alt="" fill className={s.thumbImg} sizes="280px" />
            ) : (
              <div className={s.ph}>
                <span className={s.phLabel}>{img.alt}</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
