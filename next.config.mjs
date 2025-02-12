/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
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
