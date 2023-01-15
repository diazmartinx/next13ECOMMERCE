/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i.dummyjson.com'],
  },
  reactStrictMode: false
}

module.exports = nextConfig
