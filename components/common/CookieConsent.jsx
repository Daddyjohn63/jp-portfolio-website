'use client';

import { useState, useEffect } from 'react';
import { CtaButton } from '@/components/common/CtaButton'; // Fixed: Using named import and correct casing

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = accepted => {
    // Store the user's choice (true/false)
    localStorage.setItem('cookieConsent', accepted.toString());
    // Store preference for Google Analytics
    localStorage.setItem('ga-disabled', (!accepted).toString());
    setIsVisible(false);

    // Reload page to apply analytics preferences
    window.location.reload();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-4 shadow-lg z-50">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300">
          <p className="mb-2">
            We use cookies to analyze our website traffic. You can choose to
            accept or decline these cookies.
          </p>
          <p className="text-xs">
            We only use Google Analytics to understand how our site is used.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => handleConsent(false)}
            className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
          >
            Decline
          </button>
          <div onClick={() => handleConsent(true)}>
            <CtaButton href="#" label="Accept" />
          </div>
        </div>
      </div>
    </div>
  );
}
