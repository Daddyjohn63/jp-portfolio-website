import { marked } from 'marked';
import qs from 'qs';
import { ApiError, CMSError, NotFoundError } from './errors';
import { getPublicHeaders } from './utils';

//not used yet. can also use for getting first three posts.
export async function getFeaturedPost() {
  const posts = await getBlogPosts();
  return posts[0];
}

const CMS_URL = process.env.STRAPI_API_URL;

export const CACHE_TAG_BLOG_POSTS = 'posts';

//get single blog post and prev next links
export async function getBlogPost(slug) {
  try {
    // Fetch the current post based on the slug
    const urlCurrentPost =
      `${CMS_URL}/api/posts?` +
      qs.stringify(
        {
          filters: { slug: { $eq: slug } },
          fields: ['slug', 'title', 'subtitle', 'publishedAt', 'body'],
          populate: { image: { fields: ['url'] } },
          pagination: { pageSize: 1, withCount: false }
        },
        { encodeValuesOnly: true }
      );

    const responseCurrentPost = await fetch(urlCurrentPost, {
      next: {
        tags: [CACHE_TAG_BLOG_POSTS]
      }
    });
    if (!responseCurrentPost.ok) {
      throw new ApiError(responseCurrentPost.status, urlCurrentPost);
    }
    const { data } = await responseCurrentPost.json();
    if (!data?.length) {
      throw new NotFoundError(`Blog post "${slug}" not found`);
    }

    const post = data[0];
    const currentPost = {
      slug: post.slug,
      title: post.title,
      subtitle: post.subtitle,
      body: marked(post.body),
      date: post.publishedAt,
      image: CMS_URL + post.image.url
    };

    const currentPostPublishedAt = post.publishedAt;

    // Fetch the previous post
    const urlPreviousPost =
      `${CMS_URL}/api/posts?` +
      qs.stringify(
        {
          filters: { publishedAt: { $lt: currentPostPublishedAt } },
          sort: ['publishedAt:desc'],
          fields: ['slug'],
          pagination: { pageSize: 1, withCount: false }
        },
        { encodeValuesOnly: true }
      );

    const responsePreviousPost = await fetch(urlPreviousPost, {
      next: {
        tags: [CACHE_TAG_BLOG_POSTS]
      }
    });
    const bodyPreviousPost = await responsePreviousPost.json();
    const previousPost = bodyPreviousPost.data[0] || null;

    // Fetch the next post
    const urlNextPost =
      `${CMS_URL}/api/posts?` +
      qs.stringify(
        {
          filters: { publishedAt: { $gt: currentPostPublishedAt } },
          sort: ['publishedAt:asc'],
          fields: ['slug'],
          pagination: { pageSize: 1, withCount: false }
        },
        { encodeValuesOnly: true }
      );

    const responseNextPost = await fetch(urlNextPost, {
      next: {
        tags: [CACHE_TAG_BLOG_POSTS]
      }
    });
    const bodyNextPost = await responseNextPost.json();
    const nextPost = bodyNextPost.data[0] || null;

    return {
      currentPost,
      previousPost,
      nextPost
    };
  } catch (error) {
    if (error instanceof CMSError) {
      throw error;
    }
    throw new ApiError(500, 'Failed to fetch blog post', error.message);
  }
}

export async function getBlogPosts(pageSize, page) {
  try {
    const url =
      `${CMS_URL}/api/posts?` +
      qs.stringify(
        {
          fields: ['slug', 'title', 'subtitle', 'excerpt', 'publishedAt'],
          populate: {
            categories: {
              fields: ['title', 'slug']
            },
            image: {
              fields: ['url']
            }
          },
          sort: ['publishedAt:desc'],
          pagination: { pageSize, page, withCount: true }
        },
        { encodeValuesOnly: true }
      );

    const response = await fetch(url, {
      method: 'GET',
      // headers: getPublicHeaders(),
      next: {
        tags: [CACHE_TAG_BLOG_POSTS],
        revalidate: 0
      }
    });

    if (!response.ok) {
      throw new ApiError(response.status, url);
    }

    const responseData = await response.json();
    //console.log('Strapi Response:', JSON.stringify(responseData, null, 2));
    // console.log(
    //   'Mapped Posts:',
    //   JSON.stringify(
    //     responseData.data.map(post => ({
    //       slug: post.slug,
    //       title: post.title,
    //       excerpt: post.excerpt,
    //       date: post.publishedAt,
    //       image: CMS_URL + post.image.url,
    //       categories: post.categories.map(cat => ({
    //         id: cat.id,
    //         title: cat.title,
    //         slug: cat.slug
    //       }))
    //     })),
    //     null,
    //     2
    //   )
    // );

    return {
      posts: responseData.data.map(post => ({
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        date: post.publishedAt,
        image: CMS_URL + post.image.url,
        categories: post.categories.map(cat => ({
          id: cat.id,
          title: cat.title,
          slug: cat.slug
        }))
      })),
      pageCount: responseData.meta.pagination.pageCount
    };
  } catch (error) {
    if (error instanceof CMSError) {
      throw error;
    }
    throw new ApiError(500, 'Failed to fetch blog posts', error.message);
  }
}

