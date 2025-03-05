import Heading from '@/components/common/Heading';
import { getBlogPost, getSlugs } from '@/lib/blog';
import { formatDateString } from '@/lib/date';
import { MoveLeft, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import LoadingState from '@/components/common/Loading-state';
import { fetchData } from '@/lib/utils';

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const post = await getBlogPost(slug);
  const { currentPost } = post;

  if (!currentPost) {
    return {
      title: 'Post Not Found | Web and Prosper',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${currentPost.title} | Web and Prosper Blog`,
    description:
      currentPost.excerpt ||
      currentPost.subtitle ||
      'Read this article on Web and Prosper',
    openGraph: {
      title: currentPost.title,
      description: currentPost.excerpt || currentPost.subtitle,
      type: 'article',
      publishedTime: currentPost.date,
      images: currentPost.image
        ? [
            {
              url: currentPost.image,
              width: 1500,
              height: 1000,
              alt: currentPost.title
            }
          ]
        : []
    },
    twitter: {
      card: 'summary_large_image',
      title: currentPost.title,
      description: currentPost.excerpt || currentPost.subtitle,
      images: currentPost.image ? [currentPost.image] : []
    }
  };
}

const BlogPost = async ({ slug }) => {
  const { data } = await fetchData(getBlogPost, slug);
  const { currentPost, previousPost, nextPost } = data;

  if (!currentPost) {
    throw new Error(`Blog post "${slug}" not found`);
  }

  const formattedDate = formatDateString(currentPost.date);

  return (
    <div className=" max-w-[800px] p-6 mx-auto mt-[1rem] pb-12">
      <div>
        <Heading>{currentPost.title}</Heading>
        <h3 className="mb-3">{currentPost.subtitle}</h3>
        <span className="text-sm text-gray-300">{formattedDate}</span>
      </div>
      {/* <Image
        src={currentPost.image}
        alt={currentPost.title || 'Blog post image'}
        width={1000}
        height={753}
        className="w-full rounded-lg"
      /> */}
      <div className="w-full mt-[2rem] pb-[2rem]">
        <article
          dangerouslySetInnerHTML={{ __html: currentPost.body }}
          className="prose"
        />
      </div>
      {/* navigation */}
      <div className="navigation flex justify-center gap-6">
        {previousPost ? (
          <Link
            href={`/blog/${previousPost.slug}`}
            className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/80"
          >
            <span className="flex gap-2 items-center">
              <MoveLeft />
              Previous Post
            </span>
          </Link>
        ) : (
          <span className="px-4 py-2 bg-[#ffe4c4] text-black rounded-full cursor-not-allowed flex gap-2 items-center">
            <MoveLeft />
            Previous Post
          </span>
        )}
        {nextPost ? (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/80"
          >
            <span className="flex gap-2 items-center">
              Next Post
              <MoveRight />
            </span>
          </Link>
        ) : (
          <span className="px-4 py-2 bg-[#ffe4c4] text-black rounded-full cursor-not-allowed flex gap-2 items-center">
            Next Post
            <MoveRight />
          </span>
        )}
      </div>
    </div>
  );
};

const BlogSinglePage = ({ params: { slug } }) => {
  return (
    <Suspense fallback={<LoadingState />}>
      <BlogPost slug={slug} />
    </Suspense>
  );
};

export default BlogSinglePage;
