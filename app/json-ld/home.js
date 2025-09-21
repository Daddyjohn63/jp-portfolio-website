import { baseJsonLd } from './index';

export const homeJsonLd = {
  ...baseJsonLd,
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00'
  },
  // Add this if you have verified reviews
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '12', // Update with your actual review count
    bestRating: '5',
    worstRating: '1'
  }
};
