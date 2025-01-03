import { getBlogPosts } from '@/lib/blog';
import Link from 'next/link';
import Image from 'next/image';
import Heading from '@/components/common/Heading';
import { formatDateString } from '@/lib/date';
import { Suspense } from 'react';
import LoadingState from '@/components/common/Loading-state';
import { fetchData } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { PagePagination } from '@/components/common/Pagination';
import { NotFoundError, CMSError } from '@/lib/errors';
import { NavSidebar } from '@/components/blog/Nav-sidebar';
import { Sidebar } from '@/components/common/Sidebar';

export const metadata = {
  title: 'Blog',
  description: 'News and articles to get you thinking'
};

const PAGE_SIZE = 6;

const BlogPosts = ({ posts }) => {
  if (!posts?.length) {
    return <p className="text-center text-gray-600">No blog posts found.</p>;
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {posts.map(post => {
        //early return if no posts
        if (!post?.slug || !post?.title) {
          return null;
        }
        return (
          <li
            key={post.slug}
            className="bg-customShades-shade2 border rounded-md shadow hover:shadow-xl"
          >
            <div>
              <Link href={`/blog/${post.slug}`}>
                {post?.image && (
                  <Image
                    src={post?.image}
                    width="400"
                    height="225"
                    alt=""
                    className="rounded-t aspect-[16/9] object-cover w-full"
                  />
                )}
              </Link>
              <div className="p-3">
                <div className="flex flex-col">
                  {post?.date && (
                    <span className="text-muted-foreground">
                      {formatDateString(post?.date)}
                    </span>
                  )}
                  {post?.categories?.length > 0 && (
                    <span className="mt-1 block">
                      {post.categories.map((cat, index) => (
                        <span key={cat?.slug || index}>
                          {cat?.slug && cat?.title && (
                            <Link
                              href={`/category/${cat.slug}`}
                              className="hover:underline capitalize"
                            >
                              {cat.title}
                            </Link>
                          )}
                          {index < post.categories.length - 1 && ', '}
                        </span>
                      ))}
                    </span>
                  )}
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h2 className="font-semibold py-1">{post.title}</h2>
                  {post?.excerpt && <p>{post.excerpt}</p>}
                  <div className="flex justify-start mt-4">
                    <Button className="bg-primary text-white w-full">
                      Read More
                    </Button>
                  </div>
                </Link>
              </div>
            </div>
          </li>
        );
      })}
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
      <div className="container">
        <div className="flex items-center justify-center mt-12">
          <Heading>Blog</Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 mt-6">
          {/* first column */}
          <div className="flex flex-col gap-6">
            <Sidebar />
            <NavSidebar />
          </div>

          {/* second column */}
          <div>
            <Suspense fallback={<LoadingState />}>
              <BlogPosts posts={blogPosts} />
            </Suspense>
            <PagePagination currentPage={page} pageCount={pageCount} />
          </div>
        </div>
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
