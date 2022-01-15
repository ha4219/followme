import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import Image from "next/image";

export const PhotoContainer = styled(Box)`
  & .title {
    font-weight: bold;
  }

  & img {
    border-radius: 10%;
  }

  & .topContainer {
    display: flex;
    justify-content: space-between;

    & .avatar {
      position: absolute;
      z-index: 1;
      transform: translate(1rem, 1rem);
    }

    & .heart {
      position: absolute;
      fill: white;
      z-index: 1;
      transform: translate(-3rem, 1rem);
    }
  }

  & .description {
    padding: 0 1rem;
  }
`;

export const TagContainer = styled(Grid)`
  & span {
    border: 1px solid #3e3e3e;
    border-radius: 1rem;
    padding: 0.3rem;
    font-size: 0.8rem;
    color: #3e3e3e;
  }
`;
