import {
  CheckContainerDomestic,
  CheckContainerOverseas,
  CheckContainerSeason,
  CheckDetailSeason,
} from "@components/CheckContainer";
import { DOMESTIC, OVERSEAS, SEASON } from "@data/OptionData";
import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";
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
  return (
    <Grid container>
      <Grid xs={12} sm={12} md={3} item>
        <Box py={2}>
          {tags.map((tag, index) => (
            <EditorTag key={index} tag={tag} />
          ))}
        </Box>
        <Box py={2}>
          <Typography
            py={1}
            sx={{ fontFamily: "paybooc-Bold", fontSize: "1.2rem" }}
          >
            {"계절별"}
          </Typography>
          {SEASON.map((item, index) => (
            <CheckDetailSeason
              key={index}
              tag={item.name}
              value={item.value}
              checked={item.value === season}
            />
          ))}
        </Box>
        <Box py={2}>
          <Typography
            py={1}
            sx={{ fontFamily: "paybooc-Bold", fontSize: "1.2rem" }}
          >
            {"지역별(국내)"}
          </Typography>
          {DOMESTIC.map((item, index) => (
            <CheckDetailSeason
              key={index}
              tag={item.name}
              value={item.value}
              checked={item.value === region}
            />
          ))}
        </Box>
        <Box py={2}>
          <Typography
            py={1}
            sx={{ fontFamily: "paybooc-Bold", fontSize: "1.2rem" }}
          >
            {"지역별(해외)"}
          </Typography>
          {OVERSEAS.map((item, index) => (
            <CheckDetailSeason
              key={index}
              tag={item.name}
              value={item.value}
              checked={item.value === region}
            />
          ))}
        </Box>
      </Grid>
      <Grid xs={12} sm={12} md={9} item>
        {children}
      </Grid>
    </Grid>
  );
};

export default EditorDetailLeftLayout;
