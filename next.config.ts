import type { NextConfig } from "next";

// Old domain being retired. Any request that still arrives on this host (apex
// or www) is permanently redirected (308) to the matching path on the new
// canonical domain. Keep in sync with NEXT_PUBLIC_SITE_URL / lib/site.ts.
const OLD_DOMAIN = "bostonexclusivelivery.com";
const NEW_ORIGIN = "https://www.bostonexclusivetransportation.com";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // apex: bostonexclusivelivery.com/<path> -> new domain, same path
        source: "/:path*",
        has: [{ type: "host", value: OLD_DOMAIN }],
        destination: `${NEW_ORIGIN}/:path*`,
        permanent: true,
      },
      {
        // www.bostonexclusivelivery.com/<path> -> new domain, same path
        source: "/:path*",
        has: [{ type: "host", value: `www.${OLD_DOMAIN}` }],
        destination: `${NEW_ORIGIN}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
