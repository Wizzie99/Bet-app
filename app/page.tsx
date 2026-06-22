import Hero from '@/components/Hero';
import VehicleCard from '@/components/VehicleCard';

export default function Home() {
  return (
    <main className="flex-1 w-full min-h-0">
      <Hero />
      <VehicleCard
        name="Mercedes-Benz S-Class"
        category="Premium Sedan"
        seats={4}
        luggage={4}
        year={2025}
        pricePerHour={112}
        images={[
          { src: '/vehicles/s-class-1.jpg', alt: 'Mercedes-Benz S-Class front' },
          { src: '/vehicles/s-class-2.jpg', alt: 'Mercedes-Benz S-Class interior' },
        ]}
      />
    </main>
  );
}
