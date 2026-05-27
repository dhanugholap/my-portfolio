/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  reactStrictMode: false,
  allowedDevOrigins: ['192.168.0.235'],
  compress: true,

  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 64, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;