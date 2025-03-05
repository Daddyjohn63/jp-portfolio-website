/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        // Production Strapi
        protocol: 'https',
        hostname:
          'my-personal-website-mywebsite-strapi-backend.fbhmyq.easypanel.host',
        port: '',
        pathname: '/uploads/**'
      },
      {
        // Local Strapi
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**'
      },
      {
        // Alternative local Strapi
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '/uploads/**'
      }
    ]
  }
};

export default nextConfig;
