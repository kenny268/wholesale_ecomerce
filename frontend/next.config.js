/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '4000',
          pathname: '/uploads/category/**',
        },
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '4000',
          pathname: '/uploads/product/**',
        },
      ],
    },
  }
