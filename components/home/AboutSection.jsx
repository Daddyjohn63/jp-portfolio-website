'use client';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import { CtaButton } from '../common/CtaButton';

export const AboutSection = () => {
  return (
    <div className="container mt-4 mx-auto max-w-8xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:items-center lg:gap-12 lg:px-8 lg:py-40">
      {/* Text Section */}
      <div className="flex-1 w-full lg:w-1/2">
        <div className="w-full">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About</h2>
          <p className="mb-4">
            As a seasoned full-stack web developer, I bring your digital visions
            to life. With expertise in both front-end and back-end technologies,
            including AI integration, I create seamless, efficient, and
            intelligent web solutions tailored to your unique business needs.
          </p>
          <div className="flex flex-col gap-2 mt-6 mb-10">
            <p className="flex items-center gap-3">
              <span>
                <MoveRight className="size-5 text-muted-foreground" />
              </span>
              Proven track record of delivering successful projects
            </p>
            <p className="flex items-center gap-3">
              <span>
                <MoveRight className="size-5 text-muted-foreground" />
              </span>
              Expertise in both front-end and back-end technologies, including
              AI integration
            </p>
            <p className="flex items-center gap-3">
              <span>
                <MoveRight className="size-5 text-muted-foreground" />
              </span>
              Tailored solutions that drive real business value and enhance user
              experience
            </p>
          </div>

          <CtaButton className="mt-10" label="Learn more" />
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 w-full lg:w-1/2 mt-10 lg:mt-0">
        <div className="w-full h-full relative">
          <Image
            src="/images/chameleon-v1-750.jpg"
            alt="About us"
            width={1600}
            height={900}
            className="relative w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
