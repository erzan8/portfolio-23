/** @type {import('next').NextConfig} */
const withPWA = require("@ducanh2912/next-pwa").default;

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  turbopack: {},
};

module.exports = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|webp|svg|gif|ico)$/i,
      handler: "NetworkFirst",
      options: {
        cacheName: "images",
        expiration: { maxEntries: 64, maxAgeSeconds: 7 * 24 * 60 * 60 },
      },
    },
  ],
})(nextConfig);
