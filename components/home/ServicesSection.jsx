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

const data = [
  {
    id: 1,
    serviceNumber: '01',
    serviceName: 'Web Design',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: MoveUpRight,
    cta: 'About Web Design'
  },
  {
    id: 2,
    serviceNumber: '02',
    serviceName: 'Web Development',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: MoveUpRight,
    cta: 'About Web Development'
  },
  {
    id: 3,
    serviceNumber: '03',
    serviceName: 'Business Applications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: MoveUpRight,
    cta: 'About Business Applications'
  },
  {
    id: 4,
    serviceNumber: '04',
    serviceName: 'Content & SEO',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: MoveUpRight,
    cta: 'About Content & SEO'
  }
];

const ServicesSection = () => {
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-[50px]">
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
            <CardTitle className="text-xl uppercase">
              {item.serviceName}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="mb-4 text-secondary-foreground ">
              {item.description}
            </CardDescription>
          </CardContent>
          <CardFooter>
            {item.icon && (
              <item.icon className="w-8 h-8 text-primary-foreground bg-muted-foreground rounded-full p-2" />
            )}
            <p className="pl-4">{item.cta}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ServicesSection;
