import {
  CheckContainerDomestic,
  CheckContainerOverseas,
  CheckContainerSeason,
  CheckDetailSeason,
} from "@components/CheckContainer";
import { DOMESTIC, OVERSEAS, SEASON } from "@data/OptionData";
import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import EditorTag from "../EditorTag";

interface IProps {
  tags: string[];
  season: string;
  region: string;
}

const EditorDetailLeftLayout: FC<IProps> = ({
  children,
  tags,
  season,
  region,
}) => {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);

  return (
    <Grid container pr={4}>
      <Grid xs={12} sm={12} md={3} item>
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
                  <CheckDetailSeason
                    key={index}
                    tag={item.name}
                    value={item.value}
                    checked={item.value === season}
                  />
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
                  <CheckDetailSeason
                    key={index}
                    tag={item.name}
                    value={item.value}
                    checked={item.value === region}
                  />
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
                  <CheckDetailSeason
                    key={index}
                    tag={item.name}
                    value={item.value}
                    checked={item.value === region}
                  />{" "}
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
        <Box py={2}>
          {tags.map((tag, index) => (
            <EditorTag key={index} tag={tag} />
          ))}
        </Box>
      </Grid>
      <Grid xs={12} sm={12} md={9} item>
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

export default EditorDetailLeftLayout;
