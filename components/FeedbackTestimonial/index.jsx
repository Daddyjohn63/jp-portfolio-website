import { MoveLeft, MoveRight } from 'lucide-react';
import dynamic from 'next/dynamic';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
const FeedBackSwiper = dynamic(() => import('./FeedBackSwiper'));

const FeedBack = () => {
  return (
    <section className="py-16 sm:py-24 overflow-x-hidden">
      <div className="container">
        <div className="grid xl:grid-cols-4 grid-cols-3 gap-6">
          <div className="col-span-3 lg:col-span-1">
            <span className="text-sm font-medium py-1  rounded-full text-primary bg-primary/10">
              Feedback
            </span>
            <h1 className="text-3xl/tight font-medium mt-3 mb-4">
              What people say
            </h1>
            <p className="text-muted-foreground">
              A few valuables words from my customers
            </p>

            <div className="flex gap-4 mt-10">
              <div className="button-prev swiper-custom-prev cursor-pointer text-xl transition-all duration-300 hover:text-primary">
                <MoveLeft />
              </div>
              <div className="button-next text-xl swiper-custom-next cursor-pointer transition-all duration-300 hover:text-primary">
                <MoveRight />
              </div>
            </div>
          </div>
          <FeedBackSwiper />
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
