// node scripts/strapi-works-request-all-data.mjs
//get all categories

import { writeFileSync } from 'node:fs';

const url = 'http://127.0.0.1:1337/api/works' + '?populate=*';
const response = await fetch(url);
const body = await response.json();
const formatted = JSON.stringify(body, null, 2);
const file = 'scripts/strapi-works-response-all.json';
writeFileSync(file, formatted, 'utf8');
