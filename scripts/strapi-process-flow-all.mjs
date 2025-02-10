// node scripts/strapi-process-flow-all.mjs
//get all process flow

import { writeFileSync } from 'node:fs';
import qs from 'qs';

const url =
  'http://127.0.0.1:1337/api/process-flow' +
  '?' +
  qs.stringify(
    {
      fields: ['createdAt', 'updatedAt', 'publishedAt'], // Specify the fields you want from the main content type
      populate: {
        process_cards: {
          fields: [
            'Time',
            'subheading',
            'mainheading',
            'description',
            'bullet_one',
            'bullet_two',
            'bullet_three'
          ] // Specify the fields you want from the repeatable component
        }
      }
    },
    { encodeValuesOnly: true }
  );

const response = await fetch(url);
const body = await response.json();
const formatted = JSON.stringify(body, null, 2);
const file = 'scripts/strapi-process-flow-all-responsev5.json';
writeFileSync(file, formatted, 'utf8');

// import { writeFileSync } from 'node:fs';
// import qs from 'qs';

// const url =
//   'http://127.0.0.1:1337/api/process-flow' +
//   '?' +
//   qs.stringify(
//     {
//       // fields: ['time', 'mainheading']
//       populate: '*'
//     },
//     { encodeValuesOnly: true }
//   );

// const response = await fetch(url);
// const body = await response.json();
// const formatted = JSON.stringify(body, null, 2);
// const file = 'scripts/strapi-process-flow-all-response.json';
// writeFileSync(file, formatted, 'utf8');
