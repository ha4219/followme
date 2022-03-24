import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import {
  CheckContainerSeason,
  CheckContainerOverseas,
  CheckContainerDomestic,
} from "@components/CheckContainer";
import { FC, useCallback, useState } from "react";
// import { DATA } from "@data/LeftCheckBox";
import { useRecoilState } from "recoil";
import { tagState } from "@store/tag";
import { DOMESTIC, OVERSEAS, SEASON } from "@data/OptionData";
import { COURSETAGS } from "@data/CourseData";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import LeftLayoutTag from "@components/LeftLayoutTag";

const LeftLayout: FC = ({ children }) => {
  const [selectedTag, setSelectedTag] = useRecoilState(tagState);
  const [value, setValue] = useState("");
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const onChangeValue = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [value]
  );

  const onKeyDownValue = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        setSelectedTag(value);
        setValue("");
      }
    },
    [value]
  );

  const onSubmitValue = useCallback(
    (e) => {
      setSelectedTag(value);
      setValue("");
    },
    [value]
  );

  return (
    <Grid container py={5}>
      <Grid item xs={12} sm={12} md={3} sx={{ fontFamily: "paybooc-Medium" }}>
        <Box py={2}>
          <Box pr={2}>
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
        <Box py={2}>
          <BoxContainer onClick={() => setOpen1(!open1)}>
            <Typography
              py={1}
              sx={{ fontFamily: "paybooc-Bold", fontSize: "1.2rem" }}
            >
              {"계절별"}
            </Typography>
            <span>{open1 ? "-" : "+"}</span>
          </BoxContainer>
          {open1 && (
            <Grid container>
              {SEASON.map((item, index) => (
                <Grid key={index} item xs={6}>
                  <CheckContainerSeason tag={item.name} value={item.value} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
        <Box py={2}>
          <BoxContainer onClick={() => setOpen2(!open2)}>
            <Typography
              py={1}
              sx={{ fontFamily: "paybooc-Bold", fontSize: "1.2rem" }}
            >
              {"지역별(국내)"}
            </Typography>
            <span>{open2 ? "-" : "+"}</span>
          </BoxContainer>
          {open2 && (
            <Grid container>
              {DOMESTIC.map((item, index) => (
                <Grid item xs={6} key={index}>
                  <CheckContainerDomestic tag={item.name} value={item.value} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
        <Box py={2}>
          <BoxContainer onClick={() => setOpen3(!open3)}>
            <Typography
              py={1}
              sx={{ fontFamily: "paybooc-Bold", fontSize: "1.2rem" }}
            >
              {"지역별(해외)"}
            </Typography>
            <span>{open3 ? "-" : "+"}</span>
          </BoxContainer>
          {open3 && (
            <Grid container>
              {OVERSEAS.map((item, index) => (
                <Grid item xs={6} key={index}>
                  <CheckContainerOverseas tag={item.name} value={item.value} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={9}>
        {children}
      </Grid>
    </Grid>
  );
};

const BoxContainer = styled(Box)`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;

  & span {
    font-size: 1.3rem;
  }
`;

export default LeftLayout;
