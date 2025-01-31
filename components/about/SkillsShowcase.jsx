'use client';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaUsers,
  FaBriefcase,
  FaCode,
  FaFigma,
  FaServer,
  FaLock
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiPostgresql,
  SiStrapi,
  SiWordpress,
  SiCypress,
  SiConvex,
  SiDocker,
  SiCloudflare,
  SiGithub
} from 'react-icons/si';

const skills = [
  {
    category: 'Frontend Development',
    icon: <FaReact className="text-blue-500" size={32} />,
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML & CSS'
    ]
  },
  {
    category: 'Backend & APIs',
    icon: <FaNodeJs className="text-green-500" size={32} />,
    skills: [
      'Node.js',
      'Express',
      'Hono',
      'API Development',
      'Convex',
      'SQL & Postgres'
    ]
  },
  {
    category: 'CMS & Content Management',
    icon: <SiStrapi className="text-purple-500" size={32} />,
    skills: ['Strapi', 'WordPress', 'Custom CMS Development', 'SEO']
  },
  {
    category: 'AI & Integration',
    icon: <FaDatabase className="text-yellow-500" size={32} />,
    skills: ['AI Integration', 'API Integration']
  },
  {
    category: 'Testing & Tooling',
    icon: <SiCypress className="text-teal-500" size={32} />,
    skills: ['Cypress Testing', 'Performance Optimisation']
  },
  {
    category: 'UI/UX & Design',
    icon: <FaFigma className="text-pink-500" size={32} />,
    skills: ['Figma', 'User Experience (UX)', 'Wireframing']
  },
  {
    category: 'Business & Strategy',
    icon: <FaBriefcase className="text-gray-700" size={32} />,
    skills: ['Product Thinking', 'Client Communication', 'Agile & Scrum']
  },
  {
    category: 'Team Collaboration',
    icon: <FaUsers className="text-indigo-500" size={32} />,
    skills: ['Cross-Functional Collaboration', 'Mentorship', 'Problem-Solving']
  },
  {
    category: 'DevOps, Hosting & Security',
    icon: <FaServer className="text-orange-500" size={32} />,
    skills: [
      'VPS Management',
      'Docker',
      'Cloudflare, R2 Bucket, Uploadthing',
      'Git',
      'Lucia Auth, Clerk, NextAuth.js'
    ]
  }
];

export default function SkillsShowcase() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">
        My Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="h-full"
          >
            <Card className="p-4 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg h-full">
              <CardContent className="flex flex-col items-center text-center h-full">
                {skill.icon}
                <h3 className="text-lg font-semibold mt-2">{skill.category}</h3>
                <ul className="mt-2 text-sm text-gray-400">
                  {skill.skills.map((item, idx) => (
                    <li key={idx} className="mt-1">
                      • {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
