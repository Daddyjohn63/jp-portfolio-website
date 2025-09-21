import { CallToAction } from '@/components/common/CallToAction';
import { InnerHeader } from '@/components/common/InnerHeader';
import { FaLaptopCode, FaCogs, FaHandshake } from 'react-icons/fa';
import { WebDesignProcessFlow } from '@/components/home/WebDesignProcessFlow';
import { getWebDesignProcessFlow } from '@/lib/single-types';

export const metadata = {
  title: 'Services | Web and Prosper',
  description:
    'Professional web development services including website design, full-stack application development, and AI integration solutions.'
};

const servicesData = [
  {
    icon: FaLaptopCode,
    title: 'Website Design and Development',
    description:
      'I provide end-to-end website creation, starting with in-depth discovery sessions to understand your unique goals and brand identity.\n\nBy blending modern design principles with best practices in usability and accessibility, I ensure that every site feels intuitive and looks professional on any device. Responsive layouts, clean code, and optimised load times are at the heart of my approach.\n\n My process includes layout wireframing, user interface (UI) design, frontend development, and robust testing. Whether you need a sleek portfolio, an informative brochure site, or a fully functional online store, I deliver a solution that reflects your vision and supports your business objectives.'
  },
  {
    icon: FaCogs,
    title: 'Full-Stack Application Development',
    description:
      'I specialise in creating powerful applications that streamline operations and drive efficiency for small to medium sized businesses.\n\n With strong expertise in React, Next.js, Node.js, and PostgreSQL, I handle both the frontend and backend, ensuring seamless data flow, secure user authentication, and intuitive interfaces.\n\n My holistic approach covers everything from planning and architecture to testing, deployment, and post-launch support.\n\n By integrating modern libraries and frameworks, I build scalable solutions that can adapt to your organisation’s evolving needs. I also provide comprehensive documentation and hands-on training to empower your team and maximise your return on investment.'
  },

  {
    icon: FaHandshake,
    title: 'Contract Front-End & Back-End Collaboration',
    description:
      'If your organisation needs flexible support on existing or upcoming projects, I offer contract services tailored to your requirements.\n\n My frontend expertise—encompassing React, Next.js, CSS frameworks, and performance optimisation—ensures a polished user experience, while my understanding of backend systems, including Node.js, Postgres, and RESTful API development, provides a strong technical foundation.\n\n I collaborate seamlessly with in-house teams, offering clear communication, reliable code, and efficient project management.\n\n Whether you need temporary reinforcements to meet tight deadlines or long-term guidance on complex builds, my contract services will keep your development pipeline running smoothly and productively.'
  }
];

const ServicesPage = async () => {
  const processFlow = await getWebDesignProcessFlow();
  return (
    <>
      <InnerHeader
        title="Services"
        description="Discover how I can help you build stunning websites, create robust
            applications, and provide top-tier contract services."
      />
      <main className=" container  mx-auto px-4 py-12">
        {/* Hero / Introduction */}
        {/* <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Services</h1>
          <p className="">
            Discover how I can help you build stunning websites, create robust
            applications, and provide top-tier contract services.
          </p>
        </section> */}

        {/* Services Grid */}
        <section className="flex flex-col gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="p-6 flex flex-col md:flex-row gap-10">
                <div className=" bg-customShades-shade2 w-full md:w-1/3 p-4 flex flex-col gap-4 items-center justify-center border border-indigo-900 rounded-lg shadow-sm min-h-[200px]">
                  <div className="flex items-center">
                    <Icon className="text-6xl text-indigo-500" />
                  </div>
                  <h2 className="text-2xl  font-semibold text-center">
                    {service.title}
                  </h2>
                </div>
                <p className="w-full md:w-2/3 flex items-center text-center md:text-left whitespace-pre-line">
                  {service.description}
                </p>
              </div>
            );
          })}
        </section>

        {/* Process Flow Section */}
        <section className="section-spacing-lg">
          <WebDesignProcessFlow processFlow={processFlow} />
        </section>

        {/* Call to Action */}
        <section className="flex justify-center section-spacing-lg ">
          <CallToAction
            title="Let's talk about you!"
            description="I'm always looking for new and exciting projects."
            buttonLabel="Get in Touch"
            buttonLink="/contact"
            buttonColor="bg-indigo-600"
            buttonTextColor="text-white"
          />
        </section>
      </main>
    </>
  );
};

export default ServicesPage;
