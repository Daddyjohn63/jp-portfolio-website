//import LondonHeroWithSkyline from '@/components/landing/london-hero-skyline';
import { CompanyLogos } from '@/components/common/company-logos';
import LandingHeroLondon from '@/components/landing/landing-hero-london';
import ServicesSectionLondon from '@/components/landing/ServicesSectionLondon';

export const revalidate = 0;

const WebDeveloperLondon = () => {
  return (
    <article>
      <section className="xl:min-h-[calc(100vh-100px)]">
        <LandingHeroLondon />
      </section>
      <main className="">
        <section className="section-spacing-responsive">
          <ServicesSectionLondon />
        </section>
        <section className="section-spacing-responsive">
          <CompanyLogos />
        </section>
      </main>
    </article>
  );
};

export default WebDeveloperLondon;
