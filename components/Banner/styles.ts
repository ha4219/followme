import styled from "@emotion/styled";

export const BannerContainer = styled.div`
  display: flex;
  margin: 0;
  --swiper-theme-color: white;

  & .swiper-slide {
    height: 30rem;
    width: 10rem;
  }

  & .swiper-button-prev {
    color: white;
    margin-left: 3rem;
  }

  & .swiper-button-next {
    color: white;
    margin-right: 3rem;
  }

  & .swiper-pagination-bullet-active {
    --swiper-theme-color: white;
  }
`;