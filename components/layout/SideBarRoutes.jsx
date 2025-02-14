import Link from 'next/link';
import { headerMenuItems } from './MenuItems';
import {
  ChevronDown,
  Home,
  User,
  Settings,
  Briefcase,
  BookOpen,
  Mail
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const SideBarRoutes = () => {
  const pathname = usePathname();
  const isActive = link => {
    return pathname === link ||
      (pathname === '/' && link === '/') ||
      pathname?.startsWith(`${link}/`)
      ? 'active'
      : '';
  };

  //console.log('MOBILE ROUTES', pathname);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = index => {
    // This function toggles the dropdown state, triggering the animation
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const variants = {
    initial: { opacity: 0, scaleY: 0 },
    animate: {
      opacity: 1,
      scaleY: 1,
      height: 'auto',
      transition: { duration: 0.5 }
    },
    exit: { opacity: 0, scaleY: 0, transition: { duration: 0.1 } }
  };

  const iconMap = {
    Home,
    User,
    Settings,
    Briefcase,
    BookOpen,
    Mail
  };

  return (
    <nav className="flex px-3">
      <div className="w-full">
        <ul className="flex flex-col gap-4 text-lg font-medium capitalize">
          {headerMenuItems?.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <li key={index} className="flex flex-col group w-full">
                {item.subMenuItems ? (
                  <>
                    <div
                      className="w-full flex gap-1 cursor-pointer"
                      onClick={() => toggleDropdown(index)}
                    >
                      <span
                        className={cn(
                          'flex items-center hover:text-zinc-500 transition-all duration-500',
                          isActive(item.link) &&
                            'text-sky-700  hover:text-sky-900'
                        )}
                      >
                        {Icon && <Icon className="w-4 h-4 mr-3" />}
                        {item.label}
                      </span>

                      {item.subMenuItems.length > 0 && (
                        <ChevronDown
                          className={`${
                            openDropdownIndex === index
                              ? 'rotate-180'
                              : 'rotate-0'
                          } transition-transform`}
                        />
                      )}
                    </div>
                    <AnimatePresence>
                      {openDropdownIndex === index && (
                        <motion.ul
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          variants={variants}
                          className="origin-top bg-gray-50 rounded-md border-t-3 border-primary max-w-sm shadow-md flex flex-col items-center gap-3 py-6 overflow-hidden"
                        >
                          {item.subMenuItems.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="hover:text-primary px-6 text-center"
                            >
                              <Link
                                href={subItem.link}
                                className="cursor-pointer justify-center w-full"
                              >
                                <span
                                  className={cn(
                                    'flex items-center justify-center hover:text-zinc-500 transition-all duration-500 ',
                                    isActive(subItem.link) &&
                                      'text-sky-700  hover:text-sky-900'
                                  )}
                                >
                                  {subItem.label}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    className="cursor-pointer flex items-center gap-1 w-full"
                    href={item.link}
                  >
                    <span
                      className={cn(
                        'flex items-center hover:text-zinc-500 transition-all duration-500 text-lg pb-3',
                        isActive(item.link) &&
                          'text-primary  hover:text-primary-foreground'
                      )}
                    >
                      {Icon && <Icon className="w-4 h-4 mr-3" />}
                      {item.label}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default SideBarRoutes;
