import { getWebDesignProcessFlow } from '@/lib/single-types';
import HomeHero from '@/components/home/HomeHero';
import ServicesSection from '@/components/home/ServicesSection';
import { AboutSection } from '@/components/home/AboutSection';
import FeedBack from '@/components/FeedbackTestimonial';
import PortfolioSection from '@/components/home/PortfolioSection';
import { WebDesignProcessFlow } from '@/components/home/WebDesignProcessFlow';
import { CallToAction } from '@/components/common/CallToAction';
import { Mail, Phone } from 'lucide-react';
import { JsonLd } from '@/app/json-ld';
import { homeJsonLd } from '@/app/json-ld/home';

export const metadata = {
  title: 'Freelance Web Developer Sussex | React & Next.js Specialist',
  description:
    'Sussex-based freelance web developer. I build Fast, SEO-friendly websites & apps built with React & Next.js. ☎ 07739 875445 for a free consultation.',
  openGraph: {
    title: 'Freelance Web Developer Sussex | React & Next.js Specialist',
    description:
      'Sussex-based freelance web developer. I build Fast, SEO-friendly websites & apps built with React & Next.js. ☎ 07739 875445 for a free consultation.',
    type: 'website'
  },
  alternates: {
    canonical: 'https://webandprosper.co.uk'
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

export default async function Home() {
  const processFlow = await getWebDesignProcessFlow();

  return (
    <article>
      <JsonLd data={homeJsonLd} />
      {/* Hero Section */}
      <header>
        <section className="xl:min-h-[calc(100vh-100px)]">
          <HomeHero />
        </section>
      </header>

      {/* Main Content */}
      <main className="">
        {/* Services Section */}
        <section className="section-spacing-responsive">
          <ServicesSection />
        </section>

        {/* About Section */}
        <section className="section-spacing-responsive">
          <AboutSection />
        </section>

        {/* Testimonials Section */}
        <section className="section-spacing-lg">
          <FeedBack />
        </section>

        {/* Portfolio Section */}
        <section className="section-spacing-lg">
          <PortfolioSection />
        </section>

        {/* Process Flow Section */}
        <section className="section-spacing-responsive">
          <WebDesignProcessFlow processFlow={processFlow} />
        </section>
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
}
