/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
  distDir: 'out',
};

module.exports = nextConfig;
