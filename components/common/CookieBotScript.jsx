'use client';

import { useEffect } from 'react';

const CookieBotScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'Cookiebot';
    script.src = 'https://consent.cookiebot.com/uc.js';
    script.setAttribute('data-cbid', '008bf995-0224-4cfa-b2ff-4961832b2d91');
    script.setAttribute('data-blockingmode', 'auto');
    script.async = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default CookieBotScript;
