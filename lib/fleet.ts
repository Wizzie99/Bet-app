export type Vehicle = {
  slug: string;
  name: string;
  /** Short class label, e.g. "Business Class" — shown as the eyebrow. */
  tier: string;
  /** Marketing class used on the small alternate cards. */
  klass: string;
  year: number;
  seats: number;
  luggage: number;
  hourlyRate: number;
  airportFlat: number;
  /** Nameplate paragraph. */
  blurb: string;
  /**
   * Gallery images: [0] is the stage/hero, the rest fill the thumb strip.
   * Library photos live in /public/Images. Vehicles without a matching
   * shoot still use labelled placeholder tiles on the detail page.
   */
  gallery: { src: string; alt: string }[];
  /** Square-ish card image used in the alternates row. */
  cardImage: string;
};

export const FLEET: Vehicle[] = [
  {
    slug: "chevrolet-suburban",
    name: "Chevrolet Suburban",
    tier: "Business Class",
    klass: "Executive SUV",
    year: 2025,
    seats: 7,
    luggage: 6,
    hourlyRate: 135,
    airportFlat: 185,
    blurb:
      "Our most-booked vehicle for Logan runs and executive travel. Seven seats with second-row captain's chairs, room for six checked bags, and enough quiet in the back to take a call on the way in from the airport.",
    gallery: [
      { src: "/Images/Chevrolet-Suburban-Frontal.jpg", alt: "2025 Chevrolet Suburban, front three-quarter view on the Boston waterfront" },
      { src: "/Images/Chevrolet-Suburban-Interior-Fron't Seat.png", alt: "Suburban front seats and dashboard" },
      { src: "/Images/Chevrolet-Suburban-Interior.png", alt: "Suburban cabin looking through to the third row" },
      { src: "/Images/Chevrolet-Suburban-Interior-Middle- Seat.png", alt: "Suburban second-row seating" },
    ],
    cardImage: "/Images/Chevrolet-Suburban-Frontal.jpg",
  },
  {
    slug: "cadillac-escalade",
    name: "Cadillac Escalade",
    tier: "First Class",
    klass: "Luxury SUV",
    year: 2025,
    seats: 7,
    luggage: 6,
    hourlyRate: 145,
    airportFlat: 195,
    blurb:
      "The flagship of our SUV fleet. Seven seats, six checked bags, and a cabin quiet enough to work in from Logan to Wellesley.",
    gallery: [
      { src: "/Images/Cadillac-Escalade-Exterior.jpg", alt: "2025 Cadillac Escalade, front three-quarter view" },
      { src: "/Images/Cadillac-Escalade-Interior.jpg", alt: "Escalade cabin looking through to the third row" },
      { src: "/Images/Cadillac-Escalade-Interior-Back.jpg", alt: "Escalade second-row captain's chairs" },
      { src: "/Images/Escalade-Trunk.jpg", alt: "Escalade cargo area" },
    ],
    cardImage: "/Images/Cadillac-Escalade-Exterior.jpg",
  },
  {
    slug: "mercedes-benz-s-class",
    name: "Mercedes-Benz S-Class",
    tier: "Business Class",
    klass: "Premium Sedan",
    year: 2025,
    seats: 4,
    luggage: 4,
    hourlyRate: 112,
    airportFlat: 145,
    blurb:
      "The executive sedan. Four seats, four checked bags, and the smoothest ride in the fleet for a solo traveler or a pair heading downtown.",
    gallery: [
      { src: "/Images/Mercedes-Benz-S-Clas-Exterior.jpg", alt: "2025 Mercedes-Benz S-Class, front three-quarter view" },
      { src: "/Images/S-Class-Frist set.png", alt: "S-Class front seats" },
      { src: "/Images/S-Class interior.png", alt: "S-Class rear bench" },
      { src: "/Images/S-Class-Back-Interior.png", alt: "S-Class rear cabin" },
    ],
    cardImage: "/Images/Mercedes-Benz-S-Clas-Exterior.jpg",
  },
  {
    slug: "mercedes-benz-sprinter",
    name: "Mercedes-Benz Sprinter",
    tier: "Group Travel",
    klass: "Luxury Van",
    year: 2024,
    seats: 12,
    luggage: 10,
    hourlyRate: 180,
    airportFlat: 240,
    blurb:
      "Twelve seats, ten checked bags, and standing headroom. The right call for corporate roadshows and airport runs with a full group.",
    gallery: [
      { src: "/Images/Mercedes-Benz-Sprinter.jpg", alt: "2024 Mercedes-Benz Sprinter, front three-quarter view on the Boston waterfront" },
      { src: "/fleet/sprinter/interior-rear.jpg", alt: "Sprinter passenger cabin" },
      { src: "/fleet/sprinter/interior-cabin.jpg", alt: "Sprinter seating detail" },
      { src: "/fleet/sprinter/console.jpg", alt: "Sprinter front console" },
      { src: "/fleet/sprinter/aisle.jpg", alt: "Sprinter center aisle" },
      { src: "/fleet/sprinter/cargo.jpg", alt: "Sprinter luggage area" },
    ],
    cardImage: "/Images/Mercedes-Benz-Sprinter.jpg",
  },
];

export function getVehicle(slug: string): Vehicle | undefined {
  return FLEET.find((v) => v.slug === slug);
}

/** True when the path points at a file in /public/Images rather than a placeholder. */
export function hasFleetPhoto(src: string): boolean {
  return src.startsWith("/Images/");
}

/** Three alternates, excluding the current vehicle. */
export function getAlternates(slug: string, count = 3): Vehicle[] {
  return FLEET.filter((v) => v.slug !== slug).slice(0, count);
}

/** Everything included in every quote — rendered as the two-column check list. */
export const INCLUDED: string[] = [
  "All taxes and tolls",
  "20% chauffeur gratuity — already in",
  "Flight tracking on airport pickups",
  "60 minutes of airport wait time",
  "15 minutes of wait time elsewhere",
  "Bottled water and phone chargers",
  "Curbside luggage handling",
  "Text when your chauffeur is en route",
];

/** Example arrivals board. Swap for a live feed when the tracking API is wired. */
export const FLIGHT_ROWS = [
  { code: "DL 1422", route: "JFK → BOS · Terminal A", status: "On time · 21:05", late: false },
  { code: "AA 2187", route: "DCA → BOS · Terminal B", status: "35 min late · 21:48", late: true },
  { code: "B6 0614", route: "MCO → BOS · Terminal C", status: "Landed · Gate C11", late: false },
];
