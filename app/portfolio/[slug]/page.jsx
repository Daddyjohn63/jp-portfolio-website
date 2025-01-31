import Heading from '@/components/common/Heading';
import { getProject, getProjectSlugs } from '@/lib/projects';
import { formatDateString } from '@/lib/date';
import { MoveLeft, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import LoadingState from '@/components/common/Loading-state';
import { fetchData } from '@/lib/utils';

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const project = await getProject(slug);
  return {
    title: project.currentProject?.title
  };
}

const ProjectSinglePage = async ({ slug }) => {
  const { data } = await fetchData(getProject, slug);
  const { currentProject, previousProject, nextProject } = data;

  if (!currentProject) {
    throw new Error(`Project "${slug}" not found`);
  }

  return (
    <article>
      {/* Hero Section */}
      <header className="relative h-[300px] w-full ">
        {/* Decorative pattern overlay */}
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          />
        </svg>

        {/* Gradient blob */}
        <div
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'
            }}
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-bold text-white text-center px-4">
            {currentProject.title}
          </h1>
          <p className="text-white text-center px-4 w-1/3">
            {currentProject.summary}
          </p>
        </div>
      </header>

      {/* Main content wrapper with consistent spacing */}
      <main className="section-padding-md">
        <div className="container">
          {/* First section - Image left, Text right */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center section-spacing-md">
            <figure className="order-1">
              <Image
                src={currentProject.image}
                alt={currentProject.title || 'Project image'}
                width={1000}
                height={753}
                className="w-full rounded-lg"
              />
            </figure>
            <div className="order-2">
              <article
                dangerouslySetInnerHTML={{ __html: currentProject.body }}
                className="prose min-w-full"
              />
            </div>
          </section>

          {/* Second section (optional) - Text left, Image right */}
          {(currentProject.image2 || currentProject.body2) && (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center section-spacing-md">
              {currentProject.body2 && (
                <div className="order-2 md:order-1">
                  <article
                    dangerouslySetInnerHTML={{ __html: currentProject.body2 }}
                    className="prose min-w-full"
                  />
                </div>
              )}
              {currentProject.image2 && (
                <figure className="order-1 md:order-2">
                  <Image
                    src={currentProject.image2}
                    alt={
                      `${currentProject.title} additional image` ||
                      'Additional project image'
                    }
                    width={1000}
                    height={753}
                    className="w-full rounded-lg"
                  />
                </figure>
              )}
            </section>
          )}

          {/* Navigation section */}
          <nav className="navigation flex justify-center gap-6 section-spacing-sm">
            {previousProject ? (
              <Link
                href={`/portfolio/${previousProject.slug}`}
                className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700"
              >
                <span className="flex gap-2 items-center">
                  <MoveLeft />
                  Previous Project
                </span>
              </Link>
            ) : (
              <span className="px-4 py-2 bg-gray-300 text-gray-500 rounded-full cursor-not-allowed flex gap-2 items-center">
                <MoveLeft />
                Previous Project
              </span>
            )}
            {nextProject ? (
              <Link
                href={`/portfolio/${nextProject.slug}`}
                className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700"
              >
                <span className="flex gap-2 items-center">
                  Next Project
                  <MoveRight />
                </span>
              </Link>
            ) : (
              <span className="px-4 py-2 bg-gray-300 text-gray-500 rounded-full cursor-not-allowed flex gap-2 items-center">
                Next Project
                <MoveRight />
              </span>
            )}
          </nav>
        </div>
      </main>
    </article>
  );
};

const PortfolioSinglePage = ({ params: { slug } }) => {
  return (
    <Suspense fallback={<LoadingState />}>
      <ProjectSinglePage slug={slug} />
    </Suspense>
  );
};

export default PortfolioSinglePage;
