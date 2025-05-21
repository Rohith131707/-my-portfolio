import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove the 'output: export' for Vercel deployment
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
