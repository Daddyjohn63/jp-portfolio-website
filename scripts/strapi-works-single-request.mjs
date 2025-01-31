// node scripts/strapi-works-single-request.mjs
//get a single work with a specific slug

import { writeFileSync } from 'node:fs';
import qs from 'qs';

const url =
  'http://127.0.0.1:1337/api/works' +
  '?' +
  qs.stringify(
    {
      filters: { slug: { $eq: 'ashdown-cookery-school' } },
      fields: ['slug', 'title', 'publishedAt', 'body'],
      populate: { image: { fields: ['url'] } },
      pagination: { pageSize: 1, withCount: false }
    },
    { encodeValuesOnly: true }
  );

const response = await fetch(url);
const body = await response.json();
const formatted = JSON.stringify(body, null, 2);
const file = 'scripts/strapi-works-single-response.json';
writeFileSync(file, formatted, 'utf8');
