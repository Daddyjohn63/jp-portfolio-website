//import { MoveRight, Star } from 'lucide-react';
//import Link from 'next/link';
//import Image from 'next/image';
import { CtaButton } from '@/components/common/CtaButton';

const LandingHeroLondon = () => {
  return (
    <>
      <div>
        <div className="w-full min-h-screen relative isolate overflow-hidden bg-background/70 bg-opacity-70 before:absolute before:inset-0 before:w-full before:h-full before:bg-[url('/images/john-paul/john_paul_2_bg.jpg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-20 before:-z-20">
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

          <div className="container px-6 pt-[80px] md:pt-[150px] lg:pt-[200px]">
            {/* Text Section and buttons */}
            <div className="max-w-3xl">
              <div className="">
                <div className="mt-4 md:mt-0">
                  <h1 className="inline-flex text-[15px] md:text-lg xl:text-xl  items-center font-light py-1 px-3 rounded-full text-white/80 bg-primary/10">
                    Freelance Web Developer London – React & Next.js Specialist
                  </h1>
                </div>

                <h2 className="mt-6 md:mt-10 text-2xl md:text-2xl xl:text-3xl !leading-10 md:!leading-[45px] font-bold ">
                  Helping London startups, agencies & businesses build fast,
                  SEO-friendly websites and custom web applications.
                </h2>

                <p className="mt-6 leading-8">
                  I am John Paul and I work with London clients who need modern
                  websites and apps that scale. I specialise in React & Next.js
                  — delivering clean code, performance, and 1-to-1 collaboration
                  without agency overheads.
                </p>

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
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingHeroLondon;
