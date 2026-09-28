import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/pm-surya-ghar", destination: "/pm-surya-ghar-yojana", permanent: true },
      { source: "/solar-subsidy", destination: "/solar-subsidy-madhya-pradesh", permanent: true },
      { source: "/solar-subsidy-in-madhya-pradesh", destination: "/solar-subsidy-madhya-pradesh", permanent: true },
      { source: "/about-sonil-solar", destination: "/about", permanent: true },
      { source: "/case-studies", destination: "/projects", permanent: true },
      { source: "/case-studies/:slug", destination: "/projects", permanent: true },
      { source: "/solar-amc", destination: "/solar-maintenance", permanent: true },
      { source: "/solar-projects", destination: "/projects", permanent: true },
      { source: "/resources", destination: "/blog", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/solar-company-in-:city", destination: "/geo/:city/company" },
      { source: "/rooftop-solar-in-:city", destination: "/geo/:city/rooftop" },
      { source: "/solar-installation-in-:city", destination: "/geo/:city/installation" },
      { source: "/residential-solar-in-:city", destination: "/geo/:city/residential" },
      { source: "/commercial-solar-in-:city", destination: "/geo/:city/commercial" },
      { source: "/industrial-solar-in-:city", destination: "/geo/:city/industrial" },
      { source: "/solar-panel-price-in-:city", destination: "/geo/:city/price" },
      { source: "/solar-subsidy-in-:city", destination: "/geo/:city/subsidy" },
      { source: "/3kw-solar-system-in-:city", destination: "/geo/:city/3kw" },
      { source: "/5kw-solar-system-in-:city", destination: "/geo/:city/5kw" },
      { source: "/10kw-solar-system-in-:city", destination: "/geo/:city/10kw" },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
