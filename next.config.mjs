/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
    ],
    unoptimized: true // Required for static export
  },

  async redirects() {
    return [
      {
        source: '/website-design',
        destination: '/services',
        permanent: true
      },
      {
        source: '/about-me',
        destination: '/about',
        permanent: true
      },
      {
        source: '/hosting-and-maintenance',
        destination: '/services',
        permanent: true
      },
      {
        source: '/taking-a-break',
        destination: '/',
        permanent: true
      },
      {
        source: '/project/nhs-patient-triage',
        destination: '/portfolio',
        permanent: true
      },
      {
        source: '/project/penrose-restoration',
        destination: '/portfolio',
        permanent: true
      },
      {
        source: '/project/toms-kitchen',
        destination: '/portfolio',
        permanent: true
      },
      {
        source: '/contact-me',
        destination: '/contact',
        permanent: true
      },
      {
        source: '/website-development',
        destination: '/services',
        permanent: true
      },
      {
        source: '/project/solve-recruitment',
        destination: '/portfolio',
        permanent: true
      },
      {
        source: '/business-application-development',
        destination: '/services',
        permanent: true
      },
      {
        source: '/client-portal-login',
        destination: '/',
        permanent: true
      },
      {
        source: '/project/recruitment-website',
        destination: '/portfolio',
        permanent: true
      },
      {
        source: '/project/create-interior-design',
        destination: '/portfolio',
        permanent: true
      },
      {
        source: '/testimonials',
        destination: '/',
        permanent: true
      },
      {
        source: '/print-services',
        destination: '/',
        permanent: true
      },
      {
        source: '/redhill-reigate-pricing-website-design',
        destination: '/',
        permanent: true
      },
      {
        source: '/category/business-and-technology/page/2',
        destination: '/blog',
        permanent: true
      },
      {
        source: '/category/business-and-technology',
        destination: '/blog',
        permanent: true
      },
      {
        source: '/business-women-and-websites',
        destination: '/blog',
        permanent: true
      },
      {
        source: '/is-your-web-site-responsive',
        destination: '/blog',
        permanent: true
      },
      {
        source: '/creating-your-marketing-to-digital-strategy',
        destination: '/blog',
        permanent: true
      },
      {
        source: '/seo-success',
        destination: '/blog',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
