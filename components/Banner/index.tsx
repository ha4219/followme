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

const Banner = () => {
  const [bgs, setBgs] = useState([]);
  const [imgs, setImgs] = useState([]);

  const getBanner = async () => {
    const { data } = await API.get("/main/swipers", {});
    setImgs(
      data.map((item) => {
        return toBase64(item.img.data);
      })
    );
    // setBgs(data.map(item => ));
  };

  useEffect(() => {
    getBanner();
  }, []);

  const toBase64 = (arr) => {
    return Buffer.from(arr);
  };
  // useEffect(async () => {
  //   const { data } = await API.get(
  //     "/api/main/swipers",
  //     {},
  //     { responseType: "blob" }
  //   );
  //   console.warn(data[0].image.data, typeof data[0].image.data);

  //   const tmp = await data.map((item) =>
  //     URL.createObjectURL(
  //       new Blob([new Uint8Array(item.image.data)], { type: "image/jpeg" })
  //     )
  //   );

  //   setImgs(tmp);
  //   console.log(tmp);

  //   setBgs(data);
  // }, []);

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
        // onSwiper={(swiper) => {}}
        // onSlideChange={() => {}}
      >
        {/* <SwiperSlide>
          <Image alt="bg0" src={"/bg.jpeg"} layout="fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="bg0" src={"/bg.jpeg"} layout="fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="bg0" src={"/bg.jpeg"} layout="fill" />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="bg0" src={"/bg.jpeg"} layout="fill" />
        </SwiperSlide> */}
        {imgs.map((bg, index) => {
          return (
            <SwiperSlide key={index}>
              <Image src={`data:image/png;base64,${bg}`} layout="fill" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </BannerContainer>
  );
};

// export async function getServerSideProps() {
//   const res = await API.get(process.env.API_URL + "/api/main/swipers", {});
//   const { data } = res;
//   console.log(res, data);

//   return {
//     props: {
//       data,
//     },
//   };
// }

export default Banner;
