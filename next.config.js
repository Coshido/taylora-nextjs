/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/models",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
