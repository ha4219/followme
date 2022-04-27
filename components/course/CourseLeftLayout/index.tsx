import { COURSETAGS } from "@data/CourseData";
import styled from "@emotion/styled";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC, useCallback, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LeftLayoutTag from "@components/LeftLayoutTag";

const CourseLeftLayout: FC = ({ children }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = useState("");

  const onChangeValue = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [value]
  );

  const onKeyDownValue = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        setValue("");
      }
    },
    [value]
  );

  const onSubmitValue = useCallback(
    (e) => {
      setValue("");
    },
    [value]
  );

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={3} sx={{ fontFamily: "paybooc-Medium" }}>
        <BoxContainerWrapper
          minWidth={isSmall ? "100%" : "260px"}
          maxWidth={isSmall ? "100%" : "260px"}
        >
          <Box>
            <Box>
              <TextField
                fullWidth
                value={value}
                onChange={onChangeValue}
                onKeyDown={onKeyDownValue}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={onSubmitValue}>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box py={2}>
              {COURSETAGS.map((tag, index) => (
                <LeftLayoutTag key={index} tag={tag} />
              ))}
            </Box>
          </Box>
        </BoxContainerWrapper>
      </Grid>
      <Grid item xs={12} sm={12} md={9} pl={isSmall ? "0" : "50px"}>
        {children}
      </Grid>
    </Grid>
  );
};

const BoxContainerWrapper = styled(Box)``;

const BoxContainer = styled(Box)`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span {
    font-size: 1.3rem;
  }
`;

export default CourseLeftLayout;
