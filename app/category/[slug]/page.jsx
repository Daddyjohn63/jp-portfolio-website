import { getCategoryPosts, getCategoryTitleBySlug } from '@/lib/blog';
import Link from 'next/link';
import Image from 'next/image';
import Heading from '@/components/common/Heading';
import { formatDateString } from '@/lib/date';
import { Suspense } from 'react';
import LoadingState from '@/components/common/Loading-state';
import { fetchData } from '@/lib/utils';

const CategoryPosts = async ({ slug }) => {
  const { data: categoryTitle } = await fetchData(getCategoryTitleBySlug, slug);
  const { data: categoryPosts } = await fetchData(getCategoryPosts, slug);

  if (!categoryPosts?.length) {
    return (
      <p className="text-center text-gray-600">
        No posts found in this category.
      </p>
    );
  }

  return (
    <div className="container py-12">
      <Heading>{categoryTitle || 'Category'}</Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {categoryPosts.map(post => (
          <li
            key={post.slug}
            className="bg-white border rounded shadow w-80 hover:shadow-xl"
          >
            <div>
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={post?.image}
                  width="400"
                  height="300"
                  alt={post?.title || ''}
                  className="rounded-t"
                />
              </Link>
              <div className="p-3">
                <div className="flex flex-col">
                  <span>{formatDateString(post?.date)}</span>

                  <span className="text-gray-600 mt-1 block">
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
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CategoryPostsPage = ({ params: { slug } }) => {
  return (
    <Suspense fallback={<LoadingState />}>
      <CategoryPosts slug={slug} />
    </Suspense>
  );
};

export default CategoryPostsPage;
