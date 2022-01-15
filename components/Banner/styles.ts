import styled from "@emotion/styled";

export const BannerContainer = styled.div`
  display: flex;
  margin: 0;
  & .swiper-slide {
    height: 30rem;
    width: 10rem;
  }

  & .swiper-button-prev {
    color: white;
    margin-left: 6rem;
  }

  & .swiper-button-next {
    color: white;
    margin-right: 6rem;
  }

  & .swiper-pagination-bullet-active {
    --swiper-theme-color: white;
  }
`;
