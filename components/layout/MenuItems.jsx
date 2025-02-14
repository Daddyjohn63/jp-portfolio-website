import { Home, User, Settings, Briefcase, BookOpen, Mail } from 'lucide-react';

export const headerMenuItems = [
  {
    id: 1,
    label: 'home',
    link: '/',
    icon: 'Home'
  },
  {
    id: 2,
    label: 'about',
    link: '/about',
    icon: 'User'
    // submenu: false,
    // subMenuItems: [
    //   {
    //     id: 20,
    //     label: 'History',
    //     link: '/about/history'
    //   },
    //   {
    //     id: 22,
    //     label: 'My CV',
    //     link: '/about/my-cv'
    //   }
    // ]
  },
  {
    id: 3,
    label: 'services',
    link: '/services',
    icon: 'Settings',
    submenu: false
    // subMenuItems: [
    //   {
    //     id: 30,
    //     label: 'Development',
    //     link: '/services/development'
    //   },
    //   { id: 31, label: 'Hosting', link: 'services/hosting' }
    // ]
  },
  {
    id: 4,
    label: 'portfolio',
    link: '/portfolio',
    icon: 'Briefcase'
  },
  {
    id: 5,
    label: 'blog',
    link: '/blog',
    icon: 'BookOpen'
  },
  {
    id: 6,
    label: 'contact',
    link: '/contact',
    icon: 'Mail'
  }
];
