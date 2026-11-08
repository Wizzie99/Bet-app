import type { Metadata } from 'next';

import BookingWidget from '@/components/BookingWidget';

const title = 'Reserve Your Ride';
const description =
  'Book a Boston car online. Get an instant quote and pay securely, or call us 24/7.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/reserve' },
  openGraph: { title, description, url: '/reserve', type: 'website' },
};

export default function ReservePage() {
  return <BookingWidget />;
}
