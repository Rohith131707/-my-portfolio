/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Remove basePath and assetPrefix for local development
  // These will be added only for production GitHub Pages
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/-my-portfolio',
    assetPrefix: '/-my-portfolio',
  }),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
