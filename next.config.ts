import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prestigeeventshouston.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/videos',
        destination: '/#see-the-space',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
