'use client';
import { useEffect } from 'react';

export const GoogleAnalytics = () => {
  useEffect(() => {
    // Check if user has consented
    const consent = localStorage.getItem('website_cookie_consent');
    const consentExpiry = localStorage.getItem('website_cookie_consent_expiry');

    if (
      consent === 'true' &&
      consentExpiry &&
      new Date().getTime() <= parseInt(consentExpiry)
    ) {
      // Initialize data layer
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }

      // Create and load the GA script
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
      script.async = true;

      // Wait for script to load before initializing GA
      script.onload = () => {
        gtag('js', new Date());
        gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
          send_page_view: true,
          cookie_flags: 'SameSite=None;Secure'
        });
      };

      document.head.appendChild(script);

      // Cleanup function
      return () => {
        const existingScript = document.querySelector(
          'script[src*="googletagmanager.com/gtag/js"]'
        );
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, []); // Empty dependency array means this runs once on mount

  return null; // This component doesn't render anything
};
