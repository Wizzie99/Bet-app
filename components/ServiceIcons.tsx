// Icons for the services grid and nav. Colour comes from `currentColor`;
// size comes from the consuming Tailwind class via `className`.

type IconProps = { className?: string };

export function AirportIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export function BriefcaseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3" y="7" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 12.5h18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function TrophyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 5H5.5a2 2 0 0 0 0 4H8M16 5h2.5a2 2 0 0 1 0 4H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 12v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 20h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="9.5" y="15.5" width="5" height="4.5" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function RingsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="9" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 5.5 10.5 3.5 12 2l1.5 1.5L12 5.5Z" fill="currentColor" />
    </svg>
  );
}

export function RouteIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="6" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.2 8.7 15.8 15.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="0.5 3" />
    </svg>
  );
}

export function AnchorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 9.5 12 7l3 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 13H4a8 8 0 0 0 16 0h-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function MoonIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M20 13.5A8.5 8.5 0 1 1 10.5 4a6.5 6.5 0 0 0 9.5 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M18 3.2 18.6 4.7 20 5.3 18.6 5.9 18 7.4 17.4 5.9 16 5.3 17.4 4.7 18 3.2Z" fill="currentColor" />
    </svg>
  );
}
