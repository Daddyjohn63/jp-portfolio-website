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
    <div className="container mt-[1rem]">
      <div>
        <Heading>{currentProject.title}</Heading>
      </div>
      <Image
        src={currentProject.image}
        alt={currentProject.title || 'Project image'}
        width={1000}
        height={753}
        className="w-full rounded-lg"
      />
      <div className="w-full mt-[2rem] pb-[2rem]">
        <article
          dangerouslySetInnerHTML={{ __html: currentProject.body }}
          className="prose min-w-full"
        />
      </div>
      {/* navigation */}
      <div className="navigation flex justify-center gap-6">
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
