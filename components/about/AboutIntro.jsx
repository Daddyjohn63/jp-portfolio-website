import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import Reveal from '@/components/common/ScrollAnimation';
import Title from '@/components/common/Title';
import { aboutUsData } from './AboutUsData';
import Link from 'next/link';
import { MoveUpRight, Star, MoveRight } from 'lucide-react';
import { CtaButton } from '../common/Cta-button';

const AboutIntro = () => {
  return (
    <div className="">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:gap-16 gap-10 items-center">
          {/* ABOUT IMAGE SIDE */}
          <Reveal from={200}>
            <div className="grid grid-cols-1 gap-5 w-full relative h-fit">
              {aboutUsData?.aboutImage?.map((img, index) => (
                <Reveal from={100} key={index}>
                  <div className="image">
                    <Image
                      src={img}
                      alt="About Image"
                      className={twMerge(
                        'w-full h-full sm:min-h-[550px] min-h-[450px] object-cover rounded-lg',
                        index === 1 && 'mt-20'
                      )}
                      width={550}
                      height={550}
                      priority
                    />
                  </div>
                </Reveal>
              ))}
              {/* <div className="flex items-center gap-3 w-fit py-4 px-6 bg-primary absolute bottom-5 left-1/2 -translate-x-1/2 text-gray-100 rounded-md">
                <h2 className="text-6xl font-bold">6</h2>
                <p className="text-2xl">Years Of Journey</p>
              </div> */}
            </div>
          </Reveal>
          {/* ABOUT IMAGE SIDE */}

          {/* ABOUT CONTENT */}
          {/* Text Section and buttons */}
          <Reveal from={200} className="lg:w-1/3 lg:pr-8 flex-grow">
            <div className="w-full">
              {/* <Link href="#" className="inline-flex space-x-6">
                <p className="flex items-center gap-1 rounded-full bg-muted-foreground/10 px-3 py-1 text-sm font-semibold leading-6 ring-1 ring-inset">
                  5 <Star className="size-3 fill-yellow-600" /> Rated on Google
                </p>
              </Link> */}
              <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
                Transforming Ideas into Powerful{' '}
                <span className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-purple-600 via-blue-400 to-orange-300 inline-block text-transparent bg-clip-text">
                  Web Solutions
                </span>
              </h1>
              <p className="mt-6 text-xl leading-8">
                Adapt and stay ahead of the competition with modern, scalable
                web applications that will convert new business.
              </p>
              <ul className="flex flex-col mt-3 gap-1">
                <li className="flex items-center gap-1">
                  <MoveRight className="size-5 text-muted-foreground mr-2" />
                  Websites that convert
                </li>
                <li className="flex items-center gap-1">
                  <MoveRight className="size-5 text-muted-foreground mr-2" />
                  Business applications that will increase productivity
                </li>
                <li className="flex items-center gap-1">
                  <MoveRight className="size-5 text-muted-foreground mr-2" />
                  AI and Chatbot solutions
                </li>
              </ul>
              <div className="mt-10 flex items-center gap-x-6">
                <CtaButton label="Contact me" />
                <Link
                  className="group flex items-center gap-2 bg-transparent rounded-3xl border border-muted-foreground/50 px-3 py-2
                    transition-all duration-300 hover:scale-105 hover:border-accent hover:shadow-[0_0_10px_rgba(167,139,250,0.3)]"
                  href="#"
                >
                  <MoveUpRight
                    className="w-8 h-8 text-primary-foreground bg-accent rounded-full p-2 
                    transition-transform duration-300 group-hover:rotate-45"
                  />
                  <p className="text-white text-xl z-100 pl-2 transition-colors duration-300 group-hover:text-accent">
                    View my work
                  </p>
                </Link>
              </div>
            </div>
          </Reveal>
          {/* ABOUT CONTENT */}
        </div>
      </div>
    </div>
  );
};
export default AboutIntro;
