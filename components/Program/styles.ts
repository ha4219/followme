import styled from "@emotion/styled";
import { Box } from "@mui/material";

type PhotoProps = {
  src: string;
};

export const PhotoContainer = styled(Box)<PhotoProps>`
  height: 30vh;
  background: url(${(props) => props.src}) no-repeat;
  background-size: cover;
  border-radius: 12px;

  & .topContainer {
    display: flex;
    justify-content: space-between;
    & .avatar {
      z-index: 1;
    }

    & .heart {
      fill: white;
      z-index: 1;
    }

    & .fillHeart {
      fill: red;
      z-index: 1;
    }
`;

export const DesContainer = styled(Box)`
  padding: 0 1rem;
  padding-top: 1rem;

  & .title {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;
