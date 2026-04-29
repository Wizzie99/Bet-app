'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Social icon assets
const SOCIAL = {
  phone:     'https://www.figma.com/api/mcp/asset/289bb38b-1229-4b28-971f-5f236962c5fc',
  email:     'https://www.figma.com/api/mcp/asset/51970052-ed97-4c1f-809a-af63d044606a',
  facebook:  'https://www.figma.com/api/mcp/asset/f5201174-d169-4003-9321-56eb4cceb79a',
  instagram: 'https://www.figma.com/api/mcp/asset/38d450ed-fd69-40d2-8706-3c798d0ef9ec',
  x:         'https://www.figma.com/api/mcp/asset/45e34814-f21f-4469-aaf8-35d53e9a5833',
};

// ─── Data ────────────────────────────────────────────────────────────────────

const SERVICES_SUBMENU = [
  { label: 'Airport Transfers',   href: '/services/airport-transfers' },
  { label: 'Corporate Travel',    href: '/services/corporate-travel' },
  { label: 'Sports & Live Events',href: '/services/sports-live-events' },
  { label: 'Wedding Limo',        href: '/services/wedding-limo' },
  { label: 'Boston to New York',  href: '/services/boston-new-york' },
  { label: 'Seaport Transfer',    href: '/services/seaport-transfer' },
  { label: 'Night Out Limo',      href: '/services/night-out-limo' },
];

