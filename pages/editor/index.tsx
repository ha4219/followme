import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";
import useInput from "@hooks/useInput";
import styled from "@emotion/styled";
import EditorProgramList from "@components/editor/EditorProgramList";

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
