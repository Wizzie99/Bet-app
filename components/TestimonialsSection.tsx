import Image from 'next/image';

const TESTIMONIALS = [
  {
    quote: '"They arrived early and made my airport run feel like a first-class experience."',
    name: 'Michael Chen',
    affiliation: 'Logan airport transfer',
    avatar: '/testimonials/avatar-michael.png',
  },
  {
    quote: '"For our wedding day, they were professional, courteous, and made everything seamless."',
    name: 'Sarah Mitchell',
    affiliation: 'married at the Fairmont Copley',
    avatar: '/testimonials/avatar-sarah.png',
  },
  {
    quote: '"The best ride I\'ve had in Boston. Clean car, great driver, no stress."',
    name: 'James Rodriguez',
    affiliation: 'Back Bay hotel guest',
    avatar: '/testimonials/avatar-james.png',
  },
];

function TestimonialCard({ quote, name, affiliation, avatar }: (typeof TESTIMONIALS)[number]) {
  return (
    <div
      className="flex flex-col gap-6 p-8 rounded-2xl overflow-hidden"
      style={{
        background: '#131618',
        border: '0.3px solid #515c65',
        boxShadow: '0px 40px 80px -16px rgba(67,67,66,0.16), 0px 2px 4px 0px rgba(67,67,66,0.04)',
      }}
    >
      <Image
        src="/Icons/SVG image.svg"
        alt="5 stars"
        width={116}
        height={19}
        unoptimized
        className="shrink-0"
      />

      <p
        style={{
          fontFamily: "'Geist', sans-serif",
          fontWeight: 500,
          fontSize: 20,
          lineHeight: '26px',
          letterSpacing: '-0.6px',
          color: '#bbbcb8',
        }}
      >
        {quote}
      </p>

      <div className="flex items-center gap-4">
        <div className="relative shrink-0 rounded-full overflow-hidden" style={{ width: 48, height: 48 }}>
          <Image src={avatar} alt={name} fill className="object-cover" sizes="48px" />
        </div>
        <div className="flex flex-col min-w-0">
          <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontWeight: 600,
              fontSize: 16,
              lineHeight: 1.5,
              color: '#dee4eb',
            }}
          >
            {name}
          </p>
          <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: '20px',
              letterSpacing: '-0.42px',
              color: '#898987',
            }}
          >
            {affiliation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      className="w-full py-16 px-4 sm:px-8 lg:py-24"
      style={{ background: '#0c0d0f' }}
    >
      <div className="flex flex-col items-center gap-4 text-center mb-16">
        <h2
          style={{
            fontFamily: "'Lastik', 'Georgia', serif",
            fontWeight: 400,
            fontSize: 'clamp(32px, 4vw, 48px)',
            lineHeight: 1.2,
            letterSpacing: '-0.96px',
            color: '#eff0eb',
          }}
        >
          What customers say
        </h2>
        <p
          style={{
            fontFamily: "'Geist', sans-serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '24px',
            letterSpacing: '-0.48px',
            color: '#bbbcb8',
            maxWidth: 280,
          }}
        >
          Three reviews, each with a name and a trip we can point to.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-4 lg:hidden">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        <div className="hidden lg:flex gap-4 items-start">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`flex-1 min-w-0 ${i === 1 ? 'mt-16' : ''}`}
            >
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
