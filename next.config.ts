import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prestigeeventshouston.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'video.squarespace-cdn.com',
        pathname: '/content/v1/**',
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
