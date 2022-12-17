/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
};

module.exports = nextConfig;
