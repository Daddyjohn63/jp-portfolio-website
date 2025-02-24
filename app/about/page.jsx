import AboutIntro from '@/components/about/AboutIntro';
import SkillsShowcase from '@/components/about/SkillsShowcase';
import { CallToAction } from '@/components/common/CallToAction';
import { InnerHeader } from '@/components/common/InnerHeader';

export const metadata = {
  title: 'About | Web and Prosper',
  description:
    'Full-stack developer specialising in modern web solutions and AI integration. Learn about my experience and approach to web development.'
};

const AboutPage = () => {
  return (
    <article>
      {/* Hero Section */}

      <InnerHeader
        title="About Me"
        description="Full-stack developer specializing in modern web solutions and AI integration"
      />

      {/* Main content wrapper with consistent spacing */}
      <main>
        <div className="container">
          {/* About Intro Section */}
          <section className="">
            <AboutIntro />
          </section>

          {/* Skills Showcase Section */}
          <section className="section-spacing-md">
            <SkillsShowcase />
          </section>

          {/* Call to Action Section */}
          <section className="section-spacing-lg">
            <CallToAction
              title="Let's Work Together"
              description="I'm always looking for new and exciting projects."
              buttonLabel="Get in Touch"
              buttonLink="/contact"
              buttonColor="bg-primary"
            />
          </section>
        </div>
      </main>
    </article>
  );
};

export default AboutPage;
