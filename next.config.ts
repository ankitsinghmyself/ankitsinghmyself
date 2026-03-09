import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
  images: {
    remotePatterns: [
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
