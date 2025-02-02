import AboutIntro from '@/components/about/AboutIntro';
import SkillsShowcase from '@/components/about/SkillsShowcase';
import { InnerHeader } from '@/components/common/InnerHeader';

const AboutPage = () => {
  return (
    <article>
      {/* Hero Section */}

      <InnerHeader
        title="About Me"
        description="Full-stack developer specializing in modern web solutions and AI integration"
      />

      {/* Main content wrapper with consistent spacing */}
      <main className="">
        <div className="container">
          {/* About Intro Section */}
          <section className="section-spacing-sm">
            <AboutIntro />
          </section>

          {/* Skills Showcase Section */}
          <section className="section-spacing-md">
            <SkillsShowcase />
          </section>
        </div>
      </main>
    </article>
  );
};

export default AboutPage;
