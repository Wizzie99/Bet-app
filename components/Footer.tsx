'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ─── Data ────────────────────────────────────────────────────────────────────

const QUICK_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Fleet',href: '/fleet' },
  { label: 'FAQ',      href: '/faq' },
  { label: 'Blog',     href: '/blog' },
];

const SUPPORT_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Fleet',href: '/fleet' },
  { label: 'Blog',     href: '/blog' },
];

const LEGAL_LINKS = [
  { label: 'Legal',          href: '/legal' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Privacy Center', href: '/privacy-center' },
  { label: 'Terms',          href: '/terms' },
];

// ─── Social icons (inline SVG) ───────────────────────────────────────────────

function FacebookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="22" height="20" viewBox="0 0 22 20" fill="white" aria-hidden="true">
      <path d="M13.14 8.47 20.34 0h-1.71l-6.24 7.35L7.47 0H1.37l7.55 11.12L1.37 20h1.71l6.6-7.77L14.53 20h6.1L13.14 8.47zm-2.34 2.75-.77-1.12L3.6 1.3h2.62l4.91 7.17.77 1.12 6.38 9.32h-2.62l-5.96-8.7z" />
    </svg>
  );
}

// Privacy Choices icon (CCPA)
function PrivacyChoicesIcon() {
  return (
    <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#0069ff] shrink-0" aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2.5 7l3 3 6-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

// ─── Newsletter subscribe ─────────────────────────────────────────────────────

function NewsletterBar() {
  const [email, setEmail] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up newsletter submission
    setEmail('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between gap-2 w-full bg-[#24282b] rounded-[8px] pl-5 pr-2 py-2"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        required
        className="flex-1 min-w-0 bg-transparent text-[#eff0eb] font-['Geist',sans-serif] font-light text-[16px] leading-6 placeholder:text-[#eff0eb] outline-none"
      />
      <button
        type="submit"
        className="shrink-0 bg-[#5688fd] text-[#111416] font-['Geist_Mono',monospace] font-semibold text-[14px] tracking-[-0.01em] leading-6 px-3 py-2 rounded-[6px] hover:bg-[#6a96ff] transition-colors"
      >
        SUBSCRIBE
      </button>
    </form>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="bg-[#131618] text-[#eff0eb] w-full">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16 pt-14 pb-10">

        {/* ── Top section ── */}
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-16 lg:items-start">

          {/* Left column — newsletter + description + nav links */}
          <div className="flex flex-col gap-14 lg:max-w-[480px] w-full">

            <NewsletterBar />

            <p className="font-['Geist',sans-serif] font-normal text-[14px] leading-[1.15] tracking-[-0.04em] text-[#a19e97] text-center lg:text-left">
              Boston Exclusive Transportation offers customer service 24 hours a day. 7 days a week,
              we can plan your trip, choose a location, and organize your party. You can contact us
              with any questions or concerns regarding our fleet, services, rates, or other requests and needs.
              {' '}
              <br className="hidden lg:block" />
              <br />
              When you pick out your preferred option, you can expect the best chauffeurs to take care
              of your ride on time or before. Getting a limo near you is easier than ever! After all
              your concerns are addressed, check our Serving Areas to confirm we cover your location,
              you can book your ride online, by email, or by phone at{' '}
              <a href="tel:+18579304661" className="underline decoration-solid text-[#a19e97] hover:text-[#eff0eb] transition-colors">
                (857) 930-4661
              </a>
            </p>

            {/* Nav columns */}
            <div className="flex gap-14 lg:gap-20 items-start text-[#eff0eb] whitespace-nowrap">
              {/* Quick Links */}
              <div className="flex flex-col gap-5">
                <p className="font-['Geist_Mono',monospace] font-semibold text-[20px] leading-6 tracking-[-0.04em]">
                  Quick Links
                </p>
                <ul className="flex flex-col gap-3">
                  {QUICK_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-['Geist',sans-serif] font-normal text-[14px] leading-4 tracking-[-0.04em] hover:text-[#a19e97] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div className="flex flex-col gap-5">
                <p className="font-['Geist_Mono',monospace] font-semibold text-[20px] leading-6 tracking-[-0.04em]">
                  Support
                </p>
                <ul className="flex flex-col gap-3">
                  {SUPPORT_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-['Geist',sans-serif] font-normal text-[14px] leading-4 tracking-[-0.04em] hover:text-[#a19e97] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right column — logo + socials (desktop spacer) */}
          <div className="hidden lg:flex flex-1 justify-end items-start pt-2">
            <div className="flex flex-col gap-10 items-center">
              <Image
                src="/BET-Logo.svg"
                alt="Boston Exclusive Transportation"
                width={300}
                height={92}
                className="w-[260px] h-auto object-contain"
              />
              <div className="flex gap-4 items-center">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-[#24282b] p-3 rounded-[8px] hover:bg-[#2f3539] transition-colors">
                  <FacebookIcon />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-[#24282b] p-3 rounded-[8px] hover:bg-[#2f3539] transition-colors">
                  <InstagramIcon />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="bg-[#24282b] p-3 rounded-[8px] hover:bg-[#2f3539] transition-colors">
                  <XIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile: logo + socials ── */}
        <div className="flex lg:hidden flex-col gap-10 items-center mt-14">
          <Image
            src="/BET-Logo.svg"
            alt="Boston Exclusive Transportation"
            width={300}
            height={92}
            className="w-[260px] h-auto object-contain"
          />
          <div className="flex gap-4 items-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-[#24282b] p-3 rounded-[8px] hover:bg-[#2f3539] transition-colors">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-[#24282b] p-3 rounded-[8px] hover:bg-[#2f3539] transition-colors">
              <InstagramIcon />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="bg-[#24282b] p-3 rounded-[8px] hover:bg-[#2f3539] transition-colors">
              <XIcon />
            </a>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-[#2e3438] mt-14" />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col gap-1 items-center pt-4">
          {/* Legal links */}
          <nav aria-label="Legal" className="flex flex-wrap gap-4 items-center justify-center">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-['Geist',sans-serif] font-light text-[12px] leading-6 text-white hover:text-[#a19e97] transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Privacy Choices */}
          <div className="flex items-center gap-2">
            <PrivacyChoicesIcon />
            <span className="font-['Geist',sans-serif] font-light text-[12px] leading-6 text-white whitespace-nowrap">
              Your Privacy Choices
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="px-5 pt-2">
          <p className="font-['Geist',sans-serif] font-light text-[12px] leading-6 text-[#eff0eb]">
            © 2026 Boston Exclusiv, LLC.
          </p>
        </div>

      </div>
    </footer>
  );
}
