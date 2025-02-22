import { PortfolioCard } from '@/components/common/Portfolio-card';
import { getProjects } from '@/lib/projects';
import { fetchData } from '@/lib/utils';
import { Suspense } from 'react';
import LoadingState from '@/components/common/Loading-state';
import { PagePagination } from '@/components/common/Pagination';
import { NotFoundError, CMSError } from '@/lib/errors';
import { InnerHeader } from '@/components/common/InnerHeader';

export const metadata = {
  title: 'Portfolio',
  description: 'My portfolio of projects'
};

const PAGE_SIZE = 6;

const PortfolioPosts = async ({ searchParams }) => {
  try {
    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    if (isNaN(page) || page < 1) {
      throw new CMSError(
        'Invalid page number',
        400,
        'Page number must be a positive integer'
      );
    }

    const { data, error } = await fetchData(getProjects, PAGE_SIZE, page);

    if (error) {
      throw error;
    }

    const { projects, pageCount } = data;

    if (!projects?.length) {
      throw new NotFoundError('No projects found');
    }

    if (page > pageCount) {
      throw new NotFoundError('Page not found');
    }

    return (
      <div>
        <div className="flex container justify-between items-center">
          {/* <h1 className=" text-5xl z-100">Selected Work</h1> */}
          <InnerHeader
            title="Selected Work"
            description="Here are some of my projects"
          />
        </div>
        <div className="flex pb-[100px] items-center justify-center flex-col">
          <div className="container grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(project => (
              <PortfolioCard
                key={project?.slug}
                image={project?.image}
                alt={project?.alternativeText || project?.title}
                title={project?.title}
                summary={project?.summary}
                slug={project?.slug}
              />
            ))}
          </div>
          <div className="mt-8">
            <PagePagination
              currentPage={page}
              pageCount={pageCount}
              basePath="/portfolio"
            />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    throw error;
  }
};

export default function Page({ searchParams }) {
  return (
    <Suspense fallback={<LoadingState />}>
      <PortfolioPosts searchParams={searchParams} />
    </Suspense>
  );
}
