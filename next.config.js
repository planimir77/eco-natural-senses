/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.shopify.com", "www.si-nature.com"],
  },
};

module.exports = nextConfig;
