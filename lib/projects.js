// import { readFile } from 'node:fs/promises';
// import matter from 'gray-matter';
// import { marked } from 'marked';
import qs from 'qs';

const CMS_URL = process.env.STRAPI_API_URL;

// export async function getProject(slug) {
//   const text = await readFile(`./content/projects/${slug}.md`, 'utf8');
//   const {
//     content,
//     data: { title, image, subheading, challenge }
//   } = matter(text);
//   const body = marked(content);
//   return { title, image, subheading, challenge, body };
// }

export async function getProjects(pageSize, page) {
  const url =
    `${CMS_URL}/api/works?` +
    qs.stringify(
      {
        fields: ['slug', 'title', 'excerpt', 'publishedAt'],
        populate: {
          image: {
            fields: ['url']
          }
        },
        sort: ['publishedAt:desc'],
        pagination: { pageSize, page }
      },
      { encodeValuesOnly: true }
    );
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }
  //console.log('WORKS RESPONSE', response);
  const { data, meta } = await response.json();
  //console.log('WORKS DATA', data);
  //console.log('WORKS META', meta);
  return { data, meta };
}

export async function getFeaturedProjects() {
  const url =
    `${CMS_URL}/api/works?` +
    qs.stringify(
      {
        fields: ['slug', 'title', 'summary', 'publishedAt'],
        populate: {
          image: { fields: ['url', 'alternativeText'] }
        },
        sort: ['publishedAt:desc'],
        filters: { featured: { $eq: true } },
        pagination: { pageSize: 3 }
      },
      { encodeValuesOnly: true }
    );
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }
  const { data, meta } = await response.json();

  return {
    projects: data.map(({ attributes }) => ({
      key: attributes.slug,
      slug: attributes.slug,
      title: attributes.title,
      summary: attributes.summary,
      date: attributes.publishedAt,
      image: CMS_URL + attributes.image.data.attributes.url,
      alternativeText: attributes.image.data.attributes.alternativeText
    })),
    pageCount: meta.pagination.pageCount
  };
}
