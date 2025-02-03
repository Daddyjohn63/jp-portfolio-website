import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { CloudArrowUpIcon } from '@heroicons/react/20/solid';
import { Button } from '../ui/button';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';

const data = [
  // {
  //   id: 1,
  //   serviceNumber: '01',
  //   serviceName: 'Web Design',
  //   description:
  //     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  //   icon: MoveUpRight,
  //   cta: 'About Web Design'
  // },
  {
    id: 1,
    serviceNumber: '01',
    serviceName: 'Websites',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: MoveUpRight,
    cta: 'About Web Development',
    href: '/services/'
  },
  {
    id: 2,
    serviceNumber: '02',
    serviceName: 'Business Applications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: MoveUpRight,
    cta: 'About Business Applications',
    href: '/services/'
  },
  {
    id: 3,
    serviceNumber: '03',
    serviceName: 'Contract Services',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: MoveUpRight,
    cta: 'About Contract Services',
    href: '/services/'
  }
];

const ServicesSection = () => {
  return (
    <div className="relative">
      <div className="container px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {data.map(item => (
            <Card
              className="bg-customShades-shade2 flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
              key={item.id}
            >
              <CardHeader className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-500">
                    {item.serviceNumber}
                  </span>
                </div>
                <CardTitle className="uppercase tracking-wide text-lg sm:text-xl">
                  <Link href={item.href}>
                    <h2 className="hover:text-accent transition-colors duration-300">
                      {item.serviceName}
                    </h2>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-2">
                <CardDescription className="text-secondary-foreground text-sm sm:text-base">
                  <p>{item.description}</p>
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-2">
                <Link
                  href={item.href}
                  className="group flex items-center hover:translate-x-2 transition-transform duration-300"
                >
                  {item.icon && (
                    <item.icon className="w-8 h-8 text-primary-foreground bg-muted-foreground group-hover:bg-accent rounded-full p-2 transition duration-300 group-hover:rotate-45" />
                  )}
                  <p className="pl-4 font-medium transition-colors duration-300 group-hover:text-accent">
                    {item.cta}
                  </p>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
