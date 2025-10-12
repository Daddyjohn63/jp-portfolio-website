import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';

const data = [
  {
    id: 1,
    serviceNumber: '01',
    serviceName: 'Websites',
    description:
      'Fast, secure, SEO friendly websites that are designed to convert visitors into loyal customers. From sleek landing pages, to powerful e-commerce stores.',
    icon: MoveUpRight,
    cta: 'About Web Development',
    href: '/services/'
  },
  {
    id: 2,
    serviceNumber: '02',
    serviceName: 'Business Applications',
    description:
      'Bespoke business applications crafted to streamline operations and boost profitability. From powerful dashboards and AI Agents, to customer relationship management.',
    icon: MoveUpRight,
    cta: 'About Business Applications',
    href: '/services/'
  },
  {
    id: 3,
    serviceNumber: '03',
    serviceName: 'Contract Services',
    description:
      'Think of me as an extension of your team. I will bring the front-end and back-end expertise you need to deliver everything from web design to complex business applications.',
    icon: MoveUpRight,
    cta: 'About Contract Services',
    href: '/services/'
  }
];

const ServicesSectionLondon = () => {
  return (
    <section className="relative overflow-hidden">
      {/* bg effect */}
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-15rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/500] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'
          }}
        />
      </div>
      {/* bg effect end */}
      {/* <Reveal from={200}> */}
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className=" mt-4 font-bold  text-center px-4">Services</h2>
        <p className="text-muted-foreground text-xl text-center px-4 md:w-1/3">
          I offer a range of services to help you grow your business.
        </p>
      </div>
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
                    <span className="text-sm text-muted-foreground">
                      {item.serviceNumber}
                    </span>
                  </div>

                  <CardTitle className=" tracking-wide text-lg sm:text-xl">
                    <Link href={item.href}>
                      <h3 className="hover:text-accent transition-colors duration-300">
                        {item.serviceName}
                      </h3>
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
      {/* </Reveal> */}
    </section>
  );
};

export default ServicesSectionLondon;
