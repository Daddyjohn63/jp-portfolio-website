import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { CtaButton } from '@/components/common/CtaButton';

const AboutIntro = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:gap-16 gap-10 items-center">
        {/* ABOUT IMAGE SIDE */}
        <div className="grid grid-cols-1 gap-5 w-full relative h-fit md:order-1 order-2">
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

        {/* ABOUT CONTENT */}
        <div className="w-full lg:pr-8 md:order-2 order-1">
          <div className="w-full">
            <h1 className="mt-10 font-semibold tracking-tight">
              Innovative Web Developer, Problem-Solver, Business thinker...
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
            <div className="mt-10 flex items-center gap-x-6">
              <CtaButton label="Contact me" href="/contact" />
              <CtaButton label="View my work" href="/portfolio" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
