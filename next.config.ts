import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['qrcoder.ru'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // remotePatterns: [
  // {
  //   protocol: 'https',
  //   hostname: '**.example.com',
  //   pathname: '/**',
  // },  
// ],
 
};

export default nextConfig;
