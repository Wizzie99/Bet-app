import Image from 'next/image';

export default function FeaturesGrid() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8">
      <div className="max-w-[1352px] mx-auto flex flex-col lg:flex-row lg:items-stretch gap-2 w-full">

        {/* ── Column 1 ─────────────────────────────────────────────── */}
        <div className="flex flex-col gap-2 flex-1 min-w-0">

          {/* On time, every time — with map image */}
          <div
            className="flex flex-1 flex-col overflow-hidden rounded-2xl min-h-0"
            style={{ background: '#131618', border: '0.1px solid #1d2019' }}
          >
            {/* Text header */}
            <div className="flex gap-6 items-end p-4">
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <Image src="/Icons/On time every time.svg" alt="" width={40} height={40} unoptimized />
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
                  On time,<br />every time
                </p>
              </div>
              <p
                className="min-w-0 flex-1"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 300,
                  fontSize: 12,
                  lineHeight: 1.18,
                  letterSpacing: '-0.36px',
                  color: '#d9d9d9',
                }}
              >
                Every route is planned before your chauffeur leaves the garage, with live traffic feeding your pickup time. If anything changes, you get a text — not a surprise.
              </p>
            </div>

            {/* Route tracking image */}
            <div className="relative w-full flex-1 min-h-[220px]">
              <Image
                src="/Images/Features.jpg"
                alt="Live route tracking"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Pay securely — Stripe */}
          <div
            className="flex items-center gap-1 p-4 rounded-2xl shrink-0 min-h-[136px]"
            style={{ background: '#131618', border: '0.1px solid #1d2019' }}
          >
            <div className="flex flex-col gap-3 flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <Image src="/Icons/Pay secureley.svg" alt="" width={40} height={40} unoptimized />
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
                  Pay securely,<br />tip nothing extra
                </p>
              </div>
              <p
                className="min-w-0"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 300,
                  fontSize: 10,
                  lineHeight: 1.18,
                  letterSpacing: '-0.3px',
                  color: '#d9d9d9',
                }}
              >
                Payments run through Stripe; we never store your card. Every quote already includes taxes, tolls, and a 20% chauffeur gratuity. The price you see is the price you pay.
              </p>
            </div>
          </div>
        </div>

        {/* ── Column 2 ─────────────────────────────────────────────── */}
        <div className="flex flex-col gap-2 flex-1 min-w-0">

          {/* Vetted chauffeurs */}
          <div
            className="flex items-center gap-1 p-4 rounded-2xl shrink-0 min-h-[136px]"
            style={{ background: '#131618', border: '0.1px solid #1d2019' }}
          >
            <div className="flex flex-col gap-3 flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <Image src="/Icons/Vetted_Chauffeurs.svg" alt="" width={40} height={40} unoptimized />
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
                  Vetted<br />chauffeurs
                </p>
              </div>
              <p
                className="min-w-0"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 300,
                  fontSize: 10,
                  lineHeight: 1.18,
                  letterSpacing: '-0.3px',
                  color: '#d9d9d9',
                }}
              >
                Background-checked, licensed, and insured, with an average of five years behind the wheel professionally. You&apos;ll get your chauffeur&apos;s name, photo, and number the night before.
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
            className="flex-1 flex p-4 rounded-2xl min-h-[360px] lg:min-h-0"
            style={{
              background: '#1c60ff',
              border: '0.1px solid #1d2019',
            }}
          >
            <div className="flex flex-col gap-6 justify-end">
              <div className="flex flex-col gap-[58px]">
                <Image src="/Icons/Creane an Acc.svg" alt="" width={40} height={40} unoptimized />
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
                  20% off your<br />first ride
                </p>
              </div>
              <p
                className="max-w-[220px]"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 300,
                  fontSize: 12,
                  lineHeight: 1.18,
                  letterSpacing: '-0.36px',
                  color: '#d9d9d9',
                }}
              >
                Create a free account and the discount is applied automatically at checkout. No code to remember.
              </p>
            </div>
          </div>
        </div>

        {/* ── Column 3 ─────────────────────────────────────────────── */}
        <div className="flex flex-col gap-2 flex-1 min-w-0">

          {/* Flight tracking card */}
          <div
            className="relative overflow-hidden rounded-2xl flex-1 min-h-[520px]"
            style={{
              background: '#131618',
              border: '0.2px solid #8c8c8c',
            }}
          >
            {/* Top text */}
            <div className="absolute top-0 left-0 right-0 z-10 flex gap-6 items-end p-4">
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <Image src="/Icons/Flight_Land.svg" alt="" width={40} height={40} unoptimized />
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
                  Where&apos;s my plane?<br />We know.
                </p>
              </div>
              <p
                className="min-w-0 flex-1"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: 1.18,
                  letterSpacing: '-0.36px',
                  color: '#d9d9d9',
                }}
              >
                Add your flight number and we track it from wheels-up. Land early and we&apos;re already curbside. Delayed 45 minutes? Your pickup moves 45 minutes, free.
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
            className="flex items-center gap-1 p-4 rounded-2xl shrink-0 min-h-[136px]"
            style={{ background: '#131618', border: '0.1px solid #1d2019' }}
          >
            <div className="flex flex-col gap-3 flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <Image src="/Icons/Clean.svg" alt="" width={40} height={40} unoptimized />
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
                  Detailed between<br />every trip
                </p>
              </div>
              <p
                className="min-w-0"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 300,
                  fontSize: 10,
                  lineHeight: 1.18,
                  letterSpacing: '-0.3px',
                  color: '#d9d9d9',
                }}
              >
                Interiors are cleaned and restocked after each ride — water, chargers, and a cabin that smells like a new car, because most of ours nearly are.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
