import { getWebDesignProcessFlow } from '@/lib/single-types';

import HomeHeroTest from '@/components/home/HomeHero-test';
import HomeSectionOne from '@/components/home/HomeSectionOne';
import PortfolioSection from '@/components/home/PortfolioSection';
// import HomeHero from '@/components/home/HomeHeroCopy';
import SomeText from '@/components/home/SomeText';
import { WebDesignProcessFlow } from '@/components/home/WebDesignProcessFlow';
import HomeHero from '@/components/home/HomeHero';
import ServicesSection from '@/components/home/ServicesSection';
import FeedBack from '@/components/FeedbackTestimonial';
import HomeHeroCopy from '@/components/home/HomeHero-copy';
import { Wave } from '@/components/svgs/Effects';
import { AboutSection } from '@/components/home/AboutSection';

// const processFlow = await getWebDesignProcessFlow();
// console.log('Process Flow in Home:', processFlow);

export default async function Home() {
  //get the process flow data from Strapi.
  const processFlow = await getWebDesignProcessFlow();
  return (
    <>
      <HomeHero />

      <ServicesSection />
      {/* <HomeSectionOne /> */}
      <AboutSection />
      <FeedBack />
      {/* <SomeText /> */}
      <PortfolioSection />
      <WebDesignProcessFlow processFlow={processFlow} />
    </>
  );
}
