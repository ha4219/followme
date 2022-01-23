import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Box } from "@mui/material";

// export const PhotoContainer = styled(Box)`
//   & img {
//     border-radius: 10%;
//   }

//   & .topContainer {
//     display: flex;
//     justify-content: space-between;

//     & .avatar {
//       position: absolute;
//       z-index: 1;
//       transform: translate(1rem, 1rem);
//     }

//     & .heart {
//       position: absolute;
//       fill: white;
//       z-index: 1;
//       transform: translate(-3rem, 1rem);
//     }
//   }

//   & .description {
//     padding: 0 1rem;
//     padding-top: 1rem;

//     & .title {
//       font-weight: bold;
//       font-size: 1.2rem;
//     }
//   }
// `;

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
