import styled from "@emotion/styled";
import { Box } from "@mui/material";

type PhotoProps = {
  src: string;
};

export const PhotoContainer = styled(Box)<PhotoProps>`
  height: 30vh;
  background: url(${(props) => props.src}) no-repeat;
  background-position: top 12px right 0;
  background-size: cover;
  border-radius: 10px;
  :hover {
    background-color: #ffffff;
    opacity: 0.6;
  }

  & .topContainer {
    display: flex;
    justify-content: right;
    
    & .haertContainer {
      background-color: #f93b1d;
      width: 62px;
      height: 72px;
      padding: 24px 0;
      border-radius: 5px 5px 40px 40px;

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
    font-size: 1.2rem;
  }

  & .content {
    display: block;
    font-size: 1rem;
  }

  :hover {
    color: #00a0e0;
  }
`;

export const ContentContainer = styled(Box)`
  display: inline-flex;
  padding: 0 1rem;
`;
