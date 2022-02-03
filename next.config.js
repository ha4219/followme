/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
