import React, { useEffect, useState } from "react";
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
import { API } from "@src/API";
import { useRouter } from "next/router";
import Link from "next/link";

const Banner = () => {
  const router = useRouter();
  const [imgs, setImgs] = useState<{ imgURL: string; urlTo: string }[]>([]);

  const getBanner = async () => {
    const { data } = await API.get("/main/swipers", {});
    setImgs(data);
    // setBgs(data.map(item => ));
  };

  const onClick = (url: string) => {
    router.push(url);
  };

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <BannerContainer>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => {}}
        // onSlideChange={() => {}}
      >
        {imgs.map((bg, index) => {
          return (
            <SwiperSlide key={index}>
              <Link href={bg.urlTo}>
                <img
                  src={`${bg.imgURL}`}
                  alt={`${bg.imgURL}}`}
                  // onClick={() => onClick(bg.urlTo)}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </BannerContainer>
  );
};

export default Banner;
