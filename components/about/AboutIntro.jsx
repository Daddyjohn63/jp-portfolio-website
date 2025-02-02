import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import Reveal from '@/components/common/ScrollAnimation';
import { aboutUsData } from './AboutUsData';

import { CtaButton } from '@/components/common/CtaButton';

const AboutIntro = () => {
  return (
    <div>
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
          </div>
        </Reveal>
        {/* ABOUT IMAGE SIDE */}

        {/* ABOUT CONTENT */}
        {/* Text Section and buttons */}
        <Reveal from={200} className="lg:w-1/3 lg:pr-8 flex-grow">
          <div className="w-full">
            <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
              Innovative Web Developer | Problem-Solver | Business Strategist{' '}
              <span className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-purple-600 via-blue-400 to-orange-300 inline-block text-transparent bg-clip-text"></span>
            </h1>
            <p className="mt-6 text-xl leading-8">
              I design, build, and optimise powerful web applications that solve
              real business challenges. With expertise in React, Next.js,
              Node.js, and modern databases, I craft tailored digital solutions
              that are scalable, efficient, and built for growth. Backed by five
              years in web development and a career leading global IT projects
              at IBM, Rolls-Royce, and Ericsson, I bring a strategic mindset to
              every project. From SaaS platforms to AI-driven applications, I
              turn complex ideas into seamless, high-performing systems.
            </p>
            {/* <ul className="flex flex-col mt-3 gap-1">
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
            </ul> */}
            <div className="mt-10 flex items-center gap-x-6">
              <CtaButton label="Contact me" href="/contact" />
              <CtaButton label="View my work" href="/portfolio" />
            </div>
          </div>
        </Reveal>
        {/* ABOUT CONTENT */}
      </div>
    </div>
  );
};
export default AboutIntro;
