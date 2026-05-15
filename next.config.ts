import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  // Sanity Studio uses browser-only APIs
  serverExternalPackages: ["@sanity/vision"],
};

export default nextConfig;
