import { CtaButton } from '../common/CtaButton';
import { PortfolioCard } from '../common/Portfolio-card';
import { getFeaturedProjects } from '@/lib/projects';

const PortfolioSection = async () => {
  const { projects } = await getFeaturedProjects();

  //TODO: Add a loading state AND validation checks
  return (
    <div className="py-[50px]">
      <div className="flex container justify-between items-center py-16">
        <h2 className="text-white text-5xl z-100">Selected Work</h2>
        <div className="flex items-center gap-2">
          <CtaButton label="See More" />
        </div>
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
export default PortfolioSection;
