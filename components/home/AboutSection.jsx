'use client';
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  Bot,
  MoveRight,
  MoveUpRight,
  PoundSterling,
  Trophy
} from 'lucide-react';
import Link from 'next/link';
import { CtaButton } from '../common/CtaButton';

export const AboutSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });
  // Transform scrollYProgress (0-1) into desired y values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]); // Image 1 moves up
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 70]); // Image 2 moves slower

  return (
    <div className="container mb-[100px] mt-[100px]" ref={containerRef}>
      <div className="flex flex-col md:flex-row items-center gap-8 py-16">
        {/* Left column - Text content */}
        <div className="flex-1 w-full ">
          <h2 className="text-5xl font-bold mb-4">About</h2>
          <p className=" mb-4">
            As a seasoned full-stack web developer, I bring your digital visions
            to life. With expertise in both front-end and back-end technologies,
            including AI integration, I create seamless, efficient, and
            intelligent web solutions tailored to your unique business needs.
          </p>
          <div className="flex flex-col gap-2 mt-6 mb-10">
            <p className="flex items-center gap-3">
              <span>
                <MoveRight className="size-5 text-muted-foreground " />
              </span>
              Proven track record of delivering successful projects
            </p>
            <p className="flex items-center gap-3">
              <span>
                <MoveRight className="size-5 text-muted-foreground " />
              </span>
              Expertise in both front-end and back-end technologies, including
              AI integration
            </p>
            <p className="flex items-center gap-3">
              <span>
                <MoveRight className="size-5 text-muted-foreground " />
              </span>
              Tailored solutions that drive real business value and enhance user
              experience
            </p>
          </div>

          <CtaButton className="mt-10" label="Learn more" />
        </div>

        {/* Right column - Image */}
        <div className="flex-1 w-full">
          <div className="relative">
            <Image
              src="/images/chameleon-v1-750.jpg"
              alt="About us"
              width={448}
              height={440}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
