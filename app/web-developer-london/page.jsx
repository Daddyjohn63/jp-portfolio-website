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

export const metadata = {
  title: {
    absolute: 'Freelance Web Developer London | React & Next.js Expert'
  },
  description:
    'Freelance web developer John Paul working in London. Specializing in React, Next.js, and full-stack development. 5+ years experience with corporate background. ☎ 07739 875445 for consultation.',
  openGraph: {
    title: 'Freelance Web Developer London | React & Next.js Expert',
    description:
      'Freelance web developer John Paul working in London. Specializing in React, Next.js, and full-stack development. 5+ years experience with corporate background. ☎ 07739 875445 for consultation.',
    url: 'https://webandprosper.co.uk/web-developer-london',
    siteName: 'Web and Prosper',
    images: [
      {
        url: '/open-graph/open-graph.jpg',
        width: 1200,
        height: 630,
        alt: 'Freelance Web Developer London - John Paul'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freelance Web Developer London | React & Next.js Expert',
    description:
      'Freelance web developer John Paul working in London. Specializing in React, Next.js, and full-stack development. 5+ years experience with corporate background.',
    images: ['/open-graph/open-graph.jpg']
  },
  alternates: {
    canonical: 'https://webandprosper.co.uk/web-developer-london'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

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
