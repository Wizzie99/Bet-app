import Hero from '@/components/Hero';
import FleetSection from '@/components/FleetSection';

export default function Home() {
  return (
    <main className="flex-1 w-full min-h-0">
      <Hero />
      <FleetSection />
    </main>
  );
}
