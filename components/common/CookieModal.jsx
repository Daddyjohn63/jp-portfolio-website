'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';
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

export const CookieModal = ({ isOpen, onOpenChange }) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [shouldLoadGA, setShouldLoadGA] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('website_cookie_consent');
    const consentExpiry = localStorage.getItem('website_cookie_consent_expiry');

    if (
      !consent ||
      !consentExpiry ||
      new Date().getTime() > parseInt(consentExpiry)
    ) {
      setInternalIsOpen(true);
    } else if (consent === 'true') {
      setShouldLoadGA(true);
    }
  }, []);

  const clearGoogleAnalytics = () => {
    // Disable GA
    window['ga-disable-' + process.env.NEXT_PUBLIC_GA_ID] = true;

    // Clear GA cookies
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name =
        eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
      if (
        name.includes('_ga') ||
        name.includes('_gid') ||
        name.includes('_gat')
      ) {
        document.cookie =
          name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
      }
    }

    // Clear GA data layer
    window.dataLayer = [];
  };

  const handleAccept = () => {
    // Set consent with 1 year expiration
    const oneYearFromNow = new Date().getTime() + 365 * 24 * 60 * 60 * 1000;
    localStorage.setItem('website_cookie_consent', 'true');
    localStorage.setItem(
      'website_cookie_consent_expiry',
      oneYearFromNow.toString()
    );

    // Remove the disable flag
    window['ga-disable-' + process.env.NEXT_PUBLIC_GA_ID] = false;
    setShouldLoadGA(true);

    setInternalIsOpen(false);
    onOpenChange?.(false);
  };

  const handleDecline = () => {
    // Remove stored consent and expiry
    localStorage.removeItem('website_cookie_consent');
    localStorage.removeItem('website_cookie_consent_expiry');

    // Clear all Google Analytics data and cookies
    clearGoogleAnalytics();
    setShouldLoadGA(false);

    setInternalIsOpen(false);
    onOpenChange?.(false);
  };

  // Use controlled state if provided, otherwise use internal state
  const isModalOpen = isOpen ?? internalIsOpen;
  const handleOpenChange = open => {
    // If the modal is being closed and no choice has been made yet
    if (!open && !localStorage.getItem('website_cookie_consent')) {
      handleAccept();
    } else {
      setInternalIsOpen(open);
      onOpenChange?.(open);
    }
  };

  return (
    <>
      {shouldLoadGA && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
          onLoad={() => {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              window.dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
              send_page_view: true,
              cookie_flags:
                'SameSite=Lax;Secure;domain=' + window.location.hostname,
              cookie_domain: window.location.hostname
            });
          }}
        />
      )}
      <Dialog open={isModalOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[425px] flex flex-col gap-8">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Cookie className="w-6 h-6" /> <h4>Cookie Consent</h4>
            </DialogTitle>
            <DialogDescription className="text-sm leading-6">
              <div className="flex flex-col gap-2">
                <p className="text-sm leading-6">
                  This website uses cookies so I can see which of my pages are
                  the most popular. You can always change your mind later.
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
    </>
  );
};
