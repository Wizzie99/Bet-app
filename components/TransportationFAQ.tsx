'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import s from './transportation-faq.module.css';

type Faq = {
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    question: 'Do you provide car service to and from Logan Airport?',
    answer:
      'Yes. Boston Exclusive Transportation offers private car service to and from Boston Logan International Airport (BOS). Whether you’re leaving from home, arriving for a business trip, or traveling to a hotel, our airport transfers provide a reserved vehicle and professional chauffeur. Include your flight number when booking so we can track your arrival.',
  },
  {
    question: 'How much does a car service to Logan Airport cost?',
    answer:
      'Our Logan Airport transfers are quoted at a flat rate for your itinerary. Request a quote with your pickup address, destination, travel date, and vehicle requirements to receive pricing for your trip. Your quote includes taxes, tolls, and a 20% chauffeur gratuity.',
  },
  {
    question: 'Are taxes, tolls, and tips included in my quote?',
    answer:
      'Yes. Every quote includes taxes, tolls, and a 20% chauffeur gratuity, so you can see the total price before booking. You do not need to add another tip. Share your complete itinerary when requesting a quote so it reflects your planned transportation.',
  },
  {
    question: 'What happens if my flight to Boston is delayed?',
    answer:
      'Provide your flight number when booking your Logan Airport car service. We monitor your flight and adjust your pickup time to match changes in your arrival, including delays, at no additional charge for the flight-related pickup adjustment. If your airline switches you to a different flight, contact us with the updated details.',
  },
  {
    question: 'Which areas do you serve around Boston?',
    answer:
      'We provide private transportation in Boston and surrounding communities, including Back Bay, Cambridge, Brookline, and Newton. You can request airport transportation, local transfers, or chauffeur service for your itinerary. For pickup locations farther from Boston, contact us to confirm availability and receive a quote.',
  },
  {
    question: 'What vehicles are available for your Boston car service?',
    answer:
      'Our fleet includes the Volvo S90, Mercedes-Benz S-Class, Chevrolet Suburban, Cadillac Escalade, and Mercedes-Benz Sprinter. Choose a vehicle based on your preferred level of comfort, passenger count, and luggage needs. View our fleet or contact us for help selecting the right option for your trip.',
  },
];

function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: Faq;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const answerId = `home-faq-answer-${index}`;
  const buttonId = `home-faq-button-${index}`;

  return (
    <article className={s.item}>
      <span className={s.number} aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className={s.content}>
        <button
          className={s.trigger}
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={onToggle}
        >
          <span className={s.triggerLabel}>{faq.question}</span>
          <Image
            src={isOpen ? '/Images/faq/faq-remove.svg' : '/Images/faq/faq-add.svg'}
            alt=""
            width={24}
            height={24}
            unoptimized
            className={s.icon}
          />
        </button>
        <div className={s.answerReveal} data-open={isOpen}>
          <div>
            <p className={s.answer} id={answerId} role="region" aria-labelledby={buttonId}>
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TransportationFAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(() => new Set([0]));

  const toggleItem = (index: number) => {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section className={s.section} aria-labelledby="home-faq-title">
      <Image
        className={s.backgroundMark}
        src="/Images/faq/faq-background.svg"
        alt=""
        width={875}
        height={688}
        unoptimized
        aria-hidden={true}
      />

      <div className={s.layout}>
        <header className={s.intro}>
          <h2 id="home-faq-title" className={s.title}>
            Frequently asked
            <br />
            questions
          </h2>
          <aside className={s.contactCard}>
            <p className={s.contactPrompt}>Anything else? Feel free to contact us</p>
            <Link href="/contact" className={s.contactButton}>
              Contact us
            </Link>
          </aside>
        </header>

        <div className={s.list} aria-label="Frequently asked questions">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              index={index}
              isOpen={openItems.has(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
