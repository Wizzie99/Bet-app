import { ImageResponse } from "next/og";

import { SITE_NAME } from "@/lib/site";

// Default social-share image for any page that doesn't define its own.
export const alt = `${SITE_NAME} — Boston car service & Logan airport transfers`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0b0e10 0%, #1b2227 100%)",
          color: "#eff0eb",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#5688fd",
          }}
        >
          Boston Exclusive Transportation
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            <span>Boston car service &amp;</span>
            <span>Logan airport transfers</span>
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#a9b2b8", maxWidth: 900 }}>
            Late-model luxury fleet · vetted chauffeurs · flat Logan rates with
            flight tracking
          </div>
        </div>

        <div style={{ fontSize: 28, color: "#a9b2b8" }}>
          Quotes include tolls and gratuity.
        </div>
      </div>
    ),
    { ...size },
  );
}
