import { getWebDesignProcessFlow } from '@/lib/single-types';
import HomeHero from '@/components/home/HomeHero';
import ServicesSection from '@/components/home/ServicesSection';
import { AboutSection } from '@/components/home/AboutSection';
import FeedBack from '@/components/FeedbackTestimonial';
import PortfolioSection from '@/components/home/PortfolioSection';
import { WebDesignProcessFlow } from '@/components/home/WebDesignProcessFlow';

export default async function Home() {
  const processFlow = await getWebDesignProcessFlow();

  return (
    <article>
      {/* Hero Section */}
      <header>
        <section className="min-h-[calc(100vh-100px)]  ">
          <HomeHero />
        </section>
      </header>

      {/* Main Content */}
      <main className="section-padding-lg">
        {/* Services Section */}
        <section className="section-spacing-md">
          <ServicesSection />
        </section>

        {/* About Section */}
        <section className="section-spacing-md">
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
        <section className="section-spacing-md">
          <WebDesignProcessFlow processFlow={processFlow} />
        </section>
      </main>
    </article>
  );
}
