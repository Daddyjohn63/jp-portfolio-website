import { getWebDesignProcessFlow } from '@/lib/single-types';

import HomeHero from '@/components/home/HomeHero';
import HomeSectionOne from '@/components/home/HomeSectionOne';
import PortfolioSection from '@/components/home/PortfolioSection';
// import HomeHero from '@/components/home/HomeHeroCopy';
import SomeText from '@/components/home/SomeText';
import { WebDesignProcessFlow } from '@/components/home/WebDesignProcessFlow';

// const processFlow = await getWebDesignProcessFlow();
// console.log('Process Flow in Home:', processFlow);

export default async function Home() {
  //get the process flow data from Strapi.
  const processFlow = await getWebDesignProcessFlow();
  return (
    <>
      <HomeHero />
      <HomeSectionOne />
      {/* <SomeText /> */}
      <PortfolioSection />
      <WebDesignProcessFlow processFlow={processFlow} />
    </>
  );
}
