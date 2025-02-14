import Heading from '@/components/common/Heading';
import { getProject, getProjectSlugs } from '@/lib/projects';
import { formatDateString } from '@/lib/date';
import { MoveLeft, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import LoadingState from '@/components/common/Loading-state';
import { fetchData } from '@/lib/utils';
import { InnerHeader } from '@/components/common/InnerHeader';

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
      <InnerHeader
        title={currentProject.title}
        description={currentProject.summary}
      />

      {/* Main content wrapper with consistent spacing */}
      <main>
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
                className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/80"
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
                className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/80"
              >
                <span className="flex gap-2 items-center">
                  Next Project
                  <MoveRight />
                </span>
              </Link>
            ) : (
              <span className="px-4 py-2 bg-primary hover:bg-primary/80 rounded-full cursor-not-allowed flex gap-2 items-center">
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
