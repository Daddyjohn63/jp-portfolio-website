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
import { InnerHeader } from '@/components/common/InnerHeader';
import Reveal from '@/components/common/ScrollAnimation';

export const metadata = {
  title: 'Blog',
  description: 'News and articles to get you thinking'
};

const PAGE_SIZE = 6;

const BlogPosts = ({ posts }) => {
  if (!posts?.length) {
    return <p className="text-center">No blog posts found.</p>;
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
            className="flex flex-col bg-[#0c0338] border rounded-md shadow hover:shadow-xl relative min-h-[400px]"
          >
            <div className="h-full flex flex-col">
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
              <div className="p-3 flex flex-col flex-grow">
                <div className="flex flex-col">
                  {post?.date && (
                    <span className="text-muted-foreground text-sm">
                      {formatDateString(post?.date)}
                    </span>
                  )}
                  {post?.categories?.length > 0 && (
                    <span className="mt-1 block text-muted-foreground text-sm">
                      {post.categories.map((cat, index) => (
                        <span key={cat?.slug || index}>
                          {cat?.slug && cat?.title && (
                            <Link
                              href={`/category/${cat.slug}`}
                              className="hover:underline capitalize text-sm"
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

                <div className="flex flex-col h-full">
                  <h4 className="font-semibold py-1">{post.title}</h4>
                  {post?.excerpt && <p className="text-sm">{post.excerpt}</p>}
                  <div className="mt-auto pb-2 pt-2">
                    <Link href={`/blog/${post.slug}`}>
                      <Button className="bg-primary text-white w-full">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
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

    // fetchData wraps our response in { data: { posts, pageCount } }
    const { data, error } = await fetchData(getBlogPosts, PAGE_SIZE, page);

    if (error) {
      throw error;
    }

    const { posts: blogPosts, pageCount } = data;

    // console.log('blogPosts', blogPosts);
    // console.log('pageCount', pageCount);

    if (!blogPosts?.length) {
      throw new NotFoundError('No blog posts found');
    }
    if (page > pageCount) {
      throw new NotFoundError('Page not found');
    }

    return (
      <div className="container ">
        <InnerHeader
          title="Blog"
          description="News and articles to get you thinking"
        />
        <div className="overflow-hidden pb-12">
          <Reveal from={200}>
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 mt-6">
              {/* Sidebar - hidden on mobile, shown first on desktop */}
              <div className="hidden md:flex flex-col gap-6">
                <Sidebar />
                <NavSidebar />
              </div>

              {/* Content area */}
              <div className="flex flex-col gap-6">
                <Suspense fallback={<LoadingState />}>
                  <BlogPosts posts={blogPosts} />
                </Suspense>
                <PagePagination currentPage={page} pageCount={pageCount} />

                {/* Sidebar - shown on mobile only, after posts */}
                <div className="md:hidden flex flex-col gap-6">
                  <Sidebar />
                  <NavSidebar />
                </div>
              </div>
            </div>
          </Reveal>
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
