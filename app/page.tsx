import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeaturesGrid from '@/components/FeaturesGrid';
import StatsSection from '@/components/StatsSection';
import FleetSection from '@/components/FleetSection';
import ContactForm from '@/components/ContactForm';
import TestimonialsSection from '@/components/TestimonialsSection';

export const metadata: Metadata = {
  title: 'Boston Car Service & Logan Airport Transfers | BET',
  description:
    'Private car service in Boston. Late-model luxury fleet, vetted chauffeurs, flat Logan rates with flight tracking. Quotes include tolls and gratuity.',
};

export default function Home() {
  return (
    <main className="flex-1 w-full min-h-0">
      <Hero />
      <FeaturesGrid />
      <StatsSection />
      <FleetSection />
      <ContactForm />
      <TestimonialsSection />
    </main>
  );
}
