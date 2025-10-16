import { InnerHeader } from '@/components/common/InnerHeader';
import TechCircle from '@/components/graphics/TechCircle';
import { Card, CardContent } from '@/components/ui/card';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp
} from 'react-icons/fa';

export const metadata = {
  title: 'Contact | Web and Prosper',
  description:
    'Get in touch to discuss your web development project. Available for consultations and project inquiries.'
};

const contactMessages = [
  {
    title: 'Email',
    description: (
      <a
        href="mailto:john@webandprosper.co.uk"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        john@webandprosper.co.uk
      </a>
    ),
    icon: <FaEnvelope className="text-primary" size={38} />
  },
  {
    title: 'Phone',
    description: (
      <a href="tel:+447739875445" className="text-blue-500 hover:underline">
        Call me on +44 7739 875445
      </a>
    ),
    icon: <FaPhone className="text-blue-500" size={38} />
  },
  {
    title: 'WhatsApp',
    description: (
      <a
        href="https://wa.me/447739875445"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:underline"
      >
        Message me on WhatsApp
      </a>
    ),
    icon: <FaWhatsapp className="text-green-500" size={38} />
  },
  {
    title: 'Location',
    description:
      'Monks Meadow, Ardingly, Haywards Heath, West Sussex, RH17 6DZ, UK',
    icon: <FaMapMarkerAlt className="text-red-500" size={38} />
  }
];

export default async function ContactPage() {
  return (
    <div>
      <InnerHeader
        title="Contact Me"
        description="Get in touch with me to discuss your project or to schedule a consultation."
      />

      <main className="container mt-4 mx-auto max-w-8xl px-6  pb-0  lg:flex lg:items-center lg:gap-12 lg:px-8 section-spacing-responsive">
        {/* <div className="flex-1 w-full lg:w-1/2">
          <ContactForm />
        </div> */}
        <div className="flex-1 w-full lg:w-full mt-10 lg:mt-0">
          <div className="w-full h-full relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
              {contactMessages.map((message, index) => (
                <Card
                  key={index}
                  className="border border-gray-500 rounded-2xl shadow-md hover:shadow-lg w-full"
                >
                  <CardContent className="flex flex-col items-center justify-center text-center p-3 sm:p-6 min-h-[160px] sm:min-h-0 space-y-2 sm:space-y-3">
                    <div className="shrink-0">{message.icon}</div>
                    <h3 className="text-lg font-semibold">{message.title}</h3>
                    <p className="text-sm text-gray-400">
                      {message.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <TechCircle />
    </div>
  );
}
