'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import { CtaButton } from '../common/CtaButton';
import { FaGlasses, FaGrinTongueWink, FaRegHandshake } from 'react-icons/fa';
import { BsGraphUpArrow } from 'react-icons/bs';

const aboutMessages = [
  {
    title: 'Investment',
    description: 'I want to help you grow your business',
    icon: <BsGraphUpArrow className="text-blue-500" size={38} />
  },

  {
    title: 'Collaboration',
    description: 'I work with you as part of your team',
    icon: <FaRegHandshake className="text-indigo-500" size={38} />
  },
  {
    title: 'Custom Solutions',
    description: 'All my work is tailored to your needs',
    icon: <FaGlasses className="text-green-500" size={38} />
  },
  {
    title: 'User-Friendly Design',
    description: 'clean layouts, intuitive navigation, performance',
    icon: <FaGrinTongueWink className="text-yellow-500" size={38} />
  }
];

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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {aboutMessages.map((message, index) => (
              <Card className="p-4 border border-gray-500 rounded-2xl shadow-md hover:shadow-lg h-32 sm:h-36 md:h-40 lg:h-44 w-full">
                <CardContent className="flex flex-col items-center justify-center text-center h-full space-y-2 shrink-0">
                  <div className="shrink-0">{message.icon}</div>
                  <h3 className="text-lg font-semibold">{message.title}</h3>
                  <p className="text-sm text-gray-400">{message.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
