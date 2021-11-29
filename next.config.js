/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // 30 minutes
    minimumCacheTTL: 30 * 60,
  },
}
