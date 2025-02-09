'use client';
import useSticky from '@/hooks/useSticky';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavBar from './NavBar';
import { cn } from '@/lib/utils';
import Image from 'next/image';

import MobileSideBar from './MobileSideBar';
import Logo from './Logo';
import { SocialLinks } from '../common/SocialLinks';

const Header = () => {
  const { sticky } = useSticky(150);
  const pathname = usePathname();
  const isHome = pathname === '/'; // Returns true if on home page

  // const isActive =
  //   (pathname === '/' && href === '/') ||
  //   pathname === href ||
  //   pathname?.startsWith(`${href}/`);

  // Adjust header classes based on the page and scroll position
  const headerClass = cn('w-full z-10 transition-all duration-300', {
    'fixed top-0 left-0 animate-slideDown bg-background/80 backdrop-blur-md border-b border-border/40':
      sticky,
    'absolute top-0 left-0': !sticky && isHome,
    relative: !isHome && !sticky
  });

  // Adjust text color based on the page
  const textColorClass = cn({
    'text-white': !sticky && isHome, // White text only when on home and not sticky
    'text-foreground': sticky || !isHome // Default text color when sticky or not home
  });

  // <span className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 inline-block text-transparent bg-clip-text">
  //   Web Solutions
  // </span>;

  return (
    <>
      {/* Header placeholder - maintains layout when header is fixed */}
      <div className={cn('h-[80px]', { hidden: !sticky })} />

      {/* Actual header */}
      <header className={headerClass}>
        <div
          className={`flex h-[80px] container  items-center justify-between px-9 ${textColorClass}`}
        >
          {/* LOGO START */}
          <Link
            href="/"
            className=" font-semi-bold tracking-tight sm:text-3xl bg-gradient-to-r from-purple-300 via-purple-300 to-purple-300 inline-block text-transparent bg-clip-text"
          >
            <p className=" text-3xl md:text-3xl font-semi-bold bg-gradient-to-r from-purple-600 via-blue-400 to-orange-300 inline-block text-transparent bg-clip-text">
              Web and Prosper
            </p>
          </Link>
          {/* LOGO END */}

          {/* NAVBAR START */}
          <NavBar textColorClass={textColorClass} pathname={pathname} />
          {/* I think am supposed to pass both these props */}
          {/* NAVBAR END */}

          {/* SOCIAL MEDIA START */}

          {/* SOCIAL MEDIA END */}
          {/* ADD SIDEBAR MOBILE HERE */}
          <div className="md:hidden">
            <MobileSideBar pathname={pathname} />
          </div>
          <SocialLinks className="hidden md:flex" iconClassName="w-4 h-4" />
        </div>
      </header>
    </>
  );
};

export default Header;
