import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import useInput from "@hooks/useInput";
import SearchIcon from "@mui/icons-material/Search";
import { borderRadius } from "@mui/system";
import TagContainer from "@components/TagContainer";
import ProgramList from "@components/ProgramList";
import styled from "@emotion/styled";
import LeftLayout from "@components/LeftLayout";
import { API } from "@src/API";
import axios from "axios";

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
  const [search, , onChangeSearch] = useInput("");
  const [travels, setTravels] = useState([]);
  const [sortedType, setSortedType] = useState(0);

  const getTravel = async () => {
    const { data } = await API.get("/main/travelBoards", {
      data: JSON.stringify({
        id: "admin",
      }),
    });
    setTravels(data);
  };

  useEffect(() => {
    // const data1 = JSON.stringify({
    //   id: "admin",
    // });
    // const { data } = await API.get("/user/board", {
    //   data: data1,
    // });
    // console.log(data);
    // setData(data);
    getTravel();
  }, []);

  return (
    <MainContainer maxWidth="lg">
      <Box py={2}>
        <ProgramList layout={true} />
      </Box>
    </MainContainer>
  );
};

const MainContainer = styled(Container)`
  & .searchContainer {
    border-radius: 27px;
  }
`;

const TitleContainer = styled.div`
  & .sub {
    color: gray;
  }
  & .main {
    font-size: 2rem;
    letter-spacing: -1.76px;
  }
`;
const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2.5rem;
`;
const SortedContainer = styled.div`
  display: flex;
  padding-top: 2rem;

  & .active {
    color: #ffffff;
    background-color: #000000;
  }
`;

const CustomButton = styled(Button)`
  border: 1px solid black;
  margin-left: 5px;
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
