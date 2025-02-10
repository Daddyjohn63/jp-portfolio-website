import qs from 'qs';
import { getPublicHeaders } from './utils';

const CMS_URL = process.env.STRAPI_API_URL;

export const CACHE_TAG_PROCESS_FLOW = 'process-flow';

export async function getWebDesignProcessFlow() {
  const url =
    `${CMS_URL}/api/process-flow` +
    '?' +
    qs.stringify(
      {
        populate: {
          process_cards: {
            fields: [
              'time',
              'subheading',
              'mainheading',
              'description',
              'bullet_one',
              'bullet_two',
              'bullet_three',
              'bullet_four',
              'bullet_five'
            ]
          }
        }
      },
      { encodeValuesOnly: true }
    );

  const response = await fetch(url, {
    headers: getPublicHeaders(),
    next: {
      tags: [CACHE_TAG_PROCESS_FLOW]
    }
  });
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }
  const { data } = await response.json();

  // Return the process_cards directly from the attributes
  return data.process_cards;
}
