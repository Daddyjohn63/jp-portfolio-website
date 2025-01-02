import { getBlogPosts } from '@/lib/blog';
import Link from 'next/link';
import Image from 'next/image';
import Heading from '@/components/common/Heading';
import { formatDateString } from '@/lib/date';
import { Suspense } from 'react';
import LoadingState from '@/components/common/Loading-state';
import { fetchData } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import qs from 'qs';
import { PagePagination } from '@/components/common/Pagination';
import { NotFoundError, CMSError } from '@/lib/errors';

const PAGE_SIZE = 2;

const BlogPosts = ({ posts }) => {
  if (!posts?.length) {
    return <p className="text-center text-gray-600">No blog posts found.</p>;
  }

  return (
    <ul className="flex flex-row flex-wrap gap-6">
      {posts.map(post => (
        <li
          key={post.slug}
          className="bg-customShades-shade2 border rounded-md shadow w-80 hover:shadow-xl"
        >
          <div>
            <Link href={`/blog/${post.slug}`}>
              <Image
                src={post?.image}
                width="400"
                height="300"
                alt=""
                className="rounded-t"
              />
            </Link>
            <div className="p-3">
              <div className="flex flex-col">
                <span className="text-muted-foreground">
                  {formatDateString(post?.date)}
                </span>

                <span className="mt-1 block">
                  {post.categories.map((cat, index) => (
                    <span key={cat.slug}>
                      <Link
                        href={`/category/${cat.slug}`}
                        className="hover:underline capitalize"
                      >
                        {cat.title}
                      </Link>
                      {index < post.categories.length - 1 && ', '}
                    </span>
                  ))}
                </span>
              </div>

              <Link href={`/blog/${post.slug}`}>
                <h2 className="font-semibold py-1">{post?.title}</h2>
                <p>{post?.excerpt}</p>
                <div className="flex justify-start mt-4">
                  <Button className="bg-primary text-white w-[80%]">
                    Read More
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const BlogPage = async ({ searchParams }) => {
  try {
    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    if (isNaN(page) || page < 1) {
      throw new CMSError(
        'Invalid page number',
        400,
        'Page number must be a positive integer'
      );
    }
    const { data } = await fetchData(getBlogPosts, PAGE_SIZE, page);
    const { posts: blogPosts, pageCount } = data;
    if (!blogPosts?.length) {
      throw new NotFoundError('No blog posts found');
    }
    if (page > pageCount) {
      throw new NotFoundError('Page not found');
    }

    return (
      <div className="container py-12">
        <Heading>Blog</Heading>
        <Suspense fallback={<LoadingState />}>
          <BlogPosts posts={blogPosts} />
        </Suspense>
        <PagePagination currentPage={page} pageCount={pageCount} />
      </div>
    );
  } catch (error) {
    //error caught in the error boundary

    throw error;
  }
  // Log the error for monitoring but don't expose it to the user
  console.error('Blog page error:', error);
  throw new CMSError('Failed to load blog posts', 500, error.message);
};

export default BlogPage;
