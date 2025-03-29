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
import { Cookie } from 'lucide-react';
import Link from 'next/link';

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
      <DialogContent className="sm:max-w-[425px] flex flex-col gap-8">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Cookie className="w-6 h-6" /> <h4>Cookie Consent</h4>
          </DialogTitle>
          <DialogDescription className="text-sm leading-6">
            <div className="flex flex-col gap-2">
              <p className="text-sm leading-6">
                This website uses cookies so I can see which of my pages are the
                most popular. You can always change your mind later.
              </p>
              <Link
                className="text-sm leading-6 underline hover:text-gray-600"
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </Link>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-2 w-full">
          <Button
            variant="outline"
            onClick={handleDecline}
            className="bg-[#2B373B] text-white hover:bg-[#2B373B]/90 flex-1"
          >
            Decline
          </Button>
          <Button
            onClick={handleAccept}
            className="bg-[#ffe4c4] text-black hover:bg-[#ffe4c4]/90 flex-1"
          >
            Accept
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
