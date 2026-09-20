import type { Metadata } from 'next';

import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Reserve Your Ride | BET Boston',
  description:
    'Build your trip and get an instant estimate. No charge until a chauffeur is confirmed.',
};

export default function ReservePage() {
  return (
    <div className="w-full bg-[#131618]">
      <ContactForm />
    </div>
  );
}
