import type { Metadata } from 'next';
import Link from 'next/link';

import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/services';

export const metadata: Metadata = {
  title: 'FAQ — Rates, Cancellations, Vehicles | BET Boston',
  description:
    "What's in the price, how cancellation works, vehicle capacities, and how flight tracking handles delays.",
};

const FAQS = [
  {
    q: "What's in the price?",
    a: 'Every quote includes taxes, tolls, and a 20% chauffeur gratuity. The price you see is the price you pay.',
  },
  {
    q: 'How does cancellation work?',
    a: 'Cancel or change within two hours of pickup and we charge 50%. No-shows are billed in full.',
  },
  {
    q: 'What if my flight is delayed?',
    a: 'Add your flight number and we track it from wheels-up. If you land 45 minutes late, your pickup moves 45 minutes, free.',
  },
  {
    q: 'How many people and bags can we take?',
    a: 'Each vehicle page lists seats and luggage. If you are over that, call us and we will send a Sprinter or a second car.',
  },
];

export default function FaqPage() {
  return (
    <div className="w-full bg-[#eff0eb] text-[#191a19]">
      <div className="max-w-[800px] mx-auto px-5 py-16 lg:px-16 lg:py-24 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1
            className="text-[clamp(36px,5vw,48px)] leading-[1.2] tracking-[-0.96px]"
            style={{ fontFamily: "'Lastik', Georgia, serif", fontWeight: 400 }}
          >
            Rates, cancellations, vehicles
          </h1>
          <p className="text-[18px] leading-[26px] text-[#595a59]" style={{ fontFamily: "'Geist', sans-serif" }}>
            Faster answers by phone:{' '}
            <a href={PHONE_HREF} className="underline underline-offset-2">
              {PHONE_DISPLAY}
            </a>
            , answered 24/7.
          </p>
        </div>

        <dl className="flex flex-col gap-8">
          {FAQS.map((item) => (
            <div key={item.q} className="flex flex-col gap-2">
              <dt className="text-[20px] leading-[26px] tracking-[-0.4px]" style={{ fontFamily: "'Geist', sans-serif", fontWeight: 500 }}>
                {item.q}
              </dt>
              <dd className="text-[16px] leading-[24px] text-[#595a59]" style={{ fontFamily: "'Geist', sans-serif" }}>
                {item.a}
              </dd>
            </div>
          ))}
        </dl>

        <Link
          href="/reserve"
          className="inline-flex w-fit items-center px-5 py-3 rounded-full bg-[#1c60ff] text-[#0c0d0f] font-['Geist_Mono',monospace] text-[15px] uppercase"
        >
          Get a quote
        </Link>
      </div>
    </div>
  );
}
