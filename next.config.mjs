/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  compress: true,

  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 64, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;