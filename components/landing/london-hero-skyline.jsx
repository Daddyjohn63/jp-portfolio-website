// components/LondonHeroWithSkyline.tsx

import Link from 'next/link';
//import SkylineSVG from './skyline-london.svg'; // inline or imported via next/image/SVG loader

export default function LondonHeroWithSkyline() {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Subtle SVG skyline background */}
      <div className="absolute inset-x-0 bottom-0 h-40 md:h-56 lg:h-64 opacity-20 pointer-events-none">
        {/* <SkylineSVG className="w-full h-full object-cover text-gray-300 fill-current" /> */}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Freelance Web Developer London –{' '}
            <span className="text-blue-600">React & Next.js Specialist</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 sm:text-xl">
            Helping London startups, agencies & businesses build fast,
            SEO-friendly websites and custom web applications.
          </p>
          <p className="mt-4 text-base text-gray-600">
            Based in Sussex, I work with London clients who need modern websites
            and apps that scale. I specialise in React & Next.js — delivering
            clean code, performance, and 1-to-1 collaboration without agency
            overheads.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-2xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              📞 Book a Free Consultation
            </Link>
            <Link
              href="/portfolio"
              className="rounded-2xl bg-gray-200 px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-300"
            >
              📂 View Portfolio
            </Link>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              ⚡ Lightning-fast, SEO-friendly websites
            </li>
            <li className="flex items-center gap-2">
              🛠 Custom web apps & integrations
            </li>
            <li className="flex items-center gap-2">
              🤝 Flexible freelance & contract options
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
