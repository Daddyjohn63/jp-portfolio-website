//import LondonHeroWithSkyline from '@/components/landing/london-hero-skyline';
import { CallToAction } from '@/components/common/CallToAction';
import { CompanyLogos } from '@/components/common/company-logos';
import FAQ from '@/components/common/FAQ';
import PortfolioSection from '@/components/home/PortfolioSection';
import LandingHeroLondon from '@/components/landing/landing-hero-london';
import ServicesSectionLondon from '@/components/landing/ServicesSectionLondon';
import { Mail, Phone } from 'lucide-react';

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
        {/* Portfolio Section */}
        <section className="section-spacing-lg">
          <PortfolioSection />
        </section>

        {/* FAQ Section */}
        <FAQ />

        <section className="section-spacing-responsive">
          <CallToAction
            title="Let's talk about you!"
            description="I'm here to help you with your project."
            buttonLabel="Contact me"
            buttonLink="/contact"
            buttonColor="bg-primary"
            buttonTextColor="text-white"
            email="john@webandprosper.co.uk"
            phone="+44 7739 875445"
            emailIcon={<Mail />}
            phoneIcon={<Phone />}
          />
        </section>
      </main>
    </article>
  );
};

export default WebDeveloperLondon;
