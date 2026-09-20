// Single source of truth for the eight /services/[slug] pages.
//
// Each page's FAQ is rendered on the page AND fed word-for-word into that
// page's FAQPage JSON-LD — Google requires the two to match, so both read
// from the same `faq` array here.
//
// ⚠ Every dollar figure, minimum, and drive time below is a placeholder
// inherited from the copy deck. Replace with real numbers before launch and
// keep them in agreement with the fleet data and service-area rates.

export const PHONE_DISPLAY = "(857) 930-4661";
export const PHONE_HREF = "tel:+18579304661";
export const SUPPORT_EMAIL = "support@bostonexclusive.com";
export const SUPPORT_EMAIL_HREF = "mailto:support@bostonexclusive.com";

export type ServiceSection = { heading: string; body: string };
export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  /** Display name — breadcrumb, related cards, index. */
  name: string;
  /** Navbar / index label. */
  navLabel: string;
  href: string;
  /** Short blurb for the index and homepage deck. */
  summary: string;
  /** SEO metadata. */
  title: string;
  description: string;
  h1: string;
  intro: string;
  /** Ordered content blocks between the intro and the FAQ. */
  sections: ServiceSection[];
  faq: ServiceFaq[];
  /** Primary CTA button label. */
  ctaLabel: string;
  /** Related service slugs, for cross-linking the hub. */
  related: string[];
  /**
   * Hero / card photo. Services without a matching shoot still use
   * labelled placeholder tiles on the detail page and homepage deck.
   */
  image?: { src: string; alt: string };
};