const NAV_LINKS = [
  { label: 'About Us',  href: '/about' },
  { label: 'Services',  href: '/services',  submenu: SERVICES_SUBMENU },
  { label: 'Contact',   href: '/contact' },
  { label: 'Fleet',     href: '/fleet',     submenu: [] },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function Logo({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const dims =
    size === 'sm'
      ? { cls: 'w-[75px] h-[23px]', width: 75, height: 23 }
      : { cls: 'w-[100px] h-[31px]', width: 100, height: 31 };

  return (
    <Link href="/" aria-label="Boston Exclusive Transportation — home" className="inline-flex shrink-0">
      <Image
        src="/BET-Logo.svg"
        alt=""
        width={dims.width}
        height={dims.height}
        className={`${dims.cls} object-contain object-left`}
        priority
      />
    </Link>
  );
}

function ReserveButton({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/reserve"
      className={`
        inline-flex items-center gap-1.5 px-5 py-3 rounded-full
        bg-[#1c60ff] text-[#0c0d0f]
        font-['Geist_Mono',monospace] font-medium text-[16px] leading-5 tracking-[-0.03em] uppercase
        transition-opacity hover:opacity-90 whitespace-nowrap
        ${className}
      `}
    >
      RESERVE NOW
      {/* Arrow outward icon */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 5H19M19 5V15M19 5L5 19" stroke="#0c0d0f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

function ChevronDown({ className = '' }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-200 ${className}`}
    >
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight({ className = '' }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Desktop dropdown ────────────────────────────────────────────────────────

function DesktopDropdown({
  label,
  href,
  submenu,
}: {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const hasSubmenu = submenu && submenu.length > 0;

  if (!hasSubmenu) {
    return (
      <Link
        href={href}
        className="flex items-center gap-1 px-2 py-2 rounded text-[#bbbcb8] font-['Roboto',sans-serif] text-[16px] leading-[1.5] hover:text-white transition-colors whitespace-nowrap"
      >
        {label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-1 px-2 py-2 rounded text-[#bbbcb8] font-['Roboto',sans-serif] text-[16px] leading-[1.5] hover:text-white transition-colors whitespace-nowrap"
      >
        {label}
        <ChevronDown className={open ? 'rotate-180 text-white' : 'text-[#bbbcb8]'} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-56 bg-[#131618] border border-[#515c65] rounded-lg overflow-hidden z-50 shadow-xl">
          {submenu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-[#bbbcb8] font-['Geist',sans-serif] text-[15px] leading-[1.4] hover:bg-[#1a1f23] hover:text-white transition-colors border-b border-[#515c65] last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Mobile menu ─────────────────────────────────────────────────────────────

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#0c0d0f] overflow-y-auto">
      {/* Header row */}
      <div className="flex items-center justify-between px-5 py-4 shrink-0">
        <Logo size="sm" />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex items-center justify-center w-8 h-8 text-[#bbbcb8] hover:text-white transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Nav list */}
      <nav className="flex flex-col flex-1">
        {/* About Us */}
        <Link
          href="/about"
          onClick={onClose}
          className="flex items-center px-10 py-5 text-[#bbbcb8] font-['Geist',sans-serif] text-[16px] leading-[1.08] tracking-[-0.01em] border-b border-[#515c65] hover:text-white transition-colors"
        >
          About Us
        </Link>

        {/* Contact */}
        <Link
          href="/contact"
          onClick={onClose}
          className="flex items-center px-10 py-5 text-[#bbbcb8] font-['Geist',sans-serif] text-[16px] leading-[1.08] tracking-[-0.01em] border-b border-[#515c65] hover:text-white transition-colors"
        >
          Contact
        </Link>

        {/* Services accordion */}
        <div>
          <button
            type="button"
            onClick={() => setServicesOpen((v) => !v)}
            aria-expanded={servicesOpen}
            className="flex items-center gap-0.5 w-full px-10 py-5 text-[#bbbcb8] font-['Geist',sans-serif] text-[16px] leading-[1.08] tracking-[-0.01em] border-b border-[#515c65] hover:text-white transition-colors bg-[#131618]"
          >
            Services
            <ChevronDown className={servicesOpen ? 'rotate-180 text-white' : 'text-[#bbbcb8]'} />
          </button>

          {servicesOpen && (
            <div className="bg-[#131618]">
              {SERVICES_SUBMENU.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`
                    flex items-center justify-between px-14 py-5
                    text-[#bbbcb8] font-['Geist',sans-serif] text-[16px] leading-[1.08] tracking-[-0.01em]
                    hover:text-white transition-colors
                    ${i < SERVICES_SUBMENU.length - 1 ? 'border-b border-[#a6a6a3]' : ''}
                  `}
                >
                  {item.label}
                  <ChevronRight className="text-[#bbbcb8]" />
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Fleet */}
        <Link
          href="/fleet"
          onClick={onClose}
          className="flex items-center px-10 py-5 text-[#bbbcb8] font-['Geist',sans-serif] text-[16px] leading-[1.08] tracking-[-0.01em] border-b border-[#515c65] hover:text-white transition-colors"
        >
          Fleet
        </Link>
      </nav>

      {/* Bottom section */}
      <div className="flex flex-col gap-8 px-5 pb-8 shrink-0">
        <ReserveButton className="w-full justify-center" />

        <div className="flex items-end justify-between px-5 py-8">
          {/* Contact icons */}
          <div className="flex gap-4 items-center">
            <a href="tel:+1" aria-label="Call us" className="opacity-70 hover:opacity-100 transition-opacity">
              <img src={SOCIAL.phone} alt="Phone" width={20} height={20} />
            </a>
            <a href="mailto:info@bostonexclusive.com" aria-label="Email us" className="opacity-70 hover:opacity-100 transition-opacity">
              <img src={SOCIAL.email} alt="Email" width={20} height={20} />
            </a>
          </div>
          {/* Social icons */}
          <div className="flex gap-4 items-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="opacity-70 hover:opacity-100 transition-opacity">
              <img src={SOCIAL.facebook} alt="Facebook" width={20} height={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="opacity-70 hover:opacity-100 transition-opacity">
              <img src={SOCIAL.instagram} alt="Instagram" width={20} height={20} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="opacity-70 hover:opacity-100 transition-opacity">
              <img src={SOCIAL.x} alt="X" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#131618] border-b border-[#515c65]/50">
        <div className="flex items-center h-[64px] lg:h-[72px] px-5 lg:px-16 max-w-[1440px] mx-auto">
          {/* ── Desktop layout ── */}
          <div className="hidden lg:flex items-center w-full gap-8">
            {/* Logo — left */}
            <div className="flex flex-1 min-w-0">
              <Logo size="md" />
            </div>

            {/* Nav — center */}
            <nav className="flex items-center gap-4 shrink-0">
              {NAV_LINKS.map((link) => (
                <DesktopDropdown
                  key={link.href}
                  label={link.label}
                  href={link.href}
                  submenu={link.submenu}
                />
              ))}
            </nav>

            {/* CTA — right */}
            <div className="flex flex-1 min-w-0 justify-end">
              <ReserveButton />
            </div>
          </div>

          {/* ── Mobile layout ── */}
          <div className="flex lg:hidden items-center justify-between w-full">
            <Logo size="sm" />
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="flex items-center justify-center w-8 h-8 text-[#bbbcb8] hover:text-white transition-colors"
            >
              {/* Hamburger / dehaze icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 7H21M3 12H21M3 17H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </>
  );
}
