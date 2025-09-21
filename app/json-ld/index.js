// Base business information
export const baseJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'LocalBusiness'],
  name: 'Web and Prosper',
  founder: {
    '@type': 'Person',
    name: 'John Paul',
    jobTitle: 'Freelance Web Developer'
  },
  description:
    'Sussex-based freelance web developer. Fast, SEO-friendly websites & apps built with React & Next.js. ☎ 07739 875445 for a free consultation.',
  url: 'https://webandprosper.co.uk',
  telephone: '+44 7739 875445',
  email: 'john@webandprosper.co.uk',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sussex',
    addressRegion: 'West Sussex',
    postalCode: 'RH17 6DZ',
    addressCountry: 'UK'
  },
  areaServed: [
    {
      '@type': 'AdministrativeArea',
      name: 'Sussex',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 50.9097,
        longitude: -0.1872
      }
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Surrey',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.3148,
        longitude: -0.56
      }
    },
    {
      '@type': 'AdministrativeArea',
      name: 'London',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.5074,
        longitude: -0.1278
      }
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Kent',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.2787,
        longitude: 0.5217
      }
    },
    // Major cities in your service areas
    {
      '@type': 'City',
      name: 'Brighton',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 50.8225,
        longitude: -0.1372
      }
    },
    {
      '@type': 'City',
      name: 'Haywards Heath',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.0068,
        longitude: -0.1065
      }
    },
    {
      '@type': 'City',
      name: 'Crawley',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.1167,
        longitude: -0.1833
      }
    },
    {
      '@type': 'City',
      name: 'Guildford',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.2362,
        longitude: -0.5704
      }
    },
    {
      '@type': 'City',
      name: 'Woking',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.319,
        longitude: -0.557
      }
    },
    {
      '@type': 'City',
      name: 'Central London',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.5074,
        longitude: -0.1278
      }
    },
    {
      '@type': 'City',
      name: 'Canterbury',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.28,
        longitude: 1.0789
      }
    },
    {
      '@type': 'City',
      name: 'Maidstone',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.272,
        longitude: 0.5292
      }
    }
  ],
  // Updated service radius to cover all regions
  serviceRadius: {
    '@type': 'Distance',
    value: 120, // Increased to cover all regions including Surrey
    unitCode: 'KMT'
  },
  priceRange: '£££',
  knowsAbout: [
    'React Development',
    'Next.js Development',
    'Web Development',
    'Frontend Development',
    'SEO Optimization'
  ],
  sameAs: [
    // Add your social media profiles here
    'https://github.com/Daddyjohn63',
    'https://linkedin.com/in/john-paul-7a493a193'
  ],

  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'React Development',
          description: 'Custom React applications and components'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Next.js Development',
          description: 'Full-stack Next.js websites and applications'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website Design & Development',
          description: 'Custom websites from design to deployment'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO Optimization',
          description: 'Technical SEO and performance optimization'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Application Development',
          description: 'Interactive web applications and dashboards'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-commerce Development',
          description: 'Online stores and e-commerce solutions'
        }
      }
    ]
  }
};

// Reusable JsonLd component
export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
