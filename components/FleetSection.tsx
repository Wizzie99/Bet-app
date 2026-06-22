import VehicleCard, { VehicleCardProps } from './VehicleCard';

const FLEET: VehicleCardProps[] = [
  {
    name: 'Mercedes-Benz S-Class',
    category: 'Premium Sedan',
    seats: 4,
    luggage: 4,
    year: 2025,
    pricePerHour: 112,
    images: [
      { src: '/vehicles/s-class-1.jpg', alt: 'Mercedes-Benz S-Class front' },
      { src: '/vehicles/s-class-2.jpg', alt: 'Mercedes-Benz S-Class interior' },
    ],
    reserveHref: '/reserve/s-class',
  },
  {
    name: 'Cadillac Escalade',
    category: 'Luxury SUV',
    seats: 7,
    luggage: 6,
    year: 2025,
    pricePerHour: 135,
    images: [
      { src: '/vehicles/escalade-1.jpg', alt: 'Cadillac Escalade front' },
      { src: '/vehicles/escalade-2.jpg', alt: 'Cadillac Escalade interior' },
    ],
    reserveHref: '/reserve/escalade',
  },
  {
    name: 'BMW 7 Series',
    category: 'Executive Sedan',
    seats: 4,
    luggage: 3,
    year: 2025,
    pricePerHour: 105,
    images: [
      { src: '/vehicles/bmw7-1.jpg', alt: 'BMW 7 Series front' },
      { src: '/vehicles/bmw7-2.jpg', alt: 'BMW 7 Series interior' },
    ],
    reserveHref: '/reserve/bmw-7-series',
  },
  {
    name: 'Lincoln Navigator',
    category: 'Full-Size SUV',
    seats: 7,
    luggage: 6,
    year: 2024,
    pricePerHour: 128,
    images: [
      { src: '/vehicles/navigator-1.jpg', alt: 'Lincoln Navigator front' },
      { src: '/vehicles/navigator-2.jpg', alt: 'Lincoln Navigator interior' },
    ],
    reserveHref: '/reserve/navigator',
  },
  {
    name: 'Mercedes-Benz Sprinter',
    category: 'Luxury Van',
    seats: 12,
    luggage: 10,
    year: 2025,
    pricePerHour: 180,
    images: [
      { src: '/vehicles/sprinter-1.jpg', alt: 'Mercedes-Benz Sprinter front' },
      { src: '/vehicles/sprinter-2.jpg', alt: 'Mercedes-Benz Sprinter interior' },
    ],
    reserveHref: '/reserve/sprinter',
  },
  {
    name: 'Rolls-Royce Ghost',
    category: 'Ultra Luxury Sedan',
    seats: 4,
    luggage: 3,
    year: 2025,
    pricePerHour: 350,
    images: [
      { src: '/vehicles/ghost-1.jpg', alt: 'Rolls-Royce Ghost front' },
      { src: '/vehicles/ghost-2.jpg', alt: 'Rolls-Royce Ghost interior' },
    ],
    reserveHref: '/reserve/rolls-royce-ghost',
  },
];

export default function FleetSection() {
  return (
    <section
      className="w-full py-16 px-4 sm:px-8"
      style={{ background: '#ffffff' }}
    >
      {/* Header */}
      <div className="max-w-[1352px] mx-auto mb-16 flex flex-col gap-6 md:flex-row md:items-start md:justify-between px-4">
        <h2
          style={{
            fontFamily: "'Lastik', 'Georgia', serif",
            fontWeight: 400,
            fontSize: 'clamp(36px, 5vw, 48px)',
            lineHeight: 1.2,
            letterSpacing: '-0.96px',
            color: '#191a19',
            flexShrink: 0,
          }}
        >
          Check
          <br />
          Our Fleet
        </h2>
        <p
          className="md:max-w-[589px]"
          style={{
            fontFamily: "'Geist', sans-serif",
            fontWeight: 400,
            fontSize: 20,
            lineHeight: '26px',
            letterSpacing: '-0.6px',
            color: '#595a59',
          }}
        >
          We provide a wide range of luxurious vehicles, ranging in capacity
          from 1 to 55 passengers, including sedans, SUVs, Vans, Stretch
          Limousine Service, and Motor Coaches, each one a late-model vehicle in
          excellent condition.
        </p>
      </div>

      {/* Cards — always horizontal scroll */}
      <div
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
        style={{ scrollbarWidth: 'none' }}
      >
        {FLEET.map((vehicle) => (
          <VehicleCard key={vehicle.name} {...vehicle} />
        ))}
      </div>
    </section>
  );
}
