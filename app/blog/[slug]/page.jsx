//Posts single
import Heading from '@/components/common/Heading';
import { getBlogPost, getSlugs } from '@/lib/blog';
import { formatDateString } from '@/lib/date';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  const slugs = await getSlugs();
  //console.log('[BlogPage] generateStaticParams:', slugs);
  return slugs.map(slug => ({ slug })); //convert string to object
}

//const slugs1 = await getSlugs();

//console.log(slugs1);

export async function generateMetadata({ params: { slug } }) {
  const post = await getBlogPost(slug);
  //console.log('[Single Post]', post);
  return {
    title: post.currentPost?.title
  };
}

const BlogSinglePage = async ({ params: { slug } }) => {
  const { currentPost, previousPost, nextPost } = await getBlogPost(slug);

  console.log(previousPost);

  const formattedDate = formatDateString(currentPost?.date);

  return (
    <div className="container mt-[3rem]">
      <div>
        <Heading>{currentPost?.title}</Heading>
        <h3>{currentPost?.subtitle}</h3>
        <span>{formattedDate}</span>
      </div>
      <Image
        src={currentPost?.image}
        alt="image"
        width={1000}
        height={753}
        className="w-full rounded-lg"
      />
      <div className="w-full mt-[2rem] pb-[10rem]">
        <article
          dangerouslySetInnerHTML={{ __html: currentPost?.body }}
          className="prose min-w-full"
        />
      </div>
      {/* navigation */}
      <div className="navigation flex justify-center gap-6">
        {previousPost ? (
          <Link
            href={`/blog/${previousPost.slug}`}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Previous Post
          </Link>
        ) : (
          <span className="px-4 py-2 bg-gray-300 text-gray-500 rounded cursor-not-allowed">
            Previous Post
          </span>
        )}
        {nextPost ? (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Next Post
          </Link>
        ) : (
          <span className="px-4 py-2 bg-gray-300 text-gray-500 rounded cursor-not-allowed">
            Next Post
          </span>
        )}
      </div>
    </div>
  );
};
export default BlogSinglePage;
