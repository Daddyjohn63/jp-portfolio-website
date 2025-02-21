import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import Reveal from '@/components/common/ScrollAnimation';

import { CtaButton } from '@/components/common/CtaButton';

const AboutIntro = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:gap-16 gap-10 items-center">
        {/* ABOUT IMAGE SIDE */}
        <Reveal from={200}>
          <div className="grid grid-cols-1 gap-5 w-full relative h-fit">
            <div className="image">
              <Image
                src="/images/john-paul-v1.jpg"
                alt="About Image"
                className="w-full h-full sm:min-h-[550px] min-h-[450px] object-cover rounded-lg"
                width={800}
                height={600}
                priority
              />
            </div>
          </div>
        </Reveal>
        {/* ABOUT IMAGE SIDE */}

        {/* ABOUT CONTENT */}
        {/* Text Section and buttons */}
        <Reveal from={200} className="lg:w-1/3 lg:pr-8 flex-grow">
          <div className="w-full">
            <h1 className="mt-10 font-semibold  tracking-tight ">
              Innovative Web Developer, Problem-Solver, Business thinker...
              {/* <span className=" text-5xl  tracking-tight bg-gradient-to-r from-purple-600 via-blue-400 to-orange-300 inline-block text-transparent bg-clip-text">
                |
              </span> */}
            </h1>
            <p className="mt-6 leading-8">
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
