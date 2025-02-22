'use client';
import { MoveRight, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CtaButton } from '@/components/common/CtaButton';

const HomeHero = () => {
  return (
    <>
      <div>
        <div className="w-full relative isolate overflow-hidden bg-background/70 bg-opacity-70">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
            />
          </svg>
          <div
            className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'
              }}
            />
          </div>

          <div className="container mx-auto max-w-8xl px-6 pt-[80px] md:pt-[150px] lg:pt-[200px] lg:flex lg:items-center lg:gap-12 lg:px-8">
            {/* Text Section and buttons */}
            <div className="flex-1 w-full lg:w-1/2">
              <div className="w-full">
                <div className="mt-4 md:mt-0">
                  <Link href="#" className="inline-flex space-x-6">
                    <p className="flex items-center gap-1 rounded-full bg-muted-foreground/10 px-3 py-1 text-sm font-semibold leading-6 ring-1 ring-inset">
                      5 <Star className="size-3 fill-yellow-600" /> Rated on
                      Google
                    </p>
                  </Link>
                </div>

                <h1 className="mt-6 md:mt-10 text-3xl md:text-3xl xl:text-6xl !leading-10 md:!leading-[70px] font-bold">
                  Transforming ideas into powerful{' '}
                  <span className="text-3xl md:text-3xl xl:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-400 to-orange-300 inline-block text-transparent bg-clip-text">
                    Web Applications
                  </span>
                </h1>

                <p className="mt-6 leading-8">
                  Adapt and stay ahead of the competition with modern, scalable
                  web applications that will deliver more sales, more
                  productivity and a return on your investment.
                </p>

                <ul className="flex flex-col mt-3 gap-2">
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
                    Projects delivered on time and on budget
                  </li>
                </ul>

                <div className="mt-10 flex flex-row justify-start gap-4 md:gap-x-6 w-full mb-4">
                  <CtaButton
                    label="Contact me"
                    href="/contact"
                    className="w-full md:w-auto"
                  />
                  <CtaButton
                    label="My work"
                    href="/portfolio"
                    className="w-full md:w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 w-full lg:w-1/2 mt-10 lg:mt-0">
              <div className="w-full h-full relative">
                <motion.div
                  className="absolute inset-0 rounded-lg transform translate-x-8 translate-y-8 bg-transparent bg-[radial-gradient(#b16cf1bc_1px,transparent_1px)] [background-size:8px_8px]"
                  initial={{ opacity: 0, scale: 0.9, x: 0, y: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 32, y: 32 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: 'easeOut'
                  }}
                />
                <picture>
                  {/* Mobile image */}
                  <source
                    media="(max-width: 768px)"
                    srcSet="/images/chameleon-mob-portrait.jpg"
                  />
                  {/* Desktop image */}
                  <Image
                    src="/images/chameleon-v1-r-1-5.jpg"
                    alt="Chameleon sitting at a desk coding"
                    width={1500}
                    height={1000}
                    className="relative w-full h-auto rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                    priority
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
