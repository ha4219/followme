import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";
import useInput from "@hooks/useInput";
import styled from "@emotion/styled";
import EditorProgramList from "@components/editor/EditorProgramList";
import Image from "next/image";

interface Props {
  index: number;
  image: any;
  title: string;
  writer: string;
  date: string;
  deletedAt: string;
  heartCnt: number;
  createdAt: string;
  season: string;
  region: string;
  tags: string[];
  views: number;
}
const Editor = () => {
  return (
    <MainContainer maxWidth="lg">
      <Box className="editorPath" py={1}>
        <div className="MainContainerPathIcon">
          <Image
            src="/icons/icon.home.png"
            width="18px"
            height="18px"
            alt="homeIcon"
          />
        </div>
        <span>
          <span className="MainContainerPathColor">홈</span>
          <span className="dividor">|</span>
          {"Editor's Pick"}
        </span>
      </Box>

      <Box className="editorTitle">{"Editor's Pick"}</Box>
      <Box py={2}>
        <EditorProgramList />
      </Box>
    </MainContainer>
  );
};

const MainContainer = styled(Container)`
  & .searchContainer {
    border-radius: 27px;
  }

  & .MainContainerPathIcon {
    height: 21px;
    margin-right: 6px;
  }
  & .editorPath {
    display: flex;
    font-size: 0.9rem;
    font-family: paybooc-Medium;

    & .MainContainerPathColor {
      color: #888888;
    }
    & .dividor {
      padding: 1rem;
    }
  }
  & .editorTitle {
    font-family: paybooc-Bold;
    font-size: 2rem;
    text-align: center;
    padding-bottom: 2rem;
    border-bottom: 1px solid #000000;
  }
`;

// export async function getServerSideProps() {
//   const { data } = await API.get(process.env.API_URL + "/user/board");

//   return {
//     props: {
//       data,
//     },
//   };
// }

export default Editor;
