import type { Metadata } from 'next';

import ContactForm from '@/components/ContactForm';

const title = 'Reserve Your Ride';
const description =
  'Build your trip and get an instant estimate. No charge until a chauffeur is confirmed.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/reserve' },
  openGraph: { title, description, url: '/reserve', type: 'website' },
};

export default function ReservePage() {
  return (
    <div className="w-full bg-[#131618]">
      <ContactForm />
    </div>
  );
}
