'use client';
import { ChevronRight, MoveRight, MoveUpRight, Star } from 'lucide-react';
import Link from 'next/link';

import Reveal from '@/components/common/ScrollAnimation';

const HomeHero = () => {
  return (
    <>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url('/images/img8.jpg')` }}
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
          <div className="container mx-auto max-w-8xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
            <Reveal from={200}>
              <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                <div className="mt-24 sm:mt-32 lg:mt-16">
                  <Link href="#" className="inline-flex space-x-6">
                    <p className="flex items-center gap-1 rounded-full bg-muted-foreground/10 px-3 py-1 text-sm font-semibold leading-6  ring-1 ring-inset ">
                      5 <Star className="size-3" /> Rated on Google
                    </p>
                  </Link>
                </div>

                <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text  ">
                  Transforming Ideas into Powerful Web Solutions
                </h1>

                <p className="mt-6 text-xl leading-8 ">
                  Stay ahead of the competition with modern, scalable web
                  applications built on the latest technologies.
                </p>
                <ul className="flex flex-col mt-3  gap-1">
                  <li className="flex items-center gap-1">
                    <MoveRight className="size-5 text-muted-foreground mr-2 " />
                    point 1
                  </li>
                  <li className="flex items-center gap-1">
                    <MoveRight className="size-5 text-muted-foreground mr-2 " />
                    point 2
                  </li>
                </ul>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    className="flex items-center gap-2 bg-transparent rounded-lg border border-muted-foreground/50  px-3 py-2"
                    href="#"
                  >
                    <MoveUpRight className="w-8 h-8 text-primary-foreground bg-muted-foreground rounded-full p-2" />
                    <p className="text-white  text-xl z-100 pl-2">Contact me</p>
                  </Link>
                  <Link
                    className="flex items-center gap-2 bg-transparent rounded-lg border border-muted-foreground/50  px-3 py-2"
                    href="#"
                  >
                    <MoveUpRight className="w-8 h-8 text-primary-foreground bg-muted-foreground rounded-full p-2" />
                    <p className="text-white  text-xl z-100 pl-3">Learn more</p>
                  </Link>
                </div>
              </div>
            </Reveal>
            {/* <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeHero;
