import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import {
  Box,
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

const RECOMMANDKEYWORD = ["동해", "통영", "해돋이"];

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
    // getTravel();
  }, []);

  return (
    <MainContainer maxWidth="lg">
      <LeftLayout>
        <Grid item xs={9}>
          <Box py={2}>
            <FormControl fullWidth>
              <OutlinedInput
                id="search"
                className="searchContainer"
                placeholder="검색어를 입력하세요."
                value={search}
                onChange={onChangeSearch}
                sx={{ borderRadius: "10px" }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon fontSize="large" />
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText>{}</FormHelperText>
            </FormControl>
            <Box
              sx={{
                display: "flex",
                mx: 5,
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              추천키워드&emsp;|&emsp;
              <TagContainer tags={RECOMMANDKEYWORD} />
            </Box>
          </Box>
          <ProgramList programs={travels} />
        </Grid>
      </LeftLayout>
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
