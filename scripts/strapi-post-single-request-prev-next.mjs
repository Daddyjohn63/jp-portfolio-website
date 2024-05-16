// node scripts/strapi-post-single-request-prev-next.mjs
//get a post with a specific slug

import { writeFileSync } from 'node:fs';
import qs from 'qs';

// Replace 'post-2' with the actual slug you are querying
const slug = 'post-3';

// Fetch the current post based on the slug
const urlCurrentPost =
  'http://127.0.0.1:1337/api/posts' +
  '?' +
  qs.stringify(
    {
      filters: { slug: { $eq: slug } },
      fields: ['slug', 'title', 'subtitle', 'publishedAt', 'body'],
      populate: { image: { fields: ['url'] } },
      pagination: { pageSize: 1, withCount: false }
    },
    { encodeValuesOnly: true }
  );

const responseCurrentPost = await fetch(urlCurrentPost);
const bodyCurrentPost = await responseCurrentPost.json();
const currentPost = bodyCurrentPost.data[0];
const currentPostPublishedAt = currentPost.attributes.publishedAt;

// Query for the previous post
const urlPreviousPost =
  'http://127.0.0.1:1337/api/posts' +
  '?' +
  qs.stringify(
    {
      filters: { publishedAt: { $lt: currentPostPublishedAt } },
      sort: ['publishedAt:desc'],
      fields: ['slug'],
      pagination: { pageSize: 1, withCount: false }
    },
    { encodeValuesOnly: true }
  );

const responsePreviousPost = await fetch(urlPreviousPost);
const bodyPreviousPost = await responsePreviousPost.json();
const previousPost = bodyPreviousPost.data[0];

// Query for the next post
const urlNextPost =
  'http://127.0.0.1:1337/api/posts' +
  '?' +
  qs.stringify(
    {
      filters: { publishedAt: { $gt: currentPostPublishedAt } },
      sort: ['publishedAt:asc'],
      fields: ['slug'],
      pagination: { pageSize: 1, withCount: false }
    },
    { encodeValuesOnly: true }
  );

const responseNextPost = await fetch(urlNextPost);
const bodyNextPost = await responseNextPost.json();
const nextPost = bodyNextPost.data[0];

// Combine the results
const result = {
  currentPost,
  previousPost: previousPost ? previousPost.attributes : null,
  nextPost: nextPost ? nextPost.attributes : null
};

// Write the result to a file
const formatted = JSON.stringify(result, null, 2);
const file = 'scripts/strapi-post-single-response-prev-next.json';
writeFileSync(file, formatted, 'utf8');
