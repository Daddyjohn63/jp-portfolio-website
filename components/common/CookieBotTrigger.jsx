'use client';

import { useEffect } from 'react';

const CookieBotTrigger = () => {
  useEffect(() => {
    // Small delay to ensure Cookiebot is loaded
    const timer = setTimeout(() => {
      if (
        typeof window.Cookiebot === 'undefined' ||
        !window.Cookiebot.consent.stamp
      ) {
        window.Cookiebot?.renew();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default CookieBotTrigger;
