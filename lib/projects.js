// import { readFile } from 'node:fs/promises';
// import matter from 'gray-matter';
import { marked } from 'marked';
import qs from 'qs';
import { ApiError, CMSError, NotFoundError } from './errors';
const CMS_URL = process.env.STRAPI_API_URL;

export async function getProjects(pageSize, page) {
  try {
    const url =
      `${CMS_URL}/api/works?` +
      qs.stringify(
        {
          fields: ['slug', 'title', 'summary', 'publishedAt'],
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
    const { data, meta } = await response.json();

    return {
      projects: data.map(({ attributes }) => ({
        key: attributes.slug,
        slug: attributes.slug,
        title: attributes.title,
        summary: attributes.summary,
        date: attributes.publishedAt,
        image: CMS_URL + attributes.image.data.attributes.url
      })),
      pageCount: meta.pagination.pageCount
    };
  } catch (error) {
    if (error instanceof CMSError) {
      throw error;
    }
    throw new ApiError(500, 'Failed to fetch projects', error.message);
  }
}

export async function getFeaturedProjects() {
  try {
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
  } catch (error) {
    if (error instanceof CMSError) {
      throw error;
    }
    throw new ApiError(500, 'Failed to fetch projects', error.message);
  }
}

//get a single project with a specific slug
export async function getProject(slug) {
  try {
    // Fetch the current project based on the slug
    const urlCurrentProject =
      `${CMS_URL}/api/works?` +
      qs.stringify(
        {
          filters: { slug: { $eq: slug } },
          fields: ['slug', 'title', 'publishedAt', 'summary', 'body', 'body2'],
          populate: {
            image: { fields: ['url'] },
            image2: { fields: ['url'] }
          },
          pagination: { pageSize: 1, withCount: false }
        },
        { encodeValuesOnly: true }
      );

    const responseCurrentProject = await fetch(urlCurrentProject);
    if (!responseCurrentProject.ok) {
      throw new ApiError(responseCurrentProject.status, urlCurrentProject);
    }
    const { data } = await responseCurrentProject.json();
    // console.log('CURRENT PROJECT', data);
    if (!data?.length) {
      throw new NotFoundError(`Project "${slug}" not found`);
    }
    const { attributes } = data[0];
    const currentProject = {
      slug: attributes.slug,
      title: attributes.title,
      summary: attributes.summary,
      body: marked(attributes.body || ''),
      body2: attributes.body2 ? marked(attributes.body2) : '',
      date: attributes.publishedAt,
      image: CMS_URL + attributes.image.data.attributes.url,
      image2: attributes.image2?.data
        ? CMS_URL + attributes.image2.data.attributes.url
        : null
    };

    const currentProjectPublishedAt = attributes.publishedAt;

    // Fetch the previous project
    const urlPreviousProject =
      `${CMS_URL}/api/works?` +
      qs.stringify(
        {
          filters: { publishedAt: { $lt: currentProjectPublishedAt } },
          sort: ['publishedAt:desc'],
          fields: ['slug'],
          pagination: { pageSize: 1, withCount: false }
        },
        { encodeValuesOnly: true }
      );

    const responsePreviousProject = await fetch(urlPreviousProject);
    const bodyPreviousProject = await responsePreviousProject.json();
    const previousProject = bodyPreviousProject.data[0]
      ? bodyPreviousProject.data[0].attributes
      : null;

    // Fetch the next project
    const urlNextProject =
      `${CMS_URL}/api/works?` +
      qs.stringify(
        {
          filters: { publishedAt: { $gt: currentProjectPublishedAt } },
          sort: ['publishedAt:asc'],
          fields: ['slug'],
          pagination: { pageSize: 1, withCount: false }
        },
        { encodeValuesOnly: true }
      );

    const responseNextProject = await fetch(urlNextProject);
    const bodyNextProject = await responseNextProject.json();
    const nextProject = bodyNextProject.data[0]
      ? bodyNextProject.data[0].attributes
      : null;

    return {
      currentProject,
      previousProject,
      nextProject
    };
  } catch (error) {
    if (error instanceof CMSError) {
      throw error;
    }
    throw new ApiError(500, 'Failed to fetch project', error.message);
  }
}

export async function getProjectSlugs() {
  try {
    const url =
      `${CMS_URL}/api/works?` +
      qs.stringify(
        {
          fields: ['slug'],
          sort: ['publishedAt:desc'],
          pagination: { pageSize: 100 }
        },
        { encodeValuesOnly: true }
      );

    //console.log('Fetching slugs from URL:', url); // Log the URL

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`CMS returned ${response.status} for ${url}`);
    }
    const { data } = await response.json();
    //console.log('Response data:', data); // Log the fetched data

    return data.map(({ attributes }) => attributes.slug);
  } catch (error) {
    if (error instanceof CMSError) {
      throw error;
    }
    throw new ApiError(500, 'Failed to fetch slugs', error.message);
  }
}
