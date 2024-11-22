import { getWebDesignProcessFlow } from '@/lib/single-types';

import HomeHero from '@/components/home/HomeHero';
import HomeSectionOne from '@/components/home/HomeSectionOne';
import PortfolioSection from '@/components/home/PortfolioSection';
// import HomeHero from '@/components/home/HomeHeroCopy';
import SomeText from '@/components/home/SomeText';

const processFlow = await getWebDesignProcessFlow();
console.log('Process Flow in Home:', processFlow);

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeSectionOne />
      {/* <SomeText /> */}
      <PortfolioSection />
    </>
  );
}
