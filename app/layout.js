// import { Inter } from 'next/font/google';
import { afacad } from './fonts';
import '../custom-styles/custom-styles.css';
import './globals.css';
import Header from '@/components/layout/Header';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Portfolio Website',
    template: '%s | Portfolio Website'
  },
  description: 'Generated by John Paul'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={afacad.variable} suppressHydrationWarning>
      <body className={afacad.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
