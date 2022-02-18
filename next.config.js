/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_S3URLCONFIG],
  },
  async rewrites() {
    return [
      {
        destination: process.env.NEXT_PUBLIC_DESTINATION_URL,
        source: process.env.NEXT_PUBLIC_SOURCE_PATH,
      },
    ];
  },
};

module.exports = nextConfig;
