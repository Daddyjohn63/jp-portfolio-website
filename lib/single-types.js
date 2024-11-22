import qs from 'qs';

const CMS_URL = 'http://localhost:1337';

export async function getWebDesignProcessFlow() {
  const url =
    `${CMS_URL}/api/process-flow` +
    '?' +
    qs.stringify(
      {
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
            ]
          }
        }
      },
      { encodeValuesOnly: true }
    );

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }
  const { data } = await response.json();

  // Return the process_cards directly from the attributes
  return data.attributes.process_cards;
}
