'use client';
import PortfolioSection from '@/components/home/PortfolioSection';
import { useEffect } from 'react';
import { getProjects } from '@/lib/projects';

const PortfolioPage = () => {
  useEffect(() => {
    getProjects(10, 1).then(result => console.log(result));
  }, []);
  return (
    <div>
      <PortfolioSection />
    </div>
  );
};
export default PortfolioPage;
