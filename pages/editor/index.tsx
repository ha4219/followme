import React, { useState } from "react";
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

const RECOMMANDKEYWORD = ["동해", "통영", "해돋이"];

const Editor = () => {
  const [search, , onChangeSearch] = useInput("");
  return (
    <MainContainer maxWidth="lg">
      <Grid container>
        <LeftLayout />
        <Grid item xs={10}>
          <Box>
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
          <ProgramList />
        </Grid>
      </Grid>
    </MainContainer>
  );
};

const MainContainer = styled(Container)`
  & .searchContainer {
    border-radius: 27px;
  }
`;

export default Editor;
