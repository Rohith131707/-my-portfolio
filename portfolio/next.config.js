/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the 'output: export' for Vercel deployment
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
