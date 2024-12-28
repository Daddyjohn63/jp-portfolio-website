'use client';
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className=" mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Learn More
          </button>
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
