import type { Metadata } from 'next';
import Link from 'next/link';

import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/services';

export const metadata: Metadata = {
  title: 'About Boston Exclusive Transportation',
  description:
    'Six years and 50,000 rides across Greater Boston. Meet the team and the standards behind every trip.',
};

export default function AboutPage() {
  return (
    <div className="w-full bg-[#eff0eb] text-[#191a19]">
      <div className="max-w-[800px] mx-auto px-5 py-16 lg:px-16 lg:py-24 flex flex-col gap-6">
        <h1
          className="text-[clamp(36px,5vw,48px)] leading-[1.2] tracking-[-0.96px]"
          style={{ fontFamily: "'Lastik', Georgia, serif", fontWeight: 400 }}
        >
          About Boston Exclusive Transportation
        </h1>
        <p className="text-[20px] leading-[26px] tracking-[-0.6px] text-[#595a59]" style={{ fontFamily: "'Geist', sans-serif" }}>
          Six years and 50,000 rides across Greater Boston. Late-model vehicles, vetted chauffeurs, and quotes that already include tolls, taxes, and a 20% gratuity.
        </p>
        <div className="flex flex-wrap gap-3 pt-4">
          <Link
            href="/reserve"
            className="inline-flex items-center px-5 py-3 rounded-full bg-[#1c60ff] text-[#0c0d0f] font-['Geist_Mono',monospace] text-[15px] uppercase"
          >
            Get a quote
          </Link>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center px-5 py-3 rounded-full border border-[#515c65] font-['Geist_Mono',monospace] text-[15px] uppercase"
          >
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </div>
  );
}
