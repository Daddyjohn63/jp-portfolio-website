import { poppins } from './fonts';
import '../custom-styles/custom-styles.css';
import './globals.css';
import Header from '@/components/layout/Header';
// import { Toaster } from 'sonner';
import { Footer } from '@/components/common/Footer';
//import NextTopLoader from 'nextjs-toploader';
import { CookieModal } from '@/components/common/CookieModal';
import { CookieButton } from '@/components/common/CookieButton';

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
        <link
          rel="preload"
          as="image"
          href="/images/chameleon-mob-portrait.jpg"
          media="(max-width: 768px)"
        />
      </head>
      <body className={`dark ${poppins.className} overflow-x-hidden`}>
        {/* <NextTopLoader color="#ffe4c4" /> */}
        <Header />
        {children}
        {/* <Toaster position="bottom-center" /> */}
        <CookieButton />
        <Footer />
        <CookieModal />
      </body>
    </html>
  );
}
