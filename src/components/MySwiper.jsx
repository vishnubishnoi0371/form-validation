"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MySwiper = () => {
  return (
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
    >
      <SwiperSlide className="bg-black mb-5 p-4 text-center max-w-[200px] text-white">
        <h1 className="text-[40px] mb-2">Swipe-1</h1>
        <p className="text-center text-white">
          Experienced in investing in traditional equity markets and that
          provides walletservices, swaps and DeFi
        </p>
      </SwiperSlide>
      <SwiperSlide className="bg-black mb-5 p-4 text-center max-w-[200px] text-white">
        <h1 className="text-[40px] mb-2">Swipe-2</h1>
        <p className="text-center text-white">
          Experienced in investing in traditional equity markets and that
          provides walletservices, swaps and DeFi
        </p>
      </SwiperSlide>
      <SwiperSlide className="bg-black mb-5 p-4 text-center max-w-[200px] text-white">
        <h1 className="text-[40px] mb-2">Swipe-3</h1>
        <p className="text-center text-white">
          Experienced in investing in traditional equity markets and that
          provides walletservices, swaps and DeFi
        </p>
      </SwiperSlide>
      <SwiperSlide className="bg-black mb-5 p-4 text-center max-w-[200px] text-white">
        <h1 className="text-[40px] mb-2">Swipe-4</h1>
        <p className="text-center text-white">
          Experienced in investing in traditional equity markets and that
          provides walletservices, swaps and DeFi
        </p>
      </SwiperSlide>
      <SwiperSlide className="bg-black mb-5 p-4 text-center max-w-[200px] text-white">
        <h1 className="text-[40px] mb-2">Swipe-5</h1>
        <p className="text-center text-white">
          Experienced in investing in traditional equity markets and that
          provides walletservices, swaps and DeFi
        </p>
      </SwiperSlide>
      <SwiperSlide className="bg-black mb-5 p-4 text-center max-w-[200px] text-white">
        <h1 className="text-[40px] mb-2">Swipe-6</h1>
        <p className="text-center text-white">
          Experienced in investing in traditional equity markets and that
          provides walletservices, swaps and DeFi
        </p>
      </SwiperSlide>
    </Swiper>
  );
};
export default MySwiper;
