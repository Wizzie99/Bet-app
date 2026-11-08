'use client';

import { useLayoutEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Direction the element slides in from. Defaults to "up". */
  direction?: 'up' | 'down' | 'left' | 'right';
  /** Delay before the animation starts, in milliseconds. */
  delay?: number;
  /** Distance the element travels, in pixels. Defaults to 24. */
  offset?: number;
  /** How much of the element must be visible before it reveals (0–1). */
  threshold?: number;
  /** Render as a different element/component (e.g. "section"). Defaults to "div". */
  as?: ElementType;
  className?: string;
};

/**
 * Fades + slides its children into view the first time they enter the viewport.
 *
 * Uses IntersectionObserver (no dependencies) and reveals only once so content
 * doesn't flicker on scroll-up. Honors `prefers-reduced-motion` via globals.css.
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  offset = 24,
  threshold = 0,
  as,
  className = '',
}: RevealProps) {
  const Tag = (as ?? 'div') as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If IntersectionObserver is unavailable, just show the content.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    // Reveal anything already on screen before the first paint. Otherwise a
    // section peeking in under the hero stays at opacity 0.
    const rect = node.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const alreadyVisible =
      rect.bottom > 0 && rect.top < viewportHeight && rect.right > 0 && rect.left < viewportWidth;
    if (alreadyVisible) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      data-direction={direction}
      className={`reveal${visible ? ' reveal-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{
        '--reveal-delay': `${delay}ms`,
        '--reveal-offset': `${offset}px`,
      } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
