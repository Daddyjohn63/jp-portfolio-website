import { getWebDesignProcessFlow } from '@/lib/single-types';
import HomeHero from '@/components/home/HomeHero';
import ServicesSection from '@/components/home/ServicesSection';
import { AboutSection } from '@/components/home/AboutSection';
import FeedBack from '@/components/FeedbackTestimonial';
import PortfolioSection from '@/components/home/PortfolioSection';
import { WebDesignProcessFlow } from '@/components/home/WebDesignProcessFlow';
import { CallToAction } from '@/components/common/CallToAction';
import { Mail, Phone } from 'lucide-react';

export const metadata = {
  title: 'Web Developer Sussex | Websites & Applications that Deliver',
  description:
    'Looking for a reliable web developer in Sussex? I build fast, secure websites and powerful web applications that drive growth. Get a free consultation today!.'
};

export default async function Home() {
  const processFlow = await getWebDesignProcessFlow();

  return (
    <article>
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
            email="john@webandprosper.com"
            phone="+44 7739 875445"
            emailIcon={<Mail />}
            phoneIcon={<Phone />}
          />
        </section>
      </main>
    </article>
  );
}