export async function getCategoryPosts(slug) {
  try {
    const url =
      `${CMS_URL}/api/posts?` +
      qs.stringify(
        {
          fields: ['slug', 'title', 'excerpt', 'publishedAt'],
          populate: {
            categories: {
              fields: ['title', 'slug']
            },
            image: {
              fields: ['url']
            }
          },
          filters: {
            categories: {
              slug: {
                $eq: slug
              }
            }
          },
          sort: ['publishedAt:desc'],
          pagination: { pageSize: 6 }
        },
        { encodeValuesOnly: true }
      );

    const response = await fetch(url, {
      headers: getPublicHeaders(),
      next: {
        tags: [CACHE_TAG_BLOG_POSTS],
        revalidate: 0
      }
    });
    if (!response.ok) {
      throw new Error(`CMS returned ${response.status} for ${url}`);
    }
    const { data, meta } = await response.json();
    //console.log('DATA CATEGORY POSTS', data);
    //console.log('META CATEGORY POSTS', meta);

    return {
      posts: data.map(post => ({
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        date: post.publishedAt,
        image: CMS_URL + post.image.url,
        categories: post.categories.map(cat => ({
          id: cat.id,
          title: cat.title,
          slug: cat.slug
        }))
      })),
      pageCount: meta.pagination.pageCount
    };
  } catch (error) {
    if (error instanceof CMSError) {
      throw error;
    }
    throw new ApiError(500, 'Failed to fetch category posts', error.message);
  }
}

//get category title

export async function getCategoryTitleBySlug(slug) {
  try {
    const url =
      `${CMS_URL}/api/categories?` +
      qs.stringify(
        {
          fields: ['title', 'slug'],
          filters: {
            slug: {
              $eq: slug
            }
          },
          pagination: { pageSize: 1 }
        },
        { encodeValuesOnly: true }
      );

    const response = await fetch(url, {
      headers: getPublicHeaders(),
      next: {
        tags: [CACHE_TAG_BLOG_POSTS]
      }
    });

    if (!response.ok) {
      throw new Error(`CMS returned ${response.status} for ${url}`);
    }

    const { data } = await response.json();

    if (!data?.length) {
      throw new NotFoundError(`Category "${slug}" not found`);
    }

    return data[0].title;
  } catch (error) {
    if (error instanceof CMSError) {
      throw error;
    }
    throw new ApiError(500, 'Failed to fetch category title', error.message);
  }
}

export async function getCategorySlugs() {
  try {
    const url =
      `${CMS_URL}/api/categories?` +
      qs.stringify(
        {
          fields: ['slug'],
          sort: ['publishedAt:desc'],
          pagination: { pageSize: 100 }
        },
        { encodeValuesOnly: true }
      );

    const response = await fetch(url, {
      headers: getPublicHeaders()
    });
    if (!response.ok) {
      throw new Error(`CMS returned ${response.status} for ${url}`);
    }
    const { data } = await response.json();

    return data.map(category => category.slug);
  } catch (error) {
    if (error instanceof CMSError) {
      throw error;
    }
    throw new ApiError(500, 'Failed to fetch category slugs', error.message);
  }
}

export async function getSlugs() {
  try {
    const url =
      `${CMS_URL}/api/posts?` +
      qs.stringify(
        {
          fields: ['slug'],
          sort: ['publishedAt:desc'],
          pagination: { pageSize: 100 }
        },
        { encodeValuesOnly: true }
      );

    const response = await fetch(url, {
      headers: getPublicHeaders()
    });
    if (!response.ok) {
      throw new Error(`CMS returned ${response.status} for ${url}`);
    }
    const { data } = await response.json();

    return data.map(post => post.slug);
  } catch (error) {
    if (error instanceof CMSError) {
      throw error;
    }
    throw new ApiError(500, 'Failed to fetch slugs', error.message);
  }
}

export async function getBlogCategories() {
  try {
    const url =
      `${CMS_URL}/api/categories?` +
      qs.stringify(
        {
          fields: ['title', 'slug'],
          sort: ['title:asc'],
          pagination: { pageSize: 100 }
        },
        { encodeValuesOnly: true }
      );

    const response = await fetch(url, {
      headers: getPublicHeaders(),
      next: {
        tags: [CACHE_TAG_BLOG_POSTS]
      }
    });

    if (!response.ok) {
      throw new Error(`CMS returned ${response.status} for ${url}`);
    }

    const { data } = await response.json();

    // Remove attributes destructuring since data is now flattened in Strapi v5
    return data.map(category => ({
      title: category.title,
      slug: category.slug
    }));
  } catch (error) {
    if (error instanceof CMSError) {
      throw error;
    }
    throw new ApiError(500, 'Failed to fetch categories', error.message);
  }
}
