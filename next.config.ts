import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: false, // Prevents browser from remembering scroll positions
  },
};

export default nextConfig;
