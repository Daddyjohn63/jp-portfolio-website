'use client';

import Image from 'next/image';

import { MotionDiv, MotionLine } from '../common/MotionWrapper';
import { containerVariants } from '@/util/constants';
import { Home } from 'lucide-react';

const techIcons = [
  { name: 'React', src: '/images/tech/react-2.svg' },
  { name: 'Next.js', src: '/images/tech/next-js-white.svg' },
  { name: 'WordPress', src: '/images/tech/wordpress-icon-1.svg' },
  { name: 'Figma', src: '/images/tech/figma-icon.svg' },
  { name: 'Github', src: '/images/tech/github-icon-2.svg' },
  { name: 'Postgres', src: '/images/tech/postgresql.svg' }
];

export default function TechCircle({ size = 620 }) {
  const centerOffset = size / 2;
  const orbitRadius = size * 0.34375; // 110/320 = 0.34375, maintains proportion
  const iconSize = size * 0.175; // 56/320 = 0.175 (w-14 = 56px)
  const iconHalfSize = iconSize / 2;

  return (
    <MotionDiv
      className="relative mx-auto flex items-center justify-center"
      style={{ width: `${size}px`, height: `${size}px` }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Central glowing Home icon */}
      <MotionDiv
        className="absolute z-10 flex items-center justify-center rounded-full
                   bg-slate-900 text-white shadow-[0_0_25px_rgba(56,189,248,0.8)]
                   hover:shadow-[0_0_40px_rgba(56,189,248,1)] transition-all duration-700"
        style={{
          width: `${(size * 0.25) / 1.5}px`, // 80/320 = 0.25 (w-20 = 80px)
          height: `${(size * 0.25) / 1.5}px`
        }}
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            '0 0 20px rgba(56,189,248,0.6)',
            '0 0 40px rgba(56,189,248,1)',
            '0 0 20px rgba(56,189,248,0.6)'
          ]
        }}
        transition={{ repeat: 'loop', repeatType: 'loop', duration: 6 }}
      >
        <Home size={(size * 0.1125) / 1.2} /> {/* 36/320 = 0.1125 */}
      </MotionDiv>

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Base lines */}
        {techIcons.map((_, i) => {
          const angle = (i / techIcons.length) * 2 * Math.PI;
          const x = centerOffset + orbitRadius * Math.cos(angle);
          const y = centerOffset + orbitRadius * Math.sin(angle);
          return (
            <MotionLine
              key={`base-${i}`}
              x1={centerOffset}
              y1={centerOffset}
              x2={x}
              y2={y}
              stroke="#38bdf8"
              strokeWidth={size * 0.00625}
              strokeOpacity="0.4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: i * 0.25, duration: 0.6 }}
            />
          );
        })}

        {/* Animated pulse lines */}
        {techIcons.map((_, i) => {
          const angle = (i / techIcons.length) * 2 * Math.PI;
          const x = centerOffset + orbitRadius * Math.cos(angle);
          const y = centerOffset + orbitRadius * Math.sin(angle);
          return (
            <MotionLine
              key={`pulse-${i}`}
              x1={centerOffset}
              y1={centerOffset}
              x2={x}
              y2={y}
              stroke="#f97316"
              strokeWidth={size * 0.0125} // Thicker for pulse
              strokeOpacity="0.9"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0.9, 0]
              }}
              transition={{
                delay: i * 0.3, // Delay between each line pulse
                duration: 1.2, // How long the pulse takes to travel
                repeat: Infinity,
                repeatDelay: 2.5, // Pause before the cycle repeats
                ease: 'easeOut'
              }}
            />
          );
        })}
      </svg>

      {/* Orbiting icons */}
      {techIcons.map((icon, i) => {
        const angle = (i / techIcons.length) * 2 * Math.PI;
        const x = orbitRadius * Math.cos(angle);
        const y = orbitRadius * Math.sin(angle);

        return (
          <MotionDiv
            key={icon.name}
            className="absolute rounded-full bg-slate-800 p-2 flex
                       items-center justify-center shadow-md hover:scale-110 transition-transform"
            style={{
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              left: `${centerOffset + x - iconHalfSize}px`,
              top: `${centerOffset + y - iconHalfSize}px`
            }}
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: i * 0.25 + 0.5,
              duration: 0.8,
              ease: 'easeOut'
            }}
          >
            <Image
              src={icon.src}
              alt={icon.name}
              width={iconSize * 0.5}
              height={iconSize * 0.5}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </MotionDiv>
        );
      })}
    </MotionDiv>
  );
}
