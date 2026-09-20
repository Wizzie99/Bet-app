import type { Metadata } from 'next';

import ContactForm from '@/components/ContactForm';
import { PHONE_DISPLAY } from '@/lib/services';

export const metadata: Metadata = {
  title: `Contact BET — Quotes 24/7 | ${PHONE_DISPLAY}`,
  description:
    'Get a quote by form, email, or phone. We answer 24/7 and most quotes come back within 15 minutes.',
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#131618]">
      <ContactForm />
    </div>
  );
}
