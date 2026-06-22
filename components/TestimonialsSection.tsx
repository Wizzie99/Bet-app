import Image from 'next/image';

const TESTIMONIALS = [
  {
    quote: '"They arrived early and made my airport run feel like a first-class experience."',
    name: 'Michael Chen',
    role: 'Business executive',
    avatar: '/testimonials/avatar-michael.png',
  },
  {
    quote: '"The best ride I\'ve had in Boston. Clean car, great driver, no stress."',
    name: 'James Rodriguez',
    role: 'Frequent traveler',
    avatar: '/testimonials/avatar-james.png',
  },
  {
    quote: '"For our wedding day, they were professional, courteous, and made everything seamless."',
    name: 'Sarah Mitchell',
    role: 'Bride',
    avatar: '/testimonials/avatar-sarah.png',
  },
  {
    quote: '"The best ride I\'ve had in Boston. Clean car, great driver, no stress."',
    name: 'James Rodriguez',
    role: 'Frequent traveler',
    avatar: '/testimonials/avatar-james.png',
  },
  {
    quote: '"They arrived early and made my airport run feel like a first-class experience."',
    name: 'Michael Chen',
    role: 'Business executive',
    avatar: '/testimonials/avatar-michael.png',
  },
  {
    quote: '"The best ride I\'ve had in Boston. Clean car, great driver, no stress."',
    name: 'James Rodriguez',
    role: 'Frequent traveler',
    avatar: '/testimonials/avatar-james.png',
  },
];

function TestimonialCard({ quote, name, role, avatar }: (typeof TESTIMONIALS)[number]) {
  return (
    <div
      className="flex flex-col gap-6 p-8 rounded-2xl overflow-hidden"
      style={{
        background: '#131618',
        border: '0.3px solid #515c65',
        boxShadow: '0px 40px 80px -16px rgba(67,67,66,0.16), 0px 2px 4px 0px rgba(67,67,66,0.04)',
      }}
    >
      {/* Stars */}
      <div className="relative shrink-0" style={{ width: 116, height: 19 }}>
        <Image src="/testimonials/stars.png" alt="5 stars" fill className="object-contain object-left" sizes="116px" />
      </div>

      {/* Quote */}
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

      {/* Avatar */}
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
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const col1 = [TESTIMONIALS[0], TESTIMONIALS[1]];
  const col2 = [TESTIMONIALS[2], TESTIMONIALS[3]];
  const col3 = [TESTIMONIALS[4], TESTIMONIALS[5]];

  return (
    <section
      className="w-full py-16 px-4 sm:px-8 lg:py-24"
      style={{ background: '#0c0d0f' }}
    >
      {/* Section header */}
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
            maxWidth: 196,
          }}
        >
          Real experiences from those who trust us.
        </p>
      </div>

      {/* Masonry grid — 3 offset columns on desktop, single column on mobile */}
      <div className="max-w-[1200px] mx-auto">
        {/* Mobile: single column */}
        <div className="flex flex-col gap-4 lg:hidden">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

        {/* Desktop: 3 columns with middle offset */}
        <div className="hidden lg:flex gap-4 items-start">
          <div className="flex flex-col gap-4 flex-1 min-w-0">
            {col1.map((t, i) => <TestimonialCard key={i} {...t} />)}
          </div>
          <div className="flex flex-col gap-4 flex-1 min-w-0 mt-20">
            {col2.map((t, i) => <TestimonialCard key={i} {...t} />)}
          </div>
          <div className="flex flex-col gap-4 flex-1 min-w-0">
            {col3.map((t, i) => <TestimonialCard key={i} {...t} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
