import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  /* config options here */
  images: {
    domains: ["denzaqatar.com"], // ← replace with your image host
  },
};

export default nextConfig;
