'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const ScrollToTop = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};
