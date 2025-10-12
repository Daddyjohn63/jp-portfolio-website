//import LondonHeroWithSkyline from '@/components/landing/london-hero-skyline';
import { CallToAction } from '@/components/common/CallToAction';
import { CompanyLogos } from '@/components/common/company-logos';
import FAQ from '@/components/common/FAQ';
import FeedBack from '@/components/FeedbackTestimonial';
import PortfolioSection from '@/components/home/PortfolioSection';
import HomeHeroLondon from '@/components/landing/HomeHeroLondon';
import ServicesSectionLondon from '@/components/landing/ServicesSectionLondon';
import { Mail, Phone } from 'lucide-react';
import { JsonLd } from '@/app/json-ld';
import { homeJsonLd } from '@/app/json-ld/home';
import { faqJsonLd } from '@/app/json-ld/faq';
import { testimonialsJsonLd } from '@/app/json-ld/testimonials';

export const revalidate = 0;

const WebDeveloperLondon = () => {
  return (
    <article>
      <JsonLd data={homeJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={testimonialsJsonLd} />
      <section className="xl:min-h-[calc(100vh-100px)]">
        <HomeHeroLondon />
      </section>
      {/* <section className="xl:min-h-[calc(100vh-100px)]">
        <LandingHeroLondon />
      </section> */}
      <main className="">
        <section className="section-spacing-responsive">
          <ServicesSectionLondon />
        </section>
        <section className="section-spacing-responsive">
          <CompanyLogos />
        </section>
        {/* Testimonials Section */}
        <section className="section-spacing-lg">
          <FeedBack />
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
