import Image from 'next/image';

export default function FeaturesGrid() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8">
      <div className="max-w-[1352px] mx-auto flex flex-col lg:flex-row gap-2 w-full">

        {/* ── Column 1 ─────────────────────────────────────────────── */}
        <div className="flex flex-col gap-2 flex-1 min-w-0">

          {/* Always On Time — with map image */}
          <div
            className="flex flex-col overflow-hidden rounded-2xl"
            style={{ background: '#131618', border: '0.1px solid #1d2019' }}
          >
            {/* Text header */}
            <div className="flex gap-6 items-end p-4">
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <Image src="/features/icon-route.png" alt="" width={40} height={40} />
                <p
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontWeight: 400,
                    fontSize: 20,
                    lineHeight: 1.1,
                    letterSpacing: '-0.4px',
                    color: '#ffffff',
                  }}
                >
                  Always<br />On Time
                </p>
              </div>
              <p
                className="shrink-0 w-[205px]"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 300,
                  fontSize: 12,
                  lineHeight: 1.18,
                  letterSpacing: '-0.36px',
                  color: '#d9d9d9',
                }}
              >
                We use the latest technology to ensure no surprise occures. Routes are always pre-calculated and we get notified.
              </p>
            </div>

            {/* Map image */}
            <div className="relative w-full" style={{ aspectRatio: '335 / 263' }}>
              <Image
                src="/features/map-bg.png"
                alt="Route map"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Your Data Stays Your's */}
          <div
            className="flex items-center gap-1 p-4 rounded-2xl"
            style={{ background: '#131618', border: '0.1px solid #1d2019' }}
          >
            <div className="flex flex-col gap-3 flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <Image src="/features/icon-encrypted.png" alt="" width={24} height={24} />
                <p
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: 1.1,
                    letterSpacing: '-0.32px',
                    color: '#ffffff',
                  }}
                >
                  Your Data<br />Stays Your&apos;s
                </p>
              </div>
              <p
                className="w-[194px]"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 300,
                  fontSize: 10,
                  lineHeight: 1.18,
                  letterSpacing: '-0.3px',
                  color: '#d9d9d9',
                }}
              >
                BET strictly follows all health and safety protocols. We clean each of our vehicles before and after each trip.
              </p>
            </div>
            <div className="relative shrink-0" style={{ width: 76, height: 36 }}>
              <Image src="/features/stripe-logo.png" alt="Stripe" fill className="object-contain" />
            </div>
          </div>
        </div>

        {/* ── Column 2 ─────────────────────────────────────────────── */}
        <div className="flex flex-col gap-2 flex-1 min-w-0">

          {/* Veted Chauffeurs */}
          <div
            className="flex items-center gap-1 p-4 rounded-2xl"
            style={{ background: '#131618', border: '0.1px solid #1d2019' }}
          >
            <div className="flex flex-col gap-3 flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <Image src="/features/icon-fingerprint.png" alt="" width={24} height={24} />
                <p
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: 1.1,
                    letterSpacing: '-0.32px',
                    color: '#ffffff',
                  }}
                >
                  Veted<br />Chauffeurs
                </p>
              </div>
              <p
                className="w-[194px]"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 300,
                  fontSize: 10,
                  lineHeight: 1.18,
                  letterSpacing: '-0.3px',
                  color: '#d9d9d9',
                }}
              >
                Our chauffeurs are carefully screened, fluent in English, and highly skilled. The average is 5+ years of professional experience.
              </p>
            </div>

            {/* Overlapping avatar stack */}
            <div className="flex items-center shrink-0 px-3">
              <div className="flex items-center" style={{ gap: -12 }}>
                {['/features/chauffeur-1.png', '/features/chauffeur-2.png', '/features/chauffeur-3.png'].map((src, i) => (
                  <div
                    key={src}
                    className="relative rounded-full overflow-hidden border shrink-0"
                    style={{
                      width: 32,
                      height: 32,
                      borderColor: '#868686',
                      borderWidth: 0.2,
                      marginLeft: i === 0 ? 0 : -12,
                    }}
                  >
                    <Image src={src} alt={`Chauffeur ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sign Up — blue promo card */}
          <div
            className="flex-1 flex p-4 rounded-2xl"
            style={{
              background: '#1c60ff',
              border: '0.1px solid #1d2019',
              minHeight: 400,
            }}
          >
            <div className="flex flex-col gap-6 justify-end">
              <div className="flex flex-col gap-[58px]">
                <Image src="/features/icon-howtoreg.png" alt="" width={40} height={40} />
                <p
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: 1.1,
                    letterSpacing: '-0.32px',
                    color: '#ffffff',
                  }}
                >
                  Sign Up to<br />Get a 20% Off
                </p>
              </div>
              <p
                className="w-[156px]"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 300,
                  fontSize: 12,
                  lineHeight: 1.18,
                  letterSpacing: '-0.36px',
                  color: '#d9d9d9',
                }}
              >
                BET strictly follows all health and safety protocols. We clean each of our vehicles before and after each trip. Our cleaning procedure includes the use of sanitizer for disinfection.
              </p>
            </div>
          </div>
        </div>

        {/* ── Column 3 ─────────────────────────────────────────────── */}
        <div className="flex flex-col gap-2 flex-1 min-w-0">

          {/* Flight tracking card */}
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              background: '#131618',
              border: '0.2px solid #8c8c8c',
              height: 400,
            }}
          >
            {/* Top text */}
            <div className="absolute top-0 left-0 right-0 z-10 flex gap-6 items-end p-4">
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <Image src="/features/icon-route.png" alt="" width={24} height={24} />
                <p
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontWeight: 500,
                    fontSize: 20,
                    lineHeight: 1.1,
                    letterSpacing: '-0.4px',
                    color: '#ffffff',
                  }}
                >
                  Always<br />On Time
                </p>
              </div>
              <p
                className="shrink-0 w-[210px]"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: 1.18,
                  letterSpacing: '-0.36px',
                  color: '#d9d9d9',
                }}
              >
                We use the latest technology to ensure no surprise occures. Routes are always pre-calculated and we get notified.
              </p>
            </div>

            {/* Airplane image */}
            <div className="absolute" style={{ left: 37, top: 150, width: 281, height: 93 }}>
              <Image src="/features/airplane.png" alt="Airplane" fill className="object-cover" />
            </div>

            {/* Flight tracker UI panel */}
            <div
              className="absolute overflow-hidden rounded-tl-2xl rounded-tr-2xl"
              style={{
                background: 'rgba(36,40,43,0.9)',
                border: '0.2px solid #bcbcbc',
                borderBottom: 'none',
                width: 258,
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              {/* Panel header */}
              <div className="flex flex-col gap-1 p-3 pb-0">
                <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 500, fontSize: 15, letterSpacing: '-0.45px', color: '#d9d9d9' }}>
                  Where&apos;s My Plane?
                </p>
                <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 500, fontSize: 12, letterSpacing: '-0.36px', color: '#7d7d7d' }}>
                  Airbus B241neo
                </p>
              </div>

              {/* Running late badge */}
              <div className="flex items-center gap-1 mx-3 mt-3 px-2 py-1 rounded-[3px] w-fit" style={{ background: '#ff2a28' }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 1L9 9H1L5 1Z" fill="#19181d" />
                </svg>
                <span style={{ fontFamily: "'Geist', sans-serif", fontWeight: 600, fontSize: 6.4, letterSpacing: '-0.19px', color: '#19181d' }}>
                  RUNNING LATE
                </span>
              </div>

              {/* Delay message */}
              <p className="mx-3 mt-2" style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: 10, letterSpacing: '-0.3px', color: '#d9d9d9' }}>
                45m delay predicted due to late arriving aircraft
              </p>

              {/* My Flight row */}
              <div className="mx-2 mt-2 px-7 py-1.5 rounded-[4px] flex items-center" style={{ background: '#353a3d', height: 27 }}>
                <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 500, fontSize: 12, letterSpacing: '-0.36px', color: '#d9d9d9' }}>
                  My Flight
                </p>
                <p className="ml-auto" style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: 10, letterSpacing: '-0.3px', color: '#ff2a28' }}>
                  35m Delay Predicted
                </p>
              </div>

              {/* BOS row */}
              <div className="flex items-start gap-2 px-3 mt-3">
                <div className="flex flex-col items-center gap-0 mt-1">
                  <div className="rounded-full" style={{ width: 7, height: 7, background: '#eff0eb' }} />
                  <div style={{ width: 1, height: 41, background: '#515c65' }} />
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginTop: -2 }}>
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="#eff0eb" />
                  </svg>
                  <div style={{ width: 1, height: 41, background: '#515c65' }} />
                  <div className="rounded-full" style={{ width: 7, height: 7, background: '#eff0eb' }} />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: 8, letterSpacing: '-0.24px', color: '#eff0eb' }}>BOS</p>
                  <div className="flex items-center justify-between mt-8">
                    <div>
                      <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 500, fontSize: 12, letterSpacing: '-0.36px', color: '#d9d9d9' }}>New York to Boston</p>
                      <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: 8, letterSpacing: '-0.24px', color: '#eff0eb' }}>Landing in 12m</p>
                    </div>
                    <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: 10, letterSpacing: '-0.3px', color: '#ff2a28' }}>30m Late</p>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: 8, letterSpacing: '-0.24px', color: '#eff0eb' }}>JFK</p>
                    <p style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400, fontSize: 10, letterSpacing: '-0.3px', color: '#ff2a28' }}>15m Late</p>
                  </div>
                </div>
              </div>

              {/* Bottom gradient fade */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[73px]"
                style={{ background: 'linear-gradient(to top, rgba(20,23,26,0.82) 0%, rgba(20,23,26,0) 100%)' }}
              />
            </div>
          </div>

          {/* Clean & Sanitized Vehicles */}
          <div
            className="flex items-center gap-1 p-4 rounded-2xl"
            style={{ background: '#131618', border: '0.1px solid #1d2019' }}
          >
            <div className="flex flex-col gap-3 flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <Image src="/features/icon-cleaning.png" alt="" width={24} height={24} />
                <p
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: 1.1,
                    letterSpacing: '-0.32px',
                    color: '#ffffff',
                  }}
                >
                  Clean &amp; Sanitized<br />Vehicles
                </p>
              </div>
              <p
                className="w-[194px]"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 300,
                  fontSize: 10,
                  lineHeight: 1.18,
                  letterSpacing: '-0.3px',
                  color: '#d9d9d9',
                }}
              >
                BET strictly follows all health and safety protocols. We clean each of our vehicles before and after each trip.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
