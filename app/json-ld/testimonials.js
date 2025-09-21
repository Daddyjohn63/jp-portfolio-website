export const testimonialsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Web and Prosper',
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5
      },
      author: {
        '@type': 'Person',
        name: 'Rob Erwood',
        jobTitle: 'CEO at Princewood Energy'
      },
      reviewBody:
        'John was excellent and very helpful in building and launching our website for a start up company. We were able to launch the site very quickly under Johns guidance who gave us all the help and advice we needed. If I ever needed another site, John would be my first call.',
      publisher: {
        '@type': 'Organization',
        name: 'Princewood Energy'
      }
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5
      },
      author: {
        '@type': 'Person',
        name: 'Brett Edyvane',
        jobTitle: 'CEO and owner, Roxel Resources'
      },
      reviewBody:
        'When searching for a great web designer it was a daunting journey. Then a recommendation from a friend came in the form of John at Web and Prosper. He understood my position and my needs for a website not only for that time but, for the future and set about working with me to start small and grow as my company does, with my web presence. My page looks amazing. I am thankful to have someone at Johns portfolio helping me and my company. Very happy and would highly recommend Web and Prosper.',
      publisher: {
        '@type': 'Organization',
        name: 'Roxel Resources'
      }
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5
      },
      author: {
        '@type': 'Person',
        name: 'Amelia',
        jobTitle: 'Marketing Manager, Galvin Restaurants'
      },
      reviewBody:
        "We have been working with Web and Prosper for coming up on two years and we couldn't be happier. John Paul is professional, knowledgeable and friendly- and is an essential part of our team. Without a doubt, I would highly recommend working with Web and Prosper.",
      publisher: {
        '@type': 'Organization',
        name: 'Galvin Restaurants'
      }
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5
      },
      author: {
        '@type': 'Person',
        name: 'Sarah Davis',
        jobTitle: 'CEO and owner, Solve Recruitment'
      },
      reviewBody:
        'I have just had the most beautiful new website and logo designed by John for my Business rebrand. I am over the moon with the result, and the whole process was simple, organised and good fun. I throughly recommend Web and Prosper.',
      publisher: {
        '@type': 'Organization',
        name: 'Solve Recruitment'
      }
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 5.0,
    reviewCount: 12,
    bestRating: 5,
    worstRating: 5
  }
};
