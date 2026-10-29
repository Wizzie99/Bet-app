import type { Metadata } from 'next';

import ContactForm from '@/components/ContactForm';
import { PHONE_DISPLAY } from '@/lib/services';

const title = `Contact — Quotes 24/7, Call ${PHONE_DISPLAY}`;
const description =
  'Get a quote by form, email, or phone. We answer 24/7 and most quotes come back within 15 minutes.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/contact' },
  openGraph: { title, description, url: '/contact', type: 'website' },
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#131618]">
      <ContactForm />
    </div>
  );
}
