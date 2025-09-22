import Image from 'next/image';

export const CompanyLogos = () => {
  return (
    <>
      {/* <Reveal from={200}> */}
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className=" font-bold  text-center px-4">
          Some Companies I have worked with
        </h2>
        {/* <p className="text-muted-foreground text-xl text-center px-4 md:w-1/3">
          I have worked with a range of companies over the last 20 years.
        </p> */}
      </div>
      <div className="relative">
        <div className="container px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 ">
          {/* company logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20 justify-items-center items-center">
            <Image
              src="/images/company-logos/ibm_logo.svg"
              alt="Company Logo 1"
              width={150}
              height={150}
            />
            <Image
              src="/images/company-logos/ericsson_logo_white.svg"
              alt="Company Logo 2"
              width={150}
              height={150}
            />
            <Image
              src="/images/company-logos/rolls_royce.svg"
              alt="Company Logo 3"
              width={250}
              height={250}
            />
            <Image
              src="/images/company-logos/diageo_logo.svg"
              alt="Company Logo 4"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
      {/* </Reveal> */}
    </>
  );
};
