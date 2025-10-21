// import { readFile } from 'node:fs/promises';
// import matter from 'gray-matter';
import { marked } from 'marked';
import qs from 'qs';
import { ApiError, CMSError, NotFoundError } from './errors';
import { getPublicHeaders } from './utils';

const CMS_URL = process.env.STRAPI_API_URL;

export const CACHE_TAG_PROJECTS = 'projects';

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
    const response = await fetch(url, {
      headers: getPublicHeaders(),
      next: {
        tags: [CACHE_TAG_PROJECTS]
      }
    });
    if (!response.ok) {
      throw new Error(`CMS returned ${response.status} for ${url}`);
    }
    const { data, meta } = await response.json();

    return {
      projects: data.map(project => ({
        key: project.slug,
        slug: project.slug,
        title: project.title,
        summary: project.summary,
        date: project.publishedAt,
        image: CMS_URL + project.image.url
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
    const response = await fetch(url, {
      headers: getPublicHeaders(),
      next: {
        tags: [CACHE_TAG_PROJECTS]
      }
    });
    if (!response.ok) {
      throw new Error(`CMS returned ${response.status} for ${url}`);
    }
    const { data, meta } = await response.json();
    //.log('PROJECTS', data);

    return {
      projects: data.map(project => ({
        key: project.slug,
        slug: project.slug,
        title: project.title,
        summary: project.summary,
        date: project.publishedAt,
        image: CMS_URL + project.image.url,
        alternativeText: project.image.alternativeText
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

    const responseCurrentProject = await fetch(urlCurrentProject, {
      headers: getPublicHeaders(),
      next: {
        tags: [CACHE_TAG_PROJECTS]
      }
    });
    //console.log('RESPONSE CURRENT PROJECT', responseCurrentProject);
    if (!responseCurrentProject.ok) {
      throw new ApiError(responseCurrentProject.status, urlCurrentProject);
    }
    const { data } = await responseCurrentProject.json();
    // console.log('CURRENT PROJECT', data);
    if (!data?.length) {
      throw new NotFoundError(`Project "${slug}" not found`);
    }
    const project = data[0];
    const currentProject = {
      slug: project.slug,
      title: project.title,
      summary: project.summary,
      body: marked(project.body || ''),
      body2: project.body2 ? marked(project.body2) : '',
      date: project.publishedAt,
      image: CMS_URL + project.image.url,
      image2: project.image2 ? CMS_URL + project.image2.url : null
    };

    const currentProjectPublishedAt = project.publishedAt;

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

    const responsePreviousProject = await fetch(urlPreviousProject, {
      next: {
        tags: [CACHE_TAG_PROJECTS]
      }
    });
    const bodyPreviousProject = await responsePreviousProject.json();
    const previousProject = bodyPreviousProject.data[0] || null;

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

    const responseNextProject = await fetch(urlNextProject, {
      next: {
        tags: [CACHE_TAG_PROJECTS]
      }
    });
    const bodyNextProject = await responseNextProject.json();
    const nextProject = bodyNextProject.data[0] || null;

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

    const response = await fetch(url, {
      headers: getPublicHeaders(),
      next: {
        tags: [CACHE_TAG_PROJECTS]
      }
    });
    if (!response.ok) {
      throw new Error(`CMS returned ${response.status} for ${url}`);
    }
    const { data } = await response.json();

    return data.map(project => project.slug);
  } catch (error) {
    if (error instanceof CMSError) {
      throw error;
    }
    throw new ApiError(500, 'Failed to fetch slugs', error.message);
  }
}
