import Link from "next/link";

import { FAQ_GROUPS, type FaqGroup } from "@/lib/faqs";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/services";

const DISPLAY_FONT = "'Lastik', 'Instrument Serif', Georgia, serif";
const BODY_FONT = "'Geist', sans-serif";
const MONO_FONT = "'Geist Mono', ui-monospace, Menlo, monospace";

type FAQSectionProps = {
  /** Override which groups render — lets a single topic drop onto another page. */
  groups?: FaqGroup[];
  /** Hide the topic shortcut chips (useful when embedding one group). */
  showShortcuts?: boolean;
};

/**
 * Server-rendered FAQ accordion. Every answer is present in the HTML even when
 * collapsed (native <details>/<summary>), so it's crawlable, keyboard
 * accessible, and works with screen readers and no JavaScript.
 */
export default function FAQSection({
  groups = FAQ_GROUPS,
  showShortcuts = true,
}: FAQSectionProps) {
  return (
    <div className="flex flex-col gap-12">
      {showShortcuts && groups.length > 1 && (
        <nav aria-label="FAQ topics" className="flex flex-wrap gap-2">
          {groups.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="inline-flex items-center rounded-full border px-4 py-2 text-[13px] transition-colors hover:bg-[#191a19] hover:text-[#eff0eb]"
              style={{
                fontFamily: MONO_FONT,
                letterSpacing: "-0.36px",
                textTransform: "uppercase",
                borderColor: "rgba(25,26,25,0.14)",
                color: "#595a59",
              }}
            >
              {group.label}
            </a>
          ))}
        </nav>
      )}

      {groups.map((group) => (
        <section
          key={group.id}
          id={group.id}
          aria-labelledby={`${group.id}-title`}
          className="flex flex-col gap-4 scroll-mt-28"
        >
          <h2
            id={`${group.id}-title`}
            className="text-[clamp(24px,3vw,32px)] leading-[1.2] tracking-[-0.64px]"
            style={{ fontFamily: DISPLAY_FONT, fontWeight: 400 }}
          >
            {group.title}
          </h2>

          <dl className="flex flex-col">
            {group.items.map((item) => (
              <details
                key={item.q}
                className="group border-t border-[rgba(25,26,25,0.14)] last:border-b"
              >
                <summary
                  className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[18px] leading-[26px] tracking-[-0.4px] marker:hidden [&::-webkit-details-marker]:hidden"
                  style={{ fontFamily: BODY_FONT, fontWeight: 500 }}
                >
                  <dt>{item.q}</dt>
                  <span
                    aria-hidden="true"
                    className="relative mt-1 h-3 w-3 shrink-0 text-[#595a59]"
                  >
                    <span className="absolute left-0 top-1/2 h-[1.5px] w-3 -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-0 h-3 w-[1.5px] -translate-x-1/2 bg-current transition-transform duration-200 group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                <dd
                  className="pb-5 pr-8 text-[16px] leading-[24px] text-[#595a59]"
                  style={{ fontFamily: BODY_FONT }}
                >
                  {item.a}
                </dd>
              </details>
            ))}
          </dl>
        </section>
      ))}

      <div
        className="flex flex-col gap-4 rounded-2xl p-8 sm:flex-row sm:items-center sm:justify-between"
        style={{ background: "#131618" }}
      >
        <div className="flex flex-col gap-1">
          <p
            className="text-[20px] leading-[26px] tracking-[-0.4px] text-white"
            style={{ fontFamily: DISPLAY_FONT, fontWeight: 400 }}
          >
            Still have a question?
          </p>
          <p
            className="text-[15px] leading-[22px] text-[#d9d9d9]"
            style={{ fontFamily: BODY_FONT }}
          >
            We answer 24/7 — call{" "}
            <a href={PHONE_HREF} className="underline underline-offset-2">
              {PHONE_DISPLAY}
            </a>{" "}
            or get a quote online.
          </p>
        </div>
        <Link
          href="/reserve"
          className="inline-flex w-fit shrink-0 items-center rounded-full bg-[#1c60ff] px-5 py-3 text-[15px] uppercase text-white"
          style={{ fontFamily: MONO_FONT }}
        >
          Get a quote
        </Link>
      </div>
    </div>
  );
}
