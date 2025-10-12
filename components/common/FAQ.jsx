'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const faqData = [
  {
    id: 1,
    question: 'What services does John Paul offer as a web developer?',
    answer:
      'John Paul offers comprehensive web development services including: Website Design & Development (end-to-end creation from discovery to deployment), Full-Stack Application Development (React, Next.js, Node.js, PostgreSQL), Contract Development Services (flexible support for existing teams), E-commerce Development (custom online stores), SEO & Performance Optimisation, and AI Integration Services. He specializes in creating fast, SEO-friendly websites and custom business applications.'
  },
  {
    id: 2,
    question: 'What technologies and frameworks does John Paul specialise in?',
    answer:
      'John Paul specializes in modern web technologies including: Frontend - React, Next.js, TypeScript, JavaScript (ES6+), HTML & CSS; Backend - Node.js, Express, Hono, API development; Databases - PostgreSQL, SQL; CMS - Strapi, WordPress; Testing - Cypress; DevOps - Docker, VPS management; Authentication - Lucia Auth, Clerk, NextAuth.js; Design - Figma, UI/UX; and AI Integration capabilities.'
  },
  {
    id: 3,
    question: "What is John Paul's background and experience?",
    answer:
      "John Paul has 5+ years in web development and extensive IT project leadership experience at major companies including IBM, Rolls-Royce, and Ericsson. He's a Sussex-based freelance web developer who combines technical expertise with business strategy, offering 1-to-1 collaboration without big-agency overheads. His background includes project management, Agile/Scrum methodologies, and creating scalable business solutions."
  },
  {
    id: 4,
    question: 'What types of businesses does John Paul work with?',
    answer:
      'John Paul works with startups, agencies, and established businesses across various industries. He has worked with clients including Princewood Energy, Roxel Resources, Galvin Restaurants, and Solve Recruitment. He provides flexible services from building websites for startups to contract development support for established teams, focusing on businesses that need reliable, scalable web solutions.'
  },
  {
    id: 5,
    question: 'What areas does John Paul serve?',
    answer: (
      <>
        John Paul is based in Sussex (West Sussex, RH17 6DZ) and serves clients
        across Sussex, Surrey,{' '}
        <Link
          href="/web-developer-london"
          className="text-primary hover:text-primary/80 underline transition-colors"
        >
          London
        </Link>
        , and Kent. His service radius covers up to 120km from his base,
        including major cities like Brighton, Haywards Heath, Crawley,
        Guildford, Woking, Central London, Canterbury, and Maidstone. He offers
        both local and remote collaboration.
      </>
    )
  },
  {
    id: 6,
    question: "What is John Paul's development process?",
    answer:
      'John Paul follows a comprehensive development process including: In-depth discovery sessions to understand goals and brand identity, layout wireframing and UI design, responsive development with clean code, robust testing, deployment, and post-launch support. He emphasizes modern design principles, usability, accessibility, and performance optimisation throughout the process.'
  },
  {
    id: 7,
    question: 'How can I contact John Paul for a project?',
    answer:
      'You can contact John Paul by phone at +44 7739 875445 for a free consultation, or by email at john@webandprosper.co.uk. He offers phone consultations followed by email communication and is available Monday-Friday, 9:00-17:00. He provides 1-to-1 collaboration and responds promptly to project inquiries.'
  },
  {
    id: 8,
    question: 'What makes John Paul different from other web developers?',
    answer:
      'John Paul combines technical expertise with business strategy, backed by corporate experience at IBM, Rolls-Royce, and Ericsson. He offers 1-to-1 collaboration without big-agency overheads, focuses on delivering projects on time and on budget, and creates websites that convert visitors into customers. His approach includes comprehensive documentation, hands-on training, and long-term partnership thinking.'
  },
  {
    id: 9,
    question: 'Does John Paul offer ongoing support and maintenance?',
    answer:
      'Yes, John Paul provides comprehensive post-launch support including ongoing maintenance, documentation, hands-on training to empower client teams, and long-term collaboration. He focuses on building lasting relationships and ensuring clients can maximize their return on investment with scalable solutions that adapt to evolving business needs.'
  },
  {
    id: 10,
    question: "What is John Paul's approach to project pricing and timelines?",
    answer:
      'John Paul offers competitive pricing with projects delivered on time and on budget. He provides clear communication throughout the project lifecycle, detailed project management, and transparent pricing structures. His experience in corporate project management ensures efficient delivery and reliable timelines for all web development projects. All proposals are run through an AI LLM to ensure accuracy, transparency and fairness.'
  }
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = id => {
    // If clicking the already open item, close it. Otherwise, open the new item
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="section-spacing-lg">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-white/80 bg-primary/10">
            FAQ
          </span>
          <h2 className="text-3xl font-bold mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Common questions about John Paul's web development services,
            expertise, and approach
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map(item => (
            <div
              key={item.id}
              className="border border-gray-700 rounded-lg bg-customShades-shade2"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors rounded-lg"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItem === item.id}
              >
                <h3 className="font-semibold text-lg pr-4">{item.question}</h3>
                <div className="transition-transform duration-200">
                  {openItem === item.id ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItem === item.id
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
