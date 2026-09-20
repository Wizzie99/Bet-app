'use client';

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { PHONE_DISPLAY, PHONE_HREF, SUPPORT_EMAIL, SUPPORT_EMAIL_HREF } from '@/lib/services';

const SERVICE_LINKS = [
  { label: 'Airport transfers', href: '/services/airport-transfers' },
  { label: 'Hourly chauffeur', href: '/services/hourly-chauffeur' },
  { label: 'Corporate travel', href: '/services/corporate' },
  { label: 'Weddings & events', href: '/services/weddings' },
  { label: 'City-to-city', href: '/services/city-to-city' },
];

const COMPANY_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Fleet', href: '/fleet' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Careers', href: '/careers' },
];

const AREA_LINKS = [
  { label: 'Logan Airport', href: '/services/airport-transfers' },
  { label: 'Back Bay', href: '/services' },
  { label: 'Cambridge', href: '/services' },
  { label: 'Brookline', href: '/services' },
  { label: 'Newton', href: '/services' },
  { label: 'All areas →', href: '/services' },
];

const LEGAL_LINKS = [
  { label: 'Legal', href: '/legal' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Privacy Center', href: '/privacy-center' },
  { label: 'Terms', href: '/terms' },
];

function PrivacyChoicesIcon() {
  return (
    <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#0069ff] shrink-0" aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2.5 7l3 3 6-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function NewsletterBar() {
  const [email, setEmail] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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
        className="shrink-0 bg-[#5688fd] text-[#111416] font-['Geist_Mono',monospace] font-semibold text-[14px] tracking-[-0.01em] leading-6 px-3 py-2 rounded-[6px] uppercase hover:bg-[#6a96ff] transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5 min-w-0">
      <p className="font-['Geist_Mono',monospace] font-semibold text-[20px] leading-6 tracking-[-0.04em]">
        {title}
      </p>
      {children}
    </div>
  );
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="font-['Geist',sans-serif] font-normal text-[14px] leading-4 tracking-[-0.04em] hover:text-[#a19e97] transition-colors"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#131618] text-[#eff0eb] w-full">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16 pt-14 pb-10">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-16 lg:items-start">
          <div className="flex flex-col gap-6 lg:max-w-[420px] w-full">
            <NewsletterBar />
            <p className="font-['Geist',sans-serif] font-normal text-[14px] leading-[1.45] tracking-[-0.02em] text-[#a19e97] text-center lg:text-left">
              One email a month: seasonal rates, new vehicles, and Boston event dates worth booking ahead for. No spam, unsubscribe anytime.
            </p>
            <Image
              src="/BET-Logo.svg"
              alt="Boston Exclusive Transportation"
              width={220}
              height={68}
              className="w-[180px] h-auto object-contain mx-auto lg:mx-0"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12 flex-1 min-w-0">
            <FooterColumn title="Services">
              <ul className="flex flex-col gap-3">
                {SERVICE_LINKS.map((link) => (
                  <li key={link.href + link.label}>
                    <TextLink href={link.href}>{link.label}</TextLink>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Company">
              <ul className="flex flex-col gap-3">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.href}>
                    <TextLink href={link.href}>{link.label}</TextLink>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Support">
              <ul className="flex flex-col gap-3">
                <li>
                  <TextLink href="/contact">Contact</TextLink>
                </li>
                <li>
                  <a
                    href={PHONE_HREF}
                    className="font-['Geist',sans-serif] font-normal text-[14px] leading-4 tracking-[-0.04em] hover:text-[#a19e97] transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a
                    href={SUPPORT_EMAIL_HREF}
                    className="font-['Geist',sans-serif] font-normal text-[14px] leading-4 tracking-[-0.04em] hover:text-[#a19e97] transition-colors break-all"
                  >
                    {SUPPORT_EMAIL}
                  </a>
                </li>
                <li>
                  <TextLink href="/faq">Cancellation policy</TextLink>
                </li>
              </ul>
            </FooterColumn>

            <FooterColumn title="Service areas">
              <ul className="flex flex-col gap-3">
                {AREA_LINKS.map((link) => (
                  <li key={link.label}>
                    <TextLink href={link.href}>{link.label}</TextLink>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>

        <div className="border-t border-[#2e3438] mt-14" />

        <div className="flex flex-col gap-1 items-center pt-4">
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

          <div className="flex items-center gap-2">
            <PrivacyChoicesIcon />
            <span className="font-['Geist',sans-serif] font-light text-[12px] leading-6 text-white whitespace-nowrap">
              Your Privacy Choices
            </span>
          </div>
        </div>

        <div className="px-5 pt-2">
          <p className="font-['Geist',sans-serif] font-light text-[12px] leading-6 text-[#eff0eb]">
            © 2026 Boston Exclusive, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
