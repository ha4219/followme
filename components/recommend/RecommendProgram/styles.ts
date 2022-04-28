import styled from "@emotion/styled";
import { Box } from "@mui/material";

type PhotoProps = {
  src: string;
};

export const PhotoContainer = styled(Box)<PhotoProps>`
  height: 30vh;
  background: url(${(props) => props.src}) no-repeat;
  // background-position: top 12px right 0;
  background-size: cover;
  border-radius: 10px;

  & div {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export const TopContainer = styled.div`
  top: -10px;
  position: absolute;
  right: 1px;
  display: flex;
  width: 62px;
  height: 72px;
  justify-content: right;
  z-index: 9;

  & .haertContainer {
    background-color: #f93b1d;
    width: 62px;
    height: 72px;
    padding: 24px 0;
    border-radius: 10px 10px 40px 40px;

    & .heart {
      fill: white;
      z-index: 1;
    }

    & .fillHeart {
      fill: white;
      z-index: 1;
    }
  }
`;

export const DesContainer = styled.div`
  padding: 0 1rem;

  & .title {
    display: block;
    font-weight: bold;
    font-size: 1.1rem;
  }

  & .content {
    font-family: paybooc-Light;
    display: block;
    font-size: 0.9rem;
    height: 5rem;
  }
`;

export const ContentContainer = styled(Box)`
  display: inline-flex;
  padding: 0 1rem;
  width: 100%;
  height: 100%;

  & .avatarContainer {
    height: 44px;
  }
`;

export const MainContainer = styled(Box)`
  padding-bottom: 2rem;
  position: relative;
  cursor: pointer;
  border: 1px solid #d8d8d8;
  border-radius: 10px;
  :hover {
    & .hoverImg {
      background: #323fb2b3;
    }
    color: #00a0e0;
  }
`;

export const ParentMainContainer = styled.div`
  position: relative;
`;
