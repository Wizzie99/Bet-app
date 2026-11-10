// Blog posts. The index and /blog/[slug] both read from here, including
// BlogPosting JSON-LD, so the title, dates, and copy cannot drift.
//
// choosing-the-best-boston-car-service is the Semrush draft, kept as written.
// Only the Boston Limousine citations are retargeted to this site. mass.gov
// and NAIC citations stay on the original sources.

export type RichPart = string | { href: string; label: string; external?: boolean };
export type RichText = RichPart[];

export type PostBlock =
  | { kind: "p"; text: RichText }
  | { kind: "ul"; items: RichText[] };

export type PostSection = {
  id: string;
  heading: string;
  blocks: PostBlock[];
};

export type Post = {
  slug: string;
  /** Document title. The root layout appends " | BET". */
  title: string;
  h1: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  displayDate: string;
  hero: { src: string; alt: string };
  sections: PostSection[];
  /** Service slugs rendered as the related row. */
  related: string[];
};

const LOGAN_RULES =
  "https://www.mass.gov/doc/740-cmr-23-commercial-ground-transportation-services-at-boston-logan-international-airport/download";
const RMV_LIVERY =
  "https://www.mass.gov/doc/evr-traditional-training-reference-guide/download";
const NAIC_LIVERY = "https://content.naic.org/cipr-topics/commercial-ride-sharing";

const CITY_TO_CITY = "/services/city-to-city";
const RESERVE = "/reserve";

