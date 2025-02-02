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
    href: '/services/web-development'
  },
  {
    id: 2,
    serviceNumber: '02',
    serviceName: 'Business Applications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: MoveUpRight,
    cta: 'About Business Applications',
    href: '/services/business-applications'
  },
  {
    id: 3,
    serviceNumber: '03',
    serviceName: 'Content & SEO',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: MoveUpRight,
    cta: 'About Content & SEO',
    href: '/services/content-seo'
  }
];

const ServicesSection = () => {
  return (
    <>
      <div className="relative">
        {/* Blue Hazy Light Effect */}
        {/* <div
          className="absolute left-[calc(50%-4rem)] top-[10px] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-5rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                'polygon( 73.6% 51.7%, 91.7% 11.8%, 100% 46.4%,97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'
            }}
          />
        </div> */}

        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-[50px]">
          {data.map(item => (
            <Card
              className=" bg-customShades-shade2 flex flex-col h-full"
              key={item.id}
            >
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">
                    {item.serviceNumber}
                  </span>
                </div>
                <CardTitle className="uppercase tracking-wide">
                  <Link href={item.href}>
                    <h2 className=" hover:text-accent">{item.serviceName}</h2>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="mb-4 text-secondary-foreground ">
                  <p>{item.description}</p>
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link href={item.href} className=" group flex items-center">
                  {item.icon && (
                    <item.icon className="w-8 h-8 text-primary-foreground bg-muted-foreground group-hover:bg-accent rounded-full p-2 transition-transform duration-300 group-hover:rotate-45" />
                  )}
                  <p className="pl-4  transition-colors duration-300 group-hover:text-accent">
                    {item.cta}
                  </p>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
