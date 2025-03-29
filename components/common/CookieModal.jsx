'use client';
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export const CookieModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('website_cookie_consent');
    if (!consent) {
      setIsOpen(true);
    } else if (consent === 'true') {
      loadGoogleAnalytics();
    }
  }, []);

  const loadGoogleAnalytics = () => {
    // Create and load the GA script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize GA
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', process.env.NEXT_PUBLIC_GA_ID);
  };

  const handleAccept = () => {
    localStorage.setItem('website_cookie_consent', 'true');
    loadGoogleAnalytics();
    setIsOpen(false);
  };

  const handleDecline = () => {
    localStorage.setItem('website_cookie_consent', 'false');
    // Disable Google Analytics
    window['ga-disable-' + process.env.NEXT_PUBLIC_GA_ID] = true;
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cookie Consent</DialogTitle>
          <DialogDescription>
            This website uses cookies to enhance your experience. By continuing
            to visit this site you agree to our use of cookies.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-2">
          <Button
            variant="outline"
            onClick={handleDecline}
            className="bg-[#2B373B] text-white hover:bg-[#2B373B]/90"
          >
            Decline
          </Button>
          <Button
            onClick={handleAccept}
            className="bg-[#ffe4c4] text-black hover:bg-[#ffe4c4]/90"
          >
            Accept
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
