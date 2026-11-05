import type { Metadata } from 'next';

import FAQSection from '@/components/faq/FAQSection';
import { faqJsonLd } from '@/lib/faqs';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/services';

const title = 'FAQ — Rates, Logan Pickups, Vehicles & Policies';
const description =
  'Answers on pricing and gratuity, cancellations, Logan Airport pickups and flight delays, vehicle capacity, weddings and events, and where we drive.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/faq' },
  openGraph: { title, description, url: '/faq', type: 'website' },
};

export default function FaqPage() {
  return (
    <div className="w-full bg-[#eff0eb] text-[#191a19]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <div className="max-w-[800px] mx-auto px-5 py-16 lg:px-16 lg:py-24 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <p
            className="text-[12px] uppercase tracking-[-0.36px] text-[#595a59]"
            style={{ fontFamily: "'Geist Mono', ui-monospace, Menlo, monospace" }}
          >
            FAQ
          </p>
          <h1
            className="text-[clamp(36px,5vw,48px)] leading-[1.2] tracking-[-0.96px]"
            style={{ fontFamily: "'Lastik', Georgia, serif", fontWeight: 400 }}
          >
            Questions, answered
          </h1>
          <p
            className="text-[18px] leading-[26px] text-[#595a59]"
            style={{ fontFamily: "'Geist', sans-serif" }}
          >
            Pricing, cancellations, Logan pickups, vehicles, and events. Faster answers by phone:{' '}
            <a href={PHONE_HREF} className="underline underline-offset-2">
              {PHONE_DISPLAY}
            </a>
            , answered 24/7.
          </p>
        </div>

        <FAQSection />
      </div>
    </div>
  );
}
