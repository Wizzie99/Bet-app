// Single source of truth for the /faq page.
//
// Each answer is rendered on the page AND fed word-for-word into the FAQPage
// JSON-LD (see components/faq/FAQSection.tsx). Google requires the two to
// match exactly, so never reword one without the other — they read from the
// same data here.
//
// Dollar figures mirror lib/fleet.ts and are placeholders inherited from the
// copy deck — keep them in agreement.

export type Faq = {
  q: string;
  a: string;
};

export type FaqGroup = {
  /** Anchor id, used by the topic shortcuts. */
  id: string;
  /** Short label for the shortcut chip. */
  label: string;
  /** Section heading. */
  title: string;
  items: Faq[];
};

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "pricing",
    label: "Pricing",
    title: "Pricing & payment",
    items: [
      {
        q: "What's included in the price?",
        a: "Everything. Every quote already includes taxes, tolls, and a 20% chauffeur gratuity, so the price you see is the price you pay — no surge pricing and no surprises at drop-off.",
      },
      {
        q: "How much does a car service in Boston cost?",
        a: "Flat airport transfers start at $145 for a sedan, and hourly chauffeur service starts at $112 an hour. Larger vehicles and long-distance trips are quoted individually, and you'll always see the full price before you book.",
      },
      {
        q: "Do I need to tip the chauffeur?",
        a: "No. A 20% gratuity is already built into every quote, so there's nothing extra to add at the end of the ride unless you'd like to.",
      },
      {
        q: "How do I pay, and when am I charged?",
        a: "Payments run securely through Stripe and we never store your card. We hold the card on file when you book and charge after the trip is complete.",
      },
    ],
  },
  {
    id: "booking",
    label: "Booking",
    title: "Booking & cancellations",
    items: [
      {
        q: "How far in advance should I book?",
        a: "A day's notice is ideal for guaranteed availability, but we take same-day and last-minute bookings whenever a car is free. Our line is answered 24/7, so it's always worth a call.",
      },
      {
        q: "What is your cancellation policy?",
        a: "Cancel or change a booking more than two hours before pickup at no charge. Inside two hours we charge 50% of the fare, and no-shows are billed in full.",
      },
      {
        q: "Can I change my pickup time or add a stop?",
        a: "Yes. Tell us as soon as plans shift and we'll re-time the pickup or add the stop whenever the schedule allows; extra hourly time is billed at the vehicle's rate.",
      },
    ],
  },
  {
    id: "airport",
    label: "Logan",
    title: "Logan Airport & flights",
    items: [
      {
        q: "Where do you pick up at Logan Airport?",
        a: "For arrivals we offer a meet-and-greet, where your chauffeur waits inside at baggage claim with a name sign, or a curbside pickup once you're outside the terminal — your choice when you book.",
      },
      {
        q: "What happens if my flight is delayed?",
        a: "Nothing changes for you. Add your flight number and we track it from wheels-up; if you land 45 minutes late, your pickup simply moves 45 minutes, at no extra cost.",
      },
      {
        q: "How much free wait time do I get at the airport?",
        a: "Airport pickups include 60 minutes of free wait time from the moment your flight lands, which is plenty of room for immigration and baggage claim.",
      },
      {
        q: "Can you do early-morning or late-night airport runs?",
        a: "Yes. We dispatch around the clock, every day of the year, so a 4 a.m. departure or a midnight landing is handled the same as any other trip.",
      },
    ],
  },
  {
    id: "vehicles",
    label: "Vehicles",
    title: "Vehicles & capacity",
    items: [
      {
        q: "What vehicles are in your fleet?",
        a: "Our late-model fleet includes the Volvo S90 and Mercedes-Benz S-Class sedans, the Chevrolet Suburban and Cadillac Escalade SUVs, and the Mercedes-Benz Sprinter van for larger groups.",
      },
      {
        q: "How many passengers and bags can you carry?",
        a: "Sedans seat three to four with room for three or four checked bags, the SUVs seat up to seven with six bags, and the Sprinter van carries twelve passengers and ten bags. Each vehicle page lists its exact capacity.",
      },
      {
        q: "Do you provide child seats?",
        a: "Yes — tell us the ages and we'll fit the right infant, convertible, or booster seat before pickup. Please request child seats when you book so the chauffeur has them installed and ready.",
      },
      {
        q: "Is alcohol allowed in the vehicle?",
        a: "Passengers of legal drinking age may enjoy alcohol on most occasion and event bookings; standard point-to-point and airport transfers are alcohol-free. Let us know the occasion and we'll confirm what's allowed.",
      },
    ],
  },
  {
    id: "chauffeurs",
    label: "Chauffeurs",
    title: "Chauffeurs & safety",
    items: [
      {
        q: "Are your chauffeurs licensed, insured, and background-checked?",
        a: "Yes. Every chauffeur is background-checked, fully licensed, and commercially insured, with an average of five years driving professionally.",
      },
      {
        q: "Will I know my chauffeur before the trip?",
        a: "Yes. You'll receive your chauffeur's name, photo, and phone number the night before your ride, so there's no guessing who's at the curb.",
      },
      {
        q: "Are the vehicles cleaned between trips?",
        a: "Every interior is detailed and restocked after each ride, with bottled water and device chargers waiting in a cabin that's as clean as the day it was delivered.",
      },
    ],
  },
  {
    id: "events",
    label: "Events",
    title: "Weddings & events",
    items: [
      {
        q: "Do you provide transportation for weddings?",
        a: "Yes. We build the day around your timeline — getting ready, first look, ceremony, reception, and exit — map the vehicles to each movement, and confirm every detail the week before.",
      },
      {
        q: "Can you handle proms, graduations, and group celebrations?",
        a: "Absolutely. The Suburban, Escalade, and Sprinter are built for groups, and we coordinate pickups, drop-offs, and parent check-ins so everyone travels together safely.",
      },
      {
        q: "Do you serve Fenway Park, TD Garden, and convention events?",
        a: "Yes. We run drop-offs and timed pickups for Fenway Park, TD Garden, Gillette Stadium, and the BCEC, staging the car nearby so you're not fighting event traffic after the final out.",
      },
    ],
  },
  {
    id: "service-area",
    label: "Service area",
    title: "Service area & long-distance",
    items: [
      {
        q: "What areas do you serve?",
        a: "We're based in Malden and serve Boston and Greater Boston — Cambridge, Brookline, Newton, Wellesley, the North Shore, and the surrounding suburbs — plus every regional airport.",
      },
      {
        q: "Do you do trips outside Boston, like New York or Cape Cod?",
        a: "Yes. We run flat-rate city-to-city trips across the Northeast: Boston to New York from about $895, plus Cape Cod, Newport, Providence, Portsmouth, and the ski country north of the city.",
      },
    ],
  },
];

/** Flattened list of every Q&A, in page order — used for the FAQPage JSON-LD. */
export const ALL_FAQS: Faq[] = FAQ_GROUPS.flatMap((group) => group.items);

/**
 * FAQPage JSON-LD built from the exact answers rendered on the page. Keep the
 * rendered copy and this structured data reading from the same source so they
 * never drift apart.
 */
export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ALL_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}
