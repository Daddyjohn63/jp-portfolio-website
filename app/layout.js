// import { Inter } from 'next/font/google';
import { poppins } from './fonts';

import '../custom-styles/custom-styles.css';
import './globals.css';
import Header from '@/components/layout/Header';
import { Toaster } from 'sonner';
import { Footer } from '@/components/common/Footer';

// const inter = Inter({ subsets: ['latin'] });

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

// export const metadata = {
//   robots: {
//     index: false,
//     follow: false,
//     nocache: true,
//     googleBot: {
//       index: false,
//       follow: false,
//       noimageindex: true
//     }
//   }
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className={`dark ${poppins.className} overflow-x-hidden`}>
        <Header />
        {children}
        <Toaster position="bottom-center" />
        <Footer />
      </body>
    </html>
  );
}