export const POSTS: Post[] = [
  {
    slug: "choosing-the-best-boston-car-service",
    title: "Top Boston Car Service: A Complete Guide",
    h1: "Choosing the Best Boston Car Service",
    description:
      "Discover the top Boston Car Service options tailored to your needs, whether for Logan airport, New York trips, or corporate travel. Book with confidence!",
    excerpt:
      "The best Boston Car Service for your trip is one that matches your itinerary, accommodates your passengers and luggage, and confirms its pricing and pickup arrangements before you pay. Whether you need a Logan transfer, transportation for meetings, or a private ride to New York, compare the details behind the vehicle photos. This guide explains what to ask, how to plan your journey, and which booking terms deserve a closer look.",
    publishedAt: "2026-11-09",
    updatedAt: "2026-11-09",
    displayDate: "November 9, 2026",
    hero: {
      src: "/Images/Chevrolet-Suburban-Frontal.jpg",
      alt: "2025 Chevrolet Suburban parked on the Boston waterfront, with the skyline behind it",
    },
    related: ["airport-transfers", "city-to-city", "corporate", "weddings"],
    sections: [
      {
        id: "fit",
        heading: "Which Boston car service fits your trip?",
        blocks: [
          {
            kind: "p",
            text: [
              "Choose your service around the journey: a point-to-point reservation for a direct transfer, an hourly chauffeur for several stops, or an event booking with a clearly defined schedule. Then select the vehicle by passenger count, luggage, and accessibility needs—not appearance alone. ",
              { href: CITY_TO_CITY, label: "Boston Exclusive Transportation" },
              ", for example, lists sedans, SUVs, stretch limousines, and larger vehicles for its Boston–New York service, illustrating why confirming the actual vehicle matters. (",
              { href: CITY_TO_CITY, label: "bostonexclusivetransportation.com" },
              ")",
            ],
          },
          {
            kind: "p",
            text: ["Use these categories to frame your request:"],
          },
          {
            kind: "ul",
            items: [
              [
                "Sedan: Consider this for individual or couple travel, but provide your bag count before accepting the assignment.",
              ],
              [
                "SUV: Request confirmed cargo capacity when traveling with several passengers, bulky suitcases, or a stroller.",
              ],
              [
                "Passenger van: Ask about seating layout, luggage storage, and ease of entry for a group.",
              ],
              [
                "Stretch limousine: Prioritize the shared experience for a celebration, while checking practical details such as seat belts, entry space, and storage.",
              ],
            ],
          },
          {
            kind: "p",
            text: [
              "A Boston chauffeur service should explain which option suits your needs rather than simply offering the largest vehicle. Ask whether you are reserving a specific model or a vehicle class, and what substitutions are permitted. If charging ports, Wi-Fi, child seats, or accessible transportation are essential, have those requirements acknowledged in writing.",
            ],
          },
        ],
      },
      {
        id: "occasion",
        heading: "Make Boston limo service work for the occasion",
        blocks: [
          {
            kind: "p",
            text: [
              "For a wedding, anniversary dinner, concert, or group celebration, build the reservation around the event timeline. Give the operator every address and distinguish between arrival deadlines and flexible departure times. Avoid treating the ceremony, photographs, reception, and final return as one vague block of time.",
            ],
          },
          {
            kind: "p",
            text: [
              "When comparing Boston limo service options, ask whether the vehicle stays with your party or leaves between transfers. That distinction determines whether you can depart early, leave belongings onboard, or adjust the itinerary. Have the operator explain what happens if dinner runs late or the event finishes after your reserved period.",
            ],
          },
          {
            kind: "p",
            text: [
              "For a stretch limousine, request current vehicle photos and confirmation of the seating arrangement. Ask how formal clothing, mobility limitations, and any luggage affect the practical fit. A celebratory interior is appealing, but comfortable entry and a workable pickup plan deserve equal attention.",
            ],
          },
          {
            kind: "p",
            text: [
              "For Boston pickups, provide the venue’s preferred passenger-loading location and a contact who can coordinate with the chauffeur. Ask the venue to confirm that the proposed vehicle can use that location. One clear meeting point is more useful than asking a group to find the car somewhere outside.",
            ],
          },
        ],
      },
      {
        id: "logan",
        heading: "Plan Logan airport pickups before travel day",
        blocks: [
          {
            kind: "p",
            text: [
              "For Boston airport service, reserve the arrival procedure as carefully as the ride itself. Logan’s rules require a prior verifiable reservation for unscheduled limousine pickups, so do not assume you can walk outside and hire one from the limo stand. Save your confirmation and the dispatch number before boarding your flight. (",
              { href: LOGAN_RULES, label: "mass.gov", external: true },
              ")",
            ],
          },
          {
            kind: "p",
            text: ["Your Boston Logan car service confirmation should address:"],
          },
          {
            kind: "ul",
            items: [
              [
                "Flight details: Supply the airline, flight number, arrival date, and a working passenger phone number.",
              ],
              [
                "Flight tracking: Ask whether pickup scheduling follows actual arrival and what happens after a cancellation or rebooking.",
              ],
              [
                "Waiting time: Confirm the allowance, when the clock starts, and the charge after it expires.",
              ],
              [
                "Meeting instructions: Request the terminal, level, designated pickup area, and contact procedure.",
              ],
              [
                "Baggage and assistance: Explain checked luggage, a stroller, or any help needed reaching the vehicle.",
              ],
            ],
          },
          {
            kind: "p",
            text: [
              "Do not interpret “meet and greet” as an automatic promise that your chauffeur will wait inside baggage claim. Massport’s limousine rules restrict drivers from entering terminal buildings without permission. Ask exactly who meets you, where that meeting occurs, and whether additional assistance must be arranged. (",
              { href: LOGAN_RULES, label: "mass.gov", external: true },
              ")",
            ],
          },
          {
            kind: "p",
            text: [
              "For departures, give the operator your flight time and your desired airport arrival time. Ask it to recommend a pickup time, then check that recommendation against your airline’s guidance. Keep a separate buffer for collecting other passengers rather than folding those stops into the driving estimate.",
            ],
          },
        ],
      },
      {
        id: "new-york",
        heading: "How should you plan a Boston to New York car service?",
        blocks: [
          {
            kind: "p",
            text: [
              "Plan a Boston to New York car service backward from your required arrival time, using your exact destination and allowing room for delays and breaks. As a planning reference—not a guarantee—",
              { href: CITY_TO_CITY, label: "Boston Exclusive Transportation" },
              " estimates roughly four to four and a half hours to Midtown Manhattan in normal conditions and advises budgeting five hours or more for certain busy departures. Your own quote should include an itinerary-specific departure recommendation. (",
              { href: CITY_TO_CITY, label: "bostonexclusivetransportation.com" },
              ")",
            ],
          },
          {
            kind: "p",
            text: [
              "Give the operator a street address rather than simply “New York.” Identify whether you are heading to a hotel, office, residence, or airport terminal, and explain any fixed deadline. For a flight connection, separate the road journey from the time you need for airport processing.",
            ],
          },
          {
            kind: "p",
            text: ["Before accepting the itinerary, clarify these points:"],
          },
          {
            kind: "ul",
            items: [
              [
                "Stops: List meals, restroom breaks, and passenger pickups so the operator can account for them.",
              ],
              [
                "Return arrangements: Specify a same-day return or a later date, and ask whether waiting is included.",
              ],
              [
                "Driver coverage: Ask how the company plans driver rest and handles an extended day.",
              ],
              [
                "Destination access: Confirm the appropriate entrance and a backup meeting location with your host or hotel.",
              ],
            ],
          },
          {
            kind: "p",
            text: [
              "For business travel, request the space and amenities you actually need. If you intend to work, ask about connectivity and charging, but keep an offline option ready. The goal is a realistic travel plan, not a schedule that depends on uninterrupted productivity.",
            ],
          },
        ],
      },
      {
        id: "professional",
        heading: "Check professionalism beyond the vehicle",
        blocks: [
          {
            kind: "p",
            text: [
              "Ask for evidence of appropriate vehicle registration and commercial insurance, along with an explanation of chauffeur screening and training. Massachusetts RMV guidance notes that livery oversight is largely municipal and that the RMV issues livery plates to applicants with the required insurance. Do not treat a polished website as proof of a uniform statewide chauffeur-screening program. (",
              { href: RMV_LIVERY, label: "mass.gov", external: true },
              ")",
            ],
          },
          {
            kind: "p",
            text: [
              "Insurance deserves a direct question: does the policy cover the vehicle’s use for paid passenger transportation? Personal auto coverage should not be treated as interchangeable with commercial protection; the National Association of Insurance Commissioners notes that most personal policies contain exclusions for livery use. Request confirmation appropriate to your reservation rather than accepting “fully insured” without clarification. (",
              { href: NAIC_LIVERY, label: "content.naic.org", external: true },
              ")",
            ],
          },
          {
            kind: "p",
            text: [
              "Also ask who answers the phone during your trip, how driver details are communicated, and what happens after a breakdown or missed pickup. Request written terms for any punctuality guarantee, including exclusions and remedies. When reading reviews, focus on descriptions of communication, problem resolution, and vehicle condition rather than the star average alone.",
            ],
          },
        ],
      },
      {
        id: "quote",
        heading: "What should your car service quote include?",
        blocks: [
          {
            kind: "p",
            text: [
              "Your quote should identify the vehicle class, itinerary, pricing basis, included charges, possible extras, and cancellation terms. Compare the total for the same trip—not one provider’s starting rate against another’s complete estimate. Without matching dates, addresses, vehicle requirements, and service duration, a generic price range is not a dependable budget.",
            ],
          },
          {
            kind: "p",
            text: ["Ask each operator to answer the same checklist:"],
          },
          {
            kind: "ul",
            items: [
              ["Is the ride priced per transfer, per hour, or as a package?"],
              ["What minimum booking period applies, and when does billable time begin?"],
              ["Are tolls, airport charges, parking, administrative fees, and gratuity included?"],
              ["How are extra stops, waiting, overtime, and itinerary changes charged?"],
              ["What are the cancellation deadline, no-show terms, and refund process?"],
              ["Does a flight delay change the reservation or trigger additional charges?"],
            ],
          },
          {
            kind: "p",
            text: [
              "Keep the answers with your confirmation. If a policy page and your quote differ, ask the company to resolve the discrepancy before payment. For an event or long-distance trip, do not assume that the terms for a routine airport transfer apply.",
            ],
          },
        ],
      },
      {
        id: "corporate",
        heading: "Keep business transportation easy to manage",
        blocks: [
          {
            kind: "p",
            text: [
              "When arranging corporate car service in Greater Boston, give the operator an itinerary with meeting addresses, passenger names, and an authorized trip contact. Ask for itemized receipts, billing references, and a clear process for approving changes. These details help an assistant or travel manager handle the booking without repeatedly interrupting the passenger.",
            ],
          },
          {
            kind: "p",
            text: [
              "For a roadshow, distinguish firm meeting times from tentative stops. Confirm whether the chauffeur remains available throughout and how an extension would be approved. Evaluate Boston transportation providers by how clearly they handle this operational detail, not simply by how luxurious the fleet looks.",
            ],
          },
        ],
      },
      {
        id: "book",
        heading: "Book with the details settled",
        blocks: [
          {
            kind: "p",
            text: [
              "Choose the provider that gives you a suitable vehicle, a realistic schedule, clear support contacts, and understandable terms. Keep those essentials ahead of optional extras.",
            ],
          },
          {
            kind: "p",
            text: [
              "Ready to arrange your ride? Open ",
              { href: RESERVE, label: "Boston Exclusive Transportation’s booking page" },
              " to explore a reservation, then confirm availability, the complete price, and pickup instructions before paying. This is one booking option, not a comparative ranking. (",
              { href: RESERVE, label: "bostonexclusivetransportation.com" },
              ")",
            ],
          },
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}

function partText(part: RichPart): string {
  return typeof part === "string" ? part : part.label;
}

function blockText(block: PostBlock): string {
  if (block.kind === "p") return block.text.map(partText).join("");
  return block.items.map((item) => item.map(partText).join("")).join(" ");
}

export function postWordCount(post: Post): number {
  const body = [
    post.h1,
    post.excerpt,
    ...post.sections.flatMap((section) => [section.heading, ...section.blocks.map(blockText)]),
  ].join(" ");
  return body.split(/\s+/).filter(Boolean).length;
}

export function postReadingMinutes(post: Post): number {
  return Math.max(1, Math.round(postWordCount(post) / 230));
}
