import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/services";
import s from "../privacy-policy/privacy.module.css";

const title = "Terms and Conditions";
const description =
  "Legal terms for booking chauffeured transportation with Boston Exclusive Transportation LLC, including pricing, cancellations, wait time, and passenger rules.";

const EMAIL = "info@bostonexclusivetransportation.com";
const SITE = "https://www.bostonexclusivetransportation.com";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms" },
  openGraph: { title, description, url: "/terms", type: "website" },
};

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function TermsPage() {
  return (
    <div className={s.page}>
      <article className={s.shell}>
        <header className={s.header}>
          <h1 className={s.h1}>TERMS AND CONDITIONS</h1>
          <p className={s.updated}>Last updated November 10, 2026</p>
        </header>

        <div className={s.prose}>
          <h2 className={s.h2}>AGREEMENT TO OUR LEGAL TERMS</h2>
          <p>
            We are <strong>Boston Exclusive Transportation LLC</strong> (&quot;
            <strong>Company</strong>,&quot; &quot;<strong>we</strong>,&quot; &quot;<strong>us</strong>
            ,&quot; &quot;<strong>our</strong>&quot;), a company registered in Massachusetts, United
            States, at 15 Quarry Ln, Malden, MA 02148.
          </p>
          <p>
            We operate the website <Ext href={SITE}>{SITE}</Ext> (the &quot;<strong>Site</strong>
            &quot;), as well as our chauffeured transportation and any other related products and
            services that refer or link to these legal terms (the &quot;<strong>Legal Terms</strong>
            &quot;) (collectively, the &quot;<strong>Services</strong>&quot;).
          </p>
          <p>
            Boston Exclusive Transportation provides private luxury transportation in Boston and the
            surrounding areas. We offer airport transfers, corporate travel, hourly chauffeur
            services, and transportation for special events, with a focus on comfort, reliability,
            and professional service.
          </p>
          <p>
            You can contact us by phone at <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>, by email at{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>, or by mail to 15 Quarry Ln, Malden, MA 02148,
            United States.
          </p>
          <p>
            These Legal Terms constitute a legally binding agreement made between you, whether
            personally or on behalf of an entity (&quot;<strong>you</strong>&quot;), and Boston
            Exclusive Transportation LLC, concerning your access to and use of the Services. By
            accessing the Services or booking a ride, you agree that you have read, understood, and
            agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE
            LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
            DISCONTINUE USE IMMEDIATELY.
          </p>
          <p>
            We may update these Legal Terms from time to time. We will post the updated version on
            the Site with a new &quot;Last updated&quot; date and, for material changes, notify you
            by email. Changes become effective when posted. By continuing to use the Services after
            the effective date of any changes, you agree to be bound by the modified terms. Bookings
            already confirmed will be governed by the terms in effect at the time of booking.
          </p>
          <p>
            You must be at least 18 years old to create an account or book the Services. Passengers
            under 18 may ride when the booking is made by a parent, guardian, or other responsible
            adult who accepts these Legal Terms on their behalf.
          </p>
          <p>We recommend that you print a copy of these Legal Terms for your records.</p>

          <h2 id="toc" className={s.h2}>
            TABLE OF CONTENTS
          </h2>
          <div className={s.toc}>
            <a href="#services">1. OUR SERVICES</a>
            <a href="#bookings">2. BOOKINGS AND RESERVATIONS</a>
            <a href="#purchases">3. PRICING, PURCHASES, AND PAYMENT</a>
            <a href="#cancellation">4. CANCELLATION AND REFUND POLICY</a>
            <a href="#wait">5. WAIT TIME AND AIRPORT PICKUPS</a>
            <a href="#conduct">6. PASSENGER CONDUCT AND VEHICLE RULES</a>
            <a href="#delays">7. DELAYS AND SERVICE CHANGES</a>
            <a href="#ip">8. INTELLECTUAL PROPERTY RIGHTS</a>
            <a href="#userreps">9. USER REPRESENTATIONS</a>
            <a href="#userreg">10. USER REGISTRATION</a>
            <a href="#prohibited">11. PROHIBITED ACTIVITIES</a>
            <a href="#ugc">12. USER CONTRIBUTIONS AND FEEDBACK</a>
            <a href="#thirdparty">13. THIRD-PARTY WEBSITES AND CONTENT</a>
            <a href="#sitemanage">14. SERVICES MANAGEMENT</a>
            <a href="#privacy">15. PRIVACY POLICY</a>
            <a href="#terms">16. TERM AND TERMINATION</a>
            <a href="#modifications">17. MODIFICATIONS AND INTERRUPTIONS</a>
            <a href="#law">18. GOVERNING LAW</a>
            <a href="#disputes">19. DISPUTE RESOLUTION</a>
            <a href="#corrections">20. CORRECTIONS</a>
            <a href="#disclaimer">21. DISCLAIMER</a>
            <a href="#liability">22. LIMITATIONS OF LIABILITY</a>
            <a href="#indemnification">23. INDEMNIFICATION</a>
            <a href="#userdata">24. USER DATA</a>
            <a href="#electronic">25. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</a>
            <a href="#sms">26. SMS TEXT MESSAGING</a>
            <a href="#california">27. CALIFORNIA USERS AND RESIDENTS</a>
            <a href="#misc">28. MISCELLANEOUS</a>
            <a href="#contact">29. CONTACT US</a>
          </div>

          <h2 id="services" className={s.h2}>
            1. OUR SERVICES
          </h2>
          <p>
            We provide chauffeured transportation in Boston and the surrounding areas, including
            airport transfers, corporate travel, hourly service, and special events. All rides are
            subject to vehicle and chauffeur availability.
          </p>
          <p>
            The information provided when using the Services is not intended for distribution to or
            use by any person or entity in any jurisdiction or country where such distribution or
            use would be contrary to law or regulation. Those who access the Services from other
            locations do so on their own initiative and are responsible for compliance with local
            laws.
          </p>

          <h2 id="bookings" className={s.h2}>
            2. BOOKINGS AND RESERVATIONS
          </h2>
          <ul className={s.list}>
            <li>
              Bookings may be made through the Site, by phone, or by email. A booking is confirmed
              only when you receive a confirmation from us.
            </li>
            <li>
              You are responsible for providing accurate booking details, including pickup and
              drop-off addresses, date and time, number of passengers, luggage, flight information,
              and a mobile number where the passenger can be reached.
            </li>
            <li>
              Bookings may be made on behalf of another person (for example, by an assistant, travel
              agent, or family member). The person who books is responsible for payment and for
              making sure the passengers are aware of these Legal Terms.
            </li>
            <li>
              The number of passengers and amount of luggage may not exceed the capacity of the
              vehicle booked. If more passengers or luggage arrive than were booked, we may require
              an upgraded vehicle at an additional cost or decline to carry the excess.
            </li>
            <li>
              Child safety seats are available on request and must be requested at the time of
              booking; an additional fee may apply. Children must be secured as required by
              Massachusetts law.
            </li>
            <li>
              Changes to a booking (time, route, stops, or vehicle) are subject to availability and
              may change the price. Additional stops or route changes requested during the ride will
              be charged at our current rates.
            </li>
          </ul>

          <h2 id="purchases" className={s.h2}>
            3. PRICING, PURCHASES, AND PAYMENT
          </h2>
          <p>We accept the following forms of payment:</p>
          <ul className={s.list}>
            <li>Credit and debit cards (Visa, Mastercard, American Express, Discover)</li>
            <li>PayPal</li>
            <li>Cash</li>
            <li>Invoicing for approved corporate accounts</li>
          </ul>
          <p>
            Prices are quoted in US dollars and are based on the details you provide. Your quote
            will show the base fare and applicable charges, which may include tolls, parking and
            airport fees, fuel surcharges, and taxes.
          </p>
          <p>
            <strong>Gratuity.</strong> A standard gratuity of 20% is automatically added to every
            booking and is shown in your quote and receipt.
          </p>
          <p>
            A valid payment card may be required to secure a booking, including bookings to be paid
            in cash or by invoice. By booking, you authorize us to charge your payment method for
            the total fare and for any additional charges described in these Legal Terms, such as
            extra wait time, additional stops, cancellation fees, and cleaning or damage fees.
            Corporate invoices are due according to the terms of the account agreement.
          </p>
          <p>
            You agree to provide current, complete, and accurate payment and account information and
            to keep it up to date. We reserve the right to correct any errors in pricing, even after
            payment has been requested or received, and to refuse or cancel any booking at our
            discretion, in which case any amount paid for that booking will be refunded.
          </p>

          <h2 id="cancellation" className={s.h2}>
            4. CANCELLATION AND REFUND POLICY
          </h2>
          <ul className={s.list}>
            <li>
              <strong>24 hours or more before pickup:</strong> you may cancel for a full refund.
            </li>
            <li>
              <strong>Less than 24 hours before pickup:</strong> the full fare will be charged.
            </li>
            <li>
              <strong>No-shows:</strong> if the passenger does not show up and cannot be reached
              after the free wait time described in Section 5 has ended, the ride is treated as a
              no-show and the full fare will be charged.
            </li>
            <li>
              <strong>If we cancel:</strong> if we cancel your booking or cannot provide the ride,
              you will receive a full refund of any amount paid for that ride.
            </li>
          </ul>
          <p>
            Cancellations must be made by phone or email and are effective when we confirm them.
            Refunds are issued to the original payment method and may take several business days to
            appear.
          </p>

          <h2 id="wait" className={s.h2}>
            5. WAIT TIME AND AIRPORT PICKUPS
          </h2>
          <ul className={s.list}>
            <li>
              <strong>Regular pickups:</strong> the first 15 minutes after the scheduled pickup time
              are free. After that, waiting time is billed in increments at our current hourly rate.
            </li>
            <li>
              <strong>Airport pickups:</strong> we track your flight. The first 45 minutes after the
              flight actually lands are free, and flight delays do not count against this time.
              After that, waiting time is billed at our current hourly rate.
            </li>
            <li>
              Hourly bookings are billed for the full time reserved, and any time over the
              reservation is billed at our current hourly rate.
            </li>
          </ul>

          <h2 id="conduct" className={s.h2}>
            6. PASSENGER CONDUCT AND VEHICLE RULES
          </h2>
          <p>For the safety and comfort of all passengers and our chauffeurs:</p>
          <ul className={s.list}>
            <li>
              <strong>No alcohol.</strong> Alcohol, including open containers, is not permitted in
              any vehicle.
            </li>
            <li>
              <strong>No smoking or vaping</strong> of any kind is permitted in any vehicle.
            </li>
            <li>No illegal drugs or illegal activity of any kind.</li>
            <li>Passengers must wear seat belts and follow the chauffeur&apos;s reasonable safety instructions.</li>
            <li>
              Passengers may not distract the chauffeur, interfere with the operation of the
              vehicle, or behave in a way that is abusive, threatening, or unsafe.
            </li>
            <li>
              The chauffeur may refuse service or end a ride if a passenger violates these rules. In
              that case, no refund will be given for the ride.
            </li>
          </ul>
          <p>
            <strong>Cleaning and damage.</strong> If a passenger soils the vehicle (for example,
            spills or vomit) or damages it, a cleaning fee of up to $250 will be charged, plus the
            actual cost of any repairs. The person who booked the ride is responsible for these
            charges.
          </p>
          <p>
            <strong>Personal belongings.</strong> Passengers are responsible for their belongings.
            We will make reasonable efforts to return items left in a vehicle, but we are not
            responsible for lost or forgotten property.
          </p>

          <h2 id="delays" className={s.h2}>
            7. DELAYS AND SERVICE CHANGES
          </h2>
          <p>
            We plan every ride carefully, but we are not responsible for delays caused by
            circumstances outside our reasonable control, such as traffic, road closures, weather,
            accidents, or flight changes. Please allow extra travel time for flights and
            time-sensitive events.
          </p>
          <p>
            If a vehicle becomes unavailable, we may provide a comparable or upgraded vehicle at no
            additional cost. If we are unable to provide the ride, you will receive a full refund as
            described in Section 4.
          </p>

          <h2 id="ip" className={s.h2}>
            8. INTELLECTUAL PROPERTY RIGHTS
          </h2>
          <h3 className={s.h3}>Our intellectual property</h3>
          <p>
            We are the owner or the licensee of all intellectual property rights in our Services,
            including all source code, databases, functionality, software, website designs, audio,
            video, text, photographs, and graphics (collectively, the &quot;Content&quot;), as well
            as the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;).
            Our Content and Marks are protected by copyright and trademark laws and treaties in the
            United States and around the world.
          </p>
          <p>
            The Content and Marks are provided &quot;AS IS&quot; for your personal, non-commercial
            use or internal business purpose only.
          </p>
          <h3 className={s.h3}>Your use of our Services</h3>
          <p>
            Subject to your compliance with these Legal Terms, including &quot;
            <a href="#prohibited">PROHIBITED ACTIVITIES</a>&quot; below, we grant you a
            non-exclusive, non-transferable, revocable license to access the Services and to
            download or print a copy of any portion of the Content to which you have properly gained
            access, solely for your personal, non-commercial use or internal business purpose.
          </p>
          <p>
            Except as set out in this section or elsewhere in our Legal Terms, no part of the
            Services and no Content or Marks may be copied, reproduced, aggregated, republished,
            uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed,
            sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our
            express prior written permission. Requests may be sent to{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
          <p>
            We reserve all rights not expressly granted to you in and to the Services, Content, and
            Marks. Any breach of these Intellectual Property Rights will constitute a material
            breach of our Legal Terms, and your right to use our Services will terminate
            immediately.
          </p>

          <h2 id="userreps" className={s.h2}>
            9. USER REPRESENTATIONS
          </h2>
          <p>
            By using the Services, you represent and warrant that: (1) all registration and booking
            information you submit will be true, accurate, current, and complete; (2) you will
            maintain the accuracy of such information and promptly update it as necessary; (3) you
            have the legal capacity and agree to comply with these Legal Terms; (4) you are at least
            18 years old, or you are a minor riding under a booking made by a parent, guardian, or
            responsible adult; (5) you will not access the Services through automated or non-human
            means, whether through a bot, script, or otherwise; (6) you will not use the Services
            for any illegal or unauthorized purpose; and (7) your use of the Services will not
            violate any applicable law or regulation.
          </p>
          <p>
            If you provide any information that is untrue, inaccurate, not current, or incomplete, we
            have the right to suspend or terminate your account and refuse any and all current or
            future use of the Services.
          </p>

          <h2 id="userreg" className={s.h2}>
            10. USER REGISTRATION
          </h2>
          <p>
            You may be required to register to use certain parts of the Services. You agree to keep
            your password confidential and will be responsible for all use of your account and
            password. We reserve the right to remove, reclaim, or change a username you select if we
            determine, in our sole discretion, that it is inappropriate, obscene, or otherwise
            objectionable.
          </p>

          <h2 id="prohibited" className={s.h2}>
            11. PROHIBITED ACTIVITIES
          </h2>
          <p>
            You may not access or use the Services for any purpose other than that for which we make
            them available. As a user of the Services, you agree not to:
          </p>
          <ul className={s.list}>
            <li>
              Systematically retrieve data or other content from the Services to create or compile a
              collection, database, or directory without written permission from us.
            </li>
            <li>
              Trick, defraud, or mislead us and other users, especially in any attempt to learn
              sensitive account information such as user passwords.
            </li>
            <li>
              Make fraudulent bookings, use payment methods you are not authorized to use, or file
              false chargebacks.
            </li>
            <li>Circumvent, disable, or otherwise interfere with security-related features of the Services.</li>
            <li>Use any information obtained from the Services to harass, abuse, or harm another person.</li>
            <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
            <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
            <li>Engage in unauthorized framing of or linking to the Services.</li>
            <li>
              Upload or transmit viruses, Trojan horses, or other material, including spamming, that
              interferes with any party&apos;s use of the Services or with their operation or
              maintenance.
            </li>
            <li>
              Engage in any automated use of the system, or use any data mining, robots, scrapers,
              or similar data gathering and extraction tools.
            </li>
            <li>Delete the copyright or other proprietary rights notice from any Content.</li>
            <li>Attempt to impersonate another user or person or use the username of another user.</li>
            <li>
              Upload or transmit any material that acts as a passive or active information collection
              mechanism, including spyware, web bugs, or similar devices.
            </li>
            <li>
              Interfere with, disrupt, or create an undue burden on the Services or the networks or
              services connected to them.
            </li>
            <li>Harass, annoy, intimidate, or threaten any of our employees, chauffeurs, or agents.</li>
            <li>Attempt to bypass any measures designed to prevent or restrict access to the Services.</li>
            <li>
              Copy, adapt, decompile, disassemble, or reverse engineer any of the software comprising
              the Services, except as permitted by applicable law.
            </li>
            <li>
              Collect usernames or email addresses of users for the purpose of sending unsolicited
              email, or create user accounts by automated means or under false pretenses.
            </li>
            <li>
              Use the Services or the Content to compete with us or resell our transportation
              services without our written agreement.
            </li>
            <li>Use the Services to advertise or offer to sell goods and services.</li>
            <li>Sell or otherwise transfer your account.</li>
          </ul>

          <h2 id="ugc" className={s.h2}>
            12. USER CONTRIBUTIONS AND FEEDBACK
          </h2>
          <p>
            The Services do not currently allow users to post public content. If you send us
            questions, comments, reviews, suggestions, ideas, or other feedback about the Services
            (&quot;Submissions&quot;), you agree that we may use and share them for any lawful
            purpose without compensation to you. Before we publish any Submission as a testimonial
            with your name, we will ask for your permission.
          </p>
          <p>
            You are responsible for your Submissions and confirm that they are not illegal,
            harassing, defamatory, obscene, threatening, false, or misleading, and that they do not
            infringe anyone else&apos;s rights.
          </p>

          <h2 id="thirdparty" className={s.h2}>
            13. THIRD-PARTY WEBSITES AND CONTENT
          </h2>
          <p>
            The Services may contain links to other websites (&quot;Third-Party Websites&quot;) and
            content belonging to or originating from third parties (&quot;Third-Party Content&quot;),
            including our booking and payment provider. We do not investigate, monitor, or check
            Third-Party Websites or Third-Party Content for accuracy, appropriateness, or
            completeness, and we are not responsible for them, including their content, privacy
            practices, or policies. Linking to them does not imply our approval or endorsement. If
            you leave the Services to use a Third-Party Website, you do so at your own risk, and
            these Legal Terms no longer govern. You should review the terms and policies of any
            website you visit.
          </p>

          <h2 id="sitemanage" className={s.h2}>
            14. SERVICES MANAGEMENT
          </h2>
          <p>
            We reserve the right, but not the obligation, to: (1) monitor the Services for violations
            of these Legal Terms; (2) take appropriate legal action against anyone who violates the
            law or these Legal Terms, including reporting them to law enforcement; (3) refuse,
            restrict access to, or disable any of your Submissions; (4) remove files and content that
            are excessive in size or burdensome to our systems; and (5) otherwise manage the Services
            in a manner designed to protect our rights and property and to facilitate their proper
            functioning.
          </p>

          <h2 id="privacy" className={s.h2}>
            15. PRIVACY POLICY
          </h2>
          <p>
            We care about data privacy and security. Please review our{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>, which is incorporated into these
            Legal Terms and explains how we collect, use, and share your information. The Services
            are hosted in the United States. If you access the Services from another region with
            different data protection laws, you consent to having your data transferred to and
            processed in the United States.
          </p>

          <h2 id="terms" className={s.h2}>
            16. TERM AND TERMINATION
          </h2>
          <p>
            These Legal Terms remain in full force and effect while you use the Services. WITHOUT
            LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE
            DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES TO
            ANY PERSON FOR ANY LAWFUL REASON, INCLUDING FOR BREACH OF THESE LEGAL TERMS OR OF ANY
            APPLICABLE LAW. WE MAY TERMINATE YOUR USE OF THE SERVICES OR DELETE YOUR ACCOUNT AT ANY
            TIME. If we terminate your account, any prepaid amounts for future rides that we will not
            provide will be refunded.
          </p>
          <p>
            If we terminate or suspend your account, you are prohibited from creating a new account
            under your name, a fake or borrowed name, or the name of any third party. We also reserve
            the right to take appropriate legal action, including pursuing civil, criminal, and
            injunctive redress.
          </p>

          <h2 id="modifications" className={s.h2}>
            17. MODIFICATIONS AND INTERRUPTIONS
          </h2>
          <p>
            We reserve the right to change, modify, or remove the contents of the Site at any time
            without notice. We cannot guarantee the Site will be available at all times. We may
            experience hardware, software, or other problems or need to perform maintenance,
            resulting in interruptions, delays, or errors. We will not be liable for any loss or
            inconvenience caused by your inability to access or use the Site during any downtime. If
            the Site is unavailable, you can book or manage rides by phone or email.
          </p>

          <h2 id="law" className={s.h2}>
            18. GOVERNING LAW
          </h2>
          <p>
            These Legal Terms and your use of the Services are governed by and construed in
            accordance with the laws of the Commonwealth of Massachusetts, without regard to its
            conflict of law principles.
          </p>

          <h2 id="disputes" className={s.h2}>
            19. DISPUTE RESOLUTION
          </h2>
          <p>
            If you have a concern about a ride or a charge, please contact us first so we can try to
            resolve it. Any legal action brought by either you or us (each a &quot;Party,&quot;
            together the &quot;Parties&quot;) shall be commenced in the state and federal courts
            located in Massachusetts, and the Parties consent to the jurisdiction of and venue in
            such courts. To the extent permitted by law, any claim related to the Services must be
            brought within one (1) year after the cause of action arose.
          </p>

          <h2 id="corrections" className={s.h2}>
            20. CORRECTIONS
          </h2>
          <p>
            There may be information on the Services that contains typographical errors,
            inaccuracies, or omissions, including descriptions, pricing, and availability. We reserve
            the right to correct any errors, inaccuracies, or omissions and to change or update
            information at any time, without prior notice.
          </p>

          <h2 id="disclaimer" className={s.h2}>
            21. DISCLAIMER
          </h2>
          <p>
            THE SITE AND ITS CONTENT ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. TO THE FULLEST
            EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION
            WITH THE SITE, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES ABOUT THE ACCURACY OR
            COMPLETENESS OF THE SITE&apos;S CONTENT OR OF ANY LINKED WEBSITES, AND WE ARE NOT
            RESPONSIBLE FOR (1) ERRORS OR INACCURACIES IN CONTENT, (2) UNAUTHORIZED ACCESS TO OUR
            SERVERS OR DATA, (3) INTERRUPTIONS OF THE SITE, OR (4) VIRUSES OR SIMILAR CODE
            TRANSMITTED BY ANY THIRD PARTY. WE WILL PROVIDE OUR TRANSPORTATION SERVICES WITH
            REASONABLE CARE AND SKILL. NOTHING IN THESE LEGAL TERMS EXCLUDES OR LIMITS ANY RIGHTS YOU
            HAVE UNDER LAW THAT CANNOT BE EXCLUDED OR LIMITED.
          </p>

          <h2 id="liability" className={s.h2}>
            22. LIMITATIONS OF LIABILITY
          </h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES,
            OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY,
            INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, MISSED
            FLIGHTS OR EVENTS, OR LOSS OF DATA, ARISING FROM YOUR USE OF THE SERVICES. EXCEPT FOR
            CLAIMS FOR PERSONAL INJURY OR PROPERTY DAMAGE CAUSED BY OUR NEGLIGENCE OR WILLFUL
            MISCONDUCT, OUR TOTAL LIABILITY TO YOU FOR ANY CAUSE WILL BE LIMITED TO THE AMOUNT YOU
            PAID US FOR THE RIDE GIVING RISE TO THE CLAIM. CERTAIN STATE LAWS DO NOT ALLOW
            LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF
            THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU, AND
            YOU MAY HAVE ADDITIONAL RIGHTS.
          </p>

          <h2 id="indemnification" className={s.h2}>
            23. INDEMNIFICATION
          </h2>
          <p>
            You agree to defend, indemnify, and hold us harmless, including our subsidiaries,
            affiliates, officers, agents, partners, chauffeurs, and employees, from and against any
            loss, damage, liability, claim, or demand, including reasonable attorneys&apos; fees,
            made by any third party due to or arising out of: (1) your breach of these Legal Terms;
            (2) your breach of your representations and warranties in these Legal Terms; (3) your
            violation of the rights of a third party; or (4) any harmful act by you or your
            passengers toward any other person, our chauffeurs, or our vehicles. We will use
            reasonable efforts to notify you of any such claim upon becoming aware of it.
          </p>

          <h2 id="userdata" className={s.h2}>
            24. USER DATA
          </h2>
          <p>
            We will maintain certain data that you transmit to the Services for the purpose of
            managing your bookings and the performance of the Services. Although we perform regular
            routine backups of data, you are responsible for keeping your own records of information
            you send us. To the extent permitted by law, we shall have no liability to you for any
            loss or corruption of such data.
          </p>

          <h2 id="electronic" className={s.h2}>
            25. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
          </h2>
          <p>
            Visiting the Services, sending us emails, and completing online forms constitute
            electronic communications. You consent to receive electronic communications, and you
            agree that all agreements, notices, disclosures, and other communications we provide to
            you electronically, via email and on the Services, satisfy any legal requirement that
            such communication be in writing. YOU AGREE TO THE USE OF ELECTRONIC SIGNATURES,
            CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES,
            AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES.
          </p>

          <h2 id="sms" className={s.h2}>
            26. SMS TEXT MESSAGING
          </h2>
          <h3 className={s.h3}>Program Description</h3>
          <p>
            By opting in to Boston Exclusive Transportation&apos;s text messaging program, you
            expressly consent to receive text messages (SMS) at the mobile number you provide.
            Messages may include booking confirmations, ride reminders, chauffeur and arrival
            updates, account alerts, and, if you opt in to marketing, special offers and promotions.
            Message frequency varies. Consent to receive marketing messages is not a condition of any
            purchase. Our messages may be sent using our booking provider&apos;s platform on our
            behalf.
          </p>
          <h3 className={s.h3}>Opting Out</h3>
          <p>
            You can stop receiving SMS messages at any time by replying &quot;STOP.&quot; You will
            receive one message confirming your opt-out, and after that you will no longer receive
            SMS messages from us. To join again, sign up the same way you did the first time.
          </p>
          <h3 className={s.h3}>Message and Data Rates</h3>
          <p>
            Message and data rates may apply to any SMS messages sent or received. Rates depend on
            your carrier and mobile plan. Carriers are not liable for delayed or undelivered
            messages.
          </p>
          <h3 className={s.h3}>Support</h3>
          <p>
            For help, reply &quot;HELP,&quot; email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>, or
            call <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>.
          </p>
          <h3 className={s.h3}>Privacy</h3>
          <p>
            No mobile information will be shared with third parties or affiliates for marketing or
            promotional purposes. See our <Link href="/privacy-policy">Privacy Policy</Link> for more
            information.
          </p>

          <h2 id="california" className={s.h2}>
            27. CALIFORNIA USERS AND RESIDENTS
          </h2>
          <p>
            If any complaint with us is not satisfactorily resolved, you can contact the Complaint
            Assistance Unit of the Division of Consumer Services of the California Department of
            Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento,
            California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
          </p>

          <h2 id="misc" className={s.h2}>
            28. MISCELLANEOUS
          </h2>
          <p>
            These Legal Terms and any policies or operating rules posted by us on the Services
            constitute the entire agreement and understanding between you and us. Our failure to
            exercise or enforce any right or provision of these Legal Terms shall not operate as a
            waiver of that right or provision. We may assign any or all of our rights and obligations
            to others at any time. We shall not be responsible for any loss, damage, delay, or
            failure to act caused by any cause beyond our reasonable control. If any provision of
            these Legal Terms is determined to be unlawful, void, or unenforceable, that provision is
            deemed severable and does not affect the validity and enforceability of the remaining
            provisions. No joint venture, partnership, employment, or agency relationship is created
            between you and us by these Legal Terms. You waive any defenses you may have based on the
            electronic form of these Legal Terms and the lack of signing by the parties.
          </p>

          <h2 id="contact" className={s.h2}>
            29. CONTACT US
          </h2>
          <p>
            To resolve a complaint regarding the Services or to receive further information, please
            contact us at:
          </p>
          <address className={s.address}>
            <strong>Boston Exclusive Transportation LLC</strong>
            <br />
            15 Quarry Ln
            <br />
            Malden, MA 02148
            <br />
            United States
            <br />
            Phone: <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
            <br />
            Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </address>
        </div>
      </article>
    </div>
  );
}
