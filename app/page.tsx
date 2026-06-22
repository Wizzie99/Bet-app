import Hero from '@/components/Hero';
import FeaturesGrid from '@/components/FeaturesGrid';
import StatsSection from '@/components/StatsSection';
import FleetSection from '@/components/FleetSection';
import ContactForm from '@/components/ContactForm';
import TestimonialsSection from '@/components/TestimonialsSection';

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
