// Base business information
export const baseJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'LocalBusiness'],
  name: 'Web and Prosper',
  founder: {
    '@type': 'Person',
    name: 'John Paul',
    jobTitle: 'Freelance Web Developer & Full-Stack Engineer',
    description:
      'Sussex-based freelance web developer with 5+ years in web development and extensive IT project leadership experience at IBM, Rolls-Royce, and Ericsson. Specializes in React, Next.js, Node.js, and creating scalable business solutions.',
    worksFor: {
      '@type': 'Organization',
      name: 'Web and Prosper'
    },
    hasCredential: [
      'Full-Stack Web Development',
      'React Specialist',
      'Next.js Expert',
      'Node.js Development',
      'TypeScript',
      'PostgreSQL',
      'AI Integration',
      'Project Management',
      'Business Strategy'
    ],
    yearOfExperience: '5+ years in web development',
    previousWorkExperience: [
      'IBM - IT Project Leadership',
      'Rolls-Royce - IT Project Leadership',
      'Ericsson - IT Project Leadership'
    ],
    expertise: [
      'Frontend Development (React, Next.js, TypeScript)',
      'Backend Development (Node.js, Express, Hono)',
      'Database Design (PostgreSQL, SQL)',
      'CMS Development (Strapi, WordPress)',
      'E-commerce Solutions',
      'Performance Optimization',
      'SEO Technical Implementation',
      'AI Integration',
      'DevOps (Docker, VPS Management)',
      'Authentication Systems (Lucia Auth, Clerk, NextAuth.js)',
      'Testing (Cypress)',
      'UI/UX Design (Figma)',
      'Business Consultation',
      'Project Management (Agile, Scrum)'
    ],
    serviceArea: 'Sussex, Surrey, London, Kent and surrounding areas',
    workingHours: 'Monday-Friday, 9:00-17:00',
    contactPreference: 'Phone consultation followed by email',
    specialization:
      'Creating fast, SEO-friendly websites and custom business applications for startups, agencies, and established businesses'
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
    'Full-Stack Web Development',
    'Frontend Development',
    'Backend Development',
    'Node.js Development',
    'TypeScript Development',
    'JavaScript Development',
    'SEO Optimization',
    'API Development',
    'Database Design',
    'PostgreSQL',
    'Strapi CMS',
    'WordPress Development',
    'E-commerce Development',
    'Custom Web Applications',
    'Performance Optimization',
    'UI/UX Design',
    'Responsive Web Design',
    'Progressive Web Apps',
    'AI Integration',
    'Cypress Testing',
    'DevOps',
    'Docker',
    'VPS Management',
    'Authentication Systems',
    'Business Strategy',
    'Client Consultation',
    'Project Management',
    'Agile Development'
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
          name: 'Website Design & Development',
          description:
            'End-to-end website creation including discovery sessions, wireframing, UI design, responsive development, and testing. Specializing in modern, fast-loading, SEO-friendly websites that convert visitors into customers.',
          provider: {
            '@type': 'Person',
            name: 'John Paul'
          },
          category: 'Web Development'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Full-Stack Application Development',
          description:
            'Custom web applications using React, Next.js, Node.js, and PostgreSQL. Includes frontend and backend development, database design, API development, authentication systems, and deployment with ongoing support.',
          provider: {
            '@type': 'Person',
            name: 'John Paul'
          },
          category: 'Application Development'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'React Development',
          description:
            'Custom React applications, component libraries, and interactive user interfaces. Expertise in modern React patterns, hooks, state management, and performance optimization.',
          provider: {
            '@type': 'Person',
            name: 'John Paul'
          },
          category: 'Frontend Development'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Next.js Development',
          description:
            'Full-stack Next.js applications with server-side rendering, static site generation, API routes, and optimized performance. Perfect for modern, scalable web applications.',
          provider: {
            '@type': 'Person',
            name: 'John Paul'
          },
          category: 'Full-Stack Development'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Contract Development Services',
          description:
            'Flexible frontend and backend development support for existing teams. Includes React, Next.js, Node.js development, API integration, and project collaboration with clear communication and reliable delivery.',
          provider: {
            '@type': 'Person',
            name: 'John Paul'
          },
          category: 'Contract Services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-commerce Development',
          description:
            'Custom online stores and e-commerce solutions with payment integration, inventory management, and optimized checkout flows. Built for conversion and growth.',
          provider: {
            '@type': 'Person',
            name: 'John Paul'
          },
          category: 'E-commerce'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO & Performance Optimization',
          description:
            'Technical SEO, page speed optimization, Core Web Vitals improvements, and performance auditing to increase search rankings and user experience.',
          provider: {
            '@type': 'Person',
            name: 'John Paul'
          },
          category: 'Optimization'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Integration Services',
          description:
            'Integration of AI capabilities into web applications, including chatbots, content generation, and intelligent automation features.',
          provider: {
            '@type': 'Person',
            name: 'John Paul'
          },
          category: 'AI Development'
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
