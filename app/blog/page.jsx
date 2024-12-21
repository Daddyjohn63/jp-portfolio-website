import { getBlogPosts } from '@/lib/blog';
import Link from 'next/link';
import Image from 'next/image';
import Heading from '@/components/common/Heading';
import { formatDateString } from '@/lib/date';
import { Suspense } from 'react';
import LoadingState from '@/components/common/Loading-state';
import { fetchData } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const BlogPosts = async () => {
  const { data: blogPosts } = await fetchData(getBlogPosts);

  if (!blogPosts?.length) {
    return <p className="text-center text-gray-600">No blog posts found.</p>;
  }

  return (
    <ul className="flex flex-row flex-wrap gap-6 ">
      {blogPosts.map(post => (
        <li
          key={post.slug}
          className="bg-customShades-shade2 border rounded-md shadow w-80 hover:shadow-xl"
        >
          <Link href={`/blog/${post.slug}`}>
            <Image
              src={post?.image}
              width="400"
              height="300"
              alt=""
              className="rounded-t"
            />
            <div className="p-3">
              <div className="flex flex-col">
                <span className="text-muted-foreground">
                  {formatDateString(post?.date)}
                </span>

                <span className=" mt-1 block">
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

              <h2 className=" font-semibold py-1">{post?.title}</h2>
              <p className="">{post?.excerpt}</p>
              <div className="flex justify-start mt-4">
                <Button className="bg-primary  text-white w-[80%]">
                  View All Reviews
                </Button>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const BlogPage = () => {
  return (
    <div className="container py-12">
      <Heading>Blog</Heading>
      <Suspense fallback={<LoadingState />}>
        <BlogPosts />
      </Suspense>
    </div>
  );
};

export default BlogPage;
