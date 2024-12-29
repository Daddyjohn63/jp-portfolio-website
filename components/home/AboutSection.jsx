'use client';
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Bot, MoveUpRight, PoundSterling, Trophy } from 'lucide-react';
import Link from 'next/link';

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
        <div className="flex-1 w-full">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className=" mb-4">
            As a seasoned full-stack web developer, I bring your digital visions
            to life. With expertise in both front-end and back-end technologies,
            including AI integration, I create seamless, efficient, and
            intelligent web solutions tailored to your unique business needs.
          </p>
          <div className="flex flex-col gap-2 mt-10">
            <p className="flex items-center gap-3">
              <span>
                <Trophy className="size-8 text-primary-foreground bg-accent rounded-full p-2" />
              </span>
              Proven track record of delivering successful projects
            </p>
            <p className="flex items-center gap-3">
              <span>
                <Bot className="size-8 text-primary-foreground bg-accent rounded-full p-2" />
              </span>
              Expertise in both front-end and back-end technologies, including
              AI integration
            </p>
            <p className="flex items-center gap-3">
              <span>
                <PoundSterling className="size-8 text-primary-foreground bg-accent rounded-full p-2" />
              </span>
              Tailored solutions that drive real business value and enhance user
              experience
            </p>
          </div>
          <Link
            className="flex items-center gap-2 bg-transparent rounded-3xl border border-muted-foreground/50 px-3 py-2 w-fit mt-10"
            href="#"
          >
            <MoveUpRight className="w-8 h-8 text-primary-foreground bg-accent rounded-full p-2" />
            <p className="text-white text-xl z-100 pl-3">Learn more</p>
          </Link>
        </div>

        {/* Right column - Image */}
        <div className="flex-1 w-full">
          <div className="relative">
            <motion.div style={{ y: y1 }}>
              <Image
                src="/images/chameleon-v1-750.jpg"
                alt="About us"
                width={448}
                height={440}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div style={{ y: y2 }}>
              <Image
                src="/images/placeholders/img-r-25.png"
                alt="About us"
                width={219}
                height={300}
                className="border-2 border-red-500 absolute end-[30px] bottom-[140px] md:bottom-[60px] lg:bottom-[-30px]  w-full md:max-w-[219px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
