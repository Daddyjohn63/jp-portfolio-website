import { CtaButton } from '../common/CtaButton';
import { PortfolioCard } from '../common/Portfolio-card';
import { getFeaturedProjects } from '@/lib/projects';

const PortfolioSection = async () => {
  const { projects } = await getFeaturedProjects();

  //TODO: Add a loading state AND validation checks
  return (
    <div className="flex container flex-col gap-10">
      <div className="flex w-full  items-center justify-center flex-col gap-2">
        <h2 className="text-white text-5xl z-100">Selected Work</h2>
        <p className="text-muted-foreground">
          Here are some of the projects I've worked on.
        </p>
      </div>
      <div className="flex w-full pb-[100px] items-center justify-center">
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
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
      <div className="flex w-full items-center justify-center">
        <CtaButton label="See More" />
      </div>
    </div>
  );
};
export default PortfolioSection;
