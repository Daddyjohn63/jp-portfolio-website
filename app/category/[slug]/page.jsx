import {
  getCategoryPosts,
  getCategorySlugs,
  getCategoryTitleBySlug
} from '@/lib/blog';
import Link from 'next/link';
import Image from 'next/image';
import { formatDateString } from '@/lib/date';
import { Suspense } from 'react';
import LoadingState from '@/components/common/Loading-state';
import { fetchData } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { NavSidebar } from '@/components/blog/Nav-sidebar';
import { Sidebar } from '@/components/common/Sidebar';
import { InnerHeader } from '@/components/common/InnerHeader';
import Reveal from '@/components/common/ScrollAnimation';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { CtaButton } from '@/components/common/CtaButton';
import { ArrowLeftIcon } from 'lucide-react';

export async function generateStaticParams() {
  try {
    console.log('Fetching category slugs...');
    const slugs = await getCategorySlugs();
    console.log('Retrieved slugs:', slugs);

    if (!slugs || slugs.length === 0) {
      console.warn('No category slugs found, returning default array');
      // Return at least one slug to prevent build error
      return [{ slug: 'default' }];
    }

    return slugs.map(slug => ({ slug }));
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    // Return a default slug to prevent build failure
    return [{ slug: 'default' }];
  }
}

const CategoryPosts = async ({ slug }) => {
  try {
    const { data: categoryTitle } = await fetchData(
      getCategoryTitleBySlug,
      slug
    );
    const { data } = await fetchData(getCategoryPosts, slug);
    const { posts: categoryPosts, pageCount } = data;
    //console.log('PAGE COUNT from page', pageCount);
    //console.log('CATEGORY POSTS from page', categoryPosts);

    // Add error logging
    // console.log('Category title:', categoryTitle);
    // console.log('Category posts:', categoryPosts);

    if (!categoryPosts?.length) {
      return (
        <div className="container h-screen flex flex-col items-center justify-center gap-6">
          <p className="text-center text-gray-600">
            Sorry there are no posts found in this category.
          </p>
          <CtaButton
            label="Back to Blog"
            text="Back to Blog"
            href="/blog"
            className="mt-4"
            icon={<ArrowLeftIcon />}
          />
        </div>
      );
    }

    return (
      <div className="container">
        <InnerHeader
          title={categoryTitle || 'Category'}
          description="Posts in this category"
        />
        <div className="overflow-hidden pb-12">
          {/* <Reveal from={200}> */}
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 ">
            {/* Sidebar - hidden on mobile, shown first on desktop */}
            <div className="hidden md:flex flex-col gap-6">
              <Sidebar />
              <NavSidebar />
            </div>

            {/* Content area */}
            <div className="flex flex-col gap-6">
              <ul className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {categoryPosts.map(post => (
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
                            alt={post?.title || ''}
                            className="rounded-t aspect-[16/9] object-cover w-full"
                          />
                        )}
                      </Link>
                      <div className="p-3 flex flex-col flex-grow">
                        <div className="flex flex-col">
                          <span className="text-muted-foreground text-sm">
                            {formatDateString(post?.date)}
                          </span>
                          <span className="mt-1 block text-muted-foreground text-sm">
                            {post.categories.map((cat, index) => (
                              <span key={cat.slug}>
                                <Link
                                  href={`/category/${cat.slug}`}
                                  className="hover:underline capitalize text-sm"
                                >
                                  {cat.title}
                                </Link>
                                {index < post.categories.length - 1 && ', '}
                              </span>
                            ))}
                          </span>
                        </div>

                        <div className="flex flex-col h-full">
                          <h4 className="font-semibold py-1">{post?.title}</h4>
                          {post?.excerpt && (
                            <p className="text-sm">{post.excerpt}</p>
                          )}
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
                ))}
              </ul>

              {/* Sidebar - shown on mobile only, after posts */}
              <div className="md:hidden flex flex-col gap-6">
                <Sidebar />
                <NavSidebar />
              </div>
            </div>
          </div>
          {/* </Reveal> */}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error in CategoryPosts:', error);
    throw error;
  }
};

const CategoryPostsPage = ({ params: { slug } }) => {
  return (
    <ScrollToTop>
      <Suspense fallback={<LoadingState />}>
        <CategoryPosts slug={slug} />
      </Suspense>
    </ScrollToTop>
  );
};

export default CategoryPostsPage;
