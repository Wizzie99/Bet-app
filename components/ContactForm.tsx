import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/services';

export default function ContactForm() {
  return (
    <div className="bg-[#131618] w-full flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-[1440px] bg-[#0c0d0f] rounded-[24px] shadow-[0px_40px_80px_0px_rgba(67,67,66,0.16),0px_2px_4px_0px_rgba(67,67,66,0.04)] overflow-hidden flex flex-col lg:flex-row gap-4">
        <div className="flex-1 flex justify-center p-6 md:p-10">
          <div className="w-full max-w-[340px] flex flex-col gap-8 justify-center">
            <div className="flex flex-col gap-2">
              <h2
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 500,
                  fontSize: 32,
                  lineHeight: '40px',
                  letterSpacing: '-0.96px',
                  color: '#eff0eb',
                }}
              >
                Tell us about the trip
              </h2>
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: '22px',
                  letterSpacing: '-0.48px',
                  color: '#bbbcb8',
                }}
              >
                Continue to the booking form for an instant quote and secure payment.
              </p>
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: '20px',
                  letterSpacing: '-0.42px',
                  color: '#bbbcb8',
                }}
              >
                Faster by phone:{' '}
                <a href={PHONE_HREF} className="text-[#eff0eb] underline underline-offset-2 hover:text-white">
                  {PHONE_DISPLAY}
                </a>
                , answered 24/7.
              </p>
            </div>

            <Link
              href="/reserve"
              className="group w-full bg-[#1c60ff] hover:bg-[#1750d6] active:bg-[#0f3fa8] transition-colors rounded-[6px] px-5 py-3 flex items-center justify-center gap-1.5"
            >
              <span
                className="flex-1 text-left"
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: '20px',
                  letterSpacing: '-0.48px',
                  textTransform: 'uppercase',
                  color: '#0c0d0f',
                }}
              >
                Get a quote
              </span>
              <span className="bg-[#001a47] group-hover:bg-[#000d24] transition-colors rounded-[4px] size-[31px] flex items-center justify-center shrink-0">
                <ArrowUpRight className="size-5 text-[#dee4eb] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </div>

        <div className="hidden lg:block flex-1 relative min-h-[520px]">
          <Image
            src="/Images/Boston-Chauffeur-Escalade-Luggage.jpg"
            alt="Chauffeur loading luggage into a black Cadillac Escalade outside a Boston hotel"
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(19,22,24,0)] to-[rgba(3,4,4,0.45)]" />
        </div>
      </div>
    </div>
  );
}
