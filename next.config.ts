import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "cdn.sanity.io",
        protocol: "https",
      },
      {
        hostname: "via.placeholder.com",
        protocol: "https",
      },
      {
        hostname: "covers.openlibrary.org",
        protocol: "https",
      },
    ],
  }
};

export default nextConfig;