export const SERVICES: Service[] = [
  {
    slug: "airport-transfers",
    name: "Airport transfers",
    navLabel: "Airport Transfers",
    href: "/services/airport-transfers",
    summary:
      "Flat-rate rides to Logan and the regional airports, with flight tracking and 60 minutes of free wait time.",
    title: "Boston Airport Transfers — Flat Rates & Flight Tracking | BET",
    description:
      "Flat-rate transfers to Logan, Hanscom, T.F. Green, Manchester and Worcester. We track your flight, wait 60 minutes free, and the quote includes tolls and gratuity.",
    h1: "Airport transfers, at a flat rate",
    intro:
      "The airport run is the trip most likely to go wrong, so it's the one we've built the most around. One price agreed before you ride, your flight tracked from the moment it leaves the gate, and a chauffeur who's already there when you land. No taxi line, no surge pricing, no wondering whether the car will show.",
    sections: [
      {
        heading: "What's included in every transfer",
        body: "Flat rate quoted up front, with tolls, taxes and a 20% gratuity already inside it. Flight tracking on every arrival. Sixty minutes of wait time, counted from when you actually land. Curbside luggage handling, bottled water, and a text the moment your chauffeur is en route. Meet-and-greet at baggage claim is available when you'd rather not think about finding the car at all.",
      },
      {
        heading: "How it works",
        body: "Add your flight number when you book — that's the whole ask. We watch the flight from wheels-up, so if you land early we're already staged nearby, and if you're delayed your pickup moves with you at no charge. When you touch down, a text names your exact pickup door. Walk out, and your chauffeur is there.",
      },
      {
        heading: "Airports we serve",
        body: "Logan (BOS), all terminals. Hanscom Field (BED) for private aviation. T.F. Green (PVD), Manchester–Boston (MHT), Worcester (ORH), and Portsmouth (PSM) for the regional runs. Flat rates from downtown start at $135 in a sedan and $185 in an SUV; every pickup area has its own rate, listed on the Logan page.",
      },
    ],
    faq: [
      {
        q: "What if my flight is delayed?",
        a: "Nothing you need to manage. We track it from wheels-up, re-time your pickup free, and your 60 included minutes start at landing, not at your original schedule.",
      },
      {
        q: "Where does my chauffeur meet me?",
        a: "Curbside at your terminal's arrivals level by default — you'll get their name, photo and number, and a text with the exact door. Add meet-and-greet ($45) and they'll be at baggage claim with a name sign.",
      },
      {
        q: "How early should I book an airport pickup?",
        a: "A day ahead guarantees your vehicle. Same-day is usually possible — call (857) 930-4661.",
      },
    ],
    ctaLabel: "Get your flat-rate quote",
    related: ["city-to-city", "group-travel"],
    image: {
      src: "/Images/Airport-Transfert.jpg",
      alt: "Chauffeur loading a suitcase into a black sedan at the airport curb",
    },
  },
  {
    slug: "hourly-chauffeur",
    name: "Hourly chauffeur",
    navLabel: "Hourly Chauffeur",
    href: "/services/hourly-chauffeur",
    summary:
      "Book a chauffeur and vehicle by the hour — three-hour minimum, unlimited stops, the car waits for you.",
    title: "Hourly Chauffeur Service in Boston | BET",
    description:
      "Book a chauffeur and vehicle by the hour in Boston. Three-hour minimum, unlimited stops, the car waits for you. From $112/hr with gratuity and tolls included.",
    h1: "An hourly chauffeur, the car stays with you",
    intro:
      "Some days don't fit a single pickup and drop-off. Client meetings across the city, a property tour, a shoot that runs long, a night out that changes plans twice. Book by the hour and the same chauffeur and vehicle stay with you for the whole stretch — the car waits while you don't watch the clock.",
    sections: [
      {
        heading: "What's included",
        body: "Your chauffeur and vehicle for the hours you book, with a three-hour minimum. Unlimited stops within that time. Tolls, taxes and gratuity in the rate. Bottled water and chargers in the car. Wait time is never metered separately — it's already yours.",
      },
      {
        heading: "How it works",
        body: "Tell us the start time, the starting address, and roughly how long you'll need. The chauffeur arrives, and from there the day is yours to redirect — add a stop, change the destination, run 20 minutes late at dinner. If you need longer than booked, we extend by the hour whenever the schedule allows.",
      },
      {
        heading: "What people use it for",
        body: "Real-estate showings across neighborhoods. Photo and film production days. Medical appointments where a family member wants the car close. A parents' evening out. Executives with back-to-back meetings who'd rather work between them than park. Any day where the value is in not having to think about the car.",
      },
      {
        heading: "Rates",
        body: "From $112/hr for a sedan, $135/hr for an SUV, $180/hr for a Sprinter. Three-hour minimum on all vehicles. The rate is all-in — no separate charges for waiting, tolls, or gratuity.",
      },
    ],
    faq: [
      {
        q: "Is there a minimum?",
        a: "Three hours on every vehicle. Below that, a point-to-point or airport transfer is usually the cheaper booking.",
      },
      {
        q: "Can I extend on the day?",
        a: "Yes, by the hour, whenever the chauffeur's schedule allows — just ask them directly.",
      },
      {
        q: "Does the chauffeur wait or leave and come back?",
        a: "They stay with you the entire booking. The car is yours for the hours you've reserved.",
      },
    ],
    ctaLabel: "Book an hourly chauffeur",
    related: ["corporate", "city-to-city"],
  },
  {
    slug: "city-to-city",
    name: "City to city",
    navLabel: "City to City",
    href: "/services/city-to-city",
    summary:
      "Fixed-price chauffeured travel from Boston to New York, Cape Cod, Newport and beyond — no meter, no surge.",
    title: "City-to-City Car Service from Boston — Fixed Rates | BET",
    description:
      "Fixed-price chauffeured travel from Boston to New York, Cape Cod, Newport, Portsmouth and beyond. No hourly meter, no surge. Door to door, work or sleep the whole way.",
    h1: "City to city, at a fixed price",
    intro:
      "When the train doesn't go where you're going and the flight isn't worth the airport, a chauffeur is the calm option — especially at a price agreed before you leave. No hourly meter running in traffic, no surge on a holiday weekend. Door to door, with the back seat as a place to work or sleep.",
    sections: [
      {
        heading: "What's included",
        body: "A fixed rate quoted before departure, tolls and gratuity inside it. Door-to-door service with no transfers or connections. A late-model vehicle sized to your group and luggage. Bottled water, chargers, and quiet. For the longer runs, a chauffeur who's driven the route before and knows where the traffic builds.",
      },
      {
        heading: "How it works",
        body: "Tell us where and when. We quote a flat price for the whole trip, both ways if you need the return. On the day, your chauffeur handles the route, the tolls and the timing — you decide whether to open a laptop or close your eyes.",
      },
      {
        heading: "Popular routes",
        body: "Boston to New York, about four hours, from $895. Cape Cod, Newport and Providence for the summer runs. Portsmouth and Portland heading north. The Berkshires, Stowe and Sugarbush for ski season. Manchester and Hartford when the flight leaves from there. Every route is a fixed quote — ask for yours.",
      },
      {
        heading: "Why a car beats the alternatives",
        body: "No security line, no boarding group, no rental counter at the other end. You leave from your door and arrive at theirs. For two or more travelers the math often favors the car outright, and the time is usable the entire way.",
      },
    ],
    faq: [
      {
        q: "Is the price really fixed?",
        a: "Yes. We quote the whole trip before you book, including tolls. Traffic is our problem, not a surcharge on your bill.",
      },
      {
        q: "Can you do the return trip too?",
        a: "Yes — round trips are quoted as one booking, often at a better rate than two one-ways.",
      },
      {
        q: "How long can the trips be?",
        a: "Anywhere in New England and the Northeast. New York, Vermont, Maine and the Berkshires are routine.",
      },
    ],
    ctaLabel: "Get a fixed quote for your route",
    related: ["airport-transfers", "group-travel"],
  },
  {
    slug: "corporate",
    name: "Corporate travel",
    navLabel: "Corporate Travel",
    href: "/services/corporate",
    summary:
      "One account, monthly invoicing, cost-center reporting and priority dispatch for executives and clients.",
    title: "Corporate Car Service in Boston — Accounts & Billing | BET",
    description:
      "Ground transportation for Boston companies. One account, monthly invoicing, cost-center reporting and priority dispatch for executives and visiting clients.",
    h1: "Corporate travel, on one account",
    intro:
      "When the ride reflects on the company, the details matter — and so does the paperwork behind them. A corporate account replaces per-ride cards with monthly billing, gives your finance team the reporting they need, and puts your executives and visiting clients at the front of the dispatch queue.",
    sections: [
      {
        heading: "What an account gives you",
        body: "Monthly consolidated invoicing instead of a card for every trip. Cost-center and project tagging so expenses reconcile themselves. Priority dispatch during peak periods. A named account manager who knows your travelers and your standards. Booking on behalf of others, so an assistant can arrange a CEO's car in a minute. No minimum spend to open one.",
      },
      {
        heading: "Who it's for",
        body: "Firms flying executives in and out of Logan on a regular cadence. Companies hosting clients who should be met, not left to a rideshare. Finance teams tired of chasing ride receipts. Assistants who book travel for people who don't book their own.",
      },
      {
        heading: "How it works",
        body: "We set up the account, add your travelers and cost centers, and agree on how you want to be billed. From then on, anyone you authorize can book — online, by phone, or by handing us an itinerary — and it all lands on one monthly statement, tagged the way your team needs it.",
      },
      {
        heading: "The standard doesn't change",
        body: "Everything in the consumer service still applies: late-model vehicles, vetted chauffeurs, flight tracking, flat airport rates. The account layer is about billing, reporting and priority — not a different class of ride.",
      },
    ],
    faq: [
      {
        q: "Is there a minimum spend?",
        a: "No. Accounts are free to open; you're billed only for the rides you take.",
      },
      {
        q: "Can our assistants book for our executives?",
        a: "Yes. You authorize who can book, and they can arrange travel on anyone's behalf.",
      },
      {
        q: "How does billing work?",
        a: "One consolidated monthly invoice, with cost-center and project tags for your expense system. No card charged per ride.",
      },
    ],
    ctaLabel: "Open a corporate account",
    related: ["roadshows", "group-travel"],
  },
  {
    slug: "roadshows",
    name: "Roadshows",
    navLabel: "Roadshows",
    href: "/services/roadshows",
    summary:
      "Dedicated vehicles for investor days and analyst roadshows, routed around your meeting list and run to the minute.",
    title: "Roadshow Transportation in Boston — Investor & Analyst Tours | BET",
    description:
      "Dedicated chauffeured vehicles for investor days and analyst roadshows in Boston. Full-day service, routes built around your meeting list, run to the minute.",
    h1: "Roadshows, run to the minute",
    intro:
      "A roadshow lives or dies on timing. Six meetings, a lunch, a hard stop for a flight — and a schedule that only works if the car is already outside when you walk out. This is the service built for exactly that: a dedicated chauffeur who holds the plan while you run it.",
    sections: [
      {
        heading: "What's included",
        body: "A dedicated vehicle and chauffeur for the full day. A route built in advance around your meeting list and drive times between them. A chauffeur who stages ahead of each stop so the car is waiting, not summoned. Real-time adjustment when a meeting runs long. A Sprinter when the team travels together.",
      },
      {
        heading: "How it works",
        body: "Send us the itinerary — addresses, times, and any hard constraints like a flight. We build the day around it, sequence the stops with realistic Boston drive times, and assign a chauffeur who stays with you start to finish. When a 10:00 runs to 10:40, we absorb it and re-time the rest.",
      },
      {
        heading: "Who it's for",
        body: "Investor relations teams and bankers running management on tour. Analysts covering a day of company visits. Executives with a packed day of external meetings across the city and suburbs. Anyone whose day is a sequence of hard times that have to hold.",
      },
      {
        heading: "Rates",
        body: "From $135/hr for a dedicated SUV, $180/hr for a Sprinter, billed for the day. Full-day and multi-day rates available. Multiple vehicles coordinated as one booking when the group splits.",
      },
    ],
    faq: [
      {
        q: "Can one chauffeur cover the whole day?",
        a: "Yes — a dedicated chauffeur and vehicle stay with you start to finish, which is the point.",
      },
      {
        q: "What if a meeting runs over?",
        a: "We build slack into the route and re-time the rest of the day on the fly. Overruns are expected, not a crisis.",
      },
      {
        q: "Can you handle a team that splits up?",
        a: "Yes. We coordinate multiple vehicles under one booking and one point of contact.",
      },
    ],
    ctaLabel: "Plan a roadshow",
    related: ["corporate", "group-travel"],
  },
  {
    slug: "weddings",
    name: "Weddings",
    navLabel: "Weddings",
    href: "/services/weddings",
    summary:
      "Wedding transportation timed to your photographer and venue, with multiple pickups and guest shuttles.",
    title: "Wedding Limo & Car Service in Boston | BET",
    description:
      "Chauffeured wedding transportation in Boston — timed to your photographer and venue, multiple pickups coordinated, guest shuttles available. From $595.",
    h1: "Wedding transportation, timed to your day",
    intro:
      "A wedding day runs on a timeline that everyone follows and nothing respects. The car service should be the part you never have to think about — arriving early, waiting patiently, and knowing that the day tends to run late and planning for it anyway.",
    sections: [
      {
        heading: "What's included",
        body: "A late-model vehicle and a chauffeur who understands the day. Timing coordinated with your photographer and venue, not just a pickup slot. Multiple pickups arranged — the couple, the party, the parents. Guest shuttles available for the runs between hotel, ceremony and reception. A decorated vehicle on request. Generous wait time built in, because photos always run long.",
      },
      {
        heading: "How it works",
        body: "We start from your timeline, not ours — the getting-ready address, the first look, the ceremony, the reception, the exit. We map the vehicles and drivers to it, build in the buffer that wedding days always need, and confirm every detail the week before. On the day, the cars are early and the chauffeurs are patient.",
      },
      {
        heading: "What we handle",
        body: "The couple's car. Transport for the wedding party. Parents and grandparents who shouldn't be driving themselves. Guest shuttles that keep everyone moving between venues without a parking scramble. The end-of-night exit, and getting people back to their hotels safely.",
      },
      {
        heading: "Rates",
        body: "From $595 for a single vehicle with a standard wedding window. Multi-vehicle and shuttle packages quoted to your timeline. Sprinters and larger groups available. Everything quoted as one job, with one point of contact.",
      },
    ],
    faq: [
      {
        q: "Do you coordinate with our photographer and planner?",
        a: "Yes. We build the transport around your actual timeline and confirm it with whoever's running the day.",
      },
      {
        q: "Can you handle guest shuttles as well as the couple's car?",
        a: "Yes — hotel-to-venue shuttles are one of the most common parts of the booking.",
      },
      {
        q: "What if the day runs late?",
        a: "It always does, and we plan for it. Wait time is built into wedding bookings rather than metered against you.",
      },
    ],
    ctaLabel: "Plan your wedding transportation",
    related: ["event-travel", "group-travel"],
  },
  {
    slug: "event-travel",
    name: "Event travel",
    navLabel: "Event Travel",
    href: "/services/event-travel",
    summary:
      "Chauffeured trips to Fenway, TD Garden, Gillette and more — dropped at the gate, picked up where you are.",
    title: "Event & Game-Day Car Service in Boston — Fenway, Gillette, TD Garden | BET",
    description:
      "Chauffeured transportation to Boston events — Fenway, TD Garden, Gillette Stadium, the Xfinity Center. Dropped at the gate, picked up where you are. No parking.",
    h1: "Event travel, dropped at the gate",
    intro:
      "The worst part of a great night out is the getting there and back — the parking two-thirds of a mile away, the post-game crawl out of the lot, the surge pricing at exactly the wrong moment. A chauffeur turns all of that into someone else's problem. Dropped at the gate, picked up where you actually are.",
    sections: [
      {
        heading: "What's included",
        body: "Drop-off as close to the entrance as the venue allows. A return pickup point texted to you, so you're not hunting for the car in a crowd. Flat or fixed pricing agreed up front, no surge. Group vehicles for up to 12. A chauffeur who knows the venue's traffic pattern and the fastest way out.",
      },
      {
        heading: "How it works",
        body: "Tell us the event and where you're coming from. We get you there with time to spare, drop you at the gate, and stage for the return. When it's over, a text tells you exactly where to meet the car — away from the crush, not in it. No parking, no walk, no waiting in a rideshare scrum with everyone else who just left.",
      },
      {
        heading: "Where we run",
        body: "Fenway Park and the Kenmore gridlock around it. TD Garden. Gillette Stadium in Foxborough, 50 minutes out — a flat-rate round trip for the group. The Xfinity Center for summer shows. Symphony Hall, the Wang, the convention center. Any night where parking is the reason not to go.",
      },
      {
        heading: "Rates",
        body: "From $285 for a round trip, depending on venue and distance. Group vehicles up to 12. Gillette and other out-of-town venues quoted as flat round trips. All-in pricing — the return is part of the booking, not a gamble on availability.",
      },
    ],
    faq: [
      {
        q: "Will the car be there when the event ends?",
        a: "Yes. Your return pickup is part of the booking, and we text you the exact meeting point — no fighting for a rideshare afterward.",
      },
      {
        q: "Can you take a group?",
        a: "Up to 12 in a Sprinter, or multiple vehicles coordinated together.",
      },
      {
        q: "How does game day at Gillette work?",
        a: "Foxborough is about 50 minutes out. We quote a flat round trip so the group travels together and skips the parking entirely.",
      },
    ],
    ctaLabel: "Book event travel",
    related: ["weddings", "group-travel"],
  },
  {
    slug: "group-travel",
    name: "Group travel",
    navLabel: "Group Travel",
    href: "/services/group-travel",
    summary:
      "Mercedes Sprinter group transport — 12 seats, 10 checked bags, standing headroom, everyone in one vehicle.",
    title: "Group Transportation in Boston — Sprinter Van Service | BET",
    description:
      "Mercedes Sprinter group transportation in Boston. 12 seats, 10 checked bags, standing headroom. Airport runs, corporate groups and family travel in one vehicle.",
    h1: "Group travel, everyone in one vehicle",
    intro:
      "Three cars to the airport means three fares, three drivers, and a group that arrives in pieces. One Sprinter means everyone travels together, talks on the way, and lands as a unit. Twelve seats, ten checked bags, and standing headroom — the sensible answer whenever the group is bigger than a single SUV.",
    sections: [
      {
        heading: "What's included",
        body: "A Mercedes Sprinter with twelve seats and room for ten checked bags. A chauffeur who handles the loading and the route. Tolls, taxes and gratuity in the rate. Bottled water and chargers. Airport, venue and city runs, one vehicle instead of a convoy.",
      },
      {
        heading: "How it works",
        body: "Tell us the group size, the luggage, and the trip. We confirm the Sprinter fits it — and if the group is larger than twelve, we pair vehicles under one booking so everyone still moves together. From there it's a single pickup, a single drop, and a single fare instead of a fleet of separate cars.",
      },
      {
        heading: "What people use it for",
        body: "Corporate teams to and from Logan. Conference and convention groups moving between hotel and venue. Families traveling together for a wedding or a holiday. Sports teams and tour groups. Any time splitting the group across cars would cost more and coordinate worse than keeping it together.",
      },
      {
        heading: "Rates",
        body: "From $180/hr for the Sprinter, or a flat rate for airport and point-to-point runs. Three-hour minimum on hourly bookings. Larger groups quoted as multiple coordinated vehicles under one contact.",
      },
    ],
    faq: [
      {
        q: "How many people and bags fit?",
        a: "Twelve seats and ten checked bags in one Sprinter. Tell us the real count and we'll confirm the fit or pair vehicles.",
      },
      {
        q: "What if we're more than twelve?",
        a: "We coordinate multiple vehicles as one booking, so a larger group still travels and arrives together.",
      },
      {
        q: "Is it cheaper than several cars?",
        a: "Usually, yes — one vehicle and one chauffeur most often beats the total of three separate fares.",
      },
    ],
    ctaLabel: "Book group transportation",
    related: ["corporate", "event-travel"],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string): Service[] {
  const service = getService(slug);
  if (!service) return [];
  return service.related
    .map((relatedSlug) => getService(relatedSlug))
    .filter((related): related is Service => Boolean(related));
}
