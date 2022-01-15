import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { BannerContainer } from "./styles";

import "swiper/css/bundle";

// swiper core styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <BannerContainer>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Image src={"/bg.jpeg"} layout="fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/bg.jpeg"} layout="fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/bg.jpeg"} layout="fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/bg.jpeg"} layout="fill" />
        </SwiperSlide>
      </Swiper>
    </BannerContainer>
  );
};

export default Banner;
