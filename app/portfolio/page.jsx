import { PortfolioCard } from '@/components/common/Portfolio-card';
import { CtaButton } from '@/components/common/CtaButton';
import PortfolioSection from '@/components/home/PortfolioSection';

import { getProjects } from '@/lib/projects';

export const metadata = {
  title: 'Portfolio',
  description: 'My portfolio of projects'
};

const PAGE_SIZE = 6;

const PortfolioPosts = async () => {
  const { projects, pageCount } = await getProjects(PAGE_SIZE, 1);
  console.log('projects', projects);

  if (!projects?.length) {
    return <p>No projects found</p>;
  }

  return (
    <div className="py-[50px]">
      <div className="flex container justify-between items-center py-16">
        <h2 className="text-white text-5xl z-100">Selected Work</h2>
      </div>
      <div className="flex pb-[100px] items-center justify-center">
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
      </div>
    </div>
  );
};

export default PortfolioPosts;
