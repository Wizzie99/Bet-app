'use client';

import { useEffect, useRef, useState } from 'react';

import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/services';

const ALIAS = 'bostonexclusive';
const BOOK_URL = `https://book.mylimobiz.com/v4/${ALIAS}`;
const LOADER_SRC = 'https://book.mylimobiz.com/v4/widgets/widget-loader.js';
const IFRAME_TITLE = 'Book a ride with Boston Exclusive Transportation';

// The loader is an IIFE that scans the page once. Each visit to this page
// needs its own run so client navigations and booking-step reloads rebuild
// the iframe from the current URL.
let widgetGeneration = 0;

export default function BookingWidget() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const generation = ++widgetGeneration;
    let observer: MutationObserver | null = null;

    const anchor = document.createElement('a');
    anchor.href = BOOK_URL;
    anchor.setAttribute('data-ores-widget', 'website');
    anchor.setAttribute('data-ores-alias', ALIAS);
    anchor.textContent = 'Online Reservations';

    const script = document.createElement('script');
    script.src = `${LOADER_SRC}?embed=${generation}`;
    script.async = true;

    const markReady = () => {
      const iframe = mount.querySelector('iframe');
      if (!iframe) return false;
      iframe.title = IFRAME_TITLE;
      setReady(true);
      setFailed(false);
      return true;
    };

    script.onload = () => {
      if (generation !== widgetGeneration) return;

      const widgetHandler = window.onmessage;
      window.onmessage = (event: MessageEvent) => {
        if (typeof event.data !== 'string' || typeof widgetHandler !== 'function') return;
        widgetHandler.call(window, event);
      };

      if (markReady()) return;

      observer = new MutationObserver(() => {
        if (markReady()) observer?.disconnect();
      });
      observer.observe(mount, { childList: true, subtree: true });
    };

    script.onerror = () => {
      if (generation !== widgetGeneration) return;
      setFailed(true);
    };

    mount.replaceChildren(anchor);
    mount.appendChild(script);

    return () => {
      observer?.disconnect();
      if (generation === widgetGeneration) {
        mount.replaceChildren();
      }
    };
  }, []);

  return (
    <section aria-label="Online reservations" className="w-full bg-[#eff0eb] text-[#191a19]">
      <div className="mx-auto w-full max-w-[1200px] px-5 pt-10 pb-16 lg:px-16 lg:pt-14">
        <div className="mb-6 flex max-w-[640px] flex-col gap-2">
          <h1
            className="text-[clamp(36px,5vw,48px)] leading-[1.15] tracking-[-0.02em]"
            style={{ fontFamily: "'Lastik', Georgia, serif", fontWeight: 400 }}
          >
            Reserve your ride
          </h1>
          <p
            className="text-[16px] leading-[24px] tracking-[-0.48px] text-[#595a59]"
            style={{ fontFamily: "'Geist', sans-serif" }}
          >
            Get an instant quote and pay online. Prefer to book by phone?{' '}
            <a href={PHONE_HREF} className="text-[#191a19] underline underline-offset-2">
              {PHONE_DISPLAY}
            </a>
            , answered 24/7.
          </p>
        </div>

        {!ready && (
          <p
            className="mb-4 text-[15px] leading-[22px] text-[#595a59]"
            style={{ fontFamily: "'Geist', sans-serif" }}
          >
            {failed
              ? 'The booking form could not be loaded.'
              : 'Loading the booking form…'}{' '}
            <a href={BOOK_URL} className="text-[#191a19] underline underline-offset-2">
              Open reservations
            </a>
          </p>
        )}

        <div
          ref={mountRef}
          className="min-h-[70vh] w-full overflow-hidden rounded-[16px] bg-white"
        />
      </div>
    </section>
  );
}
