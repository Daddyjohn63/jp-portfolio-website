'use client';
import { ChevronRight, MoveRight, MoveUpRight, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Reveal from '@/components/common/ScrollAnimation';
import Image from 'next/image';

const HomeHero = () => {
  return (
    <>
      <div
      // className="bg-cover bg-center"
      //style={{ backgroundImage: `url('/images/chamofficev2.jpg')` }}
      >
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

          <div className="container mt-4 mx-auto max-w-8xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:items-center lg:px-8 lg:py-40">
            {/* Text Section and buttons */}
            <Reveal from={200} className="lg:w-1/3 lg:pr-8 flex-grow">
              <div className="w-full">
                <Link href="#" className="inline-flex space-x-6">
                  <p className="flex items-center gap-1 rounded-full bg-muted-foreground/10 px-3 py-1 text-sm font-semibold leading-6 ring-1 ring-inset">
                    5 <Star className="size-3 fill-yellow-600" /> Rated on
                    Google
                  </p>
                </Link>
                <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
                  Transforming Ideas into Powerful{' '}
                  <span className="text-4xl font-bold tracking-tight sm:text-6xl text-accent">
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
                  <Link
                    className="flex items-center gap-2 bg-transparent rounded-3xl border border-muted-foreground/50 px-3 py-2"
                    href="#"
                  >
                    <MoveUpRight className="w-8 h-8 text-primary-foreground bg-accent rounded-full p-2" />
                    <p className="text-white text-xl z-100 pl-2">Contact me</p>
                  </Link>
                  <Link
                    className="flex items-center gap-2 bg-transparent rounded-3xl border border-muted-foreground/50 px-3 py-2"
                    href="#"
                  >
                    <MoveUpRight className="w-8 h-8 text-primary-foreground bg-accent rounded-full p-2" />
                    <p className="text-white text-xl z-100 pl-3">Learn more</p>
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Image Section */}
            <div className="relative w-full flex justify-center lg:ml-10">
              <div className="aspect-w-16 aspect-h-9 w-full overflow-visible relative">
                {/* <div className="absolute inset-0 bg-accent rounded-md transform translate-x-8 translate-y-8"></div> */}
                {/* <div className="absolute inset-0 rounded-lg transform translate-x-8 translate-y-8 bg-transparent bg-[radial-gradient(#b16cf1f8_1px,transparent_1px)] [background-size:8px_8px]"></div> */}
                <motion.div
                  className="absolute inset-0 rounded-lg transform translate-x-8 translate-y-8 bg-transparent bg-[radial-gradient(#b16cf1bc_1px,transparent_1px)] [background-size:8px_8px]"
                  initial={{ opacity: 0, scale: 0.9, x: 0, y: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 32, y: 32 }} // 32px = translate-x-8 and translate-y-8
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: 'easeOut'
                  }}
                />
                <Image
                  src="/images/chameleon-v1-r-1-5.jpg"
                  alt="App screenshot"
                  width={1600}
                  height={900}
                  className="relative rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeHero;
