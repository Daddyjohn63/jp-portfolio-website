import { poppins } from './fonts';
import '../custom-styles/custom-styles.css';
import './globals.css';
import Header from '@/components/layout/Header';
import { Toaster } from 'sonner';
import { Footer } from '@/components/common/Footer';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
  title: {
    default: 'Web and Prosper',
    template: '%s | Web and Prosper'
  },
  description:
    'Web and Prosper will help you get more clients and grow your business.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        {/* <CookieBotScript /> */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="008bf995-0224-4cfa-b2ff-4961832b2d91"
          data-blockingmode="auto"
          type="text/javascript"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`dark ${poppins.className} overflow-x-hidden`}>
        <Header />
        {children}
        <Toaster position="bottom-center" />
        <Footer />
        <GoogleAnalytics gaId="G-1FLT2HXTTX" />
      </body>
    </html>
  );
}
