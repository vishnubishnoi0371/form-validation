"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import behind4 from "../Images/behind-4.webp";
import behind5 from "../Images/behind-5.webp";
import behind6 from "../Images/behind-6.webp";
import behind7 from "../Images/behind-7.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MySwiper = () => {
  return (
    <div>
      <h1 className="text-center">React Swiper</h1>

      <Swiper
        className="mx-auto w-100 mt-5  pt-5"
        modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={5.5}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }} // Add autoplay prop here
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
            arrows: false,
          },
          320: {
            slidesPerView: 1,
            arrows: false,
          },
        }}
      >
        <SwiperSlide className="bg-black mb-5 p-4 text-center max-w-[200px] text-white">
          <h1 className="text-[40px] mb-2">Swipe-1</h1>
          <img className="w-100" src={behind4} />
        </SwiperSlide>
        <SwiperSlide className="bg-black mb-5 p-4 text-center max-w-[200px] text-white">
          <h1 className="text-[40px] mb-2">Swipe-2</h1>
          <img className="w-100" src={behind5} />
        </SwiperSlide>
        <SwiperSlide className="bg-black mb-5 p-4 text-center max-w-[200px] text-white">
          <h1 className="text-[40px] mb-2">Swipe-3</h1>
          <img className="w-100" src={behind6} />
        </SwiperSlide>
        <SwiperSlide className="bg-black mb-5 p-4 text-center max-w-[200px] text-white">
          <h1 className="text-[40px] mb-2">Swipe-4</h1>
          <img className="w-100" src={behind7} />
        </SwiperSlide>
        <SwiperSlide className="bg-black mb-5 p-4 text-center max-w-[200px] text-white">
          <h1 className="text-[40px] mb-2">Swipe-5</h1>
          <img className="w-100" src={behind4} />
        </SwiperSlide>
        <SwiperSlide className="bg-black mb-5 p-4 text-center max-w-[200px] text-white">
          <h1 className="text-[40px] mb-2">Swipe-6</h1>
          <img className="w-100" src={behind6} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default MySwiper;
