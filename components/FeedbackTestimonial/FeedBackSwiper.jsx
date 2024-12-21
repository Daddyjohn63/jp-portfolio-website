'use client';
import { testimonialData } from './Data';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/navigation';

const FeedBackSwiper = () => {
  return (
    <div className="col-span-3 lg:col-span-2 xl:col-span-3">
      <div className="relative">
        <div className="hidden sm:block">
          <div className="before:w-24 before:h-24 before:absolute before:-top-8 before:-end-8 before:bg-[url('/images/patterns/dot5.svg')]"></div>
          <div className="after:w-24 after:h-24 after:absolute after:-bottom-8 after:-start-8 after:bg-[url('/images/patterns/dot2.svg')]"></div>
        </div>
        <div id="swiper_one" className="swiper relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            speed={1000}
            navigation={{
              nextEl: '.swiper-custom-next',
              prevEl: '.swiper-custom-prev'
            }}
            loop
            spaceBetween={30}
          >
            {testimonialData.map(testimonial => (
              <SwiperSlide
                key={testimonial.id}
                className="p-10 border rounded-xl bg-white shadow"
              >
                <FaQuoteLeft className="text-primary text-5xl" />
                <p className="mt-4 text-gray-500 ">{testimonial.quote}</p>
                <div className="border-b border-gray-200 w-full my-7"></div>
                <div className="flex flex-wrap items-center justify-between gap-10">
                  <div className="flex items-center gap-2">
                    <p className="text font-bold text-gray-500 ">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text">{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeedBackSwiper;
