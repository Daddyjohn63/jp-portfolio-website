'use client';
import ReactCookieBot from 'react-cookiebot';
import ContactForm from '@/components/contact/ContactForm';

const cookiebotId = '008bf995-0224-4cfa-b2ff-4961832b2d91';

const JpTestContact = () => {
  return (
    <div className="container mx-auto m-20">
      {/* <ReactCookieBot id={cookiebotId} /> */}
      <ContactForm />
    </div>
  );
};

export default JpTestContact;
