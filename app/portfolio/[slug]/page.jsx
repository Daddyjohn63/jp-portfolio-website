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
    <>
      {/* Hero Section */}
      <div className="relative h-[300px] mb-[4rem] w-full bg-gradient-to-r from-[#80caff] to-[#4f46e5] before:absolute before:inset-0 before:bg-background/90">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-bold text-white text-center px-4">
            {currentProject.title}
          </h1>
          <p className="text-white text-center px-4 lg:w-1/3">
            {currentProject.summary}
          </p>
        </div>
      </div>

      <div className="container mt-[1rem]">
        {/* First section - Image left, Text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-1">
            <Image
              src={currentProject.image}
              alt={currentProject.title || 'Project image'}
              width={1000}
              height={753}
              className="w-full rounded-lg"
            />
          </div>
          <div className="order-2">
            <article
              dangerouslySetInnerHTML={{ __html: currentProject.body }}
              className="prose min-w-full"
            />
          </div>
        </div>

        {/* Second section (optional) - Text left, Image right */}
        {(currentProject.image2 || currentProject.body2) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-16">
            {currentProject.body2 && (
              <div className="order-2 lg:order-1">
                <article
                  dangerouslySetInnerHTML={{ __html: currentProject.body2 }}
                  className="prose min-w-full"
                />
              </div>
            )}
            {currentProject.image2 && (
              <div className="order-1 lg:order-2">
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
              </div>
            )}
          </div>
        )}

        {/* Navigation section */}
        <div className="navigation flex justify-center gap-6 mt-16">
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
        </div>
      </div>
    </>
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
