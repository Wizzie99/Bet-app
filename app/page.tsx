import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeaturesGrid from '@/components/FeaturesGrid';
import StatsSection from '@/components/StatsSection';
import FleetSection from '@/components/FleetSection';
import ContactForm from '@/components/ContactForm';
import TestimonialsSection from '@/components/TestimonialsSection';
import Reveal from '@/components/Reveal';

const title = 'Boston Car Service & Logan Airport Transfers';
const description =
  'Private car service in Boston. Late-model luxury fleet, vetted chauffeurs, flat Logan rates with flight tracking. Quotes include tolls and gratuity.';

export const metadata: Metadata = {
  // The title template (`%s | BET`) doesn't apply to the root index page,
  // so set the brand explicitly here.
  title: { absolute: `${title} | BET` },
  description,
  alternates: { canonical: '/' },
  openGraph: { title: `${title} | BET`, description, url: '/', type: 'website' },
};

export default function Home() {
  return (
    <main className="flex-1 w-full min-h-0">
      <Hero />
      <Reveal>
        <FeaturesGrid />
      </Reveal>
      <Reveal>
        <StatsSection />
      </Reveal>
      <Reveal>
        <FleetSection />
      </Reveal>
      <Reveal>
        <ContactForm />
      </Reveal>
      <Reveal>
        <TestimonialsSection />
      </Reveal>
    </main>
  );
}
